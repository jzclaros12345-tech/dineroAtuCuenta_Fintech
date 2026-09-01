# COMPONENTE — SIDEBAR (APP AUTENTICADA)

## OBJETIVO
Navegación principal de la **app autenticada** (todo lo que vive detrás de login: dashboard, cuentas, transferencias, cripto, etc.). Se documenta aquí una sola vez; cada wireframe de la app la referencia en su sección de navegación en vez de redetallarla — mismo criterio que `theme-language-switcher.md`.

Basado en referencia visual aprobada por el usuario (screenshot de dashboard).

## APARECE EN
Todas las **Pages de la app autenticada** (dashboard, accounts, transfers, crypto, settings, etc.) — es decir, todas las Pages excepto las públicas/pre-autenticación.

**NO aparece en:**
```text
- Homepage (homepage.md)   → usa navbar horizontal público
- Login (login.md)         → usa navbar horizontal público
```

Confirmado con el usuario: el sidebar es exclusivo del contexto autenticado. Homepage y Login comparten el mismo navbar horizontal ya definido en `homepage.md` (nav-links + Theme & Language Switcher), ya que en ambas Pages el usuario todavía no tiene sesión activa (ni perfil, ni avatar, ni acceso a rutas internas). Son dos sistemas de navegación distintos para dos contextos distintos (público/pre-auth vs. app autenticada).

---

## ESTRUCTURA
```text
┌───────────────────────────┐
│ LOGO + tagline             │  ← dineroAtucuenta / "Al instante, sin vueltas."
├───────────────────────────┤
│ GRUPO: Diario              │
│  - Resumen                 │  → /dashboard
│  - Cuentas                 │  → /accounts
│  - Transacciones           │  → /transactions
├───────────────────────────┤
│ GRUPO: Dinero              │
│  - Transferencias          │  → /transfers              (ya definido: transfers.md)
│  - Compra USDT             │  → /compra-usdt            (ya definido: compra-dolares.md, renombrar)
│  - Apuestas y Predicciones │  → /apuestas-predicciones  (ya definido: apuestas-predicciones.md)
│  - Refiere y Gana          │  → /refiere-y-gana         (ya definido: refiere-y-gana.md)
├───────────────────────────┤
│ GRUPO: Análisis            │
│  - Analíticas   [Próx.]    │  → placeholder, deshabilitado
├───────────────────────────┤
│ (resto del espacio)        │
├───────────────────────────┤
│ FOOTER SIDEBAR              │
│  - Notificaciones           │  → abre panel/dropdown, no navega
│  - Ajustes                  │  → /settings (pendiente: settings.md)
│  - Ayuda y Soporte          │  → /help (pendiente: faq.md)
│  - Perfil de usuario         │  → abre menú de cuenta (avatar+nombre+email)
└───────────────────────────┘
```

**Toolbar superior** (fuera del sidebar, pero siempre junto a él — NO se documenta como parte de este componente, ver `components/toolbar.md` a futuro):
```text
- Botón colapsar/expandir sidebar
- Título de la Page actual (ej. "Tablero")
- ⌘K → command palette / búsqueda (a definir alcance)
- Theme & Language Switcher (ver theme-language-switcher.md)
```

---

