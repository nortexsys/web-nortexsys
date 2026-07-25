---
name: Nortex Systems
description: Corporate consultancy site for software a medida, agentic AI, and digital transformation
colors:
  navy: "#0b1d33"
  graphite: "#2b3441"
  hairline-grey: "#e1e4e8"
  paper-white: "#f6f7f8"
  accent: "#1d4ed8"
  accent-hover: "#1e40af"
  accent-soft: "#dbeafe"
  bg-surface: "#ffffff"
  bg-muted: "#eef0f3"
  text-body: "#1f2733"
  text-muted: "#5b6675"
  border-hair: "#d5dae0"
typography:
  display:
    fontFamily: "Spectral, Georgia, 'Times New Roman', serif"
    fontSize: "3.052rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace"
    fontSize: "0.9rem"
    fontWeight: 600
rounded:
  sm: "8px"
  lg: "16px"
  pill: "999px"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  6: "1.5rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  24: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-inverse:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Nortex Systems

<!-- Extraído del código incumbente (src/styles/tokens.css, theme.css, componentes UI) el 2026-07-25. El lenguaje descriptivo (North Star, nombres de color, filosofía de componentes) es una inferencia del agente a partir de los valores observados, no confirmado aún por el usuario en entrevista. Revisar y ajustar la prosa si no encaja. -->

## Overview

