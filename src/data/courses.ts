export type Course = {
  slug: string;
  title: string;
  summary: string;
  status: string;
  format: string;
  goal: 'entender' | 'organizar';
  ctaLabel: string;
  ctaHref: string;
};

export const courses: Course[] = [
  {
    slug: "checklist-migratorio-inicial",
    title: "Checklist migratorio inicial",
    summary: "Una formación breve para entender cómo ordenar identificaciones, fechas clave y soportes antes de su primera orientación.",
    status: "Próximamente",
    format: "Sesión guiada + materiales base",
    goal: "entender",
    ctaLabel: "Solicitar cupo",
    ctaHref: "/contacto",
  },
  {
    slug: "carpeta-tps-renovaciones",
    title: "Carpeta documental para TPS y renovaciones",
    summary: "Recorrido práctico para estructurar copias, evidencias y recordatorios administrativos con menos dispersión.",
    status: "Inscripciones abiertas",
    format: "Clase práctica en vivo",
    goal: "organizar",
    ctaLabel: "Consultar disponibilidad",
    ctaHref: "/contacto",
  },
  {
    slug: "documentos-permiso-trabajo",
    title: "Documentos base para permiso de trabajo",
    summary: "Orientación inicial sobre qué reunir, cómo separar respaldos y qué preguntas llevar antes de avanzar con su paquete.",
    status: "Nueva cohorte",
    format: "Taller introductorio",
    goal: "organizar",
    ctaLabel: "Pedir información",
    ctaHref: "/contacto",
  },
];
