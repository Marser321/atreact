import React from 'react';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  variant?: 'light' | 'dark' | 'elevated' | 'editorial';
};

const variantClasses = {
  light: 'bg-[var(--color-surface-light)] border-[var(--color-border-light)] shadow-[var(--shadow-card-light)]',
  dark: 'bg-[var(--color-surface-dark)] border-[var(--color-border-dark)] shadow-[var(--shadow-card-dark)]',
  elevated: 'bg-[var(--color-surface-dark-elevated)] border-white/25 shadow-[0_32px_70px_-24px_rgba(0,0,0,0.9)]',
  editorial: 'bg-slate-950/45 border-white/35 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.9)]',
};

export function GlassCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.15)",
  variant = 'dark',
}: GlassCardProps) {
  return (
    <div className={`relative transition-all duration-300 group ${className}`}>
      {/* Shimmer Border Star */}
      <div className="absolute -top-[14px] right-[10%] w-7 h-7 z-20 pointer-events-none opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        <svg className="w-full h-full text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" viewBox="0 0 100 100">
           <path fill="currentColor" d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z"></path>
        </svg>
      </div>

      {/* Crystal Glass Base */}
      <div className={`absolute inset-0 overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-0.5 ${variantClasses[variant]}`}>
        {/* Glare line top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70"></div>

        {/* Side Glare */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-white/55 to-transparent"></div>

        {/* Inner ambient glow */}
        <div
          className="absolute -inset-24 opacity-35 blur-[64px] pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
          style={{ background: `radial-gradient(circle at top right, ${glowColor}, transparent 60%)` }}
        ></div>
      </div>

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
