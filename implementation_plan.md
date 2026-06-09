# Implementation Plan: Sistema Visual Premium Cielo-Noche

<vibe_coding_protocol_execution>
  <phase name="planificar">
    <objective>
      Convertir la experiencia actual en un sistema dual coherente: hero luminoso
      con superficies claras y cuerpo nocturno con superficies oscuras, garantizando
      legibilidad, accesibilidad y rendimiento en todas las rutas.
    </objective>
    <business_benefit>
      Mejorar confianza, comprensión y conversión al eliminar textos ilegibles,
      reforzar la jerarquía visual y ofrecer una experiencia premium estable en
      dispositivos móviles y de escritorio.
    </business_benefit>
  </phase>

  <approved_direction>
    <visual_system>Dual cielo-noche.</visual_system>
    <depth>Sistema completo: visual, accesibilidad, rendimiento, motion y QA.</depth>
    <approval>
      El usuario aprobó explícitamente la implementación mediante el mensaje
      "PLEASE IMPLEMENT THIS PLAN".
    </approval>
  </approved_direction>

  <implementation_guardrails>
    <contrast>
      Ningún texto dependerá del fondo ilustrado para ser legible. Las superficies
      claras usarán texto oscuro y las superficies oscuras usarán texto claro,
      con contraste WCAG AA.
    </contrast>
    <identity>
      Conservar identidad azul, roja, cielo y noche sin modificar el posicionamiento
      comercial ni el copy salvo ajustes mínimos de legibilidad.
    </identity>
    <accessibility>
      Incorporar foco visible, navegación por teclado, semántica de diálogo,
      atributos ARIA y soporte para prefers-reduced-motion.
    </accessibility>
    <performance>
      Reducir blur y efectos costosos, eliminar imágenes remotas críticas y dividir
      páginas por ruta sin actualizar dependencias mayores.
    </performance>
    <security>
      No escribir secretos, tokens o credenciales en archivos versionados.
    </security>
  </implementation_guardrails>

  <implementation_phases>
    <phase name="sistema_visual">
      Crear tokens semánticos y variantes light, dark y elevated para GlassCard.
      Estabilizar el hero luminoso y elevar el contraste del cuerpo nocturno.
    </phase>
    <phase name="accesibilidad_interaccion">
      Convertir controles no semánticos, mejorar foco, acordeones, modal y formularios.
    </phase>
    <phase name="rendimiento_estructura">
      Cargar rutas de forma diferida, optimizar fondos y reducir efectos globales.
    </phase>
    <phase name="validar">
      Ejecutar lint/build y revisar todas las rutas en desktop, tablet y mobile.
    </phase>
  </implementation_phases>

  <validation_plan>
    <automated_checks>
      <check>npm run lint</check>
      <check>npm run build</check>
    </automated_checks>
    <browser_validation>
      Revisar /, /servicios, /cursos, /nosotros y /contacto en 390x844,
      768x1024, 1280x720 y 1440x900.
    </browser_validation>
    <acceptance_criteria>
      Sin texto ilegible sobre nubes o tarjetas, sin overflow horizontal,
      foco visible, navegación por teclado funcional, modal accesible y consola
      sin errores.
    </acceptance_criteria>
  </validation_plan>
</vibe_coding_protocol_execution>

# Implementation Plan: Heroes Editoriales Coherentes

