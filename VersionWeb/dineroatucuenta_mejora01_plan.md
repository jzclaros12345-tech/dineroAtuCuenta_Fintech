# dineroAtucuenta — MEJORA-01_plan.md

## Por qué existe este documento

Uso este archivo para trackear la implementación de MEJORA-01 (i18n ES/EN sin
prefijo de URL). Sigo el mismo formato que uso para bugs, adaptado a "tareas"
porque esto es una feature nueva, no una corrección:

- **Qué se pidió** — resumen en mis palabras de lo que pide `implementation_plan.md`.
- **Estado actual / verificación** — lo que puedo confirmar mirando el código real
  del proyecto vs. lo que el plan asume. Si no tengo el archivo todavía, lo digo
  explícito en vez de asumir que el plan está 100% actualizado.
- **Fix / cambio propuesto** — qué se va a tocar y cómo, en texto, con snippet
  solo si aclara. Nada de esto se aplica todavía, es plan.
- **Archivos a modificar o revisar** — lista corta. Marco cuáles son solo
  para confirmar algo (sin tocar) vs. cuáles se editan.
- **Riesgo de romper algo** — dentro de cada tarea, no en sección aparte.

No tengo acceso al código fuente real todavía (`graph.json`/`manifest.json`
solo traen metadata — hashes y mtimes, no contenido). Todo lo marcado como
"⚠️ sin verificar" viene únicamente de lo que dice `implementation_plan.md`,
no de haber leído el archivo. Al final del documento pido la lista de
archivos que necesito para pasar cada tarea de "sin verificar" a "confirmado".

---

## Resumen

**Total: 7 tareas (fases), ~55 archivos tocados en total (~40 con texto visible + seed.ts + config).**

1. **Tarea 1** — Infraestructura next-intl (diccionarios + request.ts + next.config.ts + layout.tsx) — ⚠️ sin verificar
2. **Tarea 2** — Selector de idioma (language-toggle.tsx + wiring en sidebar/header) — ⚠️ sin verificar
3. **Tarea 3** — Migrar navegación y layout compartido (8 archivos) — ⚠️ sin verificar
4. **Tarea 4** — Migrar page-clients del dashboard (29 archivos, orden por volumen) — ⚠️ sin verificar
5. **Tarea 5** — Migrar auth pages (sign-in, sign-up) — ⚠️ sin verificar
6. **Tarea 6** — seed.ts: mapear enums/categorías a claves de diccionario, sin tocar seed.ts — ⚠️ sin verificar
7. **Tarea 7** — Strings de accesibilidad en shadcn UI (dialog, sheet, breadcrumb) — ⚠️ sin verificar, riesgo de tocar código de librería

---

## Tarea 1 — Infraestructura next-intl

**Qué se pidió:** instalar/configurar `next-intl` sin prefijo de URL, con
español como locale default leído desde cookie `NEXT_LOCALE`, y diccionarios
vacíos (`messages/es.json`, `messages/en.json`) con namespaces que reflejan
la estructura del proyecto (nav, sidebar, breadcrumb, etc.).

**Estado actual / verificación:**
- ⚠️ Sin verificar si `next-intl` ya está en `package.json` (dependencies o no).
  El manifest solo me da el hash de `package.json`, no el contenido.
- ⚠️ Sin verificar el `next.config.ts` actual — el plan asume que hoy es un
  `NextConfig` simple exportado directo, sin otros wrappers (ej. `next-pwa`,
  `withBundleAnalyzer`). Si ya tiene otro wrapper, `createNextIntlPlugin()`
  hay que componerlo, no reemplazarlo.
- ⚠️ Sin verificar `src/app/layout.tsx` actual — el plan asume que `RootLayout`
  no es ya `async`, y que no hay otro provider en el mismo nivel que choque
  con `NextIntlClientProvider`.

**Fix propuesto:** tal como está en `implementation_plan.md` — crear
`src/i18n/request.ts` leyendo cookie con default `'es'`, envolver
`next.config.ts` con `createNextIntlPlugin()`, y hacer `RootLayout` async
agregando `NextIntlClientProvider` + `getLocale()` para el atributo `lang`.

**Archivos a modificar o revisar:**
- `package.json` — **revisar** (confirmar si `next-intl` está instalado, qué versión de Next)
- `next.config.ts` — modificar
- `src/app/layout.tsx` — modificar
- `messages/es.json`, `messages/en.json` — nuevos
- `src/i18n/request.ts` — nuevo

