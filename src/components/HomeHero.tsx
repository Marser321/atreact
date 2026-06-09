import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';

type IntentRoute = {
  title: string;
  body: string;
  cta: string;
  href: string;
  icon: ReactNode;
};

type HomeHeroProps = {
  routes: IntentRoute[];
};

export function HomeHero({ routes }: HomeHeroProps) {
  return (
    <section className="relative z-20 max-w-6xl mx-auto pt-36 pb-24 md:pb-28 px-4 md:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="editorial-glass space-y-8 rounded-[2rem] p-5 sm:p-8 md:p-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/25 text-blue-100 rounded-full text-sm font-bold">
          Spanish-first • WhatsApp directo • Limites legales visibles
        </div>

        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            America Tramites
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-semibold">
            Dos rutas claras para la comunidad hispana: aprende a preparar formularios migratorios con responsabilidad o recibe apoyo administrativo para ordenar tu tramite sin confundirlo con asesoria legal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          {routes.map((route) => (
            <Link key={route.title} to={route.href} className="block h-full rounded-[2rem]">
              <GlassCard variant="editorial" className="p-6 h-full hover:scale-[1.01] active:scale-[0.99]" glowColor="rgba(59,130,246,0.18)">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center shrink-0">
                    {route.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white mb-2">{route.title}</h2>
                    <p className="text-sm text-slate-200 font-semibold leading-relaxed mb-4">{route.body}</p>
                    <span className="inline-flex items-center text-sm font-black text-red-300 uppercase">
                      {route.cta}
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
