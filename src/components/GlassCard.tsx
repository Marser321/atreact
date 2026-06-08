import React from 'react';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
};

export function GlassCard({ children, className = "", glowColor = "rgba(59, 130, 246, 0.15)" }: GlassCardProps) {
  return (
    <div className={`relative transition-all duration-500 group ${className}`}>
      {/* Shimmer Border Star */}
      <div className="absolute -top-[18px] right-[10%] w-9 h-9 z-20 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse">
        <svg className="w-full h-full text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" viewBox="0 0 100 100">
           <path fill="currentColor" d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z"></path>
        </svg>
      </div>

      {/* Crystal Glass Base */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/[0.2] backdrop-blur-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover:border-white/[0.3] group-hover:bg-white/[0.08] transition-all duration-500">
        {/* Glare line top */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80"></div>

        {/* Side Glare */}
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-white/60 to-transparent"></div>

        {/* Inner ambient glow */}
        <div
          className="absolute -inset-32 opacity-50 blur-[80px] pointer-events-none transition-all duration-700 group-hover:opacity-70"
          style={{ background: `radial-gradient(circle at top right, ${glowColor}, transparent 60%)` }}
        ></div>
      </div>

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