## DECISIONES CONFIRMADAS CON EL USUARIO
```text
1. El ítem sin wireframe propio aún (Analíticas) SÍ se incluye ya
   en el sidebar, como sección futura/placeholder — visible pero
   no funcional todavía (ver ESTADOS: "ítem deshabilitado").
1b. [ACTUALIZADO] Se elimina el ítem "Presupuestos" del grupo
    Análisis. Confirmado con el usuario: se retira del alcance
    visible del sidebar por ahora. El grupo "Análisis" sigue
    existiendo (con Analíticas como único ítem) porque Analíticas
    no fue parte de este cambio.
2. [ACTUALIZADO] "Predicciones" (Pillar 02) SÍ vive ahora en este
   sidebar, bajo el nombre "Apuestas y Predicciones" (grupo Dinero,
   ver apuestas-predicciones.md). Es la versión real/funcional de lo
   que antes era solo un concepto de marketing accesible desde el
   navbar público (homepage.md) — se confirmó con el usuario que es
   la misma cosa, no dos features separadas. El navbar público
   (Pillar 02) debería enlazar a esta ruta para usuarios ya
   autenticados; para usuarios no autenticados puede seguir
   apuntando a la sección de marketing en homepage.md hasta que se
   defina ese detalle.
2b. [ACTUALIZADO] El ítem "Cripto" (→ /crypto, pendiente) se
    reemplaza por "Refiere y Gana" (→ /refiere-y-gana, ver
    refiere-y-gana.md), el programa de puntos y referidos de la
    plataforma. Mismo lugar en el grupo Dinero.
2c. [ACTUALIZADO] Confirmado con el usuario: "Comprar USD" y
    "Compra USDT" son el mismo producto/flujo (compra de dólares,
    ya sea fiat o en stablecoin). Se fusionan en un solo ítem del
    sidebar: "Compra USDT" (→ /compra-usdt). El wireframe
    compra-dolares.md sigue siendo la base de contenido — pendiente
    de renombrarlo/actualizarlo para reflejar la fusión (no es un
    cambio de este documento, sino del wireframe de esa page).
2d. [ACTUALIZADO] Se elimina el ítem "Tarjetas" (→ /cards) del
    grupo Diario. Confirmado con el usuario: no forma parte del
    alcance actual del producto. Si en el futuro se retoma la
    feature de tarjetas, deberá re-agregarse aquí como nuevo ítem
    (con su propio wireframe) en vez de asumir que ya estaba
    contemplada.
2e. [ACTUALIZADO] Se elimina el placeholder "Inversiones" del
    grupo Dinero. Confirmado con el usuario: se retira del alcance
    visible del sidebar por ahora. El grupo "Análisis" sigue
    conservando su placeholder (Analíticas) porque no fue parte
    de este cambio.
3. El Theme & Language Switcher vive en la toolbar/navbar de CADA
   page (público y app), tal como ya está definido en
   theme-language-switcher.md. NO se duplica en el footer del
   sidebar — se elimina el selector de idioma que aparecía ahí en
   la referencia visual, para evitar dos controles haciendo lo mismo.
4. El sidebar NO es un overlay: es parte fija del layout (app shell).
   Se monta una sola vez y permanece visible mientras el usuario
   navega entre Pages autenticadas; solo el área de contenido
   principal cambia según el route. Nunca cubre el contenido ni se
   cierra/abre como un modal — su único estado "ocultable" es
   colapsado (solo íconos) vs. expandido, ver ESTADOS.
5. Login (login.md) NO lleva sidebar. Junto con Homepage, usa el
   navbar horizontal público. El grupo "Auth" (Iniciar Sesión /
   Registrarse) que aparecía en la referencia visual queda
   definitivamente excluido de este componente: no tiene sentido
   en un sidebar que solo existe cuando ya hay sesión activa.
6. [NUEVO] De los 5 ítems del footer/grupo Análisis sin wireframe
   propio (ver plan.md), se confirmó que:
   - Analíticas sigue sin construirse (placeholder, sin cambios).
   - Notificaciones y Perfil de usuario son COMPONENTES (no Pages):
     abren panel/menú, no navegan a una ruta propia. Se documentarán
     en `components/notifications-panel.md` y
     `components/profile-menu.md` respectivamente.
   - Ajustes y Ayuda y Soporte SÍ son Pages reales, a construir como
     `settings.md` y `faq.md`.
7b. [ACTUALIZADO] Se resuelve el pendiente de comportamiento mobile
    (ver RESPONSIVE): estándar único = hamburguesa + drawer deslizante
    + backdrop, tomado como base de `enviar-dinero.html`, aplicado a
    las 5 pages (incluye volver a `refiere-y-gana.html`, que solo
    tenía implementado el rail colapsado y le faltaba este patrón).
    Se descarta bottom navigation. Se descarta también "rail
    colapsado" como estado mobile (queda exclusivo de desktop) por
    depender de tooltips :hover, que no existen en touch. Breakpoint
    único en 900px reemplaza el esquema previo de 3 niveles
    (desktop/tablet/mobile).
7. [NUEVO] Contenido del menú de perfil (Perfil de usuario, footer)
   ya cerrado: dos opciones únicamente — "Ver perfil" (navega a la
   sección Perfil dentro de `settings.md`) y "Cerrar sesión" (modal
   de confirmación, patrón `.modal-overlay`). Se evaluó agregar un
   acceso directo a "Ajustes" dentro de este menú y se descartó: ya
   existe un trigger para `/settings` en el footer del sidebar: dos
   controles apuntando a la misma ruta sería la misma redundancia
   que se evitó con el Theme & Language Switcher (ver decisión #3).
```

