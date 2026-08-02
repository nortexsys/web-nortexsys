@echo off
REM Script de publicación del blog Nortex
REM Uso: publish.bat "mensaje de commit"

setlocal enabledelayedexpansion

REM Cambiar al directorio del script
cd /d "%~dp0"

REM Si no hay argumento, usar mensaje por defecto
if "%~1"=="" (
    set "COMMIT_MSG=feat(blog): publish new article"
) else (
    set "COMMIT_MSG=%~1"
)

REM Ejecutar el script PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -File "publish-blog.ps1" -CommitMessage "%COMMIT_MSG%"

pause
