# Roadmap — Preparación para la Prueba Trimestral

**Examen:** Prueba trimestral · II periodo · **24 de agosto**
**Estudiante:** Noveno nivel · Matemática · Colegio Salesiano Don Bosco (Prof. Luis Loría Murillo)

Este documento compara el **temario oficial del examen** contra lo que **la app ya cubre**, para
definir el siguiente paso de estudio/contenido.

---

## 📊 Resumen de cobertura

| #   | Objetivo del examen                       | Estado      | Cobertura en la app                                    |
| --- | ----------------------------------------- | ----------- | ------------------------------------------------------ |
| 1   | Ángulos de elevación y depresión          | 🟢 Cubierto | 100 % (unidad `elevacion-depresion`, 20 ejercicios)    |
| 2   | Ley de senos                              | 🟢 Cubierto | 100 % (unidad `ley-senos`, 20 ejercicios)              |
| 3   | Factorización de expresiones algebraicas  | 🟢 Completo | 100 % (`completar-cuadrados` añadida, 20 ejercicios)   |
| 4   | Simplificación de expresiones racionales  | 🟢 Cubierto | 100 %                                                  |
| 5   | Operaciones con expresiones fraccionarias | 🟢 Completo | 100 % (`suma-resta-racionales` añadida, 20 ejercicios) |

**Lectura rápida:** los 5 objetivos del temario ya tienen teoría con ejemplos resueltos y
práctica interactiva. Total del banco: **210 ejercicios**.

---

## ✅ Lo que la app YA cubre

### Objetivo 3 — Factorización (~90 %)

Fuente: unidades `p2-*` (`data/practica02.ts`) y unidad `factorizacion` (`data/practices.ts`).

| Contenido del temario                  | Estado     | Dónde está                                                    |
| -------------------------------------- | ---------- | ------------------------------------------------------------- |
| Factor común                           | ✅         | `p2-factor-comun` (12 ejercicios + teoría)                    |
| Agrupación y factor común              | ✅         | `p2-agrupacion` (22 ejercicios + teoría)                      |
| Método de la inspección                | ✅         | `p2-inspeccion` (33 ejercicios: $x^2+bx+c$, $ax^2+bx+c$, TCP) |
| Diferencia de cuadrados                | ✅         | `p2-binomios` (23 ejercicios + teoría)                        |
| Factor común + diferencia de cuadrados | ✅         | `p2-combinados` (14 ej.) y `factorizacion-8/9`                |
| Trinomio cuadrático perfecto           | ✅         | `factorizacion` (teoría + ejercicios 3 y 4)                   |
| Combinación de métodos                 | ✅         | `p2-combinados` y `factorizacion-10`                          |
| **Completar cuadrados**                | ⚠️ Parcial | Solo implícito vía TCP. Falta técnica explícita               |

### Objetivo 4 — Simplificación de racionales (100 %)

| Contenido                              | Estado | Dónde está                                          |
| -------------------------------------- | ------ | --------------------------------------------------- |
| Simplificación (factorizar y cancelar) | ✅     | `simplificacion-racionales` (9 ejercicios + teoría) |

### Objetivo 5 — Operaciones con racionales (~50 %)

| Contenido                    | Estado | Dónde está                                  |
| ---------------------------- | ------ | ------------------------------------------- |
| Multiplicación               | ✅     | `operaciones-racionales` (ej. 1–4 + teoría) |
| División (recíproco)         | ✅     | `operaciones-racionales` (ej. 5–7 + teoría) |
| **Suma (denominador común)** | ❌     | No existe                                   |
| **Resta (manejo de signos)** | ❌     | No existe                                   |

### Apoyo adicional ya disponible

- Teoría con fórmulas KaTeX y ejemplos resueltos en acordeones.
- Práctica interactiva con validación, retroalimentación y paso a paso.
- Progreso guardado en `localStorage`.
- PDFs descargables: `practica02.pdf` y `practica03.pdf`.

---

## 🔴 Lo que FALTA (priorizado para el examen)

> ✅ **ACTUALIZADO 22/08/2026:** los cuatro huecos detectados ya fueron cubiertos con
> **80 ejercicios nuevos** (20 por tema), cada uno con paso a paso detallado y teoría con
> ejemplos resueltos. La posición de la respuesta correcta se mezcla aleatoriamente por
> ejercicio (mezcla determinista en `ExerciseRunner`, estable entre sesiones).

### Prioridad 1 — Objetivo 1: Ángulos de elevación y depresión ✅

- [x] Unidad `elevacion-depresion` (`data/trigonometria.ts`)
- [x] Teoría: razones trigonométricas, elevación, depresión (alternos internos) y estrategia
      general — 4 secciones, todas con ejemplos resueltos.
- [x] 20 ejercicios: alturas, sombras, escaleras, cometas, depresión desde faros/acantilados,
      problemas combinados (ventana→torre, dos edificios) y retos de dos observaciones.

