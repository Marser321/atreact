import { Link } from 'react-router-dom';
import { Heart, Scale, ShieldCheck, Sparkles } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { GlassCard } from '../components/GlassCard';
import { trustSignals } from '../data/seed';
import heroNosotrosDesktop from '../assets/backgrounds/hero-nosotros-desktop.webp';
import heroNosotrosMobile from '../assets/backgrounds/hero-nosotros-mobile.webp';

export function Nosotros() {
  return (
    <>
      <EditorialHero
        eyebrow="Confianza y límites"
        title="Claridad documental con trato humano"
        description="Acompañamos información sensible con una idea sencilla: explicar bien, ordenar con cuidado y reconocer de frente cuándo hace falta otro canal."
        image={heroNosotrosDesktop}
        mobileImage={heroNosotrosMobile}
        accent="purple"
      >
        <Link to="/contacto" className="rounded-xl bg-[#BE0000] px-6 py-3 font-bold text-white hover:bg-[#990000]">Conocer nuestro proceso</Link>
      </EditorialHero>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Nuestra historia operativa</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Convertimos dispersión en un siguiente paso comprensible</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-on-dark-muted">
            <p>Cuando los documentos están dispersos, el proceso se siente más grande y más incierto. Nuestro trabajo comienza bajando esa ansiedad: escuchamos, clasificamos y organizamos.</p>
            <p>No prometemos resultados ni reemplazamos a un abogado. Construimos una base administrativa clara para que cada persona sepa qué tiene, qué falta y cuál es el canal responsable.</p>
          </div>
        </div>
      </section>

      <section className="relative z-20 border-y border-white/10 bg-[#08111e] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Cómo trabajamos</p>
          <div className="mt-10 grid gap-0 md:grid-cols-3">
            {[
              { icon: <Heart />, step: '01', title: 'Escuchar', body: 'Entendemos la intención, el estado real y el contexto disponible.' },
              { icon: <Sparkles />, step: '02', title: 'Ordenar', body: 'Separamos documentos, dudas, faltantes y próximos pasos administrativos.' },
              { icon: <ShieldCheck />, step: '03', title: 'Clasificar', body: 'Confirmamos si puede avanzar por apoyo administrativo o debe escalar.' },
            ].map((item, index) => (
              <div key={item.step} className={`relative p-7 ${index < 2 ? 'md:border-r md:border-white/10' : ''}`}>
                <div className="text-blue-300">{item.icon}</div>
                <span className="mt-8 block text-sm font-black text-red-300">{item.step}</span>
                <h2 className="mt-2 text-2xl font-bold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <GlassCard variant="editorial" className="p-8 md:p-12" glowColor="rgba(190,0,0,0.16)">
            <Scale className="h-12 w-12 text-red-300" />
            <h2 className="mt-6 text-3xl font-black text-white">Nuestros límites también son parte del servicio</h2>
            <p className="mt-5 leading-relaxed text-on-dark-muted">No brindamos asesoría legal, no decidimos estrategias migratorias y no representamos en corte. Si encontramos señales de complejidad, la respuesta responsable es decirlo y orientar hacia un canal autorizado.</p>
          </GlassCard>
          <div className="grid gap-4">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <span className="text-sm font-black uppercase tracking-[0.16em] text-blue-300">{signal.label}</span>
                <p className="mt-2 text-2xl font-black text-white">{signal.value}</p>
                <p className="mt-2 text-sm text-on-dark-muted">{signal.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
