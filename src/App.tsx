import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Import Pages
import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Cursos } from './pages/Cursos';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { siteSettings } from './data/seed';

const CeoLogo = ({ className = "h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 735 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,130 L110,15 C100,5 60,10 35,30 C60,-5 120,-15 160,15 C190,35 190,60 190,80 L190,130 L145,130 L145,65 C145,45 115,40 85,75 L55,130 Z" fill="#000B6B" />
    <polygon points="125,22 170,22 147.5,50" fill="#BE0000" />
    <text x="195" y="130" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="135" fill="#000B6B" letterSpacing="0">MERICA</text>
    <text x="35" y="205" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="90" fill="#BE0000" letterSpacing="0">TRAMITES</text>
  </svg>
);

// ScrollToTop helper component to reset scroll position on page change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}


// Layout Wrapper to have background effects and navigation
function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const scrolledRef = useRef(false);
  const location = useLocation();
  const navItems = [
    {
      label: 'Quiero emprender',
      to: '/#programa',
      active: location.pathname === '/' && location.hash === '#programa',
    },
    {
      label: 'Necesito un trámite',
      to: '/servicios',
      active: location.pathname === '/servicios',
    },
    {
      label: 'Aprender gratis',
      to: '/#aprende-gratis',
      active: location.pathname === '/' && location.hash === '#aprende-gratis',
    },
    {
      label: 'Confianza y límites',
      to: '/nosotros',
      active: location.pathname === '/nosotros',
    },
    {
      label: 'Contacto',
      to: '/contacto',
      active: location.pathname === '/contacto',
    },
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;

    const updateScrollEffects = () => {
      rafId = 0;
      const y = window.scrollY;
      const nextScrolled = y > 50;

      if (scrolledRef.current !== nextScrolled) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      if (!shellRef.current) return;

      if (reduceMotion.matches) {
        shellRef.current.style.setProperty('--clouds-y', '0px');
        shellRef.current.style.setProperty('--orb-y-1', '0px');
        shellRef.current.style.setProperty('--orb-y-2', '0px');
        shellRef.current.style.setProperty('--orb-y-3', '0px');
        return;
      }

      shellRef.current.style.setProperty('--clouds-y', `${Math.min(y * 0.22, 160)}px`);
      shellRef.current.style.setProperty('--orb-y-1', `${Math.min(y * 0.08, 80)}px`);
      shellRef.current.style.setProperty('--orb-y-2', `${Math.max(y * -0.05, -80)}px`);
      shellRef.current.style.setProperty('--orb-y-3', `${Math.min(y * 0.1, 110)}px`);
    };

    const handleScroll = () => {
      if (rafId === 0) {
        rafId = window.requestAnimationFrame(updateScrollEffects);
      }
    };

    updateScrollEffects();
    window.addEventListener('scroll', handleScroll, { passive: true });
    reduceMotion.addEventListener('change', updateScrollEffects);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      reduceMotion.removeEventListener('change', updateScrollEffects);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={shellRef} className="relative min-h-screen bg-[#050B14] font-sans selection:bg-red-500/30 overflow-hidden text-slate-100 flex flex-col justify-between">


      {/* BACKGROUND FLOATING EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated Orbs */}
        <div
          className="absolute top-[20%] left-[10%] mix-blend-screen will-change-transform"
          style={{ transform: 'translate3d(0, var(--orb-y-1, 0px), 0)' }}
        >
          <div className="w-[40vw] h-[40vw] bg-[#00246B]/40 blur-[130px] rounded-full animate-[pulse_10s_infinite_alternate]" />
        </div>

        <div
          className="absolute bottom-[20%] right-[5%] will-change-transform"
          style={{ transform: 'translate3d(0, var(--orb-y-2, 0px), 0)' }}
        >
          <div className="w-[50vw] h-[50vw] bg-[#0B0121]/80 blur-[150px] rounded-full" />
        </div>

        <div
          className="absolute top-[40%] right-[20%] mix-blend-screen will-change-transform"
          style={{ transform: 'translate3d(0, var(--orb-y-3, 0px), 0)' }}
        >
          <div className="w-[30vw] h-[30vw] bg-[#BE0000]/15 blur-[120px] rounded-full" />
        </div>

        {/* Micro Noise Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* HEADER CLOUD PARALLAX */}
      <div
        className="absolute top-0 inset-x-0 h-[68vh] min-h-[560px] max-h-[760px] pointer-events-none z-10 overflow-hidden"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 58%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 58%, transparent 100%)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#e2ecfa] to-[#c7daf4]/30"></div>

        <div
          className="absolute inset-x-0 top-0 h-full pointer-events-none z-10 will-change-transform"
          style={{ transform: 'translate3d(0, var(--clouds-y, 0px), 0)' }}
        >
          {/* Volumetric Clouds Background Layer */}
          <div
            className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] bg-cover bg-center bg-no-repeat opacity-[0.35] mix-blend-color-burn"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410cbda?q=80&w=2500&auto=format&fit=crop')" }}
          ></div>

          {/* Foreground Clouds */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-bottom bg-no-repeat opacity-[0.55] mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2500&auto=format&fit=crop')" }}
          ></div>

          {/* Central Brightness Backing */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[420px] bg-white/85 blur-[100px]"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent via-[#050B14]/75 to-[#050B14]"></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#050B14]/88 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]' : 'py-4 md:py-5 bg-white/68 backdrop-blur-xl border-b border-white/65 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className={`rounded-xl border border-white/70 bg-white/85 px-2 py-1 shadow-sm transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <CeoLogo className="h-10 md:h-12 w-auto" />
            </Link>

            <div className={`hidden md:flex items-center gap-6 text-sm font-semibold ${scrolled ? 'text-slate-300' : 'text-slate-700'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`transition-colors ${scrolled ? 'hover:text-white' : 'hover:text-slate-950'} ${item.active ? `${scrolled ? 'text-white' : 'text-slate-950'} border-b-2 border-red-500 pb-1` : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              to="/#quiz"
              className="px-5 md:px-6 py-2.5 bg-[#BE0000] text-white rounded-full font-bold shadow-[0_4px_14px_rgba(190,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(190,0,0,0.6)] hover:bg-[#990000] transition-all text-[11px] md:text-xs uppercase whitespace-nowrap"
            >
              Descubre tu ruta
            </Link>
          </div>

          <div className={`mobile-nav-scroll md:hidden mt-3 -mx-1 flex gap-2 overflow-x-auto pb-1 text-xs font-semibold ${scrolled ? 'text-slate-300' : 'text-slate-700'}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`shrink-0 rounded-full border px-3 py-2 transition-colors ${item.active ? `${scrolled ? 'border-red-500 bg-red-500/15 text-white' : 'border-red-600 bg-red-50 text-red-800'}` : `${scrolled ? 'border-white/10 bg-white/5 hover:bg-white/10 hover:text-white' : 'border-slate-300/80 bg-white/70 hover:bg-white text-slate-700 hover:text-slate-950'}`}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* RENDER PAGES WITH TRANSITION */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/5 bg-black/40 relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex bg-white/5 border border-white/10 px-5 py-3 rounded-xl items-center justify-center">
            <CeoLogo className="h-8 md:h-10 w-auto brightness-200 grayscale opacity-70" />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed text-justify md:text-center">
            Aviso Legal: {siteSettings.legalDisclaimer}
          </p>
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto"></div>
          <p className="text-xs text-slate-600 font-semibold tracking-wider uppercase">
            © {new Date().getFullYear()} CEO América Trámites. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
