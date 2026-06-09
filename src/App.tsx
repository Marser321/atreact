import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import { siteSettings } from './data/seed';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const Emprender = lazy(() => import('./pages/Emprender').then((module) => ({ default: module.Emprender })));
const Servicios = lazy(() => import('./pages/Servicios').then((module) => ({ default: module.Servicios })));
const Cursos = lazy(() => import('./pages/Cursos').then((module) => ({ default: module.Cursos })));
const Nosotros = lazy(() => import('./pages/Nosotros').then((module) => ({ default: module.Nosotros })));
const Contacto = lazy(() => import('./pages/Contacto').then((module) => ({ default: module.Contacto })));

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
      const timeoutId = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return () => window.clearTimeout(timeoutId);
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
      label: 'Emprender',
      to: '/emprender',
      active: location.pathname === '/emprender',
    },
    {
      label: 'Trámites',
      to: '/tramites',
      active: location.pathname === '/tramites' || location.pathname === '/servicios',
    },
    {
      label: 'Aprender',
      to: '/aprender',
      active: location.pathname === '/aprender' || location.pathname === '/cursos',
    },
    {
      label: 'Nosotros',
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
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Animated Orbs */}
        <div
          className="absolute top-[20%] left-[10%] mix-blend-screen will-change-transform"
          style={{ transform: 'translate3d(0, var(--orb-y-1, 0px), 0)' }}
        >
          <div className="w-[36vw] h-[36vw] bg-[#00246B]/30 blur-[100px] rounded-full" />
        </div>

        <div
          className="absolute bottom-[20%] right-[5%] will-change-transform"
          style={{ transform: 'translate3d(0, var(--orb-y-2, 0px), 0)' }}
        >
          <div className="w-[44vw] h-[44vw] bg-[#0B0121]/70 blur-[110px] rounded-full" />
        </div>

        <div
          className="absolute top-[40%] right-[20%] mix-blend-screen will-change-transform"
          style={{ transform: 'translate3d(0, var(--orb-y-3, 0px), 0)' }}
        >
          <div className="w-[28vw] h-[28vw] bg-[#BE0000]/12 blur-[90px] rounded-full" />
        </div>

        {/* Micro Noise Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* HEADER CLOUD PARALLAX */}
      <div
        className="absolute top-0 inset-x-0 h-[760px] md:h-[720px] pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#e8f2ff] to-[#b8ccea]"></div>

        <div
          className="absolute inset-x-0 top-0 h-full pointer-events-none z-10 will-change-transform"
          style={{ transform: 'translate3d(0, var(--clouds-y, 0px), 0)' }}
        >
          <div className="absolute -top-24 -left-20 h-[420px] w-[55vw] rounded-full bg-white/80 blur-[70px]"></div>
          <div className="absolute top-12 right-[-12vw] h-[420px] w-[58vw] rounded-full bg-white/70 blur-[75px]"></div>
          <div className="absolute top-[32%] left-[12%] h-[260px] w-[76vw] rounded-[50%] bg-white/48 blur-[62px]"></div>
          <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_25%_22%,white_0,transparent_30%),radial-gradient(circle_at_78%_30%,white_0,transparent_34%),radial-gradient(circle_at_50%_55%,#dbeafe_0,transparent_38%)]"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-transparent via-[#050B14]/75 to-[#050B14]"></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#050B14]/88 backdrop-blur-md border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]' : 'py-4 md:py-5 bg-white/68 backdrop-blur-xl border-b border-white/65 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" aria-label="America Tramites, inicio" className={`rounded-xl border border-white/70 bg-white/90 px-2 py-1 shadow-sm transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <CeoLogo className="h-10 md:h-12 w-auto" />
            </Link>

            <div className={`hidden md:flex items-center gap-6 text-sm font-semibold ${scrolled ? 'text-slate-300' : 'text-slate-700'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  aria-current={item.active ? 'page' : undefined}
                  className={`transition-colors ${scrolled ? 'hover:text-white' : 'hover:text-slate-950'} ${item.active ? `${scrolled ? 'text-white' : 'text-slate-950'} border-b-2 border-red-500 pb-1` : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              to="/#quiz"
              className="px-5 md:px-6 py-2.5 bg-[#BE0000] text-white rounded-full font-bold shadow-[0_4px_14px_rgba(190,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(190,0,0,0.6)] hover:bg-[#990000] transition-all text-xs uppercase whitespace-nowrap"
            >
              Descubre tu ruta
            </Link>
          </div>

          <div className={`mobile-nav-scroll md:hidden mt-3 -mx-1 flex gap-2 overflow-x-auto pb-1 text-xs font-semibold ${scrolled ? 'text-slate-300' : 'text-slate-700'}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                aria-current={item.active ? 'page' : undefined}
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
        <Suspense fallback={<div className="relative z-20 min-h-[70vh]" aria-label="Cargando contenido" />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/emprender" element={<Emprender />} />
              <Route path="/tramites" element={<Servicios />} />
              <Route path="/aprender" element={<Cursos />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/servicios" element={<Navigate to="/tramites" replace />} />
              <Route path="/cursos" element={<Navigate to="/aprender" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/5 bg-black/40 relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex bg-white/5 border border-white/10 px-5 py-3 rounded-xl items-center justify-center">
            <CeoLogo className="h-8 md:h-10 w-auto brightness-200 grayscale opacity-70" />
          </div>
          <p className="text-sm text-on-dark-subtle leading-relaxed text-left md:text-center">
            Aviso Legal: {siteSettings.legalDisclaimer}
          </p>
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto"></div>
          <p className="text-xs text-on-dark-subtle font-semibold tracking-wider uppercase">
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
