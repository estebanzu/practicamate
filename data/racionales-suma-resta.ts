// ============================================================================
// Dataset de prácticas — Suma y resta de expresiones racionales (Noveno Nivel)
// Objetivo 5 de la prueba trimestral II periodo (operaciones con expresiones
// algebraicas fraccionarias): complementa multiplicación/división que ya
// existe en la unidad "operaciones-racionales".
// ============================================================================

import type { PracticeUnit } from './practices';

const sumaRestaRacionales: PracticeUnit = {
  id: 'suma-resta-racionales',
  title: 'Suma y Resta de Expresiones Racionales',
  subject: 'Álgebra',
  topic: 'racionales-suma-resta',
  description:
    'Suma y resta fracciones algebraicas hallando el mínimo común denominador, combinando numeradores y cuidando los signos al restar.',
  theory: [
    {
      title: 'Mismo denominador',
      contentLatex:
        'Si las fracciones ya comparten denominador, se opera **solo** con los numeradores y se conserva el denominador común: $$\\frac{A}{D} \\pm \\frac{B}{D} = \\frac{A \\pm B}{D}.$$ Al **restar**, el signo menos afecta a **todo** el numerador de la segunda fracción.',
      examples: [
        {
          title: 'Ejemplo resuelto: suma',
          statementLatex: 'Resuelva $\\dfrac{x}{6} + \\dfrac{2x - 1}{6}$.',
          solutionLatex:
            'Sumamos los numeradores y agrupamos términos semejantes: $$\\frac{x + (2x - 1)}{6} = \\frac{3x - 1}{6}.$$',
        },
        {
          title: 'Ejemplo resuelto: resta',
          statementLatex: 'Resuelva $\\dfrac{5x}{4} - \\dfrac{2x + 3}{4}$.',
          solutionLatex:
            'El paréntesis es obligatorio para repartir el signo menos: $$\\frac{5x - (2x + 3)}{4} = \\frac{5x - 2x - 3}{4} = \\frac{3x - 3}{4} = \\frac{3(x-1)}{4}.$$ Error típico: escribir $5x - 2x + 3$ (sin cambiar el $+3$).',
        },
      ],
    },
    {
      title: 'Denominadores monomios distintos: mínimo común denominador',
      contentLatex:
        'El MCD/LCM se calcula como en aritmética: MCM de los coeficientes numéricos y la **mayor** potencia de cada variable. Ejemplo: para $\\dfrac{1}{4a^2}$ y $\\dfrac{1}{6ab}$ el mínimo común denominador es $12a^2b$. Cada fracción se amplifica dividiendo el MCD entre su denominador y multiplicando también el numerador.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Resuelva $\\dfrac{1}{2x} + \\dfrac{1}{3y}$.',
          solutionLatex:
            'MCM de $2x$ y $3y$ es $6xy$. Amplificamos cada fracción: $$\\frac{1 \\cdot 3y}{2x \\cdot 3y} + \\frac{1 \\cdot 2x}{3y \\cdot 2x} = \\frac{3y + 2x}{6xy}.$$ El resultado generalmente se deja con el numerador sin desarrollar.',
        },
        {
          title: 'Ejemplo resuelto con resta',
          statementLatex: 'Resuelva $\\dfrac{5}{a} - \\dfrac{3}{b}$.',
          solutionLatex:
            'MCM: $ab$. $$\\frac{5b}{ab} - \\frac{3a}{ab} = \\frac{5b - 3a}{ab}.$$ Cada numerador se multiplica por el factor correspondiente antes de combinar.',
        },
      ],
    },
    {
      title: 'Denominadores con factores comunes',
      contentLatex:
        'Si los denominadores son polinomios, primero **factorízalos**: el mínimo común denominador es el producto de cada factor distinto elevado a su mayor exponente. Por ejemplo, para $x^2 - 9$ y $(x+3)^2$: $$x^2 - 9 = (x+3)(x-3) \\Rightarrow \\text{MCD} = (x+3)^2(x-3).$$',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Resuelva $\\dfrac{3}{x - 4} + \\dfrac{2}{x + 4}$.',
          solutionLatex:
            'MCD: $(x-4)(x+4)$. Amplificamos: $$\\frac{3(x+4)}{(x-4)(x+4)} + \\frac{2(x-4)}{(x+4)(x-4)} = \\frac{3x + 12 + 2x - 8}{(x-4)(x+4)} = \\frac{5x + 4}{x^2 - 16}.$$',
        },
      ],
    },
    {
      title: 'Dos trucos que evitan errores',
      contentLatex:
        '**Truco 1 — Paréntesis al restar:** $\\dfrac{A}{D} - \\dfrac{B + C}{D} = \\dfrac{A - B - C}{D}$. Nunca dejes el paréntesis "sin repartir" el menos. **Truco 2 — Denominadores opuestos:** si ves $b - a$ y $a - b$, conviértelos: $b - a = -(a - b)$; uno de los signos cambia y las fracciones pasan a tener el mismo denominador.',
      examples: [
        {
          title: 'Ejemplo resuelto: opuestos',
          statementLatex: 'Resuelva $\\dfrac{3}{x - 2} + \\dfrac{2}{2 - x}$.',
          solutionLatex:
            'Como $2 - x = -(x - 2)$: $$\\frac{3}{x-2} - \\frac{2}{x-2} = \\frac{1}{x-2}.$$',
        },
        {
          title: 'Ejemplo resuelto: número entero',
          statementLatex: 'Resuelva $2 - \\dfrac{3}{x - 1}$.',
          solutionLatex:
            'El entero se escribe con denominador $1$ y se amplifica con $(x-1)$: $$\\frac{2(x-1)}{x-1} - \\frac{3}{x-1} = \\frac{2x - 2 - 3}{x-1} = \\frac{2x - 5}{x-1}.$$',
        },
      ],
    },
  ],
  exercises: [
    // ------------------------------------------------------------------ SR-01
    {
      id: 'sr-01',
      title: 'Suma con igual denominador',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{x + 1}{5} + \\frac{x - 3}{5}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2x - 2}{10}$',
          isCorrect: false,
          feedback:
            'No se suman los denominadores: el denominador común ($5$) se conserva una sola vez.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{2x + 2}{5}$',
          isCorrect: false,
          feedback: 'Error de signo: $+1 - 3 = -2$, así que el numerador queda $2x - 2$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{2(x - 1)}{5}$',
          isCorrect: true,
          feedback: 'Correcto. $(x+1) + (x-3) = 2x - 2 = 2(x-1)$ sobre $5$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x - 1}{5}$',
          isCorrect: false,
          feedback: 'Faltó sumar los dos términos completos: ambos numeradores aportan una $x$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Verificamos los denominadores: ambas fracciones tienen $5$, así que ese es el denominador común.',
          mathLatex: '\\text{MCD} = 5',
        },
        {
          stepNumber: 2,
          explanation: 'Con igual denominador, sumamos únicamente los numeradores.',
          mathLatex: '\\frac{(x + 1) + (x - 3)}{5}',
        },
        {
          stepNumber: 3,
          explanation: 'Quitamos el paréntesis y agrupamos términos semejantes.',
          mathLatex: 'x + 1 + x - 3 = 2x - 2',
        },
        {
          stepNumber: 4,
          explanation: 'Factorizamos el numerador para dejarlo en forma compacta.',
          mathLatex: '\\frac{2x - 2}{5} = \\frac{2(x - 1)}{5}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-02
    {
      id: 'sr-02',
      title: 'Resta con igual denominador',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{3x + 2}{4} - \\frac{x - 6}{4}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2x - 4}{4}$',
          isCorrect: false,
          feedback:
            'No distribuiste el signo menos: $-(x - 6)$ cambia ambos signos, queda $-x + 6$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x - 1}{2}$',
          isCorrect: false,
          feedback: 'Los denominadores nunca se suman ni se restan: se conserva el común.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x + 4}{2}$',
          isCorrect: true,
          feedback: 'Correcto. $3x + 2 - x + 6 = 2x + 8$, y $\\frac{2x+8}{4} = \\frac{x+4}{2}$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x + 8}{2}$',
          isCorrect: false,
          feedback:
            'Al simplificar $\\frac{2x+8}{4}$ debes dividir **ambos** términos del numerador entre $2$: queda $\\frac{x+4}{2}$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Mismo denominador $4$: operamos los numeradores.',
          mathLatex: '\\frac{(3x + 2) - (x - 6)}{4}',
        },
        {
          stepNumber: 2,
          explanation:
            'Repartimos el signo menos a TODO el segundo numerador (paréntesis obligatorio).',
          mathLatex: '3x + 2 - x + 6',
        },
        {
          stepNumber: 3,
          explanation: 'Agrupamos términos semejantes.',
          mathLatex: '(3x - x) + (2 + 6) = 2x + 8',
        },
        {
          stepNumber: 4,
          explanation:
            'Escribimos la fracción y simplificamos dividiendo numerador y denominador entre $2$.',
          mathLatex: '\\frac{2x + 8}{4} = \\frac{2(x + 4)}{4} = \\frac{x + 4}{2}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-03
    {
      id: 'sr-03',
      title: 'Suma de monomios distintos',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{3}{x} + \\frac{2}{y}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{5}{xy}$',
          isCorrect: false,
          feedback:
            'Se sumaron también los numeradores como si fueran números sueltos: cada numerador se multiplica por el factor de ampliación ($y$ o $x$).',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{3y + 2x}{xy}$',
          isCorrect: true,
          feedback: 'Correcto. MCD $= xy$; primer numerador $\\times y$, segundo $\\times x$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{3y + 2x}{2xy}$',
          isCorrect: false,
          feedback: 'El denominador común de $x$ e $y$ es $xy$, sin coeficiente extra.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{5x + 5y}{xy}$',
          isCorrect: false,
          feedback:
            'Multiplicaste cada numerador por ambos factores. Solo le toca a cada uno el factor que le falta.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Denominadores distintos: hallamos el mínimo común denominador de $x$ e $y$.',
          mathLatex: '\\text{MCD}(x, y) = xy',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos cada fracción para obtener el MCD abajo.',
          mathLatex: '\\frac{3}{x} \\cdot \\frac{y}{y} + \\frac{2}{y} \\cdot \\frac{x}{x}',
        },
        {
          stepNumber: 3,
          explanation: 'Multiplicamos numeradores y denominadores.',
          mathLatex: '\\frac{3y}{xy} + \\frac{2x}{xy}',
        },
        {
          stepNumber: 4,
          explanation: 'Combinamos los numeradores sobre el mismo denominador.',
          mathLatex: '\\frac{3y + 2x}{xy}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-04
    {
      id: 'sr-04',
      title: 'Resta de monomios distintos',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{5}{a} - \\frac{3}{b}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2}{ab}$',
          isCorrect: false,
          feedback:
            'Los numeradores no se restan directamente: primero se amplifican ($5 \\cdot b$ y $3 \\cdot a$).',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{5b - 3a}{ab}$',
          isCorrect: true,
          feedback:
            'Correcto. Amplificando: $\\frac{5b}{ab} - \\frac{3a}{ab} = \\frac{5b - 3a}{ab}$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{5a - 3b}{ab}$',
          isCorrect: false,
          feedback:
            'Cruzarste los factores: a $5$ le corresponde multiplicar por $b$ (el denominador ajeno), no por $a$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{5b - 3b}{ab}$',
          isCorrect: false,
          feedback: 'La segunda fracción se multiplica por $a$, no por $b$: debe quedar $3a$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Mínimo común denominador de $a$ y $b$.',
          mathLatex: '\\text{MCD} = ab',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos: la primera por $b$, la segunda por $a$.',
          mathLatex: '\\frac{5b}{ab} - \\frac{3a}{ab}',
        },
        {
          stepNumber: 3,
          explanation: 'Restamos los numeradores ya compatibles.',
          mathLatex: '\\frac{5b - 3a}{ab}',
        },
        {
          stepNumber: 4,
          explanation: 'El numerador $5b - 3a$ no tiene factores comunes: la expresión queda así.',
          mathLatex: '\\frac{5b - 3a}{ab}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-05
    {
      id: 'sr-05',
      title: 'MCM con coeficientes',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{1}{2x} + \\frac{1}{3y}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2}{5xy}$',
          isCorrect: false,
          feedback:
            'Ni los denominadores ($2+3$) ni los numeradores se suman así. Calcula el MCM real: $6xy$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{3y + 2x}{6}$',
          isCorrect: false,
          feedback: 'Olvidaste incluir las variables en el denominador común: es $6xy$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{3y + 2x}{5xy}$',
          isCorrect: false,
          feedback: 'El MCM de $2x$ y $3y$ es $6xy$ (MCM de $2$ y $3$ es $6$), no $5xy$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{3y + 2x}{6xy}$',
          isCorrect: true,
          feedback: 'Correcto. MCM $= 6xy$; amplificas por $3y$ y por $2x$ respectivamente.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'MCM de los coeficientes: $\\text{MCM}(2, 3) = 6$. Variables distintas: van ambas.',
          mathLatex: '\\text{MCD} = 6xy',
        },
        {
          stepNumber: 2,
          explanation:
            'Primera fracción: $6xy \\div 2x = 3y$; amplificamos numerador y denominador.',
          mathLatex: '\\frac{1 \\cdot 3y}{2x \\cdot 3y} = \\frac{3y}{6xy}',
        },
        {
          stepNumber: 3,
          explanation: 'Segunda fracción: $6xy \\div 3y = 2x$.',
          mathLatex: '\\frac{1 \\cdot 2x}{3y \\cdot 2x} = \\frac{2x}{6xy}',
        },
        {
          stepNumber: 4,
          explanation: 'Sumamos los numeradores.',
          mathLatex: '\\frac{3y + 2x}{6xy}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-06
    {
      id: 'sr-06',
      title: 'Resta con potencias',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{7}{4a^2} - \\frac{1}{6ab}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{21b - 2a}{12a^2b}$',
          isCorrect: true,
          feedback: 'Correcto. MCD $= 12a^2b$; factores de ampliación $3b$ y $2a$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{21b - a}{12a^2b}$',
          isCorrect: false,
          feedback:
            'En la segunda fracción el factor de ampliación es $2a$: el numerador $1$ se multiplica completo, queda $2a$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{7b - a}{24a^3b}$',
          isCorrect: false,
          feedback:
            'El MCM de $4$ y $6$ es $12$, y las variables se toman con su MAYOR potencia ($a^2$), no multiplicadas entre sí.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{42b - 2a}{24a^2b}$',
          isCorrect: false,
          feedback:
            'Usaste $24a^2b$ como denominador (no es el mínimo). Simplificando tu resultado llegarías a otro valor incorrecto porque el numerador está duplicado.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Coeficientes: $\\text{MCM}(4, 6) = 12$. Variables: mayor potencia de $a$ es $a^2$, más $b$.',
          mathLatex: '\\text{MCD} = 12a^2b',
        },
        {
          stepNumber: 2,
          explanation: 'Factor de ampliación de la primera fracción: $12a^2b \\div 4a^2 = 3b$.',
          mathLatex: '\\frac{7 \\cdot 3b}{4a^2 \\cdot 3b} = \\frac{21b}{12a^2b}',
        },
        {
          stepNumber: 3,
          explanation: 'Factor de ampliación de la segunda: $12a^2b \\div 6ab = 2a$.',
          mathLatex: '\\frac{1 \\cdot 2a}{6ab \\cdot 2a} = \\frac{2a}{12a^2b}',
        },
        {
          stepNumber: 4,
          explanation: 'Restamos los numeradores.',
          mathLatex: '\\frac{21b - 2a}{12a^2b}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-07
    {
      id: 'sr-07',
      title: 'Binomios distintos',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{1}{x + 1} + \\frac{1}{x + 2}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2}{2x + 3}$',
          isCorrect: false,
          feedback: 'Los denominadores no se suman. El MCD es el producto $(x+1)(x+2)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{2x + 3}{(x + 1)(x + 2)}$',
          isCorrect: true,
          feedback: 'Correcto. $(x+2) + (x+1) = 2x + 3$ sobre el producto de denominadores.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x + 3}{(x + 1)(x + 2)}$',
          isCorrect: false,
          feedback:
            'Perdiste una $x$: al amplificar, cada numerador se multiplica por el binomio completo, dando $x + 2$ y $x + 1$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{2}{(x + 1)(x + 2)}$',
          isCorrect: false,
          feedback:
            'Dejaste los numeradores sin amplificar: deben multiplicarse por $(x+2)$ y $(x+1)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Los binomios $x + 1$ y $x + 2$ son primos entre sí: el MCD es su producto.',
          mathLatex: '\\text{MCD} = (x + 1)(x + 2)',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos cada fracción con el binomio que le falta.',
          mathLatex: '\\frac{(x + 2)}{(x+1)(x+2)} + \\frac{(x + 1)}{(x+1)(x+2)}',
        },
        {
          stepNumber: 3,
          explanation: 'Sumamos los numeradores.',
          mathLatex: '\\frac{(x + 2) + (x + 1)}{(x + 1)(x + 2)}',
        },
        {
          stepNumber: 4,
          explanation: 'Simplificamos el numerador.',
          mathLatex: '\\frac{2x + 3}{(x + 1)(x + 2)}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-08
    {
      id: 'sr-08',
      title: 'Denominadores opuestos',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{3}{x - 2} + \\frac{2}{2 - x}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{1}{x - 2}$',
          isCorrect: true,
          feedback:
            'Correcto. Como $2 - x = -(x-2)$, la suma se convierte en resta: $\\frac{3 - 2}{x-2}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{5}{x - 2}$',
          isCorrect: false,
          feedback:
            'El segundo denominador es el opuesto: al igualarlo aparece un signo menos, así que se RESTA $2$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{5}{(x-2)(2-x)}$',
          isCorrect: false,
          feedback:
            'No hace falta multiplicar los denominadores: son opuestos y basta convertir uno en el otro.',
        },
        {
          id: 'd',
          labelLatex: '$-\\dfrac{1}{x - 2}$',
          isCorrect: false,
          feedback: 'Cambiaste dos signos en lugar de uno: $3 - 2 = 1$, positivo.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Detectamos denominadores opuestos: $2 - x = -(x - 2)$.',
          mathLatex: '2 - x = -(x - 2)',
        },
        {
          stepNumber: 2,
          explanation: 'Reescribimos la segunda fracción; el signo extra cambia la suma por resta.',
          mathLatex: '\\frac{3}{x-2} + \\frac{2}{-(x-2)} = \\frac{3}{x-2} - \\frac{2}{x-2}',
        },
        {
          stepNumber: 3,
          explanation: 'Ahora con igual denominador, restamos numeradores.',
          mathLatex: '\\frac{3 - 2}{x - 2}',
        },
        { stepNumber: 4, explanation: 'Resultado.', mathLatex: '\\frac{1}{x - 2}' },
      ],
    },
    // ------------------------------------------------------------------ SR-09
    {
      id: 'sr-09',
      title: 'Resta que exige distribuir',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{x + 3}{x - 1} - \\frac{2x - 1}{x - 1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{-x + 2}{x - 1}$',
          isCorrect: false,
          feedback:
            'Sin distribuir el menos escribiste $x + 3 - 2x - 1$. El $-1$ debe convertirse en $+1$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{-x + 4}{x - 1}$',
          isCorrect: true,
          feedback: 'Correcto. $x + 3 - 2x + 1 = -x + 4$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x - 2}{x - 1}$',
          isCorrect: false,
          feedback: 'Signo de la $x$ incorrecto: $x - 2x = -x$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{3x + 4}{x - 1}$',
          isCorrect: false,
          feedback:
            'Restaste como si fuera $2x + (2x - 1)$... revisa: la operación entre numeradores es una resta, no una suma.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Igual denominador: combinamos numeradores usando paréntesis.',
          mathLatex: '\\frac{(x + 3) - (2x - 1)}{x - 1}',
        },
        {
          stepNumber: 2,
          explanation: 'Distribuimos el signo menos a ambos términos del segundo numerador.',
          mathLatex: 'x + 3 - 2x + 1',
        },
        {
          stepNumber: 3,
          explanation: 'Agrupamos semejantes.',
          mathLatex: '(x - 2x) + (3 + 1) = -x + 4',
        },
        {
          stepNumber: 4,
          explanation: 'Resultado sobre el denominador común.',
          mathLatex: '\\frac{-x + 4}{x - 1}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-10
    {
      id: 'sr-10',
      title: 'Suma con conjugados',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{3}{x - 4} + \\frac{2}{x + 4}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{5}{x^2 - 16}$',
          isCorrect: false,
          feedback:
            'Amplificaste mal: los numeradores se multiplican por los binomios completos ($x+4$ y $x-4$), quedando $3x+12$ y $2x-8$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{5x + 20}{x^2 - 16}$',
          isCorrect: false,
          feedback:
            'En la segunda fracción el factor es $(x - 4)$, así que aporta $2x - 8$, no $2x + 8$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{5x + 4}{x^2 - 16}$',
          isCorrect: true,
          feedback: 'Correcto. $3(x+4) + 2(x-4) = 3x + 12 + 2x - 8 = 5x + 4$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x + 20}{x^2 - 16}$',
          isCorrect: false,
          feedback: 'Revisa la suma de términos semejantes: $3x + 2x = 5x$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Los denominadores $x - 4$ y $x + 4$ son distintos: el MCD es su producto.',
          mathLatex: '\\text{MCD} = (x-4)(x+4)',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos cada fracción.',
          mathLatex: '\\frac{3(x + 4)}{(x-4)(x+4)} + \\frac{2(x - 4)}{(x-4)(x+4)}',
        },
        {
          stepNumber: 3,
          explanation: 'Desarrollamos los numeradores.',
          mathLatex: '3x + 12 \\quad ; \\quad 2x - 8',
        },
        {
          stepNumber: 4,
          explanation: 'Sumamos y agrupamos.',
          mathLatex: '(3x + 2x) + (12 - 8) = 5x + 4',
        },
        {
          stepNumber: 5,
          explanation: 'Escribimos el denominador desarrollado.',
          mathLatex: '\\frac{5x + 4}{(x-4)(x+4)} = \\frac{5x + 4}{x^2 - 16}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-11
    {
      id: 'sr-11',
      title: 'Resta con conjugados',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{5}{x - 3} - \\frac{2}{x + 3}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{3}{x^2 - 9}$',
          isCorrect: false,
          feedback: 'Los numeradores deben amplificarse con los binomios: $5(x+3)$ y $2(x-3)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{3x + 21}{x^2 - 9}$',
          isCorrect: true,
          feedback: 'Correcto. $5(x+3) - 2(x-3) = 5x + 15 - 2x + 6 = 3x + 21 = 3(x + 7)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{3x + 9}{x^2 - 9}$',
          isCorrect: false,
          feedback: 'No distribuiste el signo menos: $-2(x-3) = -2x + 6$, no $-2x - 6$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{7x - 21}{x^2 - 9}$',
          isCorrect: false,
          feedback: 'Sumaste $5x + 2x$ en vez de restar: la operación original es una resta.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'MCD: producto de los conjugados.',
          mathLatex: '\\text{MCD} = (x-3)(x+3) = x^2 - 9',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos.',
          mathLatex: '\\frac{5(x + 3)}{x^2 - 9} - \\frac{2(x - 3)}{x^2 - 9}',
        },
        {
          stepNumber: 3,
          explanation: 'Desarrollamos cuidando el signo menos.',
          mathLatex: '5x + 15 - 2x + 6',
        },
        { stepNumber: 4, explanation: 'Combinamos semejantes.', mathLatex: '3x + 21' },
        {
          stepNumber: 5,
          explanation: 'Factorizamos el numerador (factor común $3$).',
          mathLatex: '\\frac{3x + 21}{x^2 - 9} = \\frac{3(x + 7)}{x^2 - 9}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-12
    {
      id: 'sr-12',
      title: 'MCD tras factorizar',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{1}{x^2 - 9} + \\frac{1}{(x + 3)^2}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2x}{(x + 3)^2(x - 3)}$',
          isCorrect: true,
          feedback: 'Correcto. MCD $= (x+3)^2(x-3)$; los numeradores suman $(x+3) + (x-3) = 2x$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{2}{(x+3)^2(x-3)}$',
          isCorrect: false,
          feedback:
            'Amplificar no significa conservar el $1$: cada numerador se multiplica por el factor que falta, dando $(x+3)$ y $(x-3)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{2x + 6}{(x + 3)^2(x - 3)}$',
          isCorrect: false,
          feedback:
            'En el primer numerador el factor es $(x + 3)$, que ya está simplificado: no hay un $+6$ adicional.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{2x}{(x + 3)(x - 3)^2}$',
          isCorrect: false,
          feedback:
            'El cuadrado pertenece a $(x + 3)$ (viene de $\\frac{1}{(x+3)^2}$), no a $(x - 3)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el primer denominador para comparar factores.',
          mathLatex: 'x^2 - 9 = (x+3)(x-3)',
        },
        {
          stepNumber: 2,
          explanation: 'MCD: tomamos cada factor con su mayor exponente.',
          mathLatex: '\\text{MCD} = (x+3)^2(x-3)',
        },
        {
          stepNumber: 3,
          explanation: 'Amplificamos: primera fracción por $(x+3)$; segunda por $(x-3)$.',
          mathLatex: '\\frac{(x+3)}{(x+3)^2(x-3)} + \\frac{(x-3)}{(x+3)^2(x-3)}',
        },
        { stepNumber: 4, explanation: 'Sumamos numeradores.', mathLatex: '(x + 3) + (x - 3) = 2x' },
        { stepNumber: 5, explanation: 'Resultado.', mathLatex: '\\frac{2x}{(x + 3)^2(x - 3)}' },
      ],
    },
    // ------------------------------------------------------------------ SR-13
    {
      id: 'sr-13',
      title: 'Monomio más binomio',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{2}{x} + \\frac{3}{x + 1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{5}{x(x + 1)}$',
          isCorrect: false,
          feedback:
            'Sumaste los numeradores sin amplificarlos: cada uno se multiplica por el factor que le falta.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{5x + 1}{x(x + 1)}$',
          isCorrect: false,
          feedback: 'Casi: $2(x + 1) = 2x + 2$, no $2x + 1$. Distribuye el $2$ completo.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{5x + 2}{x(x + 1)}$',
          isCorrect: true,
          feedback: 'Correcto. $2(x+1) + 3x = 2x + 2 + 3x = 5x + 2$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{2x + 5}{x(x + 1)}$',
          isCorrect: false,
          feedback:
            'Intercambiaste los factores de ampliación: al $2$ le toca $(x + 1)$ y al $3$ le toca $x$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Denominadores distintos ($x$ y $x + 1$): el MCD es su producto.',
          mathLatex: '\\text{MCD} = x(x + 1)',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos la primera fracción con $(x + 1)$.',
          mathLatex: '\\frac{2(x + 1)}{x(x + 1)}',
        },
        {
          stepNumber: 3,
          explanation: 'Amplificamos la segunda con $x$.',
          mathLatex: '\\frac{3x}{x(x + 1)}',
        },
        {
          stepNumber: 4,
          explanation: 'Desarrollamos el primer numerador.',
          mathLatex: '2(x + 1) = 2x + 2',
        },
        {
          stepNumber: 5,
          explanation: 'Sumamos y agrupamos semejantes.',
          mathLatex: '\\frac{2x + 2 + 3x}{x(x+1)} = \\frac{5x + 2}{x(x + 1)}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-14
    {
      id: 'sr-14',
      title: 'Resta monomio-binomio',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{4}{x + 2} - \\frac{3}{x}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x - 6}{x(x + 2)}$',
          isCorrect: true,
          feedback: 'Correcto. $4x - 3(x + 2) = 4x - 3x - 6 = x - 6$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x + 6}{x(x + 2)}$',
          isCorrect: false,
          feedback: 'No distribuiste el signo menos: $-3(x + 2) = -3x - 6$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{7x - 12}{x(x + 2)}$',
          isCorrect: false,
          feedback: 'Sumaste en lugar de restar: la operación entre las fracciones es una resta.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{1}{x(x + 2)}$',
          isCorrect: false,
          feedback: 'Restaste los numeradores como números sueltos ($4 - 3$). Primero amplifica.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'MCD: producto $x(x + 2)$.',
          mathLatex: '\\text{MCD} = x(x + 2)',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos: la primera por $x$, la segunda por $(x + 2)$.',
          mathLatex: '\\frac{4x}{x(x+2)} - \\frac{3(x + 2)}{x(x + 2)}',
        },
        {
          stepNumber: 3,
          explanation: 'Desarrollamos el segundo numerador con paréntesis.',
          mathLatex: '3(x + 2) = 3x + 6',
        },
        {
          stepNumber: 4,
          explanation: 'Restamos distribuyendo el menos.',
          mathLatex: '4x - (3x + 6) = 4x - 3x - 6',
        },
        { stepNumber: 5, explanation: 'Resultado.', mathLatex: '\\frac{x - 6}{x(x + 2)}' },
      ],
    },
    // ------------------------------------------------------------------ SR-15
    {
      id: 'sr-15',
      title: 'Entero menos fracción',
      statementLatex: 'Resuelva la siguiente operación: $$2 - \\frac{3}{x - 1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{-1}{x - 1}$',
          isCorrect: false,
          feedback:
            'El entero debe escribirse como fracción con denominador $(x - 1)$ antes de restar.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{2x - 5}{x - 1}$',
          isCorrect: true,
          feedback: 'Correcto. $\\frac{2(x-1) - 3}{x-1} = \\frac{2x - 2 - 3}{x - 1}$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{2x - 1}{x - 1}$',
          isCorrect: false,
          feedback: 'Olvidaste el $-2$ que aporta el desarrollo de $2(x - 1)$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{5 - 2x}{x - 1}$',
          isCorrect: false,
          feedback:
            'Invertiste el orden de la resta: primero va $2(x - 1)$ y luego se le resta el $3$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Escribimos el $2$ como fracción con denominador $1$.',
          mathLatex: '2 = \\frac{2}{1}',
        },
        {
          stepNumber: 2,
          explanation: 'Igualamos denominadores amplificando con $(x - 1)$.',
          mathLatex: '\\frac{2}{1} = \\frac{2(x - 1)}{x - 1}',
        },
        {
          stepNumber: 3,
          explanation: 'Desarrollamos el numerador.',
          mathLatex: '2(x - 1) = 2x - 2',
        },
        {
          stepNumber: 4,
          explanation: 'Restamos la fracción original.',
          mathLatex: '\\frac{2x - 2 - 3}{x - 1}',
        },
        {
          stepNumber: 5,
          explanation: 'Simplificamos el numerador.',
          mathLatex: '\\frac{2x - 5}{x - 1}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-16
    {
      id: 'sr-16',
      title: 'Términos en serie',
      statementLatex: 'Resuelva la siguiente operación: $$1 + \\frac{1}{x} + \\frac{1}{x^2}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{3}{x^3}$',
          isCorrect: false,
          feedback:
            'Ni los numeradores ni los exponentes se suman así: usa el MCD $x^2$ y amplifica término a término.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x^2 + x + 1}{x^2}$',
          isCorrect: true,
          feedback: 'Correcto. El $1$ se convierte en $x^2/x^2$; todo queda sobre $x^2$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x^2 + x + 1}{x^3}$',
          isCorrect: false,
          feedback: 'El denominador común es la mayor potencia, $x^2$, no su cubo.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x^2 + 1}{x^2}$',
          isCorrect: false,
          feedback: 'Perdiste el término $1/x$: amplificado con $x^2$ aporta un $x$ al numerador.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Denominadores implicados: $1$, $x$ y $x^2$. El MCD es $x^2$.',
          mathLatex: '\\text{MCD} = x^2',
        },
        {
          stepNumber: 2,
          explanation: 'El entero $1$ se amplifica con $x^2$.',
          mathLatex: '1 = \\frac{x^2}{x^2}',
        },
        {
          stepNumber: 3,
          explanation: 'La fracción $\\frac{1}{x}$ se amplifica con $x$.',
          mathLatex: '\\frac{1}{x} = \\frac{x}{x^2}',
        },
        { stepNumber: 4, explanation: 'La última ya tiene el MCD.', mathLatex: '\\frac{1}{x^2}' },
        {
          stepNumber: 5,
          explanation: 'Sumamos los tres numeradores.',
          mathLatex: '\\frac{x^2 + x + 1}{x^2}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-17
    {
      id: 'sr-17',
      title: 'TCP en el denominador',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{1}{x^2 - 6x + 9} - \\frac{1}{x - 3}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{4 - x}{(x - 3)^2}$',
          isCorrect: true,
          feedback: 'Correcto. MCD $= (x-3)^2$; numerador $1 - (x - 3) = 4 - x$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x - 2}{(x - 3)^2}$',
          isCorrect: false,
          feedback: 'Signo invertido: $-(x - 3) = -x + 3$, así que $1 - x + 3 = 4 - x$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{2 - x}{(x - 3)^2}$',
          isCorrect: false,
          feedback: 'Revisa la suma: $1 + 3 = 4$, no $2$.',
        },
        {
          id: 'd',
          labelLatex: '$0$',
          isCorrect: false,
          feedback:
            'No se cancelan los unos: el segundo numerador amplificado es $(x - 3)$, no $1$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el trinomio cuadrado perfecto.',
          mathLatex: 'x^2 - 6x + 9 = (x - 3)^2',
        },
        {
          stepNumber: 2,
          explanation: 'Comparando $(x-3)^2$ con $(x-3)$, el MCD es el de mayor exponente.',
          mathLatex: '\\text{MCD} = (x - 3)^2',
        },
        {
          stepNumber: 3,
          explanation: 'Amplificamos la segunda fracción con $(x - 3)$.',
          mathLatex: '\\frac{1}{(x-3)^2} - \\frac{(x - 3)}{(x - 3)^2}',
        },
        {
          stepNumber: 4,
          explanation: 'Restamos usando paréntesis y distribuimos el menos.',
          mathLatex: '1 - (x - 3) = 1 - x + 3',
        },
        { stepNumber: 5, explanation: 'Resultado final.', mathLatex: '\\frac{4 - x}{(x - 3)^2}' },
      ],
    },
    // ------------------------------------------------------------------ SR-18
    {
      id: 'sr-18',
      title: 'Tres fracciones consecutivas',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{1}{x} + \\frac{1}{x + 1} - \\frac{1}{x + 2}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x^2 + 4x + 2}{x(x + 1)(x + 2)}$',
          isCorrect: true,
          feedback: 'Correcto. Numerador: $(x+1)(x+2) + x(x+2) - x(x+1) = x^2 + 4x + 2$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x^2 + 2x + 2}{x(x + 1)(x + 2)}$',
          isCorrect: false,
          feedback: 'Revisa el desarrollo de $(x+1)(x+2)$: da $x^2 + 3x + 2$, no $x^2 + x$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{1}{x(x + 1)(x + 2)}$',
          isCorrect: false,
          feedback:
            'Los numeradores deben multiplicarse por los binomios completos antes de combinar.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{3}{x + 1}$',
          isCorrect: false,
          feedback: 'Los denominadores nunca se combinan entre sí: se toma el MCD y se conserva.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Los tres denominadores son primos entre sí: el MCD es el producto de los tres.',
          mathLatex: '\\text{MCD} = x(x + 1)(x + 2)',
        },
        {
          stepNumber: 2,
          explanation: 'Amplificamos cada fracción con lo que le falta.',
          mathLatex:
            '\\frac{(x+1)(x+2)}{\\text{MCD}} + \\frac{x(x+2)}{\\text{MCD}} - \\frac{x(x+1)}{\\text{MCD}}',
        },
        {
          stepNumber: 3,
          explanation: 'Desarrollamos cada producto.',
          mathLatex: '(x+1)(x+2) = x^2 + 3x + 2; \\quad x(x+2) = x^2 + 2x; \\quad x(x+1) = x^2 + x',
        },
        {
          stepNumber: 4,
          explanation: 'Combinamos respetando el signo menos del último término.',
          mathLatex: '(x^2 + 3x + 2) + (x^2 + 2x) - (x^2 + x)',
        },
        {
          stepNumber: 5,
          explanation: 'Agrupamos semejantes: dos de los $x^2$ se cancelan y queda uno.',
          mathLatex: 'x^2 + (3x + 2x - x) + 2 = x^2 + 4x + 2',
        },
        {
          stepNumber: 6,
          explanation: 'Resultado sobre el MCD.',
          mathLatex: '\\frac{x^2 + 4x + 2}{x(x + 1)(x + 2)}',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-19
    {
      id: 'sr-19',
      title: 'Simplificación previa',
      statementLatex: 'Resuelva la siguiente operación: $$\\frac{x^2 - 25}{x + 5} - (x - 5)$$',
      options: [
        {
          id: 'a',
          labelLatex: '$x - 5$',
          isCorrect: false,
          feedback:
            'Te detuviste en la simplificación de la fracción: aún falta restarle $(x - 5)$.',
        },
        {
          id: 'b',
          labelLatex: '$2x - 10$',
          isCorrect: false,
          feedback: 'Sumaste en lugar de restar: la operación indica fracción MENOS $(x - 5)$.',
        },
        {
          id: 'c',
          labelLatex: '$0$',
          isCorrect: true,
          feedback: 'Correcto. La fracción simplifica a $x - 5$, y $x - 5 - (x - 5) = 0$.',
        },
        {
          id: 'd',
          labelLatex: '$10$',
          isCorrect: false,
          feedback:
            'Los términos con $x$ se cancelan entre sí y también las constantes: queda $0$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el numerador como diferencia de cuadrados.',
          mathLatex: 'x^2 - 25 = (x + 5)(x - 5)',
        },
        {
          stepNumber: 2,
          explanation: 'Cancelamos el factor común $(x + 5)$.',
          mathLatex: '\\frac{(x + 5)(x - 5)}{x + 5} = x - 5',
        },
        {
          stepNumber: 3,
          explanation: 'Reescribimos la operación completa ya simplificada.',
          mathLatex: '(x - 5) - (x - 5)',
        },
        {
          stepNumber: 4,
          explanation: 'Restamos término a término.',
          mathLatex: 'x - 5 - x + 5 = 0',
        },
      ],
    },
    // ------------------------------------------------------------------ SR-20
    {
      id: 'sr-20',
      title: 'Combinación final',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{6}{x^2 - 4} + \\frac{3}{x + 2} - \\frac{2}{x - 2}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x - 4}{x^2 - 4}$',
          isCorrect: true,
          feedback: 'Correcto. Sobre el MCD $(x+2)(x-2)$: $6 + 3(x - 2) - 2(x + 2) = x - 4$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x + 8}{x^2 - 4}$',
          isCorrect: false,
          feedback: 'Errores de signo al distribuir: $3(x - 2) = 3x - 6$ y $-2(x + 2) = -2x - 4$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{7}{x^2 - 4}$',
          isCorrect: false,
          feedback:
            'Dejaste los numeradores sin amplificar: cada binomio multiplica también al numerador.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{5x - 10}{x^2 - 4}$',
          isCorrect: false,
          feedback:
            'El $6$ del primer numerador participa en la suma completa: $6 + 3x - 6 - 2x - 4$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el primer denominador.',
          mathLatex: 'x^2 - 4 = (x + 2)(x - 2)',
        },
        {
          stepNumber: 2,
          explanation: 'Las otras dos fracciones aportan justo esos factores: ese es el MCD.',
          mathLatex: '\\text{MCD} = (x + 2)(x - 2) = x^2 - 4',
        },
        {
          stepNumber: 3,
          explanation: 'Amplificamos las tres fracciones.',
          mathLatex:
            '\\frac{6}{(x+2)(x-2)} + \\frac{3(x - 2)}{(x+2)(x-2)} - \\frac{2(x + 2)}{(x+2)(x-2)}',
        },
        {
          stepNumber: 4,
          explanation: 'Desarrollamos los numeradores cuidando los signos.',
          mathLatex: '6 \\quad ; \\quad 3x - 6 \\quad ; \\quad -(2x + 4) = -2x - 4',
        },
        {
          stepNumber: 5,
          explanation: 'Sumamos todos los aportes.',
          mathLatex: '6 + (3x - 6) - (2x + 4)',
        },
        {
          stepNumber: 6,
          explanation: 'Agrupamos semejantes: los $6$ y $-6$ se cancelan.',
          mathLatex: '(3x - 2x) + (6 - 6 - 4) = x - 4',
        },
        { stepNumber: 7, explanation: 'Resultado final.', mathLatex: '\\frac{x - 4}{x^2 - 4}' },
      ],
    },
  ],
};

export const sumaRestaUnits: PracticeUnit[] = [sumaRestaRacionales];
