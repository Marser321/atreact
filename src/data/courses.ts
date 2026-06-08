export type Course = {
  title: string;
  summary: string;
  status: string;
  format: string;
  ctaLabel: string;
  ctaHref: string;
};

export const courses: Course[] = [
  {
    title: "Checklist migratorio inicial",
    summary: "Una formación breve para entender cómo ordenar identificaciones, fechas clave y soportes antes de su primera orientación.",
    status: "Próximamente",
    format: "Sesión guiada + materiales base",
    ctaLabel: "Solicitar cupo",
    ctaHref: "/contacto",
  },
  {
    title: "Carpeta documental para TPS y renovaciones",
    summary: "Recorrido práctico para estructurar copias, evidencias y recordatorios administrativos con menos dispersión.",
    status: "Inscripciones abiertas",
    format: "Clase práctica en vivo",
    ctaLabel: "Consultar disponibilidad",
    ctaHref: "/contacto",
  },
  {
    title: "Documentos base para permiso de trabajo",
    summary: "Orientación inicial sobre qué reunir, cómo separar respaldos y qué preguntas llevar antes de avanzar con su paquete.",
    status: "Nueva cohorte",
    format: "Taller introductorio",
    ctaLabel: "Pedir información",
    ctaHref: "/contacto",
  },
];
