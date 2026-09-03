# design-tokens.md — dineroAtucuenta

## Motion

La fuente de verdad es `htmls/motion-tokens.css`. Cada pantalla la carga antes
de su CSS local.

| Uso | Nombre canónico |
|---|---|
| Entrada de panel, modal o paso | `panel-in` |
| Menú de perfil | `profile-menu-in` |
| Carga tipo shimmer | `skeleton-loading` |
| Borde brillante giratorio | `shine-rotate` |
| Indicador de estado vivo | `pulse-dot` |
| Entrada de listas | `stagger-in` |
| Flotación ambiental | `ambient-float` |

Los tiempos usan `--dur-instant`, `--dur-fast`, `--dur-base`, `--dur-slow` y
`--dur-ambient`; los easings son `--ease-standard` y `--ease-out`. No se deben
crear nombres alternativos para efectos equivalentes. `prefers-reduced-motion`
se resuelve globalmente en el mismo archivo.

## Color

Las vistas modernas usan `--color-*` como fuente de verdad. Cuando una vista
legada necesita `--bg`, debe declarar `--bg:var(--color-background)` en el
tema, sin duplicar el valor hexadecimal.
