import { motion } from 'motion/react';

type PremiumPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  intent?: 'trust' | 'conversion' | 'catalog' | 'education' | 'general';
};

export function PremiumPageHero({ eyebrow, title, description, intent = 'general' }: PremiumPageHeroProps) {
  const getIntentColors = () => {
    switch (intent) {
      case 'education':
        return 'from-blue-500/10 to-indigo-500/10 border-blue-500/20';
      case 'catalog':
        return 'from-purple-500/10 to-blue-500/10 border-purple-500/20';
      case 'trust':
        return 'from-green-500/10 to-teal-500/10 border-green-500/20';
      case 'conversion':
        return 'from-red-500/10 to-orange-500/10 border-red-500/20';
      default:
        return 'from-slate-500/10 to-blue-500/10 border-slate-500/20';
    }
  };

  return (
    <section className="relative z-20 max-w-5xl mx-auto pt-36 pb-20 px-4 md:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-light-panel space-y-6 rounded-[2rem] px-6 py-8 md:px-10 md:py-12"
      >
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase border bg-gradient-to-r text-blue-950 ${getIntentColors()}`}>
          {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-light leading-tight">
          {title}
        </h1>
        <p className="text-base md:text-xl text-on-light-muted max-w-3xl mx-auto leading-relaxed font-semibold">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
