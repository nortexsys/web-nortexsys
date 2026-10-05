# Search Console y Bing Webmaster Tools — alta de nortexsys.com

Estado del sitio: sitemap en `https://www.nortexsys.com/sitemap.xml`, robots.txt
con `Sitemap:`, canonical + hreflang con host `www`. Falta dar de alta la
propiedad en los buscadores.

## 1. Google Search Console

1. Entrar en https://search.google.com/search-console con la cuenta de Nortex.
2. **Añadir propiedad → Dominio** → `nortexsys.com` (cubre www, apex, http/https).
3. Verificación por **DNS**: Google da un registro TXT `google-site-verification=...`.
   Añadirlo en el DNS del dominio (en la raíz `@`). Esperar propagación y pulsar *Verificar*.
   - Alternativa sin DNS: propiedad *Prefijo de URL* `https://www.nortexsys.com/`
     → método *Etiqueta HTML* → copiar solo el valor de `content`, ponerlo en
     Vercel como `NEXT_PUBLIC_GSC_VERIFICATION` y redesplegar.
4. **Sitemaps** → enviar `sitemap.xml`. Debe aparecer como "Correcto" con 22 URLs.
5. **Inspección de URL** → solicitar indexación de `/es` y `/en` (y servicios, contacto).
6. Tras 2-3 días revisar *Páginas* (indexadas / excluidas) y *Mejoras*.

## 2. Bing Webmaster Tools

1. https://www.bing.com/webmasters → iniciar sesión.
2. Más rápido: **Importar desde Google Search Console** (trae propiedad y sitemap,
   sin tocar DNS ni código).
3. Alternativa manual: añadir `https://www.nortexsys.com`, método *Meta tag* →
   copiar el `content` de `msvalidate.01`, ponerlo en Vercel como
   `NEXT_PUBLIC_BING_VERIFICATION`, redesplegar y verificar. O registro CNAME en DNS.
4. Comprobar que el sitemap queda enviado.

## 3. Variables de entorno (Vercel → Settings → Environment Variables)

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_GSC_VERIFICATION` | Meta de verificación de Google (solo si no se usa DNS) |
| `NEXT_PUBLIC_BING_VERIFICATION` | Meta `msvalidate.01` de Bing (solo si no se importa desde GSC) |
| `NEXT_PUBLIC_GA_ID` | ID de GA4 (`G-XXXXXXXXXX`) |

Son variables de build: hay que redesplegar tras cambiarlas.

## 4. Después

- En GA4: *Administrador → Enlaces de productos → Search Console* para ver consultas en GA4.
- No cambiar el host canónico (`www`) ni la redirección apex → www sin actualizar la propiedad.