---

## ELEMENTOS DE UI

### Logo + tagline
Idéntico al usado en homepage/navbar (`.logo`, ver homepage-preview.html): ícono cuadrado con "d" sobre `color-primary` + nombre. Tagline en `color-text-muted`, tamaño `text-small` o menor.

### Navigation item (grupo)
```text
- Ícono (estilo lineal, ver design-tokens.md sección 6) + label
- Estado activo: fondo color-surface-alt, texto color-text-primary,
  ícono color-primary
- Estado inactivo: texto color-text-secondary
- Estado hover: texto color-text-primary
- Estado deshabilitado (placeholder): texto color-text-muted,
  badge "Próximamente" en color-text-muted + color-surface-alt,
  cursor not-allowed, no navega
```

### Encabezado de grupo
Label pequeño en mayúsculas (mismo tratamiento que `.eyebrow`/label de design-tokens: uppercase, letter-spacing amplio, `color-text-muted`, sin fondo). Ej: "DIARIO", "DINERO", "ANÁLISIS".

### Perfil de usuario (footer)
```text
- Avatar (imagen o iniciales) + nombre + email, en color-text-secondary
- Chevron indicando que abre un menú (dropdown hacia arriba,
  dado que está al final del sidebar)
- Menú con 2 opciones: "Ver perfil" y "Cerrar sesión"
  (ver DECISIONES CONFIRMADAS #7 y components/profile-menu.md)
```

### Botón colapsar sidebar
Ícono en la toolbar superior (fuera del sidebar). Ver ESTADOS.

---

## DATA REQUERIDA
```text
- nombre y avatar del usuario autenticado
- email del usuario autenticado
- ítem de navegación activo (según route actual)
- conteo de notificaciones no leídas (para badge, si aplica)
- lista de cuentas (para posibles badges de estado, a futuro)
```

---

