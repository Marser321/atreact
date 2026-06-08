import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { services } from '../data/seed';
import type { Service } from '../data/seed';
import { GlassCard } from '../components/GlassCard';
import { PremiumPageHero } from '../components/PremiumPageHero';
import { CtaBand } from '../components/CtaBand';
import { FileText, ArrowRight, X, ChevronRight } from 'lucide-react';

// Import background WebP scenes
import webCatalogScene from '../assets/backgrounds/web-catalog-scene.webp';
import webConversionScene from '../assets/backgrounds/web-conversion-scene.webp';

export function Servicios() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const serviceTracks = [
    {
      title: "Trámites migratorios",
      body: "Casos donde el mayor valor está en reunir soportes, identificar vacíos y ordenar la carpeta antes de avanzar.",
    },
    {
      title: "Permisos y renovaciones",
      body: "Procesos que necesitan atención a fechas, documentos previos, recibos y consistencia administrativa.",
    },
    {
      title: "Gestión empresarial inicial",
      body: "Escenarios donde conviene ordenar datos del negocio, responsables y documentos base desde el comienzo.",
    },
  ];

  const serviceBenefits = [
    "Menos tiempo reconstruyendo documentos dispersos.",
    "Más claridad sobre qué llevar a una orientación inicial.",
    "Un recorrido visual que ayuda a comparar trámites sin perderse.",
  ];

  const processFlow = [
    {
      step: "01",
      title: "Revise el tipo de trámite",
      body: "Cada bloque presenta una puerta de entrada distinta según el momento del caso.",
    },
    {
      step: "02",
      title: "Identifique qué documentos suelen aparecer",
      body: "Las tarjetas y páginas detalle agrupan soportes frecuentes para bajar la incertidumbre inicial.",
    },
    {
      step: "03",
      title: "Pase a orientación solo cuando ya tenga contexto",
      body: "El objetivo es que la acción final se sienta lógica, no apurada.",
    },
  ];

  return (
    <>
      <PremiumPageHero
        eyebrow="Servicios"
        title="Elija el trámite que necesita ordenar"
        description="Revise el servicio que mejor se ajusta a su caso, entienda qué puede preparar y avance con una orientación inicial más enfocada."
        intent="catalog"
      />

      {/* MAPA DE NECESIDADES */}
      <section className="relative z-20 bg-[#050B14] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Tres tipos de recorrido para ordenar mejor su caso</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">En vez de mostrar una lista plana, organizamos los servicios como familias de necesidades para que la navegación tenga más sentido desde el principio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceTracks.map((track, index) => (
              <GlassCard key={index} glowColor="rgba(59, 130, 246, 0.1)" className="p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">Ruta 0{index + 1}</p>
                <h3 className="text-xl font-bold text-white mb-3">{track.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{track.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full relative py-24 overflow-hidden z-20 border-b border-white/5">
        {/* Background WebP */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] mix-blend-overlay"
            style={{ backgroundImage: `url(${webCatalogScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Servicios Disponibles</h2>
            <p className="text-slate-400">Cada tarjeta está pensada para decidir, no solo para listar. Haz clic en una para ver detalles.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer"
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between hover:scale-[1.02] active:scale-[0.98]" glowColor="rgba(190,0,0,0.1)">
                  <div>
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/10 text-red-500">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{service.summary}</p>
                  </div>
                  <span className="inline-flex items-center text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Ver Requisitos <ChevronRight size={14} className="ml-1" />
                  </span>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA / BENEFICIOS */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-8 md:p-10" glowColor="rgba(255,255,255,0.02)">
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">Qué mejora con este enfoque</h3>
            <p className="text-slate-400 mb-8">Cuando entiende mejor su trámite, resulta más fácil reunir soportes, detectar faltantes y aprovechar la orientación inicial.</p>
            <ul className="space-y-4">
              {serviceBenefits.map((benefit, idx) => (
                <li key={idx} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-slate-300 text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <div className="grid gap-4">
            {processFlow.map((item, index) => (
              <GlassCard key={index} className="p-6" glowColor="rgba(59, 130, 246, 0.05)">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{item.step}</span>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="w-full relative py-12 overflow-hidden z-20">
        {/* Background WebP */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-overlay"
            style={{ backgroundImage: `url(${webConversionScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>
        <CtaBand
          eyebrow="Orientación"
          title="Si ya reconoce su tipo de trámite, demos el siguiente paso"
          description="Podemos indicarle cómo empezar a ordenar sus documentos y qué información conviene llevar a la primera conversación."
          ctaLabel="Solicitar orientación"
          ctaHref="/contacto"
        />
      </section>

      {/* DETAIL MODAL WITH FRAMER MOTION */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#050B14] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              >
                <X size={18} />
              </button>

              <h3 className="text-3xl font-extrabold text-white mb-2">{selectedService.title}</h3>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-6">{selectedService.seoTitle}</p>

              <p className="text-slate-300 mb-6 leading-relaxed">{selectedService.summary}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Detalle del servicio</h4>
                  <ul className="space-y-2 text-slate-400 text-xs">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Documentos comunes</h4>
                  <ul className="space-y-2 text-slate-400 text-xs">
                    {selectedService.commonDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/contacto"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 bg-[#BE0000] text-white font-bold rounded-xl hover:bg-[#990000] transition-all inline-flex items-center text-sm"
                >
                  Consultar sobre este servicio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
