# DESIGN TOKENS

## 1. Objetivo

Este archivo centraliza los valores visuales base del producto. Todos los wireframes, al pasar a HTML/CSS, deben usar **estos tokens** en vez de valores sueltos.

Regla de uso:

```text
wireframe.md (estructura)  +  design-tokens.md (valores visuales)
        ↓
      HTML/CSS
```

El producto soporta **2 temas** (dark / light) y **2 idiomas** (es / en). Los temas se documentan aquí. El idioma NO es un token visual — se documenta aparte en la sección 8 de este archivo, y su contenido real vivirá en archivos de traducción (`locales/es.json`, `locales/en.json`) cuando lleguemos al código.

Idioma por defecto: **Español (es)**. Inglés (en) debe estar disponible desde el día uno como alternativa.

---

## 2. Colores — Tema Dark (referencia principal)

Extraídos visualmente de la referencia (Homepage). Son **aproximados** — al momento de codear conviene confirmarlos con un color picker sobre el diseño final.

```text
COLOR TOKEN                  VALOR APROX.     USO
─────────────────────────────────────────────────────────────────
color-background              #0B0C10         Fondo general de la página
color-surface                 #15171C         Fondo de cards / navbar
color-surface-alt             #1B1E24         Fondo de cards secundarias / inputs
color-border                  #2A2D34         Bordes sutiles de cards e inputs

color-text-primary            #F5F5F7         Texto principal (headings, body)
color-text-secondary          #A0A4AC         Texto secundario / descripciones
color-text-muted              #6C7078         Texto terciario / labels pequeños

color-primary                 #FF6B4A         Botones primarios, acentos, tags "PILLAR"
color-primary-hover           #FF8163         Hover de botones primarios

color-success                 #2ED9A3         Valores positivos (+€120.00), barra "Sí"
color-error                   #F25C5C         Valores negativos (-€340.00), barra "No"
color-warning                 #E8B84B         Estados de advertencia (si aplica)

color-active-badge-bg         #1F3D34         Fondo del badge "Active" (mercados)
color-active-badge-text       #2ED9A3         Texto del badge "Active"
```

---

## 3. Identidad de marca e iconos

```text
MARCA / FAVICON:
color-brand-primary           #FF6B4A         Fondo coral del favicon y logo del sidebar
icon-brand-glyph              d (minúscula)   Glifo blanco, peso bold
icon-brand-corner-radius      9px / 32px      Esquina redondeada del favicon
```

Los assets públicos de la marca viven en la raíz de `htmls/`:

```text
favicon.svg             Icono vectorial preferido (32 × 32 viewBox)
favicon-32.png          Fallback PNG de 32 × 32
apple-touch-icon.png    Icono para dispositivos Apple
```

Toda página HTML debe declararlos dentro de `<head>` con rutas absolutas:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/favicon-32.png" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

## 4. Colores — Tema Light (pendiente de definir)

Mismos tokens semánticos, valores a definir cuando tengamos una referencia visual del modo claro. Estructura reservada:

```text
COLOR TOKEN                  VALOR            USO
─────────────────────────────────────────────────────────────────
color-background              (pendiente)     Fondo general de la página
color-surface                 (pendiente)     Fondo de cards / navbar
color-surface-alt             (pendiente)     Fondo de cards secundarias / inputs
color-border                  (pendiente)     Bordes sutiles

color-text-primary            (pendiente)     Texto principal
color-text-secondary          (pendiente)     Texto secundario
color-text-muted              (pendiente)     Texto terciario

color-primary                 (pendiente)     Botones primarios / acentos
color-primary-hover           (pendiente)     Hover de botones primarios

color-success                 (pendiente)     Valores positivos
color-error                   (pendiente)     Valores negativos
color-warning                 (pendiente)     Estados de advertencia
```

> Nota: es común que `color-primary` (el coral) se mantenga igual en ambos temas para conservar identidad de marca, y que lo que cambie sea principalmente `background`, `surface`, `border` y `text`. A confirmar cuando definamos el modo claro.

---

## 5. Tipografía