<vibe_coding_protocol_execution>
  <phase name="planificar">
    <objective>
      Reemplazar los visuales fragmentados de Emprender y Nosotros por escenas
      editoriales unicas, creadas para el formato real del hero.
    </objective>
    <business_benefit>
      Mejorar coherencia, intuicion y percepcion premium al comunicar metodo
      profesional y confianza humana con una sola idea visual por ruta.
    </business_benefit>
  </phase>

  <approved_direction>
    <visual_system>
      Objetos editoriales sin banderas, textos, logos, collages, franjas,
      nubes repetidas ni simbolos legales.
    </visual_system>
    <scope>
      Modificar unicamente los heroes de Emprender y Nosotros, conservando
      estructura, copy, cristal y CTAs.
    </scope>
    <approval>
      El usuario aprobo explicitamente la implementacion mediante el mensaje
      "PLEASE IMPLEMENT THIS PLAN".
    </approval>
  </approved_direction>

  <implementation_guardrails>
    <assets>
      Generar dos escenas fuente y producir derivados WebP 4:5 y 4:3,
      visualmente limpios y con peso objetivo menor a 250 KB.
    </assets>
    <accessibility>
      Mantener imagenes decorativas con alt vacio, contraste, reduced-motion
      y navegacion existente.
    </accessibility>
    <compatibility>
      Ampliar EditorialHero con mobileImage opcional sin alterar consumidores
      existentes ni agregar dependencias.
    </compatibility>
    <security>
      No escribir secretos, tokens ni credenciales en archivos versionados.
    </security>
  </implementation_guardrails>

  <implementation_phases>
    <phase name="generar_assets">
      Crear y optimizar escenas editoriales para Emprender y Nosotros.
    </phase>
    <phase name="integrar">
      Agregar art direction responsive a EditorialHero y conectar los nuevos assets.
    </phase>
    <phase name="validar">
      Ejecutar lint, build, diff-check y QA responsive en ambas rutas.
    </phase>
  </implementation_phases>

  <validation_result status="completed">
    <automated_checks>
      <check status="passed">npm run lint</check>
      <check status="passed">npm run build</check>
      <check status="passed">git diff --check</check>
    </automated_checks>
    <asset_checks>
      <check status="passed">Derivados 4:5 y 4:3 entre 40 KB y 49 KB</check>
      <check status="passed">Mobile y tablet cargan mobileImage; desktop carga image</check>
    </asset_checks>
    <browser_checks>
      <check status="passed">Emprender y Nosotros sin franjas, collages ni sujetos cortados</check>
      <check status="passed">Sin overflow, overlays de error ni errores de consola</check>
      <check status="passed">Validado en 390x844, 768x1024, 1280x720 y 1440x900</check>
    </browser_checks>
  </validation_result>
</vibe_coding_protocol_execution>

# Implementation Plan: Arquitectura Intuitiva Con Identidad Por Ruta

<vibe_coding_protocol_execution>
  <phase name="planificar">
    <objective>
      Reorganizar America Tramites alrededor de tres recorridos claramente
      diferenciados: Emprender, Tramites y Aprender, preservando una home breve
      que clasifique la intencion y derive al siguiente paso correcto.
    </objective>
    <business_benefit>
      Reducir confusion, mejorar orientacion y conversion, y hacer que cada pagina
      comunique una propuesta especifica antes de que el usuario tenga que explorar
      contenido extenso.
    </business_benefit>
  </phase>

  <approved_direction>
    <architecture>
      Home como selector breve; Emprender como ruta profesional; Tramites como
      selector operativo; Aprender como centro educativo; Contacto contextual.
    </architecture>
    <visual_system>
      Recuperar cristal editorial legible en heroes y rutas destacadas, usando
      estructuras y escenas locales distintas por pagina.
    </visual_system>
    <approval>
      El usuario aprobo explicitamente la implementacion mediante el mensaje
      "PLEASE IMPLEMENT THIS PLAN".
    </approval>
  </approved_direction>

  <implementation_guardrails>
    <content>
      Mantener limites legales visibles y no agregar asesoria, promesas de
      aprobacion ni afirmaciones legales especificas.
    </content>
    <accessibility>
      Conservar contraste WCAG AA, reduced-motion, navegacion por teclado,
      semantica de dialogo y foco visible.
    </accessibility>
    <compatibility>
      Mantener redirecciones desde /servicios y /cursos hacia las nuevas rutas
      canonicas sin agregar dependencias ni integracion backend.
    </compatibility>
    <security>
      No escribir secretos, tokens ni credenciales en archivos versionados.
    </security>
  </implementation_guardrails>

  <implementation_phases>
    <phase name="datos_y_rutas">
      Crear intenciones compartidas, categorizar servicios, agregar slugs estables
      y configurar rutas canonicas y redirecciones.
    </phase>
    <phase name="experiencias">
      Construir experiencias propias para Home, Emprender, Tramites, Aprender,
      Nosotros y Contacto contextual.
    </phase>
    <phase name="sistema_visual">
      Crear EditorialHero y tratamiento de cristal editorial, reservando superficies
      solidas para contenido largo y formularios.
    </phase>
    <phase name="validar">
      Ejecutar lint/build y validar rutas, filtros, microguias, dialogo, contacto
      contextual y responsividad en navegador.
    </phase>
  </implementation_phases>

  <validation_result status="completed">
    <automated_checks>
      <check status="passed">npm run lint</check>
      <check status="passed">npm run build</check>
      <check status="passed">git diff --check</check>
    </automated_checks>
    <browser_checks>
      <check status="passed">Rutas canonicas y redirecciones antiguas</check>
      <check status="passed">Filtros, microguias, dialogo y formulario contextual</check>
      <check status="passed">Escape, foco, ARIA y consola sin errores</check>
      <check status="passed">Sin overflow en 390x844, 768x1024, 1280x720 y 1440x900</check>
    </browser_checks>
  </validation_result>
</vibe_coding_protocol_execution>
