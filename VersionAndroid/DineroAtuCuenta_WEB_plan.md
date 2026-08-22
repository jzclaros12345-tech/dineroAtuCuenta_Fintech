# LISTA PRINCIPAL DE TRABAJO — WEB UI/UX

> Esta es la lista de trabajo para la **versión web** de DineroAtuCuenta.
> Documento hermano del plan Android (`DineroAtuCuenta_plan.md`).
> Mismas reglas pedagógicas y de seguridad aplican aquí.

- [ ] 1. Entender la diferencia entre app nativa y web app
- [ ] 2. Definir qué necesitamos de la versión web
- [ ] 3. Definir el flujo básico del remitente en web
- [ ] 4. Decidir qué tecnología web nos conviene
  - HTML/CSS/JS vanilla
  - React / Next.js
  - Vue / Nuxt
  - Svelte / SvelteKit
  - PWA (Progressive Web App)
- [ ] 5. Buscar plantillas web fintech
- [ ] 6. Ver demos de las plantillas
- [ ] 7. Comparar diseño/UX
- [ ] 8. Comparar tecnología/arquitectura
- [ ] 9. Revisar licencia
- [ ] 10. Revisar compatibilidad de navegadores
- [ ] 11. Revisar seguridad de la plantilla
- [ ] 12. Revisar rendimiento
- [ ] 13. Elegir 1–3 finalistas
- [ ] 14. Elegir la plantilla/base definitiva
- [ ] 15. Descargar/clonar
- [ ] 16. Ejecutar la plantilla sin modificarla
- [ ] 17. Medir rendimiento inicial
- [ ] 18. Adaptar la UI a DineroAtuCuenta
- [ ] 19. Diseñar las pantallas definitivas
- [ ] 20. Implementar navegación
- [ ] 21. Implementar formularios y estados
- [ ] 22. Probar en distintos navegadores y dispositivos
- [ ] 23. Optimizar rendimiento
- [ ] 24. Revisión final de UI/UX

## Áreas futuras (compartidas con Android)

- [ ] Backend (compartido con app Android)
- [ ] Base de datos (compartida)
- [ ] Motor financiero (compartido)
- [ ] Seguridad web específica
- [ ] Integraciones
- [ ] Pruebas cross-browser
- [ ] Performance y monitorización
- [ ] PWA / instalabilidad
- [ ] Producción y operación

---

# 1. WEB APP — CONTEXTO Y JUSTIFICACIÓN

## 1.1. ¿Por qué una versión web?

La versión Android (Kotlin + Jetpack Compose, plantilla `Banking-App-Mock-Compose`) ya está en marcha.

La web resuelve lo que Android no puede:

```text
Android nativo
   │
   ├── ✅ Mejor experiencia nativa
   ├── ✅ Biometría, notificaciones push
   ├── ❌ Solo Android
   ├── ❌ Requiere compilar APK
   ├── ❌ Requiere Play Store o sideloading
   ├── ❌ Android antiguos quedan excluidos
   │
Web app
   │
   ├── ✅ Funciona en CUALQUIER dispositivo con navegador
   ├── ✅ Android, iPhone, Windows, Mac, Linux, tablet
   ├── ✅ Actualización instantánea (sin descargar nueva versión)
   ├── ✅ No necesita tienda de aplicaciones
   ├── ✅ Fallback para Android no compatibles
   ├── ⚠️ Sin biometría nativa (APIs limitadas)
   ├── ⚠️ Notificaciones push menos confiables
   └── ⚠️ Algunos usuarios esperan "app de verdad"
```

### Estrategia de plataformas

```text
                    DineroAtuCuenta
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
        Android compatible        Cualquier otro dispositivo
              │                         │
              ↓                         ↓
          App móvil                Versión web
         (Kotlin/Compose)        (navegador)
```

La web NO reemplaza Android. **Complementa y amplía la cobertura.**

## 1.2. ¿Qué es una Web App vs. un sitio web?

**Sitio web** → páginas estáticas de información (como una página "Acerca de").

**Web App** → aplicación interactiva que funciona en el navegador. El usuario puede:
- registrarse;
- iniciar sesión;
- crear órdenes;
- ver historial;
- interactuar con formularios;
- recibir notificaciones.

DineroAtuCuenta web será una **web app**, no un sitio informativo.

## 1.3. ¿Qué es una PWA?

**PWA = Progressive Web App.**

Es una web app que además puede:
- instalarse en el dispositivo (icono en pantalla de inicio);
- funcionar offline parcialmente;
- enviar notificaciones push (con limitaciones);
- cachear recursos para arranque rápido.

