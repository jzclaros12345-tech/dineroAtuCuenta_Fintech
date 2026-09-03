# COMPONENTE — THEME & LANGUAGE SWITCHER

## OBJETIVO

Permitir al usuario alternar entre tema oscuro/claro e idioma español/inglés desde cualquier página, sin perder su lugar en la navegación.

## APARECE EN

Navbar de **todas las Pages** (público y app autenticada). Se documenta aquí una sola vez; cada wireframe lo referencia en su sección de navbar en vez de redetallarlo.

## ELEMENTOS

```text
- Selector de tema: toggle o ícono (sol/luna) → dark ⇄ light
- Selector de idioma: dropdown corto o toggle → ES ⇄ EN
```

*(Pendiente decidir: ¿un solo control combinado o dos controles separados? — a definir con el usuario)*

## INTERACCIONES

```text
ELEMENT: Theme toggle
TYPE: Button/Switch
CLICK: Alterna color-tokens activos (dark ⇄ light) en toda la app.
       No navega, no recarga la página.
PERSISTENCIA: Guardar preferencia (localStorage o similar) para que
       se mantenga entre sesiones.

ELEMENT: Language selector
TYPE: Dropdown / Toggle
CLICK: Cambia el idioma de todo el contenido visible (es ⇄ en).
       No navega (la ruta no cambia), no recarga la página.
PERSISTENCIA: Guardar preferencia igual que el tema.
```

## ESTADOS

```text
- Tema: dark (default) / light
- Idioma: es (default) / en
- Dropdown de idioma: cerrado / abierto
```

## NOTAS DE DISEÑO

```text
- Ubicación exacta dentro del navbar: pendiente de definir
  (¿junto a "Ingresar", en un menú de cuenta, o ícono independiente?).
- Debe ser accesible con teclado (foco visible, Enter/Space para activar).
- El cambio debe sentirse instantáneo — sin parpadeo ni layout shift.
```
