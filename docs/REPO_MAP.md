# REPO_MAP.md

```
/home/ezunigam/emma-practica-examen
├── app/                          # Next.js App Router (SSG/export)
│   ├── layout.tsx                # Layout raíz, KaTeX CSS + globals
│   ├── page.tsx                  # Landing / catálogo
│   ├── globals.css               # Utilidades globales y touch helpers
│   ├── practica/[id]/teoria/page.tsx      # Página teoría por práctica
│   └── practica/[id]/ejercicios/page.tsx  # Página ejercicios por práctica
├── components/
│   ├── PracticeCatalog.tsx       # Búsqueda + filtros del catálogo
│   ├── PracticeCard.tsx          # Tarjeta con progreso y CTAs
│   ├── TheoryView.tsx            # Teoría con acordeones y bottom sheet CTA
│   ├── ExerciseRunner.tsx        # Runner de ejercicios, drawer teoría, pasos
│   └── LatexRenderer.tsx         # Parser/renderer de $...$ y $$...$$
├── data/
│   └── practices.ts              # Dataset de prácticas + interfaces
├── lib/
│   └── progress.ts               # localStorage + hook usePracticeProgress
├── docs/
│   ├── AGENTS.md                 # Contexto operativo para agentes IA
│   ├── ARCHITECTURE.md           # Diagrama, módulos y flujo
│   ├── REPO_MAP.md               # Mapa del repositorio
│   └── SCHEMA.md                 # Entidades e interfaces
├── out/                          # Export estático generado
├── package.json                  # Scripts y dependencias
├── next.config.mjs               # output: export, trailingSlash
├── tailwind.config.ts            # Tailwind
├── tsconfig.json                 # Paths @/*
└── Makefile                      # build, check, format, dev
```

Archivos clave por responsabilidad:

- `data/practices.ts`: contrato de dominio.
- `components/ExerciseRunner.tsx`: flujo interactivo principal.
- `lib/progress.ts`: persistencia cliente y hook.
- `next.config.mjs`: decide despliegue estático.
