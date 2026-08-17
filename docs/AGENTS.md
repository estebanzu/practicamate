# AGENTS.md

## Stack tecnológico
- Next.js 14 App Router (estático exportado: `output: 'export'`).
- React 18 + TypeScript 5.
- Tailwind CSS 3, KaTeX 0.16.
- Runtime local: Node.js 18+ (en WSL).

## Comandos esenciales
- `npm install` — instalar dependencias.
- `make dev` o `npm run dev` — servidor en `http://localhost:3000`.
- `make build` o `npm run build` — genera export estático en `out/`.
- `make check` — lint + typecheck + format check.
- `make format` — formatea con Prettier.
- `npm run lint` / `npm run typecheck` — chequeos individuales.

## Reglas y convenciones
- Rutas en `/app` bajo App Router, client-side solo cuando se requiere estado/interacción (`'use client'`).
- Datos de dominio en `/data`, lógica reutilizable en `/lib`, UI en `/components`.
- Usa prefijos absolutos `@/...` para imports.
- Mobile-first: zonas táctiles ≥ 48px, botones con `active:scale`, overflow horizontal para fórmulas largas.
- Paleta zinc + indigo; no introducir dependencias nuevas sin necesidad.
- No persistir datos sensibles; usar exclusivamente `localStorage` para progreso.
- Antes de finalizar: ejecuta `make check` y `make build` y reporta resultados reales.

## Checklist de terminación
1. Cambios aplicados con herramientas (patch/write_file), no solo descritos.
2. Lint, tipos y formato verificados.
3. Build completo exitoso (`out/` generado).
4. Comportamiento accesible y móvil preservado.
5. Documentación actualizada solo si cambiaron contratos clave.
