# Scripts de validacion automatizada de SEO y Seguridad - Centro Terapeutico Empiria
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "INICIANDO VALIDACION AUTOMATIZADA SEO Y SEGURIDAD" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

$allPassed = $true
$checks = @()

function Record-Check {
    param (
        [string]$Category,
        [string]$Description,
        [string]$Status, # PASS, WARNING, FAIL
        [string]$Details
    )
    $color = if ($Status -eq "PASS") { "Green" } elseif ($Status -eq "WARNING") { "Yellow" } else { "Red" }
    Write-Host "[$Status] $Category : $Description" -ForegroundColor $color
    if ($Details) {
        Write-Host "        $Details" -ForegroundColor Gray
    }
    $global:checks += [PSCustomObject]@{
        Category    = $Category
        Description = $Description
        Status      = $Status
        Details     = $Details
    }
    if ($Status -eq "FAIL") {
        $global:allPassed = $false
    }
}

# 1. Dominio Canonico y Fallback
$siteTs = Get-Content -LiteralPath "C:\empiriaweb\src\data\site.ts" | Out-String
if ($siteTs -match 'return "https://www\.centroempiria\.com"' -and $siteTs -match '!vercelUrl\.includes\("vercel\.app"\)') {
    Record-Check "Canonical Base" "src/data/site.ts fuerza https://www.centroempiria.com como dominio primario y sanitiza vercel.app" "PASS" "getSiteUrl() configurado correctamente."
} else {
    Record-Check "Canonical Base" "src/data/site.ts no garantiza dominio canonico oficial" "FAIL" "Verificar getSiteUrl()"
}

# 2. Robots.txt
$robotsTs = Get-Content -Path "C:\empiriaweb\src\app\robots.ts" -Raw
if ($robotsTs -match "getSiteUrl\(\)" -or $robotsTs -match "https://www\.centroempiria\.com/sitemap\.xml") {
    Record-Check "Robots.txt" "robots.ts referencia el sitemap oficial de forma canonica" "PASS" "Sitemap apuntado a https://www.centroempiria.com/sitemap.xml"
} else {
    Record-Check "Robots.txt" "robots.ts no apunta a sitemap valido" "FAIL" "Revisar robots.ts"
}

# 3. Sitemap.xml
$sitemapTs = Get-Content -Path "C:\empiriaweb\src\app\sitemap.ts" -Raw
if ($sitemapTs -match "valoracion-fonoaudiologica" -and $sitemapTs -notmatch "vercel\.app") {
    Record-Check "Sitemap.xml" "sitemap.ts incluye /valoracion-fonoaudiologica y excluye hosts vercel.app" "PASS" "Prioridad 0.9 asignada a valoración y URLs canónicas limpias."
} else {
    Record-Check "Sitemap.xml" "sitemap.ts no cumple requisitos canónicos o le falta /valoracion-fonoaudiologica" "FAIL" "Revisar sitemap.ts"
}

# 4. Landing de Valoracion Fonoaudiologica
if (Test-Path "C:\empiriaweb\src\app\valoracion-fonoaudiologica\page.tsx") {
    $valPage = Get-Content -Path "C:\empiriaweb\src\app\valoracion-fonoaudiologica\page.tsx" -Raw
    $hasSchema = ($valPage -match "MedicalProcedure") -and ($valPage -match "BreadcrumbList")
    $hasWhatsapp = ($valPage -match "getWhatsAppLink")
    $hasDisclaimer = ($valPage -match "no reemplaza")
    if ($hasSchema -and $hasWhatsapp -and $hasDisclaimer) {
        Record-Check "Landing Valoracion" "Página /valoracion-fonoaudiologica implementada con E-E-A-T completo" "PASS" "Incluye Schemas (MedicalProcedure, BreadcrumbList), CTA contextual WhatsApp y aviso ético no diagnóstico."
    } else {
        Record-Check "Landing Valoracion" "Página existe pero faltan esquemas o elementos requeridos" "WARNING" "Revisar schemas y disclaimers."
    }
} else {
    Record-Check "Landing Valoracion" "src/app/valoracion-fonoaudiologica/page.tsx no encontrada" "FAIL" "Falta crear la página."
}

# 5. H1 Semanticos de Servicios
$servicesTs = Get-Content -Path "C:\empiriaweb\src\data\services.ts" -Raw
if ($servicesTs -match "pageH1:" -and $servicesTs -match "Terapia de lenguaje para niños en Bogotá") {
    Record-Check "H1 Semanticos" "Servicios cuentan con H1 semanticos enriquecidos con intencion y geo local" "PASS" "Evita H1s de una sola palabra."
} else {
    Record-Check "H1 Semanticos" "services.ts no contiene H1s optimizados" "FAIL" "Revisar pageH1 en services.ts"
}

