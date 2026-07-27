# Fase 4 — Construcción (Entregable)

**Proyecto:** Web Nortex Systems (nortexsys.com)
**Perfil:** A — Escaparate (sin backend propio salvo el formulario de contacto)
**Fase:** 4 · Deliver — construcción de las páginas restantes
**Especificación fuente de verdad:** `fase2-define-spec.md`
**Sistema visual base:** `docs/fase3-diseno-entregable.md`
**Estado:** ✅ Construcción completada (pendiente de revisión de cierre con Opus)
**Fecha de cierre de construcción:** 25/07/2026

---

## 1. Alcance entregado

Esta fase construye las páginas que faltaban respecto a Fase 3, en el orden de dependencia de la spec §4, más el SEO on-page transversal y el formulario de contacto.

**12 rutas × 2 idiomas = 24 páginas SSG**, más el endpoint del formulario (dinámico) y `robots.txt` / `sitemap.xml` (estáticos).

| Ruta | ES | EN | Notas |
|---|---|---|---|
| `/` Home | ✅ | ✅ | (Fase 3) + JSON-LD Organization añadido en Fase 4 |
| `/quienes-somos` | ✅ | ✅ | Descripción, misión, 4 valores, a quién servimos |
| `/metodologia` | ✅ | ✅ | Diagrama 5D + detalle D1–D5 con entregables. Rediseñado post-cierre a layout radial/circular en desktop (ver §14) |
| `/servicios` | ✅ | ✅ | 9 bloques + navegación interna (índice sticky 01–09) |
| `/donde-estamos` | ✅ | ✅ | 3 sedes + enlaces a Google Maps |
| `/blog` | ✅ | ✅ | Placeholder "Pronto publicaremos" (noindex) |
| `/contacto` | ✅ | ✅ | Formulario + honeypot + Route Handler (Resend) |
| `/aviso-legal` | ✅ | ✅ | Texto de `docs/AVISO.md` + traducción EN |
| `/privacidad` | ✅ | ✅ | Texto de `docs/PRIVACIDAD.md` + traducción EN |
| `/cookies` | ✅ | ✅ | Texto de `docs/COOKIES.md` + traducción EN |
| `/politica-ia` | ✅ | ✅ | Texto de `docs/AI ACT.md` + traducción EN |
| `/principios-ingenieria` | ⚠️ aviso | ✅ | Solo EN (decisión F4-2); la ruta ES muestra aviso con enlace a la versión EN |

---

## 2. Decisiones del PO (aprobadas en esta fase)

Estas decisiones no estaban resueltas en la spec y se plantearon y aprobaron antes de implementar:

| # | Decisión | Opción aprobada | Alternativas descartadas |
|---|---|---|---|
| F4-1 | Envío del formulario | **Resend** vía Route Handler `/api/contacto` + API key en `.env.local` | mailto:; SMTP directo; sin envío |
| F4-2 | Principios de Ingeniería (ES) | **Solo EN**, con aviso en la ruta ES y enlace a la versión EN | Traducir a ES |
| F4-3 | Google Analytics | **Fuera de esta fase** — sin GA todavía | Integrar GA ahora |
| F4-4 | Sedes "Dónde estamos" | **3 sedes** (España, Latam, Estados Unidos), no 2 como decía la spec original | — |
| F4-5 | Mapas | Enlace textual "Ver en Google Maps" por sede (abre en pestaña nueva, `noopener`) | iframe embebido |

**Nota sobre F4-4:** la spec original listaba 2 sedes (España, Latam, ambas Fawalt). El PO actualizó a 3, añadiendo Estados Unidos bajo la entidad **Guillén Cepeda&Solís**. Como la sede de EE.UU. no figura bajo Fawalt Investment S.L., el intro de la página se reformuló a *"Nortex Systems opera a través de sus entidades en España, Latam y Estados Unidos"*, mostrando la entidad real de cada sede en su tarjeta. **La relación jurídica entre Fawalt y Guillén Cepeda&Solís no se documenta ni se inventa** — queda como decision pendiente del PO si quiere precisarla.

---

## 3. Correcciones a la base de Fase 3 (deuda técnica saldada)

