import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';

type CtaBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CtaBand({ eyebrow, title, description, ctaLabel, ctaHref }: CtaBandProps) {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 py-12">
      <GlassCard className="p-8 md:p-16 text-center" glowColor="rgba(190,0,0,0.1)">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#BE0000]/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{title}</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8">{description}</p>
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-[#BE0000] to-[#7a0000] text-white font-bold rounded-xl shadow-[0_6px_20px_rgba(190,0,0,0.4)] hover:shadow-[0_10px_25px_rgba(190,0,0,0.6)] transition-all hover:-translate-y-0.5 border border-red-500/20"
          >
            {ctaLabel}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </GlassCard>
    </section>
  );
}