No es obligatorio que nuestra web sea PWA desde el día 1, pero es una opción a evaluar.

---

# 2. OBJETIVO DE LA VERSIÓN WEB

## Primera etapa (actual)

> **Crear una interfaz web funcional desde el punto de vista visual y de experiencia de usuario, utilizando una plantilla/base visual adecuada.**

Igual que con Android: **NO se construirá todavía el backend financiero.**

El objetivo es definir y validar:
- apariencia web;
- navegación;
- pantallas/vistas;
- experiencia de usuario en navegador;
- flujo de envío;
- historial;
- estados;
- perfil;
- configuración;
- responsive design (móvil, tablet, desktop);
- accesibilidad.

## Segunda etapa

> **Conectar la web al mismo backend que Android.**

```text
Android App ──┐
              ├──→ API Backend (compartida)
Web App ──────┘
```

---

# 3. DECISIÓN PENDIENTE — Tecnología web

## Opciones principales

### Opción A — React + Next.js

- JavaScript/TypeScript
- Ecosistema enorme
- SSR (Server Side Rendering) para SEO
- Muchas plantillas fintech disponibles
- Fácil de encontrar desarrolladores

### Opción B — Vue + Nuxt

- JavaScript/TypeScript
- Más sencillo de aprender que React
- SSR disponible
- Comunidad grande, menor que React
- Buenas plantillas disponibles

### Opción C — Svelte + SvelteKit

- Compilador, no runtime
- Muy rápido
- Menos dependencias
- Comunidad más pequeña
- Menos plantillas fintech disponibles

### Opción D — HTML/CSS/JS + Vite

- Sin framework pesado
- Máximo control
- Requiere más trabajo manual
- Menos estructura para escalar

## Pregunta que debemos responder

¿Qué tecnología permite cumplir mejor:

- máxima compatibilidad de navegadores;
- rendimiento;
- facilidad de desarrollo;
- disponibilidad de plantillas fintech;
- responsive design;
- seguridad;
- mantenimiento;
- posibilidad de PWA;
- integración con el futuro backend compartido;
- tamaño final de la aplicación;
- SEO cuando sea necesario?

**Estado:** 🔴 Pendiente.

---

# 4. COMPATIBILIDAD — Navegadores y dispositivos

## Objetivo

> **Soportar la mayor cantidad razonable de navegadores y dispositivos posible.**

### Navegadores objetivo

```text
Obligatorios:
├── Chrome (Android, Desktop)
├── Safari (iOS, Mac)
├── Firefox (Desktop)
├── Edge (Desktop)
│
Deseables:
├── Samsung Internet (Android)
├── Opera (Android, Desktop)
└── Chrome móvil en Android antiguos
```

### Dispositivos

```text
Móviles:
├── Android (cualquier versión con Chrome moderno)
├── iPhone (Safari)
│
Tablets:
├── iPad (Safari)
├── Android tablets (Chrome)
│
Desktop:
├── Windows
├── Mac
└── Linux
```

### Ventaja clave sobre Android nativo

```text
Android 5 con Chrome actualizado → ✅ web funciona
Android 5 con app nativa Compose → ❌ no compatible
```

Esto es exactamente el fallback que planificamos en el documento Android (sección 20).

**Estado:** 🟡 Se definirá tras elegir tecnología web.

---

# 5. BÚSQUEDA DE PLANTILLAS WEB

## Criterios de búsqueda (adaptados de la sección 6 del plan Android)

La plantilla candidata debe evaluarse por:

- apariencia moderna;
- navegación web y responsive;
- login / registro;
- dashboard;
- perfil;
- historial de transacciones;
- formularios de envío;
- estados de transferencia;
- notificaciones;
- configuración;
- componentes reutilizables;
- responsive (móvil, tablet, desktop);
- calidad del código;
- documentación;
- actividad del repositorio;
- licencia;
- facilidad de modificación.

## Criterios legales (mismos que Android)

Preferencia:
1. MIT
2. Apache-2.0
3. BSD u otra licencia permisiva compatible

## Regla de búsqueda (misma que Android)

```text
1. demo / screenshots / preview
        ↓
2. GitHub / repositorio
        ↓
3. licencia + tecnología + calidad
        ↓
4. Solo entonces: clone / download / install
```

## Dónde buscar

- [ ] GitHub
- [ ] Repositorios oficiales de frameworks
- [ ] Demos oficiales
- [ ] Figma Community
- [ ] Marketplaces de templates (verificando licencia en fuente original)