| # | Hallazgo | Corrección |
|---|---|---|
| C1 | `<html lang="es">` hardcodeado en `app/layout.tsx` → incorrecto para `/en` (SEO + a11y) | El shell `<html>`/`<body>` y la `metadata` base se movieron a `app/[lang]/layout.tsx` con `lang` dinámico. La raíz queda como passthrough. Verificado: `<html lang="es">` en `/es`, `<html lang="en">` en `/en`. |
| C2 | Menú móvil ausente (`.nav{display:none}` hasta ≥900px, sin alternativa) → enlaces inaccesibles en móvil | `Header` convertido a client component con toggle accesible: `aria-expanded`, `aria-controls`, cierre con ESC, cierre al navegar, lock de scroll, overlay click-away. |
| C3 | Sin estilos de formulario | Añadidos estilos compartidos `.field` en `globals.css` (labels, inputs, textarea, error, hint, honeypot sr-only). |
| C4 | Footer sin enlaces legales (tarea 13 de la spec pendiente) | Añadida columna "Legal" con los 5 enlaces (aviso, privacidad, cookies, política IA, principios). |
| C5 | Botones externos abrían en misma pestaña | `Button` extendido con prop `external` → `<a target="_blank" rel="noopener noreferrer">`. Usado en los enlaces de Maps. |

---

## 4. Estructura de páginas (lo nuevo en Fase 4)

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx              ← shell <html lang> dinámico + metadata base (movid)
│   │   ├── page.tsx                ← Home (+ JSON-LD Organization)
│   │   ├── quienes-somos/          ← page.tsx + about.module.css
│   │   ├── metodologia/            ← page.tsx + method.module.css (diagrama 5D)
│   │   ├── servicios/              ← page.tsx + services.module.css (índice sticky)
│   │   ├── donde-estamos/          ← page.tsx + location.module.css (+ JSON-LD LocalBusiness)
│   │   ├── blog/                   ← page.tsx + blog.module.css
│   │   ├── contacto/               ← page.tsx + contact.module.css
│   │   ├── aviso-legal/            ← page.tsx (usa LegalDoc)
│   │   ├── privacidad/             ← page.tsx (usa LegalDoc)
│   │   ├── cookies/                ← page.tsx (usa LegalDoc)
│   │   ├── politica-ia/            ← page.tsx (usa LegalDoc)
│   │   └── principios-ingenieria/  ← page.tsx + principios.module.css (EN + aviso ES)
│   ├── api/contacto/route.ts       ← Route Handler (Resend + honeypot + validación)
│   ├── sitemap.ts                  ← 22 URLs (11 rutas × 2 idiomas)
│   └── robots.ts
├── components/
│   ├── layout/{Header,Footer}.tsx  ← Header ahora client (menú móvil); Footer con 5 legales
│   ├── ui/Button.tsx               ← + prop `external`
│   ├── seo/JsonLd.tsx              ← NUEVO: render JSON-LD
│   ├── legal/LegalDoc.tsx          ← NUEVO: layout reutilizable de documento legal
│   └── contact/ContactForm.tsx     ← NUEVO: formulario cliente (honeypot + validación)
├── content/legal/                  ← NUEVO: texto legal como datos TSX (ES+EN)
│   ├── aviso.tsx
│   ├── privacidad.tsx
│   ├── cookies.tsx
│   ├── aiact.tsx
│   └── principios.tsx
└── i18n/dictionaries/{es,en}.json  ← ampliados (about, methodPage, servicesPage, blogPage,
                                       contactPage, locationPage, + footer legal)
```

---

## 5. Sistema visual — sin deriva

Fase 4 **no introduce tokens, componentes ni patrones nuevos** más allá de lo aprobado en Fase 3. Reutiliza `Button`, `Card`, `Container`, `Section`, `Icon`. Las únicas adiciones son componentes estructurales (`LegalDoc`, `JsonLd`, `ContactForm`) y el módulo de contenido legal, todos siguiendo el patrón existente (CSS Modules, sin librería externa).

**Dependencias nuevas:** solo `resend` (aprobada, F4-1). Sin librerías UI ni de i18n (simplicity gate respetado).

---

## 6. SEO on-page

| Elemento | Implementación |
|---|---|
| Meta title/description | `generateMetadata` por página, con `title.template` heredado del layout (`"%s · Nortex Systems"`) |
| Open Graph + Twitter | Configurado en `app/[lang]/layout.tsx` (metadataBase, OG type/siteName/locale, twitter card) |
| `hreflang` | `alternates.languages` {es,en} en cada página |
| Canonical | Vía `metadataBase` + ruta |
| `sitemap.xml` | `app/sitemap.ts` — 22 URLs, blog y `/es/principios-ingenieria` excluidos (noindex) |
| `robots.txt` | `app/robots.ts` — allow `/`, disallow `/api/`, referencia al sitemap |
| JSON-LD | `Organization` en Home; `Organization` + 3× `LocalBusiness` (@graph) en Dónde estamos |

**Origen configurable:** `NEXT_PUBLIC_SITE_URL` (por defecto `https://nortexsys.com`) para sitemap/robots/metadataBase.

---