**Riesgo de romper algo:** si `layout.tsx` pasa a `async` y algún componente
hijo asume renderizado síncrono o hace algo raro con Suspense/streaming, se
puede romper el first paint. También: si hay Server Components que ya leen
cookies en el mismo request, agregar otro `cookies()` call en `request.ts`
duplica trabajo pero no debería romper — a confirmar cuando vea el archivo.

---

## Tarea 2 — Selector de idioma

**Qué se pidió:** un dropdown compacto en el sidebar (como el toggle de tema)
que escribe la cookie `NEXT_LOCALE` y hace `router.refresh()`.

**Estado actual / verificación:**
- ⚠️ Sin verificar `theme-toggle.tsx` — el plan lo usa como referencia de
  patrón ("similar al toggle de tema"), necesito verlo para replicar el
  mismo approach (¿usa `next-themes`? ¿maneja estado local o cookie también?).
- ⚠️ Sin verificar `app-sidebar.tsx` y `(dashboard)/layout.tsx` — necesito
  confirmar dónde exactamente entra el `<LanguageToggle />` sin romper el
  layout del `SidebarFooter` (¿ya está apretado de espacio con `NavUser`?).

**Fix propuesto:** `src/components/language-toggle.tsx` nuevo, dropdown con
bandera + "ES"/"EN", set cookie + `router.refresh()`. Se inserta en
`SidebarFooter` (arriba de `<NavUser>`) y junto al `<ThemeToggle />` en el
header del dashboard layout.

**Archivos a modificar o revisar:**
- `src/components/theme-toggle.tsx` — **revisar** (patrón a replicar)
- `src/components/language-toggle.tsx` — nuevo
- `src/components/app-sidebar.tsx` — modificar
- `src/app/(dashboard)/layout.tsx` — modificar

**Riesgo de romper algo:** `router.refresh()` re-ejecuta Server Components
de la ruta actual — si alguna page-client tiene estado local que no está en
la URL ni en cookie, se puede perder al cambiar idioma (ej. filtros de
tabla, tab seleccionado). Vale la pena listar qué page-clients tienen estado
efímero antes de decidir si `router.refresh()` alcanza o si hace falta algo
más suave.

---

## Tarea 3 — Migrar navegación y layout compartido (8 archivos)

**Qué se pidió:** migrar los componentes que aparecen en todas las páginas
primero, para que el selector de idioma tenga efecto visible inmediato:
`app-sidebar.tsx`, `nav-main.tsx`, `nav-secondary.tsx`, `nav-user.tsx`,
`dynamic-breadcrumb.tsx`, `command-palette.tsx`, `theme-toggle.tsx`,
`not-found.tsx`, `empty-state.tsx`.

**Estado actual / verificación:**
- ⚠️ Sin verificar ninguno de los 9 archivos listados arriba (son 9, no 8 —
  el plan dice "8 archivos" en el título pero lista 9 componentes; a
  confirmar si `theme-toggle.tsx` cuenta aparte).
- El plan da números de línea específicos para `nav-secondary.tsx` (87, 99)
  — eso solo se puede confirmar leyendo el archivo actual, las líneas
  pueden haberse movido desde que se generó el plan.
- `command-palette.tsx` es nodo "hub" en el `GRAPH_REPORT.md` (aparece en
  Community 2 y 13, alta conectividad) — cambiarlo con cuidado, probablemente
  toca varios otros componentes que lo importan.

**Fix propuesto:** reemplazar strings hardcodeados por `t("namespace.key")`
usando `useTranslations()` de next-intl en cada componente, según el
mapeo de namespaces ya definido en `messages/es.json` / `en.json` (Tarea 1).
`nav-main.tsx` no necesita `useTranslations` propio (recibe `title` ya
traducido desde `app-sidebar.tsx`).

**Archivos a modificar o revisar:**
- `src/components/app-sidebar.tsx` — modificar
- `src/components/nav-main.tsx` — modificar
- `src/components/nav-secondary.tsx` — modificar (confirmar líneas 87/99 primero)
- `src/components/nav-user.tsx` — modificar
- `src/components/dynamic-breadcrumb.tsx` — modificar
- `src/components/command-palette.tsx` — modificar
- `src/components/theme-toggle.tsx` — modificar
- `src/app/not-found.tsx` — modificar
- `src/components/empty-state.tsx` — modificar (12 variantes × título+descripción)

