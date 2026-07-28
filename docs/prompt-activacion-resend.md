# Prompt para Claude Code — Activar Resend en producción (env vars + redeploy)

Copia y pega esto en Claude Code, ejecutándolo desde la raíz del repo `proyecto-web-nortex`. Antes de lanzarlo, ten a mano:
- La API key real de Resend (`re_...`).
- Si el dominio `nortexsys.com` ya está verificado en Resend o no.

---

Estás trabajando en la web de Nortex Systems (`proyecto-web-nortex`), ya desplegada en Vercel como proyecto `alvaro-m-s-projects/proyecto-web-nortex`, con alias de producción `https://proyecto-web-nortex.vercel.app`. El endpoint `/api/contacto` (Route Handler en `src/app/api/contacto/route.ts`) usa Resend para enviar el email del formulario de contacto, pero hasta ahora estaba con una API key placeholder y `CONTACT_FROM_EMAIL=onboarding@resend.dev`. Ahora toca activarlo de verdad.

## Qué hacer

1. **Actualiza las variables de entorno de producción en Vercel** (vía CLI `vercel env` o indicándome los pasos exactos si prefieres que las cambie yo desde el dashboard):
   - `RESEND_API_KEY` → sustituye el placeholder por la key real que te voy a dar.
   - `CONTACT_FROM_EMAIL` →
     - Si el dominio `nortexsys.com` **ya está verificado** en Resend: `contacto@nortexsys.com`.
     - Si **todavía no** está verificado: deja `onboarding@resend.dev` tal como está, no lo cambies.
   - `CONTACT_TO_EMAIL` → ya está correcto en `contact@nortexsys.com`, no lo toques.
   - No cambies `NEXT_PUBLIC_SITE_URL` (sigue siendo el alias `*.vercel.app` hasta que se apruebe la Fase 6 de dominio real).

2. **No commitees ninguna key en el repo.** Las variables se gestionan solo en Vercel (`vercel env add` / dashboard), nunca en `.env.local` versionado ni en código. Si necesitas probar en local, usa un `.env.local` que ya está en `.gitignore`.

3. **Redeploy a producción** para que el Route Handler recoja las nuevas variables (`vercel --prod` o el redeploy del último build desde el dashboard, sin cambios de código).

4. **Prueba funcional real** contra el despliegue:
   - Rellena el formulario de `/es/contacto` con datos de prueba y confirma que la respuesta es `200 {ok:true}` (no `503 not_configured`).
   - Verifica que el email llega a `contact@nortexsys.com` (pídeme confirmación si no tienes acceso a esa bandeja).
   - Prueba también el caso honeypot (si tienes forma de simularlo) para confirmar que sigue devolviendo `200` sin enviar email.

5. **Repórtame**:
   - Si el dominio estaba verificado o no en el momento del cambio (y por tanto qué `CONTACT_FROM_EMAIL` quedó activo).
   - El resultado de la prueba funcional (código de respuesta + si llegó el email).
   - Confirmación de que no ha quedado ninguna key en el historial de git ni en archivos versionados.

## Límites — no hagas esto

- No toques DNS ni dominio real (`nortexsys.com` → Vercel) — eso es Fase 6, decisión explícita mía.
- No cambies código del endpoint `/api/contacto` salvo que la prueba funcional falle por un motivo que no sea configuración (en ese caso, dime qué falla antes de tocar nada).