## INTERACCIONES
```text
ELEMENT: [ Resumen ]
TYPE: Navigation item
CLICK: Navega a /dashboard
TARGET WIREFRAME: resumen.md (ya definido)

ELEMENT: [ Cuentas ]
TYPE: Navigation item
CLICK: Navega a /accounts
TARGET WIREFRAME: accounts.md (pendiente)

ELEMENT: [ Transacciones ]
TYPE: Navigation item
CLICK: Navega a /transactions
TARGET WIREFRAME: pendiente de crear

ELEMENT: [ Transferencias ]
TYPE: Navigation item
CLICK: Navega a /transfers
TARGET WIREFRAME: transfers.md (ya definido)

ELEMENT: [ Compra USDT ]
TYPE: Navigation item
CLICK: Navega a /compra-usdt
TARGET WIREFRAME: compra-dolares.md (ya definido — pendiente de
       renombrar archivo/contenido a compra-usdt.md para reflejar
       la fusión USD/USDT confirmada por el usuario)

ELEMENT: [ Apuestas y Predicciones ]
TYPE: Navigation item
CLICK: Navega a /apuestas-predicciones
TARGET WIREFRAME: apuestas-predicciones.md (ya definido)

ELEMENT: [ Refiere y Gana ]
TYPE: Navigation item
CLICK: Navega a /refiere-y-gana
TARGET WIREFRAME: refiere-y-gana.md (ya definido)

ELEMENT: [ Analíticas ] (placeholder)
TYPE: Navigation item, deshabilitado
CLICK: No navega. Puede mostrar tooltip "Próximamente".

ELEMENT: [ Notificaciones ] (footer)
TYPE: Button
CLICK: Abre panel/dropdown de notificaciones. No navega.
TARGET WIREFRAME: components/notifications-panel.md (pendiente —
       siguiente wireframe a construir; incluye tipos de
       notificación: precios de compra, apuestas y predicciones,
       y alertas preconfigurables por el usuario)

ELEMENT: [ Ajustes ] (footer)
TYPE: Navigation item
CLICK: Navega a /settings
TARGET WIREFRAME: settings.md (pendiente)

ELEMENT: [ Ayuda y Soporte ] (footer)
TYPE: Navigation item
CLICK: Navega a /help
TARGET WIREFRAME: faq.md (pendiente)

ELEMENT: Perfil de usuario (footer)
TYPE: Button
CLICK: Abre menú de cuenta con 2 opciones: "Ver perfil" (navega a
       la sección Perfil dentro de settings.md) y "Cerrar sesión"
       (modal de confirmación). No incluye acceso directo a
       "Ajustes" — ver DECISIONES CONFIRMADAS #7.
TARGET WIREFRAME: components/profile-menu.md (pendiente — depende
       de settings.md para el destino de "Ver perfil")

ELEMENT: Botón colapsar/expandir (toolbar)
TYPE: Button
CLICK: Alterna el sidebar entre expandido (labels visibles) y
       colapsado (solo íconos). No navega, no recarga.
PERSISTENCIA: Guardar preferencia igual que tema/idioma.

KEYBOARD:
Todos los navigation items son accesibles con Tab + Enter/Space,
foco visible (ver theme-language-switcher.md, mismo criterio).
```

---

## NAVEGACIÓN
```text
El sidebar es el punto de entrada principal a todas las Pages
internas de la app. No reemplaza al navbar público — son
sistemas de navegación separados para contextos separados:

Usuario NO autenticado → Homepage → navbar horizontal (homepage.md)
Usuario autenticado    → cualquier Page interna → Sidebar (este archivo)
```

---

## RESPONSIVE

