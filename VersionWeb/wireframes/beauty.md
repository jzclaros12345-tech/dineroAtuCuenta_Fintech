# beauty.md — Audit de animación, motion tokens y fuentes
### dineroAtucuenta — v2, basado en las 12 páginas completas

---

## 0. Corrección sobre la v1 de este informe

La primera versión de este documento se escribió leyendo solo `homepage-preview.html`, que resultó ser la página **menos** animada de todo el proyecto (es la landing pública, no la app autenticada). Con las 12 páginas encima, el diagnóstico de "casi no hay animación" **era incorrecto** y hay que corregirlo: `enviar-dinero.html`, `comprar-dolares.html` y `cuentas-billeteras.html` tienen sistemas de motion bastante sofisticados — con manejo de `prefers-reduced-motion` tanto en CSS como en JS (`matchMedia`), algo que ni siquiera se ve en proyectos "profesionales" con frecuencia.

El problema real **no es falta de animación** — es que **cada página construyó su propio sistema por separado**, así que hay 8+ formas distintas de nombrar y de-facto implementar el mismo efecto. Eso es lo que este informe estandariza.

---

## 1. Hallazgo #1 — Fuente "Inter" nunca se carga (confirmado en las 12 páginas)

Las 12 páginas declaran `font-family:'Inter',...` en el CSS. **Ninguna** de las 12 tenía un `<link>` a Google Fonts, un `@font-face`, ni un `rel="preload" as="font"`.

**Fix aplicado en el `<head>` de las 12 páginas, antes del `<style>`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Estado: ✅ Aplicado en las 12/12 páginas.**

---

## 2. Hallazgo #2 — Dos sistemas de tokens de color coexistiendo

| Convención | Dónde se usa |
|---|---|
| `--bg`, `--surface`, `--primary`... (sin prefijo) | `homepage-preview.html`, `ajustes.html`, `apuestas-predicciones.html`, `autenticacion.html`, `ayuda-y-soporte.html`, `comprar-dolares.html`, `cuentas-billeteras.html`, `enviar-dinero.html`, `notifications.html` |
| `--color-background`, `--color-surface`... (prefijo `color-`) | `resumen.html`, `analiticas.html`, `refiere-y-gana.html` |

`refiere-y-gana.html` define `--color-background` como fuente de verdad y **alias** `--bg:var(--color-background);` para que el CSS heredado que espera `--bg` siga funcionando. Ese patrón sigue **pendiente de replicar** en el resto — ver sección 6.

---

## 3. Hallazgo #3 — Librería de motion fragmentada

El nombre canónico de cada efecto ya vive en `motion-tokens.css` (creado en el paso 3). Ver sección 6 para el estado real página por página, incluyendo los casos donde el nombre coincide pero la técnica no (colisiones señaladas con comentarios `OJO:` en el CSS, todavía sin resolver).

---

## 4. Hallazgo #4 — Cobertura desigual de `prefers-reduced-motion`

Con el link a `motion-tokens.css` en las 12 páginas, el catch-all `* { animation-duration:.001ms !important }` ya llega a todas — incluidas `notifications.html` y `homepage-preview.html`, que antes tenían 0% de cobertura. Las páginas con bloques específicos adicionales (`enviar-dinero.html`, `cuentas-billeteras.html`, `autenticacion.html`) los mantienen intactos.

---

## 5. Plan de estandarización

1. **`motion-tokens.css`** — ✅ creado, vive en `htmls/`.
2. **Nombres canónicos** para los efectos duplicados — parcialmente aplicado, ver checklist.
3. **Fix de fuente** — ✅ aplicado en las 12 páginas.
4. **Alias `--bg:var(--color-background)`** — ✅ replicado en las 9 páginas que antes duplicaban el valor.
5. **Cerrar la brecha de `notifications.html` y `homepage-preview.html`** en reduced-motion — ✅ resuelto por el link a `motion-tokens.css`.

---

## 6. Checklist de rollout — ESTADO ACTUAL

**Archivo compartido:** `motion-tokens.css` (vive en `htmls/`)