**Riesgo de romper algo:** `command-palette.tsx` y `empty-state.tsx` son
reutilizados desde muchos otros componentes (según el grafo). Si cambian de
firma (ej. `empty-state.tsx` empieza a requerir `t` como prop en vez de
importar `useTranslations` internamente), hay que revisar todos los call
sites, no solo estos 9 archivos.

---

## Tarea 4 — Migrar page-clients del dashboard (29 archivos)

**Qué se pidió:** migrar en orden de volumen de strings, de
`support-page-client.tsx` (25+ strings) hasta los que tienen 1 string cada
uno (`transfer-list`, `watchlist`, `portfolio-allocation`, `quick-transfer`,
`my-balance`, `virtual-card-generator`, `savings-goals`).

**Estado actual / verificación:**
- ⚠️ Sin verificar ninguno de los 29 archivos. Los conteos de strings
  ("25+", "23+", "7", "5"...) vienen del plan, no de una lectura mía —
  pueden haber cambiado.
- `settings-page-client.tsx` y `support-page-client.tsx` son "God"/hub
  nodes en el `GRAPH_REPORT.md` (Community 1 y 16, alta cantidad de nodos
  conectados) — son los de mayor riesgo de esta tarea, conviene migrarlos
  primero pero con más cuidado, no solo por volumen de strings sino por
  cuántas cosas dependen de ellos.

**Fix propuesto:** mismo patrón que Tarea 3 (`useTranslations` + reemplazo
de strings), aplicado archivo por archivo en el orden que ya trae el plan.
Después de cada archivo, correr `pnpm build` para no arrastrar errores.

**Archivos a modificar:**
`support-page-client.tsx`, `settings-page-client.tsx`, `transaction-table.tsx`,
`transaction-filters.tsx`, `card-controls.tsx`, `recent-transactions.tsx`,
`account-cards.tsx`, `my-portfolio.tsx`, `performance-chart.tsx`,
`spending-limit.tsx`, `money-movement.tsx`, `market-overview.tsx`,
`coin-insight.tsx`, `spending-heatmap.tsx`, `add-account.tsx`,
`quick-send.tsx`, `notifications-page-client.tsx`, `holdings-table.tsx`,
`trade-form.tsx`, `transfer-list.tsx`, `watchlist.tsx`,
`portfolio-allocation.tsx`, `quick-transfer.tsx`, `my-balance.tsx`,
`virtual-card-generator.tsx`, `savings-goals.tsx` (+ 3 más sin nombrar
explícito en el plan — pedir el listado completo antes de arrancar esta
tarea).

**Riesgo de romper algo:** es la tarea más grande y la de mayor probabilidad
de dejar strings sueltos sin migrar (por eso el plan tiene el grep de
verificación al final). El riesgo real es de scope, no de romper build.

---

## Tarea 5 — Auth pages

**Qué se pidió:** migrar `sign-in/page.tsx` y `sign-up/page.tsx` sin tocar
"dineroAtucuenta" (marca).

**Estado actual / verificación:** ⚠️ sin verificar ninguno de los dos archivos.

**Fix propuesto:** mismo patrón, `useTranslations` en namespace `auth`.

**Archivos a modificar:**
- `src/app/(auth)/sign-in/page.tsx`
- `src/app/(auth)/sign-up/page.tsx`

**Riesgo de romper algo:** bajo — son hojas del árbol de componentes, no
tienen dependientes según el grafo (no aparecen como hub).

---

## Tarea 6 — seed.ts como fuente de claves de diccionario

**Qué se pidió:** no tocar `seed.ts`. Los componentes que renderizan
`item.category` / `item.status` directo pasan a usar
`t(\`categories.${item.category}\`)` / `t(\`status.${item.status}\`)`.
Prosa fija de `seed.ts` (FAQ, insights de IA, subjects de tickets, nombres
de status del sistema) se mueve a los diccionarios referenciada por `id`.

**Estado actual / verificación:**
- ⚠️ Sin verificar `seed.ts` — es Community 7 en el grafo (29 nodos:
  `AccountCard`, `AiInsight`, `BudgetCategory`, `CategoryBreakdown`,
  `CryptoCoin`, etc.), cohesión baja (0.06) lo que sugiere que son tipos/
  datos poco relacionados entre sí — buena señal de que separar por `id`
  no debería ser muy invasivo, pero hay que confirmar la forma real del
  archivo antes de decidir el mapeo `id → key`.
