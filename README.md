# web-nortexsys

Web corporativa de [Nortex Systems](https://nortexsys.com): consultora de software a medida,
IA agéntica y transformación digital para pymes en España, Latam y Estados Unidos.

Es un escaparate sin backend propio ni área privada. Lo único dinámico es un formulario de
contacto que notifica por email, con protección anti-spam y sin guardar datos de usuario.

## Stack

- Next.js 15 (App Router), React 19 y TypeScript estricto
- CSS Modules, sin librería de UI
- Bilingüe ES (por defecto) y EN con rutas `[lang]`: las mismas 10 rutas en ambos idiomas
- Blog estático en el propio repo (`src/content/blog/posts.tsx`)
- Email del formulario con Resend; SEO con metadatos por página, Open Graph, `sitemap.xml` y
  datos estructurados

## Desarrollo

```bash
npm ci
npm run dev        # http://localhost:3100
npx tsc --noEmit   # comprobación de tipos
npm run build
```

El formulario necesita variables de entorno (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`). No hay
ninguna en el repositorio; se definen en el entorno de despliegue.

## Cómo está organizado

| Ruta | Qué contiene |
| --- | --- |
| `src/app/[lang]/` | Páginas, por idioma |
| `src/components/` | Componentes y su CSS |
| `src/content/` | Contenido del blog y textos legales |
| `src/i18n/` | Diccionarios y utilidades de idioma |
| `docs/` | Especificación, entregables de diseño y construcción, textos legales |
| `PRODUCT.md`, `DESIGN.md` | Contexto de producto y sistema de diseño |

Se construyó con el método Nortex 5D (Discover, Define, Design, Deliver, Demonstrate); cada
fase deja su entregable en `docs/`.
