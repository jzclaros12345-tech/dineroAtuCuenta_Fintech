# Plan de integración — wireframes dineroAtucuenta

> Estado: Fases 1 y 2 implementadas el 2026-09-01. Alcance: los 10 HTML autocontenidos de `htmls/`.
> Objetivo: que el prototipo funcione de forma coherente como archivos estáticos y
> quede preparado para una posterior migración a una aplicación con rutas.

---

## 1. Alcance y criterio de éxito

Hay dos contextos que no se deben mezclar:

| Contexto | Archivos | Navegación |
|---|---|---|
| Público / preautenticación | `homepage-preview.html`, `autenticacion.html` | Barra superior horizontal |
| Aplicación autenticada | Los otros 8 archivos | Sidebar, toolbar y menú de perfil |

El merge se considera terminado cuando:

- ningún enlace interno necesario apunta a una ruta de servidor inexistente;
- cada control del sidebar tiene destino, estado deshabilitado o decisión documentada;
- login, registro y recuperación no comparten una redirección incorrecta;
- tema e idioma sobreviven a un cambio de página;
- la navegación funciona con mouse y teclado;
- los HTML funcionan sin framework, `fetch()` ni servidor obligatorio.

No incluye autenticación real, OAuth, cotizaciones ni crear las páginas de producto aún
inexistentes.

---

## 2. Decisiones que deben cerrar el merge

### D1. El formato actual es estático

Mientras se distribuyan como HTML, los enlaces internos deben ser relativos
(`ajustes.html#perfil`), nunca rutas raíz (`/settings`) ni rutas de una SPA. Los
parámetros de un futuro router no tienen equivalente funcional en archivos estáticos:
se reemplazan por el destino disponible más cercano o quedan explícitamente pendientes.

Al migrar a un framework, las equivalencias se centralizan en el router; no se vuelven a
introducir rutas absolutas en cada componente.

### D2. Destinos canónicos del prototipo

| Ítem | Destino estático actual | Estado |
|---|---|---|
| Resumen | — | Falta `dashboard.html`; mantener no navegable |
| Cuentas y billeteras | `cuentas-billeteras.html` | Disponible |
| Transacciones | `enviar-dinero.html` | Disponible; reemplaza a la página independiente descartada |
| Transferencias | `enviar-dinero.html` | Disponible |
| Compra USDT | `comprar-dolares.html` | Disponible; nombre de archivo pendiente |
| Apuestas y Predicciones | `apuestas-predicciones.html` | Disponible |
| Refiere y Gana | `refiere-y-gana.html` | Disponible |
| Analíticas | — | Placeholder deshabilitado |
| Notificaciones | `notifications.html` o panel | Requiere D3 |
| Ajustes | `ajustes.html` | Disponible |
| Ayuda y soporte | `ayuda-y-soporte.html` | Disponible |

Un ítem sin página no recibe `data-href`: debe ser `aria-disabled="true"` y no
activarse, o mostrar “Próximamente”. No debe fingir navegación.

### D3. Notificaciones: página o panel

`sidebar.md` define Notificaciones como panel/desplegable, pero existe
`notifications.html`. Se adoptó una sola conducta para este prototipo:

- **Implementada:** navegar a `notifications.html`, porque ya existe y permite probar
  el contenido completo.
- Una futura versión puede volver al panel, pero deberá retirar esta ruta del flujo
  principal en el mismo cambio.

No se deben mantener ambas conductas para el mismo control.

### D4. Entrada a la aplicación después de autenticarse

El contrato del sidebar prevé un dashboard, pero `dashboard.html` no existe.

- **Temporal implementada:** login y registro exitosos van a `enviar-dinero.html`.
- **Destino final:** crear `dashboard.html` y redirigir ambos flujos allí.

Recuperación de contraseña no debe entrar a la app: conserva su éxito específico y
vuelve al login o muestra “Volver a ingresar”.

---

## 3. Hallazgos verificados

### Críticos — rompen navegación

| ID | Hallazgo | Archivos | Corrección |
|---|---|---|---|
| B1 | El CTA de éxito de auth siempre abre la landing. Login, registro y recuperación confluyen en `success` sin conservar el flujo. | `autenticacion.html` | Introducir `authFlow` (`login`, `registro`, `recuperar`) en memoria; aplicar copy y destino por flujo según D4. |
| B2 | Se usaban enlaces de servidor (`/settings`, `/comprar-dolares`, `/transactions`, etc.). | `cuentas-billeteras.html`, `enviar-dinero.html`, `apuestas-predicciones.html`, `notifications.html`, `refiere-y-gana.html` | Cambiarlos por destinos de D2. Transacciones redirige a `enviar-dinero.html`. |
| B3 | Los ítems del sidebar son `div` o `button` sin destino ni manejador. | Las 8 páginas de app | Añadir destinos sólo a ítems disponibles y un patrón único accesible. Excluir el subnav de Ajustes. |
| B4 | Ayuda enlaza a `settings.html`, que no existe. | `ayuda-y-soporte.html` | Usar `ajustes.html#seguridad`. |