- Esta tarea depende de que la Tarea 4 ya haya identificado qué
  componentes leen `item.category`/`item.status` directo — no se puede
  hacer en paralelo, es secuencial después de la 4.

**Fix propuesto:** agregar namespaces `categories` y `status` (y `priority`)
en los diccionarios (ya contemplado en Tarea 1), y en cada componente que
hoy hace `{item.category}` cambiar a `{t(\`categories.${item.category}\`)}`.
Para prosa fija (FAQ, AI insights, tickets), mapear por `id` — necesito ver
`seed.ts` para saber si esos `id` ya existen como campo o hay que agregarlos.

**Archivos a modificar o revisar:**
- `src/lib/seed.ts` (o donde esté) — **revisar únicamente**, no se modifica
- Componentes de Tarea 4 que consumen `category`/`status`/`priority` — se
  re-tocan (mismos archivos, no son nuevos)

**Riesgo de romper algo:** si algún valor de `category`/`status` en los
datos no tiene traducción en el diccionario, `t()` va a tirar el key
literal o un warning según la config de next-intl (a confirmar en Tarea 1
qué `onError` se configura). Vale la pena agregar un fallback antes de
mergear esta tarea.

---

## Tarea 7 — Strings de accesibilidad en shadcn UI

**Qué se pidió:** revisar `dialog.tsx`, `sheet.tsx`, `breadcrumb.tsx` para
ver si los `aria-label="Close"` / `sr-only` son strings propios del
proyecto o vienen del framework/librería shadcn.

**Estado actual / verificación:** ⚠️ sin verificar los 3 archivos. Esto es
literalmente lo que la tarea pide confirmar, así que no hay fix propuesto
todavía — depende 100% de esa revisión.

**Fix propuesto:** condicional. Si son strings propios (copiados por
`shadcn add`), se migran igual que el resto. Si vienen de Radix/base-ui
internamente, no se tocan (evitar fork de librería de terceros).

**Archivos a modificar o revisar:**
- `src/components/ui/dialog.tsx` — **revisar**
- `src/components/ui/sheet.tsx` — **revisar**
- `src/components/ui/breadcrumb.tsx` — **revisar**

**Riesgo de romper algo:** si se edita un archivo de `components/ui/`
generado por shadcn, el próximo `shadcn add` o update puede pisar el
cambio. Si termina siendo necesario tocarlos, documentarlo en un comentario
en el archivo para que no se pierda en un update futuro.

---

## Mejoras que noté yo (no pedidas, viendo el grafo)

Estas salen de `GRAPH_REPORT.md`, no del reporte del usuario — separadas
de las tareas de arriba:

- **`cn()` es un god node con 235 edges.** No es un problema en sí (es el
  helper de clases de Tailwind, se espera que esté en todos lados), pero
  confirma que casi cualquier cambio en componentes va a tocar imports
  compartidos. No afecta directamente al i18n, pero es una señal de que
  el bundle de utils es central — vale la pena no tocarlo en este trabajo.
- **228 nodos aislados** en el grafo (`check_i18n.sh script`, `$schema`,
  `style`, `rsc`, `tsx`, +223 más). Hay un `check_i18n.sh` mencionado como
  nodo — no está en el plan de implementación. Si ya existe un script de
  chequeo de i18n en el repo, conviene revisarlo antes de escribir el grep
  de verificación que propone el plan (Tarea de verificación), puede que
  ya haga algo parecido o mejor.
- **`Import Cycles: None detected`** — buena noticia, no hay ciclos que
  compliquen el orden de migración entre Tarea 3 y Tarea 4.
- **El plan dice "8 archivos" en Tarea 3 pero lista 9** (contando
  `theme-toggle.tsx`). Menor, pero vale aclararlo antes de marcar la tarea
  como completa para no dar por hecho que falta uno.

---

## Performance / memoria — pendiente de medir

Todavía no corrí nada, esto es lo que voy a pedir antes de tocar código:

1. **Baseline de bundle size** antes de la Tarea 1:
   ```bash
   pnpm build 2>&1 | tee build_baseline.log
   ```
   guardar el "First Load JS" por ruta para comparar después de cada fase
   (el plan ya pide esto, lo estoy formalizando acá).
