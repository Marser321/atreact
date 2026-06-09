type SceneBackgroundProps = {
  src: string;
  opacity?: string;
};

export function SceneBackground({ src, opacity = 'opacity-[0.12]' }: SceneBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover mix-blend-overlay ${opacity}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
    </div>
  );
}
