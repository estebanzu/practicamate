// ============================================================================
// Dataset de prácticas — Completar cuadrados (Noveno Nivel)
// Objetivo 3 de la prueba trimestral II periodo: técnica de completar el
// cuadrado para transformar, factorizar y analizar expresiones cuadráticas.
// ============================================================================

import type { PracticeUnit } from './practices';

const completarCuadrados: PracticeUnit = {
  id: 'completar-cuadrados',
  title: 'Completar Cuadrados',
  subject: 'Álgebra',
  topic: 'completar-cuadrados',
  description:
    'Transforma expresiones cuadráticas en cuadrados perfectos: encuentra el término constante que falta, trabaja con coeficiente distinto de 1 y factoriza completando el cuadrado.',
  theory: [
    {
      title: 'La idea central',
      contentLatex:
        'Completar el cuadrado consiste en añadir el término que falta para convertir $x^2 + bx$ en un cuadrado perfecto. Ese término es siempre el **cuadrado de la mitad** del coeficiente lineal: $$x^2 + bx + \\left(\\frac{b}{2}\\right)^2 = \\left(x + \\frac{b}{2}\\right)^2.$$ Si la expresión tiene término independiente, se compensa sumando y restando.',
      examples: [
        {
          title: 'Ejemplo resuelto: hallar el constante',
          statementLatex:
            '¿Qué número completa $x^2 + 10x + \\underline{\\quad}$ para que sea un TCP?',
          solutionLatex:
            'Mitad del coeficiente: $10/2 = 5$. Elevamos al cuadrado: $$\\left(\\frac{10}{2}\\right)^2 = 25.$$ Entonces $x^2 + 10x + 25 = (x + 5)^2$. Verificación: el doble producto $2(x)(5) = 10x$ coincide. ✔',
        },
        {
          title: 'Ejemplo resuelto con signo negativo',
          statementLatex:
            'Completa $x^2 - 8x + \\underline{\\quad}$ y escribe el binomio resultante.',
          solutionLatex:
            'Mitad de $-8$: $-4$. Cuadrado: $16$. $$x^2 - 8x + 16 = (x - 4)^2.$$ El binomio conserva el **signo** del coeficiente lineal.',
        },
      ],
    },
    {
      title: 'Forma (x + h)² + k',
      contentLatex:
        'Cuando ya existe un término independiente, se completa el cuadrado **sumando y restando** el mismo número, para no alterar la expresión: $$x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 + k,$$ donde $k = c - \\left(\\frac{b}{2}\\right)^2$.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Expresa $x^2 + 6x + 2$ en la forma $(x + h)^2 + k$.',
          solutionLatex:
            'Término necesario: $(6/2)^2 = 9$. Sumamos y restamos $9$: $$x^2 + 6x + 2 = (x^2 + 6x + 9) - 9 + 2 = (x + 3)^2 - 7.$$',
        },
      ],
    },
    {
      title: 'Con coeficiente a ≠ 1',
      contentLatex:
        'Si el término cuadrático tiene coeficiente $a \\neq 1$, primero se **factoriza** $a$ de los términos con variable y se completa el cuadrado adentro; al final se distribuye: $$ax^2 + bx + c = a\\left[x^2 + \\frac{b}{a}x + \\cdots\\right].$$ El número que completa por dentro es $\\left(\\dfrac{b}{2a}\\right)^2$, pero al multiplicar afuera aporta $a \\cdot \\left(\\dfrac{b}{2a}\\right)^2$.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: '¿Qué constante hace perfecto a $2x^2 + 12x + \\underline{\\quad}$?',
          solutionLatex:
            'Factorizamos el $2$: $2(x^2 + 6x + \\underline{\\quad})$. Dentro del paréntesis falta $(6/2)^2 = 9$. Al multiplicar afuera: $$2(x^2 + 6x + 9) = 2x^2 + 12x + 18.$$ La constante es $18$ y el resultado es $2(x+3)^2$.',
        },
      ],
    },
    {
      title: 'Factorizar completando el cuadrado',
      contentLatex:
        'Si una cuadrática no se factoriza fácilmente por inspección, completamos el cuadrado hasta obtener una **diferencia de cuadrados**: $$x^2 + bx + c = (x + h)^2 - d = (x + h - \\sqrt{d})(x + h + \\sqrt{d}),$$ cuando $d$ es un cuadrado perfecto. Es el método de respaldo más potente.',
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'Factorice $x^2 + 6x - 7$ completando el cuadrado.',
          solutionLatex:
            '$(6/2)^2 = 9$. Reescribimos: $$x^2 + 6x - 7 = (x^2 + 6x + 9) - 9 - 7 = (x + 3)^2 - 16.$$ Diferencia de cuadrados: $$(x + 3 - 4)(x + 3 + 4) = (x - 1)(x + 7).$$',
        },
      ],
    },
  ],
  exercises: [
    // ------------------------------------------------------------------ CC-01
    {
      id: 'cc-01',
      title: 'Hallar el constante',
      statementLatex:
        '¿Qué término constante convierte en TCP a la siguiente expresión? $$x^2 + 6x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$36$',
          isCorrect: false,
          feedback:
            'Elevaste al cuadrado el coeficiente completo ($6^2$). Se usa el **cuadrado de la mitad**: $(6/2)^2$.',
        },
        {
          id: 'b',
          labelLatex: '$12$',
          isCorrect: false,
          feedback:
            'Ese sería el doble producto si las raíces fueran $1$ y $6$... aquí el método es: mitad del coeficiente, elevada al cuadrado.',
        },
        {
          id: 'c',
          labelLatex: '$9$',
          isCorrect: true,
          feedback: 'Correcto. $(6/2)^2 = 3^2 = 9$ y $x^2 + 6x + 9 = (x + 3)^2$.',
        },
        {
          id: 'd',
          labelLatex: '$3$',
          isCorrect: false,
          feedback: 'Tomaste la mitad sin elevarla al cuadrado. Falta el paso final.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Identificamos el coeficiente lineal $b$ (el número que acompaña a $x$).',
          mathLatex: 'b = 6',
        },
        {
          stepNumber: 2,
          explanation: 'Calculamos la mitad del coeficiente.',
          mathLatex: '\\frac{b}{2} = \\frac{6}{2} = 3',
        },
        { stepNumber: 3, explanation: 'Elevamos ese resultado al cuadrado.', mathLatex: '3^2 = 9' },
        {
          stepNumber: 4,
          explanation:
            'El término que falta es $9$. Verificamos el TCP: primer término $x^2$, último $9 = 3^2$, medio $2(x)(3) = 6x$. ✔',
          mathLatex: 'x^2 + 6x + 9 = (x + 3)^2',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-02
    {
      id: 'cc-02',
      title: 'Coeficiente negativo',
      statementLatex:
        '¿Qué término constante convierte en TCP a la siguiente expresión? $$x^2 - 10x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$-25$',
          isCorrect: false,
          feedback: 'El término constante de un TCP siempre sale de un cuadrado: es positivo.',
        },
        {
          id: 'b',
          labelLatex: '$100$',
          isCorrect: false,
          feedback:
            'Usaste el coeficiente completo elevado al cuadrado. Recuerda: mitad y luego cuadrado.',
        },
        {
          id: 'c',
          labelLatex: '$20$',
          isCorrect: false,
          feedback:
            'Ese sería el doble producto $2(x)(10)$... pero las raíces correctas son $x$ y $-5$.',
        },
        {
          id: 'd',
          labelLatex: '$25$',
          isCorrect: true,
          feedback:
            'Correcto. Mitad de $-10$ es $-5$; $(-5)^2 = 25$ y $x^2 - 10x + 25 = (x - 5)^2$.',
        },
      ],
      steps: [
        { stepNumber: 1, explanation: 'Coeficiente lineal (con su signo).', mathLatex: 'b = -10' },
        { stepNumber: 2, explanation: 'Mitad del coeficiente.', mathLatex: '\\frac{-10}{2} = -5' },
        {
          stepNumber: 3,
          explanation: 'Elevamos al cuadrado; el signo negativo desaparece.',
          mathLatex: '(-5)^2 = 25',
        },
        {
          stepNumber: 4,
          explanation: 'Verificación del doble producto.',
          mathLatex: '2(x)(-5) = -10x \\; ✔',
        },
        {
          stepNumber: 5,
          explanation: 'Expresamos el TCP completo.',
          mathLatex: 'x^2 - 10x + 25 = (x - 5)^2',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-03
    {
      id: 'cc-03',
      title: 'Reconocer el binomio',
      statementLatex:
        'La siguiente expresión es un trinomio cuadrado perfecto. ¿A qué binomio equivale? $$x^2 + 8x + 16$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x + 8)^2$',
          isCorrect: false,
          feedback:
            'Al desarrollar $(x+8)^2$ saldría $x^2 + 16x + 64$. Las raíces son la raíz de $x^2$ y la de $16$.',
        },
        {
          id: 'b',
          labelLatex: '$(x + 4)^2$',
          isCorrect: true,
          feedback: 'Correcto. Raíces: $x$ y $4$; doble producto $2 \\cdot x \\cdot 4 = 8x$. ✔',
        },
        {
          id: 'c',
          labelLatex: '$(x - 4)^2$',
          isCorrect: false,
          feedback: 'Con la resta obtendrías $x^2 - 8x + 16$. Aquí el término medio es $+8x$.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 2)^2$',
          isCorrect: false,
          feedback: '$(x+2)^2 = x^2 + 4x + 4$: ni el medio ni el último coinciden.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Verificamos que sea TCP: extremos cuadrados perfectos.',
          mathLatex: '\\sqrt{x^2} = x, \\qquad \\sqrt{16} = 4',
        },
        {
          stepNumber: 2,
          explanation: 'Comprobamos el doble producto con esas raíces.',
          mathLatex: '2 \\cdot x \\cdot 4 = 8x',
        },
        {
          stepNumber: 3,
          explanation: 'El término medio coincide y es positivo, así que el binomio se suma.',
          mathLatex: 'x^2 + 8x + 16 = (x + 4)^2',
        },
        {
          stepNumber: 4,
          explanation:
            'Alternativa con el método de completar: mitad de $8$ es $4$, y $4^2 = 16$ era justamente el constante. Coherente.',
          mathLatex: '\\left(\\frac{8}{2}\\right)^2 = 16 \\; ✔',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-04
    {
      id: 'cc-04',
      title: 'Forma (x + h)² + k',
      statementLatex:
        'Expresa la siguiente expresión en la forma $(x + h)^2 + k$: $$x^2 + 12x + 20$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x + 6)^2 - 16$',
          isCorrect: true,
          feedback: 'Correcto. $(x+6)^2 = x^2 + 12x + 36$ y $36 - 16 = 20$.',
        },
        {
          id: 'b',
          labelLatex: '$(x + 6)^2 + 20$',
          isCorrect: false,
          feedback:
            'No puedes conservar el $20$ tal cual: al formar $(x+6)^2$ aparece un $36$ que debe compensarse.',
        },
        {
          id: 'c',
          labelLatex: '$(x + 12)^2 - 124$',
          isCorrect: false,
          feedback:
            'Dentro del paréntesis va la MITAD del coeficiente ($6$), no el coeficiente completo.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 6)^2 + 4$',
          isCorrect: false,
          feedback: 'Signo de $k$: como $20 < 36$, hay que RESTAR $16$, no sumar.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Calculamos el término necesario para completar: mitad de $12$, al cuadrado.',
          mathLatex: '\\left(\\frac{12}{2}\\right)^2 = 6^2 = 36',
        },
        {
          stepNumber: 2,
          explanation: 'Sumamos y restamos $36$ para no alterar la expresión.',
          mathLatex: 'x^2 + 12x + 20 = (x^2 + 12x + 36) - 36 + 20',
        },
        {
          stepNumber: 3,
          explanation: 'Los tres primeros términos forman un TCP.',
          mathLatex: 'x^2 + 12x + 36 = (x + 6)^2',
        },
        {
          stepNumber: 4,
          explanation: 'Simplificamos los números sueltos: $-36 + 20 = -16$.',
          mathLatex: '(x + 6)^2 - 16',
        },
        {
          stepNumber: 5,
          explanation:
            'Verificación: desarrollando $(x+6)^2 - 16 = x^2 + 12x + 36 - 16 = x^2 + 12x + 20$. ✔',
          mathLatex: '(x + 6)^2 - 16',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-05
    {
      id: 'cc-05',
      title: 'Coeficiente impar',
      statementLatex:
        '¿Qué término constante convierte en TCP a la siguiente expresión? $$x^2 - 7x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$49$',
          isCorrect: false,
          feedback: 'Ese es $7^2$. Con coeficientes impares la mitad da fracción: $(-7/2)^2$.',
        },
        {
          id: 'b',
          labelLatex: '$-\\dfrac{49}{4}$',
          isCorrect: false,
          feedback: 'El signo: un cuadrado nunca es negativo.',
        },
        {
          id: 'c',
          labelLatex: '$\\dfrac{49}{2}$',
          isCorrect: false,
          feedback:
            'Elevaste al cuadrado solo el $7$ y dividiste entre $2$. Hay que elevar la fracción completa.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{49}{4}$',
          isCorrect: true,
          feedback: 'Correcto. $(-7/2)^2 = 49/4$ y $x^2 - 7x + 49/4 = (x - 7/2)^2$.',
        },
      ],
      steps: [
        { stepNumber: 1, explanation: 'Coeficiente lineal.', mathLatex: 'b = -7' },
        {
          stepNumber: 2,
          explanation: 'Como $7$ es impar, la mitad es fraccionaria.',
          mathLatex: '\\frac{-7}{2}',
        },
        {
          stepNumber: 3,
          explanation: 'Elevamos al cuadrado numerador y denominador.',
          mathLatex: '\\left(\\frac{-7}{2}\\right)^2 = \\frac{49}{4}',
        },
        {
          stepNumber: 4,
          explanation: 'Verificamos el binomio resultante.',
          mathLatex: 'x^2 - 7x + \\frac{49}{4} = \\left(x - \\frac{7}{2}\\right)^2',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-06
    {
      id: 'cc-06',
      title: 'TCP con a = 2',
      statementLatex:
        '¿Qué valor de la constante convierte en TCP a la siguiente expresión? $$2x^2 + 8x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$16$',
          isCorrect: false,
          feedback:
            'Completaste el cuadrado como si el coeficiente principal fuera $1$: $(8/2)^2 = 16$. Aquí hay que factorizar primero el $2$.',
        },
        {
          id: 'b',
          labelLatex: '$64$',
          isCorrect: false,
          feedback: 'Elevaste $8$ al cuadrado directamente. El método pide mitad y luego cuadrado.',
        },
        {
          id: 'c',
          labelLatex: '$4$',
          isCorrect: false,
          feedback:
            'Ese es el término DENTRO del paréntesis tras factorizar el $2$. Al devolver el $2$ exterior, el constante visible cambia.',
        },
        {
          id: 'd',
          labelLatex: '$8$',
          isCorrect: true,
          feedback: 'Correcto. $2(x^2 + 4x + 4) = 2(x + 2)^2 = 2x^2 + 8x + 8$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Con coeficiente principal distinto de 1, primero lo extraemos como factor común.',
          mathLatex: '2x^2 + 8x = 2\\left(x^2 + 4x\\right)',
        },
        {
          stepNumber: 2,
          explanation: 'Completamos por dentro: mitad de $4$, elevada al cuadrado.',
          mathLatex: '\\left(\\frac{4}{2}\\right)^2 = 4',
        },
        {
          stepNumber: 3,
          explanation: 'El paréntesis se vuelve un TCP.',
          mathLatex: 'x^2 + 4x + 4 = (x + 2)^2',
        },
        {
          stepNumber: 4,
          explanation: 'Multiplicamos el $2$ exterior para volver a la forma original.',
          mathLatex: '2(x + 2)^2 = 2(x^2 + 4x + 4) = 2x^2 + 8x + 8',
        },
        {
          stepNumber: 5,
          explanation: 'El constante visible es $8$. Verificación: $2 \\times 4 = 8$. ✔',
          mathLatex: '\\underline{\\quad} = 8',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-07
    {
      id: 'cc-07',
      title: 'TCP con a = 3',
      statementLatex:
        '¿Qué valor de la constante convierte en TCP a la siguiente expresión? $$3x^2 - 12x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$36$',
          isCorrect: false,
          feedback:
            'Elevaste al cuadrado el coeficiente completo. Extrae el $3$ y trabaja con $-12$ dentro del paréntesis.',
        },
        {
          id: 'b',
          labelLatex: '$12$',
          isCorrect: true,
          feedback: 'Correcto. $3(x^2 - 4x + 4) = 3(x - 2)^2 = 3x^2 - 12x + 12$.',
        },
        {
          id: 'c',
          labelLatex: '$4$',
          isCorrect: false,
          feedback:
            'Ese es el término interno. Recuerda repartir el $3$ exterior antes de leer el constante final.',
        },
        {
          id: 'd',
          labelLatex: '$-4$',
          isCorrect: false,
          feedback: 'Los constantes de un TCP son positivos (salen de un cuadrado).',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el coeficiente $3$.',
          mathLatex: '3x^2 - 12x = 3\\left(x^2 - 4x\\right)',
        },
        {
          stepNumber: 2,
          explanation: 'Término interno necesario: mitad de $-4$, al cuadrado.',
          mathLatex: '\\left(\\frac{-4}{2}\\right)^2 = (-2)^2 = 4',
        },
        { stepNumber: 3, explanation: 'TCP interno.', mathLatex: 'x^2 - 4x + 4 = (x - 2)^2' },
        {
          stepNumber: 4,
          explanation: 'Repartimos el $3$.',
          mathLatex: '3(x - 2)^2 = 3x^2 - 12x + 12',
        },
        { stepNumber: 5, explanation: 'Constante buscada.', mathLatex: '\\underline{\\quad} = 12' },
      ],
    },
    // ------------------------------------------------------------------ CC-08
    {
      id: 'cc-08',
      title: 'Factorizar completando (I)',
      statementLatex:
        'Factorice la siguiente expresión usando el método de completar cuadrados: $$x^2 + 6x - 7$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x + 7)(x - 1)$',
          isCorrect: true,
          feedback: 'Correcto. $(x+3)^2 - 16 = (x+3-4)(x+3+4) = (x-1)(x+7)$.',
        },
        {
          id: 'b',
          labelLatex: '$(x + 3)^2$',
          isCorrect: false,
          feedback: 'Eso desarrolla a $x^2 + 6x + 9$: falta el término independiente $-7$.',
        },
        {
          id: 'c',
          labelLatex: '$(x - 7)(x + 1)$',
          isCorrect: false,
          feedback: 'Verifica con la suma: $-7 + 1 = -6$, pero el coeficiente lineal es $+6$.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 6)(x - 7)$',
          isCorrect: false,
          feedback:
            'El número que va en el binomio es la MITAD del coeficiente ($3$), no el coeficiente completo.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Calculamos el término que completa el cuadrado: mitad de $6$, al cuadrado.',
          mathLatex: '\\left(\\frac{6}{2}\\right)^2 = 9',
        },
        {
          stepNumber: 2,
          explanation: 'Sumamos y restamos $9$ para no alterar el valor.',
          mathLatex: 'x^2 + 6x - 7 = (x^2 + 6x + 9) - 9 - 7',
        },
        {
          stepNumber: 3,
          explanation: 'El trinomio entre paréntesis es un TCP.',
          mathLatex: '(x + 3)^2 - 16',
        },
        {
          stepNumber: 4,
          explanation: 'Reconocemos una diferencia de cuadrados: $(x+3)^2 - 4^2$.',
          mathLatex: 'A^2 - B^2 = (A - B)(A + B)',
        },
        {
          stepNumber: 5,
          explanation: 'Aplicamos la fórmula con $A = x + 3$ y $B = 4$.',
          mathLatex: '(x + 3 - 4)(x + 3 + 4)',
        },
        { stepNumber: 6, explanation: 'Simplificamos los binomios.', mathLatex: '(x - 1)(x + 7)' },
      ],
    },
    // ------------------------------------------------------------------ CC-09
    {
      id: 'cc-09',
      title: 'Factorizar completando (II)',
      statementLatex: 'Factorice la siguiente expresión completando el cuadrado: $$x^2 - 2x - 8$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x - 2)(x + 4)$',
          isCorrect: false,
          feedback: 'Esa factorización da $x^2 + 2x - 8$. El coeficiente aquí es $-2$.',
        },
        {
          id: 'b',
          labelLatex: '$(x - 1)^2 - 9$',
          isCorrect: false,
          feedback:
            'Es la etapa intermedia correcta, pero aún falta aplicar diferencia de cuadrados para terminar.',
        },
        {
          id: 'c',
          labelLatex: '$(x + 2)(x - 4)$',
          isCorrect: true,
          feedback: 'Correcto. $(x-1)^2 - 9 = (x-1-3)(x-1+3) = (x+2)(x-4)$.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 8)(x - 1)$',
          isCorrect: false,
          feedback: 'Producto $-8$ ✔ pero suma $+7$ ✘. Debe sumar $-2$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Mitad del coeficiente lineal, al cuadrado.',
          mathLatex: '\\left(\\frac{-2}{2}\\right)^2 = 1',
        },
        {
          stepNumber: 2,
          explanation: 'Sumamos y restamos $1$.',
          mathLatex: 'x^2 - 2x - 8 = (x^2 - 2x + 1) - 1 - 8',
        },
        { stepNumber: 3, explanation: 'TCP y números sueltos juntos.', mathLatex: '(x - 1)^2 - 9' },
        {
          stepNumber: 4,
          explanation: 'Diferencia de cuadrados con $B = 3$.',
          mathLatex: '(x - 1 - 3)(x - 1 + 3)',
        },
        { stepNumber: 5, explanation: 'Resultado.', mathLatex: '(x + 2)(x - 4)' },
      ],
    },
    // ------------------------------------------------------------------ CC-10
    {
      id: 'cc-10',
      title: 'Fracciones pequeñas',
      statementLatex:
        'La siguiente expresión es un TCP. ¿Cuál es su binomio equivalente? $$x^2 + x + \\frac{1}{4}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\left(x + \\dfrac{1}{4}\\right)^2$',
          isCorrect: false,
          feedback: 'La raíz del último término sí es $1/2$, no $1/4$: $\\sqrt{1/4} = 1/2$.',
        },
        {
          id: 'b',
          labelLatex: '$\\left(x + \\dfrac{1}{2}\\right)^2$',
          isCorrect: true,
          feedback: 'Correcto. $2(x)(1/2) = x$ ✔ y $(1/2)^2 = 1/4$ ✔.',
        },
        {
          id: 'c',
          labelLatex: '$\\left(x - \\dfrac{1}{2}\\right)^2$',
          isCorrect: false,
          feedback: 'El término medio sería $-x$; aquí es $+x$.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 1)^2$',
          isCorrect: false,
          feedback: '$(x+1)^2 = x^2 + 2x + 1$: los tres términos difieren.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Raíces cuadradas de los extremos.',
          mathLatex: '\\sqrt{x^2} = x, \\qquad \\sqrt{\\frac{1}{4}} = \\frac{1}{2}',
        },
        {
          stepNumber: 2,
          explanation: 'Doble producto de verificación.',
          mathLatex: '2 \\cdot x \\cdot \\frac{1}{2} = x',
        },
        {
          stepNumber: 3,
          explanation: 'Coincide con el coeficiente lineal positivo: binomio con suma.',
          mathLatex: 'x^2 + x + \\frac{1}{4} = \\left(x + \\frac{1}{2}\\right)^2',
        },
        {
          stepNumber: 4,
          explanation:
            'Confirmación con el método general: mitad de $1$ es $1/2$ y $(1/2)^2 = 1/4$. ✔',
          mathLatex: '\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-11
    {
      id: 'cc-11',
      title: 'Hallar el coeficiente k',
      statementLatex:
        '¿Qué valores de $k$ hacen que la siguiente expresión sea un TCP? $$x^2 + kx + 36$$',
      options: [
        {
          id: 'a',
          labelLatex: '$k = 12$',
          isCorrect: false,
          feedback: 'Falta el caso negativo: $(-12)^2$ también es $144$...',
        },
        {
          id: 'b',
          labelLatex: '$k = 6$',
          isCorrect: false,
          feedback:
            'Confundiste el coeficiente con la raíz del constante. Relaciona: $(k/2)^2 = 36$.',
        },
        {
          id: 'c',
          labelLatex: '$k = 12 \\text{ o } k = -12$',
          isCorrect: true,
          feedback: 'Correcto. $(k/2)^2 = 36 \\Rightarrow k/2 = \\pm 6 \\Rightarrow k = \\pm 12$.',
        },
        {
          id: 'd',
          labelLatex: '$k = 72$',
          isCorrect: false,
          feedback: 'Multiplicaste por $2$ en lugar de resolver la ecuación del doble producto.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'En un TCP el constante debe ser el cuadrado de la mitad del coeficiente lineal.',
          mathLatex: '\\left(\\frac{k}{2}\\right)^2 = 36',
        },
        {
          stepNumber: 2,
          explanation: 'Tomamos raíz cuadrada en ambos lados (con ambos signos).',
          mathLatex: '\\frac{k}{2} = \\pm 6',
        },
        { stepNumber: 3, explanation: 'Despejamos $k$.', mathLatex: 'k = \\pm 12' },
        {
          stepNumber: 4,
          explanation:
            'Ambas opciones funcionan: $x^2 + 12x + 36 = (x+6)^2$ y $x^2 - 12x + 36 = (x-6)^2$. ✔',
          mathLatex: 'k = 12 \\ \\text{o}\\ k = -12',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-12
    {
      id: 'cc-12',
      title: 'Otro coeficiente desconocido',
      statementLatex:
        'Si la siguiente expresión es un TCP, ¿qué valores puede tomar $b$? $$x^2 + bx + 49$$',
      options: [
        {
          id: 'a',
          labelLatex: '$b = \\pm 14$',
          isCorrect: true,
          feedback: 'Correcto. $(b/2)^2 = 49 \\Rightarrow b/2 = \\pm 7 \\Rightarrow b = \\pm 14$.',
        },
        {
          id: 'b',
          labelLatex: '$b = 7$',
          isCorrect: false,
          feedback:
            'Esa es la raíz del constante. El coeficiente lineal es el doble (con signo libre).',
        },
        {
          id: 'c',
          labelLatex: '$b = \\pm 49$',
          isCorrect: false,
          feedback:
            'No hay que elevar al cuadrado el constante otra vez: ya es un cuadrado perfecto.',
        },
        {
          id: 'd',
          labelLatex: '$b = 98$',
          isCorrect: false,
          feedback: 'Revisa la ecuación: el término medio de un TCP es $2ab$, no $4ab$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Condición de TCP.',
          mathLatex: '\\left(\\frac{b}{2}\\right)^2 = 49',
        },
        {
          stepNumber: 2,
          explanation: 'Raíz cuadrada con ambos signos.',
          mathLatex: '\\frac{b}{2} = \\pm 7',
        },
        { stepNumber: 3, explanation: 'Despejamos.', mathLatex: 'b = \\pm 14' },
        {
          stepNumber: 4,
          explanation:
            'Comprobación con $b = 14$: doble producto $2(x)(7) = 14x$ ✔; con $b = -14$: $(x - 7)^2$ ✔.',
          mathLatex: 'x^2 \\pm 14x + 49 = (x \\pm 7)^2',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-13
    {
      id: 'cc-13',
      title: 'Coeficiente impar (completar)',
      statementLatex:
        '¿Qué término constante convierte en TCP a la siguiente expresión? $$x^2 + 3x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\dfrac{9}{4}$',
          isCorrect: true,
          feedback: 'Correcto. $(3/2)^2 = 9/4$ y $x^2 + 3x + 9/4 = (x + 3/2)^2$.',
        },
        {
          id: 'b',
          labelLatex: '$\\dfrac{3}{2}$',
          isCorrect: false,
          feedback: 'Ese es el valor que va DENTRO del binomio; el constante es su cuadrado.',
        },
        {
          id: 'c',
          labelLatex: '$9$',
          isCorrect: false,
          feedback: 'Usaste el coeficiente completo al cuadrado. Mitad primero: $3/2$.',
        },
        {
          id: 'd',
          labelLatex: '$\\dfrac{9}{2}$',
          isCorrect: false,
          feedback: 'Dividiste después de elevar. El orden es: mitad, luego cuadrado.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Mitad del coeficiente (impar ⇒ fracción).',
          mathLatex: '\\frac{3}{2}',
        },
        {
          stepNumber: 2,
          explanation: 'Elevamos al cuadrado numerador y denominador.',
          mathLatex: '\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}',
        },
        {
          stepNumber: 3,
          explanation: 'Binomio resultante.',
          mathLatex: 'x^2 + 3x + \\frac{9}{4} = \\left(x + \\frac{3}{2}\\right)^2',
        },
        {
          stepNumber: 4,
          explanation: 'Verificación del doble producto.',
          mathLatex: '2 \\cdot x \\cdot \\frac{3}{2} = 3x \\; ✔',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-14
    {
      id: 'cc-14',
      title: 'Factorizar con a = 2 (reto)',
      statementLatex: 'Factorice la siguiente expresión completando el cuadrado: $$2x^2 + 5x + 2$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(2x + 1)(x + 2)$',
          isCorrect: true,
          feedback:
            'Correcto. Completando: $2(x + 5/4)^2 - 9/8 = 2(x + 1/2)(x + 2) = (2x + 1)(x + 2)$.',
        },
        {
          id: 'b',
          labelLatex: '$(2x + 2)(x + 1)$',
          isCorrect: false,
          feedback: 'Ese producto da $2x^2 + 4x + 2$: el término medio debería ser $5x$.',
        },
        {
          id: 'c',
          labelLatex: '$(2x - 1)(x - 2)$',
          isCorrect: false,
          feedback: 'Signos: todos los coeficientes de la original son positivos.',
        },
        {
          id: 'd',
          labelLatex: '$2(x + 1)(x + 1)$',
          isCorrect: false,
          feedback: 'Eso daría $2x^2 + 4x + 2$. Además un TCP tendría término medio $4x$, no $5x$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Extraemos el $2$ de los términos con variable.',
          mathLatex: '2x^2 + 5x + 2 = 2\\left(x^2 + \\frac{5}{2}x\\right) + 2',
        },
        {
          stepNumber: 2,
          explanation: 'Mitad de $5/2$, al cuadrado.',
          mathLatex: '\\left(\\frac{5}{4}\\right)^2 = \\frac{25}{16}',
        },
        {
          stepNumber: 3,
          explanation: 'Sumamos y restamos $25/16$ dentro del paréntesis.',
          mathLatex: '2\\left[\\left(x + \\frac{5}{4}\\right)^2 - \\frac{25}{16}\\right] + 2',
        },
        {
          stepNumber: 4,
          explanation: 'Distribuimos el $2$ en la resta.',
          mathLatex: '2\\left(x + \\frac{5}{4}\\right)^2 - \\frac{25}{8} + \\frac{16}{8}',
        },
        {
          stepNumber: 5,
          explanation: 'Combinamos constantes.',
          mathLatex: '2\\left(x + \\frac{5}{4}\\right)^2 - \\frac{9}{8}',
        },
        {
          stepNumber: 6,
          explanation: 'Sacamos el $2$ como factor para formar diferencia de cuadrados.',
          mathLatex: '2\\left[\\left(x + \\frac{5}{4}\\right)^2 - \\frac{9}{16}\\right]',
        },
        {
          stepNumber: 7,
          explanation: 'Diferencia de cuadrados con raíz $3/4$.',
          mathLatex:
            '2\\left(x + \\frac{5}{4} - \\frac{3}{4}\\right)\\left(x + \\frac{5}{4} + \\frac{3}{4}\\right)',
        },
        {
          stepNumber: 8,
          explanation: 'Simplificamos las fracciones y absorbemos el $2$ en el primer binomio.',
          mathLatex: '2\\left(x + \\frac{1}{2}\\right)(x + 2) = (2x + 1)(x + 2)',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-15
    {
      id: 'cc-15',
      title: 'Sin término independiente',
      statementLatex:
        'Expresa la siguiente expresión como un cuadrado menos una constante: $$x^2 + 10x$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x + 5)^2$',
          isCorrect: false,
          feedback: 'Eso equivale a $x^2 + 10x + 25$: le sobra un $25$ que debes restar.',
        },
        {
          id: 'b',
          labelLatex: '$(x + 10)^2 - 100$',
          isCorrect: false,
          feedback: 'Dentro del binomio va la MITAD del coeficiente: $5$.',
        },
        {
          id: 'c',
          labelLatex: '$(x + 5)^2 - 25$',
          isCorrect: true,
          feedback:
            'Correcto. $(x+5)^2 = x^2 + 10x + 25$; restando $25$ recuperas la expresión original.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 5)^2 + 25$',
          isCorrect: false,
          feedback:
            'El signo de la compensación es negativo: agregamos $25$ para formar el TCP y debemos quitarlo.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Término para completar: mitad de $10$, al cuadrado.',
          mathLatex: '\\left(\\frac{10}{2}\\right)^2 = 25',
        },
        {
          stepNumber: 2,
          explanation: 'Sumamos $25$ para formar el TCP...',
          mathLatex: 'x^2 + 10x + 25',
        },
        {
          stepNumber: 3,
          explanation: '...y lo restamos inmediatamente para no cambiar el valor.',
          mathLatex: '(x^2 + 10x + 25) - 25',
        },
        { stepNumber: 4, explanation: 'Expresamos el resultado.', mathLatex: '(x + 5)^2 - 25' },
      ],
    },
    // ------------------------------------------------------------------ CC-16
    {
      id: 'cc-16',
      title: 'Cuadrado de binomio disfrazado',
      statementLatex: 'Factorice la siguiente expresión completando el cuadrado: $$4x^2 + 4x - 3$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(2x - 1)(2x + 3)$',
          isCorrect: true,
          feedback: 'Correcto. $4x^2 + 4x - 3 = (2x + 1)^2 - 4 = (2x + 1 - 2)(2x + 1 + 2)$.',
        },
        {
          id: 'b',
          labelLatex: '$(2x + 1)^2$',
          isCorrect: false,
          feedback: 'Desarrolla a $4x^2 + 4x + 1$: falta considerar el $-3$.',
        },
        {
          id: 'c',
          labelLatex: '$(2x - 3)(2x + 1)$',
          isCorrect: false,
          feedback: 'Producto $-6x^2$... revisa: además el término medio saldría $-4x$.',
        },
        {
          id: 'd',
          labelLatex: '$(4x - 1)(x + 3)$',
          isCorrect: false,
          feedback: 'Producto: $4x^2 + 11x - 3$. No coincide con el término medio $4x$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Observamos que $4x^2$ es $(2x)^2$: el "cuadrado que falta" se calcula sobre esa base.',
          mathLatex: '4x^2 = (2x)^2',
        },
        {
          stepNumber: 2,
          explanation:
            'Para formar $(2x + 1)^2$ necesitamos el doble producto $2(2x)(1) = 4x$ (ya está) más $1^2 = 1$.',
          mathLatex: '(2x)^2 + 4x + 1 = (2x + 1)^2',
        },
        {
          stepNumber: 3,
          explanation: 'Sumamos y restamos $1$ para no alterar la expresión.',
          mathLatex: '4x^2 + 4x - 3 = [(2x)^2 + 4x + 1] - 1 - 3',
        },
        { stepNumber: 4, explanation: 'TCP menos constante.', mathLatex: '(2x + 1)^2 - 4' },
        {
          stepNumber: 5,
          explanation: 'Diferencia de cuadrados con $B = 2$.',
          mathLatex: '(2x + 1 - 2)(2x + 1 + 2)',
        },
        { stepNumber: 6, explanation: 'Simplificamos.', mathLatex: '(2x - 1)(2x + 3)' },
      ],
    },
    // ------------------------------------------------------------------ CC-17
    {
      id: 'cc-17',
      title: 'Noveno medio',
      statementLatex:
        'La siguiente expresión es un TCP. ¿Cuál es su binomio equivalente? $$x^2 - 9x + \\frac{81}{4}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\left(x - \\dfrac{9}{2}\\right)^2$',
          isCorrect: true,
          feedback:
            'Correcto. Raíz de $81/4$ es $9/2$ y el doble producto $2 \\cdot x \\cdot 9/2 = 9x$, con signo negativo.',
        },
        {
          id: 'b',
          labelLatex: '$\\left(x - \\dfrac{81}{2}\\right)^2$',
          isCorrect: false,
          feedback: 'No hay que dividir el constante: su RAÍZ es $9/2$ porque $(9/2)^2 = 81/4$.',
        },
        {
          id: 'c',
          labelLatex: '$(x - 9)^2$',
          isCorrect: false,
          feedback: 'Eso desarrollaría $x^2 - 18x + 81$: ni el medio ni el último coinciden.',
        },
        {
          id: 'd',
          labelLatex: '$\\left(x + \\dfrac{9}{2}\\right)^2$',
          isCorrect: false,
          feedback: 'El coeficiente lineal es $-9$: el binomio lleva resta.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Raíz cuadrada del término independiente.',
          mathLatex: '\\sqrt{\\frac{81}{4}} = \\frac{9}{2}',
        },
        {
          stepNumber: 2,
          explanation: 'Doble producto de verificación.',
          mathLatex: '2 \\cdot x \\cdot \\frac{9}{2} = 9x',
        },
        {
          stepNumber: 3,
          explanation: 'Como el término medio es $-9x$, el binomio se resta.',
          mathLatex: 'x^2 - 9x + \\frac{81}{4} = \\left(x - \\frac{9}{2}\\right)^2',
        },
        {
          stepNumber: 4,
          explanation: 'Confirmación por el método de completar: $(-9/2)^2 = 81/4$. ✔',
          mathLatex: '\\left(\\frac{-9}{2}\\right)^2 = \\frac{81}{4}',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-18
    {
      id: 'cc-18',
      title: 'Forma (x + h)² + k con impar',
      statementLatex:
        'Expresa la siguiente expresión en la forma $(x + h)^2 + k$: $$x^2 + 5x + 6$$',
      options: [
        {
          id: 'a',
          labelLatex: '$\\left(x + \\dfrac{5}{2}\\right)^2 - \\dfrac{1}{4}$',
          isCorrect: true,
          feedback: 'Correcto. $(x + 5/2)^2 = x^2 + 5x + 25/4$; restando $1/4$ queda $+6$. ✔',
        },
        {
          id: 'b',
          labelLatex: '$(x + 5)^2 - 19$',
          isCorrect: false,
          feedback: 'Dentro del binomio va la mitad del coeficiente: $5/2$.',
        },
        {
          id: 'c',
          labelLatex: '$\\left(x + \\dfrac{5}{2}\\right)^2 + \\dfrac{1}{4}$',
          isCorrect: false,
          feedback: 'Signo de $k$: $6 - 25/4 = -1/4$, negativo.',
        },
        {
          id: 'd',
          labelLatex: '$(x + 2)(x + 3)$',
          isCorrect: false,
          feedback:
            'Es la factorización correcta, pero el ejercicio pide la FORMA $(x+h)^2 + k$, no factores.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Término para completar: mitad de $5$, al cuadrado.',
          mathLatex: '\\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}',
        },
        {
          stepNumber: 2,
          explanation: 'Sumamos y restamos $25/4$.',
          mathLatex: 'x^2 + 5x + 6 = \\left(x^2 + 5x + \\frac{25}{4}\\right) - \\frac{25}{4} + 6',
        },
        {
          stepNumber: 3,
          explanation: 'Formamos el TCP.',
          mathLatex: '\\left(x + \\frac{5}{2}\\right)^2 - \\frac{25}{4} + 6',
        },
        {
          stepNumber: 4,
          explanation: 'Convertimos $6$ a cuartos y combinamos.',
          mathLatex: '-\\frac{25}{4} + \\frac{24}{4} = -\\frac{1}{4}',
        },
        {
          stepNumber: 5,
          explanation: 'Resultado final.',
          mathLatex: '\\left(x + \\frac{5}{2}\\right)^2 - \\frac{1}{4}',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-19
    {
      id: 'cc-19',
      title: 'TCP con a = 9',
      statementLatex:
        '¿Qué valor de la constante convierte en TCP a la siguiente expresión? $$9x^2 + 12x + \\underline{\\quad}$$',
      options: [
        {
          id: 'a',
          labelLatex: '$16$',
          isCorrect: false,
          feedback:
            'Completaste sobre $12$ como si el primer término fuera $x^2$. La base del cuadrado es $(3x)^2$, así que el binomio empieza con $3x$.',
        },
        {
          id: 'b',
          labelLatex: '$144$',
          isCorrect: false,
          feedback:
            'Elevar $12$ al cuadrado no aplica: piensa qué binomio cuadrado produce $9x^2 + 12x$.',
        },
        {
          id: 'c',
          labelLatex: '$4$',
          isCorrect: true,
          feedback: 'Correcto. $(3x + 2)^2 = 9x^2 + 12x + 4$.',
        },
        {
          id: 'd',
          labelLatex: '$36$',
          isCorrect: false,
          feedback:
            'Ese sería $(6)^2$... pero la segunda raíz del binomio sale del doble producto: $2(3x)(r) = 12x$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Identificamos la raíz del primer término.',
          mathLatex: '\\sqrt{9x^2} = 3x',
        },
        {
          stepNumber: 2,
          explanation:
            'Del término medio deducimos la segunda raíz $r$: el doble producto debe valer $12x$.',
          mathLatex: '2(3x)r = 12x \\Rightarrow r = 2',
        },
        {
          stepNumber: 3,
          explanation: 'El binomio cuadrado es entonces...',
          mathLatex: '(3x + 2)^2',
        },
        { stepNumber: 4, explanation: '...y su término constante es $r^2$.', mathLatex: '2^2 = 4' },
        {
          stepNumber: 5,
          explanation: 'Verificación completa del desarrollo.',
          mathLatex: '(3x + 2)^2 = 9x^2 + 12x + 4 \\; ✔',
        },
      ],
    },
    // ------------------------------------------------------------------ CC-20
    {
      id: 'cc-20',
      title: 'Reto integrador',
      statementLatex: 'Factorice la siguiente expresión completando el cuadrado: $$x^2 + 2x - 15$$',
      options: [
        {
          id: 'a',
          labelLatex: '$(x - 3)(x + 5)$',
          isCorrect: true,
          feedback: 'Correcto. $(x+1)^2 - 16 = (x+1-4)(x+1+4) = (x - 3)(x + 5)$.',
        },
        {
          id: 'b',
          labelLatex: '$(x + 3)(x - 5)$',
          isCorrect: false,
          feedback:
            'Suma $-2$ ✔ pero producto $-15$ ✘... espera: $3 \\times (-5) = -15$ y $3 + (-5) = -2$. Los signos están invertidos respecto al coeficiente $+2$.',
        },
        {
          id: 'c',
          labelLatex: '$(x + 1)^2 - 16$',
          isCorrect: false,
          feedback:
            'Es la etapa intermedia correcta, pero falta aplicar la diferencia de cuadrados.',
        },
        {
          id: 'd',
          labelLatex: '$(x - 1)(x + 15)$',
          isCorrect: false,
          feedback:
            'El binomio usa la mitad del coeficiente ($1$) junto con la raíz de $16$ ($4$), combinadas así: $1 - 4 = -3$ y $1 + 4 = 5$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Término para completar: mitad de $2$, al cuadrado.',
          mathLatex: '\\left(\\frac{2}{2}\\right)^2 = 1',
        },
        {
          stepNumber: 2,
          explanation: 'Sumamos y restamos $1$.',
          mathLatex: 'x^2 + 2x - 15 = (x^2 + 2x + 1) - 1 - 15',
        },
        { stepNumber: 3, explanation: 'TCP y constantes juntas.', mathLatex: '(x + 1)^2 - 16' },
        {
          stepNumber: 4,
          explanation: 'Diferencia de cuadrados: $(x+1)^2 - 4^2$.',
          mathLatex: '(x + 1 - 4)(x + 1 + 4)',
        },
        { stepNumber: 5, explanation: 'Simplificamos cada binomio.', mathLatex: '(x - 3)(x + 5)' },
        {
          stepNumber: 6,
          explanation: 'Verificación: producto $-15$ ✔ y suma $+2$ ✔.',
          mathLatex: '-3 \\cdot 5 = -15, \\quad -3 + 5 = 2',
        },
      ],
    },
  ],
};

export const completarCuadradosUnits: PracticeUnit[] = [completarCuadrados];