### Prioridad 2 — Objetivo 2: Ley de senos ✅

- [x] Unidad `ley-senos` (`data/trigonometria.ts`)
- [x] Teoría: planteamiento, despeje de lados/ángulos, ángulos obtusos ($\operatorname{sen}(180°-x)$)
      y problemas aplicados — con ejemplos resueltos.
- [x] 20 ejercicios: pares clásicos de ángulos notables, despeje de ángulo con $\arcsen$,
      topografía, montañas, senderos y el reto de la torre con dos observaciones.

### Prioridad 3 — Objetivo 5: Suma y resta de racionales ✅

- [x] Unidad `suma-resta-racionales` (`data/racionales-suma-resta.ts`)
- [x] Teoría: mismo denominador, MCM con monomios, denominadores factorizables y los dos
      trucos clave (distribuir el signo; denominadores opuestos).
- [x] 20 ejercicios: progresión de simple (mismo denominador) a complejo (tres fracciones,
      TCP en denominadores, simplificación previa).

### Mejora menor — Objetivo 3: "Completar cuadrados" ✅

- [x] Unidad `completar-cuadrados` (`data/completar-cuadrados.ts`)
- [x] Teoría: idea central, forma $(x+h)^2+k$, coeficiente $a \neq 1$ y factorización vía
      diferencia de cuadrados.
- [x] 20 ejercicios: hallar el constante, coeficientes desconocidos ($k=\pm12$), fracciones,
      y factorización completando cuadrado.

### Siguientes pasos opcionales (post-examen)

- [x] **Simulacro cronometrado** (`/simulacro`, 22/08/2026): preguntas al azar de todo el banco
      (filtros por bloque y extensión 5/10/20), temporizador de 90 s por pregunta, entrega con
      confirmación, nota final y revisión con paso a paso por pregunta. Acceso desde la tarjeta
      oscura en la página principal (`components/SimulacroCard.tsx`, lógica en `lib/simulacro.ts`).
- [x] **Diagramas SVG** (`lib/diagrams.ts`, 22/08/2026): 12 generadores paramétricos
      (elevación, depresión, escalera/cometa/globo, combinada, dos observadores, antena,
      sombras, auto, dron, triángulo oblicuángulo y triángulo rectángulo). Adjuntos a las
      7 secciones de teoría y a los 40 ejercicios de trigonometría; se renderizan en teoría,
      práctica y simulacro (componente `DiagramSvg.tsx`).
- [x] **Modo repaso de errores global** (`/repaso`, 22/08/2026): recolecta automáticamente los
      ejercicios fallados en todas las prácticas (`lib/repaso.ts`), con opción de incluir los
      resueltos al segundo intento. Al acertar en el repaso se actualiza el progreso original y
      el ejercicio sale de la cola. Tarjeta ámbar en la página principal
      (`components/RepasoCard.tsx`) solo visible cuando hay errores.

> ✅ **Roadmap completo**: todos los objetivos del examen cubiertos + las 3 mejoras opcionales
> implementadas (210 ejercicios, simulacro, diagramas y repaso global).

---

## 🗺️ Plan sugerido (orden de trabajo)

> ✅ Completado. El plan original era: 1) elevación/depresión, 2) ley de senos, 3) suma/resta de racionales, 4) completar cuadrados. Las cuatro unidades están implementadas.

### Implementación técnica

Cada tema nuevo = un objeto `PracticeUnit` en `data/` (ver README "Añadir una práctica nueva").
Las rutas `/practica/[id]/teoria` y `/practica/[id]/ejercicios` se generan automáticamente.

**Aleatorización de opciones:** `ExerciseRunner.tsx` mezcla las opciones con un shuffle
determinista (semilla = `practiceId:exerciseId`, PRNG mulberry32 + Fisher-Yates). La letra
mostrada (A–D) se asigna según la posición mezclada y la selección sigue usando el id original,
por lo que el progreso guardado en `localStorage` sigue siendo válido y no hay errores de
hidratación (mismo orden en servidor y cliente).

Validación después de cada cambio: `make check && make build`.

---

## 📈 Métricas actuales del banco de preguntas

| Unidad                                        | Ejercicios |
| --------------------------------------------- | ---------- |
| Factorización de polinomios (`factorizacion`) | 10         |
| Factor común · P2                             | 12         |
| Agrupación · P2                               | 22         |
| Inspección · P2                               | 33         |
| Diferencia de cuadrados · P2                  | 23         |
| Métodos combinados · P2                       | 14         |
| Simplificación de racionales                  | 9          |
| Operaciones con racionales                    | 7          |
| **Ángulos de elevación y depresión**          | **20**     |
| **Ley de senos**                              | **20**     |
| **Suma y resta de racionales**                | **20**     |
| **Completar cuadrados**                       | **20**     |
| **Total actual**                              | **210**    |
