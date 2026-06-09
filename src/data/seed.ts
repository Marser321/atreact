export type Service = {
  title: string;
  slug: string;
  category: 'migratorios' | 'renovaciones' | 'negocios';
  summary: string;
  details: string[];
  commonDocuments: string[];
  seoTitle: string;
  seoDescription: string;
};

export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  topic: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
};

export const siteSettings = {
  title: "America Tramites",
  phone: "(305) 508-3205",
  whatsapp: "13055083205",
  address: "3280 NW 169 Terrace, Miami Gardens, FL",
  hours: "Lunes a viernes, 9:00 AM - 6:00 PM",
  legalDisclaimer:
    "America Tramites presta servicios educativos y de asistencia administrativa para organizar y preparar documentos. No somos abogados, no brindamos asesoramiento legal ni representacion legal, y los casos complejos deben revisarse con un abogado u organizacion autorizada.",
};

export const trustSignals = [
  { label: "Ruta clara", value: "3", note: "Emprender, ordenar un tramite o aprender antes de decidir" },
  { label: "Canal directo", value: "WhatsApp", note: "Primer contacto rapido para clasificar la necesidad" },
  { label: "Limites visibles", value: "Claro", note: "Sin asesoria legal ni promesas de resultados migratorios" },
];

export const services: Service[] = [
  {
    title: "Asilo político",
    slug: "asilo-politico",
    category: "migratorios",
    summary: "Organice evidencias, copias y datos administrativos en un orden claro antes de revisar el siguiente paso por el canal correcto.",
    details: ["Orden de evidencias por fecha, tema y tipo de documento", "Preparación administrativa de formularios indicados por el solicitante", "Identificación de señales que pueden requerir revisión legal autorizada"],
    commonDocuments: ["Identificación vigente o disponible", "Evidencias de soporte organizadas por categoría", "Historial de entradas, salidas y fechas importantes"],
    seoTitle: "Preparacion de documentos para asilo politico en Miami",
    seoDescription: "Preparacion administrativa de documentos para carpetas de asilo politico en Miami. Ordene evidencias y soportes antes de avanzar.",
  },
  {
    title: "TPS",
    slug: "tps",
    category: "renovaciones",
    summary: "Prepare solicitudes o renovaciones de TPS con una lista clara de documentos, fechas y soportes administrativos.",
    details: ["Checklist administrativo según el tipo de trámite", "Preparación de formularios indicados por el solicitante", "Orden de copias, pruebas de identidad, nacionalidad y residencia"],
    commonDocuments: ["Prueba de identidad", "Prueba de nacionalidad", "Prueba de residencia continua o presencia física"],
    seoTitle: "Preparacion de documentos TPS en Miami",
    seoDescription: "Acompañamiento administrativo para preparar documentos de TPS y renovaciones en Miami Gardens.",
  },
  {
    title: "Permisos de trabajo",
    slug: "permisos-de-trabajo",
    category: "renovaciones",
    summary: "Reúna y ordene documentos para una autorización de empleo o renovación con menos confusión y mayor control del paquete.",
    details: ["Organización de formularios y soportes administrativos", "Revisión de campos básicos antes de cerrar el paquete", "Preparación de copias para conservar respaldo personal"],
    commonDocuments: ["Documento de identidad", "Evidencia administrativa de elegibilidad", "Permiso anterior o recibos relacionados si aplica"],
    seoTitle: "Preparacion de documentos para permisos de trabajo",
    seoDescription: "Servicios administrativos para preparar documentos de permisos de trabajo y renovaciones en Florida.",
  },
  {
    title: "Creación de compañías",
    slug: "creacion-de-companias",
    category: "negocios",
    summary: "Ordene datos, responsables y documentos base para dar el primer paso administrativo en la formalización de su negocio.",
    details: ["Organización de datos de la compañía y responsables", "Preparación administrativa para registro inicial", "Checklist de próximos pasos, documentos y obligaciones básicas"],
    commonDocuments: ["Nombre de la compañía", "Dirección comercial o postal", "Datos de miembros, responsables o administradores"],
    seoTitle: "Creacion de companias para emprendedores inmigrantes",
    seoDescription: "Asistencia administrativa para preparar documentos de registro de compañías y trámites empresariales iniciales.",
  },
];

export const posts: Post[] = [
  {
    title: "Cómo ordenar evidencia antes de preparar una carpeta",
    slug: "organizar-evidencia-carpeta-migratoria",
    excerpt: "Sepa cómo separar documentos por fecha, tema y tipo de soporte para llegar a su orientación con más claridad.",
    topic: "documentacion",
    publishedAt: "2026-05-02",
    seoTitle: "Como organizar evidencia para tramites migratorios",
    seoDescription: "Checklist educativo para ordenar evidencia y documentos antes de preparar una carpeta migratoria.",
  },
  {
    title: "Qué revisar antes de renovar un permiso de trabajo",
    slug: "renovar-permiso-de-trabajo-checklist",
    excerpt: "Una lista inicial para reunir identificación, permiso anterior, recibos y fechas importantes antes de preparar el paquete.",
    topic: "permisos de trabajo",
    publishedAt: "2026-05-02",
    seoTitle: "Checklist para renovar permiso de trabajo",
    seoDescription: "Recomendaciones administrativas para preparar documentos de renovacion de permiso de trabajo.",
  },
  {
    title: "TPS: documentos que conviene tener a mano",
    slug: "tps-documentos-soporte-preguntas",
    excerpt: "Conozca los soportes administrativos más comunes para revisar identidad, nacionalidad, residencia y fechas clave.",
    topic: "TPS",
    publishedAt: "2026-05-02",
    seoTitle: "TPS: documentos de soporte y preguntas frecuentes",
    seoDescription: "Informacion educativa sobre documentos de soporte para TPS. No constituye asesoria legal.",
  },
];