**Creative North Star: "El Cuaderno de Bitácora del Consultor" (The Consultant's Logbook)**

Una superficie sobria, casi institucional: fondo casi blanco, texto sobre navy profundo, un único azul eléctrico que aparece solo en puntos de acción (CTAs, enlaces, iconos de servicio). La tipografía combina una serif de cabecera (Spectral) —que aporta el peso y la seriedad de un documento profesional— con una sans de cuerpo (Inter) para la lectura extensa, y una mono (JetBrains Mono) reservada a los códigos del método 5D y los identificadores de servicio, como si fueran anotaciones técnicas al margen. No hay imágenes decorativas ni ilustración; el hero usa fotografía real a página completa. La superficie es plana en reposo — sin sombras salvo una elevación sutil en hover de tarjetas — y las esquinas son suavemente redondeadas (8px), nunca afiladas ni muy curvas.

**Key Characteristics:**
- Un solo acento (azul eléctrico) usado con moderación, nunca como color de fondo extenso.
- Jerarquía dual serif/sans: Spectral para titulares y nombres de fase, Inter para cuerpo y navegación.
- Mono como marcador técnico (códigos de servicio, fases D1–D5), nunca como tipografía general.
- Superficies mayormente planas; la profundidad se reserva para estados interactivos (hover de tarjetas y botones).

## Colors

Paleta restringida y de alto contraste: navy institucional, blanco casi puro, y un azul eléctrico como única nota de color.

### Primary
- **Navy Profundo** (`#0b1d33`): color de marca principal — texto primario, fondos invertidos (header, footer, hero, CTA final).

### Secondary
- **Grafito** (`#2b3441`): secundario de marca — bordes fuertes, refuerzo de jerarquía sobre navy.

### Tertiary
- **Azul Eléctrico** (`#1d4ed8`, hover `#1e40af`, suave `#dbeafe`): único acento accionable — CTAs, enlaces, iconos de servicio, códigos mono. Aprobado por el PO específicamente para este rol; no se usa como color decorativo.

### Neutral
- **Blanco Papel** (`#f6f7f8`): fondo de página por defecto.
- **Blanco Superficie** (`#ffffff`): fondo de tarjetas y contenedores elevados.
- **Gris Línea** (`#e1e4e8` / borde `#d5dae0`): líneas divisorias y bordes de tarjeta.
- **Gris Muted** (`#eef0f3`): fondos de sección alternos.
- **Texto Cuerpo** (`#1f2733`) / **Texto Muted** (`#5b6675`): jerarquía tipográfica sobre fondo claro.

### Named Rules
**The One Accent Rule.** El azul eléctrico es el único color no neutro del sistema. Aparece solo en elementos accionables o técnicos (CTA, enlace, icono de servicio, código mono); nunca como fondo de bloque ni color decorativo.

## Typography

**Display Font:** Spectral (con fallback Georgia, Times New Roman, serif)
**Body Font:** Inter (con fallback system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (con fallback ui-monospace)

**Character:** Serif editorial de peso medio-alto para titulares, contrastada con una sans geométrica neutra para el cuerpo — la combinación clásica de "informe corporativo serio" sin caer en lo corporativo genérico, con la mono aportando un matiz técnico puntual.

### Hierarchy
- **Display / H1** (700, 3.052rem, line-height 1.1): hero y titulares de página.
- **H2** (700, 2.441rem, line-height 1.15): títulos de bloque de sección.
- **H3** (700, 1.953rem): subtítulos de bloque, nombres de fase 5D.
- **H4** (700, 1.563rem): títulos de tarjeta/servicio.
- **Body** (400, 1rem, line-height 1.6, max 70ch): texto general.
- **Label/Eyebrow** (600, 0.9rem, uppercase, letter-spacing 0.02em): etiquetas sobre hero y bloques.
- **Mono/Code** (600, 0.9rem): códigos de servicio y de fase (D1–D5).

### Named Rules
**The Serif-Leads Rule.** Todo titular (h1–h4) usa Spectral; el cuerpo nunca hereda la display font, ni al revés.

## Layout

Contenedor centrado con ancho máximo de 1200px y padding lateral fluido (`--container-pad`). Ritmo vertical generoso: bloques de sección con `padding-block` de 6rem (`--sp-24`), cabeceras de bloque limitadas a 60ch. Grid responsive: la cuadrícula de servicios pasa de 1 columna (móvil) a 2 (≥640px) a 3 (≥960px); el bloque "Quiénes somos" pasa de apilado a 1fr/2fr (≥640px). Tipografía base fluida (100%–112.5% con `clamp`) para que el tamaño base escale de móvil a escritorio sin breakpoints discretos.

## Elevation & Depth

Sistema mayormente plano: superficies en reposo no llevan sombra. La profundidad aparece solo como respuesta a interacción — las tarjetas ganan `shadow-md` y se elevan 2px en hover; los botones no usan sombra, solo cambio de color.

### Shadow Vocabulary
- **sombra-sm** (`0 1px 2px rgba(11,29,51,0.06)`): reposo de tarjeta, apenas perceptible.
- **sombra-md** (`0 4px 16px rgba(11,29,51,0.1)`): estado hover de tarjeta interactiva.

### Named Rules
**The Flat-At-Rest Rule.** Ninguna superficie lleva sombra en su estado por defecto; la sombra es siempre una señal de interacción, no decoración estática.

## Shapes

Esquinas suavemente redondeadas y consistentes: 8px en botones, inputs y chips de icono; 16px en tarjetas; pill (999px) reservado para elementos de tipo etiqueta/badge si se necesitan. Sin bordes gruesos ni angulosos — el borde por defecto es de 1px en gris línea, solo para delimitar, nunca para decorar.

## Components

### Buttons
- **Shape:** radio 8px (`--radius`), padding `12px 24px` (lg) o menor (md).
- **Primary:** fondo azul eléctrico, texto blanco; hover oscurece a `#1e40af`.
- **Inverse:** fondo navy, texto blanco-papel — para usar sobre fondos claros dentro de bloques invertidos.
- **Ghost:** transparente con borde y texto azul eléctrico; hover rellena con azul suave (`#dbeafe`).

### Cards / Containers
- **Corner Style:** 16px (`--radius-lg`).
- **Background:** blanco superficie (`#ffffff`).
- **Shadow Strategy:** plana en reposo, `shadow-md` + elevación 2px en hover (variante `.interactive`).
- **Border:** 1px gris línea (`#d5dae0`).
- **Internal Padding:** 24px (`--sp-6`).

### Navigation (Header)
- Fondo navy invertido, enlaces blanco-papel al 85% de opacidad (100% en hover). CTA de contacto en azul eléctrico sólido. Selector de idioma como chip con borde. Nav horizontal solo desde 900px; por debajo, colapsa (menú móvil pendiente de implementar visualmente).

### Footer
- Fondo navy invertido a juego con el header, grid de 3 columnas (2fr/1fr/1fr) desde 720px. Nombre de marca en Spectral; resto del contenido en Inter a opacidad reducida (0.7–0.8) para jerarquía secundaria sin perder contraste AA.

### Service Icon Chip (signature component)
Chip cuadrado de 3rem (bloques de servicio) o 2.5rem (pasos del método 5D), fondo azul suave, icono en azul eléctrico, radio 8px — el mismo lenguaje de "marcador técnico" que el código mono, aplicado como contenedor visual.

## Do's and Don'ts

### Do:
- **Do** reservar el azul eléctrico para elementos accionables o técnicos (CTA, enlace, icono, código); en cualquier otro lugar, usar navy/grafito/gris.
- **Do** usar Spectral solo en titulares (h1–h4) y nunca en párrafos de cuerpo largo.
- **Do** mantener las superficies planas en reposo; la sombra solo aparece en hover.
- **Do** limitar el ancho de bloques de texto a 60–70ch para legibilidad.

### Don't:
- **Don't** introducir un segundo color de acento; el sistema está deliberadamente restringido a uno.
- **Don't** usar esquinas afiladas (0px) ni muy curvas (>16px) fuera del pill de badges.
- **Don't** añadir sombra a botones; su único estado de cambio es de color.
- **Don't** romper la paridad ES/EN de estructura al iterar variantes de una página.
