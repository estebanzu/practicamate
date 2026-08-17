# Matemática en foco

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![KaTeX](https://img.shields.io/badge/KaTeX-0.16-008080?logo=latex&logoColor=white)](https://katex.org)
[![Static Export](https://img.shields.io/badge/export-100%25%20static-4ade80)](<>)
[![Vercel](https://img.shields.io/badge/Vercel-ready-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Plataforma educativa interactiva de **Álgebra** (Noveno Nivel, Colegio Salesiano Don Bosco) para
consultar teoría con fórmulas en LaTeX y resolver prácticas con retroalimentación inmediata y
resolución paso a paso.

Diseño **ultra minimalista** y **mobile-first**, 100 % estático (Next.js App Router +
`output: 'export'`) y listo para desplegar en **Vercel** vía **GitHub**.

---

## ✨ Características

- **Landing / Catálogo** (`/`): búsqueda por tema, filtro por materia, tarjetas con progreso
  personal (`3 de 10 resueltos`) y barra de avance.
- **Teoría** (`/practica/[id]/teoria`): lectura enfocada con fórmulas KaTeX, ejemplos resueltos en
  acordeones táctiles y botón fijo inferior **"Ir a los Ejercicios →"**.
- **Práctica interactiva** (`/practica/[id]/ejercicios`):
  - Barra superior táctil: regreso, indicador `Ejercicio 2 de 5` y acceso a **"📖 Teoría"**.
  - Opción múltiple con validación instantánea (verde suave / rojo suave) y retroalimentación.
  - Estados **Pendiente / Resuelto / Reintentar** (permite reintentar si fallas).
  - Botón **"💡 ¿Cómo se resuelve? Ver paso a paso"** que revela progresivamente la resolución en
    LaTeX, y se habilita **"Siguiente ejercicio →"** al responder o revisar la solución.
  - Teoría en **drawer inferior** (bottom sheet) sin perder el estado del ejercicio.
  - Progreso guardado automáticamente en `localStorage`.
- **Mobile-first**: zonas táctiles ≥ 48 px, `active:scale`, fórmulas largas con
  `overflow-x-auto` y diseño limpio sin distracciones.

## 🧱 Stack

| Tecnología              | Uso                                                         |
| ----------------------- | ----------------------------------------------------------- |
| Next.js 14 (App Router) | Framework y rutas estáticas (SSG)                           |
| TypeScript              | Tipado estricto                                             |
| Tailwind CSS            | Estilos minimalistas (paleta zinc + acento índigo)          |
| KaTeX                   | Renderizado matemático (`$...$` inline y `$$...$$` display) |
| localStorage            | Persistencia del progreso por dispositivo                   |
| Prettier + ESLint       | Formato y calidad de código                                 |
| GNU Make                | Comandos de desarrollo (`build`, `check`, `security`, …)    |

## 📁 Estructura del proyecto

```
├── app/
│   ├── layout.tsx              # Layout raíz (importa estilos KaTeX y Tailwind)
│   ├── page.tsx                # Landing / catálogo de prácticas
│   ├── globals.css             # Utilidades touch, .no-scrollbar
│   └── practica/[id]/
│       ├── teoria/page.tsx     # Ruta de teoría (SSG)
│       └── ejercicios/page.tsx # Ruta de práctica (SSG)
├── components/
│   ├── LatexRenderer.tsx       # Texto mixto con $...$ y $$...$$ (anti-desbordamiento)
│   ├── PracticeCard.tsx        # Tarjeta de práctica con progreso
│   ├── PracticeCatalog.tsx     # Búsqueda + filtro por materia
│   ├── TheoryView.tsx          # Teoría con acordeones de ejemplos
│   └── ExerciseRunner.tsx      # Validador, paso a paso y drawer de teoría
├── data/
│   └── practices.ts            # Dataset de prácticas (tipos + 3 unidades)
├── lib/
│   └── progress.ts             # Persistencia de progreso en localStorage
├── Makefile                    # Comandos: build, format, check, security, dev
├── next.config.mjs             # output: 'export'
├── public/
│   └── pdfs/                   # PDFs descargables (base de todas las soluciones)
│       ├── practica02.pdf
│       └── practica03.pdf
└── package.json
```

## 🚀 Desarrollo local

Requisitos: **Node.js 18+** y **npm**. En Windows, ejecuta los comandos dentro de **WSL**
(`wsl bash -lc "cd /home/ezunigam/emma-practica-examen && ..."`) para evitar errores con rutas UNC.

```bash
npm install
make dev         # http://localhost:3000
```

### Comandos con Make

| Comando             | Descripción                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `make build`        | Compila el sitio estático en `out/`                                         |
| `make format`       | Formatea el código con Prettier                                             |
| `make check`        | Verifica lint, tipos y formato (`next lint` + `tsc --noEmit` + `prettier`)  |
| `make security`     | Auditoría de dependencias (`npm audit`); falla si hay vulnerabilidades      |
| `make security-fix` | Corrige vulnerabilidades forzando actualizaciones (`npm audit fix --force`) |
| `make dev`          | Servidor de desarrollo en `http://localhost:3000`                           |
| `make deploy`       | Despliega en Vercel (producción) vía Vercel CLI; requiere `VERCEL_TOKEN`    |

> **Nota:** `make security --fix-force` no es sintaxis válida de GNU Make (los argumentos con `--`
> tras un target se interpretan como opciones de `make`). Usa `make security-fix`.

### Despliegue directo con `make deploy`

Alternativa al flujo GitHub → Vercel. Construye en local y sube a producción usando la CLI de
Vercel. Necesita el token (se lee de la variable de entorno `VERCEL_TOKEN` o del archivo `.env`,
que está en `.gitignore`):

```bash
export VERCEL_TOKEN=vcp_xxx      # o: echo "VERCEL_TOKEN=vcp_xxx" > .env
make deploy                      # publica en https://novenomate.vercel.app
```

Cada ejecución crea un nuevo deployment de producción (si no lo sobreescribes, `.env` nunca se
sube al repositorio).

Verificación previa al commit:

```bash
make check
make build
```

## ✏️ Añadir una práctica nueva

1. Abre `data/practices.ts`.
2. Crea un objeto `PracticeUnit` siguiendo las interfaces (`theory`, `exercises` con `options` y
   `steps`, todo en LaTeX).
3. Añádelo al array `practices`. Las rutas `/practica/[id]/...` se generan automáticamente.

Consejos para el LaTeX:

- Fórmulas inline: `$x^2 + bx + c$`.
- Bloques centrados: `$$\frac{a^2 - b^2}{(a+b)(a-b)}$$`.
- No hace falta escapar los `$` dentro de los strings de TypeScript.

## ☁️ Despliegue en Vercel vía GitHub

### 1. Repositorio en GitHub

```bash
git init
git add .
git commit -m "feat: plataforma de prácticas de Álgebra"
git branch -M main
git remote add origin git@github.com:estebanzu/practicamate.git
git push -u origin main
```

> Los archivos generados (`node_modules/`, `.next/`, `out/`, `*.tsbuildinfo`, `.env*`) ya están
> excluidos en `.gitignore`.

### 2. Importar en Vercel

1. Entra en [vercel.com/new](https://vercel.com/new) e inicia sesión con tu cuenta de GitHub.
2. Selecciona el repositorio **`estebanzu/practicamate`**.
3. **Framework Preset:** `Next.js`. Vercel lo detecta automáticamente.
4. **Build Command:** `npm run build` (por defecto).
   - **Output Directory:** déjalo vacío. Vercel sirve automáticamente el resultado de
     `output: 'export'` desde `out/`.
5. Haz clic en **Deploy**. Obtendrás una URL pública.

### 3. Despliegues automáticos

Cada `git push` a `main` (o un Pull Request) dispara un _preview_ automático en Vercel. Puedes
añadir un dominio personalizado desde **Project → Settings → Domains**.

## 📄 PDFs descargables

En la página de inicio (`/`) hay una sección **"📄 Soluciones y guías (PDF)"** con los documentos
oficiales (base de todas las soluciones) descargables desde `public/pdfs/`:

- `practica02.pdf` — Práctica adicional 2 (factorización: factor común, agrupación, inspección,
  binomios y combinados).
- `practica03.pdf` — Práctica adicional 3 (factorización, simplificación y operaciones con
  expresiones racionales).

## 📚 Dataset incluido

Las prácticas interactivas provienen de los documentos _"Práctica adicional 2 y 3 — Noveno Nivel"_
(Colegio Salesiano Don Bosco, Departamento de Matemática):

1. **Factorización de Polinomios** (10 ejercicios)
2. **Simplificación de Expresiones Racionales** (9 ejercicios)
3. **Operaciones con Expresiones Racionales** (7 ejercicios)

> **Nota:** los PDFs oficiales son la **base de todas las soluciones** y están disponibles para
> descargar. Dos expresiones del PDF 3 tenían ambigüedades de extracción (coeficiente fraccionario
> y un denominador sin simplificación); se transcribieron con la mejor interpretación y quedan
> documentadas en los comentarios de `data/practices.ts`.

## 🧪 Solución de problemas

| Problema                             | Solución                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------- |
| `npm install` falla con `EPERM`      | Ejecuta npm dentro de WSL, nunca desde PowerShell contra la ruta UNC WSL. |
| El progreso no se guarda             | El navegador debe permitir `localStorage` (misma pestaña/dominio).        |
| Las fórmulas se salen de la pantalla | Las fórmulas largas ya van en contenedores `overflow-x-auto`; desliza.    |
| `make` no encontrado                 | Instala make en WSL (`sudo apt install make`) o usa `npm run <script>`.   |

## 📄 Licencia

MIT — véase [LICENSE](LICENSE).