| Página | Fuente Inter | Link a motion-tokens.css | Duplicados limpiados |
|---|---|---|---|
| `cuentas-billeteras.html` | ✅ | ✅ | ✅ |
| `notifications.html` | ✅ | ✅ | ✅ (solo tenía 1) |
| `ajustes.html` | ✅ | ✅ | ✅ |
| `analiticas.html` | ✅ | ✅ | ✅ (+ renombró `menu-in`→`profile-menu-in`, `skeleton`→`skeleton-loading`) |
| `apuestas-predicciones.html` | ✅ | ✅ | ✅ |
| `autenticacion.html` | ✅ | ✅ | N/A (no tenía `@keyframes`, solo transitions) |
| `ayuda-y-soporte.html` | ✅ | ✅ | ✅ |
| `comprar-dolares.html` | ✅ | ✅ | ✅ (parcial — quedan `eb-dot-pulse` y otros efectos únicos de esta página sin tocar) |
| `resumen.html` | ✅ | ✅ | ✅ (`modal-in`→`panel-in`, `profile-menu-in` y `stagger-in` deduplicados; `shine-border` y `skeleton` quedaron intactos por usar otra técnica) |
| `refiere-y-gana.html` | ✅ | ✅ | ✅ (`modal-in`→`panel-in`, `profile-menu-in` deduplicado; `shine-rotate` quedó intacto — **colisión de nombre sin resolver**, ver nota) |
| `homepage-preview.html` | ✅ | ✅ | N/A (`drift1`/`drift2` son únicos de esta página) |
| `enviar-dinero.html` | ✅ | ✅ | ✅ (parcial — solo `profile-menu-in` deduplicado; el resto de sus efectos únicos y sus 3 bloques `reduced-motion` específicos + `matchMedia` en JS se dejaron intactos) |

**Estado: 12/12 páginas con fuente + motion-tokens.css enlazados.**

### Nota — colisión de nombre sin resolver en `refiere-y-gana.html` y `enviar-dinero.html`

Estas dos páginas ya usaban los nombres `shine-rotate` (refiere-y-gana) y `panel-in`/`pulse-dot` (enviar-dinero) **antes** de que existiera `motion-tokens.css`, pero con una implementación distinta a la canónica (técnica de `transform:rotate()` en vez de la custom property `--shine-angle`, valores de opacidad/escala distintos, etc.). Como el `<link>` a `motion-tokens.css` va antes del `<style>` propio de cada página, el `@keyframes` local —al declararse después en el CSS— sobrescribe al canónico dentro de esa página. Hoy **no rompe nada** (cada página se sigue viendo como antes), pero el nombre "canónico" todavía no es único en esos dos casos. Quedó marcado con un comentario `OJO:` en el CSS de `refiere-y-gana.html`; en `enviar-dinero.html` no se tocó nada de eso por ser la página más sofisticada del proyecto.

Pendiente aparte (aún no arrancado en ninguna página): unificar de verdad la *técnica* detrás de `shine-border`/`shine-rotate`/`shine-spin`/`border-beam-travel`, unificar `pulse-dot`/`eb-dot-pulse`, y agregar el alias `--bg:var(--color-background)` donde falta (9 páginas).

---

## Checklist original (referencia)

- [x] Insertar `<link>` de Google Fonts (o self-host) en las 12 páginas
- [x] Crear `motion-tokens.css` con el bloque `reduced-motion` catch-all + timings
- [x] Enlazar `motion-tokens.css` en las 12 páginas
- [x] Renombrar `modal-in` → `panel-in` en las páginas donde la implementación coincidía exactamente
- [ ] Unificar `skeleton` / `skeleton-loading` / `shimmer` → un solo nombre + una sola implementación (sigue pendiente en `resumen.html`)
- [ ] Unificar de verdad la técnica de `shine-border` / `shine-rotate` / `shine-spin` / `border-beam-travel` (colisión de nombre sin resolver en `refiere-y-gana.html`)
- [ ] Unificar `pulse-dot` / `eb-dot-pulse` (colisión de nombre sin resolver en `enviar-dinero.html`)
- [x] Replicar el alias `--bg:var(--color-background)` en las 9 páginas que usan solo `--bg`
- [x] Agregar cobertura `reduced-motion` a `notifications.html`
- [x] Agregar cobertura `reduced-motion` a `homepage-preview.html`
- [x] Documentar en `design-tokens.md` cuáles son los nombres canónicos de animación

