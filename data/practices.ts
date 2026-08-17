// ============================================================================
// Dataset de prácticas — Álgebra (Noveno Nivel)
// Fuente: "Práctica adicional 3" — Colegio Salesiano Don Bosco (practica03.pdf)
// ============================================================================

export interface Step {
  stepNumber: number;
  explanation: string;
  mathLatex?: string;
}

export interface ExerciseOption {
  id: string;
  labelLatex: string;
  isCorrect: boolean;
  feedback?: string;
}

export interface Exercise {
  id: string;
  title: string;
  statementLatex: string;
  options: ExerciseOption[];
  steps: Step[];
}

export interface TheorySection {
  title: string;
  contentLatex: string;
  examples: {
    title: string;
    statementLatex: string;
    solutionLatex: string;
  }[];
}

export interface PracticeUnit {
  id: string;
  title: string;
  subject: string;
  description: string;
  theory: TheorySection[];
  exercises: Exercise[];
}

// ---------------------------------------------------------------------------
// UNIDAD 1 — Factorización de polinomios
// ---------------------------------------------------------------------------

const factorizacion: PracticeUnit = {
  id: 'factorizacion',
  title: 'Factorización de Polinomios',
  subject: 'Álgebra',
  description:
    'Factorice los siguientes polinomios por el método que sea conveniente: factor común, diferencia de cuadrados, trinomio cuadrado perfecto o trinomio de la forma $x^2+bx+c$.',
  theory: [
    {
      title: 'Factor común',
      contentLatex:
        'Para extraer un factor común se calcula el máximo común divisor (MCD) de los coeficientes y se toma la menor potencia de cada variable que aparezca en **todos** los términos. Luego se divide cada término entre el factor común.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Factorice $9a^5 - 6a^2x + 3ac$.',
          solutionLatex:
            'MCD de $9$, $6$ y $3$ es $3$. La menor potencia de $a$ presente en todos los términos es $a^1$. El factor común es $3a$: $$9a^5 - 6a^2x + 3ac = 3a(3a^4 - 2ax + c).$$',
        },
      ],
    },
    {
      title: 'Diferencia de cuadrados',
      contentLatex:
        'Una diferencia de cuadrados se factoriza como el producto de una suma por una diferencia: $$a^2 - b^2 = (a + b)(a - b).$$ Debe verificarse que **ambos** términos sean cuadrados perfectos.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Factorice $x^2 - 9$.',
          solutionLatex:
            'Como $x^2$ y $9 = 3^2$ son cuadrados perfectos: $$x^2 - 9 = (x + 3)(x - 3).$$',
        },
      ],
    },
    {
      title: 'Trinomio cuadrado perfecto',
      contentLatex:
        'Un trinomio es cuadrado perfecto cuando dos de sus términos son cuadrados perfectos ($a^2$ y $b^2$) y el término del medio es el doble producto de sus raíces: $$a^2 \\pm 2ab + b^2 = (a \\pm b)^2.$$',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Factorice $100x^6 - 260x^3y^2 + 169y^4$.',
          solutionLatex:
            'Las raíces son $10x^3$ y $13y^2$. El doble producto es $2(10x^3)(13y^2) = 260x^3y^2$, y como el término del medio es negativo: $$100x^6 - 260x^3y^2 + 169y^4 = (10x^3 - 13y^2)^2.$$',
        },
      ],
    },
    {
      title: 'Trinomio de la forma $x^2 + bx + c$',
      contentLatex:
        'Se buscan dos números $p$ y $q$ tales que su producto sea $c$ y su suma sea $b$. Entonces: $$x^2 + bx + c = (x + p)(x + q).$$ El mismo razonamiento aplica a expresiones como $ax^2 + bxy + cy^2$.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Factorice $x^2 + 3x - 28$.',
          solutionLatex:
            'Buscamos $p \\cdot q = -28$ y $p + q = 3$: los números son $7$ y $-4$. Por tanto: $$x^2 + 3x - 28 = (x + 7)(x - 4).$$',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'factorizacion-1',
      title: 'Factor común',
      statementLatex: 'Factorice el siguiente polinomio: $$9a^5 - 6a^2x + 3ac$$',
      options: [
        {
          id: 'a',
          labelLatex: '$3a(3a^4 - 2ax + c)$',
          isCorrect: true,
          feedback:
            'Correcto. El factor común es $3a$ y al dividir cada término queda $3a(3a^4 - 2ax + c)$.',
        },
        {
          id: 'b',
          labelLatex: '$3a(3a^5 - 2a^2x + ac)$',
          isCorrect: false,
          feedback:
            'Casi: las potencias de $a$ se reducen al dividir. $9a^5 \\div 3a = 3a^4$, no $3a^5$.',
        },
        {
          id: 'c',
          labelLatex: '$3(3a^5 - 2a^2x + ac)$',
          isCorrect: false,
          feedback:
            'Faltó extraer la $a$: como todos los términos contienen $a$, el factor común es $3a$.',
        },
        {
          id: 'd',
          labelLatex: '$a(9a^4 - 6ax + 3c)$',
          isCorrect: false,
          feedback:
            'Es correcto extraer $a$, pero también se puede extraer el 3: el factor común máximo es $3a$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Calculamos el MCD de los coeficientes $9$, $6$ y $3$.',
          mathLatex: '\\operatorname{MCD}(9,6,3) = 3',
        },
        {
          stepNumber: 2,
          explanation: 'Buscamos la menor potencia de $a$ que aparezca en todos los términos.',
          mathLatex: 'a^5,\\ a^2,\\ a \\Rightarrow \\text{mínimo: } a^1',
        },
        {
          stepNumber: 3,
          explanation: 'El factor común es $3a$. Dividimos cada término entre $3a$.',
          mathLatex:
            '\\frac{9a^5}{3a}=3a^4,\\quad \\frac{-6a^2x}{3a}=-2ax,\\quad \\frac{3ac}{3a}=c',
        },
        {
          stepNumber: 4,
          explanation: 'Reescribimos el polinomio como producto del factor común por el resultado.',
          mathLatex: '9a^5 - 6a^2x + 3ac = 3a(3a^4 - 2ax + c)',
        },
      ],
    },
    {
      id: 'factorizacion-2',
      title: 'Factor común por agrupación',
      statementLatex: 'Factorice la siguiente expresión: $$2(x-y) - m(y-x)$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x-y)(2+m)$',
          isCorrect: true,
          feedback:
            'Correcto. Como $y-x = -(x-y)$, la expresión queda $2(x-y) + m(x-y) = (x-y)(2+m)$.',
        },
        {
          id: 'b',
          labelLatex: '$(x-y)(2-m)$',
          isCorrect: false,
          feedback:
            'El signo del segundo término cambia: $y-x = -(x-y)$, así que $-m(y-x) = +m(x-y)$.',
        },
        {
          id: 'c',
          labelLatex: '$(y-x)(2-m)$',
          isCorrect: false,
          feedback: 'Pruebe escribir $y-x$ en función de $x-y$ para ver el factor común.',
        },
        {
          id: 'd',
          labelLatex: '$(x-y)(m-2)$',
          isCorrect: false,
          feedback: 'El factor común es $(x-y)$ y los coeficientes que quedan son $2$ y $+m$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Observamos que $y - x$ es el opuesto de $x - y$.',
          mathLatex: 'y - x = -(x - y)',
        },
        {
          stepNumber: 2,
          explanation: 'Sustituimos y cambiamos el signo del segundo término.',
          mathLatex: '2(x-y) - m(y-x) = 2(x-y) + m(x-y)',
        },
        {
          stepNumber: 3,
          explanation: 'Extraemos el factor común $(x-y)$.',
          mathLatex: '2(x-y) + m(x-y) = (x-y)(2+m)',
        },
      ],
    },
    {
      id: 'factorizacion-3',
      title: 'Trinomio cuadrado perfecto',
      statementLatex: 'Factorice el siguiente polinomio: $$100x^6 - 260x^3y^2 + 169y^4$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(10x^3 - 13y^2)^2$',
          isCorrect: true,
          feedback:
            'Correcto. Las raíces son $10x^3$ y $13y^2$; el doble producto es $260x^3y^2$ y el signo es negativo.',
        },
        {
          id: 'b',
          labelLatex: '$(10x^3 + 13y^2)^2$',
          isCorrect: false,
          feedback:
            'El término del medio es negativo, por lo que las raíces se restan: $(a - b)^2$.',
        },
        {
          id: 'c',
          labelLatex: '$(10x^6 - 13y^2)(10x^6 + 13y^2)$',
          isCorrect: false,
          feedback:
            'Es una diferencia de cuadrados, no aplica aquí. Además el exponente de $x$ es $x^3$, no $x^6$.',
        },
        {
          id: 'd',
          labelLatex: '$(10x^3 - 13y^2)(10x^3 + 13y^2)$',
          isCorrect: false,
          feedback: 'Eso daría $100x^6 - 169y^4$: falta el término del medio $260x^3y^2$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Identificamos las raíces cuadradas del primer y último término.',
          mathLatex: '\\sqrt{100x^6} = 10x^3,\\qquad \\sqrt{169y^4} = 13y^2',
        },
        {
          stepNumber: 2,
          explanation: 'Verificamos el término del medio: el doble producto de las raíces.',
          mathLatex: '2(10x^3)(13y^2) = 260x^3y^2',
        },
        {
          stepNumber: 3,
          explanation: 'Como el término del medio es negativo, el binomio se resta.',
          mathLatex: '100x^6 - 260x^3y^2 + 169y^4 = (10x^3 - 13y^2)^2',
        },
      ],
    },
    {
      id: 'factorizacion-4',
      title: 'Trinomio cuadrado perfecto (coeficiente fraccionario)',
      statementLatex: 'Factorice el siguiente polinomio: $$4x^2 - 6xy + \\frac{9}{4}y^2$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\left(2x - \\frac{3}{2}y\\right)^2$',
          isCorrect: true,
          feedback:
            'Correcto. $\\left(2x\\right)^2 = 4x^2$, $2(2x)(\\tfrac{3}{2}y) = 6xy$ y $\\left(\\tfrac{3}{2}y\\right)^2 = \\tfrac{9}{4}y^2$.',
        },
        {
          id: 'b',
          labelLatex: '$\\left(2x + \\frac{3}{2}y\\right)^2$',
          isCorrect: false,
          feedback: 'El término del medio es negativo, por lo que las raíces se restan.',
        },
        {
          id: 'c',
          labelLatex: '$(2x - 3y)^2$',
          isCorrect: false,
          feedback:
            'Verifique el último término: $(3y)^2 = 9y^2$, pero aquí debe ser $\\frac{9}{4}y^2$.',
        },
        {
          id: 'd',
          labelLatex: '$\\left(4x - \\frac{3}{2}y\\right)\\left(4x + \\frac{3}{2}y\\right)$',
          isCorrect: false,
          feedback: 'Esa forma corresponde a una diferencia de cuadrados, no a este trinomio.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Calculamos las raíces cuadradas del primer y último término.',
          mathLatex: '\\sqrt{4x^2} = 2x,\\qquad \\sqrt{\\frac{9}{4}y^2} = \\frac{3}{2}y',
        },
        {
          stepNumber: 2,
          explanation: 'Verificamos el término del medio con el doble producto.',
          mathLatex: '2\\left(2x\\right)\\left(\\frac{3}{2}y\\right) = 6xy',
        },
        {
          stepNumber: 3,
          explanation: 'Como el término del medio es negativo, restamos las raíces.',
          mathLatex: '4x^2 - 6xy + \\frac{9}{4}y^2 = \\left(2x - \\frac{3}{2}y\\right)^2',
        },
      ],
    },
    {
      id: 'factorizacion-5',
      title: 'Trinomio de la forma $x^2 + bx + c$',
      statementLatex: 'Factorice el siguiente polinomio: $$3x + x^2 - 28$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x + 7)(x - 4)$',
          isCorrect: true,
          feedback:
            'Correcto. Reordenando: $x^2 + 3x - 28$; los números $7$ y $-4$ cumplen $7\\cdot(-4) = -28$ y $7 + (-4) = 3$.',
        },
        {
          id: 'b',
          labelLatex: '$(x - 7)(x + 4)$',
          isCorrect: false,
          feedback: 'El producto es $-28$, pero la suma es $-3$, y necesitamos suma $3$.',
        },
        {
          id: 'c',
          labelLatex: '$(x + 14)(x - 2)$',
          isCorrect: false,
          feedback: 'La suma de $14$ y $-2$ es $12$, no $3$.',
        },
        {
          id: 'd',
          labelLatex: '$(x - 7)(x - 4)$',
          isCorrect: false,
          feedback: 'El producto sería $+28$, pero el término independiente es $-28$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Reordenamos el polinomio de mayor a menor grado.',
          mathLatex: '3x + x^2 - 28 = x^2 + 3x - 28',
        },
        {
          stepNumber: 2,
          explanation: 'Buscamos dos números cuyo producto sea $-28$ y cuya suma sea $3$.',
          mathLatex: 'p \\cdot q = -28,\\qquad p + q = 3 \\Rightarrow p = 7,\\ q = -4',
        },
        {
          stepNumber: 3,
          explanation: 'Escribimos la factorización.',
          mathLatex: 'x^2 + 3x - 28 = (x + 7)(x - 4)',
        },
      ],
    },
    {
      id: 'factorizacion-6',
      title: 'Trinomio de la forma $ax^2 + bxy + cy^2$',
      statementLatex: 'Factorice el siguiente polinomio: $$15m^6 - 41m^3b^5 + 14b^{10}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(5m^3 - 2b^5)(3m^3 - 7b^5)$',
          isCorrect: true,
          feedback:
            'Correcto. Con $u = m^3$ y $v = b^5$ queda $15u^2 - 41uv + 14v^2 = (5u - 2v)(3u - 7v)$.',
        },
        {
          id: 'b',
          labelLatex: '$(3m^3 - 2b^5)(5m^3 - 7b^5)$',
          isCorrect: false,
          feedback:
            'Verifique el término del medio: $3\\cdot(-7) + (-2)\\cdot5 = -31$, pero debe ser $-41$.',
        },
        {
          id: 'c',
          labelLatex: '$(5m^3 - 2b^5)(3m^3 + 7b^5)$',
          isCorrect: false,
          feedback: 'El último término quedaría $-14b^{10}$, pero es $+14b^{10}$.',
        },
        {
          id: 'd',
          labelLatex: '$(5m^6 - 2b^5)(3m^6 - 7b^5)$',
          isCorrect: false,
          feedback: 'Las potencias de $m$ deben reducirse: la variable es $m^3$, no $m^6$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Hacemos un cambio de variable para simplificar.',
          mathLatex: 'u = m^3,\\qquad v = b^5 \\Rightarrow 15u^2 - 41uv + 14v^2',
        },
        {
          stepNumber: 2,
          explanation:
            'Buscamos dos números cuyo producto sea $15 \\cdot 14 = 210$ y cuya suma sea $-41$.',
          mathLatex: '-35 \\cdot (-6) = 210,\\qquad -35 + (-6) = -41',
        },
        {
          stepNumber: 3,
          explanation: 'Factorizamos el trinomio en $u$ y $v$.',
          mathLatex: '15u^2 - 41uv + 14v^2 = (5u - 2v)(3u - 7v)',
        },
        {
          stepNumber: 4,
          explanation: 'Reemplazamos $u = m^3$ y $v = b^5$.',
          mathLatex: '(5m^3 - 2b^5)(3m^3 - 7b^5)',
        },
      ],
    },
    {
      id: 'factorizacion-7',
      title: 'Diferencia de cuadrados',
      statementLatex: 'Factorice la siguiente expresión: $$(x+7)^2 - (3x-16)^2$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(23 - 2x)(4x - 9)$',
          isCorrect: true,
          feedback:
            'Correcto. $A^2 - B^2 = (A-B)(A+B)$ con $A = x+7$ y $B = 3x-16$: $(23-2x)(4x-9)$.',
        },
        {
          id: 'b',
          labelLatex: '$(2x - 23)(4x - 9)$',
          isCorrect: false,
          feedback: 'Revisa los signos: $A - B = (x+7) - (3x-16) = 23 - 2x$, no $2x - 23$.',
        },
        {
          id: 'c',
          labelLatex: '$(23 - 2x)(4x + 9)$',
          isCorrect: false,
          feedback: '$A + B = (x+7) + (3x-16) = 4x - 9$, no $4x + 9$.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 7 - 3x + 16)(x + 7 + 3x - 16)$',
          isCorrect: false,
          feedback: 'Es la idea correcta, pero falta simplificar los binomios.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Aplicamos la diferencia de cuadrados con $A = x+7$ y $B = 3x-16$.',
          mathLatex: 'A^2 - B^2 = (A - B)(A + B)',
        },
        {
          stepNumber: 2,
          explanation: 'Calculamos $A - B$.',
          mathLatex: 'A - B = (x+7) - (3x-16) = x + 7 - 3x + 16 = 23 - 2x',
        },
        {
          stepNumber: 3,
          explanation: 'Calculamos $A + B$.',
          mathLatex: 'A + B = (x+7) + (3x-16) = x + 7 + 3x - 16 = 4x - 9',
        },
        {
          stepNumber: 4,
          explanation: 'Multiplicamos los binomios obtenidos.',
          mathLatex: '(x+7)^2 - (3x-16)^2 = (23 - 2x)(4x - 9)',
        },
      ],
    },
    {
      id: 'factorizacion-8',
      title: 'Factor común y diferencia de cuadrados',
      statementLatex: 'Factorice el siguiente polinomio: $$5x^4 - 80$$',
      options: [
        {
          id: 'a',
          labelLatex: '$5(x - 2)(x + 2)(x^2 + 4)$',
          isCorrect: true,
          feedback:
            'Correcto. Se extrae el $5$, luego $x^4 - 16 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4)$.',
        },
        {
          id: 'b',
          labelLatex: '$5(x^2 - 4)(x^2 + 4)$',
          isCorrect: false,
          feedback: 'Falta factorizar $x^2 - 4$, que todavía es una diferencia de cuadrados.',
        },
        {
          id: 'c',
          labelLatex: '$5(x - 2)(x + 2)$',
          isCorrect: false,
          feedback: 'Eso sería $5x^2 - 20$; el grado del polinomio es 4.',
        },
        {
          id: 'd',
          labelLatex: '$5(x^2 - 4)^2$',
          isCorrect: false,
          feedback: 'Al elevar al cuadrado no se obtiene $x^4 - 16$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el factor común 5.',
          mathLatex: '5x^4 - 80 = 5(x^4 - 16)',
        },
        {
          stepNumber: 2,
          explanation: 'Aplicamos diferencia de cuadrados: $x^4 = (x^2)^2$ y $16 = 4^2$.',
          mathLatex: 'x^4 - 16 = (x^2 - 4)(x^2 + 4)',
        },
        {
          stepNumber: 3,
          explanation: 'Factorizamos nuevamente $x^2 - 4$.',
          mathLatex: 'x^2 - 4 = (x - 2)(x + 2)',
        },
        {
          stepNumber: 4,
          explanation: 'Reunimos todos los factores.',
          mathLatex: '5x^4 - 80 = 5(x - 2)(x + 2)(x^2 + 4)',
        },
      ],
    },
    {
      id: 'factorizacion-9',
      title: 'Factor común y trinomio',
      statementLatex: 'Factorice el siguiente polinomio: $$x^3 - 7x^2 + 12x$$',
      options: [
        {
          id: 'a',
          labelLatex: '$x(x - 3)(x - 4)$',
          isCorrect: true,
          feedback: 'Correcto. Se extrae $x$ y luego $x^2 - 7x + 12 = (x-3)(x-4)$.',
        },
        {
          id: 'b',
          labelLatex: '$x(x + 3)(x + 4)$',
          isCorrect: false,
          feedback:
            'Los números $3$ y $4$ suman $7$ con signo positivo; aquí el coeficiente es $-7$.',
        },
        {
          id: 'c',
          labelLatex: '$x(x - 3)(x + 4)$',
          isCorrect: false,
          feedback: 'La suma de $-3$ y $4$ es $1$, no $-7$.',
        },
        {
          id: 'd',
          labelLatex: '$(x - 3)(x - 4)$',
          isCorrect: false,
          feedback: 'Faltó extraer el factor común $x$ del polinomio original.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el factor común $x$.',
          mathLatex: 'x^3 - 7x^2 + 12x = x(x^2 - 7x + 12)',
        },
        {
          stepNumber: 2,
          explanation: 'Buscamos dos números con producto $12$ y suma $-7$.',
          mathLatex: 'p \\cdot q = 12,\\qquad p + q = -7 \\Rightarrow p = -3,\\ q = -4',
        },
        {
          stepNumber: 3,
          explanation: 'Factorizamos el trinomio.',
          mathLatex: 'x(x^2 - 7x + 12) = x(x - 3)(x - 4)',
        },
      ],
    },
    {
      id: 'factorizacion-10',
      title: 'Diferencia de cuadrados combinada',
      statementLatex: 'Factorice el siguiente polinomio: $$-x^2 + 18x - 81 + y^2$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(y - x + 9)(y + x - 9)$',
          isCorrect: true,
          feedback:
            'Correcto. Reordenando: $y^2 - (x-9)^2$, que es diferencia de cuadrados: $(y - x + 9)(y + x - 9)$.',
        },
        {
          id: 'b',
          labelLatex: '$(y - x - 9)(y + x - 9)$',
          isCorrect: false,
          feedback: 'Al expandir $x-9$ con signo contrario: $- (x - 9)$ da $-x + 9$, no $-x - 9$.',
        },
        {
          id: 'c',
          labelLatex: '$(x - y + 9)(x + y - 9)$',
          isCorrect: false,
          feedback:
            'Verifique el orden: el cuadrado que resta es $(x-9)^2$, así que el primer factor empieza con $y$.',
        },
        {
          id: 'd',
          labelLatex: '$y^2 - (x - 9)^2$',
          isCorrect: false,
          feedback:
            'Es la factorización intermedia correcta, pero aún falta escribir la diferencia de cuadrados.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Reordenamos los términos para agrupar los que dependen de $x$.',
          mathLatex: '-x^2 + 18x - 81 + y^2 = y^2 - (x^2 - 18x + 81)',
        },
        {
          stepNumber: 2,
          explanation: 'Reconocemos que $x^2 - 18x + 81$ es un trinomio cuadrado perfecto.',
          mathLatex: 'x^2 - 18x + 81 = (x - 9)^2',
        },
        {
          stepNumber: 3,
          explanation: 'Aplicamos diferencia de cuadrados.',
          mathLatex: 'y^2 - (x-9)^2 = (y - (x-9))(y + (x-9))',
        },
        {
          stepNumber: 4,
          explanation: 'Simplificamos los signos.',
          mathLatex: '(y - x + 9)(y + x - 9)',
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// UNIDAD 2 — Simplificación de expresiones algebraicas racionales
// ---------------------------------------------------------------------------

const simplificacionRacionales: PracticeUnit = {
  id: 'simplificacion-racionales',
  title: 'Simplificación de Expresiones Racionales',
  subject: 'Álgebra',
  description:
    'Simplifique las siguientes expresiones algebraicas racionales factorizando el numerador y el denominador y cancelando los factores comunes.',
  theory: [
    {
      title: 'Pasos para simplificar',
      contentLatex:
        'Una expresión racional es una fracción de polinomios. Para simplificarla: 1) factorice numerador y denominador; 2) identifique los factores comunes; 3) cancele los factores comunes (siempre que no se anulen).',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Simplifique $\\dfrac{x^2 - 9}{x^2 - 6x + 9}$.',
          solutionLatex:
            'Factorizamos: $x^2 - 9 = (x+3)(x-3)$ y $x^2 - 6x + 9 = (x-3)^2$. Cancelando $(x-3)$: $$\\frac{(x+3)(x-3)}{(x-3)^2} = \\frac{x+3}{x-3}.$$',
        },
      ],
    },
    {
      title: 'Cociente de monomios',
      contentLatex:
        'Para dividir monomios se restan los exponentes de las variables iguales y se simplifican los coeficientes numéricos: $$\\frac{a^m}{a^n} = a^{m-n}.$$',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Simplifique $\\dfrac{24s^3t}{36s^3t^2 + 48s^4t}$.',
          solutionLatex:
            'Factor común del denominador: $12s^3t(3t + 4s)$. Cancelando $12s^3t$: $$\\frac{24s^3t}{12s^3t(3t + 4s)} = \\frac{2}{3t + 4s}.$$',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'racionales-1',
      title: 'Sin factores comunes',
      statementLatex:
        'Simplifique la siguiente expresión: $$\\frac{16a^2 - 25}{12a^4 - 7a^2 - 10}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{16a^2 - 25}{12a^4 - 7a^2 - 10}$ (ya está simplificada)',
          isCorrect: true,
          feedback:
            'Correcto. El numerador se factoriza como $(4a-5)(4a+5)$ y el denominador como $(3a^2+2)(4a^2-5)$; no hay factores comunes, así que la expresión no se puede simplificar más.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{4a + 5}{3a + 2}$',
          isCorrect: false,
          feedback:
            'Ese resultado sería válido si el denominador fuera $12a^2 - 7a - 10$. Verifique las potencias de $a$ del denominador original.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{4a^2 + 5}{3a^2 + 2}$',
          isCorrect: false,
          feedback:
            'Falta el factor común: el numerador $16a^2 - 25$ se factoriza como $(4a-5)(4a+5)$, no como $4a^2 - 25$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{4a - 5}{3a^2 + 2}$',
          isCorrect: false,
          feedback:
            'El numerador no contiene el factor $(4a^2 - 5)$ que sí está en el denominador.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el numerador como diferencia de cuadrados.',
          mathLatex: '16a^2 - 25 = (4a - 5)(4a + 5)',
        },
        {
          stepNumber: 2,
          explanation: 'Factorizamos el denominador con el cambio $u = a^2$.',
          mathLatex: '12a^4 - 7a^2 - 10 = 12u^2 - 7u - 10 = (3u + 2)(4u - 5)',
        },
        {
          stepNumber: 3,
          explanation: 'Reemplazamos $u = a^2$.',
          mathLatex: '(3a^2 + 2)(4a^2 - 5)',
        },
        {
          stepNumber: 4,
          explanation:
            'No existen factores comunes entre $(4a-5)(4a+5)$ y $(3a^2+2)(4a^2-5)$, por lo que la expresión queda igual.',
          mathLatex: '\\frac{16a^2 - 25}{12a^4 - 7a^2 - 10}',
        },
      ],
    },
    {
      id: 'racionales-2',
      title: 'Cociente con monomios',
      statementLatex: 'Simplifique la siguiente expresión: $$\\frac{24s^3t}{36s^3t^2 + 48s^4t}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2}{3t + 4s}$',
          isCorrect: true,
          feedback:
            'Correcto. El denominador factoriza como $12s^3t(3t + 4s)$ y al cancelar queda $\\frac{2}{3t+4s}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{2}{3t^2 + 4s}$',
          isCorrect: false,
          feedback: 'Al extraer $t$ del denominador, en el primer término queda $3t$, no $3t^2$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{1}{3t + 4s}$',
          isCorrect: false,
          feedback: 'Al cancelar $12s^3t$: $24 \\div 12 = 2$, no $1$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{2}{3t + 4s^2}$',
          isCorrect: false,
          feedback: 'Al extraer $s^3$, en el segundo término queda $4s$, no $4s^2$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el factor común del denominador.',
          mathLatex: '36s^3t^2 + 48s^4t = 12s^3t(3t + 4s)',
        },
        {
          stepNumber: 2,
          explanation: 'Reescribimos la fracción y cancelamos el factor común $12s^3t$.',
          mathLatex: '\\frac{24s^3t}{12s^3t(3t + 4s)} = \\frac{2}{3t + 4s}',
        },
      ],
    },
    {
      id: 'racionales-3',
      title: 'Factorización en ambos términos',
      statementLatex:
        'Simplifique la siguiente expresión: $$\\frac{2x^2 - 2x - 4}{2x^2 + 3x + 1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{2(x - 2)}{2x + 1}$',
          isCorrect: true,
          feedback:
            'Correcto. $2x^2 - 2x - 4 = 2(x-2)(x+1)$ y $2x^2 + 3x + 1 = (2x+1)(x+1)$; se cancela $(x+1)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x - 2}{2x + 1}$',
          isCorrect: false,
          feedback: 'Falta el factor 2: el numerador es $2(x^2 - x - 2) = 2(x-2)(x+1)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{2(x - 2)}{x + 1}$',
          isCorrect: false,
          feedback: 'El factor común es $(x+1)$, no $(2x+1)$. Revise el denominador.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{2(x + 2)}{2x + 1}$',
          isCorrect: false,
          feedback: 'En $x^2 - x - 2$ los números son $-2$ y $1$: da $(x-2)(x+1)$, no $(x+2)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el factor común 2 del numerador.',
          mathLatex: '2x^2 - 2x - 4 = 2(x^2 - x - 2)',
        },
        {
          stepNumber: 2,
          explanation: 'Factorizamos $x^2 - x - 2$.',
          mathLatex: 'x^2 - x - 2 = (x - 2)(x + 1)',
        },
        {
          stepNumber: 3,
          explanation: 'Factorizamos el denominador.',
          mathLatex: '2x^2 + 3x + 1 = (2x + 1)(x + 1)',
        },
        {
          stepNumber: 4,
          explanation: 'Cancelamos el factor común $(x+1)$.',
          mathLatex: '\\frac{2(x-2)(x+1)}{(2x+1)(x+1)} = \\frac{2(x-2)}{2x+1}',
        },
      ],
    },
    {
      id: 'racionales-4',
      title: 'Diferencia de cuadrados sobre trinomio',
      statementLatex: 'Simplifique la siguiente expresión: $$\\frac{x^2 - 1}{x^2 + 2x + 1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x - 1}{x + 1}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^2 - 1 = (x-1)(x+1)$ y $x^2 + 2x + 1 = (x+1)^2$; se cancela un $(x+1)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x + 1}{x - 1}$',
          isCorrect: false,
          feedback: 'Está invertida: el factor que queda arriba es $(x-1)$ y abajo $(x+1)$.',
        },
        {
          id: 'c',
          labelLatex: '$x - 1$',
          isCorrect: false,
          feedback: 'No se puede cancelar el $(x+1)$ completo: queda $(x+1)$ en el denominador.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{1}{x + 1}$',
          isCorrect: false,
          feedback: 'También queda el factor $(x-1)$ en el numerador.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el numerador como diferencia de cuadrados.',
          mathLatex: 'x^2 - 1 = (x - 1)(x + 1)',
        },
        {
          stepNumber: 2,
          explanation: 'Reconocemos el trinomio cuadrado perfecto del denominador.',
          mathLatex: 'x^2 + 2x + 1 = (x + 1)^2',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos un factor $(x+1)$.',
          mathLatex: '\\frac{(x-1)(x+1)}{(x+1)^2} = \\frac{x-1}{x+1}',
        },
      ],
    },
    {
      id: 'racionales-5',
      title: 'Factorización del denominador',
      statementLatex: 'Simplifique la siguiente expresión: $$\\frac{3a - 4}{6a^2 - 23a + 20}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{1}{2a - 5}$',
          isCorrect: true,
          feedback: 'Correcto. $6a^2 - 23a + 20 = (3a - 4)(2a - 5)$ y se cancela $(3a - 4)$.',
        },
        {
          id: 'b',
          labelLatex: '$2a - 5$',
          isCorrect: false,
          feedback:
            'El factor $(3a - 4)$ del numerador se cancela, pero queda en el denominador $(2a - 5)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{1}{3a - 4}$',
          isCorrect: false,
          feedback:
            'El denominador se factoriza como $(3a-4)(2a-5)$; al cancelar $(3a-4)$ queda $\\frac{1}{2a-5}$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{3a - 4}{2a - 5}$',
          isCorrect: false,
          feedback: 'Es la factorización, pero todavía se puede cancelar $(3a-4)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el denominador.',
          mathLatex: '6a^2 - 23a + 20 = (3a - 4)(2a - 5)',
        },
        {
          stepNumber: 2,
          explanation: 'Cancelamos el factor común $(3a - 4)$.',
          mathLatex: '\\frac{3a - 4}{(3a-4)(2a-5)} = \\frac{1}{2a - 5}',
        },
      ],
    },
    {
      id: 'racionales-6',
      title: 'Signo del denominador',
      statementLatex:
        'Simplifique la siguiente expresión: $$\\frac{5x^2 - 19x + 12}{-x^2 - 2x + 15}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{4 - 5x}{x + 5}$',
          isCorrect: true,
          feedback:
            'Correcto. $5x^2 - 19x + 12 = (5x-4)(x-3)$ y $-x^2 - 2x + 15 = -(x+5)(x-3)$, de donde resulta $\\frac{4-5x}{x+5}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{5x - 4}{x + 5}$',
          isCorrect: false,
          feedback: 'Al extraer el signo negativo del denominador, el signo del numerador cambia.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{5x - 4}{x - 5}$',
          isCorrect: false,
          feedback: 'El denominador $-x^2 - 2x + 15$ factoriza como $-(x+5)(x-3)$, no $x-5$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{4 - 5x}{x - 5}$',
          isCorrect: false,
          feedback: 'Verifique la factorización del denominador: incluye $(x+5)$, no $(x-5)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos el numerador.',
          mathLatex: '5x^2 - 19x + 12 = (5x - 4)(x - 3)',
        },
        {
          stepNumber: 2,
          explanation: 'Factorizamos el denominador extrayendo el signo negativo.',
          mathLatex: '-x^2 - 2x + 15 = -(x^2 + 2x - 15) = -(x + 5)(x - 3)',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos el factor común $(x - 3)$ y reordenamos el signo.',
          mathLatex: '\\frac{(5x-4)(x-3)}{-(x+5)(x-3)} = \\frac{5x-4}{-(x+5)} = \\frac{4-5x}{x+5}',
        },
      ],
    },
    {
      id: 'racionales-7',
      title: 'Suma de cubos en el numerador',
      statementLatex: 'Simplifique la siguiente expresión: $$\\frac{x^3 + x}{x^4 - 1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x}{x^2 - 1}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^3 + x = x(x^2 + 1)$ y $x^4 - 1 = (x^2 - 1)(x^2 + 1)$; se cancela $(x^2 + 1)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{1}{x^2 - 1}$',
          isCorrect: false,
          feedback: 'Al cancelar $(x^2 + 1)$ también queda el factor $x$ del numerador.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x}{x^2 + 1}$',
          isCorrect: false,
          feedback:
            'El denominador factoriza como $(x^2-1)(x^2+1)$; el factor que se cancela es $(x^2+1)$.',
        },
        {
          id: 'd',
          labelLatex: '$x^2 + 1$',
          isCorrect: false,
          feedback:
            'El resultado es una fracción; todavía quedan factores en el numerador y el denominador.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el factor común $x$ del numerador.',
          mathLatex: 'x^3 + x = x(x^2 + 1)',
        },
        {
          stepNumber: 2,
          explanation: 'Factorizamos el denominador como diferencia de cuadrados.',
          mathLatex: 'x^4 - 1 = (x^2 - 1)(x^2 + 1)',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos el factor común $(x^2 + 1)$.',
          mathLatex: '\\frac{x(x^2+1)}{(x^2-1)(x^2+1)} = \\frac{x}{x^2-1}',
        },
      ],
    },
    {
      id: 'racionales-8',
      title: 'Factor común y trinomio',
      statementLatex: 'Simplifique la siguiente expresión: $$\\frac{x^3 - 9x}{x^3 - 6x^2 + 9x}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x + 3}{x - 3}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^3 - 9x = x(x-3)(x+3)$ y $x^3 - 6x^2 + 9x = x(x-3)^2$; se cancela $x(x-3)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x - 3}{x + 3}$',
          isCorrect: false,
          feedback: 'Está invertida: el factor que queda arriba es $(x+3)$ y abajo $(x-3)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x + 3}{x}$',
          isCorrect: false,
          feedback:
            'El denominador también contiene un factor $(x-3)$, que se cancela con el del numerador.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{1}{x - 3}$',
          isCorrect: false,
          feedback: 'También queda el factor $(x+3)$ en el numerador.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el factor común $x$ del numerador.',
          mathLatex: 'x^3 - 9x = x(x^2 - 9) = x(x - 3)(x + 3)',
        },
        {
          stepNumber: 2,
          explanation: 'Extraemos el factor común $x$ del denominador.',
          mathLatex: 'x^3 - 6x^2 + 9x = x(x^2 - 6x + 9) = x(x - 3)^2',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos el factor común $x(x - 3)$.',
          mathLatex: '\\frac{x(x-3)(x+3)}{x(x-3)^2} = \\frac{x+3}{x-3}',
        },
      ],
    },
    {
      id: 'racionales-9',
      title: 'Factorización múltiple',
      statementLatex:
        'Simplifique la siguiente expresión: $$\\frac{(x^2+8x+16)(x-5)}{(x^2-5x)(x^2-16)}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x + 4}{x(x - 4)}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^2+8x+16=(x+4)^2$, $x^2-5x=x(x-5)$ y $x^2-16=(x-4)(x+4)$; se cancelan $(x+4)$ y $(x-5)$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x + 4}{x}$',
          isCorrect: false,
          feedback: 'También se cancela el factor $(x-4)$ que queda en el denominador.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{(x+4)^2}{x(x-4)}$',
          isCorrect: false,
          feedback: 'Solo se cancela un $(x+4)$; el denominador aporta otro $(x+4)$ por $x^2-16$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x + 4}{x - 4}$',
          isCorrect: false,
          feedback: 'Falta el factor $x$ que proviene de $x^2 - 5x = x(x-5)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos cada parte del numerador.',
          mathLatex: 'x^2 + 8x + 16 = (x+4)^2',
        },
        {
          stepNumber: 2,
          explanation: 'Factorizamos el denominador.',
          mathLatex: 'x^2 - 5x = x(x-5),\\qquad x^2 - 16 = (x-4)(x+4)',
        },
        {
          stepNumber: 3,
          explanation: 'Reescribimos toda la expresión.',
          mathLatex: '\\frac{(x+4)^2(x-5)}{x(x-5)(x-4)(x+4)}',
        },
        {
          stepNumber: 4,
          explanation: 'Cancelamos los factores comunes $(x+4)$ y $(x-5)$.',
          mathLatex: '\\frac{x+4}{x(x-4)}',
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// UNIDAD 3 — Operaciones con expresiones algebraicas racionales
// ---------------------------------------------------------------------------

const operacionesRacionales: PracticeUnit = {
  id: 'operaciones-racionales',
  title: 'Operaciones con Expresiones Racionales',
  subject: 'Álgebra',
  description:
    'Resuelva multiplicaciones y divisiones de expresiones algebraicas racionales factorizando y cancelando antes de operar.',
  theory: [
    {
      title: 'Multiplicación de fracciones',
      contentLatex:
        'Para multiplicar fracciones racionales se multiplican numeradores y denominadores. Se recomienda **factorizar primero** y cancelar factores comunes: $$\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{A \\cdot C}{B \\cdot D}.$$',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Multiplique $\\dfrac{(x-5)^2}{9} \\cdot \\dfrac{3x+15}{x^2-25}$.',
          solutionLatex:
            'Factorizamos: $3x+15 = 3(x+5)$ y $x^2-25 = (x-5)(x+5)$. Cancelando: $$\\frac{(x-5)^2 \\cdot 3(x+5)}{9(x-5)(x+5)} = \\frac{x-5}{3}.$$',
        },
      ],
    },
    {
      title: 'División de fracciones',
      contentLatex:
        'Dividir entre una fracción equivale a multiplicar por su recíproca: $$\\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C}.$$ Luego se factoriza y se cancela.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Divida $\\dfrac{x-3}{x^2-9} \\div \\dfrac{x+2}{x^2+5x+6}$.',
          solutionLatex:
            'Invertimos la segunda fracción: $\\dfrac{x-3}{(x-3)(x+3)} \\cdot \\dfrac{(x+2)(x+3)}{x+2}$. Cancelando queda: $$\\frac{1}{x+3} \\cdot \\frac{x+3}{1} = 1.$$',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'operaciones-1',
      title: 'Producto con términos opuestos',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{x+y}{y-x} \\cdot \\frac{x-y}{x+y}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$-1$',
          isCorrect: true,
          feedback:
            'Correcto. Se cancela $(x+y)$ y queda $\\frac{x-y}{y-x} = \\frac{x-y}{-(x-y)} = -1$.',
        },
        {
          id: 'b',
          labelLatex: '$1$',
          isCorrect: false,
          feedback: 'El cociente $\\frac{x-y}{y-x}$ es $-1$ porque $y-x = -(x-y)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{(x+y)^2}{(y-x)^2}$',
          isCorrect: false,
          feedback: 'Olvidó cancelar los factores comunes entre numerador y denominador.',
        },
        {
          id: 'd',
          labelLatex: '$0$',
          isCorrect: false,
          feedback: 'Ningún factor se anula; recuerde que $y-x = -(x-y)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Observamos que $x - y = -(y - x)$.',
          mathLatex: 'x - y = -(y - x)',
        },
        {
          stepNumber: 2,
          explanation: 'Cancelamos el factor común $(x+y)$ de numeradores y denominadores.',
          mathLatex: '\\frac{x+y}{y-x} \\cdot \\frac{x-y}{x+y} = \\frac{x-y}{y-x}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $x-y$ por $-(y-x)$ y simplificamos.',
          mathLatex: '\\frac{x-y}{y-x} = \\frac{-(y-x)}{y-x} = -1',
        },
      ],
    },
    {
      id: 'operaciones-2',
      title: 'Producto de fracciones',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{(x-5)^2}{9} \\cdot \\frac{3x+15}{x^2-25}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x - 5}{3}$',
          isCorrect: true,
          feedback:
            'Correcto. $3x+15 = 3(x+5)$ y $x^2-25 = (x-5)(x+5)$; al cancelar queda $\\frac{x-5}{3}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{(x-5)^2}{9}$',
          isCorrect: false,
          feedback: 'También se cancelan $(x+5)$ y un $(x-5)$, y el 3 simplifica con el 9.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x - 5}{9}$',
          isCorrect: false,
          feedback:
            'El factor 3 del numerador se cancela con el 9 del denominador: queda $\\frac{1}{3}$, no $\\frac{1}{9}$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x + 5}{3}$',
          isCorrect: false,
          feedback: 'El factor que queda del numerador es $(x-5)$; $(x+5)$ se cancela.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos $3x + 15$ y $x^2 - 25$.',
          mathLatex: '3x+15 = 3(x+5),\\qquad x^2-25 = (x-5)(x+5)',
        },
        {
          stepNumber: 2,
          explanation: 'Multiplicamos los numeradores y denominadores.',
          mathLatex: '\\frac{(x-5)^2 \\cdot 3(x+5)}{9(x-5)(x+5)}',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos $(x+5)$ y un $(x-5)$.',
          mathLatex: '\\frac{3(x-5)}{9}',
        },
        {
          stepNumber: 4,
          explanation: 'Simplificamos $3/9 = 1/3$.',
          mathLatex: '\\frac{3(x-5)}{9} = \\frac{x-5}{3}',
        },
      ],
    },
    {
      id: 'operaciones-3',
      title: 'Producto con potencias',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{x^4-1}{x^2} \\cdot \\frac{x^4}{(x^2-1)^2}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x^2(x^2+1)}{x^2 - 1}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^4-1 = (x^2-1)(x^2+1)$ y $x^4/x^2 = x^2$; al cancelar $(x^2-1)$ queda $\\frac{x^2(x^2+1)}{x^2-1}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x^2 + 1}{x^2 - 1}$',
          isCorrect: false,
          feedback: 'Al simplificar $x^4/x^2$ queda un factor $x^2$ adicional en el numerador.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x^4(x^2+1)}{(x^2-1)^2}$',
          isCorrect: false,
          feedback: 'Olvidó simplificar $x^4/x^2$ y cancelar un $(x^2-1)$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{x^4}{x^2 - 1}$',
          isCorrect: false,
          feedback: 'Al cancelar $(x^2-1)$ se conserva el factor $(x^2+1)$ del numerador.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos $x^4 - 1$ como diferencia de cuadrados.',
          mathLatex: 'x^4 - 1 = (x^2 - 1)(x^2 + 1)',
        },
        {
          stepNumber: 2,
          explanation: 'Multiplicamos los numeradores y denominadores.',
          mathLatex: '\\frac{(x^2-1)(x^2+1) \\cdot x^4}{x^2(x^2-1)^2}',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos un factor $(x^2-1)$ y simplificamos $x^4/x^2 = x^2$.',
          mathLatex: '\\frac{x^2(x^2+1)}{x^2-1}',
        },
      ],
    },
    {
      id: 'operaciones-4',
      title: 'Producto de fracciones',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{x^2+x-2}{x^2-4} \\cdot \\frac{x^3-2x^2}{x^2-2x+1}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{x^2}{x - 1}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^2+x-2=(x+2)(x-1)$, $x^2-4=(x-2)(x+2)$, $x^3-2x^2=x^2(x-2)$ y $x^2-2x+1=(x-1)^2$; al cancelar queda $\\frac{x^2}{x-1}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x^2}{x + 1}$',
          isCorrect: false,
          feedback: 'El factor que queda en el denominador es $(x-1)$, no $(x+1)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x^2}{(x-1)^2}$',
          isCorrect: false,
          feedback: 'Un $(x-1)$ del denominador se cancela con el del numerador.',
        },
        {
          id: 'd',
          labelLatex: '$x^2$',
          isCorrect: false,
          feedback: 'El denominador conserva el factor $(x-1)$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos los cuatro polinomios.',
          mathLatex:
            'x^2+x-2=(x+2)(x-1),\\quad x^2-4=(x-2)(x+2),\\quad x^3-2x^2=x^2(x-2),\\quad x^2-2x+1=(x-1)^2',
        },
        {
          stepNumber: 2,
          explanation: 'Reescribimos el producto.',
          mathLatex: '\\frac{(x+2)(x-1)}{(x-2)(x+2)} \\cdot \\frac{x^2(x-2)}{(x-1)^2}',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos los factores comunes.',
          mathLatex: '\\frac{x-1}{x-2} \\cdot \\frac{x^2(x-2)}{(x-1)^2}',
        },
        {
          stepNumber: 4,
          explanation: 'Simplificamos el resultado final.',
          mathLatex: '\\frac{x^2}{x-1}',
        },
      ],
    },
    {
      id: 'operaciones-5',
      title: 'División de fracciones',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{2y^2-5y-3}{2y^2+9y+4} \\div \\frac{y^2-3y}{y^2+6y+8}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{y + 2}{y}$',
          isCorrect: true,
          feedback:
            'Correcto. Factorizando e invirtiendo la segunda fracción y cancelando, queda $\\frac{y+2}{y}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{y + 4}{y}$',
          isCorrect: false,
          feedback: 'Los factores $(y+4)$ y $(2y+1)$ se cancelan; el factor que queda es $(y+2)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{y + 2}{y + 4}$',
          isCorrect: false,
          feedback: 'El factor $(y+4)$ se cancela al multiplicar por la fracción invertida.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{2y + 1}{y - 3}$',
          isCorrect: false,
          feedback: 'Esos factores se cancelan en la operación; no forman parte del resultado.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos cada polinomio.',
          mathLatex:
            '2y^2-5y-3=(2y+1)(y-3),\\quad 2y^2+9y+4=(2y+1)(y+4),\\quad y^2-3y=y(y-3),\\quad y^2+6y+8=(y+2)(y+4)',
        },
        {
          stepNumber: 2,
          explanation: 'Convertimos la división en multiplicación por el recíproco.',
          mathLatex: '\\frac{(2y+1)(y-3)}{(2y+1)(y+4)} \\cdot \\frac{(y+2)(y+4)}{y(y-3)}',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos los factores comunes.',
          mathLatex: '\\frac{y+2}{y}',
        },
      ],
    },
    {
      id: 'operaciones-6',
      title: 'División de fracciones',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{x^2-10x-24}{x^2+6x} \\div \\frac{x^2-4}{x^2+12x+36}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{(x-12)(x+6)}{x(x-2)}$',
          isCorrect: true,
          feedback:
            'Correcto. $x^2-10x-24=(x-12)(x+2)$, $x^2+6x=x(x+6)$, $x^2-4=(x-2)(x+2)$ y $x^2+12x+36=(x+6)^2$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{x - 12}{x - 2}$',
          isCorrect: false,
          feedback:
            'También queda el factor $(x+6)$ en el numerador y el factor $x$ en el denominador.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{x - 12}{x(x-2)}$',
          isCorrect: false,
          feedback: 'El factor $(x+6)$ del numerador no se cancela por completo.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{(x-12)(x+2)}{x(x-2)}$',
          isCorrect: false,
          feedback: 'El factor $(x+2)$ se cancela con el de $x^2-4$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos cada polinomio.',
          mathLatex:
            'x^2-10x-24=(x-12)(x+2),\\quad x^2+6x=x(x+6),\\quad x^2-4=(x-2)(x+2),\\quad x^2+12x+36=(x+6)^2',
        },
        {
          stepNumber: 2,
          explanation: 'Invertimos la segunda fracción y multiplicamos.',
          mathLatex: '\\frac{(x-12)(x+2)}{x(x+6)} \\cdot \\frac{(x+6)^2}{(x-2)(x+2)}',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos los factores comunes.',
          mathLatex: '\\frac{(x-12)(x+6)}{x(x-2)}',
        },
      ],
    },
    {
      id: 'operaciones-7',
      title: 'División de fracciones con dos variables',
      statementLatex:
        'Resuelva la siguiente operación: $$\\frac{a-3b}{a^2-6ab+9b^2} \\div \\frac{a^2+7ab+12b^2}{a+3b}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{1}{(a-3b)(a+4b)}$',
          isCorrect: true,
          feedback:
            'Correcto. $a^2-6ab+9b^2=(a-3b)^2$ y $a^2+7ab+12b^2=(a+3b)(a+4b)$; al cancelar queda $\\frac{1}{(a-3b)(a+4b)}$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{1}{(a-3b)(a+3b)}$',
          isCorrect: false,
          feedback: 'El segundo binomio del denominador es $(a+4b)$, no $(a+3b)$.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{1}{a - 3b}$',
          isCorrect: false,
          feedback: 'También queda el factor $(a+4b)$ en el denominador.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{a + 3b}{a - 3b}$',
          isCorrect: false,
          feedback: 'El factor $(a+3b)$ se cancela al invertir la segunda fracción.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Factorizamos cada polinomio.',
          mathLatex: 'a^2-6ab+9b^2=(a-3b)^2,\\qquad a^2+7ab+12b^2=(a+3b)(a+4b)',
        },
        {
          stepNumber: 2,
          explanation: 'Invertimos la segunda fracción y multiplicamos.',
          mathLatex: '\\frac{a-3b}{(a-3b)^2} \\cdot \\frac{a+3b}{(a+3b)(a+4b)}',
        },
        {
          stepNumber: 3,
          explanation: 'Cancelamos los factores comunes $(a-3b)$ y $(a+3b)$.',
          mathLatex: '\\frac{1}{(a-3b)(a+4b)}',
        },
      ],
    },
  ],
};

export const practices: PracticeUnit[] = [
  factorizacion,
  simplificacionRacionales,
  operacionesRacionales,
];

export function getPractice(id: string): PracticeUnit | undefined {
  return practices.find((p) => p.id === id);
}

export function getPracticeIds(): string[] {
  return practices.map((p) => p.id);
}
