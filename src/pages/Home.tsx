import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  MessageSquare,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { HomeHero } from '../components/HomeHero';
import { siteSettings } from '../data/seed';

export function Home() {
  const [quizStep, setQuizStep] = useState(0);
  const [intent, setIntent] = useState<'emprender' | 'tramites' | 'aprender' | null>(null);

  const routes = [
    {
      intent: 'emprender' as const,
      title: "Emprender",
      body: "Aprenda a ofrecer preparación administrativa con método, límites y una operación responsable.",
      cta: "Explorar ruta profesional",
      href: "/emprender",
      icon: <BriefcaseBusiness className="h-6 w-6 text-blue-300" />,
    },
    {
      intent: 'tramites' as const,
      title: "Trámites",
      body: "Identifique su necesidad, revise documentos comunes y llegue mejor preparado al siguiente paso.",
      cta: "Encontrar mi trámite",
      href: "/tramites",
      icon: <FileText className="h-6 w-6 text-red-300" />,
    },
    {
      intent: 'aprender' as const,
      title: "Aprender",
      body: "Empiece con microguías y cursos para entender, organizar y decidir con más claridad.",
      cta: "Entrar al centro educativo",
      href: "/aprender",
      icon: <BookOpen className="h-6 w-6 text-emerald-300" />,
    },
  ];

  const routeResult = intent === 'emprender'
    ? { title: 'Su siguiente paso es la ruta profesional', href: '/emprender', label: 'Ver programa profesional' }
    : intent === 'tramites'
      ? { title: 'Su siguiente paso es clasificar el trámite', href: '/tramites', label: 'Explorar trámites' }
      : { title: 'Su siguiente paso es aprender con calma', href: '/aprender', label: 'Ver recursos y cursos' };

  const whatsappHref = `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent("Hola America Tramites. Quiero clasificar mi ruta antes de avanzar.")}`;

  return (
    <>
      <HomeHero routes={routes} />

      <section className="relative z-20 border-y border-white/10 bg-[#050B14]/95 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            { icon: <Scale />, title: 'Límites visibles', body: 'No somos abogados ni reemplazamos una consulta legal.' },
            { icon: <ShieldCheck />, title: 'Clasificación responsable', body: 'Si existe complejidad legal, la ruta correcta es escalar.' },
            { icon: <MessageSquare />, title: 'Canal directo', body: 'WhatsApp permite iniciar con contexto y menos fricción.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <span className="text-blue-300">{item.icon}</span>
              <div>
                <h2 className="font-bold text-white">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-on-dark-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="quiz" className="relative z-20 mx-auto max-w-5xl px-6 py-20 scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Clasificador inicial</p>
            <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">No adivine por dónde empezar</h2>
            <p className="mt-5 text-lg leading-relaxed text-on-dark-muted">
              Responda una pregunta y entre directamente al recorrido que corresponde a su intención.
            </p>
          </div>

          <GlassCard variant="elevated" className="p-7 md:p-10" glowColor="rgba(59,130,246,0.18)">
            {quizStep === 0 ? (
              <div>
                <h3 className="text-2xl font-bold text-white">¿Qué necesita lograr hoy?</h3>
                <div className="mt-6 grid gap-3">
                  {routes.map((route) => (
                    <button
                      key={route.title}
                      type="button"
                      onClick={() => {
                        setIntent(route.intent);
                        setQuizStep(1);
                      }}
                      className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 text-left font-semibold text-slate-100 transition hover:border-blue-300/50 hover:bg-white/10"
                    >
                      {route.icon}
                      {route.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-400" />
                <h3 className="mt-5 text-2xl font-bold text-white">{routeResult.title}</h3>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link to={routeResult.href} className="rounded-xl bg-[#BE0000] px-6 py-3 font-bold text-white hover:bg-[#990000]">
                    {routeResult.label}
                  </Link>
                  <button type="button" onClick={() => setQuizStep(0)} className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10">
                    Elegir otra ruta
                  </button>
                </div>
              </div>
            )}
          </GlassCard>
        </div>
      </section>

      <section className="relative z-20 px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-400/20 bg-gradient-to-br from-red-500/10 to-blue-500/10 p-8 text-center md:p-12">
          <h2 className="text-3xl font-black text-white">¿Todavía no está seguro?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-dark-muted">Cuéntenos el contexto general y le ayudaremos a separar formación, apoyo administrativo o derivación responsable.</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-xl bg-[#BE0000] px-7 py-4 font-bold text-white hover:bg-[#990000]">
            Clasificar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