```text
FAMILIA PRINCIPAL:
Sans-serif geométrica/moderna (estilo Inter, Suisse Int'l o similar)
→ a confirmar fuente exacta

ESCALA:
H1        40–48px   Bold
H2        28–32px   Bold/Semibold
H3        20–22px   Semibold
Body      16px      Regular
Small     14px      Regular
Label/Tag 12px      Medium/Semibold, letter-spacing amplio (uppercase)
```

Se observa uso de **mayúsculas + letter-spacing** en tags como "PILLAR 01", "CARACTERÍSTICAS", "PASO A PASO" — tratar como un estilo de texto reutilizable (`text-label` o `text-eyebrow`).

---

## 6. Espaciado

```text
ESCALA BASE (múltiplos de 8px):
4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128

USO OBSERVADO:
- Separación entre secciones grandes: ~96–128px
- Padding interno de cards: ~24–32px
- Separación entre elementos de un mismo bloque: ~16px
```

---

## 7. Bordes y otros

```text
BORDER RADIUS:
Cards grandes:     16px
Botones:           8–10px
Badges/Tags:       999px (pill/full-round)
Inputs:            8px

SOMBRAS:
Sutiles, o ninguna visible (el contraste se logra por diferencia
de superficie entre background y surface, típico de dark UI).

ÍCONOS:
Estilo lineal/outline (no filled), trazo delgado.
```

---

## 8. Idioma (i18n) — no es un token visual

Se documenta aquí solo como referencia rápida, pero el contenido real no vive en este archivo.

```text
IDIOMAS SOPORTADOS:
- es (Español) → default
- en (English)

ALCANCE:
Todo texto visible al usuario (UI, botones, contenido de marketing,
mensajes de error, etc.) debe poder traducirse.

IMPLEMENTACIÓN (a futuro, en código):
locales/
├── es.json
└── en.json
```

---

## 9. Componente global: Theme & Language Switcher

Dado que **todas las Pages** ofrecen elegir tema (dark/light) e idioma (es/en), este control se documenta **una sola vez** como componente compartido, no repetido en cada wireframe.

```text
COMPONENTE: Theme & Language Switcher
UBICACIÓN:  ver components/theme-language-switcher.md
APARECE EN: Navbar de todas las Pages (público y app autenticada)
```

Cada wireframe individual solo debe **referenciar** este componente dentro de su navbar (ej. "incluye Theme & Language Switcher — ver components/theme-language-switcher.md"), en vez de redocumentar su comportamiento.

---

## 10. Componente global: Sidebar (app autenticada)

```text
COMPONENTE: Sidebar
UBICACIÓN:  ver components/sidebar.md
APARECE EN: Todas las Pages de la app autenticada (no en Homepage ni Login,
            que usan el navbar horizontal público — ver sidebar.md)
```

Igual criterio que el switcher: cada wireframe de la app referencia este componente en vez de redocumentarlo.

---

## 11. Componente global: Exchange Rate Board (Bs / USD)

```text
COMPONENTE: Exchange Rate Board
UBICACIÓN:  ver components/exchange-rate-board.md
APARECE EN: transfers.md (ya implementado) + homepage.md (pendiente)
```

Confirma que el par de monedas principal de la plataforma es
**Boliviano (BOB) ↔ Dólar (USD)** — ver nota de corrección de moneda
en `exchange-rate-board.md`. Mismo criterio que los demás componentes
globales: se referencia, no se redocumenta en cada wireframe.

---

## 12. Animaciones (Motion Tokens)

Definidas por primera vez a partir de `transfers.md` (primer wireframe con flujo interactivo real). Se documentan aquí como tokens reutilizables para que **toda página futura copie el mismo lenguaje de movimiento**, en vez de que cada wireframe invente el suyo.

