import { trustSignals } from '../data/seed';
import { GlassCard } from '../components/GlassCard';
import { PremiumPageHero } from '../components/PremiumPageHero';
import { CtaBand } from '../components/CtaBand';
import { Star, ShieldCheck, Heart } from 'lucide-react';

// Import background WebP scenes
import webTrustScene from '../assets/backgrounds/web-trust-scene.webp';
import webConversionScene from '../assets/backgrounds/web-conversion-scene.webp';

export function Nosotros() {
  const principles = [
    {
      title: "Claridad antes que complejidad",
      body: "Si la persona no entiende qué está viendo, el diseño no está ayudando al proceso.",
      icon: <Star className="text-yellow-500 w-6 h-6" />
    },
    {
      title: "Trato humano en información sensible",
      body: "Trabajamos con temas donde el tono y la contención importan tanto como la claridad.",
      icon: <Heart className="text-red-500 w-6 h-6" />
    },
    {
      title: "Honestidad sobre el alcance",
      body: "Explicamos con transparencia qué parte del proceso es administrativa y cuándo conviene consultar apoyo legal.",
      icon: <ShieldCheck className="text-green-500 w-6 h-6" />
    },
  ];

  const workStyle = [
    "Escuchamos el tipo de trámite y el estado real del caso.",
    "Ordenamos documentos, dudas y próximos pasos administrativos.",
    "Buscamos que la persona llegue a la orientación con menos ansiedad y más contexto.",
  ];

  return (
    <>
      <PremiumPageHero
        eyebrow="Nosotros"
        title="Claridad documental con trato humano"
        description="Acompañamos a personas y familias que necesitan ordenar información sensible con un trato claro, cercano y profesional."
        intent="trust"
      />

      {/* QUIENES SOMOS */}
      <section className="w-full relative py-24 overflow-hidden z-20 border-b border-white/5 bg-[#050B14]">
        {/* Background WebP */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.14] mix-blend-overlay"
            style={{ backgroundImage: `url(${webTrustScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <GlassCard className="p-8 md:p-12" glowColor="rgba(59, 130, 246, 0.1)">
              <h2 className="text-3xl font-extrabold text-white mb-6">Quiénes somos</h2>
              <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-wider">Un equipo para convertir confusión en una carpeta clara</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                America Tramites parte de una idea simple: cuando los documentos están dispersos, el proceso se siente más grande de lo que debería. Nuestro rol es ayudarle a organizar información sensible con lenguaje claro y expectativas honestas.
              </p>
            </GlassCard>

            <div className="grid gap-4">
              {workStyle.map((item, index) => (
                <GlassCard key={index} className="p-6" glowColor="rgba(255,255,255,0.02)">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Enfoque 0{index + 1}</p>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{item}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METRICAS / TRUST SIGNALS */}
      <section className="w-full relative py-16 overflow-hidden z-20 border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => (
              <GlassCard key={index} className="p-8 text-center" glowColor="rgba(190,0,0,0.1)">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1 block">{signal.label}</span>
                <h4 className="text-4xl font-black text-white mb-3 tracking-tight">{signal.value}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{signal.note}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="w-full relative py-20 overflow-hidden z-20 border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tres reglas que sostienen la experiencia</h2>
            <p className="text-slate-400">Nuestro trabajo parte de una misma base: explicar con claridad, ordenar sin complicar y acompañar cada caso con criterio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <GlassCard key={index} className="p-8" glowColor="rgba(255,255,255,0.02)">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{principle.body}</p>
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
          eyebrow="Conversación inicial"
          title="Si quiere entender cómo trabajamos con su información, empecemos por su caso"
          description="Podemos indicarle cómo ordenar sus documentos y qué esperar de una orientación administrativa clara y bien enfocada."
          ctaLabel="Hablar con el equipo"
          ctaHref="/contacto"
        />
      </section>
    </>
  );
}
