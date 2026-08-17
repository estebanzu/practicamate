# ARCHITECTURE.md

## Diagrama del sistema

```mermaid
flowchart LR
  U[Usuario] --> L[Landing /]
  L --> C[PracticeCatalog]
  C --> E[Ejercicios /practica/[id]/ejercicios]
  C --> T[Teoría /practica/[id]/teoria]
  E -->|inline| LR[LatexRenderer]
  T -->|inline| LR
  E -->|drawer| TV[TheoryView embedded]
  TV --> LR
  E --> P[usePracticeProgress]
  P --> LS[localStorage]
```

## Flujo de datos principal

1. `data/practices.ts` provee el dataset tipado.
2. `/` lo consume vía `PracticeCatalog`, filtrando por query/materia.
3. Cada práctica navega a teoría o ejercicios.
4. `ExerciseRunner` mantiene estado local de respuestas y pasos; persiste progreso en `localStorage`.
5. Teoría embebida se muestra en un drawer sin perder el estado del ejercicio.

## Módulos core

- `app/` — rutas Next.js App Router y layout raíz.
- `components/` — componentes de dominio: catálogo, tarjeta, teoría, ejercicios, renderer LaTeX.
- `data/practices.ts` — dataset y contratos de dominio.
- `lib/progress.ts` — persistencia y hook de progreso.

## Integraciones externas y estado

- No hay backend/API.
- Estado local de UI en componentes cliente; progreso en `localStorage` por `practiceId`.
- KaTeX como único motor de fórmulas; sin servicios externos ni analítica.
