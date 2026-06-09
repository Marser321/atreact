import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { GlassCard } from '../components/GlassCard';
import { courses } from '../data/courses';
import type { JourneyIntent } from '../data/journeys';
import { services, siteSettings } from '../data/seed';
import webConversionScene from '../assets/backgrounds/web-conversion-scene.webp';

const routeCopy: Record<JourneyIntent, { title: string; instruction: string; accent: string }> = {
  emprender: {
    title: 'Ruta profesional',
    instruction: 'Cuéntenos su experiencia actual y qué quiere construir con la formación.',
    accent: 'text-blue-300',
  },
  tramites: {
    title: 'Apoyo con trámites',
    instruction: 'Indique el trámite, los documentos disponibles y cualquier fecha importante.',
    accent: 'text-red-300',
  },
  aprender: {
    title: 'Centro educativo',
    instruction: 'Díganos qué quiere entender u organizar para recomendar una guía o formación.',
    accent: 'text-emerald-300',
  },
};

export function Contacto() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedRoute = searchParams.get('ruta');
  const route: JourneyIntent = requestedRoute === 'emprender' || requestedRoute === 'tramites' || requestedRoute === 'aprender'
    ? requestedRoute
    : 'tramites';
  const topic = searchParams.get('tema') ?? '';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const topicLabel = useMemo(() => {
    if (!topic) return '';
    return services.find((service) => service.slug === topic)?.title
      ?? courses.find((course) => course.slug === topic)?.title
      ?? (topic === 'programa' ? 'Programa profesional' : topic);
  }, [topic]);

  const whatsappMessage = encodeURIComponent(`Hola America Tramites. Quiero continuar por la ruta ${routeCopy[route].title}${topicLabel ? ` sobre ${topicLabel}` : ''}.`);
  const whatsappHref = `https://wa.me/${siteSettings.whatsapp}?text=${whatsappMessage}`;

  return (
    <>
      <EditorialHero
        eyebrow="Contacto contextual"
        title="Llegue con una ruta elegida y avance con menos fricción"
        description="El formulario se adapta a la intención seleccionada para que la primera conversación empiece con mejor contexto."
        image={webConversionScene}
        accent="red"
        compact
      />

      <section className="relative z-20 mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Su ruta seleccionada</p>
              <h2 className="mt-3 text-3xl font-black text-white">{routeCopy[route].title}</h2>
              {topicLabel && <p className={`mt-2 font-bold ${routeCopy[route].accent}`}>{topicLabel}</p>}
              <p className="mt-4 leading-relaxed text-on-dark-muted">{routeCopy[route].instruction}</p>
            </div>

            <div className="grid gap-3">
              {(['emprender', 'tramites', 'aprender'] as JourneyIntent[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSearchParams({ ruta: item });
                  }}
                  aria-pressed={route === item}
                  className={`rounded-xl border p-4 text-left font-bold transition ${route === item ? 'border-blue-300/50 bg-blue-400/12 text-white' : 'border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/[0.07]'}`}
                >
                  {routeCopy[item].title}
                </button>
              ))}
            </div>

            <GlassCard variant="editorial" className="p-6">
              <h3 className="font-bold text-white">Canales directos</h3>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-3 text-emerald-300 hover:text-emerald-200">
                <MessageSquare className="h-5 w-5" /> WhatsApp
              </a>
              <a href={`tel:${siteSettings.phone}`} className="mt-4 flex items-center gap-3 text-blue-300 hover:text-blue-200">
                <Phone className="h-5 w-5" /> {siteSettings.phone}
              </a>
              <p className="mt-5 text-sm leading-relaxed text-on-dark-muted">{siteSettings.hours}<br />{siteSettings.address}</p>
            </GlassCard>
          </aside>

          <GlassCard variant="elevated" className="relative overflow-hidden p-7 md:p-10" glowColor="rgba(190,0,0,0.14)">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key={`${route}-${topic}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (formData.name && formData.phone) setIsSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <p className={`text-sm font-black uppercase tracking-[0.16em] ${routeCopy[route].accent}`}>{routeCopy[route].title}</p>
                    <h2 className="mt-3 text-3xl font-black text-white">Cuéntenos el contexto básico</h2>
                    <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{routeCopy[route].instruction}</p>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-slate-200">
                      Nombre completo
                      <input required name="name" autoComplete="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white" placeholder="Ej. Juan Pérez" />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-200">
                      Teléfono
                      <input required name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white" placeholder="Ej. (305) 555-0199" />
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-semibold text-slate-200">
                    Contexto inicial
                    <textarea value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="min-h-40 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder={routeCopy[route].instruction} />
                  </label>
                  <div className="flex gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="text-sm leading-relaxed text-on-dark-muted">Este contacto sirve para clasificar y orientar el siguiente paso administrativo o de derivación responsable. No brinda asesoría legal.</p>
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-[#BE0000] px-6 py-4 font-bold text-white hover:bg-[#990000]">Solicitar clasificación inicial</button>
                </motion.form>
              ) : (
                <motion.div key="success" role="status" aria-live="polite" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="py-14 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-400" />
                  <h2 className="mt-6 text-3xl font-black text-white">Su contexto quedó clasificado</h2>
                  <p className="mx-auto mt-4 max-w-lg leading-relaxed text-on-dark-muted">Gracias, {formData.name}. Recibimos su solicitud para {routeCopy[route].title.toLowerCase()}{topicLabel ? ` sobre ${topicLabel}` : ''}.</p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">Continuar por WhatsApp</a>
                    <button type="button" onClick={() => setIsSubmitted(false)} className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10">Editar información</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
