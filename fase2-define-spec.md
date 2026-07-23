# Especificación de Producto — Web Nortex Systems (nortexsys.com)

**Fase:** 2 · Definición (Spec-Driven Development)
**Perfil:** A — Escaparate (sin backend propio, formulario de contacto notificador)
**Estado:** Pendiente de aprobación del Product Owner (Álvaro)
**Origen:** Brief cerrado (Tally.so, 23/07/2026) + aclaraciones del PO (23/07/2026)

---

## 1. Resumen del proyecto

Nortex Systems necesita una web corporativa que presente la firma como consultora de software a medida, IA agéntica y transformación digital, dirigida a pequeñas y medianas empresas en España, Latam y Estados Unidos en distintos estadios de digitalización. La web debe cumplir dos funciones: dar imagen de marca seria y rigurosa, y actuar como canal de promoción y captación de clientes a través del formulario de contacto.

El cliente define como objetivo "obtener clientes y visitas" a través de la web. Este objetivo, tal como está formulado en el brief, no es verificable: no especifica una cifra ni un plazo con el que comparar el resultado (ver punto abierto en sección 5). La web se construye en español e inglés, con identidad visual ya definida (logo y paleta de marca aportados) y contenido estructurado en torno a la propuesta de valor, el método propietario de trabajo (5D) y los nueve bloques de servicios de Nortex. El blog se contempla como sección futura: en esta fase solo se reserva su espacio en el sitio, sin contenido ni CMS.

No hay área privada, login, ni almacenamiento de datos de usuario: el único punto de interacción es un formulario de contacto que notifica por email a contact@nortexsys.com.

---

## 2. Arquitectura de contenido

### Navegación principal
Quiénes somos · The Nortex 5D Method · Servicios · Dónde estamos · Blog · Contacto (CTA)

Selector de idioma ES/EN visible en la cabecera.

### Home (`/`)
**Objetivo:** que el visitante entienda en segundos qué hace Nortex y a quién sirve, y lo lleve a explorar servicios o contactar.

Bloques, en orden:
1. Hero — propuesta de valor: "Construimos software a medida partiendo de una definición clara del problema, no de suposiciones." Subtexto breve sobre el rango de proyectos (de negocios que digitalizan desde cero a plataformas que escalan con IA agéntica). CTA: "Habla con nosotros" → `/contacto`.
2. Qué hacemos — resumen visual de los 9 bloques de servicios (título + una línea cada uno), enlazando a `/servicios`.
3. Cómo trabajamos — mini-presentación del método 5D (los 5 nombres de fase en línea), enlazando a `/metodologia`.
4. Quiénes somos — extracto de misión y valores, enlazando a `/quienes-somos`.
5. CTA final de contacto.

**Origen del contenido:** brief (propuesta de valor, misión, valores) + a redactar (copys de transición entre bloques).

### Quiénes somos (`/quienes-somos`)
**Objetivo:** transmitir credibilidad y alineación de valores para negocios que evalúan confiar un proyecto a Nortex.

Bloques:
1. Descripción de la compañía (texto del brief, editado a longitud web).
2. Misión.
3. Valores: Claridad, Integridad, Precisión, Alianza — cada uno con su descripción breve del brief.
4. A quién servimos: pymes en cualquier estadio de digitalización, en España, Latam y Estados Unidos.

CTA: enlace a Servicios o Contacto.

**Origen del contenido:** brief (directo, requiere solo maquetación/edición ligera).

### The Nortex 5D Method (`/metodologia`)
**Objetivo:** diferenciar a Nortex como firma que sigue un proceso disciplinado, no solo "entrega código".

Bloques:
1. Introducción: ciclo de mejora continua Discover → Define → Design → Deliver → Demonstrate.
2. Diagrama de flujo de las 5 fases, con diseño de estética tecnológica, conectadas secuencialmente (y con indicación de ciclo continuo, ya que Demonstrate retroalimenta a Discover). Cada caja del diagrama:
   - Caja 1: Discover — Baseline Audit
   - Caja 2: Define — Functional Analysis
   - Caja 3: Design — Spec & Roadmap
   - Caja 4: Deliver — Build & Implement
   - Caja 5: Demonstrate — Compare & Prove ROI
3. Detalle de cada fase (D1–D5), cada una con: título, subtítulo (los indicados arriba), descripción y lista de entregables, tal como constan en el brief.
4. Cierre: "Por qué importa esta metodología" (texto del brief).
5. CTA a Contacto o Servicios.

**Origen del contenido:** brief (texto completo aportado por el PO). El diagrama es a diseñar (elemento visual, no texto).

### Servicios (`/servicios`)
**Objetivo:** que cada tipo de visitante (negocio que empieza a digitalizarse, empresa con necesidad de software a medida, producto que escala, etc.) identifique su caso y entienda qué ofrece Nortex.

