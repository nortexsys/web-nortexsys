# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pequeñas y medianas empresas (pymes) en distintos estadios de digitalización, en España, Latam y Estados Unidos — desde negocios que digitalizan desde cero hasta plataformas que ya escalan y buscan incorporar IA agéntica. El visitante típico evalúa si puede confiar un proyecto de software a medida a Nortex.

## Product Purpose

Web corporativa de Nortex Systems (nortexsys.com): presenta la firma como consultora de software a medida, IA agéntica y transformación digital. Cumple dos funciones — dar imagen de marca seria y rigurosa, y actuar como canal de captación de clientes vía formulario de contacto.

**[Inferido, no confirmado por el usuario]** Éxito verificable: la spec (`fase2-define-spec.md`, sección 5) deja explícitamente abierta la cifra objetivo (p.ej. nº de leads cualificados/mes); no se ha fijado. Se registra como decisión pendiente, no como hecho.

## Positioning

El método propietario **Nortex 5D** (Discover → Define → Design → Deliver → Demonstrate, con Demonstrate retroalimentando a Discover) como diferenciador: una firma con proceso disciplinado y auditable, no solo "entrega código". Cada fase liga a entregables concretos (Baseline Audit, Functional Analysis, Spec & Roadmap, Build & Implement, Compare & Prove ROI).

## Operating Context

- Perfil A (escaparate): sin backend propio más allá de un formulario de contacto que notifica por email a contact@nortexsys.com.
- Sin área privada, login ni almacenamiento de datos de usuario.
- Bilingüe ES (por defecto) / EN, mismas 10 rutas en ambos idiomas (20 páginas construidas).
- Sedes: España (Fawalt Investment S.L., Madrid) y Latam (Fawalt Investment S.L., Panamá).
- Blog reservado en navegación como placeholder ("Pronto publicaremos"); sin CMS ni contenido en esta fase.
- Stack: Next.js 15 (App Router) + React 19 + TypeScript, CSS Modules, i18n por rutas `[lang]`.

## Capabilities and Constraints

- Formulario de contacto (Nombre, Email, Teléfono, Empresa, Mensaje) con protección anti-spam (honeypot o equivalente) y confirmación visual de envío.
- SEO on-page: meta title/description únicas por página, Open Graph, sitemap.xml, datos estructurados Organization/LocalBusiness en Home y Dónde estamos. Analítica: Google Analytics (única herramienta, sin coste).
- Accesibilidad WCAG AA en aspectos esenciales; rendimiento Lighthouse ≥90 en Performance y Accessibility (Home y Servicios).
- **Pendiente de escalado al PO**: textos legales (Aviso legal, Privacidad, Cookies) — implicación legal sin resolver sobre tratamiento de datos del formulario y cookies de analítica.
- Sin perfiles de redes sociales activos todavía (footer no lleva iconos sociales).

## Brand Commitments

- Nombre comercial: **Nortex Systems**, marca bajo la cual opera Fawalt Investment S.L. (CIF B16870008, Madrid).
- Logo y paleta de marca ya aportados y bloqueados (ver `public/brand/LOGO_Nortex.png`, `src/styles/tokens.css`): navy `#0b1d33`, graphite `#2b3441`, grey `#e1e4e8`, white `#f6f7f8`, acento azul `#1d4ed8` (aprobado por el PO para CTAs/enlaces).
- Valores de marca: Claridad, Integridad, Precisión, Alianza.
- Voz: seria y rigurosa (imagen de consultora, no startup informal).

## Evidence on Hand

- `fase2-define-spec.md` (raíz del proyecto): especificación funcional completa aprobada en Fase 2 — arquitectura de contenido, criterios de aceptación, lista de tareas de construcción y puntos abiertos al PO.
- Brief cerrado vía Tally.so (23/07/2026) + aclaraciones del PO (23/07/2026), origen de todo el contenido de servicios, misión, valores y método 5D.
- Implementación en curso: layout, Header, Footer, componentes UI (Button, Card, Container, Icon, Section), tokens y home de landing ya construidos en `src/`.
- Sin testimonios, casos de cliente ni prensa: empresa nueva, no fabricar evidencia social.

## Product Principles

- El rigor del método 5D es la prueba de credibilidad, no un adorno: cualquier superficie debe reforzar la idea de proceso disciplinado y auditable.
- El contenido de servicios, misión, valores y metodología no se reformula en significado respecto al brief; solo se edita por longitud/formato web.
- Paridad estricta ES/EN: misma estructura y contenido en ambos idiomas.
- Perfil A por diseño: no se añaden funcionalidades de backend (CMS, login, blog funcional) que no estén ya decididas.

## Accessibility & Inclusion

Estándar WCAG AA (contraste, navegación por teclado, textos alternativos, jerarquía semántica de encabezados) ya fijado como criterio de aceptación en la spec.
