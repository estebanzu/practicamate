// Generado por tools/gen_practica02.py — no editar a mano.
import type { PracticeUnit } from './practices';

export const practica02Units: PracticeUnit[] = [
  {
    id: 'p2-factor-comun',
    title: 'Factor común · Práctica 2',
    subject: 'Álgebra',
    description:
      'Extracción del factor común monomio de un polinomio (práctica adicional 2, sección 1).',
    topic: 'factor-comun',
    method: 'factor-comun',
    theory: [
      {
        title: 'Factor común monomio',
        contentLatex:
          'Para extraer un factor común se calcula el máximo común divisor (MCD) de los coeficientes y se toma la menor potencia de cada variable que aparezca en todos los términos. Luego se divide cada término entre el factor común.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $18x^{3}y + 12x^{2}y + 2xy$.',
            solutionLatex:
              'El MCD de $18$, $12$ y $2$ es $2$; la menor potencia de $x$ es $x$ y la de $y$ es $y$. El factor común es $2xy$. Al dividir cada término: $18x^{3}y \\div 2xy = 9x^{2}$, $12x^{2}y \\div 2xy = 6x$ y $2xy \\div 2xy = 1$. Entonces: $$18x^{3}y + 12x^{2}y + 2xy = 2xy(9x^{2} + 6x + 1).$$',
          },
          {
            title: 'Factor común polinómico',
            statementLatex: 'Factorice $5x(y+1)^{2} - 13m(y+1)^{2} + 4n(y+1)^{2}$.',
            solutionLatex:
              'El paréntesis $(y+1)^{2}$ se repite en todos los términos. Extraemos $(y+1)^{2}$ y dividimos cada término: $$5x(y+1)^{2} - 13m(y+1)^{2} + 4n(y+1)^{2} = (y+1)^{2}(5x - 13m + 4n).$$',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'p2-factor-comun-01',
        title: 'Factor común',
        statementLatex: '18x^{3}y + 12x^{2}y + 2xy',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculamos el máximo común divisor de los coeficientes.',
            mathLatex: 'MCD(18, 12, 2) = 2',
          },
          {
            stepNumber: 2,
            explanation: 'El menor exponente de cada variable común a todos los términos.',
            mathLatex: '2 x y',
          },
          {
            stepNumber: 3,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '2 x y \\div 2 x y = 1 \\; ; \\; 12 x^{2} y \\div 2 x y = 6 x \\; ; \\; 18 x^{3} y \\div 2 x y = 9 x^{2}',
          },
          {
            stepNumber: 4,
            explanation:
              'Escribimos el polinomio como el producto del factor común por el cociente.',
            mathLatex: '2 x y(9 x^{2} + 6 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '2 x y (9 x^{2} + 6 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '9 x^{2} + 2 x y + 6 x + 1',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- 2 x y (9 x^{2} + 6 x + 1)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '2 x y (9 x^{2} + 2 x y + 6 x)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-02',
        title: 'Factor común',
        statementLatex: '48x^{4}y + 24x^{3}y + 3x^{2}y',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculamos el máximo común divisor de los coeficientes.',
            mathLatex: 'MCD(48, 24, 3) = 3',
          },
          {
            stepNumber: 2,
            explanation: 'El menor exponente de cada variable común a todos los términos.',
            mathLatex: '3 x^{2} y',
          },
          {
            stepNumber: 3,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '3 x^{2} y \\div 3 x^{2} y = 1 \\; ; \\; 24 x^{3} y \\div 3 x^{2} y = 8 x \\; ; \\; 48 x^{4} y \\div 3 x^{2} y = 16 x^{2}',
          },
          {
            stepNumber: 4,
            explanation:
              'Escribimos el polinomio como el producto del factor común por el cociente.',
            mathLatex: '3 x^{2} y(16 x^{2} + 8 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '3 x^{2} y (16 x^{2} + 8 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '3 x^{2} y + 16 x^{2} + 8 x + 1',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- 3 x^{2} y (16 x^{2} + 8 x + 1)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '3 x^{2} y (3 x^{2} y + 16 x^{2} + 8 x)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-03',
        title: 'Factor común',
        statementLatex: '4x^{3}cy^{3} + 16x^{2}by^{3} + 16axy^{3}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculamos el máximo común divisor de los coeficientes.',
            mathLatex: 'MCD(4, 16, 16) = 4',
          },
          {
            stepNumber: 2,
            explanation: 'El menor exponente de cada variable común a todos los términos.',
            mathLatex: '4 x y^{3}',
          },
          {
            stepNumber: 3,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '4 c x^{3} y^{3} \\div 4 x y^{3} = c x^{2} \\; ; \\; 16 a x y^{3} \\div 4 x y^{3} = 4 a \\; ; \\; 16 b x^{2} y^{3} \\div 4 x y^{3} = 4 b x',
          },
          {
            stepNumber: 4,
            explanation:
              'Escribimos el polinomio como el producto del factor común por el cociente.',
            mathLatex: '4 x y^{3}(4 a + 4 b x + c x^{2})',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '4 x y^{3} (4 a + 4 b x + c x^{2})',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '4 a + 4 b x + c x^{2} + 4 x y^{3}',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- 4 x y^{3} (4 a + 4 b x + c x^{2})',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '4 x y^{3} (4 a + 4 b x + 4 c x^{3} y^{3})',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-04',
        title: 'Factor común',
        statementLatex: '50x^{2}y^{3} - 80y^{3} + 32y',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculamos el máximo común divisor de los coeficientes.',
            mathLatex: 'MCD(50, -80, 32) = 2',
          },
          {
            stepNumber: 2,
            explanation: 'El menor exponente de cada variable común a todos los términos.',
            mathLatex: '2 y',
          },
          {
            stepNumber: 3,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '- 80 y^{3} \\div 2 y = - 40 y^{2} \\; ; \\; 32 y \\div 2 y = 16 \\; ; \\; 50 x^{2} y^{3} \\div 2 y = 25 x^{2} y^{2}',
          },
          {
            stepNumber: 4,
            explanation:
              'Escribimos el polinomio como el producto del factor común por el cociente.',
            mathLatex: '2 y(25 x^{2} y^{2} - 40 y^{2} + 16)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '2 y (25 x^{2} y^{2} - 40 y^{2} + 16)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '25 x^{2} y^{2} - 40 y^{2} + 2 y + 16',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- 2 y (25 x^{2} y^{2} - 40 y^{2} + 16)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '2 y (25 x^{2} y^{2} - 80 y^{3} + 16)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-05',
        title: 'Factor común',
        statementLatex: '24x^{3}y^{5} - 15xy + 32y',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculamos el máximo común divisor de los coeficientes.',
            mathLatex: 'MCD(24, -15, 32) = 1',
          },
          {
            stepNumber: 2,
            explanation: 'El menor exponente de cada variable común a todos los términos.',
            mathLatex: 'y',
          },
          {
            stepNumber: 3,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '32 y \\div y = 32 \\; ; \\; - 15 x y \\div y = - 15 x \\; ; \\; 24 x^{3} y^{5} \\div y = 24 x^{3} y^{4}',
          },
          {
            stepNumber: 4,
            explanation:
              'Escribimos el polinomio como el producto del factor común por el cociente.',
            mathLatex: 'y(24 x^{3} y^{4} - 15 x + 32)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: 'y (24 x^{3} y^{4} - 15 x + 32)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '24 x^{3} y^{4} - 15 x + y + 32',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- y (24 x^{3} y^{4} - 15 x + 32)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: 'y (24 x^{3} y^{4} - 15 x + 32 y)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-06',
        title: 'Factor común',
        statementLatex: '39x^{2}y^{2}m + 16x^{4}my^{3} + 48n^{3}x^{3}y^{3}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Calculamos el máximo común divisor de los coeficientes.',
            mathLatex: 'MCD(16, 48, 39) = 1',
          },
          {
            stepNumber: 2,
            explanation: 'El menor exponente de cada variable común a todos los términos.',
            mathLatex: 'x^{2} y^{2}',
          },
          {
            stepNumber: 3,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '16 m x^{4} y^{3} \\div x^{2} y^{2} = 16 m x^{2} y \\; ; \\; 39 m x^{2} y^{2} \\div x^{2} y^{2} = 39 m \\; ; \\; 48 n^{3} x^{3} y^{3} \\div x^{2} y^{2} = 48 n^{3} x y',
          },
          {
            stepNumber: 4,
            explanation:
              'Escribimos el polinomio como el producto del factor común por el cociente.',
            mathLatex: 'x^{2} y^{2}(16 m x^{2} y + 39 m + 48 n^{3} x y)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: 'x^{2} y^{2} (16 m x^{2} y + 39 m + 48 n^{3} x y)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '16 m x^{2} y + 39 m + 48 n^{3} x y + x^{2} y^{2}',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- x^{2} y^{2} (16 m x^{2} y + 39 m + 48 n^{3} x y)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: 'x^{2} y^{2} (16 m x^{4} y^{3} + 39 m + 48 n^{3} x y)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-07',
        title: 'Factor común',
        statementLatex: '5x(y+1)^{2} - 13m(y+1)^{2} + 4n(y+1)^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos el factor común de todos los términos.',
            mathLatex: 'El paréntesis (y+1)^{2} se repite en todos los términos.',
          },
          {
            stepNumber: 2,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '- 13 m (y + 1)^{2} \\div (y + 1)^{2} = - 13 m \\; ; \\; 4 n (y + 1)^{2} \\div (y + 1)^{2} = 4 n \\; ; \\; 5 x (y + 1)^{2} \\div (y + 1)^{2} = 5 x',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el polinomio como producto del factor común por el cociente.',
            mathLatex: '(y + 1)^{2}(- 13 m + 4 n + 5 x)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(y + 1)^{2} (- 13 m + 4 n + 5 x)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- 13 m + 4 n + 5 x + (y + 1)^{2}',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- (y + 1)^{2} (- 13 m + 4 n + 5 x)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '(y + 1)^{2} (- 13 m (y + 1)^{2} + 4 n + 5 x)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-08',
        title: 'Factor común',
        statementLatex: '2x^{6}(x-1) + 18x(x-1)',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos el factor común de todos los términos.',
            mathLatex: 'El paréntesis (x-1) se repite en todos los términos.',
          },
          {
            stepNumber: 2,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '2 x^{6} (x - 1) \\div x - 1 = 2 x^{6} \\; ; \\; 18 x (x - 1) \\div x - 1 = 18 x',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el polinomio como producto del factor común por el cociente.',
            mathLatex: 'x - 1(2 x (x^{5} + 9))',
          },
          {
            stepNumber: 4,
            explanation: 'Dentro del paréntesis aún hay factor común monomio.',
            mathLatex: 'x - 1(2 x (x^{5} + 9))',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '2 x (x - 1) (x^{5} + 9)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '2 x^{6} + 19 x - 1',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '(1 - x) (2 x^{6} + 18 x)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '(x - 1) (2 x^{6} (x - 1) + 18 x)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-09',
        title: 'Factor común',
        statementLatex: '3m(y-3)^{5} - 4n(y-3)^{4}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos el factor común de todos los términos.',
            mathLatex: 'El factor (y-3)^{4} aparece en ambos términos.',
          },
          {
            stepNumber: 2,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '- 4 n (y - 3)^{4} \\div (y - 3)^{4} = - 4 n \\; ; \\; 3 m (y - 3)^{5} \\div (y - 3)^{4} = 3 m (y - 3)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el polinomio como producto del factor común por el cociente.',
            mathLatex: '(y - 3)^{4}(3 m (y - 3) - 4 n)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(y - 3)^{4} (3 m y - 9 m - 4 n)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '3 m (y - 3) - 4 n + (y - 3)^{4}',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- (y - 3)^{4} (3 m (y - 3) - 4 n)',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '(y - 3)^{4} (3 m (y - 3) - 4 n (y - 3)^{4})',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-10',
        title: 'Factor común',
        statementLatex: 'x^{3}(y+x) + x^{2}y + xy^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos el factor común de todos los términos.',
            mathLatex: 'La variable x es común a todos los términos.',
          },
          {
            stepNumber: 2,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              'x y^{2} \\div x = y^{2} \\; ; \\; x^{2} y \\div x = x y \\; ; \\; x^{3} (x + y) \\div x = x^{2} (x + y)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el polinomio como producto del factor común por el cociente.',
            mathLatex: 'x(x^{3} (x + y) + x y + y^{2})',
          },
          {
            stepNumber: 4,
            explanation: 'Factorizamos el resto agrupando términos.',
            mathLatex: 'x (x + y) (x^{2} + y)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: 'x (x + y) (x^{2} + y)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'x^{2} (x + y) + x y + x + y^{2}',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '- x (x^{2} (x + y) + x y + y^{2})',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: 'x (x^{2} (x + y) + x y^{2} + x y)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-11',
        title: 'Factor común',
        statementLatex: '5x^{2}(m-x) + 3(m-x)',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos el factor común de todos los términos.',
            mathLatex: 'El paréntesis (m-x) se repite en ambos términos.',
          },
          {
            stepNumber: 2,
            explanation: 'Dividimos cada término entre el factor común.',
            mathLatex:
              '- 3 x \\div m - x = \\frac{3 x}{- m + x} \\; ; \\; 3 m \\div m - x = \\frac{3 m}{m - x} \\; ; \\; 5 x^{2} (m - x) \\div m - x = 5 x^{2}',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el polinomio como producto del factor común por el cociente.',
            mathLatex: 'm - x(5 x^{2} + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (- m + x) (5 x^{2} + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'm + \\frac{3 m}{m - x} + 5 x^{2} - x + \\frac{3 x}{- m + x}',
            isCorrect: false,
            feedback:
              'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.',
          },
          {
            id: 'c',
            labelLatex: '(- m + x) (\\frac{3 m}{m - x} + 5 x^{2} + \\frac{3 x}{- m + x})',
            isCorrect: false,
            feedback:
              'El signo del factor extraído está invertido; el polinomio original no cambia de signo.',
          },
          {
            id: 'd',
            labelLatex: '(m - x) (\\frac{3 m}{m - x} + 5 x^{2} - 3 x)',
            isCorrect: false,
            feedback:
              'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.',
          },
        ],
      },
      {
        id: 'p2-factor-comun-12',
        title: 'Factor común',
        statementLatex: '(m-2)^{2} - 5(m-2) + 6',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Hacemos la sustitución u = m - 2.',
            mathLatex: 'u^{2} - 5u + 6',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos el trinomio en u.',
            mathLatex: '(u - 2)(u - 3)',
          },
          {
            stepNumber: 3,
            explanation: 'Sustituimos u por m - 2 y simplificamos.',
            mathLatex: '(m - 2 - 2)(m - 2 - 3) = (m - 4)(m - 5)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(m - 5) (m - 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'm (m + 1)',
            isCorrect: false,
            feedback: 'Al sustituir de regreso hay que restar 2: u = m - 2, no m + 2.',
          },
          {
            id: 'c',
            labelLatex: '(m - 4) (m + 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo equivocado al sustituir.',
          },
          {
            id: 'd',
            labelLatex: 'm (m - 5)',
            isCorrect: false,
            feedback: 'Verifica el signo al sustituir u por m - 2 en ambos factores.',
          },
        ],
      },
    ],
  },
  {
    id: 'p2-agrupacion',
    title: 'Agrupación de términos · Práctica 2',
    subject: 'Álgebra',
    description:
      'Factorización agrupando términos de dos en dos (práctica adicional 2, sección 2).',
    topic: 'agrupacion',
    method: 'agrupacion',
    theory: [
      {
        title: 'Agrupación de términos',
        contentLatex:
          'Cuando el polinomio tiene cuatro o más términos, se agrupan de dos en dos de modo que cada grupo tenga un factor común. Luego se extrae el factor común de cada grupo y finalmente el binomio común que queda en ambos.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $x - x^{2} - 1 + x^{3}$.',
            solutionLatex:
              'Agrupamos: $(x - x^{2}) + (x^{3} - 1)$. En el primer grupo el factor común es $x$: $x - x^{2} = x(1 - x) = -x(x - 1)$. En el segundo: $x^{3} - 1 = (x - 1)(x^{2} + x + 1)$. Extraemos el binomio común $(x - 1)$: $$x - x^{2} - 1 + x^{3} = (x - 1)(x^{2} + 1).$$',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'p2-agrupacion-01',
        title: 'Agrupación de términos',
        statementLatex: 'x - x^{2} - 1 + x^{3}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(- x^{2} + x) + (x^{3} - 1)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '- x^{2} + x = - x (x - 1) \\quad ; \\quad x^{3} - 1 = (x - 1) (x^{2} + x + 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x - 1) \\left( - x + x^{2} + x + 1 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(x - 1) (x^{2} + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 1) (x^{2} + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'x^{3} - x^{2} + x - 1',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(1 - x) (x^{2} + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '(x - 1) (x^{2} + x + 1)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-02',
        title: 'Agrupación de términos',
        statementLatex: '-1 + x - 2x + 2x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(x - 1) + (2 x^{2} - 2 x)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: 'x - 1 = x - 1 \\quad ; \\quad 2 x^{2} - 2 x = 2 x (x - 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x - 1) \\left( 1 + 2 x \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(x - 1) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 1) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '2 x^{2} - x - 1',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(1 - x) (2 x + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'x - 1',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-03',
        title: 'Agrupación de términos',
        statementLatex: '4x^{2} - 1 - x + 4x',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(4 x^{2} + 4 x) + (- x - 1)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '4 x^{2} + 4 x = 4 x (x + 1) \\quad ; \\quad - x - 1 = - x - 1',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x + 1) \\left( 4 x + -1 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(x + 1) (4 x - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (4 x - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '4 x^{2} + 3 x - 1',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- x - 1) (4 x - 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- x - 1',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-04',
        title: 'Agrupación de términos',
        statementLatex: '3x^{3} + 2x^{2} + 12x + 8',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(3 x^{3} + 2 x^{2}) + (12 x + 8)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '3 x^{3} + 2 x^{2} = x^{2} (3 x + 2) \\quad ; \\quad 12 x + 8 = 4 (3 x + 2)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(3 x + 2) \\left( x^{2} + 4 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(3 x + 2) (x^{2} + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 x + 2) (x^{2} + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '3 x^{3} + 2 x^{2} + 12 x + 8',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- 3 x - 2) (x^{2} + 4)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '12 x + 8',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-05',
        title: 'Agrupación de términos',
        statementLatex: '3x - 9xy^{2} - y + 3y^{3}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(- 9 x y^{2} + 3 x) + (3 y^{3} - y)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '- 9 x y^{2} + 3 x = - 3 x (3 y^{2} - 1) \\quad ; \\quad 3 y^{3} - y = y (3 y^{2} - 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(3 y^{2} - 1) \\left( - 3 x + y \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '- (3 x - y) (3 y^{2} - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (3 x - y) (3 y^{2} - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- 9 x y^{2} + 3 x + 3 y^{3} - y',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(1 - 3 y^{2}) (- 3 x + y)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'y (3 y^{2} - 1)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-06',
        title: 'Agrupación de términos',
        statementLatex: '4x - 6y - 3xy + 2x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(2 x^{2} + 4 x) + (- 3 x y - 6 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '2 x^{2} + 4 x = 2 x (x + 2) \\quad ; \\quad - 3 x y - 6 y = - 3 y (x + 2)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x + 2) \\left( 2 x + - 3 y \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(x + 2) (2 x - 3 y)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 2) (2 x - 3 y)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '2 x^{2} - 3 x y + 4 x - 6 y',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- x - 2) (2 x - 3 y)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- 3 y (x + 2)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-07',
        title: 'Agrupación de términos',
        statementLatex: '1 + 3x + 2y + 6xy',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(3 x + 1) + (6 x y + 2 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '3 x + 1 = 3 x + 1 \\quad ; \\quad 6 x y + 2 y = 2 y (3 x + 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(3 x + 1) \\left( 1 + 2 y \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(3 x + 1) (2 y + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 x + 1) (2 y + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '6 x y + 3 x + 2 y + 1',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- 3 x - 1) (2 y + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '3 x + 1',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-08',
        title: 'Agrupación de términos',
        statementLatex: '-4x - 3xy + 6y + 2x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(2 x^{2} - 4 x) + (- 3 x y + 6 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '2 x^{2} - 4 x = 2 x (x - 2) \\quad ; \\quad - 3 x y + 6 y = - 3 y (x - 2)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x - 2) \\left( 2 x + - 3 y \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(x - 2) (2 x - 3 y)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 2) (2 x - 3 y)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '2 x^{2} - 3 x y - 4 x + 6 y',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(2 - x) (2 x - 3 y)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- 3 y (x - 2)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-09',
        title: 'Agrupación de términos',
        statementLatex: '8y - 4x - 5x^{2}y + 10xy^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(- 4 x + 8 y) + (- 5 x^{2} y + 10 x y^{2})',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '- 4 x + 8 y = - 4 (x - 2 y) \\quad ; \\quad - 5 x^{2} y + 10 x y^{2} = - 5 x y (x - 2 y)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x - 2 y) \\left( -4 + - 5 x y \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '- (x - 2 y) (5 x y + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (x - 2 y) (5 x y + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- 5 x^{2} y + 10 x y^{2} - 4 x + 8 y',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- x + 2 y) (- 5 x y - 4)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- 5 x y (x - 2 y)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-10',
        title: 'Agrupación de términos',
        statementLatex: 'n + ym + m + yn',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(m + n) + (m y + n y)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: 'm + n = m + n \\quad ; \\quad m y + n y = y (m + n)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(m + n) \\left( 1 + y \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(m + n) (y + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(m + n) (y + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'm y + m + n y + n',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- m - n) (y + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'm + n',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-11',
        title: 'Agrupación de términos',
        statementLatex: 'a^{2} + a + ax + x',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(a^{2} + a x) + (a + x)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: 'a^{2} + a x = a (a + x) \\quad ; \\quad a + x = a + x',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(a + x) \\left( a + 1 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(a + 1) (a + x)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(a + 1) (a + x)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'a^{2} + a x + a + x',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- a - x) (a + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'a + x',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-12',
        title: 'Agrupación de términos',
        statementLatex: 'a^{3}b^{3} + a^{2}b^{2} + ab + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(a^{3} b^{3} + a^{2} b^{2}) + (a b + 1)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              'a^{3} b^{3} + a^{2} b^{2} = a^{2} b^{2} (a b + 1) \\quad ; \\quad a b + 1 = a b + 1',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(a b + 1) \\left( a^{2} b^{2} + 1 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(a b + 1) (a^{2} b^{2} + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(a b + 1) (a^{2} b^{2} + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'a^{3} b^{3} + a^{2} b^{2} + a b + 1',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- a b - 1) (a^{2} b^{2} + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'a b + 1',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-13',
        title: 'Agrupación de términos',
        statementLatex: '3mx + 3m - 2x - 2',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(3 m x + 3 m) + (- 2 x - 2)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '3 m x + 3 m = 3 m (x + 1) \\quad ; \\quad - 2 x - 2 = - 2 (x + 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x + 1) \\left( 3 m + -2 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(3 m - 2) (x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 m - 2) (x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '3 m x + 3 m - 2 x - 2',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(3 m - 2) (- x - 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- 2 x - 2',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-14',
        title: 'Agrupación de términos',
        statementLatex: '-3a + 9ab^{2} - b + 3b^{3}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(9 a b^{2} - 3 a) + (3 b^{3} - b)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '9 a b^{2} - 3 a = 3 a (3 b^{2} - 1) \\quad ; \\quad 3 b^{3} - b = b (3 b^{2} - 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(3 b^{2} - 1) \\left( 3 a + b \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(3 a + b) (3 b^{2} - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 a + b) (3 b^{2} - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '9 a b^{2} - 3 a + 3 b^{3} - b',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(1 - 3 b^{2}) (3 a + b)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'b (3 b^{2} - 1)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-15',
        title: 'Agrupación de términos',
        statementLatex: '-9n^{2} + 1 - a^{2} - 6an',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(1 - 9 n^{2}) + (- a^{2} - 6 a n)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '1 - 9 n^{2} = - (3 n - 1) (3 n + 1) \\quad ; \\quad - a^{2} - 6 a n = - a (a + 6 n)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex:
              '(- a - 3 n - 1) \\left( \\frac{9 n^{2} - 1}{a + 3 n + 1} + \\frac{a (a + 6 n)}{a + 3 n + 1} \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '- (a + 3 n - 1) (a + 3 n + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (a + 3 n - 1) (a + 3 n + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- a^{2} - 6 a n - 9 n^{2} + 1',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex:
              '(\\frac{a (a + 6 n)}{a + 3 n + 1} + \\frac{9 n^{2} - 1}{a + 3 n + 1}) (a + 3 n + 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '\\frac{a (a + 6 n) (- a - 3 n - 1)}{a + 3 n + 1}',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-16',
        title: 'Agrupación de términos',
        statementLatex: '-6mn - 8n + 4m + 3m^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(- 6 m n - 8 n) + (3 m^{2} + 4 m)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '- 6 m n - 8 n = - 2 n (3 m + 4) \\quad ; \\quad 3 m^{2} + 4 m = m (3 m + 4)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(3 m + 4) \\left( - 2 n + m \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(m - 2 n) (3 m + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(m - 2 n) (3 m + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '3 m^{2} - 6 m n + 4 m - 8 n',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- 3 m - 4) (m - 2 n)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'm (3 m + 4)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-17',
        title: 'Agrupación de términos',
        statementLatex: '-9ax^{2} - x + 3a + 3x^{3}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(- 9 a x^{2} + 3 a) + (3 x^{3} - x)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '- 9 a x^{2} + 3 a = - 3 a (3 x^{2} - 1) \\quad ; \\quad 3 x^{3} - x = x (3 x^{2} - 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(3 x^{2} - 1) \\left( - 3 a + x \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(- 3 a + x) (3 x^{2} - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(- 3 a + x) (3 x^{2} - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- 9 a x^{2} + 3 a + 3 x^{3} - x',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(1 - 3 x^{2}) (- 3 a + x)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'x (3 x^{2} - 1)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-18',
        title: 'Agrupación de términos',
        statementLatex: '3x^{2}a^{2} - 4 + 3x^{2} - 4a^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(3 a^{2} x^{2} + 3 x^{2}) + (- 4 a^{2} - 4)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '3 a^{2} x^{2} + 3 x^{2} = 3 x^{2} (a^{2} + 1) \\quad ; \\quad - 4 a^{2} - 4 = - 4 (a^{2} + 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(a^{2} + 1) \\left( 3 x^{2} + -4 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(a^{2} + 1) (3 x^{2} - 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(a^{2} + 1) (3 x^{2} - 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '3 a^{2} x^{2} - 4 a^{2} + 3 x^{2} - 4',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- a^{2} - 1) (3 x^{2} - 4)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- 4 a^{2} - 4',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-19',
        title: 'Agrupación de términos',
        statementLatex: '2bx^{2} - 6b + 3 - x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(2 b x^{2} - 6 b) + (3 - x^{2})',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '2 b x^{2} - 6 b = 2 b (x^{2} - 3) \\quad ; \\quad 3 - x^{2} = 3 - x^{2}',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(x^{2} - 3) \\left( 2 b + -1 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(2 b - 1) (x^{2} - 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(2 b - 1) (x^{2} - 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '2 b x^{2} - 6 b - x^{2} + 3',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(3 - x^{2}) (2 b - 1)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '3 - x^{2}',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-20',
        title: 'Agrupación de términos',
        statementLatex: '21x - 9 - 14mx + 6m',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(- 14 m x + 21 x) + (6 m - 9)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: '- 14 m x + 21 x = - 7 x (2 m - 3) \\quad ; \\quad 6 m - 9 = 3 (2 m - 3)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(2 m - 3) \\left( - 7 x + 3 \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '- (2 m - 3) (7 x - 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (2 m - 3) (7 x - 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- 14 m x + 6 m + 21 x - 9',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(3 - 2 m) (3 - 7 x)',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '6 m - 9',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-21',
        title: 'Agrupación de términos',
        statementLatex: 'x^{3} + z^{3} - 2x - 2z',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(x^{3} - 2 x) + (z^{3} - 2 z)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex: 'x^{3} - 2 x = x (x^{2} - 2) \\quad ; \\quad z^{3} - 2 z = z (z^{2} - 2)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex:
              '(x + z) \\left( \\frac{x (x^{2} - 2)}{x + z} + \\frac{z (z^{2} - 2)}{x + z} \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '(x + z) (x^{2} - x z + z^{2} - 2)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + z) (x^{2} - x z + z^{2} - 2)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: 'x^{3} - 2 x + z^{3} - 2 z',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(- x - z) (\\frac{x (x^{2} - 2)}{x + z} + \\frac{z (z^{2} - 2)}{x + z})',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: 'z (z^{2} - 2)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
      {
        id: 'p2-agrupacion-22',
        title: 'Agrupación de términos',
        statementLatex: '2b^{3} - b^{2} - 6ab + 3a',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Agrupamos los términos de dos en dos.',
            mathLatex: '(2 b^{3} - b^{2}) + (- 6 a b + 3 a)',
          },
          {
            stepNumber: 2,
            explanation: 'Extraemos el factor común de cada grupo.',
            mathLatex:
              '2 b^{3} - b^{2} = b^{2} (2 b - 1) \\quad ; \\quad - 6 a b + 3 a = - 3 a (2 b - 1)',
          },
          {
            stepNumber: 3,
            explanation: 'El paréntesis común es el binomio que se repite.',
            mathLatex: '(2 b - 1) \\left( b^{2} + - 3 a \\right)',
          },
          {
            stepNumber: 4,
            explanation: 'Resultado final.',
            mathLatex: '- (3 a - b^{2}) (2 b - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (3 a - b^{2}) (2 b - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '- 6 a b + 3 a + 2 b^{3} - b^{2}',
            isCorrect: false,
            feedback:
              'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.',
          },
          {
            id: 'c',
            labelLatex: '(1 - 2 b) (- 3 a + b^{2})',
            isCorrect: false,
            feedback:
              'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.',
          },
          {
            id: 'd',
            labelLatex: '- 3 a (2 b - 1)',
            isCorrect: false,
            feedback: 'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).',
          },
        ],
      },
    ],
  },
  {
    id: 'p2-inspeccion',
    title: 'Inspección · Práctica 2',
    subject: 'Álgebra',
    description:
      'Factorización de trinomios por inspección o tanteo (práctica adicional 2, sección 3).',
    topic: 'inspeccion',
    method: 'inspeccion',
    theory: [
      {
        title: 'Trinomio de la forma $x^{2} + bx + c$',
        contentLatex:
          'Se buscan dos números $p$ y $q$ tales que $p \\cdot q = c$ y $p + q = b$. Entonces: $x^{2} + bx + c = (x + p)(x + q)$.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $x^{2} + 7x + 12$.',
            solutionLatex:
              'Buscamos dos números cuyo producto sea $12$ y cuya suma sea $7$: son $3$ y $4$. Entonces: $$x^{2} + 7x + 12 = (x + 3)(x + 4).$$',
          },
        ],
      },
      {
        title: 'Trinomio de la forma $ax^{2} + bx + c$',
        contentLatex:
          'Se multiplica el coeficiente principal por el término constante ($a \\cdot c$) y se buscan dos números $p$ y $q$ con $p \\cdot q = ac$ y $p + q = b$. Luego se descompone el término central en $px + qx$ y se factoriza por agrupación.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $2x^{2} + 7x + 3$.',
            solutionLatex:
              '$a \\cdot c = 6$. Dos números con producto $6$ y suma $7$ son $1$ y $6$. Descomponemos: $2x^{2} + x + 6x + 3$. Agrupamos: $x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)$.',
          },
        ],
      },
      {
        title: 'Trinomio cuadrado perfecto (TCP)',
        contentLatex:
          'Si dos de los términos son cuadrados perfectos y el término central es el doble producto de sus raíces, entonces: $a^{2} \\pm 2ab + b^{2} = (a \\pm b)^{2}$.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $9x^{2} + 30x + 25$.',
            solutionLatex:
              'Las raíces son $3x$ y $5$. El doble producto es $2 \\cdot 3x \\cdot 5 = 30x$, que coincide con el término central. Entonces: $$9x^{2} + 30x + 25 = (3x + 5)^{2}.$$',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'p2-inspeccion-01',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} + 3x + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot 1 = 2',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 2 \\quad ; \\quad p + q = 3',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} + 3 x + 1 = 2 x^{2} + 3 x + 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 1) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 1) (2 x - 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (2 x + 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-02',
        title: 'Factorización por inspección',
        statementLatex: '3x^{2} + 2x - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '3 \\cdot -1 = -3',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -3 \\quad ; \\quad p + q = 2',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '3 x^{2} + 2 x - 1 = 3 x^{2} + 2 x - 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 1) (3 x - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (3 x - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 1) (3 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (3 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (3 x - 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-03',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} + 5x + 2',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot 2 = 4',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 4 \\quad ; \\quad p + q = 5',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} + 5 x + 2 = 2 x^{2} + 5 x + 2',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 2) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 2) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 2) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x + 2) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 2) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-04',
        title: 'Factorización por inspección',
        statementLatex: '4x^{2} + 3x - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '4 \\cdot -1 = -4',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -4 \\quad ; \\quad p + q = 3',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '4 x^{2} + 3 x - 1 = 4 x^{2} + 3 x - 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 1) (4 x - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (4 x - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 1) (4 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (4 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (4 x - 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-05',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} + 7x + 3',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot 3 = 6',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 6 \\quad ; \\quad p + q = 7',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} + 7 x + 3 = 2 x^{2} + 7 x + 3',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 3) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 3) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 3) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x + 3) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 3) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-06',
        title: 'Factorización por inspección',
        statementLatex: '5x^{2} + 4x - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '5 \\cdot -1 = -5',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -5 \\quad ; \\quad p + q = 4',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '5 x^{2} + 4 x - 1 = 5 x^{2} + 4 x - 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 1) (5 x - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (5 x - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 1) (5 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (5 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (5 x - 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-07',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} + 9x + 4',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot 4 = 8',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 8 \\quad ; \\quad p + q = 9',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} + 9 x + 4 = 2 x^{2} + 9 x + 4',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 4) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 4) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 4) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x + 4) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 4) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-08',
        title: 'Factorización por inspección',
        statementLatex: '6x^{2} - 7x + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '6 \\cdot 1 = 6',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 6 \\quad ; \\quad p + q = -7',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '6 x^{2} - 7 x + 1 = 6 x^{2} - 7 x + 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x - 1) (6 x - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 1) (6 x - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 1) (6 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x + 1) (6 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x - 1) (6 x - 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-09',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} + 11x + 5',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot 5 = 10',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 10 \\quad ; \\quad p + q = 11',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} + 11 x + 5 = 2 x^{2} + 11 x + 5',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x + 5) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 5) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 5) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x + 5) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 5) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-10',
        title: 'Factorización por inspección',
        statementLatex: '7x^{2} - 8x + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '7 \\cdot 1 = 7',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 7 \\quad ; \\quad p + q = -8',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '7 x^{2} - 8 x + 1 = 7 x^{2} - 8 x + 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x - 1) (7 x - 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 1) (7 x - 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 1) (7 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x + 1) (7 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x - 1) (7 x - 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-11',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} - x - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot -1 = -2',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -2 \\quad ; \\quad p + q = -1',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} - x - 1 = 2 x^{2} - x - 1',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x - 1) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 1) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 1) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x - 1) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-12',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} - 5x - 3',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot -3 = -6',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -6 \\quad ; \\quad p + q = -5',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} - 5 x - 3 = 2 x^{2} - 5 x - 3',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x - 3) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 3) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 3) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 3) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x - 3) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-13',
        title: 'Factorización por inspección',
        statementLatex: '16x^{2} + 8x + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: '16 x^{2} = (4 x)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot 4 x \\cdot 1 = 8 x',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(4 x + 1)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(4 x + 1)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(4 x - 1)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (4 x + 1)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(4 x - 1) (4 x + 1)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-14',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} - 7x - 4',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot -4 = -8',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -8 \\quad ; \\quad p + q = -7',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} - 7 x - 4 = 2 x^{2} - 7 x - 4',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x - 4) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 4) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 4) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 4) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x - 4) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-15',
        title: 'Factorización por inspección',
        statementLatex: '25x^{2} - 10x + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: '25 x^{2} = (5 x)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot 5 x \\cdot 1 = 10 x',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(5 x - 1)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(5 x - 1)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(5 x + 1)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (5 x - 1)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(5 x - 1) (5 x + 1)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-16',
        title: 'Factorización por inspección',
        statementLatex: '2x^{2} - 9x - 5',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '2 \\cdot -5 = -10',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = -10 \\quad ; \\quad p + q = -9',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '2 x^{2} - 9 x - 5 = 2 x^{2} - 9 x - 5',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(x - 5) (2 x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 5) (2 x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 5) (2 x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 5) (2 x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x - 5) (2 x + 1)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-17',
        title: 'Factorización por inspección',
        statementLatex: '36x^{2} - 12x + 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: '36 x^{2} = (6 x)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot 6 x \\cdot 1 = 12 x',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(6 x - 1)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(6 x - 1)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(6 x + 1)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (6 x - 1)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(6 x - 1) (6 x + 1)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-18',
        title: 'Factorización por inspección',
        statementLatex: '3x + 2 + x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = 2 \\quad ; \\quad p + q = 3',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = 2',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x + 1) (x + 2)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (x + 2)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 2) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (x + 2)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 2)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-19',
        title: 'Factorización por inspección',
        statementLatex: '4x + 3 + x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = 3 \\quad ; \\quad p + q = 4',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = 3',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x + 1) (x + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (x + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 3) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (x + 3)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 3)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-20',
        title: 'Factorización por inspección',
        statementLatex: '5x + 4 + x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = 4 \\quad ; \\quad p + q = 5',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = 4',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x + 1) (x + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (x + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 4) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (x + 4)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 4)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-21',
        title: 'Factorización por inspección',
        statementLatex: '6x + 5 + x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = 5 \\quad ; \\quad p + q = 6',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = 5',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x + 1) (x + 5)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (x + 5)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 5) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (x + 5)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 5)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-22',
        title: 'Factorización por inspección',
        statementLatex: '7x + 6 + x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = 6 \\quad ; \\quad p + q = 7',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = 6',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x + 1) (x + 6)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + 1) (x + 6)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 6) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '(x - 1) (x + 6)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 6)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-23',
        title: 'Factorización por inspección',
        statementLatex: '4x - x^{2} + 5',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = -5 \\quad ; \\quad p + q = -4',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = -5',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x - 5) (x + 1)',
          },
          {
            stepNumber: 5,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (x - 5) (x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (x - 5) (x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 5) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '- (x - 5) (x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 5)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-24',
        title: 'Factorización por inspección',
        statementLatex: '5x - x^{2} + 6',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = -6 \\quad ; \\quad p + q = -5',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = 1 \\quad ; \\quad q = -6',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(x - 6) (x + 1)',
          },
          {
            stepNumber: 5,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (x - 6) (x + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (x - 6) (x + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 6) (x + 1)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '- (x - 6) (x - 1)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (x + 1) (x + 6)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-25',
        title: 'Factorización por inspección',
        statementLatex: '-3y + 18 - y^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = -18 \\quad ; \\quad p + q = 3',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = -3 \\quad ; \\quad q = 6',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(y - 3) (y + 6)',
          },
          {
            stepNumber: 5,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (y - 3) (y + 6)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (y - 3) (y + 6)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(y - 3) (y + 6)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '- (y + 3) (y + 6)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (y - 6) (y - 3)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-26',
        title: 'Factorización por inspección',
        statementLatex: '2y + 15 - y^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = -15 \\quad ; \\quad p + q = -2',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = -5 \\quad ; \\quad q = 3',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(y - 5) (y + 3)',
          },
          {
            stepNumber: 5,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (y - 5) (y + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (y - 5) (y + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(y - 5) (y + 3)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '- (y + 3) (y + 5)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (y - 5) (y - 3)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-27',
        title: 'Factorización por inspección',
        statementLatex: '2y - 1 - y^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: 'y^{2} = (y)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot y \\cdot 1 = 2 y',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(y - 1)^{2}',
          },
          {
            stepNumber: 4,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (y - 1)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (y - 1)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(y + 1)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '(y - 1)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(y - 1) (y + 1)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-28',
        title: 'Factorización por inspección',
        statementLatex: '-a^{2} - 7a + 60',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
            mathLatex: 'p \\cdot q = -60 \\quad ; \\quad p + q = 7',
          },
          {
            stepNumber: 2,
            explanation: 'Los números son los que aparecen en la factorización.',
            mathLatex: 'p = -5 \\quad ; \\quad q = 12',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios.',
            mathLatex: '(a - 5) (a + 12)',
          },
          {
            stepNumber: 5,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (a - 5) (a + 12)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (a - 5) (a + 12)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(a - 5) (a + 12)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '- (a + 5) (a + 12)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (a - 12) (a - 5)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-29',
        title: 'Factorización por inspección',
        statementLatex: '-10a^{2} - 3 - 11a',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Multiplicamos el coeficiente principal por el término constante.',
            mathLatex: '10 \\cdot 3 = 30',
          },
          {
            stepNumber: 2,
            explanation: 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
            mathLatex: 'p \\cdot q = 30 \\quad ; \\quad p + q = 11',
          },
          {
            stepNumber: 3,
            explanation: 'Reescribimos el término central como la suma de esos dos términos.',
            mathLatex: '10 a^{2} + 11 a + 3 = 10 a^{2} + 11 a + 3',
          },
          {
            stepNumber: 4,
            explanation: 'Agrupamos y extraemos el factor común.',
            mathLatex: '(2 a + 1) (5 a + 3)',
          },
          {
            stepNumber: 5,
            explanation: 'Reintroducimos el signo negativo extraído al inicio.',
            mathLatex: '- (2 a + 1) (5 a + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '- (2 a + 1) (5 a + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(2 a + 1) (5 a + 3)',
            isCorrect: false,
            feedback: 'Revisa los signos de los números p y q: uno de los signos está cambiado.',
          },
          {
            id: 'c',
            labelLatex: '- (2 a - 1) (5 a + 3)',
            isCorrect: false,
            feedback: 'Uno de los factores quedó con el signo invertido.',
          },
          {
            id: 'd',
            labelLatex: '- (2 a + 1) (5 a - 3)',
            isCorrect: false,
            feedback: 'El signo del producto está invertido; verifica la suma p + q.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-30',
        title: 'Factorización por inspección',
        statementLatex: '9a^{2} + 25 + 30a',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: '9 a^{2} = (3 a)^2 \\quad ; \\quad 25 = (5)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot 3 a \\cdot 5 = 30 a',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(3 a + 5)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 a + 5)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(3 a - 5)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (3 a + 5)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(3 a - 5) (3 a + 5)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-31',
        title: 'Factorización por inspección',
        statementLatex: '40m + 100 + 4m^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: '4 m^{2} = (2 m)^2 \\quad ; \\quad 100 = (10)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot 2 m \\cdot 10 = 40 m',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(2 m + 10)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(2 m + 10)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(2 m - 10)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (2 m + 10)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(2 m - 10) (2 m + 10)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-32',
        title: 'Factorización por inspección',
        statementLatex: '9m^{2} + 4 + 12m',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: '9 m^{2} = (3 m)^2 \\quad ; \\quad 4 = (2)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot 3 m \\cdot 2 = 12 m',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(3 m + 2)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 m + 2)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(3 m - 2)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (3 m + 2)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(3 m - 2) (3 m + 2)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
      {
        id: 'p2-inspeccion-33',
        title: 'Factorización por inspección',
        statementLatex: 'm^{2} + 169 - 26m',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Identificamos los cuadrados perfectos.',
            mathLatex: 'm^{2} = (m)^2 \\quad ; \\quad 169 = (13)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Verificamos el doble producto.',
            mathLatex: '2 \\cdot m \\cdot 13 = 26 m',
          },
          {
            stepNumber: 3,
            explanation: 'Es un trinomio cuadrado perfecto.',
            mathLatex: '(m - 13)^{2}',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(m - 13)^{2}',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(m + 13)^{2}',
            isCorrect: false,
            feedback:
              'El signo del doble producto debe coincidir con el término central del trinomio.',
          },
          {
            id: 'c',
            labelLatex: '- (m - 13)^{2}',
            isCorrect: false,
            feedback:
              'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.',
          },
          {
            id: 'd',
            labelLatex: '(m - 13) (m + 13)',
            isCorrect: false,
            feedback: 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.',
          },
        ],
      },
    ],
  },
  {
    id: 'p2-binomios',
    title: 'Diferencia de cuadrados · Práctica 2',
    subject: 'Álgebra',
    description:
      'Factorización de binomios por diferencia de cuadrados (práctica adicional 2, sección 4).',
    topic: 'binomios',
    method: 'binomios',
    theory: [
      {
        title: 'Diferencia de cuadrados',
        contentLatex:
          'Una diferencia de cuadrados se factoriza como el producto de binomios conjugados: $$u^{2} - v^{2} = (u - v)(u + v).$$ Se identifican las raíces cuadradas de cada término y se escribe el producto de la resta por la suma.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $9x^{2} - 25$.',
            solutionLatex:
              'Las raíces son $3x$ y $5$: $9x^{2} = (3x)^{2}$ y $25 = 5^{2}$. Entonces: $$9x^{2} - 25 = (3x - 5)(3x + 5).$$',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'p2-binomios-01',
        title: 'Diferencia de cuadrados',
        statementLatex: 'm^{2} - 4',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'm^{2} = (m)^2 \\quad ; \\quad 4 = (2)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(m - 2) (m + 2)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(m - 2) (m + 2)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(m + 2)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(m - 2)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(2 - m)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-02',
        title: 'Diferencia de cuadrados',
        statementLatex: 'x^{2} - 9',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'x^{2} = (x)^2 \\quad ; \\quad 9 = (3)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(x - 3) (x + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 3) (x + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 3)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(x - 3)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(3 - x)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-03',
        title: 'Diferencia de cuadrados',
        statementLatex: 'c^{2} - 16',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'c^{2} = (c)^2 \\quad ; \\quad 16 = (4)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(c - 4) (c + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(c - 4) (c + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(c + 4)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(c - 4)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(4 - c)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-04',
        title: 'Diferencia de cuadrados',
        statementLatex: 'u^{2} - 81',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'u^{2} = (u)^2 \\quad ; \\quad 81 = (9)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(u - 9) (u + 9)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(u - 9) (u + 9)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(u + 9)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(u - 9)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(9 - u)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-05',
        title: 'Diferencia de cuadrados',
        statementLatex: '25 - x^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '25 = (5)^2 \\quad ; \\quad \\left|{x^{2}}\\right| = (x)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(5 - x) (x + 5)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(5 - x) (x + 5)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + 5)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(5 - x)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(x - 5)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-06',
        title: 'Diferencia de cuadrados',
        statementLatex: '36 - h^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '36 = (6)^2 \\quad ; \\quad \\left|{h^{2}}\\right| = (h)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(6 - h) (h + 6)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(6 - h) (h + 6)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(h + 6)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(6 - h)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(h - 6)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-07',
        title: 'Diferencia de cuadrados',
        statementLatex: '49 - d^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '49 = (7)^2 \\quad ; \\quad \\left|{d^{2}}\\right| = (d)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(7 - d) (d + 7)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(7 - d) (d + 7)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(d + 7)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(7 - d)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(d - 7)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-08',
        title: 'Diferencia de cuadrados',
        statementLatex: '64 - k^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '64 = (8)^2 \\quad ; \\quad \\left|{k^{2}}\\right| = (k)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(8 - k) (k + 8)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(8 - k) (k + 8)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(k + 8)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(8 - k)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(k - 8)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-09',
        title: 'Diferencia de cuadrados',
        statementLatex: '-k^{2} + 121',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '121 = (11)^2 \\quad ; \\quad \\left|{k^{2}}\\right| = (k)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(11 - k) (k + 11)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(11 - k) (k + 11)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(k + 11)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(11 - k)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(k - 11)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-10',
        title: 'Diferencia de cuadrados',
        statementLatex: '9 - 4h^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '9 = (3)^2 \\quad ; \\quad 4 \\left|{h^{2}}\\right| = (2 h)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(3 - 2 h) (2 h + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 - 2 h) (2 h + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(2 h + 3)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(3 - 2 h)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(2 h - 3)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-11',
        title: 'Diferencia de cuadrados',
        statementLatex: '-9r^{2} + 25',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '25 = (5)^2 \\quad ; \\quad 9 \\left|{r^{2}}\\right| = (3 r)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(5 - 3 r) (3 r + 5)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(5 - 3 r) (3 r + 5)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(3 r + 5)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(5 - 3 r)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(3 r - 5)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-12',
        title: 'Diferencia de cuadrados',
        statementLatex: '-4k^{2} + 36',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '36 = (6)^2 \\quad ; \\quad 4 \\left|{k^{2}}\\right| = (2 k)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(6 - 2 k) (2 k + 6)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(6 - 2 k) (2 k + 6)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(2 k + 6)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(6 - 2 k)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(2 k - 6)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-13',
        title: 'Diferencia de cuadrados',
        statementLatex: '9 - 16h^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '9 = (3)^2 \\quad ; \\quad 16 \\left|{h^{2}}\\right| = (4 h)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(3 - 4 h) (4 h + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 - 4 h) (4 h + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(4 h + 3)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(3 - 4 h)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(4 h - 3)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-14',
        title: 'Diferencia de cuadrados',
        statementLatex: '9 - 16k^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '9 = (3)^2 \\quad ; \\quad 16 \\left|{k^{2}}\\right| = (4 k)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(3 - 4 k) (4 k + 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 - 4 k) (4 k + 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(4 k + 3)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(3 - 4 k)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(4 k - 3)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-15',
        title: 'Diferencia de cuadrados',
        statementLatex: '1 - 16k^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '1 = (1)^2 \\quad ; \\quad 16 \\left|{k^{2}}\\right| = (4 k)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(1 - 4 k) (4 k + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(1 - 4 k) (4 k + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(4 k + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(1 - 4 k)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(4 k - 1)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-16',
        title: 'Diferencia de cuadrados',
        statementLatex: '16k^{2} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '16 k^{2} = (4 k)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(4 k - 1) (4 k + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(4 k - 1) (4 k + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(4 k + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(4 k - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - 4 k)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-17',
        title: 'Diferencia de cuadrados',
        statementLatex: '81k^{16} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '81 k^{16} = (9 k^{8})^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(9 k^{8} - 1) (9 k^{8} + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(9 k^{8} - 1) (9 k^{8} + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(9 k^{8} + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(9 k^{8} - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - 9 k^{8})^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-18',
        title: 'Diferencia de cuadrados',
        statementLatex: 'k^{2} - 169',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'k^{2} = (k)^2 \\quad ; \\quad 169 = (13)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(k - 13) (k + 13)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(k - 13) (k + 13)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(k + 13)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(k - 13)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(13 - k)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-19',
        title: 'Diferencia de cuadrados',
        statementLatex: 'x^{20} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'x^{20} = (x^{10})^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(x^{10} - 1) (x^{10} + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x^{10} - 1) (x^{10} + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x^{10} + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(x^{10} - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - x^{10})^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-20',
        title: 'Diferencia de cuadrados',
        statementLatex: 'a^{2} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'a^{2} = (a)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(a - 1) (a + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(a - 1) (a + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(a + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(a - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - a)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-21',
        title: 'Diferencia de cuadrados',
        statementLatex: 'h^{6} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: 'h^{6} = (h^{3})^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(h^{3} - 1) (h^{3} + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(h^{3} - 1) (h^{3} + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(h^{3} + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(h^{3} - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - h^{3})^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-22',
        title: 'Diferencia de cuadrados',
        statementLatex: '81k^{6} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '81 k^{6} = (9 k^{3})^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(9 k^{3} - 1) (9 k^{3} + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(9 k^{3} - 1) (9 k^{3} + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(9 k^{3} + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(9 k^{3} - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - 9 k^{3})^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
      {
        id: 'p2-binomios-23',
        title: 'Diferencia de cuadrados',
        statementLatex: '256w^{2} - 1',
        steps: [
          {
            stepNumber: 1,
            explanation: 'Reconocemos los cuadrados perfectos.',
            mathLatex: '256 w^{2} = (16 w)^2 \\quad ; \\quad 1 = (1)^2',
          },
          {
            stepNumber: 2,
            explanation: 'Es una diferencia de cuadrados.',
            mathLatex: 'u^2 - v^2 = (u - v)(u + v)',
          },
          {
            stepNumber: 3,
            explanation: 'Escribimos el producto de binomios conjugados.',
            mathLatex: '(16 w - 1) (16 w + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(16 w - 1) (16 w + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(16 w + 1)^{2}',
            isCorrect: false,
            feedback:
              'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.',
          },
          {
            id: 'c',
            labelLatex: '(16 w - 1)^{2}',
            isCorrect: false,
            feedback:
              'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).',
          },
          {
            id: 'd',
            labelLatex: '(1 - 16 w)^{2}',
            isCorrect: false,
            feedback:
              'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.',
          },
        ],
      },
    ],
  },
  {
    id: 'p2-combinados',
    title: 'Métodos combinados · Práctica 2',
    subject: 'Álgebra',
    description:
      'Factorización que combina diferencia de cuadrados y factor común (práctica adicional 2, sección 5).',
    topic: 'combinados',
    method: 'combinados',
    theory: [
      {
        title: 'Métodos combinados',
        contentLatex:
          'Primero se agrupan los términos: un grupo suele ser una diferencia de cuadrados y el otro un polinomio con factor común. Se factoriza cada grupo y luego se extrae el binomio común que queda en ambos.',
        examples: [
          {
            title: 'Ejemplo resuelto',
            statementLatex: 'Factorice $7a + 7b + a^{2} - b^{2}$.',
            solutionLatex:
              'Agrupamos: $(7a + 7b) + (a^{2} - b^{2})$. En el primer grupo el factor común es $7$: $7(a + b)$. En el segundo aplicamos diferencia de cuadrados: $(a + b)(a - b)$. Extraemos el binomio común $(a + b)$: $$7a + 7b + a^{2} - b^{2} = (a + b)(7 + a - b).$$',
          },
        ],
      },
    ],
    exercises: [
      {
        id: 'p2-combinados-01',
        title: 'Métodos combinados',
        statementLatex: '7a + 7b + a^{2} - b^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(a^{2} - b^{2}) + (7 a + 7 b)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: 'a^{2} - b^{2} = (a - b)(a + b)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '7 a + 7 b = 7 \\cdot (a + b)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(a + b) (a - b + 7)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(a + b) (a - b + 7)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(a + b) (a - b - 7)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: 'a^{2} + 7 a - b^{2} + 7 b',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(a - b) (a + b + 7)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-02',
        title: 'Métodos combinados',
        statementLatex: '4m + 4n + m^{2} - n^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(m^{2} - n^{2}) + (4 m + 4 n)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: 'm^{2} - n^{2} = (m - n)(m + n)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '4 m + 4 n = 4 \\cdot (m + n)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(m + n) (m - n + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(m + n) (m - n + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(m + n) (m - n - 4)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: 'm^{2} + 4 m - n^{2} + 4 n',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(m - n) (m + n + 4)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-03',
        title: 'Métodos combinados',
        statementLatex: '9x + 9y + x^{2} - y^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(x^{2} - y^{2}) + (9 x + 9 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: 'x^{2} - y^{2} = (x - y)(x + y)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '9 x + 9 y = 9 \\cdot (x + y)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(x + y) (x - y + 9)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x + y) (x - y + 9)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x + y) (x - y - 9)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: 'x^{2} + 9 x - y^{2} + 9 y',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(x - y) (x + y + 9)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-04',
        title: 'Métodos combinados',
        statementLatex: '6a + 6b + a^{2} - b^{2}',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(a^{2} - b^{2}) + (6 a + 6 b)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: 'a^{2} - b^{2} = (a - b)(a + b)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '6 a + 6 b = 6 \\cdot (a + b)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(a + b) (a - b + 6)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(a + b) (a - b + 6)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(a + b) (a - b - 6)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: 'a^{2} + 6 a - b^{2} + 6 b',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(a - b) (a + b + 6)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-05',
        title: 'Métodos combinados',
        statementLatex: '16x^{2} - 25y^{2} + 4x - 5y',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(16 x^{2} - 25 y^{2}) + (4 x - 5 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '16 x^{2} - 25 y^{2} = (4 x - 5 y)(4 x + 5 y)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '4 x - 5 y = 1 \\cdot (4 x - 5 y)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(4 x - 5 y) (4 x + 5 y + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(4 x - 5 y) (4 x + 5 y + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(4 x - 5 y) (4 x + 5 y - 1)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '16 x^{2} + 4 x - 25 y^{2} - 5 y',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(4 x + 5 y) (4 x - 5 y + 1)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-06',
        title: 'Métodos combinados',
        statementLatex: '49a^{2} - 64b^{2} + 7a - 8b',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(49 a^{2} - 64 b^{2}) + (7 a - 8 b)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '49 a^{2} - 64 b^{2} = (7 a - 8 b)(7 a + 8 b)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '7 a - 8 b = 1 \\cdot (7 a - 8 b)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(7 a - 8 b) (7 a + 8 b + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(7 a - 8 b) (7 a + 8 b + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(7 a - 8 b) (7 a + 8 b - 1)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '49 a^{2} + 7 a - 64 b^{2} - 8 b',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(7 a + 8 b) (7 a - 8 b + 1)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-07',
        title: 'Métodos combinados',
        statementLatex: '81m^{2} - 100n^{2} + 9m - 10n',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(81 m^{2} - 100 n^{2}) + (9 m - 10 n)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '81 m^{2} - 100 n^{2} = (9 m - 10 n)(9 m + 10 n)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '9 m - 10 n = 1 \\cdot (9 m - 10 n)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(9 m - 10 n) (9 m + 10 n + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(9 m - 10 n) (9 m + 10 n + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(9 m - 10 n) (9 m + 10 n - 1)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '81 m^{2} + 9 m - 100 n^{2} - 10 n',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(9 m + 10 n) (9 m - 10 n + 1)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-08',
        title: 'Métodos combinados',
        statementLatex: '121x^{2} - 144y^{2} + 11x - 12y',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(121 x^{2} - 144 y^{2}) + (11 x - 12 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '121 x^{2} - 144 y^{2} = (11 x - 12 y)(11 x + 12 y)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '11 x - 12 y = 1 \\cdot (11 x - 12 y)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(11 x - 12 y) (11 x + 12 y + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(11 x - 12 y) (11 x + 12 y + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(11 x - 12 y) (11 x + 12 y - 1)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '121 x^{2} + 11 x - 144 y^{2} - 12 y',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(11 x + 12 y) (11 x - 12 y + 1)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-09',
        title: 'Métodos combinados',
        statementLatex: '25a^{2} - 36b^{2} + 5a - 6b',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(25 a^{2} - 36 b^{2}) + (5 a - 6 b)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '25 a^{2} - 36 b^{2} = (5 a - 6 b)(5 a + 6 b)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '5 a - 6 b = 1 \\cdot (5 a - 6 b)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(5 a - 6 b) (5 a + 6 b + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(5 a - 6 b) (5 a + 6 b + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(5 a - 6 b) (5 a + 6 b - 1)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '25 a^{2} + 5 a - 36 b^{2} - 6 b',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(5 a + 6 b) (5 a - 6 b + 1)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-10',
        title: 'Métodos combinados',
        statementLatex: 'm^{2} - 9a^{2} + 3m - 9a',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(- 9 a^{2} + m^{2}) + (- 9 a + 3 m)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '- 9 a^{2} + m^{2} = (m - 3 a)(m + 3 a)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '- 9 a + 3 m = -3 \\cdot (3 a - m)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(3 a - m) (- 3 a - m - 3)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(3 a - m) (- 3 a - m - 3)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(3 a - m) (- 3 a - m + 3)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '- 9 a^{2} - 9 a + m^{2} + 3 m',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(- 3 a - m) (3 a - m - 3)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-11',
        title: 'Métodos combinados',
        statementLatex: 'x^{2} - 16y^{2} + 4x - 16y',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(x^{2} - 16 y^{2}) + (4 x - 16 y)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: 'x^{2} - 16 y^{2} = (x - 4 y)(x + 4 y)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '4 x - 16 y = 4 \\cdot (x - 4 y)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(x - 4 y) (x + 4 y + 4)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(x - 4 y) (x + 4 y + 4)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(x - 4 y) (x + 4 y - 4)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: 'x^{2} + 4 x - 16 y^{2} - 16 y',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(x + 4 y) (x - 4 y + 4)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-12',
        title: 'Métodos combinados',
        statementLatex: 'p^{2} - 49q^{2} + 7p - 49q',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(p^{2} - 49 q^{2}) + (7 p - 49 q)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: 'p^{2} - 49 q^{2} = (p - 7 q)(p + 7 q)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '7 p - 49 q = 7 \\cdot (p - 7 q)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(p - 7 q) (p + 7 q + 7)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(p - 7 q) (p + 7 q + 7)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(p - 7 q) (p + 7 q - 7)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: 'p^{2} + 7 p - 49 q^{2} - 49 q',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(p + 7 q) (p - 7 q + 7)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-13',
        title: 'Métodos combinados',
        statementLatex: '4a^{2} - 25b^{2} + 4a - 10b',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(4 a^{2} - 25 b^{2}) + (4 a - 10 b)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '4 a^{2} - 25 b^{2} = (2 a - 5 b)(2 a + 5 b)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '4 a - 10 b = 2 \\cdot (2 a - 5 b)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(2 a - 5 b) (2 a + 5 b + 2)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(2 a - 5 b) (2 a + 5 b + 2)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(2 a - 5 b) (2 a + 5 b - 2)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '4 a^{2} + 4 a - 25 b^{2} - 10 b',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(2 a + 5 b) (2 a - 5 b + 2)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
      {
        id: 'p2-combinados-14',
        title: 'Métodos combinados',
        statementLatex: '36m^{2} - 81n^{2} + 6m - 9n',
        steps: [
          {
            stepNumber: 1,
            explanation:
              'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
            mathLatex: '(36 m^{2} - 81 n^{2}) + (6 m - 9 n)',
          },
          {
            stepNumber: 2,
            explanation: 'Factorizamos la diferencia de cuadrados.',
            mathLatex: '36 m^{2} - 81 n^{2} = (6 m - 9 n)(6 m + 9 n)',
          },
          {
            stepNumber: 3,
            explanation: 'El binomio común también está en el segundo grupo.',
            mathLatex: '6 m - 9 n = 1 \\cdot (6 m - 9 n)',
          },
          {
            stepNumber: 4,
            explanation: 'Extraemos el binomio común.',
            mathLatex: '(6 m - 9 n) (6 m + 9 n + 1)',
          },
        ],
        options: [
          {
            id: 'a',
            labelLatex: '(6 m - 9 n) (6 m + 9 n + 1)',
            isCorrect: true,
            feedback: '¡Correcto! Has factorizado correctamente.',
          },
          {
            id: 'b',
            labelLatex: '(6 m - 9 n) (6 m + 9 n - 1)',
            isCorrect: false,
            feedback: 'El signo del término agregado está invertido.',
          },
          {
            id: 'c',
            labelLatex: '36 m^{2} + 6 m - 81 n^{2} - 9 n',
            isCorrect: false,
            feedback: 'Faltó extraer el binomio común después de factorizar cada grupo.',
          },
          {
            id: 'd',
            labelLatex: '(6 m + 9 n) (6 m - 9 n + 1)',
            isCorrect: false,
            feedback:
              'El factor común es el binomio que se repite en ambos grupos, no el otro factor.',
          },
        ],
      },
    ],
  },
];
