# AGENTS.md

Plataforma educativa de Álgebra y Trigonometría (9no nivel, Colegio Salesiano Don Bosco): teoría en LaTeX y práctica con retroalimentación inmediata. Next.js App Router **100 % estático** (`output: 'export'`), React 18, TypeScript estricto, Tailwind CSS 3, KaTeX, progreso en `localStorage`. Sin backend ni dependencias de servidor.

## Comandos

```bash
npm install          # instalar dependencias
make dev             # servidor de desarrollo en http://localhost:3000 (o: npm run dev)
make build           # export estático en out/ (o: npm run build)
make check           # typecheck + eslint + prettier check (verificación previa al commit)
make format          # formatea con Prettier (o: npm run format)
make security        # npm audit; falla si hay vulnerabilidades
make security-fix    # npm audit fix --force (NUNCA "make security --fix-force": sintaxis inválida)
make deploy          # despliega a Vercel; requiere VERCEL_TOKEN en env o .env
```

Individuales: `npm run typecheck` (`tsc --noEmit`) y `npx eslint . --ignore-pattern 'out/' --ignore-pattern 'node_modules/'`. No existe `next lint`: fue eliminado en Next.js 16.

Antes de terminar una tarea: ejecuta `make check` y `make build` y reporta los resultados reales.

## Arquitectura

- `app/` — Rutas App Router (SSG): `/` (catálogo), `/simulacro` (examen aleatorio), `/repaso` (cola de errores), `/practica/[id]/teoria` y `/practica/[id]/ejercicios` (generadas desde los ids del dataset). Marca `'use client'` solo donde hay estado/interacción.
- `data/` — Dataset de dominio. Cada archivo exporta unidades `PracticeUnit[]` (`practica02.ts`, `racionales-suma-resta.ts`, `completar-cuadrados.ts`, `trigonometria.ts`); `practices.ts` agrega todo y expone `getPractice(id)` / `getPracticeIds()`. Los tipos (`PracticeUnit`, `Exercise`, `Step`, …) viven aquí; contratos documentados en `docs/SCHEMA.md`.
- `lib/` — Lógica pura reutilizable: `progress.ts` (persistencia), `repaso.ts`, `simulacro.ts`, `diagrams.ts` (generadores de SVG paramétricos que devuelven strings).
- `components/` — UI. `LatexRenderer.tsx` renderiza texto mixto con `$...$` inline y `$$...$$` display (con anti-desbordamiento); úsalo para todo contenido con LaTeX. `ExerciseRunner.tsx` valida opciones y revela pasos.

## Convenciones

- Imports absolutos con alias `@/...`.
- Idioma español en UI, datos, comentarios y commits (convención: `feat:`, `fix:`, `chore:`, `docs:`).
- Todo enunciado, opción, fórmula y paso va en LaTeX dentro de strings TS (los `$` no se escapan).
- Prettier: single quotes, semicolons, `trailingComma: es5`, print width 100.
- Mobile-first: zonas táctiles ≥ 48 px, botones con `active:scale`, fórmulas largas dentro de `overflow-x-auto`.
- Paleta Tailwind zinc + acento índigo. No introducir dependencias nuevas sin necesidad real.
- Persistencia exclusivamente en `localStorage` (clave base `practicas-matematica:progress:v1:<practiceId>`). Nada sensible ni del servidor.
- Para añadir una práctica: crea/agrega un objeto `PracticeUnit` en el archivo de datos correspondiente y expórtalo vía `practices.ts`; las rutas `[id]` se generan solas.

## Gotchas

- `next.config.mjs` tiene la clave `eslint.ignoreDuringBuilds`, pero Next 16 ya no la reconoce (warning en cada build) y el build NUNCA valida lint; corre `make check` aparte.
- Las rutas usan `trailingSlash: true` — respétalo en links internos.
- `ExerciseRunner` mezcla las opciones de forma determinista por id: nunca asumas la posición de la respuesta correcta.
- Los PDFs oficiales en `public/pdfs/` son la base de las soluciones; ambigüedades de transcripción quedan comentadas en `data/practices.ts`.
- README.md aún menciona Next.js 14; la versión real es Next ^16.3.2 (actualizado ago 2026).
