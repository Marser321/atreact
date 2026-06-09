import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BriefcaseBusiness, ChevronDown, GraduationCap } from 'lucide-react';
import { EditorialHero } from '../components/EditorialHero';
import { GlassCard } from '../components/GlassCard';
import { courses } from '../data/courses';
import { learningResources } from '../data/journeys';
import type { LearningResource } from '../data/journeys';
import webEducationScene from '../assets/backgrounds/web-education-scene.webp';

type LearningGoal = 'todos' | 'entender' | 'organizar';

export function Cursos() {
  const [goal, setGoal] = useState<LearningGoal>('todos');
  const [openResource, setOpenResource] = useState<string | null>(learningResources[0].slug);
  const filteredCourses = goal === 'todos' ? courses : courses.filter((course) => course.goal === goal);

  return (
    <>
      <EditorialHero
        eyebrow="Centro educativo"
        title="Aprenda primero. Decida con más claridad después."
        description="Explore microguías gratuitas para empezar y formaciones guiadas para organizar documentos con acompañamiento."
        image={webEducationScene}
        accent="green"
      >
        <a href="#microguias" className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">Empezar gratis</a>
        <a href="#cursos" className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/15">Ver cursos</a>
      </EditorialHero>

      <section id="microguias" className="relative z-20 mx-auto max-w-7xl px-6 py-16 scroll-mt-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Microguías gratuitas</p>
            <h2 className="mt-3 text-4xl font-black text-white">Una idea útil en pocos minutos</h2>
            <p className="mt-5 leading-relaxed text-on-dark-muted">Abra una guía, revise sus puntos clave y use lo aprendido para preparar mejor su siguiente conversación.</p>
          </div>
          <div className="space-y-4">
            {learningResources.map((resource: LearningResource) => {
              const isOpen = openResource === resource.slug;
              return (
                <GlassCard key={resource.slug} variant="editorial" className="overflow-hidden">
                  <button id={`resource-trigger-${resource.slug}`} type="button" onClick={() => setOpenResource(isOpen ? null : resource.slug)} aria-expanded={isOpen} aria-controls={`resource-${resource.slug}`} className="flex w-full items-center justify-between gap-5 p-6 text-left">
                    <span>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">{resource.level}</span>
                      <span className="mt-2 block text-xl font-bold text-white">{resource.title}</span>
                      <span className="mt-2 block text-sm text-on-dark-muted">{resource.summary}</span>
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-blue-300 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div id={`resource-${resource.slug}`} role="region" aria-labelledby={`resource-trigger-${resource.slug}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/10 px-6 pb-6 pt-5">
                        <ul className="space-y-3">
                          {resource.takeaways.map((item) => <li key={item} className="border-l-2 border-emerald-400/50 pl-4 text-sm leading-relaxed text-slate-200">{item}</li>)}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cursos" className="relative z-20 border-y border-white/10 bg-[#08111e] px-6 py-20 scroll-mt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Formaciones guiadas</p>
              <h2 className="mt-3 text-4xl font-black text-white">Cuando quiere avanzar acompañado</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                ['todos', 'Todos'],
                ['entender', 'Entender'],
                ['organizar', 'Organizar'],
              ].map(([value, label]) => (
                <button key={value} type="button" onClick={() => setGoal(value as LearningGoal)} aria-pressed={goal === value} className={`rounded-full border px-4 py-2 text-sm font-bold ${goal === value ? 'border-blue-300/50 bg-blue-400/15 text-white' : 'border-white/10 bg-white/5 text-slate-300'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filteredCourses.map((course) => (
              <div key={course.slug} className="flex flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-7">
                <span className="w-fit rounded-full border border-red-400/25 bg-red-400/10 px-3 py-1 text-xs font-black uppercase text-red-300">{course.status}</span>
                <h3 className="mt-5 text-2xl font-bold text-white">{course.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-on-dark-muted">{course.summary}</p>
                <p className="mt-5 text-sm font-semibold text-blue-300">{course.format}</p>
                <Link to={`/contacto?ruta=aprender&tema=${course.slug}`} className="mt-6 inline-flex items-center font-bold text-white hover:text-blue-300">{course.ctaLabel}<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-20">
        <GlassCard variant="elevated" className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center" glowColor="rgba(190,0,0,0.16)">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">Ruta avanzada</p>
            <h2 className="mt-3 text-4xl font-black text-white">¿Quiere aprender para ofrecer servicios?</h2>
            <p className="mt-5 leading-relaxed text-on-dark-muted">La ruta profesional de Emprender profundiza en intake, checklists, operación y límites responsables.</p>
            <Link to="/emprender" className="mt-7 inline-flex items-center rounded-xl bg-[#BE0000] px-6 py-4 font-bold text-white hover:bg-[#990000]">Ver ruta profesional <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="flex justify-center gap-5 text-blue-300">
            <BookOpen className="h-16 w-16" />
            <GraduationCap className="h-16 w-16" />
            <BriefcaseBusiness className="h-16 w-16" />
          </div>
        </GlassCard>
      </section>
    </>
  );
}
