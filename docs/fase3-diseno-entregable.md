# Fase 3 — Diseño (Entregable)

**Proyecto:** Web Nortex Systems (nortexsys.com)
**Perfil:** A — Escaparate (sin backend, sin login, sin datos de usuario)
**Fase:** 3 · Diseño (tareas 4 y 5 de la especificación)
**Específicación fuente de verdad:** `fase2-define-spec.md`
**Estado:** ✅ Completada y aprobada visualmente por el Product Owner
**Fecha de cierre:** 25/07/2026

---

## 1. Alcance entregado

Esta fase cubre **únicamente** las tareas 4 y 5 de la spec:

1. **Sistema visual en código** — tokens de color, tipografías, escala tipográfica, escala de espaciado, y componentes base.
2. **Home maquetada como pantalla de referencia** — los 5 bloques definidos en la spec §2 (hero, servicios resumen, método resumen, quiénes somos resumen, CTA final).
3. **Entorno de vista previa desplegado y funcional** — necesario para aprobación visual al no haber mockups.

El resto de páginas (Quiénes somos, Metodología 5D, Servicios, Dónde estamos, Blog, Contacto, legales) **no se han construido** — son Fase 4 y arrancan tras esta aprobación.

---

## 2. Decisiones de marca tomadas (con aprobación del PO)

Estas decisiones no estaban en la spec ni en el brief y fueron planteadas y aprobadas antes de implementar:

| # | Decisión | Opción elegida | Alternativas descartadas |
|---|---|---|---|
| D1 | **Tipografías** | Serif + sans: **Spectral** (titular) + **Inter** (cuerpo) | Inter solo; sans + mono técnico |
| D2 | **Color de acento** (CTAs/enlaces) | Complementario cromático **`#1D4ED8`** (azul eléctrico), hover `#1E40AF` | Aclarar el navy; solo navy sin acento |
| D3 | **Logo sobre fondo claro** | Cabecera oscura (navy) en toda la web → el logo encaja sin versión nueva | Pedir logo al PO; generar variante por código |
| D4 | **Rol de la imagen** | **SVG a medida** (iconos propios) para servicios y método 5D, sin fotos stock | Fotos stock CC0; fotos + SVG; nada |
| D5 | **Discrepancia logo/brief** | Quitar el fondo al logo (transparente), mantener token del brief `#0B1D33` | Igualar fondo al logo; dejar la costura |
| D6 | **Hero: texto vs imagen** | Imagen del hero (full-bleed) en lugar de los 3 textos, con `<h1>` accesible oculto para SEO | Mantener los 3 textos como HTML |
| D7 | **Hero bilingüe** | Imagen por idioma: `hero-es` / `hero-en` (la imagen lleva texto embebido) | Imagen única compartida |

> **Nota de proceso:** D5 y D6 tocaron assets de marca (fondo del logo, sustitución de textos por imagen). Ambas se hicieron con aprobación explícita del PO. El logo original con fondo se conserva en `_work/logo_orig.png`.

---

## 3. Sistema visual

### 3.1 Paleta de color

Tokens crudos en `src/styles/tokens.css`, derivados del brief y verificados contra el logo:

| Token | Hex | Origen / uso |
|---|---|---|
| `--brand-navy` | `#0B1D33` | Main Brand Colour del brief. Fondos oscuros (header, hero, footer). |
| `--brand-graphite` | `#2B3441` | Secondary Brand del brief. Superficies oscuras secundarias. |
| `--brand-grey` | `#E1E4E8` | Other 1 del brief. Líneas y separadores (base; oscurecido a `--border-hair` para AA). |
| `--brand-white` | `#F6F7F8` | Other 2 del brief. Fondos de página claros. |
| `--accent` | `#1D4ED8` | Acento complementario (D2). CTAs y enlaces. |
| `--accent-hover` | `#1E40AF` | Estado hover del acento. |
| `--accent-soft` | `#DBEAFE` | Tinte suave para badges de iconos y focus ring. |

La capa semántica (`src/styles/theme.css`) mapea estos a roles: `--bg-page`, `--bg-surface`, `--bg-inverse`, `--text-primary`, `--text-body`, `--text-muted`, `--text-inverse`, `--border-hair`, `--border-strong`, `--focus-ring`.

### 3.2 Tipografías y escala

- **Spectral** (serif, pesos 600/700) para titulares — vía `next/font/google`.
- **Inter** (sans, pesos 400/500/600/700) para cuerpo — vía `next/font/google`.
- `next/font` autooptimiza la carga (self-hosted, `display=swap`, sin CLS) — contribuye a Lighthouse ≥90.