---

## 7. Próximo paso sugerido

Con las 12 páginas ya enlazadas a `motion-tokens.css`, lo que queda es la parte que sí cambia comportamiento visual: resolver las dos colisiones de nombre (`shine-rotate` en refiere-y-gana, `panel-in`/`pulse-dot` en enviar-dinero) y el alias `--bg`. Es un trabajo más quirúrgico porque implica decidir *qué técnica* gana, no solo renombrar. Recomiendo hacerlo recién después de la auditoría visual (paso 1 del objetivo real), para no tocar dos veces el mismo CSS.

---

## 8. Plan de cierre — funcionalidad transversal y control visual

Este bloque completa el plan con los hallazgos funcionales y de compatibilidad detectados al revisar las 12 pantallas principales. Debe ejecutarse **antes** de considerar terminado el rollout de diseño, porque afecta a la navegación y a la experiencia móvil.

### 8.1 Cierre de sesión y acceso protegido — prioridad alta

**Hallazgo.** El menú de usuario abre correctamente la confirmación de cierre de sesión, pero seis páginas todavía dejan la acción confirmada como `Placeholder`: `apuestas-predicciones.html`, `ayuda-y-soporte.html`, `comprar-dolares.html`, `enviar-dinero.html`, `notifications.html` y `refiere-y-gana.html`. En consecuencia, hoy no hay redirección ni estado de autenticación que impida volver a una pantalla privada.

- [ ] Definir un único estado de sesión para este prototipo (por ejemplo, `sessionStorage` con una clave `dineroAtucuenta.authenticated`). La autenticación lo crea solo tras un ingreso exitoso; cerrar sesión lo elimina.
- [ ] Crear una utilidad compartida para las pantallas privadas que: (a) redirija a `autenticacion.html?view=login` si no existe sesión y (b) centralice el cierre para no repetir lógica en cada HTML.
- [ ] Conectar el botón **Cerrar sesión** del menú de usuario y el de Ajustes a esa utilidad en las 12 pantallas autenticadas. Tras confirmar: limpiar el estado, cerrar el modal y ejecutar `location.replace('homepage-preview.html')`.
- [ ] Mantener `homepage-preview.html` como destino público. Si el nombre final exigido por producto será `homepage.html`, crear/renombrar ese archivo y usar una sola constante de ruta antes de enlazarlo; actualmente no existe `homepage.html` en el proyecto.
- [ ] Verificar manualmente el flujo: iniciar sesión → abrir una página privada → cerrar sesión desde el perfil y desde Ajustes → aterrizar en homepage → intentar volver con Atrás o pegando una URL privada → ser llevado al login.

**Criterio de aceptación:** no queda ningún comentario `Placeholder: ejecutar logout`; no se puede acceder a contenido privado sin autenticación, incluso con navegación Atrás.

### 8.2 Auditoría y corrección mobile — prioridad alta

**Estado actual:** todas las páginas tienen `meta viewport` y reglas responsive; las páginas principales usan breakpoints alrededor de 900 px y 560–620 px para convertir la barra lateral en menú y apilar grids. Esto es una buena base, pero **no basta para declarar que mobile está OK**: no se realizó una prueba renderizada e interactiva de las 12 vistas.

- [ ] Probar cada página autenticada y la landing en Chrome a 320, 360, 390, 412, 768 y 1024 px, con orientación vertical; repetir al menos 390 px en orientación horizontal.
- [ ] Comprobar que no existe scroll horizontal, texto truncado relevante, controles fuera del viewport ni contenido oculto por la barra superior o el teclado virtual.
- [ ] Validar apertura/cierre del menú lateral, backdrop, perfil, modales, selectores de idioma/tema, focus visible y Escape en los tamaños móviles.
- [ ] Revisar específicamente las vistas densas (`resumen`, `analiticas`, `cuentas-billeteras`, `enviar-dinero`, `comprar-dolares`, `apuestas-predicciones`) y charts/tablas: deben apilarse o permitir scroll interno intencional sin cortar valores.
- [ ] Corregir los fallos encontrados y repetir la matriz de prueba en tema claro y oscuro.

