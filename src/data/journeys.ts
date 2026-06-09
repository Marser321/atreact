export type JourneyIntent = 'emprender' | 'tramites' | 'aprender';

export type ProgramWeek = {
  title: string;
  outcome: string;
};

export type LearningResource = {
  slug: string;
  title: string;
  summary: string;
  level: 'inicial' | 'organizacion' | 'limites';
  takeaways: string[];
};

export const programWeeks: ProgramWeek[] = [
  {
    title: "Entienda el tablero completo",
    outcome: "Ubique agencias, procesos y límites para clasificar mejor cada conversación.",
  },
  {
    title: "Lea la ruta administrativa",
    outcome: "Ordene información y preguntas sin convertir la preparación en asesoría legal.",
  },
  {
    title: "Organice permisos, soportes y tiempos",
    outcome: "Trabaje con fechas, respaldos y faltantes desde una lógica documental.",
  },
  {
    title: "Prepare trámites frecuentes con precisión",
    outcome: "Construya checklists claros para renovaciones y procesos administrativos comunes.",
  },
  {
    title: "Convierta el caos en expediente",
    outcome: "Aplique intake, revisión de consistencia y control de errores.",
  },
  {
    title: "Opere con límites responsables",
    outcome: "Comunique su alcance, detecte complejidad y escale por el canal correcto.",
  },
];

export const learningResources: LearningResource[] = [
  {
    slug: "primer-checklist-documental",
    title: "Su primer checklist documental",
    summary: "Una forma simple de empezar a reunir documentos sin mezclar originales, copias y pendientes.",
    level: "inicial",
    takeaways: [
      "Separe identidad, recibos, formularios y evidencias.",
      "Anote qué documentos faltan y quién puede conseguirlos.",
      "Conserve una copia personal de cada paquete preparado.",
    ],
  },
  {
    slug: "ordenar-evidencia",
    title: "Cómo ordenar evidencia sin perderse",
    summary: "Organice soportes por fecha, tema y tipo para llegar con más claridad a una orientación.",
    level: "organizacion",
    takeaways: [
      "Use una línea de tiempo para fechas importantes.",
      "Agrupe evidencias relacionadas bajo una misma etiqueta.",
      "Evite entregar documentos sin una copia de respaldo.",
    ],
  },
  {
    slug: "limites-preparacion",
    title: "Preparación administrativa y límites",
    summary: "Reconozca qué puede organizarse administrativamente y cuándo hace falta apoyo legal autorizado.",
    level: "limites",
    takeaways: [
      "Preparar información no significa decidir una estrategia legal.",
      "Corte, detención, deportación o antecedentes requieren especial cuidado.",
      "Cuando existe duda, clasifique antes de prometer o avanzar.",
    ],
  },
];