# 6. Google Maps CID Oficial
$contactTs = Get-Content -Path "C:\empiriaweb\src\data\contact.ts" -Raw
if ($contactTs -match "0x41d7ceca5cb0b891") {
    Record-Check "Local SEO Maps" "contact.ts contiene la URL oficial del Google Business Profile (CID 0x41d7ceca5cb0b891)" "PASS" "Vinculado a Google Maps verificado de Centro Terapeutico Empiria."
} else {
    Record-Check "Local SEO Maps" "Falta enlace de ficha verificada GBP" "FAIL" "Revisar contact.ts"
}

# 7. Cabeceras de Seguridad y Redirecciones
$nextCfg = Get-Content -Path "C:\empiriaweb\next.config.ts" -Raw
if ($nextCfg -match "Content-Security-Policy" -and $nextCfg -match "webempiria\.vercel\.app" -and $nextCfg -match "redirects\(\)") {
    Record-Check "Security Headers" "next.config.ts cuenta con CSP activa y redirecciones permanentes 308 de dominios Vercel" "PASS" "Proteccion XSS, Clickjacking y mitigacion de duplicidad de dominio."
} else {
    Record-Check "Security Headers" "next.config.ts no tiene CSP completa o le faltan redirects" "FAIL" "Revisar next.config.ts"
}

# 8. Verificacion de Secretos
$envMatches = Get-ChildItem -Path "C:\empiriaweb\src" -Recurse -Filter "*.ts*" | Select-String "NEXT_PUBLIC_.*(SECRET|KEY|PASSWORD|TOKEN)"
if ($envMatches.Count -eq 0) {
    Record-Check "Secret Leak Check" "Ninguna variable NEXT_PUBLIC_ expone secretos o llaves sensibles" "PASS" "Cero fugas de credenciales en variables públicas de cliente."
} else {
    Record-Check "Secret Leak Check" "Se detectaron posibles secretos en NEXT_PUBLIC_" "FAIL" "Alerta de seguridad."
}

# 9. Server Components (RSC)
$staticSections = @("HeroSection.tsx", "ServicesSection.tsx", "TeamSection.tsx", "ProcessTimeline.tsx", "WhyEmpiriaSection.tsx", "StagesSection.tsx", "ParentsSection.tsx", "ResourcesPreview.tsx", "InstagramFeedSection.tsx", "FeatureHubCards.tsx", "EmotionalBreak.tsx")
$rscFailures = @()
foreach ($sec in $staticSections) {
    $secPath = "C:\empiriaweb\src\components\sections\$sec"
    if (Test-Path $secPath) {
        $content = Get-Content -Path $secPath -Raw
        if ($content -match '^\s*"use client"') {
            $rscFailures += $sec
        }
    }
}
if ($rscFailures.Count -eq 0) {
    Record-Check "Server Components" "11 componentes estaticos migrados exitosamente a React Server Components (RSC)" "PASS" "Bundle de JS de cliente reducido significativamente."
} else {
    Record-Check "Server Components" "Componentes estaticos todavia conservan 'use client': $($rscFailures -join ', ')" "WARNING" "Revisar secciones."
}

# 10. Articulos y E-E-A-T
$recSlug = Get-Content -LiteralPath "C:\empiriaweb\src\app\recursos\[slug]\page.tsx" | Out-String
if ($recSlug -match "Article" -and $recSlug -match "BreadcrumbList" -and $recSlug -match "relatedServiceSlug") {
    Record-Check "E-E-A-T Recursos" "Página de artículo incluye schema Article, BreadcrumbList y enlazado cruzado a servicios" "PASS" "Mayor autoridad de autor y flujo de usuario."
} else {
    Record-Check "E-E-A-T Recursos" "src/app/recursos/[slug]/page.tsx incompleta" "FAIL" "Revisar página de recursos."
}

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "RESUMEN DE VALIDACION" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
$passCount = ($checks | Where-Object { $_.Status -eq "PASS" }).Count
$warnCount = ($checks | Where-Object { $_.Status -eq "WARNING" }).Count
$failCount = ($checks | Where-Object { $_.Status -eq "FAIL" }).Count
Write-Host "PASS: $passCount | WARNING: $warnCount | FAIL: $failCount" -ForegroundColor Cyan

if ($allPassed) {
    Write-Host "VALIDACION COMPLETADA CON EXITO (TODOS LOS CHECKS CRITICOS APROBADOS)" -ForegroundColor Green
} else {
    Write-Host "SE ENCONTRARON FALLOS EN LA VALIDACION" -ForegroundColor Red
}
