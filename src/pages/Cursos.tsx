import { courses } from '../data/courses';
import { GlassCard } from '../components/GlassCard';
import { PremiumPageHero } from '../components/PremiumPageHero';
import { CtaBand } from '../components/CtaBand';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

// Import background WebP scenes
import webEducationScene from '../assets/backgrounds/web-education-scene.webp';
import webConversionScene from '../assets/backgrounds/web-conversion-scene.webp';

export function Cursos() {
  const audienceProfiles = [
    {
      title: "Personas que están empezando",
      body: "Necesitan contexto, vocabulario claro y una lista simple de qué reunir primero.",
    },
    {
      title: "Personas con documentos dispersos",
      body: "Ya tienen soportes, pero no saben cómo ordenarlos ni qué falta por revisar.",
    },
    {
      title: "Personas que quieren llegar mejor a orientación",
      body: "Buscan una capa educativa previa para que el siguiente contacto sea más útil y más rápido.",
    },
  ];

  const methodology = [
    "Clases introductorias con lenguaje simple y foco administrativo.",
    "Tarjetas de apoyo y materiales base que facilitan la lectura.",
    "Una salida clara hacia contacto o próxima cohorte según el caso.",
  ];

  return (
    <>
      <PremiumPageHero
        eyebrow="Cursos y formaciones"
        title="Aprenda a preparar su carpeta antes de dar el siguiente paso"
        description="Descubra formaciones pensadas para ayudarle a reunir documentos, aclarar dudas y llegar mejor preparado a su próxima orientación."
        intent="education"
      />

      {/* PERFILES DE PUBLICO */}
      <section className="w-full relative py-16 overflow-hidden z-20 border-b border-white/5 bg-[#050B14]">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Para quién está pensado</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Estas formaciones están pensadas para personas que necesitan entender mejor su trámite, ordenar soportes y avanzar con más seguridad.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audienceProfiles.map((profile, index) => (
              <GlassCard key={index} glowColor="rgba(59, 130, 246, 0.1)" className="p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">Perfil 0{index + 1}</p>
                <h3 className="text-xl font-bold text-white mb-3">{profile.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{profile.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGO DE CURSOS */}
      <section className="w-full relative py-24 overflow-hidden z-20 border-b border-white/5">
        {/* Background WebP */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] mix-blend-overlay"
            style={{ backgroundImage: `url(${webEducationScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Formaciones Disponibles</h2>
            <p className="text-slate-400">Revise el enfoque de cada curso, vea su formato y elija la opción que mejor se adapte al momento en que se encuentra.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <GlassCard key={index} className="p-8 flex flex-col justify-between h-full" glowColor="rgba(190,0,0,0.1)">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 border border-red-500/25 px-3 py-1 rounded-full">
                      {course.status}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {course.format}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{course.summary}</p>
                </div>

                <Link
                  to={course.ctaHref}
                  className="w-full py-3 bg-[#BE0000] hover:bg-[#990000] text-white font-bold rounded-xl shadow-[0_4px_12px_rgba(190,0,0,0.3)] text-center transition-all inline-block text-sm"
                >
                  {course.ctaLabel}
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="w-full relative py-20 overflow-hidden z-20 border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8 md:p-12" glowColor="rgba(255,255,255,0.02)">
              <h3 className="text-3xl font-extrabold text-white mb-4">Metodología</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Cada curso busca que usted entienda qué reunir, cómo organizarlo y qué preguntas llevar antes de tomar el siguiente paso.
              </p>
              <div className="flex items-center gap-4 text-blue-400">
                <GraduationCap size={40} className="stroke-[1.5]" />
                <div>
                  <h4 className="font-bold text-white text-base">Enfoque Administrativo</h4>
                  <p className="text-slate-500 text-xs">Explicaciones claras y sin tecnicismos innecesarios.</p>
                </div>
              </div>
            </GlassCard>

            <div className="grid gap-4">
              {methodology.map((item, index) => (
                <GlassCard key={index} className="p-6" glowColor="rgba(59, 130, 246, 0.05)">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">
                      0{index + 1}
                    </span>
                    <p className="text-slate-300 text-sm md:text-base font-semibold">{item}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
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
          eyebrow="Consulta e inscripción"
          title="Si quiere saber cuál formación le conviene, conversemos primero"
          description="Cuéntenos qué trámite quiere preparar y le indicaremos qué curso o próxima cohorte puede ayudarle a llegar con mayor claridad."
          ctaLabel="Consultar cursos"
          ctaHref="/contacto"
        />
      </section>
    </>
  );
}
