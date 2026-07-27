# Prompt para Claude Code — Despliegue a Vercel + medición Lighthouse (cierre Fase 5)

Copia y pega esto en Claude Code, ejecutándolo desde la raíz del repo `proyecto-web-nortex`.

---

Estás trabajando en la web de Nortex Systems (`proyecto-web-nortex`, Next.js 15 / App Router, Perfil A — escaparate). El proyecto está en Fase 5 (Verificación) de un proceso de 7 fases documentado en `docs/`. Ya se completó la Fase 4 (construcción) y la revisión adversarial de Fase 5; el único criterio de aceptación pendiente de la spec (`docs/fase2-define-spec.md` §3) es:

> Lighthouse ≥90 en Performance y ≥90 en Accessibility, medido en Home y en la página de Servicios.

No se pudo medir antes porque el entorno de desarrollo no corre Chrome headless. Tu tarea es desplegar el sitio a Vercel y obtener esa medición real.

## Qué hacer

1. **Revisa el estado del repo.** Hay un `git status` limpio o cambios pendientes de commitear — decide si hace falta commitear antes de desplegar. No hagas force-push ni reescribas historia.

2. **Configura las variables de entorno en Vercel** antes de la build de producción (usa la Vercel CLI o indícame los pasos si prefieres que yo las meta desde el dashboard):
   - `RESEND_API_KEY` — si aún no tenemos cuenta de Resend verificada, usa un valor de prueba o dime que falta y despliega igualmente sin ella (el endpoint `/api/contacto` degrada a 503 controlado, no rompe el build).
   - `CONTACT_FROM_EMAIL` — `onboarding@resend.dev` como remitente temporal si `nortexsys.com` no está verificado en Resend todavía.
   - `CONTACT_TO_EMAIL` — `contact@nortexsys.com`.
   - `NEXT_PUBLIC_SITE_URL` — el dominio real de despliegue (el de Vercel si aún no hay dominio propio conectado, o `https://nortexsys.com` si ya lo está).

3. **Despliega a Vercel** (`vercel --prod` o el flujo que corresponda). Si no hay proyecto de Vercel vinculado todavía, vincúlalo (`vercel link`) antes.

4. **Corre Lighthouse contra el despliegue real**, en modo incógnito/sin extensiones, sobre estas dos URLs en ambos idiomas si el tiempo lo permite (mínimo obligatorio: ES):
   - `/es` (Home)
   - `/es/servicios` (Servicios — la página más pesada en contenido)
   - Puedes usar `npx lighthouse <url> --output=json --output=html --chrome-flags="--headless"` o el propio Lighthouse de Chrome DevTools si tienes acceso a un navegador. Usa el que tengas disponible en el entorno.

5. **Reporta los resultados** en esta tabla, para cada página medida:

   | Página | Performance | Accessibility | Best Practices | SEO | ¿Cumple ≥90 en Perf. y A11y? |
   |---|---|---|---|---|---|

6. **Si algún número queda por debajo de 90**, no lo arregles sin confirmar conmigo primero — dime qué está penalizando la puntuación (por ejemplo: LCP de las imágenes hero, render-blocking de fuentes, etc.) y una propuesta concreta de arreglo, pero espera aprobación antes de tocar código, porque estamos en fase de verificación, no de construcción: cualquier cambio de código debe pasar primero por actualizar la especificación si toca (regla del método SDD de Nortex).

7. **No promuevas el despliegue a dominio de producción real** (`nortexsys.com`) ni cambies DNS — eso es la Fase 6 y requiere confirmación explícita mía, no tuya. Este despliegue es solo para medir, puede quedarse en la URL `*.vercel.app` de preview/producción de Vercel.

## Contexto útil ya documentado en el repo

- `docs/fase2-define-spec.md` — spec fuente de verdad, criterios de aceptación en §3.
- `docs/fase3-diseno-entregable.md` — sistema visual, decisión de imágenes/fuentes.
- `docs/fase4-construccion-entregable.md` §9 — indicadores de rendimiento del build local (bundle 103–107 kB) que deberían correlacionar con un buen resultado de Lighthouse.

Al terminar, dame el resumen de la tabla de resultados y la URL del despliegue usado para medir.