**Estado:** 🟡 Por iniciar búsqueda.

---

# 5.1. Referencia existente — shadcn-fintech

> **Nota:** En la investigación Android (sección 7 del plan Android), se clonó accidentalmente `shadcn-fintech`. Resultó ser una plantilla web (Next.js + React + Tailwind/shadcn), no Android.

Se descartó como candidata Android, pero **podría ser relevante como candidata web**.

### Pendiente

- [ ] Revisar si `shadcn-fintech` sigue existiendo en `repos/`
- [ ] Evaluar su demo visual
- [ ] Evaluar su licencia
- [ ] Evaluar sus pantallas y componentes
- [ ] Decidir si es candidata web o si buscamos algo mejor

**No descartar ni aceptar automáticamente.** Evaluar con los mismos criterios que cualquier otra candidata.

---

# 6. FILTRO DE SEGURIDAD ANTES DE CLONAR

Mismas reglas que para Android (sección A4 del plan Android), adaptadas a web:

### Antes de descargar

- [ ] Confirmar repositorio oficial
- [ ] Revisar propietario del repositorio
- [ ] Revisar actividad y releases
- [ ] Revisar licencia
- [ ] Revisar `package.json` (dependencias)
- [ ] Revisar scripts de `package.json` (build, postinstall, etc.)
- [ ] Buscar secretos accidentalmente publicados
- [ ] Revisar si hay SDKs de analytics/tracking ocultos
- [ ] Revisar si hay llamadas de red no documentadas
- [ ] No ejecutar scripts desconocidos sin inspeccionarlos
- [ ] No introducir credenciales reales
- [ ] No conectar cuentas financieras reales durante la evaluación

### Específico de web

- [ ] Revisar Content Security Policy
- [ ] Revisar si almacena tokens en localStorage (inseguro para producción)
- [ ] Revisar si tiene vulnerabilidades XSS obvias
- [ ] Revisar si carga scripts de CDNs externos
- [ ] Revisar si tiene Service Workers y qué cachean

---

# 7. PLAN OPERATIVO — FASES DE CONSTRUCCIÓN WEB

## Fase WA — Investigación de plantillas web

### WA1. Buscar candidatas
- [ ] Buscar plantillas web fintech/banking/remittance
- [ ] Priorizar: React/Next.js, Vue/Nuxt, Svelte/SvelteKit
- [ ] Registrar cada candidata encontrada

### WA2. Evaluación visual
- [ ] Ver demo de cada candidata
- [ ] Capturar screenshots
- [ ] Evaluar responsive (desktop + móvil)
- [ ] Comparar calidad visual

### WA3. Evaluación técnica
- [ ] Tecnología utilizada
- [ ] Dependencias
- [ ] Estructura del proyecto
- [ ] Calidad del código
- [ ] Tests existentes
- [ ] Documentación

### WA4. Comparación
Tabla de candidatas con: UX, tecnología, seguridad base, compatibilidad de navegadores, rendimiento, licencia, mantenimiento, dependencias, responsive, facilidad de modificación, riesgos.

### WA5. Selección
- [ ] Elegir 1–3 finalistas
- [ ] Documentar razones
- [ ] Elegir candidata principal
- [ ] Mantener alternativa

---

## Fase WB — Preparación del entorno

### WB1. Aislamiento
- [ ] Crear carpeta dentro de `~/Documentos/Fintech/repos/`
- [ ] Registrar versiones de Node.js/npm/pnpm
- [ ] Documentar requisitos

### WB2. Estado inicial
- [ ] Clonar repositorio
- [ ] Registrar commit inicial
- [ ] No modificar código
- [ ] Revisar `package.json`, `package-lock.json`
- [ ] Revisar scripts de instalación
- [ ] Revisar dependencias antes de ejecutar `npm install`

### WB3. Instalación
- [ ] Instalar dependencias
- [ ] Registrar errores
- [ ] Registrar warnings de seguridad (`npm audit`)
- [ ] Registrar tamaño de `node_modules`

---

## Fase WC — Ejecutar sin modificar

### WC1. Arranque
- [ ] Ejecutar `npm run dev` o equivalente
- [ ] Confirmar que arranca
- [ ] Probar en Chrome desktop
- [ ] Probar en Chrome móvil (DevTools responsive)
- [ ] Probar en Firefox
- [ ] Probar en Safari si es posible