## 7. Formulario de contacto — verificación funcional

Endpoint `POST /api/contacto`. Cuatro casos probados contra el build de producción:

| Caso | Resultado | Comportamiento |
|---|---|---|
| Honeypot rellenado (`company` no vacío) | **200** | Aceptado silenciosamente, **no se envía email** (el bot no detecta el rechazo) |
| Validación falla (email vacío) | **422** `{error:"validation", fields:{email:"required"}}` | — |
| Payload válido sin `RESEND_API_KEY` | **503** `{error:"not_configured"}` | Degradación controlada; el UI muestra error accionable |
| JSON malformado | **400** `{error:"invalid_payload"}` | — |

**Anti-spam:** honeypot (`company`, campo `aria-hidden` + `tabIndex=-1`, no `display:none`), validación server-side (email, requeridos, tamaño máximo 5000 caracteres). Validación client-side en espejo con `aria-invalid` y mensajes `role="alert"`.

**Pendiente de activación:** para que el envío real funcione hay que crear la cuenta de Resend, verificar el dominio `nortexsys.com` y configurar en `.env.local`:
```
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=contacto@nortexsys.com   # o onboarding@resend.dev mientras se verifica
CONTACT_TO_EMAIL=contact@nortexsys.com
```

---

## 8. Accesibilidad (auditoría estática WCAG AA)

| Criterio | Estado |
|---|---|
| Contraste AA en tokens y textos | ✅ (tokens verificados en Fase 3; rojo de error `#b91c1c` sobre blanco ~5.9:1) |
| Focus ring visible | ✅ `:focus-visible` global + `--focus-ring` |
| `prefers-reduced-motion` | ✅ transitions/animaciones desactivadas en `globals.css` y en los CSS modules de páginas con movimiento |
| Jerarquía semántica de encabezados | ✅ un `<h1>` por página, `<h2>` por bloque, `<h3>` anidados |
| `alt` en imágenes | ✅ las 3 `<img>` (logo + 2 heroes) con alt descriptivo |
| `aria-label` en navegación | ✅ nav primary/footer/mobile/lang-switch/menu-toggle |
| Navegación por teclado | ✅ menú móvil operable (ESC, tab, click-away); formulario navegable |
| Formularios accesibles | ✅ `<label>` asociadas, `aria-required`, `aria-invalid`, `aria-describedby`, errores `role="alert"` |
| `lang` del documento correcto | ✅ dinámico por locale (corrección C1) |

> **Nota sobre Lighthouse:** el entorno del agente no ejecuta Lighthouse/Chrome headless. El objetivo ≥90 está orientado por las decisiones de arquitectura (SSG, `next/font`, SVG inline, WebP responsivo, bundle 103–107 kB, sin CLS), pero la medición numérica real debe hacerse en el despliegue.

---

## 9. Rendimiento (indicadores del build)

- **First Load JS:** 103 kB compartido + 0.3–1.6 kB por página. Todas las páginas ≤107 kB.
- **SSG:** 24 páginas prerenderizadas como HTML estático.
- **`next/font`:** Spectral + Inter self-hosted, `display=swap`, sin CLS.
- **Imágenes:** hero WebP responsivo (3 tamaños vía `<picture>`); SVG inline para iconos y diagrama.
- **Sin librerías UI ni i18n externas.**

---

## 10. Internacionalización — paridad ES/EN

- Ambos diccionarios actualizados juntos, misma estructura.
- **Única excepción documentada:** Principios de Ingeniería (solo EN, decisión F4-2). La ruta ES muestra un aviso y enlaza a la versión EN.
- Las 4 páginas legales clásicas están completas en ambos idiomas con los mismos datos de Fawalt (NIF B16870008, Madrid).

---

## 11. Vulnerabilidades conocidas (npm audit)

El `npm install` de `resend` reportó **3 vulnerabilidades high** en dependencias transitivas de `next` (`postcss`, `sharp`), **preexistentes** (no introducidas por Resend). `npm audit fix --force` propone bajar Next de 15 a 9.3 (destructivo) y no se ha aplicado. Son advisories de build-time/dev tooling, no vectores explotables en runtime para un sitio estático. Se dejan como deuda para revisar en una pasada de dependencias separada.

---

## 12. Pendientes / fuera de esta fase

| Pendiente | Detalle |
|---|---|
| Activación del envío real del formulario | Requiere cuenta Resend + verificación de dominio + `.env.local` (ver §7) |
| Google Analytics | Pospuesto (F4-3). No hay infraestructura de consentimiento cargando GA. |
| Lighthouse medido | Requiere Chrome headless; ejecutar sobre el despliegue |
| Relación jurídica Fawalt ↔ Guillén Cepeda&Solís | El PO puede querer precisarla para "Dónde estamos" (ver §2, F4-4) |
| Misión del brief | El CSV original tiene la misión truncada; la copia publica el texto recuperable y queda al cierre del PO confirmar/redactar el final |
| Medición de objetivos | La spec §5 deja abierta la cifra objetivo de la web (leads/mes); no es de construcción |