### Importantes — coherencia, accesibilidad o deuda

| ID | Hallazgo | Corrección |
|---|---|---|
| I1 | Tema (`dark`) e idioma (`es`) se reinician por página. | Inicializar desde `localStorage` y persistir las acciones del usuario. |
| I2 | Referidos usa `--color-*`; los demás suelen usar `--primary`, `--bg`, etc. | Elegir una nomenclatura semántica única antes de extraer CSS. Se recomienda alinear todos con `design-tokens.md`: `--color-*`. |
| I3 | Referidos usa botones y `data-tip`; los otros siete usan `div`, `title` y ARIA diferente. | Plantilla semántica única: `<a>` para destinos, `<button>` sólo para acciones. |
| I4 | `profileMenuView` en Referidos no coincidía con `profile-menu-view`; Ajustes usa un botón. | **Resuelto en Fase 2:** los IDs de perfil de Referidos usan kebab-case. El tipo de trigger de Ajustes se conserva por su comportamiento propio. |
| I5 | Hay `nav-item` sin semántica o activación por teclado. | Normalizar a enlaces; elimina `role="button"` y `tabindex="0"` manuales. |
| I6 | El footer público deja Ayuda y soporte en `#`. | Enlazar a `ayuda-y-soporte.html`; declarar los otros enlaces sin contenido como pendientes. |
| I7 | El parallax busca `.phone`, pero el DOM usa `.dphone`. | Cambiar el selector a `.dphone`. |
| I8 | Modo claro está pendiente en `design-tokens.md`; los valores son tentativos. | No consolidar los tokens visuales finales sin aprobarlos. |

---

## 4. Plan de ejecución

### Fase 0 — Decisiones y referencia visual

| Tarea | Resultado verificable |
|---|---|
| Cerrar D3 y D4 | Un destino único para Notificaciones y post-auth |
| Capturar una referencia de cada página en dark/light y ES/EN | Base de comparación antes del refactor |
| Definir nomenclatura de tokens | Decisión documentada: `--color-*` recomendada |

### Fase 1 — Recuperar navegación funcional

| ID | Cambio | Archivos | Criterio de aceptación |
|---|---|---|---|
| F1 | Separar flujos de éxito de auth y aplicar D4 | `autenticacion.html` | Login, registro y recuperación muestran mensaje y CTA correctos. |
| F2 | Sustituir rutas absolutas de perfil y acciones rápidas | Los 5 archivos de B2 + `ayuda-y-soporte.html` | No queda navegación interna de servidor. |
| F3 | Implementar contrato del sidebar según D2 | Las 8 páginas de app | Cada destino disponible abre su HTML; los faltantes no aparentan funcionar. |
| F4 | Corregir footer de Ayuda y parallax | `homepage-preview.html` | El enlace abre Ayuda y el parallax responde con puntero fino. |

**Implementación preferida de F3:** enlaces reales, no `data-href` más listener.

```html
<a class="nav-item" href="enviar-dinero.html" title="Transferencias">…</a>
<span class="nav-item disabled" aria-disabled="true" title="Próximamente">…</span>
```

Así funciona con mouse, teclado, menú contextual y lectores de pantalla sin JavaScript.
Si se conserva un `div` temporalmente, debe tratar Enter y Espacio, ignorar
`[aria-disabled="true"]` y limitarse al sidebar principal de Ajustes, nunca a
`#settings-subnav [data-target]`.

### Fase 2 — Estado compartido y normalización

| ID | Cambio | Orden | Criterio de aceptación |
|---|---|---|---|
| C1 | Persistir tema e idioma con `datc-theme` y `datc-lang` | Primero | Al navegar o recargar se conserva la selección; valores inválidos vuelven a `dark` / `es`. |
| C2 | Unificar sidebar y menú de perfil | Después de F1 | Mismo HTML, estados ARIA y comportamiento en las 8 páginas. |
| C3 | Exponer aliases de los tokens comunes en Referidos | Antes de extraer CSS | Un componente compartido puede resolver `--bg`, `--primary`, etc.; el reemplazo interno completo queda para la extracción CSS. |
| C4 | Decidir fuente local/remota y declararla igual en todo el prototipo | Independiente | Sin cambio de métrica ni salto visual entre páginas. |

**Implementado:** `ui-preferences.js` persiste `datc-theme` y `datc-lang` para las
10 vistas. Referidos normalizó sus IDs de menú de perfil y expone alias de los tokens
comunes mientras conserva sus tokens semánticos `--color-*`. La única carga remota de
fuentes se retiró; todas las vistas usan la pila local de sistema.

### Fase 3 — Completar cobertura de producto