### WC2. Inventario visual
- [ ] onboarding / landing
- [ ] login
- [ ] registro
- [ ] home / dashboard
- [ ] envío de dinero
- [ ] historial
- [ ] perfil
- [ ] configuración
- [ ] notificaciones
- [ ] estados de transferencia
- [ ] errores
- [ ] loading
- [ ] componentes reutilizables
- [ ] responsive a distintos tamaños

### WC3. Inventario técnico
- [ ] Arquitectura
- [ ] Routing
- [ ] State management
- [ ] API calls / networking
- [ ] Autenticación
- [ ] Almacenamiento local
- [ ] CSS / diseño
- [ ] Dependencias
- [ ] Build / bundling

---

## Fase WD — Auditoría de rendimiento inicial

Medir antes de personalizar:

- [ ] Tiempo de carga inicial (First Contentful Paint)
- [ ] Largest Contentful Paint
- [ ] Time to Interactive
- [ ] Cumulative Layout Shift
- [ ] Tamaño del bundle (JS, CSS)
- [ ] Número de requests
- [ ] Lighthouse score
- [ ] Rendimiento en conexión lenta (3G simulado)
- [ ] Rendimiento en móvil de gama baja (CPU throttling)

---

## Fase WE — Diseño específico DineroAtuCuenta Web

Mismo flujo que Android pero adaptado a web:

```text
Login
 ↓
Home / Dashboard
 ↓
Nuevo envío
 ↓
Destinatario
 ↓
Monto
 ↓
Comisión + tipo de cambio
 ↓
Total
 ↓
Instrucciones Mercado Pago
 ↓
Esperando pago
 ↓
Pago recibido
 ↓
Procesando
 ↓
Enviado a Bolivia
 ↓
Completado
```

Navegación lateral/superior:
```text
Dashboard
 ├── Historial
 ├── Perfil
 ├── Seguridad
 └── Ayuda
```

### Tareas
- [ ] Definir cada vista/página
- [ ] Definir estados de cada vista
- [ ] Definir errores
- [ ] Definir loading/skeletons
- [ ] Definir navegación
- [ ] Definir responsive breakpoints
- [ ] Identificar componentes reutilizables de la plantilla
- [ ] Identificar lo que debemos crear

---

## Fase WF — Adaptación visual

- [ ] Branding DineroAtuCuenta
- [ ] Colores (misma paleta que Android)
- [ ] Tipografía
- [ ] Iconografía
- [ ] Botones
- [ ] Formularios
- [ ] Tarjetas
- [ ] Navegación
- [ ] Estados de transferencia
- [ ] Mensajes de error
- [ ] Accesibilidad (WCAG 2.1 AA mínimo)
- [ ] Responsive: móvil, tablet, desktop
- [ ] Dark mode (si la plantilla lo soporta)

**Regla:** datos ficticios/mock. Sin funcionalidades financieras reales todavía.

---

## Fase WG — Compatibilidad cross-browser

- [ ] Chrome desktop
- [ ] Chrome Android
- [ ] Safari iOS
- [ ] Safari Mac
- [ ] Firefox desktop
- [ ] Edge desktop
- [ ] Samsung Internet
- [ ] Conexión lenta
- [ ] Pantalla pequeña (320px)
- [ ] Pantalla grande (1920px+)

---

## Fase WH — Seguridad web

- [ ] Revisar almacenamiento de tokens (HttpOnly cookies vs localStorage)
- [ ] Revisar CORS
- [ ] Revisar Content Security Policy
- [ ] Revisar protección XSS
- [ ] Revisar protección CSRF
- [ ] Revisar HTTPS obligatorio
- [ ] Revisar headers de seguridad
- [ ] Revisar exposición de secretos en frontend
- [ ] Revisar manejo de sesiones
- [ ] Revisar rate limiting del lado cliente
- [ ] Revisar datos sensibles en la consola del navegador

**Regla:** misma que Android — ninguna plantilla será considerada segura para dinero real solo por declarar "security features".

---

# 8. COHERENCIA ANDROID ↔ WEB

## Principio

```text
Android y Web deben sentirse como el mismo producto.
```

### Qué debe ser coherente

- Marca y colores
- Flujo de envío (mismos pasos)
- Estados de transferencia (mismos nombres)
- Terminología
- Mensajes de error
- Datos del usuario
- Historial
- Backend/API (compartida)

### Qué puede diferir

- Layout (móvil nativo vs. responsive web)
- Navegación (bottom bar vs. sidebar/topbar)
- Animaciones (nativas vs. CSS)
- Biometría (solo en Android nativo)
- Notificaciones push (nativas vs. Web Push)