**Escala tipográfica** (ratio 1.250 — major third):

```
--fs-xs: 0.8rem   --fs-sm: 0.9rem   --fs-base: 1rem   --fs-lg: 1.25rem
--fs-xl: 1.563rem  --fs-2xl: 1.953rem  --fs-3xl: 2.441rem  --fs-4xl: 3.052rem
```

Fuente fluida base: `clamp(100%, 0.5rem + 1.5vw, 112.5%)` (16px → 18px de móvil a escritorio).

### 3.3 Escala de espaciado y layout

- **Espaciado** base 4px: `--sp-1` (.25rem) … `--sp-24` (6rem).
- **Radios:** `--radius` (8px), `--radius-lg` (16px), `--radius-pill`.
- **Sombras:** `--shadow-sm`, `--shadow-md`.
- **Contenedor:** `--container-max` (1200px), `--container-pad` (`--sp-4`).
- **Movimiento:** `--ease`, `--dur-fast` (150ms).

---

## 4. Componentes base

Todos en `src/components/ui/`, con CSS Modules por componente. Sin librería UI externa (simplicity gate del Perfil A).

| Componente | Variantes / props | Archivo |
|---|---|---|
| `Button` | variant: `primary` / `inverse` / `ghost` · size: `md` / `lg` · `href` (link) o button nativo | `Button.tsx` |
| `Card` | `interactive` (hover-lift), `as` (elemento) | `Card.tsx` |
| `Container` | `narrow` (prosa), `as`, `className` | `Container.tsx` |
| `Section` | tone: `default` / `muted` / `inverse`, `id`, `as` | `Section.tsx` |
| `Icon` | 14 iconos propios (9 servicios + 5 fases 5D), `name`, `size`, `title`, hereda `currentColor` | `Icon.tsx` |

### Sistema de iconos SVG a medida

14 iconos de trazo, grid 24×24, stroke consistente 1.6, que se tintan automáticamente con el color del texto (`currentColor`). Sin dependencias, sin licencias, **ultraligeros** (no han añadido peso medible al bundle: sigue en **107 kB** de primera carga).

- **9 servicios:** `web, code, layers, agent, shield, plug, catalog, sales, legacy`.
- **5 fases del método 5D:** `discover, define, design, deliver, demonstrate`.

---

## 5. Layout de la Home

### Cabecera (`Header.tsx`)
Logo transparente + menú de navegación + selector de idioma (ES/EN) + CTA Contacto. Sobre fondo navy (`#0B1D33`).

### Pie (`Footer.tsx`)
Marca + tagline + nota legal (Fawalt Investment S.L.) + enlaces de navegación + contacto (email/teléfono). Sin iconos de redes (Nortex no tiene perfiles activos, según spec).

### Home (`app/[lang]/page.tsx`) — 5 bloques en el orden de la spec §2

1. **Hero** — imagen full-bleed por idioma (`hero-es` / `hero-en`) + CTA "Habla con nosotros" → `/contacto`. `<h1>` accesible oculto visualmente para SEO (la imagen sustituye a los 3 textos originales).
2. **Qué hacemos** — grid responsive de los 9 servicios (título + resumen + icono en badge con tinte de acento), enlazando a `/servicios`.
3. **Cómo trabajamos** — mini-presentación del método 5D en línea (icono + código D1–D5 + nombre), enlazando a `/metodologia`.
4. **Quiénes somos** — extracto de misión y descripción, enlazando a `/quienes-somos`.
5. **CTA final** — bloque navy con propuesta de contacto → `/contacto`.

Toda la copy proviene del brief, servida vía diccionarios JSON i18n.

---

## 6. Internacionalización (i18n)

- **Rutas por idioma:** `/es/...` y `/en/...` vía segmento dinámico `[lang]` del App Router.
- **Middleware** (`src/middleware.ts`): redirige `/` → `/es` (o `/en` según `Accept-Language`), respetando los internals de Next y los assets estáticos.
- **Diccionarios:** `src/i18n/dictionaries/{es,en}.json`, cargados server-side con `getDictionary(lang)`. Nada de `next-intl` ni paquetes externos (simplicity gate).
- **SSG:** `generateStaticParams` prerenderiza las dos rutas en build (estático, óptimo para Lighthouse).
- **Paridad de contenido:** ambos diccionarios reflejan el mismo contenido y estructura (9 servicios, 5 fases 5D, bloques de Home).

---

## 7. Assets de marca

En `public/brand/`:

| Asset | Formato | Peso | Notas |
|---|---|---|---|
| `LOGO_Nortex.png` | PNG RGBA transparente | ~57 KB | Fondo eliminado por código (D5), recortado al contenido 305×203. |
| `hero-es.webp` (+ 1024, +768) | WebP | 164 KB (orig. 1.95 MB) | Hero español, optimizado –97%. |
| `hero-en.webp` (+ 1024, +768) | WebP | 164 KB (orig. 1.91 MB) | Hero inglés, optimizado –97%. |

**Optimización:** las imágenes originales (PNG ~1.9 MB) se convirtieron a WebP con 3 tamaños responsivos (1536/1024/768) servidos vía `<picture>` + `srcset`. Resultado: ~164 KB la versión full, 45–78 KB las responsivas.

---

## 8. Entorno de vista previa

- **Comando:** `npm run build && npx next start -H 127.0.0.1 -p 8790` (build de producción, no dev).
- **URLs:**
  - `http://localhost:8790/` → redirige a `/es`
  - `http://localhost:8790/es`
  - `http://localhost:8790/en`
- **Stack:** Next.js 15.5.21, React 19.2, TypeScript 5.9 estricto.
- **Rendimiento base:** primera carga JS **107 kB**, SSG de las dos rutas, `next/font` autooptimizada.

> **Nota operativa del entorno:** el servidor no persiste entre sesiones del agente y el puerto 8790 puede quedar ocupado por procesos zombie; antes de rearrancar hay que liberarlo (`taskkill` del PID en escucha). Esto es propio del sandbox de desarrollo, no del proyecto.

---

## 9. Criterios de aceptación (referencia)

Cumple los mínimos de Perfil A aplicables a Fase 3 (los relativos a backend/formulario/SEO on-page completo/legales se cubren en fases posteriores):

- ✅ Responsive (móvil, tablet, escritorio) con breakpoints en 640/720/900/960px.
- ✅ Accesibilidad esencial: contraste AA en tokens, focus ring visible, `prefers-reduced-motion`, jerarquía semántica de encabezados, `alt` en imágenes, `aria-label` en navegación.
- ✅ Rendimiento orientado a Lighthouse ≥90 (SSG, `next/font`, imágenes WebP responsivas, SVG inline ultraligero, bundle 107 kB).
- ✅ Tipado estricto TypeScript, build sin errores.

---

## 10. Estructura del repositorio

```
proyecto-web-nortex/
├── docs/
│   └── fase3-diseno-entregable.md   ← este documento
├── public/brand/                    logo + heroes ES/EN (WebP)
├── src/
│   ├── app/
│   │   ├── [lang]/
│   │   │   ├── home.module.css
│   │   │   ├── layout.tsx           layout ES/EN con Header + Footer
│   │   │   └── page.tsx             Home (5 bloques)
│   │   └── layout.tsx               raíz: next/font + globals
│   ├── components/
│   │   ├── layout/                  Header, Footer (+ modules css)
│   │   └── ui/                      Button, Card, Container, Section, Icon (+ modules)
│   ├── i18n/
│   │   ├── config.ts                locales ['es','en'], defaultLocale 'es'
│   │   ├── dictionary.ts            getDictionary(lang)
│   │   ├── dict-type.ts             tipo Dict
│   │   └── dictionaries/            es.json, en.json
│   ├── middleware.ts                redirección / → /es
│   └── styles/
│       ├── tokens.css               capa 1: marca cruda
│       ├── theme.css                capa 2: semánticos
│       └── globals.css              reset + tipografía base
├── fase2-define-spec.md             spec fuente de verdad
├── package.json                     next 15.5.21, react 19.2, ts 5.9
├── next.config.mjs
└── tsconfig.json
```

---

## 11. Próximos pasos — Fase 4

Fase 3 cerrada. Fase 4 arranca con la construcción del resto de páginas según la spec, en el orden de dependencia de la sección 4 de `fase2-define-spec.md`:

- Quiénes somos, The Nortex 5D Method (+ diagrama de flujo), Servicios (9 bloques con navegación interna), Dónde estamos (2 sedes + mapas), Blog (placeholder), Contacto (formulario + anti-spam), páginas legales.
- SEO on-page completo (metas, Open Graph, sitemap, datos estructurados).
- Auditoría de accesibilidad WCAG AA y de rendimiento (Lighthouse ≥90).
- Integración de Google Analytics con banner de consentimiento.

**Recomendación:** abrir sesión nueva para Fase 4, por higiene de contexto.

---

*Entregable generado el 25/07/2026. Fuente de verdad del proyecto: `fase2-define-spec.md`.*