| ID | Pendiente | Decisión necesaria |
|---|---|---|
| P1 | Crear `dashboard.html` (Resumen) | Destino final recomendado de D4. |
| P3 | Renombrar `comprar-dolares.html` a `compra-usdt.html` o conservar alias | Actualización atómica de todos los enlaces. |
| P4 | Resolver páginas de compañía y legal del footer | Crear contenido, enlazar a una fuente existente o mostrarlas no disponibles. |

### Fase 4 — Extraer componentes (sólo después de C2 y C3)

| Activo común | Destino | Nota |
|---|---|---|
| Tokens CSS | `design-tokens.css` | Extraer sólo tokens aprobados; light sigue condicionado por I8. |
| Sidebar | Plantilla o componente del futuro framework | No usar `fetch()` en `file://`: suele bloquearse por CORS. |
| Preferencias | `ui.js` | Tema, idioma y sidebar colapsado. |
| Traducciones | `translations.js` o archivos por idioma con bundler | Mantener claves actuales y comprobar ES/EN. |

La extracción no bloquea el arreglo de enlaces. Para HTML plano, una plantilla generada
en build o edición controlada es más fiable que includes por `fetch()`.

---

## 5. Matriz de pruebas de aceptación

Abrir desde un servidor estático y, cuando sea posible, también desde `file://` para
detectar rutas raíz y dependencias accidentales.

| Caso | Pasos | Resultado esperado |
|---|---|---|
| Entrada pública | Usar Ingresar y Empieza ahora | Auth abre login o registro respectivamente. |
| Login | Enviar credenciales demo y pulsar CTA de éxito | Abre sólo el destino de D4. |
| Registro | Crear cuenta, OTP y éxito | Mantiene el flujo y abre el destino de D4. |
| Recuperación | Solicitar recuperación y completar demo | No entra a la app por error. |
| Sidebar | Desde las 8 páginas, activar destinos disponibles | HTML relativo correcto, sin 404 ni ruta raíz. |
| Teclado | Tab + Enter/Espacio sobre cada control | Misma acción que click; deshabilitados no se activan. |
| Ajustes | Cambiar tabs y usar sidebar externo | Subnav cambia paneles; sidebar navega sin interferencia. |
| Perfil y ayuda | Abrir Ver perfil y Seguridad | `ajustes.html#perfil` y `ajustes.html#seguridad`. |
| Preferencias | Elegir light/en; navegar y recargar | Tema e idioma persisten sin errores de consola. |
| Regresión visual | Comparar con capturas de Fase 0 | Sin cambios no intencionales en estados o responsive. |

Comprobaciones estáticas mínimas:

```sh
rg -n 'href="/|(?:window\.)?location\.href\s*=' htmls
rg -n "settings\\.html|querySelector\\('\\.phone'\\)" htmls
```

La primera no debe devolver navegación interna de servidor. La segunda no debe devolver
coincidencias tras F2 y F4.

---

## 6. Riesgos y trazabilidad

- `sidebar.md` es la fuente funcional del sidebar; este plan adapta sus rutas a la
  realidad estática. Al existir router, volver a sus rutas canónicas.
- `design-tokens.md` documenta `color-*` y deja light pendiente; no conviene fijar una
  extracción definitiva antes de aprobarlo.
- Renombrar archivos es de alto impacto: actualizar enlaces, `onclick`, ayudas y pruebas
  en el mismo cambio.
- No sustituir destinos faltantes por la landing: disimula funcionalidad incompleta y
  rompe la expectativa de una sesión autenticada.

---

## 7. Estado de partida

| Archivo | Abre | Navegación interna | Preferencias | Observación principal |
|---|---:|---:|---:|---|
| `homepage-preview.html` | Sí | Parcial | No | Footer de Ayuda y parallax por corregir. |
| `autenticacion.html` | Sí | Parcial | No | Éxito compartido redirige a landing. |
| `enviar-dinero.html` | Sí | No | No | Perfil usa `/settings`. |
| `cuentas-billeteras.html` | Sí | No | No | Rutas de servidor y CTAs sin destino. |
| `comprar-dolares.html` | Sí | No | No | Nombre de archivo no coincide con producto visible. |
| `apuestas-predicciones.html` | Sí | No | No | Perfil usa `/settings`; accesibilidad incompleta. |
| `refiere-y-gana.html` | Sí | No | No | Plantilla, tokens e ID de perfil divergentes. |
| `notifications.html` | Sí | No | No | Falta decidir página o panel. |
| `ajustes.html` | Sí | Parcial | No | Cuidar su subnav al normalizar. |
| `ayuda-y-soporte.html` | Sí | Parcial | No | Enlace roto a `settings.html`. |

Las Fases 1 y 2 dejan conectadas las páginas existentes y conservan las preferencias
del usuario. Sólo Resumen y Analíticas continúan deshabilitados hasta que existan sus
HTML.