---

# 9. RELACIÓN CON EL BACKEND

```text
┌──────────────┐     ┌──────────────┐
│ Android App  │     │   Web App    │
│ (Compose)    │     │ (React/Vue/  │
│              │     │  etc.)       │
└──────┬───────┘     └──────┬───────┘
       │                    │
       └────────┬───────────┘
                │
         ┌──────▼──────┐
         │  API REST   │
         │  Backend    │
         │ (compartido)│
         └─────────────┘
```

La web NO tendrá su propio backend. Usará la misma API que Android.

Esto significa que las decisiones de backend (secciones 12-18 del plan Android) aplican igualmente aquí.

---

# 10. PWA — DECISIÓN PENDIENTE

### ¿Debemos hacer la web app instalable?

Ventajas:
- Icono en pantalla de inicio
- Carga más rápida (cache)
- Experiencia más "nativa"
- Funciona offline parcialmente

Desventajas:
- Más complejidad de desarrollo
- Service Workers requieren mantenimiento
- Cache puede causar problemas de actualización
- No todos los navegadores soportan todas las features

**Decisión:** posponer hasta tener la web funcionando. PWA es una mejora, no un requisito del día 1.

**Estado:** 🟡 Pendiente.

---

# 11. REGLAS DE INVESTIGACIÓN WEB

Misma filosofía que Android (sección 23 del plan Android):

### Antes de descargar una plantilla web

```text
[ ] ¿Es realmente una web app (no mobile-only)?
[ ] ¿Tiene demo visual accesible?
[ ] ¿La demo corresponde al código actual?
[ ] ¿Tiene licencia explícita?
[ ] ¿La licencia permite uso comercial?
[ ] ¿Está mantenida?
[ ] ¿Qué framework/stack utiliza?
[ ] ¿Qué dependencias importantes tiene?
[ ] ¿Es realmente gratuita?
[ ] ¿Tiene pantallas útiles para nuestro flujo?
[ ] ¿Es responsive?
[ ] ¿Qué partes requerirían backend?
```

Solo después de aprobar:

```text
clone → install → run → inspect
```

---

# 12. MÉTRICAS WEB ESPECÍFICAS

Además de las métricas generales del plan Android, para web mediremos:

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### Lighthouse
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

### Bundle
- [ ] Tamaño JS total
- [ ] Tamaño CSS total
- [ ] Número de chunks
- [ ] Tree shaking efectivo

---

# 13. REGISTRO DE CANDIDATAS WEB

## Candidatas encontradas: 0

Aquí se documentará cada plantilla web que investiguemos, con el mismo formato:

```text
Nombre:
Tecnología:
Demo:
GitHub:
Licencia:
Gratis / de pago:
Última actualización:
Pantallas disponibles:
Funcionalidades:
Calidad visual:
Calidad del código:
Responsive:
Compatibilidad navegadores:
Dependencias:
Riesgos:
Qué podemos reutilizar:
Qué habría que construir:
```

**Estado:** 🟡 Por iniciar búsqueda.

---

# 14. REGISTRO DE BUGS WEB

**Bugs reportados: 0**

(Se activará cuando tengamos código web propio.)

---

# 15. PRÓXIMO PASO

> **Buscar plantillas web fintech/banking con demo visual, evaluar sin descargar, y documentar candidatas aquí.**

Criterio de búsqueda inicial:
- Plantillas web de banca/fintech/remesas
- Con demo accesible
- Open source (MIT/Apache preferido)
- React/Next.js, Vue/Nuxt, o Svelte/SvelteKit
- Responsive (mobile-first ideal)
- Pantallas de dashboard, envío, historial, perfil

**NO instalar nada todavía.**

---

# REFERENCIA CRUZADA

| Tema | Plan Android | Plan Web |
|---|---|---|
| Plan maestro | `DineroAtuCuenta_plan.md` | `DineroAtuCuenta_WEB_plan.md` (este archivo) |
| Plantilla elegida Android | Banking-App-Mock-Compose | — |
| Plantilla elegida Web | — | Pendiente |
| Backend | Compartido | Compartido |
| Identidad/marca | Sección 2.1 Android | Misma |
| Modelo operativo | Sección 2.2 Android | Mismo |
| Flujo de envío | Sección 28 Android | Mismo (adaptado a web) |
| KYC/AML | Sección 15 Android | Mismo |
| Seguridad | Sección 14 Android + Fase H | Fase WH (específica web) |
| Performance | Sección 21 Android | Sección 12 (métricas web) |