Fuente de inspiración (evaluadas por seguridad/licencia antes de portarlas — ver Nota de origen al final): [magicui.design](https://magicui.design) (MIT, open source) y [codefronts.com](https://codefronts.com) (MIT). Ninguna se usó tal cual (son componentes React/Tailwind) — se **porteó el concepto visual** a CSS/JS vanilla usando nuestros propios `color-*` tokens.

### 12.1 Principio general

```text
Toda animación debe:
- Tener un propósito funcional (dirigir atención, comunicar estado,
  dar jerarquía), nunca ser decoración pura.
- Respetar `prefers-reduced-motion: reduce` — se apagan
  animaciones/transiciones para quien lo solicite a nivel sistema
  operativo. Esto es obligatorio en TODA page, no opcional.
- Aplicarse con moderación: "spend your boldness in one place"
  — no todas las pages necesitan las mismas 3 animaciones a la vez,
  ver DECISIÓN DE ALCANCE abajo.
```

### 12.2 motion-shine-border

```text
QUÉ ES: Borde animado (barrido de luz sutil en color-primary) alrededor
        de una card, para dirigir el ojo al dato más importante de la
        pantalla la primera vez que se ve.
USO EN transfers.md: Summary card del Paso 1 (monto que el destinatario
        recibe) — NO se repite en Paso 2, para no distraer durante
        la confirmación de una transacción real.
DURACIÓN: 6s, loop infinito, linear.
COLOR: gradiente cónico transparente → color-primary → color-primary-hover → transparente.
IMPLEMENTACIÓN: pseudo-elemento ::before con conic-gradient + mask
        (mask-composite: exclude) rotando vía animation. Sin JS.
CUÁNDO USARLO: en cualquier card que sea "el resultado/destino" de un
        flujo (ej. monto a recibir, resultado de una simulación).
        No usar en más de una card por pantalla.
```

### 12.3 motion-stagger-in (avatar chips / listas)

```text
QUÉ ES: Entrada escalonada de una fila de ítems (ej. avatares de
        beneficiarios frecuentes), cada uno aparece con leve delay
        respecto al anterior.
USO EN transfers.md: Fila "Beneficiarios frecuentes" arriba del
        dropdown de destinatario en Paso 1 — combina el patrón de
        avatares superpuestos con la entrada escalonada.
TIMING: cada ítem entra con animation-delay = índice × 90ms,
        duración individual .4s ease (opacity 0→1 + translateY 6px→0
        + scale .92→1).
CUÁNDO USARLO: listas cortas (3-6 ítems) que aparecen al cargar la
        page o al abrir una sección — beneficiarios, actividad
        reciente, resultados de búsqueda. No usar en listas largas
        (>8 ítems): el delay total se vuelve perceptible y molesto.
```

### 12.4 motion-progress-steps

```text
QUÉ ES: Reemplazo del spinner genérico para estados de "procesando"
        que tienen sub-pasos reales (ej. verificar fondos → procesar
        con el banco → confirmar). Cada paso tiene un punto (● / ✓)
        y una barra de progreso lineal debajo.
USO EN transfers.md: Paso 3 — estado "Procesando tu transferencia".
COLORES: punto activo = color-primary con pulso; punto completado =
        color-success con check; barra de progreso = gradiente
        color-primary → color-primary-hover.
CUÁNDO USARLO: cualquier estado de carga que represente un proceso
        con etapas verificables (transferencias, compra de cripto,
        verificación de identidad). NO usar para cargas simples de
        datos (ahí alcanza con un spinner o skeleton).
```

### 12.5 motion-panel-transition

```text
QUÉ ES: Transición sutil (fade + translateY 10px) al cambiar de panel
        dentro de un flujo con pasos (steppers).
USO EN transfers.md: Transición entre Paso 1 / Paso 2 / Paso 3.
TIMING: .38s, cubic-bezier(.2,.8,.2,1).
CUÁNDO USARLO: en cualquier wireframe con stepper (ver sistemaswireframe.md).
```

### 12.6 Reservados para pages de marketing (sin especificar todavía)

```text
Estas SÍ están disponibles como referencia para pages de marketing
(homepage.md y futuras landing/promocionales), pero NO se usan en
pages transaccionales (transfers, comprar-dolares, crypto, cualquier
flujo con dinero real) porque restan seriedad y compiten con los
números. Esa parte ya está decidida.

Lo que NO está decidido todavía: timing, color, page exacta de uso.
Están en la lista porque le gustan al equipo y se van a querer usar
más adelante — quedan reservados, no descartados — pero hasta que no
se les asigne una page real y su propia sub-sección (mismo formato
que 12.2–12.5), no se consideran "listos para codear". Si se
implementan sin esa especificación, cada dev inventa su propio timing
y se pierde la consistencia que este documento existe para garantizar.

- Text Animate     → https://magicui.design/docs/components/text-animate
- Aurora Text      → https://magicui.design/docs/components/aurora-text
- Word Rotate      → https://magicui.design/docs/components/word-rotate
- Dia Text Reveal  → https://magicui.design/docs/components/dia-text-reveal
  (los 4 anteriores: efectos de texto vistosos, pensados para
  headlines de marketing — candidata natural: homepage.md hero)

- Animated Grid Pattern    → https://magicui.design/docs/components/animated-grid-pattern
- Interactive Grid Pattern → https://magicui.design/docs/components/interactive-grid-pattern
  (fondo decorativo con grilla; compite visualmente con formularios —
  NO usar detrás de ningún form ni card con números)

- Scroll Progress → https://magicui.design/docs/components/scroll-progress
  (solo tiene sentido en páginas largas con scroll real — candidatas
  a futuro: faq.md, security.md. transfers.md y compra-dolares.md no
  califican: el contenido no requiere scroll significativo)

Cuando una page de marketing concreta quiera usar alguno de estos,
agregar acá su propia sub-sección (12.6a, 12.6b, etc.) con timing,
color y criterio de uso — mismo formato que 12.2–12.5 — antes de
codearla, no durante.
```

### 12.6b motion-progress-queue (reservado, sin especificar)

```text
QUÉ ES: Variante en cola de motion-progress-steps — varias barras de
        progreso individuales + un total agregado, para cuando hay
        múltiples procesos corriendo a la vez (ej. varias
        transferencias procesándose en simultáneo, o compras en lote).
FUENTE: https://codefronts.com/components/css-progress-bars/download-queue-progress-with-per-file-bars-and-overall-total/
ESTADO: reservado — ninguna page actual (transfers.md, compra-dolares.md)
        necesita procesar varios ítems a la vez todavía. No tiene
        timing/color definido. Se activa el día que aparezca ese caso
        de uso real (candidato: alguna vista de "actividad" o
        "transacciones en curso" en resumen.md).
```

### 12.7 Nota de origen

```text
Componentes de referencia (solo como inspiración visual, no se
importó código ni dependencias de terceros):

- magicui.design (MIT) →
  shine-border      https://magicui.design/docs/components/shine-border
  avatar-circles    https://magicui.design/docs/components/avatar-circles
  animated-list     https://magicui.design/docs/components/animated-list
  (los 3 anteriores: base de motion-shine-border y motion-stagger-in,
  ya en uso — sección 12.2 y 12.3)

- codefronts.com (MIT) →
  fetch-upload-progress-bar-with-xhr-onprogress-event
    https://codefronts.com/components/css-progress-bars/fetch-upload-progress-bar-with-xhr-onprogress-event/
    → base de motion-progress-steps (sección 12.4), single progress,
      confirmado como la fuente correcta (no la variante en cola).
  download-queue-progress-with-per-file-bars-and-overall-total
    https://codefronts.com/components/css-progress-bars/download-queue-progress-with-per-file-bars-and-overall-total/
    → base de motion-progress-queue (sección 12.6b), reservado.

Verificados como fuentes legítimas y de uso libre antes de portear
el concepto. La implementación real en nuestro código es 100% CSS/JS
propio usando los color-tokens de la sección 2, sin librerías externas.
```

---

## 13. Pendientes

```text
- Confirmar hex exactos de la paleta dark con color picker sobre diseño final.
- Definir paleta completa del tema light.
- Confirmar familia tipográfica exacta.
- Definir ubicación exacta del switcher (¿ícono en navbar visible siempre,
  o dentro de un menú de cuenta/settings?) — ver pregunta en el chat.
- Confirmar si motion-shine-border / motion-stagger-in / motion-progress-steps
  (sección 12) se adoptan tal cual en el resto de las pages transaccionales
  (crypto.md, etc.) o si cada una amerita su propia variante.
- Actualizar transfers.md/transfers.html y homepage-preview.html de
  ARS/EUR a BOB/USD (ver exchange-rate-board.md, sección "Corrección
  de moneda") — pendiente de confirmar cuándo se hace este cambio.
- [RESUELTO] "dashboard.md" fue renombrado a "resumen.md" (ver
  resumen.md, DECISIONES #4). Referencia en §12.6b ya actualizada;
  revisar si queda algún otro archivo con "dashboard.md" suelto.
```
