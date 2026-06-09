import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ChevronRight, FileCheck2, FileText, RefreshCcw, X } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { GlassCard } from '../components/GlassCard';
import { services } from '../data/seed';
import type { Service } from '../data/seed';
import webDocumentSuite from '../assets/backgrounds/web-document-suite.webp';

type ServiceCategory = Service['category'] | 'todos';

const categoryOptions: { value: ServiceCategory; label: string; icon: React.ReactNode }[] = [
  { value: 'todos', label: 'Todos', icon: <FileCheck2 /> },
  { value: 'migratorios', label: 'Migratorios', icon: <FileText /> },
  { value: 'renovaciones', label: 'Permisos y renovaciones', icon: <RefreshCcw /> },
  { value: 'negocios', label: 'Negocios', icon: <Building2 /> },
];

export function Servicios() {
  const [category, setCategory] = useState<ServiceCategory>('todos');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const filteredServices = category === 'todos' ? services : services.filter((service) => service.category === category);

  useEffect(() => {
    if (!selectedService) return;
    previouslyFocusedRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedService(null);
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const elements = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [selectedService]);

  return (
    <>
      <EditorialHero
        eyebrow="Selector de trámites"
        title="Encuentre qué necesita ordenar antes de avanzar"
        description="Compare tipos de apoyo administrativo, revise documentos comunes y llegue a la conversación inicial con mejor contexto."
        image={webDocumentSuite}
        accent="red"
      >
        <a href="#selector" className="rounded-xl bg-[#BE0000] px-6 py-3 font-bold text-white hover:bg-[#990000]">Usar selector</a>
        <Link to="/contacto?ruta=tramites" className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/15">Consultar mi caso</Link>
      </EditorialHero>

      <section id="selector" className="relative z-20 mx-auto max-w-7xl px-6 py-16 scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">Paso 1</p>
            <h2 className="mt-3 text-4xl font-black text-white">Elija una familia</h2>
            <p className="mt-4 leading-relaxed text-on-dark-muted">Filtre por el tipo de necesidad. Luego abra un trámite para revisar alcance y documentos frecuentes.</p>
            <div className="mt-7 grid gap-3">
              {categoryOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCategory(option.value)}
                  aria-pressed={category === option.value}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left font-bold transition ${category === option.value ? 'border-red-300/50 bg-red-400/12 text-white' : 'border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/[0.07]'}`}
                >
                  <span className="h-5 w-5">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </aside>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Paso 2</p>
                <h2 className="mt-2 text-3xl font-black text-white">Revise sus opciones</h2>
              </div>
              <span className="text-sm text-on-dark-muted">
                {filteredServices.length} {filteredServices.length === 1 ? 'opción' : 'opciones'}
              </span>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {filteredServices.map((service) => (
                <button key={service.slug} type="button" onClick={() => setSelectedService(service)} aria-haspopup="dialog" className="rounded-[2rem] text-left">
                  <GlassCard variant="editorial" className="flex h-full flex-col justify-between p-7 hover:scale-[1.01]" glowColor="rgba(190,0,0,0.14)">
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-red-300">{service.category}</span>
                      <h3 className="mt-4 text-2xl font-bold text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">{service.summary}</p>
                    </div>
                    <span className="mt-7 inline-flex items-center font-bold text-blue-300">Ver alcance y documentos <ChevronRight className="ml-1 h-4 w-4" /></span>
                  </GlassCard>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 border-y border-white/10 bg-[#08111e] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Antes de contactar</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black text-white">Prepare una conversación más útil</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ['01', 'Identifique el trámite', 'Anote qué proceso desea ordenar y qué fecha importa.'],
              ['02', 'Reúna lo disponible', 'Separe identidad, recibos, formularios y evidencias.'],
              ['03', 'Detecte complejidad', 'Si existe corte, detención, deportación o antecedentes, indíquelo desde el inicio.'],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <span className="font-black text-red-300">{step}</span>
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-dialog-title"
              aria-describedby="service-dialog-description"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/20 bg-[var(--color-surface-dark-elevated)] p-8 shadow-2xl md:p-10"
            >
              <button ref={closeButtonRef} type="button" onClick={() => setSelectedService(null)} aria-label="Cerrar detalles del servicio" className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 hover:bg-white/10 hover:text-white"><X /></button>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-red-300">{selectedService.category}</p>
              <h2 id="service-dialog-title" className="mt-3 pr-12 text-3xl font-black text-white">{selectedService.title}</h2>
              <p id="service-dialog-description" className="mt-4 leading-relaxed text-on-dark-muted">{selectedService.summary}</p>
              <div className="mt-8 grid gap-7 md:grid-cols-2">
                <div>
                  <h3 className="font-bold text-white">Qué podemos ordenar</h3>
                  <ul className="mt-4 space-y-3 text-sm text-on-dark-muted">{selectedService.details.map((item) => <li key={item} className="border-l-2 border-red-400/50 pl-3">{item}</li>)}</ul>
                </div>
                <div>
                  <h3 className="font-bold text-white">Documentos comunes</h3>
                  <ul className="mt-4 space-y-3 text-sm text-on-dark-muted">{selectedService.commonDocuments.map((item) => <li key={item} className="border-l-2 border-blue-400/50 pl-3">{item}</li>)}</ul>
                </div>
              </div>
              <Link to={`/contacto?ruta=tramites&tema=${selectedService.slug}`} onClick={() => setSelectedService(null)} className="mt-9 inline-flex items-center rounded-xl bg-[#BE0000] px-6 py-4 font-bold text-white hover:bg-[#990000]">
                Consultar este trámite <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
