import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  MessageSquare,
  Scale,
  ShieldCheck,
  Users,
  X,
  XCircle,
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Link } from 'react-router-dom';
import { siteSettings } from '../data/seed';

import webTrustScene from '../assets/backgrounds/web-trust-scene.webp';
import webEducationScene from '../assets/backgrounds/web-education-scene.webp';
import webConversionScene from '../assets/backgrounds/web-conversion-scene.webp';

type QuizOption = {
  label: string;
  value: string;
  helper?: string;
};

type QuizQuestion = {
  key: string;
  question: string;
  helper: string;
  options: QuizOption[];
};

export function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const intentRoutes = [
    {
      title: "Quiero emprender",
      body: "Aprende a preparar formularios migratorios con metodo, orden y limites claros para servir mejor a tu comunidad.",
      cta: "Ver ruta del programa",
      href: "/#programa",
      icon: <BriefcaseBusiness className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Necesito apoyo con un tramite",
      body: "Organiza documentos, evidencias y datos administrativos antes de avanzar por el canal correcto.",
      cta: "Explorar servicios",
      href: "/servicios",
      icon: <FileText className="w-6 h-6 text-red-400" />,
    },
    {
      title: "Quiero aprender gratis",
      body: "Empieza con guias, checklist y una primera clasificacion antes de tomar una decision.",
      cta: "Ver recursos",
      href: "/#aprende-gratis",
      icon: <BookOpen className="w-6 h-6 text-green-400" />,
    },
  ];

  const complianceItems = [
    {
      title: "No somos abogados",
      body: "America Tramites no es un bufete y no reemplaza una consulta legal.",
      icon: <Scale className="w-5 h-5" />,
    },
    {
      title: "Sin asesoria legal",
      body: "No aconsejamos que categoria migratoria elegir ni representamos en corte.",
      icon: <XCircle className="w-5 h-5" />,
    },
    {
      title: "Orden documental",
      body: "Ayudamos a clasificar, preparar y organizar informacion administrativa.",
      icon: <ClipboardCheck className="w-5 h-5" />,
    },
    {
      title: "Escalamiento responsable",
      body: "Si hay complejidad legal, orientamos hacia abogado u organizacion autorizada.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  const trustGrid = [
    { value: "Spanish-first", label: "Comunicacion clara para la comunidad hispana", icon: <Users className="text-blue-400" /> },
    { value: "WhatsApp", label: "Canal rapido para iniciar una clasificacion", icon: <MessageSquare className="text-green-400" /> },
    { value: "6 semanas", label: "Ruta practica para aprender con estructura", icon: <GraduationCap className="text-blue-400" /> },
    { value: "Limites claros", label: "Trabajo responsable sin cruzar la linea legal", icon: <Scale className="text-red-400" /> },
  ];

  const positivas = [
    "Eres una persona organizada, detallista y con vocacion de servicio.",
    "Quieres desarrollar una habilidad practica para apoyar a la comunidad hispana con procesos administrativos.",
    "Ya trabajas en notary, taxes, seguros, traducciones, servicios comunitarios o atencion al cliente.",
    "Quieres aprender intake, checklists, orden documental y comunicacion responsable de limites.",
  ];

  const negativas = [
    "Buscas prometer aprobaciones, resultados migratorios o soluciones rapidas sin proceso.",
    "Quieres dar consejo legal, representar en corte o decidir estrategias migratorias sin autorizacion.",
    "No estas dispuesto a trabajar con datos precisos, contratos claros y documentacion ordenada.",
  ];

  const temario = [
    {
      titulo: "Semana 1: Entiende el tablero completo",
      desc: "Deja de memorizar siglas sueltas y aprende quien hace que dentro del sistema migratorio de EE. UU. para orientar mejor, evitar confusiones basicas y reconocer tus limites.",
    },
    {
      titulo: "Semana 2: Lee la ruta administrativa del caso",
      desc: "Aprende bases de peticiones familiares, ajuste de estatus y proceso consular para ordenar informacion, documentos y preguntas sin convertirte en asesor legal.",
    },
    {
      titulo: "Semana 3: Organiza permisos, soportes y tiempos",
      desc: "Trabaja con permisos de trabajo, viaje y soporte economico desde una logica documental: que reunir, como revisar consistencia y que faltantes detectar.",
    },
    {
      titulo: "Semana 4: Domina tramites frecuentes con precision",
      desc: "Renovacion de residencia, ciudadania y procesos comunes explicados de forma practica para preparar paquetes administrativos mas claros y completos.",
    },
    {
      titulo: "Semana 5: Convierte el caos en expediente",
      desc: "Intake, checklist, recoleccion de evidencia, control de errores y organizacion del paquete para trabajar con criterio, no con improvisacion.",
    },
    {
      titulo: "Semana 6: Crece con limites y operacion responsable",
      desc: "Aprende a comunicar tu alcance, detectar casos que deben escalarse, estructurar una oferta honesta y construir una operacion confiable.",
    },
  ];

  const programBenefits = [
    { text: "Masterclass en vivo de 6 semanas con ruta paso a paso", icon: <BookOpen className="w-5 h-5 text-blue-400" /> },
    { text: "Kit de inicio con checklists, estructura de intake y materiales de apoyo", icon: <ClipboardCheck className="w-5 h-5 text-green-400" /> },
    { text: "Sesion practica para revisar dudas administrativas y ordenar casos ejemplo", icon: <MessageSquare className="w-5 h-5 text-red-400" /> },
    { text: "Guia de comunicacion responsable: que puedes hacer y cuando escalar", icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
  ];

  const freeResources = [
    "Checklist inicial para ordenar documentos antes de pedir orientacion.",
    "Glosario simple de siglas y formularios frecuentes.",
    "Guia breve: que puede hacer un preparador y que requiere apoyo legal.",
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      key: "intent",
      question: "¿Que te trajo hoy a America Tramites?",
      helper: "Empezamos por la intencion para no meterte en un recorrido que no necesitas.",
      options: [
        { label: "Quiero emprender preparando formularios", value: "emprender" },
        { label: "Necesito apoyo con un tramite", value: "tramite" },
        { label: "Quiero aprender gratis antes de decidir", value: "gratis" },
      ],
    },
    {
      key: "context",
      question: "¿Desde donde empiezas?",
      helper: "Esto ayuda a separar formacion, servicio administrativo y recursos iniciales.",
      options: [
        { label: "Estoy empezando desde cero", value: "cero" },
        { label: "Ya atiendo personas en otro servicio", value: "servicio" },
        { label: "Tengo documentos dispersos y necesito orden", value: "documentos" },
      ],
    },
    {
      key: "complexity",
      question: "¿Hay alguna senal de complejidad legal?",
      helper: "Si existe corte, detencion, deportacion, antecedentes o estrategia legal, la ruta correcta puede requerir abogado u organizacion autorizada.",
      options: [
        { label: "No, busco una ruta administrativa", value: "administrativo" },
        { label: "No estoy seguro y quiero clasificarlo", value: "duda" },
        { label: "Si: corte, detencion, deportacion o antecedentes", value: "complejo" },
      ],
    },
    {
      key: "contact",
      question: "¿Como prefieres continuar?",
      helper: "Usaremos esta preferencia para preparar el siguiente paso.",
      options: [
        { label: "WhatsApp", value: "whatsapp" },
        { label: "Llamada", value: "llamada" },
        { label: "Formulario / email", value: "formulario" },
      ],
    },
  ];

  const getAnswerLabel = (key: string) => {
    const question = quizQuestions.find((item) => item.key === key);
    return question?.options.find((option) => option.value === quizAnswers[key])?.label ?? "No respondido";
  };

  const getQuizResult = () => {
    const hasLegalComplexity = quizAnswers.complexity === "complejo";
    const needsClassification = quizAnswers.complexity === "duda";

    if (hasLegalComplexity) {
      return {
        title: "Tu ruta debe revisarse con cuidado",
        body: "Lo que marcaste puede requerir apoyo legal autorizado. Podemos ayudarte a ordenar informacion inicial, pero el siguiente paso responsable es clasificar el caso sin improvisar.",
        cta: "Clasificar por WhatsApp",
      };
    }

    if (needsClassification) {
      return {
        title: "Primero conviene clasificar",
        body: "No hace falta adivinar. El siguiente paso es contar el contexto general para identificar si hablamos de educacion, preparacion documental o derivacion responsable.",
        cta: "Enviar contexto por WhatsApp",
      };
    }

    if (quizAnswers.intent === "emprender") {
      return {
        title: "Tu ruta inicial es formacion responsable",
        body: "Tiene sentido empezar por el programa: metodo, intake, organizacion documental y limites claros antes de ofrecer servicios a otras personas.",
        cta: "Hablar sobre el programa",
      };
    }

    if (quizAnswers.intent === "tramite") {
      return {
        title: "Tu ruta inicial es ordenar el tramite",
        body: "El proximo paso es contarnos que documentos tienes, que tramite quieres organizar y si hay alguna fecha importante para priorizar.",
        cta: "Ordenar mi tramite por WhatsApp",
      };
    }

    return {
      title: "Tu ruta inicial es aprender gratis",
      body: "Puedes empezar con recursos simples para entender vocabulario, documentos frecuentes y limites antes de tomar una decision.",
      cta: "Pedir recursos por WhatsApp",
    };
  };

  const quizResult = getQuizResult();
  const whatsappMessage = encodeURIComponent(
    `Hola America Tramites. Complete el quiz y quiero continuar.\n\nIntencion: ${getAnswerLabel("intent")}\nContexto: ${getAnswerLabel("context")}\nComplejidad: ${getAnswerLabel("complexity")}\nContacto preferido: ${getAnswerLabel("contact")}`
  );
  const whatsappHref = `https://wa.me/${siteSettings.whatsapp}?text=${whatsappMessage}`;
  const classificationWhatsappHref = `https://wa.me/${siteSettings.whatsapp}?text=${encodeURIComponent("Hola America Tramites. Quiero clasificar mi ruta: emprender, tramite o aprender gratis.")}`;

  const handleAnswer = (option: QuizOption) => {
    const currentQuestion = quizQuestions[quizStep];
    setQuizAnswers((current) => ({ ...current, [currentQuestion.key]: option.value }));
    setQuizStep((current) => Math.min(current + 1, quizQuestions.length));
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
  };

  return (
    <>
      <section className="relative z-20 max-w-6xl mx-auto pt-36 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-900 rounded-full text-xs font-bold">
            Spanish-first • WhatsApp directo • Limites legales visibles
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.05] [text-shadow:_0_2px_20px_rgba(255,255,255,0.8)]">
              America Tramites
            </h1>
            <p className="text-lg md:text-2xl text-slate-800 max-w-4xl mx-auto leading-relaxed font-semibold">
              Dos rutas claras para la comunidad hispana: aprende a preparar formularios migratorios con responsabilidad o recibe apoyo administrativo para ordenar tu tramite sin confundirlo con asesoria legal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {intentRoutes.map((route) => (
              <Link key={route.title} to={route.href} className="block h-full">
                <GlassCard className="p-6 h-full hover:scale-[1.01] active:scale-[0.99]" glowColor="rgba(59,130,246,0.1)">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center shrink-0">
                      {route.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-950 mb-2">{route.title}</h2>
                      <p className="text-sm text-slate-800 font-semibold leading-relaxed mb-4">{route.body}</p>
                      <span className="inline-flex items-center text-xs font-black text-[#BE0000] uppercase">
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

      <section className="relative z-20 bg-[#050B14] px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="p-6 md:p-8" glowColor="rgba(34,197,94,0.1)">
            <div className="grid md:grid-cols-4 gap-5">
              {complianceItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="relative z-20 bg-[#050B14] px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {trustGrid.map((item) => (
            <GlassCard key={item.value} className="p-6 text-center" glowColor="rgba(0,11,107,0.1)">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">{item.value}</h4>
              <p className="text-slate-400 text-sm">{item.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="w-full relative py-24 overflow-hidden z-20 border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] mix-blend-overlay"
            style={{ backgroundImage: `url(${webTrustScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard glowColor="rgba(34,197,94,0.15)" className="p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-bold mb-6">
                <CheckCircle2 size={14} /> PERFIL IDEAL
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Este programa es para ti si:</h3>
              <ul className="space-y-4">
                {positivas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-slate-300 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard glowColor="rgba(239,68,68,0.15)" className="p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold mb-6">
                <XCircle size={14} /> RESTRICCIONES
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Este programa no es para ti si:</h3>
              <ul className="space-y-4">
                {negativas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border border-red-500/30 shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="text-slate-400 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="programa" className="w-full relative py-24 overflow-hidden z-20 border-b border-white/5 scroll-mt-28">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] mix-blend-overlay"
            style={{ backgroundImage: `url(${webEducationScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Programa de 6 semanas</h2>
            <p className="text-slate-400">
              No solo aprenderas formularios: aprenderas a pensar mejor cada caso, ordenar expedientes y comunicar con claridad cuando puedes ayudar y cuando debes escalar.
            </p>
          </div>

          <div className="space-y-4">
            {temario.map((item, idx) => (
              <GlassCard key={item.titulo} className="overflow-hidden" glowColor="rgba(255,255,255,0.02)">
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-slate-100 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm shrink-0">
                      {idx + 1}
                    </span>
                    {item.titulo}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${openAccordion === idx ? 'rotate-180 text-blue-400' : ''}`} />
                </button>

                <AnimatePresence>
                  {openAccordion === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5 bg-white/[0.01]"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="quiz" className="relative z-20 max-w-3xl mx-auto px-6 py-20 scroll-mt-28">
        <GlassCard className="p-8 md:p-12 text-center" glowColor="rgba(59,130,246,0.1)">
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3">Descubre tu ruta</h3>
          <p className="text-slate-400 mb-8">
            Te toma menos de 2 minutos. Tus respuestas ayudan a separar formacion, preparacion documental o escalamiento responsable.
          </p>

          <AnimatePresence mode="wait">
            {quizStep < quizQuestions.length ? (
              <motion.div
                key={quizStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="h-2 rounded-full bg-white/10 overflow-hidden mb-6">
                  <div
                    className="h-full bg-[#BE0000] transition-all duration-300"
                    style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
                <h4 className="text-lg font-bold text-blue-400 uppercase mb-2">Pregunta {quizStep + 1} de {quizQuestions.length}</h4>
                <p className="text-xl font-bold text-white">{quizQuestions[quizStep].question}</p>
                <p className="text-sm text-slate-500 max-w-xl mx-auto mb-6">{quizQuestions[quizStep].helper}</p>
                <div className="grid gap-3">
                  {quizQuestions[quizStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option)}
                      className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-slate-300 hover:text-white font-medium transition-all"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">{quizResult.title}</h4>
                <p className="text-slate-300 max-w-lg mx-auto">{quizResult.body}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {quizResult.cta}
                  </a>
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all"
                  >
                    Reiniciar
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </section>

      <section id="aprende-gratis" className="w-full relative py-20 overflow-hidden z-20 border-y border-white/5 scroll-mt-28">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <div>
              <p className="text-xs font-bold uppercase text-blue-400 mb-3">Aprender gratis antes de decidir</p>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Empieza por claridad, no por presion</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Si todavia estas comparando opciones, empieza con recursos simples. La confianza se construye cuando entiendes que se puede preparar, que se debe escalar y que conviene preguntar antes de improvisar.
              </p>
            </div>

            <div className="grid gap-4">
              {freeResources.map((item, index) => (
                <GlassCard key={item} className="p-6" glowColor="rgba(34,197,94,0.08)">
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">
                      0{index + 1}
                    </span>
                    <p className="text-slate-300 font-semibold">{item}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="w-full relative py-24 overflow-hidden z-20">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-overlay"
            style={{ backgroundImage: `url(${webConversionScene})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B14] via-transparent to-[#050B14]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <GlassCard className="p-8 md:p-16 relative overflow-hidden" glowColor="rgba(190,0,0,0.15)">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase">
                  Siguiente paso
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Construye una ruta responsable antes de vender o enviar documentos</h3>
                <p className="text-slate-400 text-lg">
                  La diferencia no esta en llenar mas rapido. Esta en clasificar mejor, ordenar con precision y comunicar limites con tranquilidad.
                </p>

                <div className="space-y-3">
                  {programBenefits.map((item) => (
                    <div key={item.text} className="flex items-center gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-slate-200 text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="p-8 bg-gradient-to-b from-white/[0.06] to-transparent rounded-2xl border border-white/10 text-center relative">
                  <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-5" />
                  <p className="text-slate-400 text-sm uppercase font-bold">Ruta recomendada</p>
                  <h4 className="text-3xl font-black text-white mt-2 mb-4">Primero clasificar</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Responde el quiz o escribe por WhatsApp. Si tu caso requiere revision legal, lo diremos de frente.
                  </p>
                  <a
                    href={classificationWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-4 bg-gradient-to-b from-[#BE0000] to-[#800000] text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(190,0,0,0.5)] hover:bg-[#a00000] transition-all text-lg"
                  >
                    Hablar por WhatsApp
                  </a>

                  <div className="mt-4 flex items-center justify-center text-xs text-slate-500 gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> Sin asesoria legal ni promesas de resultado
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