**Criterio de aceptación:** las 12 páginas pasan la matriz sin overflow horizontal ni acciones inaccesibles, y los flujos de menú, modal y logout funcionan con toque y teclado.

### 8.3 Favicon y metadatos de icono — prioridad media

**Hallazgo.** Las 12 páginas principales sí referencian al menos `favicon.svg`; no obstante, `analiticas.html` y `resumen.html` solo declaran esa variante. Las demás incluyen también `favicon-32.png` y `apple-touch-icon.png`. La cobertura no es homogénea y falta una comprobación de que los archivos resuelvan desde cada ruta.

- [ ] Elegir el bloque canónico de iconos: SVG (`type="image/svg+xml"`), PNG 32×32 y Apple Touch Icon; añadir `theme-color` si se define como parte del sistema visual.
- [ ] Insertar el bloque canónico en el `<head>` de las 12 páginas principales, incluidas `analiticas.html` y `resumen.html`, respetando las rutas relativas `favicon.svg`, `favicon-32.png` y `apple-touch-icon.png`.
- [ ] Decidir si `htmls/files/cuentas-billeteras.html` es una copia publicada o un artefacto. Si está en uso, sincronizar sus iconos; si no, excluirlo explícitamente de la matriz y evitar que se convierta en una segunda fuente de verdad.
- [ ] Verificar en Chrome que no hay 404 de iconos y en iOS/Android que el icono de acceso directo usa la variante esperada.

**Criterio de aceptación:** cada página publicada tiene el mismo bloque de iconos y ningún recurso de icono falla al cargar.

### 8.4 Orden de ejecución y definición de terminado

1. Implementar primero la guardia de autenticación y el cierre de sesión: bloquea acceso no autorizado y define las rutas públicas/privadas.
2. Normalizar el bloque de favicon, que es una modificación mecánica y de bajo riesgo.
3. Ejecutar la auditoría mobile y corregir sus resultados; hacerla después del logout permite probar el flujo real completo.
4. Retomar los pendientes visuales de las secciones 5–7 (tokens de motion, alias `--bg` y documentación) cuando la auditoría visual móvil haya fijado el comportamiento deseado.

El plan queda terminado cuando los criterios de aceptación de 8.1, 8.2 y 8.3 estén verificados, además de los pendientes de tokens que se decida incluir en el cierre de diseño.

---

## 9. Registro de aplicación — 2026-09-03

- [x] Se creó `app-session.js`: guarda la sesión de demostración en `sessionStorage`, bloquea las diez vistas privadas sin sesión y centraliza el cierre de sesión.
- [x] La autenticación simulada marca la sesión al continuar desde el estado exitoso. Al confirmar el logout se limpia el estado y se redirige a `homepage-preview.html`, que es la landing pública actualmente disponible.
- [x] Se sustituyeron los handlers placeholder de logout de las pantallas principales y los confirmadores de Ajustes, Resumen y Analíticas.
- [x] Se normalizó el bloque de iconos en las doce páginas principales: SVG, PNG 32×32, Apple Touch Icon y `theme-color`, con rutas relativas que funcionan desde `htmls/`.
- [x] `htmls/files/cuentas-billeteras.html` se mantiene como copia de compatibilidad fuera de la matriz de doce pantallas; sus iconos y su logout fueron corregidos para que no queden placeholders.
- [x] Se agregó el alias `--color-background` → `--bg` en las nueve vistas que aún duplicaban el valor de fondo.
- [x] Se documentaron los nombres canónicos de motion en `design-tokens.md`.
- [x] Se incorporó una protección compartida contra overflow horizontal en viewport móvil. La landing fue inspeccionada a 390 px; la matriz interactiva completa de las doce vistas sigue pendiente antes de certificar mobile como aprobado.

Pendiente de decisión visual: consolidar las técnicas no equivalentes de `shine-border`/`shine-rotate` y de los skeletons de Resumen. No se modificaron de forma automática para no cambiar su apariencia sin una comparación visual de referencia.