2. **Grep baseline de strings residuales** (el que ya trae el plan), correrlo
   ANTES de la Tarea 3 para tener el número de partida real, no asumido:
   ```bash
   grep -rE ">[A-Z][^<{]{5,}<" src/components src/app --include="*.tsx" -c | sort -t: -k2 -n -r > strings_baseline.txt
   ```
3. **Chequeo de memory leaks del `router.refresh()` en el toggle de idioma**
   (Tarea 2) — quiero correr el dashboard con React DevTools Profiler o
   `next build && next start` + Chrome performance recorder, cambiando
   idioma repetidas veces, antes de dar la tarea por cerrada. Te aviso el
   script exacto cuando lleguemos a esa tarea.

---

## Archivos que necesito para pasar de "⚠️ sin verificar" a "confirmado"

Para arrancar en serio con Tareas 1–3 (infraestructura + nav compartida,
que es lo que bloquea todo lo demás), necesito ver estos primero. Pegámelos
o subilos:

package.json next.config.ts src/app/layout.tsx src/app/(dashboard)/layout.tsx src/components/app-sidebar.tsx src/components/nav-main.tsx src/components/nav-secondary.tsx src/components/nav-user.tsx src/components/dynamic-breadcrumb.tsx src/components/command-palette.tsx src/components/theme-toggle.tsx src/app/not-found.tsx src/components/empty-state.tsx

Los de Tarea 4 (29 page-clients), Tarea 5 (auth), Tarea 6 (seed.ts) y
Tarea 7 (ui/dialog, ui/sheet, ui/breadcrumb) te los voy a ir pidiendo
cuando lleguemos a esa tarea, para no pedirte los 55 archivos de una.

---

## Tareas consolidadas + archivos a trabajar

```
tarea1 = Infraestructura next-intl
archivos_tarea1 = [package.json(revisar), next.config.ts, src/app/layout.tsx,
                   messages/es.json(nuevo), messages/en.json(nuevo),
                   src/i18n/request.ts(nuevo)]

tarea2 = Selector de idioma
archivos_tarea2 = [src/components/theme-toggle.tsx(revisar),
                   src/components/language-toggle.tsx(nuevo),
                   src/components/app-sidebar.tsx,
                   src/app/(dashboard)/layout.tsx]

tarea3 = Migrar navegación y layout compartido
archivos_tarea3 = [src/components/app-sidebar.tsx, src/components/nav-main.tsx,
                   src/components/nav-secondary.tsx, src/components/nav-user.tsx,
                   src/components/dynamic-breadcrumb.tsx,
                   src/components/command-palette.tsx,
                   src/components/theme-toggle.tsx,
                   src/app/not-found.tsx, src/components/empty-state.tsx]

tarea4 = Migrar page-clients del dashboard
archivos_tarea4 = [support-page-client.tsx, settings-page-client.tsx,
                   transaction-table.tsx, transaction-filters.tsx,
                   card-controls.tsx, recent-transactions.tsx,
                   account-cards.tsx, my-portfolio.tsx, performance-chart.tsx,
                   spending-limit.tsx, money-movement.tsx, market-overview.tsx,
                   coin-insight.tsx, spending-heatmap.tsx, add-account.tsx,
                   quick-send.tsx, notifications-page-client.tsx,
                   holdings-table.tsx, trade-form.tsx, transfer-list.tsx,
                   watchlist.tsx, portfolio-allocation.tsx, quick-transfer.tsx,
                   my-balance.tsx, virtual-card-generator.tsx,
                   savings-goals.tsx, +3 sin nombrar (pedir listado completo)]

tarea5 = Migrar auth pages
archivos_tarea5 = [src/app/(auth)/sign-in/page.tsx, src/app/(auth)/sign-up/page.tsx]

tarea6 = seed.ts como fuente de claves (categories/status/priority)
archivos_tarea6 = [src/lib/seed.ts(solo revisar, no se modifica),
                   componentes de tarea4 que leen item.category/status]

tarea7 = Strings de accesibilidad en shadcn UI
archivos_tarea7 = [src/components/ui/dialog.tsx(revisar),
                   src/components/ui/sheet.tsx(revisar),
                   src/components/ui/breadcrumb.tsx(revisar)]
```

**Orden de ejecución:** tarea1 → tarea2 → tarea3 → tarea4 → tarea6 (depende
de tarea4) → tarea5 → tarea7 (independiente, se puede hacer en paralelo con
cualquiera de las anteriores). Correr `pnpm build` después de cada tarea.
