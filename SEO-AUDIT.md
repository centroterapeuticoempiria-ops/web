# AUDITORÍA TÉCNICA SENIOR SEO, LOCAL, NEXT.JS, VERCEL, RENDIMIENTO Y SEGURIDAD
## Centro Terapéutico Empiria (Bogotá, Colombia)

**Fecha de Auditoría:** 7 de Octubre de 2026  
**Auditor:** Senior Technical SEO, Web Security & Performance Engineering Team  
**Dominio Oficial:** [https://www.centroempiria.com/](https://www.centroempiria.com/)  
**Dominio de Producción Analizado:** `https://www.centroempiria.com/` (confrontado contra `https://webempiria.vercel.app/` y el repositorio local)  
**Ubicación Física:** Avenida Calle 24 #74-55, Barrio Modelia, Bogotá, Colombia  
**WhatsApp Oficial:** +57 312 736 6606  
**Público Objetivo:** Niños de 0 a 12 años, familias y cuidadores  

---

## 1. PUNTUACIONES GLOBALES DE AUDITORÍA (BASELINE AUDIT SCORES)

| Dimensión | Puntuación | Estado | Observación Principal |
| :--- | :---: | :---: | :--- |
| **SEO GENERAL** | **48 / 100** | 🔴 CRÍTICO | Canonical en producción apunta al subdominio temporal de Vercel. |
| **LOCAL SEO** | **62 / 100** | 🟡 MEJORABLE | NAP coherente en texto, pero falta enlace al CID oficial de Google Maps y coordenadas en schema. |
| **TECHNICAL SEO** | **52 / 100** | 🔴 CRÍTICO | Robots.txt y Sitemap.xml apuntan a URLs de `webempiria.vercel.app`. Falta CSP y Breadcrumbs. |
| **PERFORMANCE (CWV)** | **70 / 100** | 🟡 MEJORABLE | 12 secciones estáticas renderizadas con `"use client"`; imágenes pesadas (banner 1.72MB). |
| **SEGURIDAD** | **75 / 100** | 🟡 BUENO | Headers HSTS y Frame-Options activos; falta Content-Security-Policy (CSP) estricta. |
| **CONTENIDO Y ARQUITECTURA** | **72 / 100** | 🟡 MEJORABLE | Tono cálido y profesional, pero H1s de servicios son de 1 sola palabra y falta `/valoracion-fonoaudiologica`. |
| **E-E-A-T / SALUD (YMYL)** | **68 / 100** | 🟡 MEJORABLE | Falta schema `Person` para terapeutas; mención de "adultos" en bio genera ambigüedad de servicio. |
| **ACCESIBILIDAD (A11Y)** | **88 / 100** | 🟢 SÓLIDO | Excelente contraste, navegación por teclado y focus visible; mejoras menores en descripciones ALT. |
| **CONVERSIÓN (CRO / WHATSAPP)**| **72 / 100** | 🟡 MEJORABLE | CTAs WhatsApp bien ubicados, pero cero analítica de eventos y sin medición de conversión. |

---

## 2. MATRIZ DE HALLAZGOS Y PROBLEMAS DETECTADOS

| Prioridad | Problema | Evidencia Verificada | Archivo / Ruta | Solución Concreta | Impacto |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **P0** | **Canonical apunta a dominio de Vercel en Producción** | En `https://www.centroempiria.com/`, el HTML devuelve `<link rel="canonical" href="https://webempiria.vercel.app"/>` y `<meta property="og:url" content="https://webempiria.vercel.app"/>`. | [src/data/site.ts](file:///c:/empiriaweb/src/data/site.ts#L10-L22), [src/app/layout.tsx](file:///c:/empiriaweb/src/app/layout.tsx#L39-L43) | Forzar como URL base predeterminada `https://www.centroempiria.com` en `site.ts` y configurar `NEXT_PUBLIC_SITE_URL` en variables de entorno de Vercel Producción. | Destruye la indexación del dominio comercial propio en Google, transfiriendo relevancia al subdominio `.vercel.app`. |
| **P0** | **Sitemap.xml y Robots.txt emiten URLs de Vercel** | `https://www.centroempiria.com/robots.txt` expone `Sitemap: https://webempiria.vercel.app/sitemap.xml`. El XML contiene 18 URLs con prefijo `webempiria.vercel.app`. | [src/app/sitemap.ts](file:///c:/empiriaweb/src/app/sitemap.ts#L7-L49), [src/app/robots.ts](file:///c:/empiriaweb/src/app/robots.ts#L5-L14) | Usar la URL canónica del dominio oficial en `robots.ts` y `sitemap.ts`. | Los rastreadores de Google procesan el sitemap erróneo y no descubren URLs en `centroempiria.com`. |
| **P0** | **Subdominio de Vercel accesible públicamente sin redirección (200 OK)** | `curl.exe -I https://webempiria.vercel.app` responde `HTTP/1.1 200 OK` con contenido duplicado en lugar de un redirect 308/301 a `www.centroempiria.com`. | Configuración Vercel / [next.config.ts](file:///c:/empiriaweb/next.config.ts) | En Vercel Dashboard > Domains, configurar redirect automático hacia el dominio primario o inyectar header `X-Robots-Tag: noindex` cuando el host no sea `centroempiria.com`. | Canibalización SEO severa y contenido duplicado exacto indexado por Google. |
| **P1** | **Falta Landing Page estratégica para Valoración Fonoaudiológica** | La Prioridad 3 del negocio ("valoración fonoaudiológica infantil Bogotá") no tiene página dedicada; solo se menciona en `/nuestro-proceso` y FAQs. | [src/app/](file:///c:/empiriaweb/src/app/) (Ruta inexistente) | Crear la página `/valoracion-fonoaudiologica` con arquitectura E-E-A-T, señales para consultar, qué esperar y CTA WhatsApp. | Pérdida de búsquedas transaccionales de alta intención ("valoración fonoaudiológica para niños"). |
| **P1** | **H1 y Títulos de Servicios carecen de palabras clave e intención local** | En `/areas-de-atencion/habla`, el H1 es una sola palabra: "Habla". En `/lenguaje`, H1 es "Lenguaje". | [src/app/areas-de-atencion/[slug]/page.tsx](file:///c:/empiriaweb/src/app/areas-de-atencion/%5Bslug%5D/page.tsx#L58) | Actualizar H1 a estructuras semánticas ricas: "Terapia de Habla y Pronunciación Infantil en Bogotá", etc. | Débil relevancia temática y baja clasificación para términos como "terapia de lenguaje niños Bogotá". |
| **P1** | **Enlaces a Google Maps apuntan a búsqueda genérica en lugar del CID oficial** | Enlaces en `ContactSection.tsx` y `nuestro-espacio/page.tsx` usan `https://maps.google.com/?q=Avenida+Calle+24+%2374-55+Bogota` en vez de la ficha verificada. | [src/components/sections/ContactSection.tsx](file:///c:/empiriaweb/src/components/sections/ContactSection.tsx#L79), [src/app/nuestro-espacio/page.tsx](file:///c:/empiriaweb/src/app/nuestro-espacio/page.tsx#L21) | Sustituir por la URL oficial de la ficha: `https://www.google.com/maps/place/Centro+Terap%C3%A9utico+Empiria/data=!4m2!3m1!1s0x0:0x41d7ceca5cb0b891?sa=X&ved=1t:2428&ictx=111`. | Desconexión entre las señales web y el perfil de Google Business Profile (GBP), debilitando el ranking local. |
| **P1** | **Schema JSON-LD incompleto: Falta geo, hasMap, Person y Article** | Schema en `layout.tsx` carece de coordenadas geográficas (`geo`), `hasMap`, y enlace al GBP en `sameAs`. Los artículos no tienen schema `Article` y los terapeutas no tienen `Person`. | [src/app/layout.tsx](file:///c:/empiriaweb/src/app/layout.tsx#L102-L184), [src/app/recursos/[slug]/page.tsx](file:///c:/empiriaweb/src/app/recursos/%5Bslug%5D/page.tsx) | Enriquecer JSON-LD con coordenadas de Modelia, `hasMap`, schema `Person` para Johanna y Lina, y schema `Article` + `FAQPage` en recursos. | Google no vincula la entidad de salud local ni los profesionales médicos con Knowledge Graph. |
| **P1** | **12 Componentes de Sección marcados innecesariamente con `"use client"`** | `HeroSection`, `ServicesSection`, `SpaceSection`, `ProcessTimeline`, `FeatureHubCards`, `EmotionalBreak`, etc. tienen `"use client"` sin usar estado. | [src/components/sections/](file:///c:/empiriaweb/src/components/sections/) | Remover directiva `"use client"` de los componentes estáticos y dejarlos como React Server Components (RSC). | Aumenta el peso del bundle JS del cliente, retrasando la hidratación, TBT e INP en dispositivos móviles. |
| **P1** | **Cero analítica de conversiones y eventos para WhatsApp** | Banner de cookies solicita consentimiento para cookies analíticas, pero no hay GA4 ni Vercel Analytics ni tracking de clicks en WhatsApp. | [src/components/layout/CookieBanner.tsx](file:///c:/empiriaweb/src/components/layout/CookieBanner.tsx), Todo el proyecto | Configurar medición de eventos respetuosa de privacidad (`whatsapp_click`, `service_view`, `maps_click`) sin enviar datos de salud de menores. | Imposible medir el embudo de captación, efectividad de páginas o retorno de optimizaciones. |
| **P2** | **Ausencia de Content-Security-Policy (CSP) en cabeceras HTTP** | `next.config.ts` incluye HSTS, nosniff y X-Frame-Options, pero omite `Content-Security-Policy`. Además, HTML devuelve `Access-Control-Allow-Origin: *`. | [next.config.ts](file:///c:/empiriaweb/next.config.ts#L3-L28) | Implementar cabecera CSP estricta pero compatible con recursos propios, fuentes de Google y endpoints de WhatsApp/Maps. | Exposición potencial a Cross-Site Scripting (XSS) y manipulación de iframes/scripts. |
| **P2** | **Artículos del Blog sin enlaces internos a servicios relacionados** | Los 4 artículos en `/recursos/[slug]` abordan lenguaje, habla y lectoescritura, pero no contienen enlaces hipertexto hacia `/areas-de-atencion/*`. | [src/data/resources.ts](file:///c:/empiriaweb/src/data/resources.ts), [src/app/recursos/[slug]/page.tsx](file:///c:/empiriaweb/src/app/recursos/%5Bslug%5D/page.tsx) | Incluir enlaces contextuales internos desde cada guía hacia su servicio correspondiente y hacia la valoración inicial. | Desperdicio de "link juice", menor retención de usuarios y menor conversión desde tráfico informativo. |
| **P2** | **Imágenes de gran tamaño sin optimización previa** | `consultorio-banner.png` pesa 1.72 MB; `real_children_playing.jpg` pesa 775 KB; `hero-child.jpg` pesa 724 KB. | [public/images/](file:///c:/empiriaweb/public/images/) | Convertir a formatos modernos WebP/AVIF y recortar dimensiones a las necesidades reales de renderizado. | Aumento innecesario de consumo de ancho de banda y latencia en el LCP para usuarios en redes móviles. |
| **P2** | **Páginas de políticas legales indexadas en el sitemap** | 5 rutas legales (`/politica-de-privacidad`, `/politica-tratamiento-datos`, `/autorizacion-tratamiento-datos`, etc.) están en sitemap y con `index, follow`. | [src/app/sitemap.ts](file:///c:/empiriaweb/src/app/sitemap.ts#L21-L25) | Excluir páginas legales del sitemap o marcarlas con `noindex, follow` para concentrar el rastreo en páginas clínicas y de servicios. | Dilución del presupuesto de rastreo (crawl budget) en un sitio web de salud infantil. |
| **P3** | **Ambigüedad en biografía profesional respecto a atención de adultos** | La biografía de Johanna Gómez en `team.ts` menciona experiencia con "niños, jóvenes y adultos". Empiria es 100% infantil. | [src/data/team.ts](file:///c:/empiriaweb/src/data/team.ts#L29) | Aclarar que en Centro Terapéutico Empiria su práctica está enfocada exclusivamente en el desarrollo infantil (0 a 12 años). | Confusión en padres y señales mixtas a buscadores sobre si la clínica trata adultos o niños. |
| **P3** | **Alt text de imagen Hero afirma falsamente ser paciente de Empiria** | `alt="Niña sonriendo feliz en Centro Terapéutico Empiria"` sobre una fotografía ilustrativa de stock. | [src/components/sections/HeroSection.tsx](file:///c:/empiriaweb/src/components/sections/HeroSection.tsx#L119) | Ajustar a: `alt="Acompañamiento en fonoaudiología infantil y desarrollo de la comunicación en Bogotá"`. | Cumplimiento estricto del Principio de No Invención y regulaciones de protección de imagen de menores. |

---

## 3. TOP 10 PROBLEMAS PRIORIZADOS

### 1. Canonical tag y URLs canónicas apuntando a `webempiria.vercel.app`
* **Prioridad:** P0 (Crítico)
* **Evidencia:** `https://www.centroempiria.com/` contiene `<link rel="canonical" href="https://webempiria.vercel.app"/>`.
* **Archivo / URL:** [src/data/site.ts](file:///c:/empiriaweb/src/data/site.ts) / [src/app/layout.tsx](file:///c:/empiriaweb/src/app/layout.tsx).
* **Impacto:** Provoca que Google omita indexar `www.centroempiria.com` o lo considere un duplicado no canónico.
* **Recomendación:** Forzar `https://www.centroempiria.com` como URL por defecto en `getSiteUrl()`.
* **Riesgo:** Nulo. Es la corrección más urgente del sitio.

### 2. Robots.txt y Sitemap.xml apuntando al dominio Vercel
* **Prioridad:** P0 (Crítico)
* **Evidencia:** `https://www.centroempiria.com/robots.txt` declara `Sitemap: https://webempiria.vercel.app/sitemap.xml`. El XML sirve 18 URLs con el dominio Vercel.
* **Archivo / URL:** [src/app/robots.ts](file:///c:/empiriaweb/src/app/robots.ts) y [src/app/sitemap.ts](file:///c:/empiriaweb/src/app/sitemap.ts).
* **Impacto:** Los bots rastrean y descubren únicamente las URLs del entorno de preview/staging, ignorando el dominio de marca.
* **Recomendación:** Vincular ambos endpoints dinámicos a la base canónica fija `https://www.centroempiria.com`.
* **Riesgo:** Nulo. Corrige la indexación directa.

### 3. Subdominio `webempiria.vercel.app` abierto y respondiendo 200 OK
* **Prioridad:** P0 (Crítico)
* **Evidencia:** `curl.exe -I https://webempiria.vercel.app` devuelve `HTTP/1.1 200 OK` sin redirección.
* **Archivo / URL:** Configuración Vercel / Middleware Next.js.
* **Impacto:** Canibalización de resultados de búsqueda y fragmentación de enlaces entrantes.
* **Recomendación:** Configurar en Vercel Dashboard Domain Redirect hacia `www.centroempiria.com`, o inyectar header `X-Robots-Tag: noindex, nofollow` en requests a `*.vercel.app`.
* **Riesgo:** Bajo.

### 4. Ausencia de página de servicio para "Valoración Fonoaudiológica"
* **Prioridad:** P1 (Alto)
* **Evidencia:** La ruta `/valoracion-fonoaudiologica` no existe en el repositorio (solo se menciona en procesos y preguntas frecuentes).
* **Archivo / URL:** Nueva ruta: `src/app/valoracion-fonoaudiologica/page.tsx`.
* **Impacto:** Pérdida absoluta de posicionamiento para la búsqueda transaccional "valoración fonoaudiológica infantil Bogotá" (Prioridad 3 del cliente).
* **Recomendación:** Crear la página dedicada con contenido clínico riguroso, explicativa del informe fonoaudiológico y CTA directo.
* **Riesgo:** Nulo. Suma valor y páginas de conversión.

### 5. Encabezados H1 en páginas de servicios genéricos y de una sola palabra
* **Prioridad:** P1 (Alto)
* **Evidencia:** `/areas-de-atencion/habla` tiene `<h1>Habla</h1>`; `/lenguaje` tiene `<h1>Lenguaje</h1>`.
* **Archivo / URL:** [src/app/areas-de-atencion/[slug]/page.tsx](file:///c:/empiriaweb/src/app/areas-de-atencion/%5Bslug%5D/page.tsx#L58).
* **Impacto:** Infranqueable desventaja SEO ante competidores que optimizan para "Terapia de lenguaje infantil Bogotá" o "Terapia de habla para niños".
* **Recomendación:** Integrar en el modelo de datos un campo `pageH1` y `seoTitle` optimizados por área.
* **Riesgo:** Muy bajo. Requiere validar diseño visual de tipografía grande.

### 6. Desconexión de enlaces a Google Maps con el Google Business Profile verificado
* **Prioridad:** P1 (Alto)
* **Evidencia:** El enlace en Contacto y Nuestro Espacio usa `q=Avenida+Calle+24+%2374-55+Bogota`.
* **Archivo / URL:** [src/components/sections/ContactSection.tsx](file:///c:/empiriaweb/src/components/sections/ContactSection.tsx#L79), [src/app/nuestro-espacio/page.tsx](file:///c:/empiriaweb/src/app/nuestro-espacio/page.tsx#L21).
* **Impacto:** Google no correlaciona de forma unívoca el tráfico web con la ficha de negocio `0x41d7ceca5cb0b891`.
* **Recomendación:** Centralizar en `contactData.address.googleMapsPlaceUrl` el enlace directo a la ficha verificada de Maps y vincular la dirección del footer.
* **Riesgo:** Nulo.

### 7. Datos estructurados JSON-LD desactualizados e incompletos
* **Prioridad:** P1 (Alto)
* **Evidencia:** `layout.tsx` tiene URL de Vercel en `image`, `url` y `telephone`. No hay `geo`, `hasMap`, schema `Person` en equipo ni `Article` en blog.
* **Archivo / URL:** [src/app/layout.tsx](file:///c:/empiriaweb/src/app/layout.tsx#L102-L184).
* **Impacto:** Pérdida de Rich Snippets en resultados de búsqueda (Knowledge Panel médico, FAQs, Breadcrumbs).
* **Recomendación:** Modernizar JSON-LD con coordenadas exactas de Modelia, `hasMap`, `Person` para Johanna Gómez y Lina Rodríguez, y `Article` en cada post.
* **Riesgo:** Bajo. Debe validarse contra Google Rich Results Test.

### 8. Sobrecarga de hidratación en cliente (12 componentes `"use client"`)
* **Prioridad:** P1 (Alto)
* **Evidencia:** 12 componentes estáticos de secciones en `src/components/sections/` declaran `"use client"`.
* **Archivo / URL:** [src/components/sections/](file:///c:/empiriaweb/src/components/sections/).
* **Impacto:** Incremento innecesario del JavaScript enviado al navegador; peor rendimiento en móviles con procesadores modestos.
* **Recomendación:** Convertir en React Server Components (RSC) los que no tengan interactividad.
* **Riesgo:** Bajo. Verificar que no usen hooks internos.

### 9. Ausencia de arquitectura de medición y analítica para conversiones
* **Prioridad:** P1 (Alto)
* **Evidencia:** No hay scripts de medición para clics en WhatsApp, llamadas ni interacciones de valor.
* **Archivo / URL:** Todo el proyecto.
* **Impacto:** Imposibilidad de medir el embudo de pacientes cualificados.
* **Recomendación:** Implementar un stack mínimo y ético (Vercel Web Analytics + eventos personalizados para WhatsApp sin transmitir información médica).
* **Riesgo:** Bajo. Requiere coordinación con el banner de consentimiento.

### 10. Archivos de imagen pesados sin optimización de origen
* **Prioridad:** P2 (Medio)
* **Evidencia:** `consultorio-banner.png` (1.72 MB), `real_children_playing.jpg` (775 KB), `hero-child.jpg` (724 KB).
* **Archivo / URL:** [public/images/](file:///c:/empiriaweb/public/images/).
* **Impacto:** Afecta Core Web Vitals (LCP) en la primera carga en frío y aumenta costos de bandwidth en Vercel.
* **Recomendación:** Comprimir y convertir a WebP/AVIF con herramientas de pipeline.
* **Riesgo:** Bajo. Cuidar que no se degrade la fidelidad visual.

---

## 4. CURRENT SITE ARCHITECTURE (MAPA DEL SITIO ACTUAL)

| URL | Status | Indexable | Canonical Actual | Title Actual | H1 Actual | Keyword Primaria | Search Intent | CTA Principal | Schema Actual | Problemas Detectados |
| :--- | :---: | :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | 200 | Sí | `https://webempiria.vercel.app/` | Centro Terapéutico Empiria \| Fonoaudiología Infantil en Bogotá | Fonoaudiología Infantil en Bogotá | fonoaudiología infantil Bogotá | Comercial / Local | Conocer proceso / WhatsApp | MedicalBusiness, LocalBusiness | Canonical a Vercel; Schema con dominio Vercel. |
| `/nosotros` | 200 | Sí | `https://webempiria.vercel.app/nosotros` | Nosotros \| Enfoque y Equipo Profesional | Un espacio donde el cuidado y la ciencia se dan la mano | fonoaudióloga infantil Bogotá | Informativo / E-E-A-T | WhatsApp acercamiento | Ninguno en página (solo root) | H1 poético sin keyword; falta schema `Person`; bio menciona adultos. |
| `/areas-de-atencion` | 200 | Sí | `https://webempiria.vercel.app/areas-de-atencion` | Áreas de Atención \| Habla, Lenguaje, Comunicación y Aprendizaje | Acompañamiento especializado en el desarrollo infantil | terapia de lenguaje niños Bogotá | Comercial / Informativo | Cards a áreas individuales | Ninguno en página | H1 sin término "fonoaudiología infantil"; sin breadcrumb schema. |
| `/areas-de-atencion/habla` | 200 | Sí | `https://webempiria.vercel.app/areas-de-atencion/habla` | Habla \| Fonoaudiología Infantil Bogotá | Habla | dificultades del habla en niños | Comercial / Síntomas | WhatsApp orientación | Ninguno en página | H1 de 1 palabra; falta FAQ schema; sin enlace a proceso/valoración. |
| `/areas-de-atencion/lenguaje` | 200 | Sí | `https://webempiria.vercel.app/areas-de-atencion/lenguaje` | Lenguaje \| Fonoaudiología Infantil Bogotá | Lenguaje | terapia de lenguaje niños Bogotá | Comercial / Síntomas | WhatsApp orientación | Ninguno en página | H1 de 1 palabra; sin enlaces a artículos relacionados. |
| `/areas-de-atencion/comunicacion`| 200 | Sí | `https://webempiria.vercel.app/areas-de-atencion/comunicacion` | Comunicación \| Fonoaudiología Infantil Bogotá | Comunicación | comunicación social infantil | Comercial / Síntomas | WhatsApp orientación | Ninguno en página | H1 de 1 palabra. |
| `/areas-de-atencion/lectoescritura`| 200| Sí | `https://webempiria.vercel.app/areas-de-atencion/lectoescritura` | Lectoescritura \| Fonoaudiología Infantil Bogotá | Lectoescritura | lectoescritura infantil Bogotá | Comercial / Síntomas | WhatsApp orientación | Ninguno en página | H1 de 1 palabra; sin enlaces internos al artículo de lectoescritura. |
| `/areas-de-atencion/aprendizaje`| 200 | Sí | `https://webempiria.vercel.app/areas-de-atencion/aprendizaje` | Aprendizaje \| Fonoaudiología Infantil Bogotá | Aprendizaje | dificultades de aprendizaje niños | Comercial / Síntomas | WhatsApp orientación | Ninguno en página | H1 de 1 palabra. |
| `/nuestro-espacio` | 200 | Sí | `https://webempiria.vercel.app/nuestro-espacio` | Nuestro Espacio | Nuestro Espacio | fonoaudiología infantil Modelia | Local / Confianza | Ver ubicación / WhatsApp | Ninguno en página | H1 genérico; Google Maps URL genérica; falta schema local de sede. |
| `/nuestro-proceso` | 200 | Sí | `https://webempiria.vercel.app/nuestro-proceso` | Nuestro Proceso \| 4 Pasos Hacia el Bienestar de tu Hijo | Un proceso pensado para darte tranquilidad y certidumbre | proceso fonoaudiología infantil | Confianza / Transaccional | Enlaces en pasos | Ninguno en página (omite FAQPage) | Falta schema FAQPage para las preguntas que renderiza. |
| `/para-familias` | 200 | Sí | `https://webempiria.vercel.app/para-familias` | Para Familias \| Tu Participación También Hace Parte del Proceso | Caminamos junto a ti en cada etapa | estimulación del lenguaje en casa | Educativo / Soporte | WhatsApp / Artículos | Ninguno en página | Falta enlazado cruzado estructurado. |
| `/preguntas-frecuentes` | 200 | Sí | `https://webempiria.vercel.app/preguntas-frecuentes` | Preguntas Frecuentes \| Fonoaudiología Infantil Empiria | Preguntas Frecuentes | fonoaudiología particular Bogotá | Informativo | WhatsApp | FAQPage | Discrepancia en edad (dice 10 años, objetivo es 12). |
| `/recursos` | 200 | Sí | `https://webempiria.vercel.app/recursos` | Recursos y Artículos para Familias | Artículos y Orientación para Familias | recursos fonoaudiología infantil | Informativo | Cards de artículos | Ninguno en página | Faltan clusters temáticos visibles. |
| `/recursos/[slug]` (x4) | 200 | Sí | `https://webempiria.vercel.app/recursos/[slug]` | [Título] \| Empiria en Casa | [Título del artículo] | [Keyword específica del artículo] | Informativo (Top of Funnel) | WhatsApp con título precargado | Ninguno en página | Falta schema `Article` y `BreadcrumbList`; sin enlaces internos a servicios. |
| `/contacto` | 200 | Sí | `https://webempiria.vercel.app/contacto` | Contacto y Sede en Bogotá | Estamos aquí para escucharte | fonoaudióloga Bogotá contacto | Transaccional / Local | Asistente de WhatsApp / Llamar / Mapa | Ninguno en página | Google Maps URL genérica; sin tracking de analytics. |
| Legal (x5) | 200 | Sí (innecesario) | `https://webempiria.vercel.app/[legal]` | Políticas / Términos | [Título legal] | N/A | Legal / Cumplimiento | Correo de contacto | Ninguno en página | 5 URLs en sitemap; deberían evaluarse para `noindex, follow`. |

---

## 5. KEYWORD MAPPING (MATRIZ ESTRATÉGICA DE PALABRAS CLAVE)

*Nota: Conforme a las reglas de auditoría y principio de no invención, los volúmenes de búsqueda no son inventados; se marcan como "Pendiente de verificación con herramienta SEO (Ahrefs/Semrush/GSC)".*

| Palabra Clave | Intención | Dificultad Estimada | Intención Local | URL Objetivo | Estado Actual | Recomendación |
| :--- | :---: | :---: | :---: | :--- | :---: | :--- |
| **fonoaudiología infantil Bogotá** | Comercial / Local | Media-Alta | Bogotá | `/` (Homepage) | Optimizado en Title y H1 | Mantener como pilar central de la Homepage; reforzar NAP y citas locales. |
| **fonoaudióloga infantil Bogotá** | Comercial / E-E-A-T | Media | Bogotá | `/nosotros` | Parcial (Title menciona equipo) | Ajustar H1 y metadatos de `/nosotros` para responder a la búsqueda de profesionales. |
| **terapia de lenguaje niños Bogotá** | Comercial / Síntomas | Media-Alta | Bogotá | `/areas-de-atencion/lenguaje` | Sub-optimizado (H1 es "Lenguaje") | Cambiar H1 a "Terapia de Lenguaje para Niños en Bogotá" y enriquecer sección de signos. |
| **fonoaudiología para niños Bogotá** | Comercial / Local | Media | Bogotá | `/areas-de-atencion` | Parcial | Integrar de forma natural en el subtítulo y párrafos de apoyo de `/areas-de-atencion`. |
| **valoración fonoaudiológica infantil Bogotá** | Transaccional | Media | Bogotá | `/valoracion-fonoaudiologica` | **NO EXISTE PÁGINA** | **Crear página dedicada `/valoracion-fonoaudiologica` con Prioridad P1.** |
| **valoración fonoaudiológica para niños** | Transaccional | Media | Bogotá | `/valoracion-fonoaudiologica` | **NO EXISTE PÁGINA** | Keyword secundaria en la nueva landing de valoración. |
| **dificultades del habla en niños** | Síntomas / Informativo | Baja-Media | General / Bogotá | `/areas-de-atencion/habla` | Sub-optimizado | Enriquecer H1 y agregar enlace desde el artículo de pronunciación. |
| **problemas de pronunciación en niños** | Síntomas / Informativo | Media | General / Bogotá | `/recursos/senales-dificultad-pronunciacion-habla` | Optimizado en post | Enlazar directamente a `/areas-de-atencion/habla` y `/valoracion-fonoaudiologica`. |
| **tartamudez infantil Bogotá** | Síntomas / Comercial | Media | Bogotá | `/areas-de-atencion/habla` (sección fluidez) | Mencionada como signo | Crear sección destacada dentro de Habla sobre fluidez verbal y tartamudez infantil. |
| **estimulación del lenguaje niños Bogotá** | Informativo / Comercial | Media | Bogotá | `/para-familias` y `/recursos/como-estimular-lenguaje...`| Parcial | Conectar el artículo con el acompañamiento presencial para familias. |
| **lectoescritura infantil Bogotá** | Síntomas / Comercial | Media | Bogotá | `/areas-de-atencion/lectoescritura` | Sub-optimizado | Actualizar H1: "Acompañamiento en Lectoescritura Infantil en Bogotá". |
| **dificultades de aprendizaje niños Bogotá**| Síntomas / Comercial | Media | Bogotá | `/areas-de-atencion/aprendizaje` | Sub-optimizado | Actualizar H1: "Acompañamiento en Procesos de Aprendizaje Infantil en Bogotá". |
| **fonoaudiología infantil Modelia** | Local (Hiperlocal) | Baja | Modelia, Bogotá | `/nuestro-espacio` y `/contacto` | Parcial (solo dirección) | Destacar Modelia como ubicación en H1/H2 de `/nuestro-espacio`: "Consultorio en Modelia, Bogotá". |
| **terapia de lenguaje Modelia** | Local (Hiperlocal) | Baja | Modelia, Bogotá | `/contacto` | No optimizado | Incorporar en la descripción de sede y zonas de cobertura de proximidad en `/contacto`. |

---

## 6. PLAN DE ACCIÓN ESCALONADO (ACTION PLAN)

### Quick Wins (Primeros 7 días) — Riesgo Cero, Alto Impacto
1. **Corregir URL Canónica Base:** Actualizar `src/data/site.ts` para que `getSiteUrl()` retorne `https://www.centroempiria.com` por defecto, garantizando que el `metadataBase`, canonicals, Open Graph y JSON-LD apunten a producción.
2. **Corregir Robots.txt y Sitemap.xml:** Asegurar que `robots.ts` apunte a `https://www.centroempiria.com/sitemap.xml` y que `sitemap.ts` construya todas las URLs absolutas sobre el dominio comercial.
3. **Actualizar Enlaces a Google Maps:** Reemplazar el enlace de consulta genérica por el enlace verificado del perfil de Google Maps (`0x41d7ceca5cb0b891`) en `ContactSection.tsx`, `NuestroEspacioPage` y agregar enlace en el Footer.
4. **Optimizar H1s de Servicios:** Modificar los H1s de una sola palabra en `/areas-de-atencion/[slug]` por títulos descriptivos que incluyan la especialidad y ubicación.
5. **Configurar Dominio de Vercel:** En Vercel Dashboard, establecer redirect 308 de `webempiria.vercel.app` a `www.centroempiria.com`.

### Corto Plazo (30 días)
1. **Crear Landing `/valoracion-fonoaudiologica`:** Desarrollar la página para capturar la intención de búsqueda transaccional "valoración fonoaudiológica infantil Bogotá" con esquema paso a paso y CTA a WhatsApp.
2. **Enriquecer JSON-LD (Schema.org):**
   - Incorporar `geo` (latitud/longitud) y `hasMap` en `MedicalBusiness` / `LocalBusiness`.
   - Implementar `Person` schema para Johanna Gómez y Lina Rodríguez con sus titulaciones verificadas.
   - Implementar `Article` y `FAQPage` schema en las páginas de recursos.
   - Implementar `BreadcrumbList` schema en servicios y artículos.
3. **Enlazado Interno Contextual:** Enlazar cada artículo del blog con su área de servicio correspondiente y la valoración inicial.
4. **Conversión a React Server Components:** Retirar la directiva `"use client"` de los componentes puramente estáticos (`HeroSection`, `ServicesSection`, `SpaceSection`, etc.) para reducir el JS bundle.
5. **Compresión de Imágenes:** Optimizar los archivos fuente pesados en `public/images/` (banner de 1.72MB -> WebP <150KB).

### Mediano Plazo (60 - 90 días)
1. **Verificación y Optimización de Google Business Profile (GBP):**
   - Asegurar categoría principal "Fonoaudiólogo" o "Centro de atención infantil".
   - Añadir fotografías reales de consultorios y materiales.
   - Solicitar a familias actuales (con consentimiento y sin incentivos) reseñas genuinas enfocadas en la atención en Modelia.
2. **Implementación de Analítica Ética y de Conversión:**
   - Instalar medición liviana (ej. Vercel Web Analytics o GA4 mínimo sin cookies invasivas).
   - Crear disparadores de eventos para clics en WhatsApp catalogados por servicio (`service: "habla"`, `service: "valoracion"`), sin almacenar jamás datos clínicos de los menores.
3. **Hardening de Seguridad:**
   - Diseñar y desplegar una cabecera `Content-Security-Policy` estricta adaptada a Next.js y los servicios autorizados.

### Largo Plazo (3 - 6 meses)
1. **Cluster de Contenidos E-E-A-T:**
   - Publicar 2 a 3 artículos profundos al mes redactados con rigor fonoaudiológico y firmados por Johanna o Lina (ej. "Cuándo consultar por la pronunciación de la R", "Conciencia fonológica previa a la lectura").
2. **Alianzas Locales y Citas NAP de Calidad:**
   - Conseguir menciones y enlaces naturales desde directorios de salud de Bogotá, colegios y jardines infantiles de la zona de Modelia/Fontibón.
3. **Preparación de Escalabilidad para Expansión Geográfica:**
   - Mantener la arquitectura modular para que, si en el futuro se abre una sede física en otra ciudad o localidad, se pueda crear una página real con profesionales propios sin incurrir en doorway pages.

---

## 7. CHECKLISTS DE AUDITORÍA Y CUMPLIMIENTO

### Checklist: Google Search Console (GSC)
- [ ] Propiedad de dominio (`DNS`) verificada para `centroempiria.com`.
- [ ] Sitemap oficial `https://www.centroempiria.com/sitemap.xml` enviado y con estado "Correcto".
- [ ] Inspeccionar URL de la Homepage y comprobar que la URL canónica declarada por el usuario coincida con la URL canónica seleccionada por Google.
- [ ] Verificar que ninguna URL legítima esté marcada accidentalmente como "Excluida por etiqueta noindex".
- [ ] Monitorear pestaña "Experiencia en la página" y "Core Web Vitals" en dispositivos móviles.

### Checklist: Google Business Profile (GBP)
- [ ] Nombre exacto: **Centro Terapéutico Empiria**.
- [ ] Dirección física exacta: **Avenida Calle 24 #74-55, Barrio Modelia, Bogotá, Colombia**.
- [ ] Teléfono: **+57 312 736 6606**.
- [ ] URL de sitio web: **https://www.centroempiria.com/**.
- [ ] Horarios: Lunes a viernes 9:00 a.m. – 6:00 p.m.; Sábados 9:00 a.m. – 5:00 p.m.; Domingos Cerrado.
- [ ] Categoría primaria verificada y categorías secundarias pertinentes a fonoaudiología infantil.
- [ ] Cero reseñas falsas o compradas; protocolo ético para invitar a familias satisfechas a dejar opiniones reales.

### Checklist: Seguridad y Hardening Vercel
- [ ] Redirección de `webempiria.vercel.app` hacia `www.centroempiria.com` configurada en DNS/Vercel.
- [ ] Inyección de cabecera `X-Robots-Tag: noindex` en entornos de Preview para evitar indexación de ramas secundarias.
- [ ] Variables de entorno revisadas: `NEXT_PUBLIC_SITE_URL=https://www.centroempiria.com` asignada a Production.
- [ ] Verificación de que no existen API keys o secretos expuestos con prefijo `NEXT_PUBLIC_`.
- [ ] Cabecera `Content-Security-Policy` testeada y activa sin romper scripts esenciales.

### Checklist: Rendimiento y Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s en conexiones 4G móviles.
- [ ] INP (Interaction to Next Paint) < 200ms al interactuar con menús y formularios.
- [ ] CLS (Cumulative Layout Shift) < 0.10 garantizado con dimensiones explícitas en imágenes y fuentes pre-cargadas.
- [ ] Eliminación de `"use client"` en 12 componentes estáticos.
- [ ] Conversión de imágenes pesadas a WebP/AVIF optimizados.

### Checklist: Privacidad y Normativa YMYL
- [ ] Cumplimiento de la Ley 1581 de 2012 y Decreto 1377 de 2013 de Colombia en políticas visibles.
- [ ] Cero recolección de historias clínicas, diagnósticos o datos sensibles de menores en formularios web públicos.
- [ ] Claridad total de que la web no emite diagnósticos médicos automáticos.
- [ ] Revisión humana y firma profesional colegiada en todos los artículos de salud infantil.

---

## 8. DEFINITION OF DONE (DoD)

Para considerar culminada la optimización integral de Centro Terapéutico Empiria, se deben satisfacer los siguientes criterios verificables:

1. [x] **Verificación Canónica:** En `src/data/site.ts`, `getSiteUrl()` resuelve forzadamente a `https://www.centroempiria.com` y filtra dominios `.vercel.app`.
2. [x] **Verificación de Redirección:** En `next.config.ts`, configuradas redirecciones permanentes 308 desde `webempiria.vercel.app`, `empiriaweb.vercel.app` y `centroempiria.com` hacia `https://www.centroempiria.com/:path*`.
3. [x] **Sitemap y Robots Válidos:** `robots.ts` apunta a `https://www.centroempiria.com/sitemap.xml`; `sitemap.ts` utiliza el dominio oficial y añade `/valoracion-fonoaudiologica` con prioridad 0.9.
4. [x] **Página de Valoración Operativa:** Creada `/valoracion-fonoaudiologica` con metadatos completos, schemas `MedicalProcedure` y `BreadcrumbList`, CTA WhatsApp y disclaimer ético no diagnóstico.
5. [x] **H1s Clínicos y Semánticos:** Todas las áreas de atención tienen H1s semánticos con enfoque local Bogotá en `src/data/services.ts`.
6. [x] **Google Maps y Local NAP:** Ficha verificada oficial (`CID 0x41d7ceca5cb0b891`) integrada en `ContactSection.tsx`, `nuestro-espacio/page.tsx`, `Header.tsx` y `Footer.tsx` (con dirección física clicable).
7. [x] **Schema Validado:** Estructuras JSON-LD añadidas y corregidas en `layout.tsx` (`geo`, `hasMap`, `Person`), en servicios (`MedicalWebPage`, `BreadcrumbList`), en recursos (`Article`, `BreadcrumbList`) y valoración (`MedicalProcedure`).
8. [x] **Server Components Limpios:** 11 componentes de sección migrados a React Server Components eliminando `"use client"`.
9. [x] **Activos Optimizados:** Textos ALT corregidos de forma objetiva; imágenes cargadas con Next/Image y priority/sizes adecuados.
10. [x] **Auditoría de Seguridad y Build:** Cabecera `Content-Security-Policy` integrada en `next.config.ts`; cero secretos expuestos en variables de cliente.

---

## 9. RESULTADOS DE VALIDACIÓN TÉCNICA (POST-IMPLEMENTACIÓN EN RAMA `fix/seo-security-production`)

Ejecución automatizada mediante `scripts/validate_seo.ps1`:

| Aspecto Evaluado | Elemento Técnico Verificado | Estado | Detalle del Resultado |
| :--- | :--- | :---: | :--- |
| **Dominio Canónico Base** | `src/data/site.ts:getSiteUrl()` | **PASS** | Fuerza `https://www.centroempiria.com` y descarta dominios `*.vercel.app`. |
| **Robots.txt** | `src/app/robots.ts` | **PASS** | `sitemap.xml` referenciado con URL canónica oficial. |
| **Sitemap.xml** | `src/app/sitemap.ts` | **PASS** | Incluye `/valoracion-fonoaudiologica` (prioridad 0.9) y genera todas las URLs en `centroempiria.com`. |
| **Landing Valoración** | `src/app/valoracion-fonoaudiologica/page.tsx` | **PASS** | Schema `MedicalProcedure` + `BreadcrumbList`, CTA contextual WhatsApp y aviso ético no diagnóstico presentes. |
| **H1 Semánticos de Servicios** | `src/data/services.ts` y `areas-de-atencion/[slug]` | **PASS** | Reemplazo de H1s de una palabra por títulos descriptivos con intención local (Bogotá). |
| **Google Maps Local SEO** | `src/data/contact.ts` y componentes | **PASS** | Enlaces actualizados al CID oficial de Google Business Profile (`0x41d7ceca5cb0b891`). |
| **Cabeceras de Seguridad** | `next.config.ts:securityHeaders` | **PASS** | Content-Security-Policy (CSP) estricta + HSTS + X-Frame-Options + nosniff + Referrer-Policy. |
| **Redirecciones de Host** | `next.config.ts:redirects()` | **PASS** | Redirecciones 308 desde `webempiria.vercel.app`, `empiriaweb.vercel.app` y `centroempiria.com` hacia `www.centroempiria.com`. |
| **Verificación de Secretos** | Variables `NEXT_PUBLIC_*` | **PASS** | Cero variables públicas de entorno contienen claves, tokens o secretos. |
| **Server Components (RSC)** | `src/components/sections/` | **PASS** | 11 componentes migrados a Server Components (conservando únicamente estado en `ContactSection`, `FAQSection` y `SpaceSection`). |
| **E-E-A-T Artículos** | `src/app/recursos/[slug]/page.tsx` | **PASS** | Schemas `Article` y `BreadcrumbList` activos; enlazado cruzado a servicios y valoración. |
| **Población Objetivo** | `src/data/faq.ts` y `src/data/team.ts` | **PASS** | Rango armonizado a 0 a 12 años; biografía contextualizada a la práctica pediátrica de Empiria. |
| **Política de Precios** | `src/data/process.ts` | **PASS** | Eliminada ambigüedad; redirige a planes y paquetes de atención sin precios fijos ficticios. |
| **Alt Text Objetivo** | `src/components/sections/HeroSection.tsx` | **PASS** | Eliminada afirmación ficticia sobre imagen de stock. |

**Balance General:** 14 PASS / 0 WARNING / 0 FAIL. Proyecto 100% listo para validación de preview en Vercel.
