<!-- @fp-path: README.md -->
# dineroAtucuenta

Dashboard financiero personal — cuentas, tarjetas, transferencias,
inversiones, cripto, analíticas y presupuestos, todo en un solo lugar.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [shadcn/ui](https://ui.shadcn.com) + [Tailwind CSS v4](https://tailwindcss.com)
- [Recharts](https://recharts.org) para gráficos
- [Motion](https://motion.dev) para animaciones
- [@dnd-kit](https://dndkit.com) para el dashboard drag-and-drop
- TypeScript

## Correr en local

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Notas

- **Datos mock:** todo el contenido de demo vive en `src/data/seed.ts`.
- **Tema:** colores y modo oscuro/claro en `src/app/globals.css`.
- **Auth:** las páginas `/sign-in` y `/sign-up` son un mock visual (sin
  proveedor de auth real conectado todavía) — simulan el flujo con un
  `setTimeout`.
- **Deploy:** push a `main` en GitHub dispara build + deploy automático
  en Vercel.