Bloques, uno por cada bloque de servicio del brief, en el mismo orden y con su título, frase de encabezado y lista de servicios:
1. Digitalización y presencia web
2. Software a medida
3. Plataformas y productos digitales
4. IA agéntica y automatización
5. Soluciones para sectores regulados
6. Integración con proveedores y clientes
7. Digitalización de catálogos
8. IA para incremento de ventas
9. Inteligencia a partir de datos legacy

Cada bloque de servicio incluye su título, subtítulo/target ("Para negocios que..."), y la lista de servicios concretos, tal como están redactados en el brief. Recomendado: navegación interna tipo anclas o acordeón dado el volumen de contenido, para no penalizar la primera pantalla.

CTA final: "¿No sabes por dónde empezar? Hablemos" → Contacto.

**Origen del contenido:** brief (texto completo, directo).

### Dónde estamos (`/donde-estamos`)
**Objetivo:** dar confianza de presencia física y cobertura geográfica en las dos zonas de operación.

Bloques:
1. Introducción: "Nortex Systems es la marca comercial bajo la cual Fawalt Investment S.L. presta el servicio", con cobertura en España, Latam y Estados Unidos.
2. Dos tarjetas/bloques, uno por sede:
   - **España** — Fawalt Investment S.L., Calle Núñez de Balboa, 118, 1i, Madrid, 28006. Enlace a Google Maps.
   - **Latam** — Fawalt Investment S.L., Calle Anastasio Ruiz, oficina E-9, corregimiento de Bella Vista, provincia de Panamá, República de Panamá. Enlace a Google Maps.
3. Datos de contacto generales: contact@nortexsys.com, teléfono +34 673 764 987.

**Origen del contenido:** aportado por el cliente (aclaración del PO, 23/07/2026).

### Blog (`/blog`)
**Objetivo:** reservar la sección en navegación sin comprometer alcance de esta fase.

Bloques:
1. Página placeholder con mensaje "Pronto publicaremos" (o equivalente en inglés: "Coming soon").
2. Sin listado de artículos, sin CMS, sin lógica de publicación.

**Origen del contenido:** a redactar (una frase). Fuera de alcance de Perfil A el desarrollo de blog funcional; se marca como pendiente de decisión futura sobre plataforma (posible Perfil B si requiere backend de contenido).

### Contacto (`/contacto`)
**Objetivo:** convertir la visita en lead.

Bloques:
1. Formulario de contacto con campos: Nombre, Email, Teléfono, Empresa, Mensaje.
2. Envío por email a: contact@nortexsys.com.
3. Protección anti-spam (honeypot o equivalente + validación).
4. Confirmación visual de envío correcto al usuario.
5. Datos de contacto directo (email, teléfono) como alternativa al formulario.

**Origen del contenido:** brief (campos y email de recepción, directo).

### Navegación y estructura transversal
- **Cabecera:** logo, menú principal, selector de idioma, CTA "Contacto".
- **Pie de página:** logo/nombre, enlaces a las secciones principales, datos legales resumidos (razón social, enlaces a Aviso legal / Privacidad / Cookies), email y teléfono de contacto. Sin iconos ni enlaces a redes sociales: Nortex no tiene perfiles activos todavía; se añadirán cuando existan.
- **Páginas legales obligatorias** (contenido a redactar, ver criterios de aceptación y escalado):
  - Aviso legal — con datos de Fawalt Investment S.L. (CIF B16870008, domicilio Madrid).
  - Política de privacidad.
  - Política de cookies.
- **Idiomas:** Español (por defecto) e Inglés, en todas las páginas listadas arriba.

---

## 3. Criterios de aceptación

**Mínimos de Perfil A:**
- La web es responsive (móvil, tablet, escritorio) y cumple accesibilidad WCAG AA en los aspectos esenciales (contraste de color, navegación por teclado, textos alternativos en imágenes, jerarquía semántica de encabezados).
- SEO on-page implementado: meta title y meta description únicos por página, Open Graph para redes sociales, sitemap.xml, datos estructurados básicos (Organization/LocalBusiness) en Home y Dónde estamos.
- El formulario de contacto envía correctamente el email a contact@nortexsys.com, con protección anti-spam verificable (un envío automatizado de prueba no debe llegar a la bandeja).
- Rendimiento: Lighthouse ≥90 en Performance y ≥90 en Accessibility, medido en Home y en la página de Servicios (la más pesada en contenido).

