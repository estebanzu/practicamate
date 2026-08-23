// ============================================================================
// Dataset de prácticas — Trigonometría (Noveno Nivel)
// Objetivos 1 y 2 de la prueba trimestral II periodo:
//   · Ángulos de elevación y depresión
//   · Ley de senos
// Convención: $\sqrt{3} \approx 1.732$, $\sqrt{2} \approx 1.41$, redondeo a
// un decimal salvo indicación contraria.
// ============================================================================

import type { PracticeUnit } from './practices';
import {
  diagAntena,
  diagAuto,
  diagCombinada,
  diagDepresion,
  diagDosObservaciones,
  diagDron,
  diagElevacion,
  diagHipotenusa,
  diagSombras,
  diagTriangulo,
  diagTrianguloRectangulo,
} from '../lib/diagrams';

const VALORES_NOTABLES =
  'Valores útiles: $\\operatorname{sen}30° = 0.5$, $\\cos30° \\approx 0.866$, $\\tan30° \\approx 0.577$; ' +
  '$\\operatorname{sen}45° \\approx 0.707$, $\\cos45° \\approx 0.707$, $\\tan45° = 1$; ' +
  '$\\operatorname{sen}60° \\approx 0.866$, $\\cos60° = 0.5$, $\\tan60° \\approx 1.732$.';

// ---------------------------------------------------------------------------
// UNIDAD T1 — Ángulos de elevación y depresión
// ---------------------------------------------------------------------------

