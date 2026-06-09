import { Link } from 'react-router-dom';
import { BookOpen, BriefcaseBusiness, ClipboardCheck, MessageSquare, ShieldCheck } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { GlassCard } from '../components/GlassCard';
import { programWeeks } from '../data/journeys';
import heroEmprenderDesktop from '../assets/backgrounds/hero-emprender-desktop.webp';
import heroEmprenderMobile from '../assets/backgrounds/hero-emprender-mobile.webp';

export function Emprender() {
  const deliverables = [
    { icon: <BookOpen />, title: 'Ruta guiada', body: 'Seis semanas para construir criterio y método administrativo.' },
    { icon: <ClipboardCheck />, title: 'Kit operativo', body: 'Checklists, intake y estructura para organizar expedientes.' },
    { icon: <ShieldCheck />, title: 'Límites claros', body: 'Lenguaje responsable para saber cuándo ayudar y cuándo escalar.' },
  ];

  return (
    <>
      <EditorialHero
        eyebrow="Ruta profesional"
        title="Convierta organización y servicio en una práctica responsable"
        description="Aprenda a preparar información y formularios administrativos con método, precisión y límites claros para servir mejor a su comunidad."
        image={heroEmprenderDesktop}
        mobileImage={heroEmprenderMobile}
        accent="blue"
      >
        <Link to="/contacto?ruta=emprender&tema=programa" className="rounded-xl bg-[#BE0000] px-6 py-3 font-bold text-white hover:bg-[#990000]">
          Consultar próxima cohorte
        </Link>
        <a href="#programa" className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/15">
          Ver roadmap
        </a>
      </EditorialHero>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <GlassCard key={item.title} variant="editorial" className="p-7">
              <div className="text-blue-300">{item.icon}</div>
              <h2 className="mt-5 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{item.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="programa" className="relative z-20 border-y border-white/10 bg-[#08111e] px-6 py-20 scroll-mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Roadmap profesional</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">Seis semanas, un criterio operativo</h2>
            <p className="mt-5 text-lg text-on-dark-muted">Cada etapa produce un resultado práctico y prepara la siguiente.</p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {programWeeks.map((week, index) => (
              <li key={week.title} className="relative rounded-2xl border border-white/12 bg-white/[0.035] p-6">
                <span className="text-sm font-black text-red-300">SEMANA {String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{week.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{week.outcome}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Perfil adecuado</p>
            <h2 className="mt-3 text-4xl font-black text-white">Para personas que quieren trabajar con orden y servicio</h2>
            <div className="mt-8 space-y-3">
              {[
                'Quiere desarrollar una habilidad práctica para apoyar a la comunidad.',
                'Ya trabaja en servicios comunitarios, taxes, seguros, traducción o atención al cliente.',
                'Está dispuesto a documentar, revisar datos y comunicar límites con honestidad.',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4 text-slate-200">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" /> {item}
                </div>
              ))}
            </div>
          </div>
          <GlassCard variant="elevated" className="p-8 md:p-10" glowColor="rgba(190,0,0,0.16)">
            <BriefcaseBusiness className="h-12 w-12 text-red-300" />
            <h2 className="mt-6 text-3xl font-black text-white">El resultado no es memorizar formularios</h2>
            <p className="mt-5 leading-relaxed text-on-dark-muted">Es construir una forma de recibir información, detectar faltantes, preparar carpetas y reconocer cuándo el caso necesita otro canal.</p>
            <Link to="/contacto?ruta=emprender&tema=programa" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#BE0000] px-6 py-4 font-bold text-white hover:bg-[#990000]">
              <MessageSquare className="h-5 w-5" /> Hablar sobre el programa
            </Link>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
