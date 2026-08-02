# 📝 Publicar artículo en el blog Nortex

## Proceso rápido

### 1️⃣ Agregar el artículo a `posts.tsx`

Edita `src/content/blog/posts.tsx` y agrega tu artículo en el formato:

```tsx
{
  slug: "mi-articulo",
  date: "2026-08-15",
  category: { es: "Categoría", en: "Category" },
  content: {
    es: {
      title: "Título en español",
      excerpt: "Resumen corto...",
      body: (
        <>
          <p>Contenido del artículo...</p>
        </>
      ),
    },
    en: {
      title: "English title",
      excerpt: "Short summary...",
      body: (
        <>
          <p>Article content...</p>
        </>
      ),
    },
  },
},
```

### 2️⃣ Ejecutar el script de publicación

#### Opción A: Con archivo batch (más fácil)
```bash
publish.bat "feat(blog): publish article title"
```

O simplemente:
```bash
publish.bat
```
(Usa mensaje por defecto)

#### Opción B: Con PowerShell (manual)
```powershell
.\publish-blog.ps1 "feat(blog): publish article title"
```

## ¿Qué hace el script?

1. ✅ Agrega todos los cambios a git
2. ✅ Crea un commit con tu mensaje
3. ✅ Hace push a GitHub
4. ✅ Deploya en Vercel automáticamente

## Formato de mensaje de commit

Usa este formato:
- `feat(blog): publish article about X`
- `feat(blog): update article Y`
- `fix(blog): correct typo in article Z`

## Solución de problemas

### "Command not found: vercel"
Instala Vercel CLI:
```powershell
npm install -g vercel
```

### "Git error"
Asegúrate de estar en la rama `main` y que no hay conflictos:
```powershell
git status
git branch
```

### "Permission denied"
Si tienes error de permisos en PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Estructura de carpetas

```
proyecto-web-nortex/
├── publish.bat                    ← Ejecutar esto
├── publish-blog.ps1               ← Script PowerShell
├── PUBLICAR.md                    ← Esta guía
└── src/content/blog/
    └── posts.tsx                  ← Edita aquí
```

---

**¿Necesitas ayuda?** Revisa `posts.tsx` para ver ejemplos de artículos existentes.