const elevacionDepresion: PracticeUnit = {
  id: 'elevacion-depresion',
  title: 'Ángulos de Elevación y Depresión',
  subject: 'Trigonometría',
  topic: 'trigonometria',
  description:
    'Aplica las razones trigonométricas para calcular alturas y distancias cuando la línea visual forma un ángulo por encima (elevación) o por debajo (depresión) de la horizontal.',
  theory: [
    {
      title: 'Razones trigonométricas en el triángulo rectángulo',
      contentLatex:
        'En todo triángulo rectángulo, respecto a un ángulo agudo $\\theta$: ' +
        '$$\\operatorname{sen}\\theta = \\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}, \\quad \\cos\\theta = \\frac{\\text{cateto adyacente}}{\\text{hipotenusa}}, \\quad \\tan\\theta = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}}.$$ ' +
        VALORES_NOTABLES,
      diagramSvg: diagTrianguloRectangulo(),
      examples: [
        {
          title: 'Ejemplo resuelto: hallar una altura',
          statementLatex:
            'Un poste mide $8\\,m$ y su punto más alto se ve desde $10\\,m$ de distancia horizontal. ¿Qué ángulo de elevación se forma?',
          solutionLatex:
            'La altura $8\\,m$ es el cateto opuesto y la distancia $10\\,m$ es el adyacente, así que usamos la tangente: $$\\tan\\theta = \\frac{8}{10} = 0.8.$$ Buscamos el ángulo cuya tangente sea $0.8$: $\\theta = \\arctan(0.8) \\approx 38.7°.$',
        },
        {
          title: 'Ejemplo resuelto: hallar un cateto',
          statementLatex:
            'Una rampa de $13\\,m$ forma un ángulo de $30°$ con el suelo. ¿A qué altura llega?',
          solutionLatex:
            'El lado conocido ($13\\,m$) es la hipotenusa y pedimos el cateto opuesto a $30°$: $$\\operatorname{sen}30° = \\frac{h}{13} \\Rightarrow h = 13 \\cdot 0.5 = 6.5\\,m.$$',
        },
      ],
    },
    {
      title: 'Ángulo de elevación',
      contentLatex:
        'Es el ángulo formado entre la **línea horizontal** del observador y la **línea visual**, cuando esta apunta hacia arriba (un pájaro, la cima de un edificio, un avión). El observador siempre está **debajo** del objeto observado.',
      diagramSvg: diagElevacion({
        angulo: '45°',
        alturaLabel: '30 m arriba',
        distanciaLabel: '30 m',
      }),
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex:
            'Desde un punto del suelo a $30\\,m$ del pie de una torre, la cima se ve con un ángulo de elevación de $45°$. ¿Cuánto mide la torre?',
          solutionLatex:
            'La distancia al pie ($30\\,m$) es el cateto adyacente y la torre es el opuesto: $$\\tan45° = \\frac{h}{30} \\Rightarrow 1 = \\frac{h}{30} \\Rightarrow h = 30\\,m.$$ Con $45°$ la altura siempre coincide con la distancia horizontal.',
        },
      ],
    },
    {
      title: 'Ángulo de depresión',
      contentLatex:
        'Es el ángulo entre la **horizontal** del observador y la línea visual cuando esta apunta hacia **abajo** (un barco visto desde un faro, un auto visto desde un puente). Aquí el observador está **arriba**. Clave: el ángulo de depresión medido desde arriba es igual al ángulo de elevación medido desde abajo (son **ángulos alternos internos** entre dos paralelas).',
      diagramSvg: diagDepresion({ angulo: '45°', alturaLabel: '50 m', distanciaLabel: 'd' }),
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex:
            'Desde un acantilado de $50\\,m$ se observa un bote con un ángulo de depresión de $45°$. ¿A qué distancia de la base del acantilado está el bote?',
          solutionLatex:
            'Por alternos internos, desde el bate también se ve el acantilado con elevación de $45°$: $$\\tan45° = \\frac{50}{d} \\Rightarrow d = \\frac{50}{1} = 50\\,m.$$',
        },
        {
          title: 'Ejemplo resuelto con 30°',
          statementLatex:
            'Desde un puente de $20\\,m$ sobre un río se ve una lancha con depresión de $30°$. ¿Qué distancia horizontal hay hasta ella?',
          solutionLatex:
            '$$\\tan30° = \\frac{20}{d} \\Rightarrow d = \\frac{20}{0.577} \\approx 34.7\\,m.$$ Al bajar la mirada con poco ángulo, el objeto queda **lejos**; con mucho ángulo, cerca.',
        },
      ],
    },
    {
      title: 'Estrategia general para problemas aplicados',
      contentLatex:
        '1) **Dibuja** el triángulo rectángulo: horizontal del observador, línea visual y vertical del objeto. 2) Marca el ángulo dado (elevación o depresión) y recuerda que la horizontal es paralela al suelo. 3) Identifica qué lado es hipotenusa, opuesto o adyacente según lo conocido. 4) Elige la razón correcta ($\\operatorname{sen}$, $\\cos$ o $\\tan$) y despeja. 5) Si hay dos posiciones o dos objetos, resuelve un triángulo por vez y combina los resultados.',
      diagramSvg: diagCombinada({ anguloArriba: '60°', anguloAbajo: '30°' }),
      examples: [
        {
          title: 'Ejemplo resuelto combinado',
          statementLatex:
            'Desde una ventana situada a $12\\,m$ del suelo se ve la base de un árbol con depresión de $45°$ y su copa con elevación de $45°$. ¿Altura del árbol?',
          solutionLatex:
            'Distancia horizontal: $d = 12/\\tan45° = 12\\,m$. Parte del árbol por encima de la ventana: $12 \\cdot \\tan45° = 12\\,m$. Altura total: $$h = 12 + 12 = 24\\,m.$$',
        },
      ],
    },
  ],
  exercises: [
    // ------------------------------------------------------------------ ED-01
    {
      id: 'ed-01',
      title: 'Elevación de 45°',
      statementLatex:
        'Un observador se encuentra a $20\\,m$ del pie de una torre y ve su cima con un ángulo de elevación de $45°$. ¿Cuál es la altura de la torre?',
      diagramSvg: diagElevacion({ angulo: '45°', distanciaLabel: '20 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$28.3\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos45°$. La altura es el cateto **opuesto** y la distancia es el **adyacente**: se usa la tangente.',
        },
        {
          id: 'b',
          labelLatex: '$20\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $h = 20 \\cdot \\tan45° = 20 \\cdot 1 = 20\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$14.1\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\cos45°$. Para hallar el cateto opuesto conociendo el adyacente se usa la **tangente**.',
        },
        {
          id: 'd',
          labelLatex: '$34.6\\,m$',
          isCorrect: false,
          feedback: 'Usaste $\\tan60°$. El ángulo dado es $45°$, cuya tangente es exactamente $1$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Dibujamos el triángulo rectángulo: el suelo es un cateto ($20\\,m$), la torre es el otro cateto ($h$) y el ángulo de elevación en el observador es $45°$.',
          mathLatex: '\\tan45° = \\frac{h}{20}',
        },
        {
          stepNumber: 2,
          explanation:
            'Identificamos la razón: conocemos el cateto adyacente ($20\\,m$) y queremos el opuesto ($h$), así que usamos la tangente.',
          mathLatex: '\\tan\\theta = \\frac{\\text{opuesto}}{\\text{adyacente}}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos el valor de la tangente de $45°$.',
          mathLatex: '\\tan45° = 1 \\Rightarrow 1 = \\frac{h}{20}',
        },
        {
          stepNumber: 4,
          explanation: 'Despejamos multiplicando ambos lados por $20$.',
          mathLatex: 'h = 20 \\cdot 1 = 20\\,m',
        },
        {
          stepNumber: 5,
          explanation:
            'Verificación: con $45°$ el triángulo es isósceles, así que la altura debe ser igual a la distancia horizontal. Se cumple.',
          mathLatex: 'h = 20\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-02
    {
      id: 'ed-02',
      title: 'Sombra de un poste',
      statementLatex:
        'Cuando el sol forma un ángulo de elevación de $30°$, la sombra de un poste mide $18\\,m$. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuánto mide el poste?',
      diagramSvg: diagElevacion({
        angulo: '30°',
        distanciaLabel: '18 m (sombra)',
        topLabel: 'Rayos de sol',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$31.2\\,m$',
          isCorrect: false,
          feedback: 'Usaste $\\tan60°$. El ángulo de elevación del sol es $30°$.',
        },
        {
          id: 'b',
          labelLatex: '$15.6\\,m$',
          isCorrect: false,
          feedback:
            'Usaste el $\\cos30°$. Sombra y altura son los dos catetos: corresponde la **tangente**.',
        },
        {
          id: 'c',
          labelLatex: '$36\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\operatorname{sen}30°$. La sombra es el cateto adyacente, no la hipotenusa.',
        },
        {
          id: 'd',
          labelLatex: '$10.4\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $h = 18 \\cdot \\tan30° = 18 \\cdot 0.577 \\approx 10.4\\,m$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Los rayos del sol forman $30°$ con el suelo. La sombra ($18\\,m$) es el cateto adyacente; la altura del poste $h$ es el opuesto.',
          mathLatex: '\\tan30° = \\frac{h}{18}',
        },
        {
          stepNumber: 2,
          explanation: 'Elegimos la tangente porque relaciona los dos catetos.',
          mathLatex: '\\tan\\theta = \\frac{\\text{opuesto}}{\\text{adyacente}}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\tan30° = 0.577$ (equivale a $1/\\sqrt{3}$).',
          mathLatex: '0.577 = \\frac{h}{18}',
        },
        {
          stepNumber: 4,
          explanation: 'Despejamos la altura.',
          mathLatex: 'h = 18 \\cdot 0.577 = 10.386',
        },
        {
          stepNumber: 5,
          explanation: 'Redondeamos a un decimal.',
          mathLatex: 'h \\approx 10.4\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-03
    {
      id: 'ed-03',
      title: 'Avión en vuelo',
      statementLatex:
        'Desde un punto del suelo situado a $350\\,m$ (en línea horizontal) de un avión que pasa directamente sobre la torre de control, este se ve con un ángulo de elevación de $60°$. Usa $\\sqrt{3} \\approx 1.732$. ¿A qué altura vuela?',
      diagramSvg: diagElevacion({ angulo: '60°', distanciaLabel: '350 m', topLabel: 'Avión' }),
      options: [
        {
          id: 'a',
          labelLatex: '$606.2\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $h = 350 \\cdot \\tan60° = 350 \\cdot 1.732 \\approx 606.2\\,m$.',
        },
        {
          id: 'b',
          labelLatex: '$700\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos60°$. Los $350\\,m$ son el cateto adyacente, así que se multiplica por la **tangente**.',
        },
        {
          id: 'c',
          labelLatex: '$202.1\\,m$',
          isCorrect: false,
          feedback: 'Usaste $\\tan30°$. El ángulo de elevación dado es $60°$.',
        },
        {
          id: 'd',
          labelLatex: '$175\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\operatorname{sen}30°$. Revisa tanto el ángulo como la razón trigonométrica.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Modelamos: el cateto adyacente es la distancia horizontal $350\\,m$; el opuesto es la altura $h$; el ángulo en tierra es $60°$.',
          mathLatex: '\\tan60° = \\frac{h}{350}',
        },
        {
          stepNumber: 2,
          explanation: 'Como conocemos el adyacente y buscamos el opuesto, usamos tangente.',
          mathLatex: 'h = 350 \\cdot \\tan60°',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\tan60° = \\sqrt{3} \\approx 1.732$.',
          mathLatex: 'h = 350 \\cdot 1.732',
        },
        { stepNumber: 4, explanation: 'Multiplicamos.', mathLatex: 'h = 606.2\\,m' },
      ],
    },
    // ------------------------------------------------------------------ ED-04
    {
      id: 'ed-04',
      title: 'Faro y bote (45°)',
      statementLatex:
        'Desde lo alto de un faro de $25\\,m$ se ve un bote con un ángulo de depresión de $45°$. ¿A qué distancia de la base del faro está el bote?',
      diagramSvg: diagDepresion({
        angulo: '45°',
        alturaLabel: '25 m',
        topLabel: 'Faro',
        bottomLabel: 'Bote',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$35.4\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos45°$. Altura y distancia horizontal son catetos: usa la **tangente**.',
        },
        {
          id: 'b',
          labelLatex: '$17.7\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\operatorname{sen}45°$. La altura es cateto, no hipotenusa.',
        },
        {
          id: 'c',
          labelLatex: '$25\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Por alternos internos la elevación desde el bote también es $45°$, y con $45°$ los catetos son iguales: $d = 25\\,m$.',
        },
        {
          id: 'd',
          labelLatex: '$43.3\\,m$',
          isCorrect: false,
          feedback: 'Usaste $\\tan60°$. El ángulo dado es $45°$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'La horizontal desde el faro y el suelo son paralelas, así que el ángulo de depresión ($45°$, medido desde arriba) es igual al de elevación desde el bote.',
          mathLatex: '\\angle_{\\text{elevación desde el bote}} = 45°',
        },
        {
          stepNumber: 2,
          explanation:
            'Planteamos la tangente en el vértice del bote: la altura del faro ($25\\,m$) es opuesta y la distancia $d$ es adyacente.',
          mathLatex: '\\tan45° = \\frac{25}{d}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\tan45° = 1$ y despejamos.',
          mathLatex: 'd = \\frac{25}{1} = 25\\,m',
        },
        {
          stepNumber: 4,
          explanation: 'Conclusión: el bote está a $25\\,m$ de la base del faro.',
          mathLatex: 'd = 25\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-05
    {
      id: 'ed-05',
      title: 'Acantilado y lancha',
      statementLatex:
        'Desde la cima de un acantilado de $60\\,m$ se observa una lancha con un ángulo de depresión de $30°$. Usa $\\sqrt{3} \\approx 1.732$. ¿A qué distancia de la base del acantilado navega la lancha?',
      diagramSvg: diagDepresion({
        angulo: '30°',
        alturaLabel: '60 m',
        topLabel: 'Acantilado',
        bottomLabel: 'Lancha',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$34.6\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\tan30°$. Como la distancia es el **denominador**, hay que dividir la altura entre la tangente.',
        },
        {
          id: 'b',
          labelLatex: '$103.9\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $d = 60/\\tan30° = 60 \\cdot 1.732 \\approx 103.9\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$69.3\\,m$',
          isCorrect: false,
          feedback:
            'Usaste $\\cos30°$. Altura y distancia horizontal se relacionan con la **tangente**.',
        },
        {
          id: 'd',
          labelLatex: '$120\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos30°$. La razón correcta entre los dos catetos es la tangente.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Por alternos internos, el ángulo de elevación desde la lancha hacia la cima también es $30°$.',
          mathLatex: '\\tan30° = \\frac{60}{d}',
        },
        {
          stepNumber: 2,
          explanation: 'Identificamos: opuesto $= 60\\,m$ (altura), adyacente $= d$ (incógnita).',
          mathLatex: 'd = \\frac{60}{\\tan30°}',
        },
        {
          stepNumber: 3,
          explanation:
            'Sustituimos $\\tan30° = 1/\\sqrt{3}$; dividir entre $1/\\sqrt{3}$ equivale a multiplicar por $\\sqrt{3}$.',
          mathLatex: 'd = 60 \\cdot \\sqrt{3} = 60 \\cdot 1.732',
        },
        { stepNumber: 4, explanation: 'Calculamos.', mathLatex: 'd = 103.92 \\approx 103.9\\,m' },
      ],
    },
    // ------------------------------------------------------------------ ED-06
    {
      id: 'ed-06',
      title: 'Escalera contra la pared',
      statementLatex:
        'Una escalera de $10\\,m$ se apoya contra una pared formando $60°$ con el suelo. ¿A qué altura de la pared llega la escalera?',
      diagramSvg: diagHipotenusa({ angulo: '60°', hipotenusaLabel: '10 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$8.7\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. $h = 10 \\cdot \\operatorname{sen}60° = 10 \\cdot 0.866 \\approx 8.7\\,m$.',
        },
        {
          id: 'b',
          labelLatex: '$5\\,m$',
          isCorrect: false,
          feedback:
            'Calculaste $10 \\cdot \\cos60°$: eso es la distancia del pie de la escalera a la pared, no la altura.',
        },
        {
          id: 'c',
          labelLatex: '$11.5\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\operatorname{sen}60°$. La escalera ($10\\,m$) es la hipotenusa, así que la altura sale multiplicando por el seno.',
        },
        {
          id: 'd',
          labelLatex: '$17.3\\,m$',
          isCorrect: false,
          feedback:
            'Usaste $\\tan60°$ con la escalera como adyacente. La escalera es la **hipotenusa**: corresponde el seno.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'La escalera es la **hipotenusa** ($10\\,m$); la altura sobre la pared es el cateto opuesto al ángulo de $60°$.',
          mathLatex: '\\operatorname{sen}60° = \\frac{h}{10}',
        },
        {
          stepNumber: 2,
          explanation:
            'Elección de la razón: hipotenusa conocida y cateto opuesto buscado implican **seno**.',
          mathLatex: '\\operatorname{sen}\\theta = \\frac{\\text{opuesto}}{\\text{hipotenusa}}',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos y sustituimos $\\operatorname{sen}60° \\approx 0.866$.',
          mathLatex: 'h = 10 \\cdot 0.866 = 8.66',
        },
        { stepNumber: 4, explanation: 'Redondeamos.', mathLatex: 'h \\approx 8.7\\,m' },
      ],
    },
    // ------------------------------------------------------------------ ED-07
    {
      id: 'ed-07',
      title: 'Cometa en el cielo',
      statementLatex:
        'Un niño sostiene una cuerda de cometa de $80\\,m$ completamente tensa y recta, con un ángulo de elevación de $30°$. ¿A qué altura vuela el cometa?',
      diagramSvg: diagHipotenusa({
        angulo: '30°',
        hipotenusaLabel: '80 m (cuerda)',
        variante: 'cometa',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$69.3\\,m$',
          isCorrect: false,
          feedback:
            'Calculaste $80 \\cdot \\cos30°$: eso sería la distancia horizontal, no la altura.',
        },
        {
          id: 'b',
          labelLatex: '$160\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\operatorname{sen}30°$ en lugar de multiplicar. La cuerda es la hipotenusa completa.',
        },
        {
          id: 'c',
          labelLatex: '$40\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $h = 80 \\cdot \\operatorname{sen}30° = 80 \\cdot 0.5 = 40\\,m$.',
        },
        {
          id: 'd',
          labelLatex: '$92.4\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos30°$. La altura es el cateto **opuesto**: se usa el seno.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'La cuerda tensa y recta representa la hipotenusa ($80\\,m$). La altura del cometa es el cateto opuesto al ángulo de $30°$.',
          mathLatex: '\\operatorname{sen}30° = \\frac{h}{80}',
        },
        {
          stepNumber: 2,
          explanation: 'Hipotenusa conocida + opuesto buscado ⇒ seno.',
          mathLatex: 'h = 80 \\cdot \\operatorname{sen}30°',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\operatorname{sen}30° = 0.5$.',
          mathLatex: 'h = 80 \\cdot 0.5',
        },
        {
          stepNumber: 4,
          explanation: 'Resultado exacto, sin necesidad de redondear.',
          mathLatex: 'h = 40\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-08
    {
      id: 'ed-08',
      title: 'Separación entre edificios',
      statementLatex:
        'Desde la azotea de un edificio de $45\\,m$ se ve la base de otro edificio con un ángulo de depresión de $30°$. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuál es la distancia entre los dos edificios?',
      diagramSvg: diagDepresion({
        angulo: '30°',
        alturaLabel: '45 m',
        topLabel: 'Azotea',
        bottomLabel: 'Base del otro edificio',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$26\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\tan30°$. La separación está en el denominador: divide la altura entre la tangente.',
        },
        {
          id: 'b',
          labelLatex: '$77.9\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $d = 45/\\tan30° = 45 \\cdot 1.732 \\approx 77.9\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$90\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos30°$. Entre los dos catetos la relación es la tangente, no el coseno.',
        },
        {
          id: 'd',
          labelLatex: '$22.5\\,m$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}30°$ multiplicando. La azotea y la base están unidas por catetos, no por la hipotenusa.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Dibujamos: la azotea del primer edificio, la horizontal hacia el segundo y la base vista con depresión de $30°$.',
          mathLatex: '\\tan30° = \\frac{45}{d}',
        },
        {
          stepNumber: 2,
          explanation:
            'El ángulo de depresión desde arriba es igual al de elevación desde la base (alternos internos).',
          mathLatex: 'd = \\frac{45}{\\tan30°}',
        },
        {
          stepNumber: 3,
          explanation:
            'Como $\\tan30° = 1/\\sqrt{3}$, dividir entre él equivale a multiplicar por $\\sqrt{3}$.',
          mathLatex: 'd = 45 \\cdot 1.732',
        },
        {
          stepNumber: 4,
          explanation: 'Calculamos y redondeamos.',
          mathLatex: 'd = 77.94 \\approx 77.9\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-09
    {
      id: 'ed-09',
      title: 'Torre vista desde una ventana',
      statementLatex:
        'Desde una ventana ubicada a $10\\,m$ del suelo se ve la base de una torre con depresión de $30°$ y su cima con elevación de $60°$. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuál es la altura total de la torre?',
      diagramSvg: diagCombinada({ anguloArriba: '60°', anguloAbajo: '30°' }),
      options: [
        {
          id: 'a',
          labelLatex: '$10\\,m$',
          isCorrect: false,
          feedback:
            'Eso es solo la altura de la ventana. Falta la parte de la torre que queda por encima de la horizontal.',
        },
        {
          id: 'b',
          labelLatex: '$70\\,m$',
          isCorrect: false,
          feedback:
            'Sumaste la parte superior dos veces. Solo se suma una vez a la altura de la ventana.',
        },
        {
          id: 'c',
          labelLatex: '$30\\,m$',
          isCorrect: false,
          feedback:
            'Esa es la parte superior de la torre ($d \\cdot \\tan60°$), pero olvidaste sumar los $10\\,m$ de la ventana.',
        },
        {
          id: 'd',
          labelLatex: '$40\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Distancia $d = 10\\sqrt{3}$; parte superior $= d\\tan60° = 30$; total $10 + 30 = 40\\,m$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Separamos el problema en dos triángulos rectángulos que comparten la misma distancia horizontal $d$ (de la ventana a la torre).',
          mathLatex: '\\text{triángulo inferior: } \\tan30° = \\frac{10}{d}',
        },
        {
          stepNumber: 2,
          explanation:
            'Triángulo inferior: despejamos $d$ usando la depresión de $30°$ (que por alternos internos es elevación de $30°$ desde la base).',
          mathLatex: 'd = \\frac{10}{\\tan30°} = \\frac{10}{1/\\sqrt{3}} = 10\\sqrt{3}',
        },
        {
          stepNumber: 3,
          explanation:
            'Triángulo superior: la parte de torre por encima de la ventana, llamémosla $x$, cumple con la elevación de $60°$.',
          mathLatex:
            '\\tan60° = \\frac{x}{d} \\Rightarrow x = d \\cdot \\tan60° = 10\\sqrt{3} \\cdot \\sqrt{3}',
        },
        {
          stepNumber: 4,
          explanation: 'Simplificamos usando $\\sqrt{3} \\cdot \\sqrt{3} = 3$.',
          mathLatex: 'x = 10 \\cdot 3 = 30\\,m',
        },
        {
          stepNumber: 5,
          explanation:
            'La altura total es la parte inferior ($10\\,m$, altura de la ventana) más la superior.',
          mathLatex: 'h = 10 + 30 = 40\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-10
    {
      id: 'ed-10',
      title: 'Avión entre dos observadores',
      statementLatex:
        'Dos observadores, $A$ y $B$, están a $200\\,m$ uno del otro sobre terreno plano. Un avión pasa directamente sobre $B$ y $A$ lo ve con un ángulo de elevación de $30°$. Usa $\\sqrt{3} \\approx 1.732$. ¿A qué altura vuela el avión?',
      diagramSvg: diagDosObservaciones({ anguloCerca: '30°', distanciaLabel: '200 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$115.5\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $h = 200 \\cdot \\tan30° = 200 \\cdot 0.577 \\approx 115.5\\,m$.',
        },
        {
          id: 'b',
          labelLatex: '$231\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos30°$. Los $200\\,m$ son el cateto adyacente, no la hipotenusa.',
        },
        {
          id: 'c',
          labelLatex: '$100\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\operatorname{sen}30°$. La distancia entre observadores es el cateto adyacente: usa la tangente.',
        },
        {
          id: 'd',
          labelLatex: '$346.4\\,m$',
          isCorrect: false,
          feedback: 'Usaste $\\tan60°$. El ángulo de elevación es $30°$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'El avión forma un ángulo recto sobre $B$: el segmento $AB$ ($200\\,m$) es el cateto adyacente y la altura $h$ el opuesto, con ángulo de $30°$ en $A$.',
          mathLatex: '\\tan30° = \\frac{h}{200}',
        },
        {
          stepNumber: 2,
          explanation: 'Catetos conocidos/buscados ⇒ tangente.',
          mathLatex: 'h = 200 \\cdot \\tan30°',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\tan30° = 1/\\sqrt{3} \\approx 0.577$.',
          mathLatex: 'h = 200 \\cdot 0.577',
        },
        {
          stepNumber: 4,
          explanation: 'Calculamos y redondeamos.',
          mathLatex: 'h = 115.47 \\approx 115.5\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-11
    {
      id: 'ed-11',
      title: 'Puente sobre el río',
      statementLatex:
        'Desde un puente de $40\\,m$ de altura se ve un bote con un ángulo de depresión de $60°$. Usa $\\sqrt{3} \\approx 1.732$. ¿A qué distancia horizontal del puente está el bote?',
      diagramSvg: diagDepresion({
        angulo: '60°',
        alturaLabel: '40 m',
        topLabel: 'Puente',
        bottomLabel: 'Bote',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$69.3\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\tan60°$. Con un ángulo grande el objeto está **cerca**: la distancia se obtiene dividiendo.',
        },
        {
          id: 'b',
          labelLatex: '$23.1\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $d = 40/\\tan60° = 40/1.732 \\approx 23.1\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$80\\,m$',
          isCorrect: false,
          feedback: 'Dividiste entre $\\cos60°$. La relación entre los dos catetos es la tangente.',
        },
        {
          id: 'd',
          labelLatex: '$20\\,m$',
          isCorrect: false,
          feedback: 'Multiplicaste por $\\cos60°$. Recuerda: opuesto/adyacente = tangente.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Por alternos internos, desde el bote la cima del puente se ve con elevación de $60°$.',
          mathLatex: '\\tan60° = \\frac{40}{d}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos la distancia (adyacente).',
          mathLatex: 'd = \\frac{40}{\\tan60°} = \\frac{40}{\\sqrt{3}}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\sqrt{3} \\approx 1.732$ y dividimos.',
          mathLatex: 'd = \\frac{40}{1.732} = 23.09',
        },
        {
          stepNumber: 4,
          explanation: 'Redondeamos a un decimal.',
          mathLatex: 'd \\approx 23.1\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-12
    {
      id: 'ed-12',
      title: 'Antena sobre un edificio',
      statementLatex:
        'Desde un punto del suelo se ve el pie de una antena con elevación de $45°$ y la punta con elevación de $60°$. La antena mide $15\\,m$. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuál es la altura del edificio donde está instalada?',
      diagramSvg: diagAntena('45°', '60°'),
      options: [
        {
          id: 'a',
          labelLatex: '$35.5\\,m$',
          isCorrect: false,
          feedback: 'Ese valor incluye la antena. Piden solo la altura del edificio.',
        },
        {
          id: 'b',
          labelLatex: '$20.5\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $15 = d(\\tan60° - \\tan45°)$, de donde $d = h \\approx 20.5\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$5.5\\,m$',
          isCorrect: false,
          feedback:
            'Restaste las tangentes en el orden contrario: $\\tan60° - \\tan45° = 0.732$, no $1 - 1.732$.',
        },
        {
          id: 'd',
          labelLatex: '$26\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste $15 \\cdot 1.732$. Primero hay que plantear la ecuación con las dos observaciones.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Llamamos $h$ a la altura del edificio y $d$ a la distancia horizontal del observador. Observación 1 (al pie de la antena):',
          mathLatex: '\\tan45° = \\frac{h}{d} \\Rightarrow h = d',
        },
        {
          stepNumber: 2,
          explanation: 'Observación 2 (a la punta): la altura vista es $h + 15$.',
          mathLatex: '\\tan60° = \\frac{h + 15}{d}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $d = h$ (paso 1) en la segunda ecuación.',
          mathLatex: '\\sqrt{3} \\cdot h = h + 15',
        },
        {
          stepNumber: 4,
          explanation: 'Pasamos $h$ al lado izquierdo y factorizamos.',
          mathLatex: 'h(\\sqrt{3} - 1) = 15',
        },
        {
          stepNumber: 5,
          explanation: 'Sustituimos $\\sqrt{3} \\approx 1.732$ y despejamos.',
          mathLatex: 'h = \\frac{15}{0.732} = 20.49',
        },
        {
          stepNumber: 6,
          explanation:
            'Redondeamos: el edificio mide aproximadamente $20.5\\,m$. Verificación: $20.5 + 15 = 35.5$ y $35.5/20.5 \\approx 1.73 = \\tan60°$. ✔',
          mathLatex: 'h \\approx 20.5\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-13
    {
      id: 'ed-13',
      title: 'Dron en ascenso',
      statementLatex:
        'Un operador controla un dron desde un punto del suelo. Cuando el dron está a $120\\,m$ horizontales, se ve con elevación de $45°$. Luego sube verticalmente otros $40\\,m$. ¿Cuál es el nuevo ángulo de elevación?',
      diagramSvg: diagDron(),
      options: [
        {
          id: 'a',
          labelLatex: '$53.1°$',
          isCorrect: true,
          feedback:
            'Correcto. $\\tan\\theta = 160/120 = 1.333$ y $\\arctan(1.333) \\approx 53.1°$.',
        },
        {
          id: 'b',
          labelLatex: '$36.9°$',
          isCorrect: false,
          feedback:
            'Invertiste el cociente: calculaste $\\arctan(120/160)$. La altura es el cateto **opuesto** y va en el numerador.',
        },
        {
          id: 'c',
          labelLatex: '$45°$',
          isCorrect: false,
          feedback:
            'El dron subió, así que el ángulo debe aumentar. Recalcula con la nueva altura $120 + 40 = 160\\,m$.',
        },
        {
          id: 'd',
          labelLatex: '$33.7°$',
          isCorrect: false,
          feedback: 'Revisa la nueva altura: es $160\\,m$, no $120\\,m$ ni otra cantidad menor.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Primera posición: elevación $45°$ con $120\\,m$ horizontales implica altura inicial $h_1 = 120 \\cdot \\tan45° = 120\\,m$.',
          mathLatex: 'h_1 = 120 \\cdot 1 = 120\\,m',
        },
        {
          stepNumber: 2,
          explanation: 'El dron sube verticalmente $40\\,m$: nueva altura.',
          mathLatex: 'h_2 = 120 + 40 = 160\\,m',
        },
        {
          stepNumber: 3,
          explanation:
            'La distancia horizontal no cambia ($120\\,m$). Planteamos la nueva tangente.',
          mathLatex: '\\tan\\theta = \\frac{160}{120} = \\frac{4}{3} \\approx 1.333',
        },
        {
          stepNumber: 4,
          explanation: 'Aplicamos la función inversa de la tangente para obtener el ángulo.',
          mathLatex: '\\theta = \\arctan(1.333) \\approx 53.1°',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-14
    {
      id: 'ed-14',
      title: 'Barco alejándose del faro',
      statementLatex:
        'Un barco parte de la base de un faro de $50\\,m$ y navega en línea recta. En cierto momento, el vigía ve el barco con un ángulo de depresión de $30°$. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuántos metros navegó el barco?',
      diagramSvg: diagDepresion({
        angulo: '30°',
        alturaLabel: '50 m',
        topLabel: 'Faro',
        bottomLabel: 'Barco',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$28.9\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\tan30°$. La distancia recorrida es el adyacente: divide la altura entre la tangente.',
        },
        {
          id: 'b',
          labelLatex: '$86.6\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $d = 50/\\tan30° = 50\\sqrt{3} \\approx 86.6\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$57.7\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos30°$. La ruta del barco y la altura del faro son catetos: usa la tangente.',
        },
        {
          id: 'd',
          labelLatex: '$43.3\\,m$',
          isCorrect: false,
          feedback:
            'Mezclaste razones: con $\\operatorname{sen}60°$ obtendrías otro cateto distinto. Plantea $\\tan30° = 50/d$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'El barco navegó exactamente la distancia horizontal entre la base del faro y su posición actual: esa es $d$.',
          mathLatex: '\\tan30° = \\frac{50}{d}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $d$.',
          mathLatex: 'd = \\frac{50}{\\tan30°} = 50\\sqrt{3}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\sqrt{3} \\approx 1.732$.',
          mathLatex: 'd = 50 \\cdot 1.732',
        },
        { stepNumber: 4, explanation: 'Resultado.', mathLatex: 'd = 86.6\\,m' },
      ],
    },
    // ------------------------------------------------------------------ ED-15
    {
      id: 'ed-15',
      title: 'Longitud de la escalera',
      statementLatex:
        'El pie de una escalera está a $7\\,m$ de una pared y la escalera forma un ángulo de $30°$ con el suelo. ¿Cuánto mide la escalera?',
      diagramSvg: diagHipotenusa({ angulo: '30°', hipotenusaLabel: 'L = ?', alturaLabel: '' }),
      options: [
        {
          id: 'a',
          labelLatex: '$14\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos60°$... que da el mismo número, pero revisa: $7/\\cos30° = 8.1$. El ángulo con el suelo es $30°$.',
        },
        {
          id: 'b',
          labelLatex: '$8.1\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $L = 7/\\cos30° = 7/0.866 \\approx 8.1\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$6.1\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\cos30°$. La escalera es la **hipotenusa** y es el lado más largo del triángulo.',
        },
        {
          id: 'd',
          labelLatex: '$3.5\\,m$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}30°$ multiplicando. La distancia a la pared es el cateto adyacente: $\\cos30° = 7/L$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Datos: distancia del pie a la pared $= 7\\,m$ (cateto adyacente al ángulo de $30°$); longitud de la escalera $L$ (hipotenusa, incógnita).',
          mathLatex: '\\cos30° = \\frac{7}{L}',
        },
        {
          stepNumber: 2,
          explanation: 'Adyacente conocido + hipotenusa buscada ⇒ coseno.',
          mathLatex: '\\cos\\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}}',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $L$.',
          mathLatex: 'L = \\frac{7}{\\cos30°} = \\frac{7}{0.866}',
        },
        {
          stepNumber: 4,
          explanation: 'Calculamos y redondeamos.',
          mathLatex: 'L = 8.08 \\approx 8.1\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-16
    {
      id: 'ed-16',
      title: 'Globo aerostático amarrado',
      statementLatex:
        'Un globo aerostático sujeta una cuerda de $100\\,m$ que forma un ángulo de $60°$ con el suelo. Usa $\\sqrt{3} \\approx 1.732$. ¿A qué altura está el globo?',
      diagramSvg: diagHipotenusa({
        angulo: '60°',
        hipotenusaLabel: '100 m (cuerda)',
        variante: 'globo',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$50\\,m$',
          isCorrect: false,
          feedback: 'Usaste $\\operatorname{sen}30°$. El ángulo con el suelo es $60°$.',
        },
        {
          id: 'b',
          labelLatex: '$86.6\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. $h = 100 \\cdot \\operatorname{sen}60° = 100 \\cdot 0.866 \\approx 86.6\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$173.2\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos30°$. La cuerda ya es la hipotenusa: multiplica por el seno del ángulo.',
        },
        {
          id: 'd',
          labelLatex: '$57.7\\,m$',
          isCorrect: false,
          feedback:
            'Calculaste $100/\\sqrt{3}$: eso sería con un ángulo de $30°$ usando tangente. Aquí el ángulo es $60°$ y se usa el seno.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'La cuerda es la hipotenusa ($100\\,m$); la altura del globo es el cateto opuesto al ángulo de $60°$ con el suelo.',
          mathLatex: '\\operatorname{sen}60° = \\frac{h}{100}',
        },
        {
          stepNumber: 2,
          explanation: 'Hipotenusa conocida + opuesto buscado ⇒ seno.',
          mathLatex: 'h = 100 \\cdot \\operatorname{sen}60°',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos $\\operatorname{sen}60° = \\sqrt{3}/2 \\approx 0.866$.',
          mathLatex: 'h = 100 \\cdot 0.866',
        },
        { stepNumber: 4, explanation: 'Resultado.', mathLatex: 'h = 86.6\\,m' },
      ],
    },
    // ------------------------------------------------------------------ ED-17
    {
      id: 'ed-17',
      title: 'Avión hacia el aeropuerto',
      statementLatex:
        'Un avión vuela a $900\\,m$ de altura y su piloto ve la pista con un ángulo de depresión de $60°$. Usa $\\sqrt{3} \\approx 1.732$. ¿Qué distancia horizontal separa al avión del punto de aterrizaje?',
      diagramSvg: diagDepresion({
        angulo: '60°',
        alturaLabel: '900 m',
        volando: true,
        topLabel: 'Avión',
        bottomLabel: 'Pista',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$1558.8\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste por $\\tan60°$. La altura es el **numerador**: la distancia se obtiene dividiendo.',
        },
        {
          id: 'b',
          labelLatex: '$519.6\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $d = 900/\\tan60° = 900/1.732 \\approx 519.6\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$1800\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\cos60°$. Altura y distancia horizontal se relacionan con la tangente.',
        },
        {
          id: 'd',
          labelLatex: '$450\\,m$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}30°$ multiplicando. Plantea $\\tan60° = 900/d$ y despeja.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Por alternos internos, desde la pista el avión se ve con elevación de $60°$. La altura ($900\\,m$) es opuesta y $d$ adyacente.',
          mathLatex: '\\tan60° = \\frac{900}{d}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $d$.',
          mathLatex: 'd = \\frac{900}{\\tan60°} = \\frac{900}{\\sqrt{3}}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos y dividimos.',
          mathLatex: 'd = \\frac{900}{1.732} = 519.63',
        },
        { stepNumber: 4, explanation: 'Redondeamos.', mathLatex: 'd \\approx 519.6\\,m' },
      ],
    },
    // ------------------------------------------------------------------ ED-18
    {
      id: 'ed-18',
      title: 'Sombras al mismo tiempo',
      statementLatex:
        'Al mediodía, un poste de $4\\,m$ proyecta una sombra de $5\\,m$. En ese mismo instante, un edificio proyecta una sombra de $25\\,m$. ¿Cuál es la altura del edificio?',
      diagramSvg: diagSombras(),
      options: [
        {
          id: 'a',
          labelLatex: '$31.25\\,m$',
          isCorrect: false,
          feedback: 'Invertiste la proporción: la razón altura/sombra es $4/5$, no $5/4$.',
        },
        {
          id: 'b',
          labelLatex: '$20\\,m$',
          isCorrect: true,
          feedback: 'Correcto. $\\tan\\theta = 4/5$ y $h = 25 \\cdot (4/5) = 20\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$12.5\\,m$',
          isCorrect: false,
          feedback:
            'Tomaste la mitad de la sombra. Aplica la misma razón trigonométrica del poste al edificio.',
        },
        {
          id: 'd',
          labelLatex: '$45\\,m$',
          isCorrect: false,
          feedback:
            'Sumaste en lugar de aplicar la proporción. El sol tiene el mismo ángulo para ambos objetos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Como el sol es el mismo para los dos objetos, el ángulo de elevación $\\theta$ es idéntico. Empezamos con el poste.',
          mathLatex: '\\tan\\theta = \\frac{4}{5} = 0.8',
        },
        {
          stepNumber: 2,
          explanation: 'Aplicamos la misma tangente al edificio, cuya sombra mide $25\\,m$.',
          mathLatex: '\\tan\\theta = \\frac{H}{25}',
        },
        {
          stepNumber: 3,
          explanation: 'Igualamos ambas expresiones de $\\tan\\theta$.',
          mathLatex: '\\frac{H}{25} = 0.8',
        },
        {
          stepNumber: 4,
          explanation: 'Despejamos la altura del edificio.',
          mathLatex: 'H = 25 \\cdot 0.8 = 20\\,m',
        },
        {
          stepNumber: 5,
          explanation:
            'Interpretación: la sombra del edificio es 5 veces la del poste ($25/5$), así que su altura también es 5 veces $4\\,m$.',
          mathLatex: 'H = 5 \\cdot 4 = 20\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-19
    {
      id: 'ed-19',
      title: 'Base y cima de otro edificio',
      statementLatex:
        'Desde la azotea de un edificio de $24\\,m$ se ven la base y la cima de un segundo edificio con depresión de $45°$ y elevación de $30°$, respectivamente. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuál es la altura del segundo edificio?',
      diagramSvg: diagCombinada({
        anguloArriba: '30°',
        anguloAbajo: '45°',
        alturaObservadorLabel: '24 m',
        alturaTotalLabel: 'H = ?',
      }),
      options: [
        {
          id: 'a',
          labelLatex: '$24\\,m$',
          isCorrect: false,
          feedback:
            'Eso es solo la parte inferior (misma altura que el primer edificio). Falta lo que sobresale por encima de la horizontal.',
        },
        {
          id: 'b',
          labelLatex: '$13.9\\,m$',
          isCorrect: false,
          feedback:
            'Ese es solo el trozo superior. Suma los $24\\,m$ que quedan por debajo de la horizontal.',
        },
        {
          id: 'c',
          labelLatex: '$65.6\\,m$',
          isCorrect: false,
          feedback:
            'Multiplicaste $24 \\cdot 1.732$ y sumaste $24$. La parte superior sale con $\\tan30° = 0.577$, no con $\\tan60°$.',
        },
        {
          id: 'd',
          labelLatex: '$37.9\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Separación $= 24\\,m$; parte superior $= 24 \\cdot 0.577 \\approx 13.9$; total $\\approx 37.9\\,m$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Primero hallamos la separación $d$ entre edificios usando la depresión de $45°$ hacia la base (por alternos internos es una elevación de $45°$ desde abajo).',
          mathLatex: '\\tan45° = \\frac{24}{d} \\Rightarrow d = 24\\,m',
        },
        {
          stepNumber: 2,
          explanation:
            'La horizontal desde la primera azotea corta el segundo edificio a $24\\,m$ del suelo: debajo hay dos alturas iguales porque $\\tan45° = 1$.',
          mathLatex: 'h_{\\text{inferior}} = 24\\,m',
        },
        {
          stepNumber: 3,
          explanation:
            'Parte del segundo edificio por encima de la horizontal, usando la elevación de $30°$ hacia su cima.',
          mathLatex: 'x = d \\cdot \\tan30° = 24 \\cdot 0.577',
        },
        {
          stepNumber: 4,
          explanation: 'Calculamos ese trozo.',
          mathLatex: 'x = 13.85 \\approx 13.9\\,m',
        },
        {
          stepNumber: 5,
          explanation: 'Altura total del segundo edificio.',
          mathLatex: 'H = 24 + 13.9 = 37.9\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ ED-20
    {
      id: 'ed-20',
      title: 'Auto acercándose al edificio',
      statementLatex:
        'Desde la terraza de un edificio de $90\\,m$ se ve un auto con depresión de $45°$. Después de avanzar hacia el edificio, se le ve con depresión de $60°$. Usa $\\sqrt{3} \\approx 1.732$. ¿Cuántos metros avanzó el auto entre las dos observaciones?',
      diagramSvg: diagAuto('45°', '60°'),
      options: [
        {
          id: 'a',
          labelLatex: '$52\\,m$',
          isCorrect: false,
          feedback:
            'Esa es la segunda distancia al edificio. El avance es la **diferencia** entre las dos posiciones.',
        },
        {
          id: 'b',
          labelLatex: '$142\\,m$',
          isCorrect: false,
          feedback: 'Sumaste las distancias. El auto se acerca, así que hay que restar.',
        },
        {
          id: 'c',
          labelLatex: '$38\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Primera posición $90\\,m$; segunda $90/\\tan60° \\approx 52\\,m$; avance $= 90 - 52 = 38\\,m$.',
        },
        {
          id: 'd',
          labelLatex: '$30\\,m$',
          isCorrect: false,
          feedback:
            'Recalcula la segunda distancia con $\\tan60° = 1.732$: $90/1.732 \\approx 51.96$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Posición 1: con depresión de $45°$, la distancia horizontal coincide con la altura.',
          mathLatex: 'd_1 = \\frac{90}{\\tan45°} = 90\\,m',
        },
        {
          stepNumber: 2,
          explanation: 'Posición 2: con depresión de $60°$, la distancia disminuye.',
          mathLatex: 'd_2 = \\frac{90}{\\tan60°} = \\frac{90}{\\sqrt{3}}',
        },
        {
          stepNumber: 3,
          explanation: 'Calculamos $d_2$ con $\\sqrt{3} \\approx 1.732$.',
          mathLatex: 'd_2 = \\frac{90}{1.732} = 51.96 \\approx 52.0\\,m',
        },
        {
          stepNumber: 4,
          explanation: 'El avance del auto es la diferencia de las dos distancias.',
          mathLatex: '\\Delta d = d_1 - d_2 = 90 - 52.0',
        },
        { stepNumber: 5, explanation: 'Resultado final.', mathLatex: '\\Delta d = 38.0\\,m' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// UNIDAD T2 — Ley de senos
// ---------------------------------------------------------------------------

const leySenos: PracticeUnit = {
  id: 'ley-senos',
  title: 'Ley de Senos',
  subject: 'Trigonometría',
  topic: 'trigonometria',
  description:
    'Resuelve triángulos oblicuángulos con la proporcionalidad entre cada lado y el seno de su ángulo opuesto, y aplícala en problemas de medición indirecta.',
  theory: [
    {
      title: 'Triángulos oblicuángulos y la ley de senos',
      contentLatex:
        'Un triángulo **oblicuángulo** no tiene ángulos rectos, así que las razones del triángulo rectángulo no se aplican directamente. La **ley de senos** relaciona cada lado con el seno de su ángulo opuesto: $$\\frac{a}{\\operatorname{sen}A} = \\frac{b}{\\operatorname{sen}B} = \\frac{c}{\\operatorname{sen}C}.$$ Se usa cuando conocemos un par completo (un lado y su ángulo opuesto) más otro dato.',
      diagramSvg: diagTriangulo(),
      examples: [
        {
          title: 'Ejemplo resuelto: hallar un lado',
          statementLatex: 'En $\\triangle ABC$: $A = 30°$, $B = 45°$ y $a = 10$. Halla $b$.',
          solutionLatex:
            '$a$ es opuesto a $A$ y $b$ opuesto a $B$ (¡el lado va con el ángulo que mira!). Planteamos: $$\\frac{b}{\\operatorname{sen}45°} = \\frac{10}{\\operatorname{sen}30°}.$$ Despejamos: $b = 10 \\cdot \\dfrac{0.7071}{0.5} = 14.1$.',
        },
        {
          title: 'Ejemplo resuelto: hallar un ángulo',
          statementLatex: 'En $\\triangle ABC$: $A = 40°$, $a = 6$ y $b = 8$. Halla $B$.',
          solutionLatex:
            'Despejamos el seno del ángulo pedido: $$\\operatorname{sen}B = \\frac{b \\cdot \\operatorname{sen}A}{a} = \\frac{8 \\cdot 0.643}{6} \\approx 0.857.$$ Luego $B = \\arcsen(0.857) \\approx 59°$.',
        },
      ],
    },
    {
      title: 'Cómo despejar correctamente',
      contentLatex:
        'Para hallar un **lado**: $x = \\dfrac{x_{\\text{conocido}} \\cdot \\operatorname{sen}(X)}{\\operatorname{sen}(X_{\\text{opuesto conocido}})}$. Para hallar un **ángulo**: primero obtén $\\operatorname{sen}(\\theta)$ despejando de la proporción y después aplica la función inversa ($\\arcsen$). Recuerda emparejar siempre lado–ángulo opuesto: $a \\leftrightarrow A$, $b \\leftrightarrow B$, $c \\leftrightarrow C$.',
      examples: [
        {
          title: 'Ejemplo resuelto paso a paso',
          statementLatex: 'En $\\triangle PQR$: $P = 50°$, $p = 12$ y $Q = 70°$. Halla $q$.',
          solutionLatex:
            '$$\\frac{q}{\\operatorname{sen}70°} = \\frac{12}{\\operatorname{sen}50°} \\Rightarrow q = \\frac{12 \\cdot 0.9397}{0.766} \\approx 14.7.$$ Primero se multiplica y luego se divide; nunca al revés.',
        },
      ],
    },
    {
      title: 'Ángulos obtusos: sen(180° − x) = sen(x)',
      contentLatex:
        'El seno de un ángulo obtuso coincide con el seno de su suplemento: $$\\operatorname{sen}105° = \\operatorname{sen}75° \\approx 0.966, \\quad \\operatorname{sen}120° = \\operatorname{sen}60° \\approx 0.866,$$$$\\operatorname{sen}110° = \\operatorname{sen}70° \\approx 0.940, \\quad \\operatorname{sen}135° = \\operatorname{sen}45° \\approx 0.707.$$ Además, en todo triángulo los tres ángulos suman $180°$: si conoces dos, el tercero sale restando.',
      diagramSvg: diagTriangulo(),
      examples: [
        {
          title: 'Ejemplo resuelto',
          statementLatex: 'En $\\triangle ABC$: $A = 120°$, $a = 18$ y $B = 30°$. Halla $b$.',
          solutionLatex:
            '$$b = \\frac{18 \\cdot \\operatorname{sen}30°}{\\operatorname{sen}120°} = \\frac{18 \\cdot 0.5}{0.866} \\approx 10.4.$$ El lado más corto queda frente al ángulo más pequeño: $30° < 120°$, coherente.',
        },
      ],
    },
    {
      title: 'Problemas aplicados',
      contentLatex:
        'En medición indirecta (distancias inaccesibles, torres, ríos): 1) identifica los tres vértices del triángulo y dibújalo; 2) marca los ángulos dados **en el interior** del triángulo; 3) si hacen falta, calcula el tercer ángulo con la suma $180°$; 4) aplica la ley de senos con el único par lado–ángulo opuesto completo que tengas.',
      diagramSvg: diagTriangulo({ verticeA: 'C', verticeB: 'D', verticeC: 'T', ladoC: '100 m' }),
      examples: [
        {
          title: 'Ejemplo resuelto aplicado',
          statementLatex:
            'Dos equipos en $C$ y $D$, separados $100\\,m$, miden hacia una torre $T$ ángulos de $60°$ y $45°$. ¿Qué tan lejos está la torre de $C$?',
          solutionLatex:
            'Tercer ángulo (en la torre): $180° - 60° - 45° = 75°$. El lado $CT$ es opuesto al ángulo de $D$ ($45°$) y $CD = 100$ es opuesto al de la torre ($75°$): $$CT = \\frac{100 \\cdot \\operatorname{sen}45°}{\\operatorname{sen}75°} = \\frac{100 \\cdot 0.7071}{0.9659} \\approx 73.2\\,m.$$',
        },
      ],
    },
  ],
  exercises: [
    // ------------------------------------------------------------------ LS-01
    {
      id: 'ls-01',
      title: 'Hallar un lado',
      statementLatex:
        'En $\\triangle ABC$: $A = 45°$, $B = 60°$ y $a = 10$. Usa $\\operatorname{sen}45° \\approx 0.7071$ y $\\operatorname{sen}60° \\approx 0.8660$. Halla $b$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$8.2$',
          isCorrect: false,
          feedback:
            'Invertiste la razón: calculaste $10 \\cdot \\operatorname{sen}45° / \\operatorname{sen}60°$. La proporción es $b/\\operatorname{sen}B = a/\\operatorname{sen}A$.',
        },
        {
          id: 'b',
          labelLatex: '$10$',
          isCorrect: false,
          feedback:
            'Los lados solo coinciden cuando sus ángulos opuestos son iguales. Aquí $60° > 45°$, así que $b > a$.',
        },
        {
          id: 'c',
          labelLatex: '$12.2$',
          isCorrect: true,
          feedback:
            'Correcto. $b = 10 \\cdot \\operatorname{sen}60°/\\operatorname{sen}45° = 10 \\cdot 0.8660/0.7071 \\approx 12.2$.',
        },
        {
          id: 'd',
          labelLatex: '$14.1$',
          isCorrect: false,
          feedback: 'Usaste $1/\\cos45°$ en lugar de la razón entre senos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Identificamos los pares lado–ángulo opuesto: $a = 10$ con $A = 45°$ (par completo) y el incógnito $b$ con $B = 60°$.',
          mathLatex: 'a \\leftrightarrow A = 45°, \\quad b \\leftrightarrow B = 60°',
        },
        {
          stepNumber: 2,
          explanation: 'Planteamos la ley de senos con esos dos pares.',
          mathLatex: '\\frac{b}{\\operatorname{sen}60°} = \\frac{10}{\\operatorname{sen}45°}',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $b$ multiplicando ambos lados por $\\operatorname{sen}60°$.',
          mathLatex: 'b = \\frac{10 \\cdot \\operatorname{sen}60°}{\\operatorname{sen}45°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos los valores.',
          mathLatex: 'b = \\frac{10 \\cdot 0.8660}{0.7071}',
        },
        {
          stepNumber: 5,
          explanation: 'Multiplicamos primero el numerador y luego dividimos.',
          mathLatex: 'b = \\frac{8.660}{0.7071} \\approx 12.2',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-02
    {
      id: 'ls-02',
      title: 'Otro lado con 30° y 45°',
      statementLatex:
        'En $\\triangle ABC$: $A = 30°$, $B = 45°$ y $a = 8$. Usa $\\operatorname{sen}30° = 0.5$ y $\\operatorname{sen}45° \\approx 0.7071$. Calcula $b$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$5.7$',
          isCorrect: false,
          feedback: 'Invertiste la proporción. Como $B > A$, debe cumplirse $b > a$.',
        },
        {
          id: 'b',
          labelLatex: '$16$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\operatorname{sen}30°$ dos veces. Sustituye directo en $b = a\\,\\operatorname{sen}B/\\operatorname{sen}A$.',
        },
        {
          id: 'c',
          labelLatex: '$11.3$',
          isCorrect: true,
          feedback: 'Correcto. $b = 8 \\cdot 0.7071/0.5 \\approx 11.3$.',
        },
        {
          id: 'd',
          labelLatex: '$8$',
          isCorrect: false,
          feedback: 'Los lados no son iguales porque los ángulos $30°$ y $45°$ son distintos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Par conocido: $a = 8$ opuesto a $A = 30°$. Incógnita: $b$ opuesto a $B = 45°$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}45°} = \\frac{8}{\\operatorname{sen}30°}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $b$.',
          mathLatex: 'b = \\frac{8 \\cdot \\operatorname{sen}45°}{\\operatorname{sen}30°}',
        },
        {
          stepNumber: 3,
          explanation:
            'Sustituimos $\\operatorname{sen}45° = 0.7071$ y $\\operatorname{sen}30° = 0.5$.',
          mathLatex: 'b = \\frac{8 \\cdot 0.7071}{0.5}',
        },
        {
          stepNumber: 4,
          explanation: 'Calculamos.',
          mathLatex: 'b = \\frac{5.657}{0.5} \\approx 11.3',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-03
    {
      id: 'ls-03',
      title: 'Con un ángulo obtuso',
      statementLatex:
        'En $\\triangle ABC$: $B = 75°$, $C = 45°$ y $b = 18$. Con $\\operatorname{sen}75° \\approx 0.9659$ y $\\operatorname{sen}45° \\approx 0.7071$, calcula $c$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$13.2$',
          isCorrect: true,
          feedback:
            'Correcto. $c = 18 \\cdot \\operatorname{sen}45°/\\operatorname{sen}75° = 12.73/0.9659 \\approx 13.2$.',
        },
        {
          id: 'b',
          labelLatex: '$24.6$',
          isCorrect: false,
          feedback:
            'Invertiste la razón de senos: pusiste $\\operatorname{sen}75°$ en el numerador.',
        },
        {
          id: 'c',
          labelLatex: '$9.0$',
          isCorrect: false,
          feedback: 'Usaste $\\operatorname{sen}30° = 0.5$ en vez de $\\operatorname{sen}45°$.',
        },
        {
          id: 'd',
          labelLatex: '$18$',
          isCorrect: false,
          feedback: 'Solo serían iguales si $B = C$; aquí $75° \\neq 45°$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $b = 18 \\leftrightarrow B = 75°$ (completo) e incógnita $c \\leftrightarrow C = 45°$.',
          mathLatex: '\\frac{c}{\\operatorname{sen}45°} = \\frac{18}{\\operatorname{sen}75°}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $c$.',
          mathLatex: 'c = \\frac{18 \\cdot \\operatorname{sen}45°}{\\operatorname{sen}75°}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos valores.',
          mathLatex: 'c = \\frac{18 \\cdot 0.7071}{0.9659}',
        },
        {
          stepNumber: 4,
          explanation: 'Numerador y cociente.',
          mathLatex: 'c = \\frac{12.728}{0.9659} \\approx 13.2',
        },
        {
          stepNumber: 5,
          explanation: 'Coherencia: $c < b$ porque $45° < 75°$. ✔',
          mathLatex: 'c \\approx 13.2',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-04
    {
      id: 'ls-04',
      title: 'Hallar un ángulo',
      statementLatex:
        'En $\\triangle ABC$: $A = 30°$, $a = 7$ y $b = 10$. Halla $B$ al décimo más cercano.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$20.5°$',
          isCorrect: false,
          feedback:
            'Invertiste el cociente: usaste $\\operatorname{sen}B = a\\operatorname{sen}A/b$. La fórmula es $\\operatorname{sen}B = b\\operatorname{sen}A/a$.',
        },
        {
          id: 'b',
          labelLatex: '$90°$',
          isCorrect: false,
          feedback:
            'Si $B$ fuera $90°$, entonces $\\operatorname{sen}B = 1$ y $b = 14$, pero $b = 10$.',
        },
        {
          id: 'c',
          labelLatex: '$45.6°$',
          isCorrect: true,
          feedback:
            'Correcto. $\\operatorname{sen}B = 10 \\cdot 0.5/7 \\approx 0.714$ y $B = \\arcsen(0.714) \\approx 45.6°$.',
        },
        {
          id: 'd',
          labelLatex: '$60°$',
          isCorrect: false,
          feedback:
            'Copiaste otro ángulo típico. Despeja $\\operatorname{sen}B$ y aplica $\\arcsen$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Datos: $a = 7 \\leftrightarrow A = 30°$ (par completo) y $b = 10 \\leftrightarrow B$ (incógnito).',
          mathLatex: '\\frac{b}{\\operatorname{sen}B} = \\frac{a}{\\operatorname{sen}A}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $\\operatorname{sen}B$ multiplicando en cruz.',
          mathLatex: '\\operatorname{sen}B = \\frac{b \\cdot \\operatorname{sen}A}{a}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos: $\\operatorname{sen}30° = 0.5$.',
          mathLatex:
            '\\operatorname{sen}B = \\frac{10 \\cdot 0.5}{7} = \\frac{5}{7} \\approx 0.7143',
        },
        {
          stepNumber: 4,
          explanation: 'Aplicamos la función inversa del seno.',
          mathLatex: 'B = \\arcsen(0.7143)',
        },
        { stepNumber: 5, explanation: 'Resultado en grados.', mathLatex: 'B \\approx 45.6°' },
      ],
    },
    // ------------------------------------------------------------------ LS-05
    {
      id: 'ls-05',
      title: 'Topografía: distancia a la torre',
      statementLatex:
        'Dos topógrafos en $C$ y $D$, separados $100\\,m$, miden los ángulos hacia una torre $T$: en $C$ mide $60°$ y en $D$ mide $45°$ (la torre queda frente a ellos). ¿A qué distancia de $C$ está la torre?',
      diagramSvg: diagTriangulo({ verticeA: 'C', verticeB: 'D', verticeC: 'T', ladoC: '100 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$141.4\\,m$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}45°/\\operatorname{sen}30°$. Falta calcular el tercer ángulo: en la torre mide $75°$.',
        },
        {
          id: 'b',
          labelLatex: '$136.6\\,m$',
          isCorrect: false,
          feedback:
            'Ese valor corresponde a $DT$ con otros pares. Para $CT$ usa el ángulo opuesto correcto: el de $D$ ($45°$).',
        },
        {
          id: 'c',
          labelLatex: '$100\\,m$',
          isCorrect: false,
          feedback:
            'La base mide $100\\,m$, pero el triángulo no es isósceles: los ángulos en $C$ y $D$ son distintos.',
        },
        {
          id: 'd',
          labelLatex: '$73.2\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Tercer ángulo $75°$; $CT = 100\\,\\operatorname{sen}45°/\\operatorname{sen}75° \\approx 73.2\\,m$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Dibujamos el triángulo $CDT$: base $CD = 100$, ángulo en $C = 60°$ y ángulo en $D = 45°$.',
          mathLatex: '\\angle C = 60°, \\quad \\angle D = 45°',
        },
        {
          stepNumber: 2,
          explanation: 'Calculamos el tercer ángulo (en la torre) usando la suma de $180°$.',
          mathLatex: '\\angle T = 180° - 60° - 45° = 75°',
        },
        {
          stepNumber: 3,
          explanation:
            'Pedimos $CT$. Su ángulo opuesto es el de $D$: $45°$. La base $CD = 100$ es opuesta al ángulo de la torre: $75°$. Ese es nuestro par completo.',
          mathLatex: 'CT \\leftrightarrow 45°, \\quad CD = 100 \\leftrightarrow 75°',
        },
        {
          stepNumber: 4,
          explanation: 'Planteamos la ley de senos.',
          mathLatex: '\\frac{CT}{\\operatorname{sen}45°} = \\frac{100}{\\operatorname{sen}75°}',
        },
        {
          stepNumber: 5,
          explanation:
            'Despejamos y sustituimos $\\operatorname{sen}45° \\approx 0.7071$, $\\operatorname{sen}75° \\approx 0.9659$.',
          mathLatex: 'CT = \\frac{100 \\cdot 0.7071}{0.9659}',
        },
        { stepNumber: 6, explanation: 'Calculamos.', mathLatex: 'CT \\approx 73.2\\,m' },
      ],
    },
    // ------------------------------------------------------------------ LS-06
    {
      id: 'ls-06',
      title: 'Ángulo de 105°',
      statementLatex:
        'En $\\triangle ABC$: $A = 105°$, $B = 30°$ y $a = 20$. Recuerda $\\operatorname{sen}105° = \\operatorname{sen}75° \\approx 0.9659$. Calcula $b$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$38.6$',
          isCorrect: false,
          feedback:
            'Invertiste la razón: dividiste entre $\\operatorname{sen}30°$ en lugar de multiplicar.',
        },
        {
          id: 'b',
          labelLatex: '$20$',
          isCorrect: false,
          feedback: 'Los ángulos $105°$ y $30°$ son distintos, así que sus lados opuestos también.',
        },
        {
          id: 'c',
          labelLatex: '$34.6$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}60°$ como si el ángulo fuera $120°$. Aquí $\\operatorname{sen}105° = \\operatorname{sen}75° \\approx 0.9659$.',
        },
        {
          id: 'd',
          labelLatex: '$10.4$',
          isCorrect: true,
          feedback: 'Correcto. $b = 20 \\cdot 0.5/0.9659 \\approx 10.4$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $a = 20 \\leftrightarrow A = 105°$ e incógnita $b \\leftrightarrow B = 30°$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}30°} = \\frac{20}{\\operatorname{sen}105°}',
        },
        {
          stepNumber: 2,
          explanation:
            'Convertimos el ángulo obtuso con $\\operatorname{sen}105° = \\operatorname{sen}(180° - 105°) = \\operatorname{sen}75° \\approx 0.9659$.',
          mathLatex: '\\operatorname{sen}105° \\approx 0.9659',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $b$.',
          mathLatex: 'b = \\frac{20 \\cdot \\operatorname{sen}30°}{\\operatorname{sen}105°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos $\\operatorname{sen}30° = 0.5$.',
          mathLatex: 'b = \\frac{20 \\cdot 0.5}{0.9659}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'b = \\frac{10}{0.9659} \\approx 10.4',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-07
    {
      id: 'ls-07',
      title: 'Ángulo agudo desde dos lados',
      statementLatex:
        'En $\\triangle ABC$: $A = 60°$, $a = 9$ y $b = 6$. Con $\\operatorname{sen}60° \\approx 0.8660$, halla $B$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$35.3°$',
          isCorrect: true,
          feedback:
            'Correcto. $\\operatorname{sen}B = 6 \\cdot 0.866/9 \\approx 0.577$ y $\\arcsen(0.577) \\approx 35.3°$.',
        },
        {
          id: 'b',
          labelLatex: '$54.7°$',
          isCorrect: false,
          feedback: 'Ese es el complemento de $35.3°$: saldría de usar coseno en lugar de seno.',
        },
        {
          id: 'c',
          labelLatex: '$30°$',
          isCorrect: false,
          feedback: 'No copies $A$: despeja $\\operatorname{sen}B$ con la ley de senos.',
        },
        {
          id: 'd',
          labelLatex: '$45°$',
          isCorrect: false,
          feedback: 'Verifica el cálculo: $6 \\times 0.866 = 5.196$ y $5.196/9 = 0.577$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Planteamos la ley de senos con el par completo $(a, A)$ y el par buscado $(b, B)$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}B} = \\frac{a}{\\operatorname{sen}A}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $\\operatorname{sen}B$.',
          mathLatex: '\\operatorname{sen}B = \\frac{b \\cdot \\operatorname{sen}A}{a}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos los datos.',
          mathLatex: '\\operatorname{sen}B = \\frac{6 \\cdot 0.866}{9}',
        },
        {
          stepNumber: 4,
          explanation: 'Calculamos el numerador y dividimos.',
          mathLatex: '\\operatorname{sen}B = \\frac{5.196}{9} \\approx 0.577',
        },
        {
          stepNumber: 5,
          explanation: 'Aplicamos $\\arcsen$. Nota que $B < A$ porque $b < a$: coherente. ✔',
          mathLatex: 'B = \\arcsen(0.577) \\approx 35.3°',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-08
    {
      id: 'ls-08',
      title: 'Ángulos iguales',
      statementLatex:
        'En $\\triangle ABC$: $A = B = 50°$ y $a = 12$. Sin calculadora extensa, deduce $b$ aplicando la ley de senos.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$15.5$',
          isCorrect: false,
          feedback:
            'Aplica la ley de senos: $b/\\operatorname{sen}50° = 12/\\operatorname{sen}50°$. ¿Qué concluyes?',
        },
        {
          id: 'b',
          labelLatex: '$9.2$',
          isCorrect: false,
          feedback: 'Los senos se cancelan: no hay ninguna multiplicación que hacer.',
        },
        {
          id: 'c',
          labelLatex: '$24$',
          isCorrect: false,
          feedback: 'No dupliques el lado. Los senos iguales se cancelan en la proporción.',
        },
        {
          id: 'd',
          labelLatex: '$12$',
          isCorrect: true,
          feedback: 'Correcto. Ángulos iguales tienen lados opuestos iguales: $b = a = 12$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Planteamos la ley de senos para $a$ y $b$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}B} = \\frac{a}{\\operatorname{sen}A}',
        },
        {
          stepNumber: 2,
          explanation: 'Sustituimos $A = B = 50°$ y $a = 12$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}50°} = \\frac{12}{\\operatorname{sen}50°}',
        },
        {
          stepNumber: 3,
          explanation: 'Como los denominadores son iguales, los senos se cancelan.',
          mathLatex: 'b = 12',
        },
        {
          stepNumber: 4,
          explanation:
            'Interpretación: ángulos iguales se oponen a lados iguales (triángulo isósceles). ✔',
          mathLatex: 'b = a = 12',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-09
    {
      id: 'ls-09',
      title: 'Ángulo de 120°',
      statementLatex:
        'En $\\triangle ABC$: $C = 120°$, $A = 30°$ y $c = 24$. Con $\\operatorname{sen}120° = \\operatorname{sen}60° \\approx 0.8660$, halla $a$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$41.6$',
          isCorrect: false,
          feedback: 'Invertiste la razón: dividiste entre $\\operatorname{sen}30°$.',
        },
        {
          id: 'b',
          labelLatex: '$19.6$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}45° \\approx 0.707$ en lugar de $\\operatorname{sen}30° = 0.5$.',
        },
        {
          id: 'c',
          labelLatex: '$13.9$',
          isCorrect: true,
          feedback: 'Correcto. $a = 24 \\cdot 0.5/0.866 \\approx 13.9$.',
        },
        {
          id: 'd',
          labelLatex: '$12$',
          isCorrect: false,
          feedback:
            'Olvidaste dividir entre $\\operatorname{sen}120°$: sustituye ambos senos en la fórmula.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $c = 24 \\leftrightarrow C = 120°$ e incógnita $a \\leftrightarrow A = 30°$.',
          mathLatex: '\\frac{a}{\\operatorname{sen}30°} = \\frac{24}{\\operatorname{sen}120°}',
        },
        {
          stepNumber: 2,
          explanation:
            'Convertimos el obtuso: $\\operatorname{sen}120° = \\operatorname{sen}(180° - 120°) = \\operatorname{sen}60° \\approx 0.866$.',
          mathLatex: '\\operatorname{sen}120° \\approx 0.866',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $a$.',
          mathLatex: 'a = \\frac{24 \\cdot \\operatorname{sen}30°}{\\operatorname{sen}120°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos $\\operatorname{sen}30° = 0.5$.',
          mathLatex: 'a = \\frac{24 \\cdot 0.5}{0.866}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'a = \\frac{12}{0.866} \\approx 13.9',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-10
    {
      id: 'ls-10',
      title: 'Distancia al pico de una montaña',
      statementLatex:
        'Dos puntos $A$ y $B$ en el llano distan $150\\,m$. Desde $A$ el pico $P$ de una montaña se ve con ángulo de $45°$ y desde $B$ con $60°$. ¿Cuál es la distancia de $A$ a $P$?',
      diagramSvg: diagTriangulo({ verticeC: 'P', ladoC: '150 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$134.5\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Tercer ángulo $= 75°$; $AP = 150 \\cdot \\operatorname{sen}60°/\\operatorname{sen}75° \\approx 134.5\\,m$.',
        },
        {
          id: 'b',
          labelLatex: '$167.4\\,m$',
          isCorrect: false,
          feedback:
            'Invertiste los senos: $\\operatorname{sen}75°$ pertenece al denominador (es opuesto a $AB$).',
        },
        {
          id: 'c',
          labelLatex: '$122.5\\,m$',
          isCorrect: false,
          feedback:
            'Emparejaste mal: usaste $\\operatorname{sen}45°$ para el lado $AP$, pero el opuesto de $AP$ es el ángulo en $B$ ($60°$).',
        },
        {
          id: 'd',
          labelLatex: '$75\\,m$',
          isCorrect: false,
          feedback:
            'Ese es el tercer ángulo del triángulo, no una longitud. Aplica la ley de senos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Triángulo $ABP$: $AB = 150$ (lado), $\\angle A = 45°$, $\\angle B = 60°$.',
          mathLatex: 'AB = 150, \\quad \\angle A = 45°, \\quad \\angle B = 60°',
        },
        {
          stepNumber: 2,
          explanation: 'Tercer ángulo (en el pico).',
          mathLatex: '\\angle P = 180° - 45° - 60° = 75°',
        },
        {
          stepNumber: 3,
          explanation:
            'Pedimos $AP$: su ángulo opuesto es $\\angle B = 60°$. El par completo es $AB = 150$ opuesto a $\\angle P = 75°$.',
          mathLatex: '\\frac{AP}{\\operatorname{sen}60°} = \\frac{150}{\\operatorname{sen}75°}',
        },
        {
          stepNumber: 4,
          explanation: 'Despejamos $AP$ y sustituimos los senos.',
          mathLatex:
            'AP = \\frac{150 \\cdot \\operatorname{sen}60°}{\\operatorname{sen}75°} = \\frac{150 \\cdot 0.8660}{0.9659}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'AP = \\frac{129.90}{0.9659} \\approx 134.5\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-11
    {
      id: 'ls-11',
      title: 'Razón dorada (36° y 72°)',
      statementLatex:
        'En $\\triangle ABC$: $A = 36°$, $B = 72°$ y $a = 15$. Con $\\operatorname{sen}36° \\approx 0.5878$ y $\\operatorname{sen}72° \\approx 0.9511$, calcula $b$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$24.3$',
          isCorrect: true,
          feedback:
            'Correcto. $b = 15 \\cdot 0.9511/0.5878 \\approx 24.3$ (la razón entre senos es el número áureo).',
        },
        {
          id: 'b',
          labelLatex: '$9.3$',
          isCorrect: false,
          feedback: 'Invertiste los senos. Como $72° > 36°$, el lado $b$ debe ser mayor que $15$.',
        },
        {
          id: 'c',
          labelLatex: '$21.2$',
          isCorrect: false,
          feedback:
            'Ese valor sale de usar $\\sqrt{2}$: aquí los ángulos son $36°$ y $72°$, no $45°$.',
        },
        {
          id: 'd',
          labelLatex: '$30$',
          isCorrect: false,
          feedback:
            'Dupliquiste sin razón: aplica la fórmula $b = a\\,\\operatorname{sen}B/\\operatorname{sen}A$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $a = 15 \\leftrightarrow A = 36°$ e incógnita $b \\leftrightarrow B = 72°$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}72°} = \\frac{15}{\\operatorname{sen}36°}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $b$.',
          mathLatex: 'b = \\frac{15 \\cdot \\operatorname{sen}72°}{\\operatorname{sen}36°}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos.',
          mathLatex: 'b = \\frac{15 \\cdot 0.9511}{0.5878}',
        },
        { stepNumber: 4, explanation: 'Numerador.', mathLatex: '15 \\cdot 0.9511 = 14.267' },
        {
          stepNumber: 5,
          explanation: 'Dividimos y redondeamos.',
          mathLatex: 'b = \\frac{14.267}{0.5878} \\approx 24.3',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-12
    {
      id: 'ls-12',
      title: 'Del lado $a$ al lado $c$',
      statementLatex:
        'En $\\triangle ABC$: $A = 30°$, $C = 45°$ y $a = 12$. Con $\\operatorname{sen}45° \\approx 0.7071$ y $\\operatorname{sen}30° = 0.5$, calcula $c$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$8.5$',
          isCorrect: false,
          feedback: 'Invertiste los senos: $c$ debe ser mayor que $a$ porque $45° > 30°$.',
        },
        {
          id: 'b',
          labelLatex: '$17.0$',
          isCorrect: true,
          feedback: 'Correcto. $c = 12 \\cdot 0.7071/0.5 = 16.97 \\approx 17.0$.',
        },
        {
          id: 'c',
          labelLatex: '$24$',
          isCorrect: false,
          feedback: 'Dividiste entre $\\operatorname{sen}45°$ en lugar de multiplicar por él.',
        },
        {
          id: 'd',
          labelLatex: '$12$',
          isCorrect: false,
          feedback: 'Los ángulos difieren ($30° \\neq 45°$), así que los lados también.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $a = 12 \\leftrightarrow A = 30°$ e incógnita $c \\leftrightarrow C = 45°$.',
          mathLatex: '\\frac{c}{\\operatorname{sen}45°} = \\frac{12}{\\operatorname{sen}30°}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $c$.',
          mathLatex: 'c = \\frac{12 \\cdot \\operatorname{sen}45°}{\\operatorname{sen}30°}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos.',
          mathLatex: 'c = \\frac{12 \\cdot 0.7071}{0.5}',
        },
        { stepNumber: 4, explanation: 'Numerador.', mathLatex: '12 \\cdot 0.7071 = 8.485' },
        {
          stepNumber: 5,
          explanation: 'División final.',
          mathLatex: 'c = \\frac{8.485}{0.5} \\approx 17.0',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-13
    {
      id: 'ls-13',
      title: 'Senderos en el parque',
      statementLatex:
        'Dos senderos rectos parten de $A$ y $B$, separados $120\\,m$, y se cruzan en una fuente $P$. El ángulo en $A$ es de $55°$ y el de $B$ de $65°$. ¿Qué tan lejos de $A$ está la fuente?',
      diagramSvg: diagTriangulo({ verticeC: 'P', ladoC: '120 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$114.7\\,m$',
          isCorrect: false,
          feedback:
            'Ese resultado corresponde a $BP$ (usaste el ángulo de $A$ como opuesto). El opuesto de $AP$ es el ángulo en $B$: $65°$.',
        },
        {
          id: 'b',
          labelLatex: '$125.6\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Tercer ángulo $60°$; $AP = 120 \\cdot \\operatorname{sen}65°/\\operatorname{sen}60° \\approx 125.6\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$138.6\\,m$',
          isCorrect: false,
          feedback:
            'Dividiste entre $\\operatorname{sen}60°$ en lugar de multiplicar por $\\operatorname{sen}65°$ sobre él.',
        },
        {
          id: 'd',
          labelLatex: '$60\\,m$',
          isCorrect: false,
          feedback:
            'Tomaste la mitad de la base. El triángulo no es equilátero: usa la ley de senos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Modelamos el triángulo $ABP$: $AB = 120$, $\\angle A = 55°$, $\\angle B = 65°$. Pedimos $AP$.',
          mathLatex: 'AP \\text{ es opuesto a } \\angle B = 65°',
        },
        {
          stepNumber: 2,
          explanation: 'Tercer ángulo (en la fuente).',
          mathLatex: '\\angle P = 180° - 55° - 65° = 60°',
        },
        {
          stepNumber: 3,
          explanation: 'La ley de senos con el par completo $AB \\leftrightarrow P$.',
          mathLatex: '\\frac{AP}{\\operatorname{sen}65°} = \\frac{120}{\\operatorname{sen}60°}',
        },
        {
          stepNumber: 4,
          explanation:
            'Sustituimos $\\operatorname{sen}65° \\approx 0.9063$ y $\\operatorname{sen}60° \\approx 0.8660$.',
          mathLatex: 'AP = \\frac{120 \\cdot 0.9063}{0.8660}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'AP = \\frac{108.76}{0.8660} \\approx 125.6\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-14
    {
      id: 'ls-14',
      title: 'Obtuso de 135° y agudo de 15°',
      statementLatex:
        'En $\\triangle ABC$: $B = 135°$, $C = 15°$ y $b = 30$. Usa $\\operatorname{sen}135° = \\operatorname{sen}45° \\approx 0.7071$ y $\\operatorname{sen}15° \\approx 0.2588$. Halla $c$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$82.0$',
          isCorrect: false,
          feedback: 'Invertiste la razón completa: $\\operatorname{sen}135°$ va en el denominador.',
        },
        {
          id: 'b',
          labelLatex: '$15.5$',
          isCorrect: false,
          feedback: 'Usaste $\\operatorname{sen}30°$ para el ángulo de $15°$. Su seno es $0.2588$.',
        },
        {
          id: 'c',
          labelLatex: '$30$',
          isCorrect: false,
          feedback: 'Los ángulos $135°$ y $15°$ son muy distintos; sus lados también deben serlo.',
        },
        {
          id: 'd',
          labelLatex: '$11.0$',
          isCorrect: true,
          feedback: 'Correcto. $c = 30 \\cdot 0.2588/0.7071 \\approx 11.0$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $b = 30 \\leftrightarrow B = 135°$ e incógnita $c \\leftrightarrow C = 15°$.',
          mathLatex: '\\frac{c}{\\operatorname{sen}15°} = \\frac{30}{\\operatorname{sen}135°}',
        },
        {
          stepNumber: 2,
          explanation:
            'Convertimos el obtuso: $\\operatorname{sen}135° = \\operatorname{sen}45° \\approx 0.7071$.',
          mathLatex: '\\operatorname{sen}135° \\approx 0.7071',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $c$.',
          mathLatex: 'c = \\frac{30 \\cdot \\operatorname{sen}15°}{\\operatorname{sen}135°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos $\\operatorname{sen}15° \\approx 0.2588$.',
          mathLatex: 'c = \\frac{30 \\cdot 0.2588}{0.7071}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'c = \\frac{7.764}{0.7071} \\approx 11.0',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-15
    {
      id: 'ls-15',
      title: 'Combinación 75° y 60°',
      statementLatex:
        'En $\\triangle ABC$: $A = 75°$, $B = 60°$ y $a = 25$. Con $\\operatorname{sen}75° \\approx 0.9659$ y $\\operatorname{sen}60° \\approx 0.8660$, calcula $b$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$22.4$',
          isCorrect: true,
          feedback: 'Correcto. $b = 25 \\cdot 0.8660/0.9659 \\approx 22.4$.',
        },
        {
          id: 'b',
          labelLatex: '$27.9$',
          isCorrect: false,
          feedback: 'Invertiste los senos: $b < a$ porque $60° < 75°$.',
        },
        {
          id: 'c',
          labelLatex: '$25$',
          isCorrect: false,
          feedback: 'Solo si $A = B$. Aquí son distintos.',
        },
        {
          id: 'd',
          labelLatex: '$12.5$',
          isCorrect: false,
          feedback: 'Partiste entre dos sin razón. Sustituye ambos senos en la fórmula.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $a = 25 \\leftrightarrow A = 75°$ e incógnita $b \\leftrightarrow B = 60°$.',
          mathLatex: '\\frac{b}{\\operatorname{sen}60°} = \\frac{25}{\\operatorname{sen}75°}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $b$.',
          mathLatex: 'b = \\frac{25 \\cdot \\operatorname{sen}60°}{\\operatorname{sen}75°}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos.',
          mathLatex: 'b = \\frac{25 \\cdot 0.8660}{0.9659}',
        },
        { stepNumber: 4, explanation: 'Numerador.', mathLatex: '25 \\cdot 0.8660 = 21.650' },
        { stepNumber: 5, explanation: 'División.', mathLatex: 'b \\approx 22.4' },
      ],
    },
    // ------------------------------------------------------------------ LS-16
    {
      id: 'ls-16',
      title: 'Torre con dos observaciones (reto)',
      statementLatex:
        'Desde $A$, la cima $T$ de una torre se ve con elevación de $45°$; desde $B$, situado $40\\,m$ detrás de $A$ en línea recta con la base, la elevación es de $30°$. Usa $\\operatorname{sen}30° = 0.5$, $\\operatorname{sen}15° \\approx 0.2588$, $\\operatorname{sen}45° \\approx 0.7071$. ¿Cuál es la altura de la torre?',
      diagramSvg: diagTriangulo({ verticeC: 'T', ladoC: '40 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$69.3\\,m$',
          isCorrect: false,
          feedback:
            'Eso sería $40 \\cdot \\tan60°$. Este problema combina ley de senos y luego una razón en el triángulo rectángulo.',
        },
        {
          id: 'b',
          labelLatex: '$54.6\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. En $\\triangle ABT$: $AT = 40\\operatorname{sen}30°/\\operatorname{sen}15° \\approx 77.3$ y $h = AT \\cdot \\operatorname{sen}45° \\approx 54.6\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$77.3\\,m$',
          isCorrect: false,
          feedback:
            'Esa es la distancia $AT$, no la altura. Multiplica $AT$ por $\\operatorname{sen}45°$ para obtener $h$.',
        },
        {
          id: 'd',
          labelLatex: '$40\\,m$',
          isCorrect: false,
          feedback: 'Esa es la separación entre observadores, no la altura de la torre.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Formamos el triángulo oblicuángulo $ABT$ con los dos observadores y la cima: $AB = 40$, $\\angle B = 30°$ (elevación desde $B$).',
          mathLatex: 'AB = 40, \\quad \\angle B = 30°',
        },
        {
          stepNumber: 2,
          explanation:
            'En $A$, la elevación hacia la cima es $45°$, pero ese NO es el ángulo interior de $\\triangle ABT$: es el ángulo exterior. El interior vale $180° - 45° = 135°$.',
          mathLatex: '\\angle BAT = 180° - 45° = 135°',
        },
        {
          stepNumber: 3,
          explanation: 'Tercer ángulo (en la cima).',
          mathLatex: '\\angle ATB = 180° - 135° - 30° = 15°',
        },
        {
          stepNumber: 4,
          explanation:
            'Ley de senos para hallar $AT$ (opuesto a $\\angle B = 30°$); $AB$ es opuesto al ángulo de $15°$.',
          mathLatex:
            'AT = \\frac{40 \\cdot \\operatorname{sen}30°}{\\operatorname{sen}15°} = \\frac{40 \\cdot 0.5}{0.2588}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos $AT$.',
          mathLatex: 'AT = \\frac{20}{0.2588} \\approx 77.28\\,m',
        },
        {
          stepNumber: 6,
          explanation:
            'Ahora, en el triángulo rectángulo de $A$ a la torre, la altura es el cateto opuesto a $45°$ con hipotenusa $AT$.',
          mathLatex: 'h = AT \\cdot \\operatorname{sen}45° = 77.28 \\cdot 0.7071',
        },
        {
          stepNumber: 7,
          explanation: 'Resultado final redondeado.',
          mathLatex: 'h \\approx 54.6\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-17
    {
      id: 'ls-17',
      title: 'Tercera pieza: 68° y 52°',
      statementLatex:
        'En $\\triangle ABC$: $A = 68°$, $B = 52°$ y $a = 15$. Con $\\operatorname{sen}68° \\approx 0.9272$ y $\\operatorname{sen}60° \\approx 0.8660$, calcula $c$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$16.1$',
          isCorrect: false,
          feedback:
            'Invertiste los senos. Recuerda hallar primero $C$ y usar $\\operatorname{sen}C$ en el numerador junto con $\\operatorname{sen}A$ abajo.',
        },
        {
          id: 'b',
          labelLatex: '$14.0$',
          isCorrect: true,
          feedback:
            'Correcto. $C = 60°$ y $c = 15 \\cdot \\operatorname{sen}60°/\\operatorname{sen}68° \\approx 14.0$.',
        },
        {
          id: 'c',
          labelLatex: '$15$',
          isCorrect: false,
          feedback: '$a \\neq c$ porque $A \\neq C$: $68° \\neq 60°$.',
        },
        {
          id: 'd',
          labelLatex: '$17.3$',
          isCorrect: false,
          feedback:
            'Ese valor ignora el ángulo real de $68°$. Calcula $C$ antes de aplicar la ley de senos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Primero hallamos el tercer ángulo.',
          mathLatex: 'C = 180° - 68° - 52° = 60°',
        },
        {
          stepNumber: 2,
          explanation:
            'Pares: $a = 15 \\leftrightarrow A = 68°$ e incógnita $c \\leftrightarrow C = 60°$.',
          mathLatex: '\\frac{c}{\\operatorname{sen}60°} = \\frac{15}{\\operatorname{sen}68°}',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $c$.',
          mathLatex: 'c = \\frac{15 \\cdot \\operatorname{sen}60°}{\\operatorname{sen}68°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos.',
          mathLatex: 'c = \\frac{15 \\cdot 0.8660}{0.9272}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'c = \\frac{12.99}{0.9272} \\approx 14.0',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-18
    {
      id: 'ls-18',
      title: 'Senderos con 40° y 85°',
      statementLatex:
        'Entre los puntos $A$ y $B$ hay $250\\,m$ de sendero. Hacia un quiosco $K$: $\\angle A = 40°$ y $\\angle B = 85°$. Con $\\operatorname{sen}40° \\approx 0.6428$, $\\operatorname{sen}85° \\approx 0.9962$ y $\\operatorname{sen}55° \\approx 0.8192$, halla $BK$.',
      diagramSvg: diagTriangulo({ verticeC: 'K', ladoC: '250 m' }),
      options: [
        {
          id: 'a',
          labelLatex: '$318.6\\,m$',
          isCorrect: false,
          feedback:
            'Invertiste los senos. $BK$ es opuesto a $\\angle A = 40°$, el ángulo pequeño, así que debe salir menor que $250\\,m$.',
        },
        {
          id: 'b',
          labelLatex: '$196.2\\,m$',
          isCorrect: true,
          feedback:
            'Correcto. Tercer ángulo $55°$; $BK = 250 \\cdot \\operatorname{sen}40°/\\operatorname{sen}55° \\approx 196.2\\,m$.',
        },
        {
          id: 'c',
          labelLatex: '$161.3\\,m$',
          isCorrect: false,
          feedback:
            'Ese valor usa $\\operatorname{sen}85°$ como opuesto de $BK$, pero $BK$ se opone al ángulo de $40°$.',
        },
        {
          id: 'd',
          labelLatex: '$250\\,m$',
          isCorrect: false,
          feedback: 'El triángulo no es isósceles ($40° \\neq 55°$). Aplica la ley de senos.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation: 'Tercer ángulo (en el quiosco).',
          mathLatex: '\\angle K = 180° - 40° - 85° = 55°',
        },
        {
          stepNumber: 2,
          explanation:
            '$BK$ es el lado entre $B$ y $K$, así que su ángulo opuesto es el de $A$: $40°$. El par completo es $AB = 250$ opuesto a $55°$.',
          mathLatex: '\\frac{BK}{\\operatorname{sen}40°} = \\frac{250}{\\operatorname{sen}55°}',
        },
        {
          stepNumber: 3,
          explanation: 'Despejamos $BK$.',
          mathLatex: 'BK = \\frac{250 \\cdot \\operatorname{sen}40°}{\\operatorname{sen}55°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos.',
          mathLatex: 'BK = \\frac{250 \\cdot 0.6428}{0.8192}',
        },
        {
          stepNumber: 5,
          explanation: 'Numerador y división.',
          mathLatex: 'BK = \\frac{160.70}{0.8192} \\approx 196.2\\,m',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-19
    {
      id: 'ls-19',
      title: 'Triángulo PQR con 110°',
      statementLatex:
        'En $\\triangle PQR$: $P = 30°$, $Q = 110°$ y $q = 33$. Con $\\operatorname{sen}110° = \\operatorname{sen}70° \\approx 0.9397$, $\\operatorname{sen}40° \\approx 0.6428$ y $\\operatorname{sen}30° = 0.5$, calcula $r$.',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$48.3$',
          isCorrect: false,
          feedback:
            'Invertiste los senos. Además $r$ es opuesto a $40°$, el ángulo más pequeño tras $30°$: debe salir menor que $33$... compara bien.',
        },
        {
          id: 'b',
          labelLatex: '$22.6$',
          isCorrect: true,
          feedback:
            'Correcto. $R = 40°$ y $r = 33 \\cdot \\operatorname{sen}40°/\\operatorname{sen}110° \\approx 22.6$.',
        },
        {
          id: 'c',
          labelLatex: '$16.5$',
          isCorrect: false,
          feedback:
            'Usaste $\\operatorname{sen}30° = 0.5$ para el lado $r$, pero $r$ se opone a $R = 40°$.',
        },
        {
          id: 'd',
          labelLatex: '$40.5$',
          isCorrect: false,
          feedback:
            'Mezclaste senos de distintos ángulos. Ordena los pares: $q \\leftrightarrow 110°$, $r \\leftrightarrow 40°$.',
        },
      ],
      steps: [
        { stepNumber: 1, explanation: 'Tercer ángulo.', mathLatex: 'R = 180° - 30° - 110° = 40°' },
        {
          stepNumber: 2,
          explanation:
            'Pares: $q = 33 \\leftrightarrow Q = 110°$ e incógnita $r \\leftrightarrow R = 40°$.',
          mathLatex: '\\frac{r}{\\operatorname{sen}40°} = \\frac{33}{\\operatorname{sen}110°}',
        },
        {
          stepNumber: 3,
          explanation: 'Convertimos el obtuso y despejamos.',
          mathLatex: 'r = \\frac{33 \\cdot \\operatorname{sen}40°}{\\operatorname{sen}110°}',
        },
        {
          stepNumber: 4,
          explanation: 'Sustituimos.',
          mathLatex: 'r = \\frac{33 \\cdot 0.6428}{0.9397}',
        },
        {
          stepNumber: 5,
          explanation: 'Calculamos.',
          mathLatex: 'r = \\frac{21.212}{0.9397} \\approx 22.6',
        },
      ],
    },
    // ------------------------------------------------------------------ LS-20
    {
      id: 'ls-20',
      title: 'El lado mayor',
      statementLatex:
        'En $\\triangle ABC$: $A = 75°$, $B = 65°$ y $b = 18$. Con $\\operatorname{sen}75° \\approx 0.9659$ y $\\operatorname{sen}65° \\approx 0.9063$, determina $a$ (el lado mayor).',
      diagramSvg: diagTriangulo(),
      options: [
        {
          id: 'a',
          labelLatex: '$19.2$',
          isCorrect: true,
          feedback:
            'Correcto. $a = 18 \\cdot 0.9659/0.9063 \\approx 19.2$; es el mayor porque se opone al mayor ángulo.',
        },
        {
          id: 'b',
          labelLatex: '$16.9$',
          isCorrect: false,
          feedback:
            'Invertiste los senos: eso daría el lado de un triángulo donde $a < b$, contradiciendo $A > B$.',
        },
        {
          id: 'c',
          labelLatex: '$18$',
          isCorrect: false,
          feedback: '$A \\neq B$ ($75° \\neq 65°$), así que $a \\neq b$.',
        },
        {
          id: 'd',
          labelLatex: '$19.9$',
          isCorrect: false,
          feedback:
            'Redondeaste mal o usaste $\\operatorname{sen}75° \\approx 0.97$: con $0.9659$ el resultado es $19.2$.',
        },
      ],
      steps: [
        {
          stepNumber: 1,
          explanation:
            'Pares: $a \\leftrightarrow A = 75°$ e $b = 18 \\leftrightarrow B = 65°$ (par completo).',
          mathLatex: '\\frac{a}{\\operatorname{sen}75°} = \\frac{18}{\\operatorname{sen}65°}',
        },
        {
          stepNumber: 2,
          explanation: 'Despejamos $a$.',
          mathLatex: 'a = \\frac{18 \\cdot \\operatorname{sen}75°}{\\operatorname{sen}65°}',
        },
        {
          stepNumber: 3,
          explanation: 'Sustituimos.',
          mathLatex: 'a = \\frac{18 \\cdot 0.9659}{0.9063}',
        },
        { stepNumber: 4, explanation: 'Numerador.', mathLatex: '18 \\cdot 0.9659 = 17.386' },
        {
          stepNumber: 5,
          explanation: 'División y verificación: $a > b$ porque $A > B$. ✔',
          mathLatex: 'a = \\frac{17.386}{0.9063} \\approx 19.2',
        },
      ],
    },
  ],
};

export const trigonometriaUnits: PracticeUnit[] = [elevacionDepresion, leySenos];