**[ACTUALIZADO — DECISIÓN CERRADA]** Estandarizado tras comparar la
implementación de `refiere-y-gana.html` (rail colapsado a íconos, fijo)
contra la de `enviar-dinero.html` (drawer con hamburguesa + backdrop).
Se adopta el patrón de `enviar-dinero.html` como estándar único para
las 5 pages. Razones (ver también DECISIONES CONFIRMADAS #8):

```text
DESKTOP (>900px):
Sidebar fija a la izquierda, expandida por defecto, colapsable
mediante el botón de la toolbar (rail a solo-íconos, 72px,
ver sistemaswireframe.md sección 9). Este es el ÚNICO lugar donde
existe el estado "colapsado a íconos" — es una preferencia manual
de escritorio (persistida, ver INTERACCIONES), no un breakpoint.

MOBILE / TABLET (≤900px) — breakpoint único:
Sidebar oculto por defecto (fuera de viewport, `transform:
translateX(-100%)`). Se reemplaza en la toolbar por un botón
hamburguesa (☰) que, al hacer click, despliega el sidebar completo
como drawer deslizante desde la izquierda, con:
  - Backdrop oscuro semitransparente cubriendo el contenido
    (click en el backdrop cierra el drawer).
  - El sidebar se muestra siempre EXPANDIDO dentro del drawer
    (labels + íconos) — nunca colapsado a solo-íconos en mobile,
    porque los tooltips por :hover no existen en touch (ver razón 2
    abajo).
  - El botón de colapsar/expandir de la toolbar se oculta en este
    breakpoint (no aplica; su lugar lo toma el hamburguesa).

No se usa bottom navigation. Un solo breakpoint (900px) reemplaza
el esquema anterior de 3 niveles (desktop/tablet/mobile) — menos
estados que mantener y probar en las 5 pages.
```

**Por qué hamburguesa + drawer y no rail colapsado en mobile:**
```text
1. Espacio: en mobile real (<768px), un rail fijo de 72px es ~20%
   del ancho de viewport ocupado permanentemente sin aportar labels.
2. Los tooltips on-hover del rail colapsado no funcionan en touch:
   un usuario nuevo vería solo íconos sin forma de identificarlos.
3. Es el patrón estándar en apps con sidebar (Gmail, Notion, Linear
   en mobile usan drawer + overlay) — no es una solución inventada.
4. Optimiza recursos de implementación: un solo componente
   (drawer + backdrop) se reutiliza igual en las 5 pages, en vez de
   mantener dos patrones mobile distintos (bottom nav vs. drawer)
   más el rail colapsado de tablet.
```

**Implementación de referencia (clases CSS, tomado de
`enviar-dinero.html` — usar como base al estandarizar las 5 pages):**
```text
.sidebar-backdrop          → overlay oscuro, oculto por defecto
.sidebar-backdrop.visible  → visible (display:block) al abrir el drawer
.sidebar                   → position:fixed (≤900px), transform:
                              translateX(-100%) por defecto
.sidebar.mobile-open       → transform:translateX(0), box-shadow
                              para separarlo visualmente del backdrop
.hamburger                 → botón en la toolbar, display:none en
                              desktop, display:flex en ≤900px
.hide-on-collapse          → clase existente del rail colapsado de
                              desktop; NO se usa en el drawer mobile
                              (el drawer siempre va expandido)

JS: click en .hamburger → agrega .mobile-open al sidebar y .visible
    al backdrop. Click en .sidebar-backdrop → remueve ambas clases.
    Mismo listener en las 5 pages (candidato a extraer a un snippet
    JS compartido, no solo el CSS).
```

---

## ESTADOS
```text
- Sidebar expandida (labels + íconos visibles)
- Sidebar colapsada (solo íconos, con tooltip al hover mostrando el label)
- Ítem activo (según route actual)
- Ítem inactivo
- Ítem deshabilitado / placeholder ("Próximamente")
- Menú de perfil de usuario abierto
- Panel de notificaciones abierto
- Estado de carga (ej. mientras se obtiene el conteo de notificaciones)
```

---

## NOTAS DE DISEÑO
```text
- Todo color/tipografía/espaciado debe nombrarse como token
  (color-primary, color-surface-alt, color-text-muted, etc.),
  nunca como valor suelto — ver design-tokens.md.
- El ítem placeholder (Analíticas) debe verse claramente distinto
  a los ítems funcionales (opacidad reducida o color-text-muted +
  badge), para que el usuario entienda que existe pero no está
  disponible todavía. No debe parecer roto ni dar error al hacer
  click.
- Nomenclatura de variables CSS: el estándar es el prefijo largo
  (`--color-primary`, `--color-surface`, `--color-text-secondary`,
  etc., ver design-tokens.md). Algunos HTML más antiguos (ej.
  `enviar-dinero.html`) usan nombres cortos sin prefijo (`--primary`,
  `--surface`, `--text-secondary`) para los mismos colores — es
  puramente nomenclatura, no hay diferencia visual. Al estandarizar,
  se migra a la nomenclatura larga.
- El selector de idioma NO se duplica en el footer del sidebar
  (ver DECISIONES CONFIRMADAS). Tema e idioma viven únicamente
  en la toolbar/navbar de cada page.
- Comportamiento mobile (hamburguesa + drawer + backdrop) ya
  decidido y cerrado — ver DECISIONES CONFIRMADAS #7b y sección
  RESPONSIVE. Ya no es un pendiente.
- Pendiente de decidir con el usuario:
  1. Alcance de ⌘K (command palette): ¿busca solo navegación
     interna, o también transacciones/beneficiarios/etc.?
  2. Extraer el JS del drawer (hamburguesa/backdrop) a un snippet
     compartido entre las 5 pages en vez de duplicarlo por HTML,
     para evitar que diverjan con el tiempo.
```
