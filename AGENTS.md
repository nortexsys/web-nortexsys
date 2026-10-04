# AGENTS.md — proyecto-web-nortex

Instrucciones para agentes de IA que trabajen en este repositorio.
**Lee esto antes de empezar cualquier tarea.**

---

## 1. Fuente de verdad de los estándares (NO están duplicados aquí)

Este proyecto **no copia** la documentación de gobernanza del infra. Los
estándares viven en el repo de infraestructura y se referencian desde aquí:

- **Estándares de desarrollo:** `nortex-web-infra/docs/base-standards.md`
- **Reglas de eficiencia de agentes:** `nortex-web-infra/docs/agents-efficiency.md`
  (incluida **§2 bis**: imágenes adjuntadas por el usuario — ver lección abajo).
- **Perfil del proyecto:** `nortex-web-infra/profiles/showcase/PROFILE.md` (Perfil A).

> Si trabajas en este proyecto, asumes que esos tres documentos rigen. Ante
> cualquier conflicto, **el infra gana**. No dupliques su contenido aquí: si hace
> falta un cambio, se hace en el infra y se referencia.

---

## 2. Contexto del proyecto

- **Qué es:** web corporativa de Nortex Systems (`nortexsys.com`).
- **Perfil:** A — Escaparate (sin backend, sin login, sin datos de usuario).
  → NO modelo de datos, NO API, NO auth, NO TDD obligatorio. Si algo parece
  exigirlos, **para y avisa**: el perfil estaría mal asignado.
- **Stack cerrado:** Next.js 15.5 (App Router) + React 19 + TypeScript estricto +
  CSS Modules + tokens CSS. **Sin** Tailwind, **sin** librería UI, **sin** paquetes
  i18n externos (simplicity gate del Perfil A).
- **i18n:** rutas `/es/...` y `/en/...` vía segmento dinámico `[lang]`, diccionarios
  JSON server-side, middleware de redirección `/` → `/es`.

### Documentos fuente de este proyecto
- `fase2-define-spec.md` — **spec aprobada, fuente de verdad del producto.**
- `docs/fase3-diseno-entregable.md` — lo construido en Fase 3 (sistema visual + Home).
- Brief cerrado del cliente (paleta, logo, copy): se guarda fuera del repositorio, porque
  el export del formulario lleva datos de contacto. Pídelo al responsable del proyecto.

### Estado
- **Fase 3 (Diseño):** ✅ cerrada y aprobada por el PO.
- **Fase 4 (resto de páginas):** pendiente de iniciar. Trabajar **en sesión nueva**.

---

## 3. Lección aprendida en Fase 3 — EFICIENCIA (¡léelo!)

La sesión de Fase 3 consumió **18,4 millones de tokens** por mantener dos imágenes
adjuntadas por el usuario (~1,9 MB cada una) durante ~50 turnos. Es el patrón nº1
de consumo documentado en `agents-efficiency.md` §9 bis.

**Reglas operativas para este proyecto (refuerzo de §2 bis):**

1. **No adjuntes imágenes grandes en el chat.** Si el usuario lo hace y pesan
   >500 KB, avísale del coste y propón sesión nueva.
2. **Los assets gráficos (logo, hero, fotos) se descargan a disco** (`curl`/archivo
   a `public/` o `_work/`) y se tratan como ficheros, inspeccionados con PIL. No
   como adjuntos recurrentes en el contexto.
3. **Una sesión por subfase** (cada página de Fase 4 = sesión nueva). Si pasas de
   ~15 turnos, considera `/compact` o cerrar.
4. **No vuelvas a mirar** una imagen ya inspeccionada en turnos posteriores.

---

## 4. Cómo trabajar aquí

- **Una tarea a la vez, en orden.** No te adelantes.
- **Si un cambio contradice la spec, NO parchees:** avisa, se actualiza la spec
  primero, luego se implementa.
- **Antes de decisiones estructurales** (carpetas, librerías, enfoque i18n),
  propón y espera confirmación.
- **Commits silenciosos** (`git log --oneline -1`, no el listado de archivos).
- **Outputs de bash cortos** (`wc -l`, `grep -c`, `tail`). Nunca `cat` de grandes.
- **Reporta consumo al cerrar tarea** (turnos, archivos pesados, imágenes, desviaciones).

### Entorno de desarrollo (aviso)
El sandbox **bloquea `listen`** en puertos; el servidor de vista previa se arranca
con `next start` (no `next dev`) deshabilitando el sandbox, en puerto **8790**.
Entre turnos el proceso muere y el puerto puede quedar con zombies: antes de
rearrancar, `taskkill` el PID en escucha.

### Comandos
```bash
npm run build && npx next start -H 127.0.0.1 -p 8790   # vista previa (producción)
# URLs: http://localhost:8790/{es,en}
```
