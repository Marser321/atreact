import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  accent?: 'blue' | 'red' | 'green' | 'purple';
  compact?: boolean;
  children?: ReactNode;
};

const accentClasses = {
  blue: 'border-blue-300/45 bg-blue-400/15 text-blue-100',
  red: 'border-red-300/45 bg-red-400/15 text-red-100',
  green: 'border-emerald-300/45 bg-emerald-400/15 text-emerald-100',
  purple: 'border-violet-300/45 bg-violet-400/15 text-violet-100',
};

export function EditorialHero({
  eyebrow,
  title,
  description,
  image,
  mobileImage,
  accent = 'blue',
  compact = false,
  children,
}: EditorialHeroProps) {
  return (
    <section className={`relative z-20 mx-auto max-w-7xl px-4 md:px-6 ${compact ? 'pt-32 pb-12' : 'pt-32 pb-20'}`}>
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={`editorial-glass grid overflow-hidden rounded-[2rem] ${compact ? 'lg:grid-cols-[1.3fr_0.7fr]' : 'lg:grid-cols-[1.08fr_0.92fr]'}`}
      >
        <div className={`relative z-10 flex flex-col justify-center ${compact ? 'p-7 md:p-10' : 'p-7 md:p-12 lg:p-16'}`}>
          <span className={`mb-6 w-fit rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${accentClasses[accent]}`}>
            {eyebrow}
          </span>
          <h1 className={`${compact ? 'text-4xl md:text-5xl' : 'text-4xl md:text-6xl'} max-w-3xl font-black leading-[1.04] tracking-tight text-white`}>
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-200 md:text-xl">
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>

        <div className={`relative min-h-[260px] overflow-hidden lg:min-h-full ${compact ? 'hidden lg:block' : ''}`}>
          <picture>
            {mobileImage && <source media="(max-width: 1023px)" srcSet={mobileImage} />}
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#081221] via-[#081221]/25 to-transparent lg:from-[#081221]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081221]/70 via-transparent to-white/10" />
        </div>
      </motion.div>
    </section>
  );
}