---

## 13. Criterios de aceptación de la spec §3 — estado

| Criterio | Estado |
|---|---|
| Responsive (móvil/tablet/desktop) en breakpoints 640/720/900/960 | ✅ |
| Accesibilidad WCAG AA esencial | ✅ (estática; Lighthouse pendiente) |
| SEO on-page (metas, OG, sitemap, datos estructurados) | ✅ |
| Formulario envía a contact@nortexsys.com con anti-spam | ✅ (estructura; activación real pendiente de API key) |
| Lighthouse ≥90 (Performance/Accessibility en Home y Servicios) | ⏳ medir en despliegue |
| 10 páginas × 2 idiomas = 20 publicadas | ✅ (24 con las legales extra; blog y principios gestionados) |
| Blog placeholder "Pronto publicaremos" ES/EN | ✅ |
| Diagrama 5D con las 5 fases, responsive | ✅ |
| Dónde estamos: sedes con dirección + enlace Maps funcional | ✅ (3 sedes) |
| Legales enlazadas desde el footer | ✅ (5 legales) |
| Contenido de servicios/misión/valores/metodología sin deriva del brief | ✅ (fuente: brief + doc de Identidad y Metodología) |

---

## 14. Iteración post-cierre — layout radial en `/metodologia` (27/07/2026)

Tras el cierre de Fase 4, el PO pidió reforzar visualmente que el método 5D es un **ciclo** (no un flujo lineal que termina): las 5 fases se redistribuyen alrededor de una circunferencia en vez de en fila/columna con flechas rectas.

**Cambios respecto a la versión de construcción (§1):**

| # | Cambio | Detalle |
|---|---|---|
| R1 | Layout radial en desktop (≥960px) | Las fases D1–D5 se posicionan sobre una circunferencia — D1 (Discover) a las 12h, resto en sentido horario — mediante coordenadas polares (`cos`/`sin`) calculadas en `wheelPosition()` (`page.tsx`) y aplicadas como `top`/`left` con `position: absolute`. Track punteado + hub decorativo central vía pseudo-elementos `::before`/`::after` en `.diagram`. |
| R2 | Flechas de flujo tangenciales | Un conector entre cada par de fases consecutivas (D1→D2 … D4→D5) más uno de cierre D5→D1, rotado tangencialmente (`--rotate` por CSS custom property) para indicar sentido horario. |
| R3 | Mobile sin cambios | Por debajo de 960px se mantiene la lista vertical original (icono + código + nombre + flecha hacia abajo), sin el conector de cierre (no tiene sentido en una lista lineal). |
| R4 | Layout intro + rueda en fila | La intro (H1 + lead) y la rueda pasan a compartir una fila (`grid-template-columns: minmax(0, 60ch) 1fr`) desde 960px: el texto ocupa su medida habitual (60ch, igual que `.lead`) y la rueda usa el ancho restante a su derecha, en vez de ir centrada a ancho completo debajo. |
| R5 | Rueda reducida de tamaño | De `34rem` a `19rem` de diámetro máximo, con iconos, tipografía y flechas reducidos proporcionalmente, para que quepa junto al texto sin dominar la sección. |
| R6 | Badge "Ciclo de mejora continua" eliminado | El pill de texto bajo el lead (con el recorrido D1→D5 en mono) se retiró: el layout radial ya comunica visualmente el ciclo, y resultaba redundante. |

**Patrón técnico:** este tipo de composición se conoce como **layout radial** (*radial/circular layout*) — posicionamiento de elementos mediante coordenadas polares (ángulo + radio) en vez de flexbox/grid lineal, sobre un contenedor `position: relative` que actúa de sistema de referencia. Es el mismo principio que un *donut chart* o un *radial menu*, aplicado aquí a un diagrama de proceso cíclico.

**Archivos afectados:** `src/app/[lang]/metodologia/page.tsx`, `src/app/[lang]/metodologia/method.module.css`, `src/components/ui/Icon.tsx` (el icono `cycle` añadido para el badge se creó y luego se retiró junto con R6, sin quedar código muerto).

---

*Entregable generado el 25/07/2026. Fuente de verdad del proyecto: `fase2-define-spec.md`. Pendiente de revisión de cierre con Opus (evaluación de criterios de salida) antes de dar la fase por aprobada.*
