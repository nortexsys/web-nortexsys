# Script de publicación automática del blog Nortex
# Uso: .\publish-blog.ps1 [mensaje]
# Ejemplo: .\publish-blog.ps1 "feat(blog): publish new article about AI"

param(
    [string]$CommitMessage = "feat(blog): publish new article"
)

# Colores
$Green = 'Green'
$Yellow = 'Yellow'
$Red = 'Red'

Write-Host "═══════════════════════════════════════════════" -ForegroundColor $Green
Write-Host "  📝 Publicador de Blog Nortex Systems" -ForegroundColor $Green
Write-Host "═══════════════════════════════════════════════" -ForegroundColor $Green
Write-Host ""

# Cambiar al directorio del proyecto
$ProjectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectPath

# 1. Verificar estado de git
Write-Host "1️⃣  Verificando estado de git..." -ForegroundColor $Yellow
git status --short
Write-Host ""

# 2. Agregar cambios
Write-Host "2️⃣  Agregando cambios..." -ForegroundColor $Yellow
git add -A
Write-Host "   ✓ Cambios agregados" -ForegroundColor $Green
Write-Host ""

# 3. Commit
Write-Host "3️⃣  Creando commit..." -ForegroundColor $Yellow
Write-Host "   Mensaje: $CommitMessage" -ForegroundColor Gray
git commit -m $CommitMessage
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Error al hacer commit. ¿Hay cambios para commitar?" -ForegroundColor $Red
    exit 1
}
Write-Host "   ✓ Commit completado" -ForegroundColor $Green
Write-Host ""

# 4. Push a GitHub
Write-Host "4️⃣  Haciendo push a GitHub..." -ForegroundColor $Yellow
git push
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Error al hacer push" -ForegroundColor $Red
    exit 1
}
Write-Host "   ✓ Push completado" -ForegroundColor $Green
Write-Host ""

# 5. Deploy en Vercel
Write-Host "5️⃣  Deployando en Vercel..." -ForegroundColor $Yellow
vercel deploy --prod
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ❌ Error en deploy de Vercel" -ForegroundColor $Red
    exit 1
}
Write-Host "   ✓ Deploy completado" -ForegroundColor $Green
Write-Host ""

Write-Host "═══════════════════════════════════════════════" -ForegroundColor $Green
Write-Host "  ✅ Artículo publicado exitosamente" -ForegroundColor $Green
Write-Host "═══════════════════════════════════════════════" -ForegroundColor $Green
Write-Host ""
Write-Host "📍 URL: https://nortexsys.com/es/blog" -ForegroundColor $Green
Write-Host ""