**Específicos de este proyecto:**
- Las 10 páginas del sitio (Home, Quiénes somos, Metodología 5D, Servicios, Dónde estamos, Blog, Contacto, Aviso legal, Privacidad, Cookies) están publicadas en español e inglés, con el mismo contenido y estructura en ambos idiomas. Esto equivale a 20 páginas construidas en total (10 rutas × 2 idiomas).
- La página `/blog` existe, está enlazada desde la navegación y muestra el mensaje "Pronto publicaremos" en ambos idiomas, sin enlaces rotos ni funcionalidad adicional.
- El diagrama de flujo de la metodología 5D muestra las 5 fases en orden, con título y subtítulo correctos según el brief, y es legible tanto en escritorio como en móvil (verificable visualmente en ambos breakpoints).
- La página Dónde estamos muestra las dos sedes (España y Panamá) con su dirección completa y un enlace funcional a Google Maps que abre la ubicación correcta de cada una.
- Las páginas legales (Aviso legal, Privacidad, Cookies) están publicadas y enlazadas desde el pie de página en todas las páginas del sitio.
- Ningún texto de servicios, misión, valores o metodología difiere en contenido sustantivo del texto aportado en el brief (edición permitida solo por longitud/formato web, no por significado).

---

## 4. Lista de tareas de construcción

En orden de dependencia. Cada tarea es una unidad de trabajo ejecutable de forma independiente.

1. Configurar estructura base del proyecto (rutas ES/EN, layout, cabecera y pie de página vacíos).
2. Implementar cabecera: logo, menú de navegación, selector de idioma, CTA Contacto.
3. Implementar estructura base del pie de página: layout, enlaces de navegación, redes sociales, contacto. Sin enlaces a páginas legales todavía (se añaden en la tarea 13).
4. Construir página Home con los 5 bloques definidos (hero, servicios resumen, método resumen, quiénes somos resumen, CTA). *(Bloque "copys de transición" pendiente de redacción — ver sección 5).*
5. Construir página Quiénes somos con descripción, misión y los 4 valores.
6. Construir página The Nortex 5D Method: introducción, detalle de las 5 fases con entregables, cierre.
7. Diseñar e implementar el diagrama de flujo de las 5 fases (componente visual, estética tecnológica, responsive).
8. Construir página Servicios con los 9 bloques de servicio, con navegación interna (anclas o acordeón).
9. Construir página Dónde estamos con las dos sedes y sus mapas.
10. Construir página Blog placeholder ("Pronto publicaremos", ES/EN).
11. Construir página Contacto: formulario, validación, envío a contact@nortexsys.com, protección anti-spam, mensaje de confirmación.
12. Redactar y publicar páginas legales (Aviso legal, Privacidad, Cookies) con los datos de Fawalt Investment S.L. *(Marcada como pendiente de escalado — ver sección 5, implicación legal sin resolver).*
13. Añadir al pie de página los enlaces a Aviso legal, Privacidad y Cookies. *(Depende de la tarea 12).*
14. Implementar SEO on-page: metas, Open Graph, sitemap.xml, datos estructurados en Home y Dónde estamos. Incluye integración de Google Analytics (única herramienta de analítica, sin coste).
15. Traducir las 10 páginas del sitio (incluidas las tres legales) al inglés y verificar paridad de contenido y estructura en las 20 páginas resultantes.
16. Auditoría de accesibilidad WCAG AA y ajustes.
17. Auditoría de rendimiento (Lighthouse) en Home y Servicios, y ajustes hasta alcanzar ≥90/≥90.
18. Prueba funcional del formulario de contacto (envío real + intento de spam automatizado).
19. Revisión final de contenido contra este documento antes de publicación.

---

## 5. Puntos a escalar al Product Owner (no decididos en esta spec)

- **Páginas legales (Aviso legal, Privacidad, Cookies):** el brief indica "No" en registro de detalles adicionales y no aporta textos legales. Esta es una implicación legal sin resolver (tratamiento de datos del formulario, cookies de analítica) — requiere que el PO apruebe el texto legal antes de publicar, o indique quién lo redacta/revisa.
- **Analítica:** resuelto — se implementa Google Analytics (gratuito). No se contratará ninguna herramienta de pago para esta web por el momento.
- **Blog:** confirmado que se pospone. Cuando se aborde, previsiblemente exige revisar si sigue siendo Perfil A (contenido estático en repo) o pasa a Perfil B (CMS con backend) — decisión a tomar en su momento, no ahora.
- **Objetivo verificable de la web:** "obtener clientes y visitas" no es un criterio que se pueda dar por cumplido o no a los 6 meses, porque no fija una cifra. Al ser Nortex una empresa nueva, tampoco hay una línea base propia con la que comparar el resultado. Se necesita del PO una cifra concreta — por ejemplo, un número de contactos cualificados al mes a través del formulario — para poder fijarlo como criterio de aceptación del negocio (no de la construcción técnica).

---

**Este documento requiere aprobación del Product Owner antes de pasar a Fase 3 (Construcción).**
