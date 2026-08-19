#!/usr/bin/env python3
"""
Generador del dataset de la "Práctica adicional 2" (practica02.pdf).
- Transcripción validada por factorización con sympy.
- Genera pasos a paso, opciones (correcta + 3 distractores) y retroalimentación.
- Emite data/practica02.ts
"""
from sympy import (symbols, factor, expand, Poly, gcd as sgcd, Integer,
                   sqrt, simplify, S, latex, Add, Mul, Pow)
import math as _math

x, y, m, n, a, b, c, u, d, h, k, r, p, q, z, w = symbols(
    'x y m n a b c u d h k r p q z w')

ALL = [x, y, m, n, a, b, c, u, d, h, k, r, p, q, z, w]


def L(e):
    """sympy expr -> LaTeX limpio para KaTeX."""
    s = latex(e, mul_symbol='dot')
    s = s.replace('\\left(', '(').replace('\\right)', ')')
    s = s.replace('\cdot ', '')
    return s


def gcf_of(e):
    """Monomio MCD de los términos de e (coefs + variables)."""
    poly = Poly(expand(e))
    coeffs = [int(t[1]) for t in poly.terms()]
    g = 0
    for cf in coeffs:
        g = sgcd(g, cf)
    monom = [10 ** 9] * len(poly.gens)
    for (mon, cf) in poly.terms():
        for i, ex in enumerate(mon):
            monom[i] = min(monom[i], ex)
    monom = [ex if ex < 10 ** 9 else 0 for ex in monom]
    prod = Integer(g)
    for i, ex in enumerate(monom):
        if ex:
            prod = prod * poly.gens[i] ** ex
    return prod


def div_terms(e, g):
    """Lista de (término_original, cociente) al dividir e entre g."""
    terms = Add.make_args(expand(e))
    out = []
    for t in terms:
        q = simplify(t / g)
        out.append((t, q))
    return out


# ---------------------------------------------------------------------------
# DATOS: cada ítem -> (sympy_expr, statement_latex, ...)
# ---------------------------------------------------------------------------

FC = []  # factor común
def fc(e, stmt): FC.append((e, stmt))

fc(18*x**3*y + 12*x**2*y + 2*x*y, '18x^{3}y + 12x^{2}y + 2xy')
fc(48*x**4*y + 24*x**3*y + 3*x**2*y, '48x^{4}y + 24x^{3}y + 3x^{2}y')
fc(4*x**3*c*y**3 + 16*x**2*b*y**3 + 16*a*x*y**3, '4x^{3}cy^{3} + 16x^{2}by^{3} + 16axy^{3}')
fc(50*x**2*y**3 - 80*y**3 + 32*y, '50x^{2}y^{3} - 80y^{3} + 32y')
fc(24*x**3*y**5 - 15*x*y + 32*y, '24x^{3}y^{5} - 15xy + 32y')
fc(39*x**2*y**2*m + 16*x**4*m*y**3 + 48*n**3*x**3*y**3,
   '39x^{2}y^{2}m + 16x^{4}my^{3} + 48n^{3}x^{3}y^{3}')
fc(5*x*(y+1)**2 - 13*m*(y+1)**2 + 4*n*(y+1)**2,
   '5x(y+1)^{2} - 13m(y+1)^{2} + 4n(y+1)^{2}')
fc(2*x**6*(x-1) + 18*x*(x-1), '2x^{6}(x-1) + 18x(x-1)')
fc(3*m*(y-3)**5 - 4*n*(y-3)**4, '3m(y-3)^{5} - 4n(y-3)^{4}')
fc(x**3*(y+x) + x**2*y + x*y**2, 'x^{3}(y+x) + x^{2}y + xy^{2}')
fc(5*x**2*(m-x) + 3*(m-x), '5x^{2}(m-x) + 3(m-x)')
fc((m-2)**2 - 5*(m-2) + 6, '(m-2)^{2} - 5(m-2) + 6')

AG = []  # agrupación
def ag(e, stmt, g1, g2): AG.append((e, stmt, g1, g2))

ag(x - x**2 - 1 + x**3, 'x - x^{2} - 1 + x^{3}', x - x**2, x**3 - 1)
ag(-1 + x - 2*x + 2*x**2, '-1 + x - 2x + 2x^{2}', x - 1, 2*x**2 - 2*x)
ag(4*x**2 - 1 - x + 4*x, '4x^{2} - 1 - x + 4x', 4*x**2 + 4*x, -1 - x)
ag(3*x**3 + 2*x**2 + 12*x + 8, '3x^{3} + 2x^{2} + 12x + 8', 3*x**3 + 2*x**2, 12*x + 8)
ag(3*x - 9*x*y**2 - y + 3*y**3, '3x - 9xy^{2} - y + 3y^{3}', 3*x - 9*x*y**2, -y + 3*y**3)
ag(4*x - 6*y - 3*x*y + 2*x**2, '4x - 6y - 3xy + 2x^{2}', 4*x + 2*x**2, -6*y - 3*x*y)
ag(1 + 3*x + 2*y + 6*x*y, '1 + 3x + 2y + 6xy', 1 + 3*x, 2*y + 6*x*y)
ag(-4*x - 3*x*y + 6*y + 2*x**2, '-4x - 3xy + 6y + 2x^{2}', 2*x**2 - 4*x, 6*y - 3*x*y)
ag(8*y - 4*x - 5*x**2*y + 10*x*y**2, '8y - 4x - 5x^{2}y + 10xy^{2}', 8*y - 4*x, -5*x**2*y + 10*x*y**2)
ag(n + y*m + m + y*n, 'n + ym + m + yn', n + m, y*m + y*n)
ag(a**2 + a + a*x + x, 'a^{2} + a + ax + x', a**2 + a*x, a + x)
ag(a**3*b**3 + a**2*b**2 + a*b + 1, 'a^{3}b^{3} + a^{2}b^{2} + ab + 1', a**3*b**3 + a**2*b**2, a*b + 1)
ag(3*m*x + 3*m - 2*x - 2, '3mx + 3m - 2x - 2', 3*m*x + 3*m, -2*x - 2)
ag(-3*a + 9*a*b**2 - b + 3*b**3, '-3a + 9ab^{2} - b + 3b^{3}', -3*a + 9*a*b**2, -b + 3*b**3)
ag(-9*n**2 + 1 - a**2 - 6*a*n, '-9n^{2} + 1 - a^{2} - 6an', 1 - 9*n**2, -a**2 - 6*a*n)
ag(-6*m*n - 8*n + 4*m + 3*m**2, '-6mn - 8n + 4m + 3m^{2}', -6*m*n - 8*n, 4*m + 3*m**2)
ag(-9*a*x**2 - x + 3*a + 3*x**3, '-9ax^{2} - x + 3a + 3x^{3}', -9*a*x**2 + 3*a, -x + 3*x**3)
ag(3*x**2*a**2 - 4 + 3*x**2 - 4*a**2, '3x^{2}a^{2} - 4 + 3x^{2} - 4a^{2}', 3*x**2*a**2 + 3*x**2, -4 - 4*a**2)
ag(2*b*x**2 - 6*b + 3 - x**2, '2bx^{2} - 6b + 3 - x^{2}', 2*b*x**2 - 6*b, 3 - x**2)
ag(21*x - 9 - 14*m*x + 6*m, '21x - 9 - 14mx + 6m', 21*x - 14*m*x, -9 + 6*m)
ag(x**3 + z**3 - 2*x - 2*z, 'x^{3} + z^{3} - 2x - 2z', x**3 - 2*x, z**3 - 2*z)
ag(2*b**3 - b**2 - 6*a*b + 3*a, '2b^{3} - b^{2} - 6ab + 3a', 2*b**3 - b**2, -6*a*b + 3*a)

IN = []  # inspección (trinomios)
def ins(e, stmt): IN.append((e, stmt))

ins(2*x**2 + 3*x + 1, '2x^{2} + 3x + 1')
ins(3*x**2 + 2*x - 1, '3x^{2} + 2x - 1')
ins(2*x**2 + 5*x + 2, '2x^{2} + 5x + 2')
ins(4*x**2 + 3*x - 1, '4x^{2} + 3x - 1')
ins(2*x**2 + 7*x + 3, '2x^{2} + 7x + 3')
ins(5*x**2 + 4*x - 1, '5x^{2} + 4x - 1')
ins(2*x**2 + 9*x + 4, '2x^{2} + 9x + 4')
ins(6*x**2 - 7*x + 1, '6x^{2} - 7x + 1')
ins(2*x**2 + 11*x + 5, '2x^{2} + 11x + 5')
ins(7*x**2 - 8*x + 1, '7x^{2} - 8x + 1')
ins(2*x**2 - x - 1, '2x^{2} - x - 1')
ins(2*x**2 - 5*x - 3, '2x^{2} - 5x - 3')
ins(16*x**2 + 8*x + 1, '16x^{2} + 8x + 1')
ins(2*x**2 - 7*x - 4, '2x^{2} - 7x - 4')
ins(25*x**2 - 10*x + 1, '25x^{2} - 10x + 1')
ins(2*x**2 - 9*x - 5, '2x^{2} - 9x - 5')
ins(36*x**2 - 12*x + 1, '36x^{2} - 12x + 1')
ins(3*x + 2 + x**2, '3x + 2 + x^{2}')
ins(4*x + 3 + x**2, '4x + 3 + x^{2}')
ins(5*x + 4 + x**2, '5x + 4 + x^{2}')
ins(6*x + 5 + x**2, '6x + 5 + x^{2}')
ins(7*x + 6 + x**2, '7x + 6 + x^{2}')
ins(4*x - x**2 + 5, '4x - x^{2} + 5')
ins(5*x - x**2 + 6, '5x - x^{2} + 6')
ins(-3*y + 18 - y**2, '-3y + 18 - y^{2}')
ins(2*y + 15 - y**2, '2y + 15 - y^{2}')
ins(2*y - 1 - y**2, '2y - 1 - y^{2}')
ins(-a**2 - 7*a + 60, '-a^{2} - 7a + 60')
ins(-10*a**2 - 3 - 11*a, '-10a^{2} - 3 - 11a')
ins(9*a**2 + 25 + 30*a, '9a^{2} + 25 + 30a')
ins(40*m + 100 + 4*m**2, '40m + 100 + 4m^{2}')
ins(9*m**2 + 4 + 12*m, '9m^{2} + 4 + 12m')
ins(m**2 + 169 - 26*m, 'm^{2} + 169 - 26m')

BI = []  # binomios (diferencia de cuadrados)
def bi(e, stmt): BI.append((e, stmt))

bi(m**2 - 4, 'm^{2} - 4')
bi(x**2 - 9, 'x^{2} - 9')
bi(c**2 - 16, 'c^{2} - 16')
bi(u**2 - 81, 'u^{2} - 81')
bi(25 - x**2, '25 - x^{2}')
bi(36 - h**2, '36 - h^{2}')
bi(49 - d**2, '49 - d^{2}')
bi(64 - k**2, '64 - k^{2}')
bi(-k**2 + 121, '-k^{2} + 121')
bi(9 - 4*h**2, '9 - 4h^{2}')
bi(-9*r**2 + 25, '-9r^{2} + 25')
bi(-4*k**2 + 36, '-4k^{2} + 36')
bi(9 - 16*h**2, '9 - 16h^{2}')
bi(9 - 16*k**2, '9 - 16k^{2}')
bi(1 - 16*k**2, '1 - 16k^{2}')
bi(16*k**2 - 1, '16k^{2} - 1')
bi(81*k**16 - 1, '81k^{16} - 1')
bi(k**2 - 169, 'k^{2} - 169')
bi(x**20 - 1, 'x^{20} - 1')
bi(a**2 - 1, 'a^{2} - 1')
bi(h**6 - 1, 'h^{6} - 1')
bi(81*k**6 - 1, '81k^{6} - 1')
bi(256*w**2 - 1, '256w^{2} - 1')

CO = []  # métodos combinados
def co(e, stmt, g1, g2): CO.append((e, stmt, g1, g2))

co(7*a + a**2 + 7*b - b**2, '7a + 7b + a^{2} - b^{2}', a**2 - b**2, 7*a + 7*b)
co(4*m + 4*n + m**2 - n**2, '4m + 4n + m^{2} - n^{2}', m**2 - n**2, 4*m + 4*n)
co(9*x + 9*y + x**2 - y**2, '9x + 9y + x^{2} - y^{2}', x**2 - y**2, 9*x + 9*y)
co(6*a + 6*b + a**2 - b**2, '6a + 6b + a^{2} - b^{2}', a**2 - b**2, 6*a + 6*b)
co(16*x**2 - 25*y**2 + 4*x - 5*y, '16x^{2} - 25y^{2} + 4x - 5y', 16*x**2 - 25*y**2, 4*x - 5*y)
co(49*a**2 - 64*b**2 + 7*a - 8*b, '49a^{2} - 64b^{2} + 7a - 8b', 49*a**2 - 64*b**2, 7*a - 8*b)
co(81*m**2 - 100*n**2 + 9*m - 10*n, '81m^{2} - 100n^{2} + 9m - 10n', 81*m**2 - 100*n**2, 9*m - 10*n)
co(121*x**2 - 144*y**2 + 11*x - 12*y, '121x^{2} - 144y^{2} + 11x - 12y', 121*x**2 - 144*y**2, 11*x - 12*y)
co(25*a**2 - 36*b**2 + 5*a - 6*b, '25a^{2} - 36b^{2} + 5a - 6b', 25*a**2 - 36*b**2, 5*a - 6*b)
co(m**2 - 9*a**2 + 3*m - 9*a, 'm^{2} - 9a^{2} + 3m - 9a', m**2 - 9*a**2, 3*m - 9*a)
co(x**2 - 16*y**2 + 4*x - 16*y, 'x^{2} - 16y^{2} + 4x - 16y', x**2 - 16*y**2, 4*x - 16*y)
co(p**2 - 49*q**2 + 7*p - 49*q, 'p^{2} - 49q^{2} + 7p - 49q', p**2 - 49*q**2, 7*p - 49*q)
co(4*a**2 - 25*b**2 + 4*a - 10*b, '4a^{2} - 25b^{2} + 4a - 10b', 4*a**2 - 25*b**2, 4*a - 10*b)
co(36*m**2 - 81*n**2 + 6*m - 9*n, '36m^{2} - 81n^{2} + 6m - 9n', 36*m**2 - 81*n**2, 6*m - 9*n)


# ---------------------------------------------------------------------------
# VALIDACIÓN
# ---------------------------------------------------------------------------
def check(e, label):
    f = factor(expand(e))
    if expand(f) != expand(e):
        raise SystemExit(f'FACTORIZACIÓN NO VÁLIDA en {label}: {L(e)} -> {L(f)}')
    return f

for label, data in [('FC', FC), ('AG', AG), ('IN', IN), ('BI', BI), ('CO', CO)]:
    for i, item in enumerate(data, 1):
        check(item[0], f'{label}-{i}')
print('validación: OK (105 ítems factorizan correctamente)')


def to_ts_str(s):
    return s.replace('\\', '\\\\').replace("'", "\\'")


def ordered_factors(f):
    """Devuelve la lista de factores de f, moviendo el signo negativo
    al primer factor para una presentación amigable."""
    if f.is_Mul:
        args = list(f.args)
        neg = S.One
        if args and args[0] == -1:
            neg = -1
            args = args[1:]
        elif args and args[0].is_Number and args[0] < 0:
            neg = -1
            args = [abs(args[0])] + args[1:]
        if neg == -1:
            args = [neg * args[0]] + args[1:]
        return args
    return [f]


# ===========================================================================
# GENERACIÓN DE PASOS Y OPCIONES
# ===========================================================================

def build_exercise(unit_id, idx, title, stmt, steps, options):
    return {
        'id': f'{unit_id}-{idx:02d}',
        'title': title,
        'statementLatex': stmt,
        'steps': steps,
        'options': options,
    }


def build_options(correct, distractors, statement=None):
    # validación: sin opciones duplicadas (por forma LaTeX) y sin opciones
    # iguales a la correcta (salvo que sea el polinomio original sin factorizar)
    labels = []
    for expr, fb in distractors:
        if L(expr) in labels or L(expr) == L(correct):
            raise SystemExit(f'OPCIÓN DUPLICADA: {L(expr)} (correcta: {L(correct)})')
        labels.append(L(expr))
        if expand(expr) == expand(correct):
            if statement is None or expand(expr) != expand(statement):
                raise SystemExit(f'OPCIÓN = CORRECTA: {L(expr)}')
    opts = [{'id': 'a', 'labelLatex': L(correct), 'isCorrect': True,
             'feedback': '¡Correcto! Has factorizado correctamente.'}]
    letters = ['b', 'c', 'd']
    for i, (expr, fb) in enumerate(distractors):
        opts.append({'id': letters[i], 'labelLatex': L(expr),
                     'isCorrect': False, 'feedback': fb})
    return opts


def collect(exercises, unit, method):
    unit['exercises'] = exercises


# --- FC: factor común -------------------------------------------------------
POLY_FC = {
    7: (  # 5x(y+1)^2 - 13m(y+1)^2 + 4n(y+1)^2
        (y + 1) ** 2, 5*x - 13*m + 4*n,
        'El paréntesis (y+1)^{2} se repite en todos los términos.'),
    8: (  # 2x^6(x-1) + 18x(x-1)
        (x - 1), 2*x**6 + 18*x,
        'El paréntesis (x-1) se repite en todos los términos.'),
    9: (  # 3m(y-3)^5 - 4n(y-3)^4
        (y - 3) ** 4, 3*m*(y - 3) - 4*n,
        'El factor (y-3)^{4} aparece en ambos términos.'),
    10: (  # x^3(y+x) + x^2 y + x y^2
        x, x**3*(y + x) + x*y + y**2,
        'La variable x es común a todos los términos.'),
    11: (  # 5x^2(m-x) + 3(m-x)
        (m - x), 5*x**2 + 3,
        'El paréntesis (m-x) se repite en ambos términos.'),
}


def gen_fc(exercises, unit):
    for i, (e, stmt) in enumerate(FC, 1):
        # ítem 12: sustitución u = m - 2
        if i == 12:
            steps = [
                {'stepNumber': 1, 'explanation': 'Hacemos la sustitución u = m - 2.',
                 'mathLatex': 'u^{2} - 5u + 6'},
                {'stepNumber': 2, 'explanation': 'Factorizamos el trinomio en u.',
                 'mathLatex': '(u - 2)(u - 3)'},
                {'stepNumber': 3, 'explanation': 'Sustituimos u por m - 2 y simplificamos.',
                 'mathLatex': '(m - 2 - 2)(m - 2 - 3) = (m - 4)(m - 5)'},
            ]
            correct = factor(expand(e))
            opts = build_options(correct, [
                ((m - 2 + 2) * (m - 2 + 3), 'Al sustituir de regreso hay que restar 2: u = m - 2, no m + 2.'),
                ((m - 2 - 2) * (m - 2 + 3), 'Uno de los factores quedó con el signo equivocado al sustituir.'),
                ((m - 2 + 2) * (m - 2 - 3), 'Verifica el signo al sustituir u por m - 2 en ambos factores.'),
            ])
            exercises.append(build_exercise('p2-factor-comun', i, 'Factor común', stmt, steps, opts))
            continue

        if i in POLY_FC:
            cf, r, hint = POLY_FC[i]
            terms = Add.make_args(e)
            qs = [simplify(t / cf) for t in terms]
            steps = [
                {'stepNumber': 1, 'explanation': 'Identificamos el factor común de todos los términos.',
                 'mathLatex': hint},
                {'stepNumber': 2, 'explanation': 'Dividimos cada término entre el factor común.',
                 'mathLatex': ' \; ; \; '.join(f'{L(t)} \div {L(cf)} = {L(q)}' for t, q in zip(terms, qs))},
                {'stepNumber': 3, 'explanation': 'Escribimos el polinomio como producto del factor común por el cociente.',
                 'mathLatex': L(cf) + '(' + L(simplify(r)) + ')'},
            ]
            if i == 8:
                steps.append({'stepNumber': 4, 'explanation': 'Dentro del paréntesis aún hay factor común monomio.',
                              'mathLatex': L(x - 1) + '(' + L(2*x*(x**5 + 9)) + ')'})
            if i == 10:
                steps.append({'stepNumber': 4, 'explanation': 'Factorizamos el resto agrupando términos.',
                              'mathLatex': L(x*(x + y)*(x**2 + y))})
            correct = factor(expand(e))
            d1 = cf + sum(qs, S.Zero)
            d2 = -cf * sum(qs, S.Zero)
            d3 = cf * (terms[0] + sum(qs[1:], S.Zero))
            opts = build_options(correct, [
                (d1, 'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.'),
                (d2, 'El signo del factor extraído está invertido; el polinomio original no cambia de signo.'),
                (d3, 'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.'),
            ])
            exercises.append(build_exercise('p2-factor-comun', i, 'Factor común', stmt, steps, opts))
            continue

        g = gcf_of(e)
        r = expand(e / g)
        terms = div_terms(e, g)
        num_g = Integer(_math.gcd(*[int(t[1]) for t in Poly(expand(e)).terms()]))
        var_g = simplify(g / num_g)

        steps = [
            {'stepNumber': 1, 'explanation': 'Calculamos el máximo común divisor de los coeficientes.',
             'mathLatex': f'MCD({", ".join(str(int(t[1])) for t in Poly(expand(e)).terms())}) = {num_g}'},
            {'stepNumber': 2, 'explanation': 'El menor exponente de cada variable común a todos los términos.',
             'mathLatex': L(g)},
            {'stepNumber': 3, 'explanation': 'Dividimos cada término entre el factor común.',
             'mathLatex': ' \; ; \; '.join(f'{L(t)} \div {L(g)} = {L(q)}' for t, q in terms)},
            {'stepNumber': 4, 'explanation': 'Escribimos el polinomio como el producto del factor común por el cociente.',
             'mathLatex': f'{L(g)}({L(r)})'},
        ]

        # distractores
        # d1: escribió la respuesta como suma (error conceptual)
        d1 = g + r
        # d2: signo invertido
        d2 = -g * r
        # d3: un término sin dividir
        bad = []
        for j, (t, q) in enumerate(terms):
            bad.append(t if j == 0 else q)
        d3 = g * sum(bad, S.Zero)

        opts = build_options(g * r, [
            (d1, 'La factorización debe escribirse como un PRODUCTO del factor común por el cociente, no como una suma.'),
            (d2, 'El signo del factor extraído está invertido; el polinomio original no cambia de signo.'),
            (d3, 'El factor común debe dividir a CADA término; uno de los cocientes quedó sin dividir.'),
        ])
        exercises.append(build_exercise('p2-factor-comun', i, 'Factor común', stmt, steps, opts))


# --- AG: agrupación ---------------------------------------------------------
def gen_ag(exercises, unit):
    for i, (e, stmt, g1, g2) in enumerate(AG, 1):
        f = factor(expand(e))
        common = sgcd(g1, g2)
        if common.is_negative or (common.is_Number and common < 0):
            common = -common
        if common == 0 or common == 1:
            # gcd fallback: inspeccionar factores de f
            factors = ordered_factors(f)
            common = factors[0]
        o1 = simplify(g1 / common)
        o2 = simplify(g2 / common)

        f1 = factor(g1)
        f2 = factor(g2)
        steps = [
            {'stepNumber': 1, 'explanation': 'Agrupamos los términos de dos en dos.',
             'mathLatex': f'({L(g1)}) + ({L(g2)})'},
            {'stepNumber': 2, 'explanation': 'Extraemos el factor común de cada grupo.',
             'mathLatex': f'{L(g1)} = {L(f1)} \\quad ; \\quad {L(g2)} = {L(f2)}'},
            {'stepNumber': 3, 'explanation': 'El paréntesis común es el binomio que se repite.',
             'mathLatex': f'({L(common)}) \\left( {L(o1)} + {L(o2)} \\right)'},
            {'stepNumber': 4, 'explanation': 'Resultado final.',
             'mathLatex': L(f)},
        ]

        neg = -common * (o1 + o2)
        opts = build_options(f, [
            (expand(f1) + expand(f2),
             'Faltó extraer el factor común polinómico: agrupaste y factorizaste los grupos, pero no sacaste el binomio común.'),
            (neg, 'El signo de uno de los grupos cambió al factorizar. Revisa el signo al extraer el factor común.'),
            (common * o2 if o1 != 1 else common * o1,
             'Olvidaste sumar el factor restante del otro grupo (quedó incompleto).'),
        ], statement=e)
        exercises.append(build_exercise('p2-agrupacion', i, 'Agrupación de términos', stmt, steps, opts))


# --- IN: inspección (trinomios) --------------------------------------------
def tcp_parts(e, v):
    """Si e es un TCP -> (raíz1, raíz2, signo_middle) o None."""
    poly = Poly(expand(e), v)
    a = poly.coeff_monomial(v**2)
    c = poly.coeff_monomial(v**0)
    b = poly.coeff_monomial(v**1)
    ra = sqrt(a)
    rc = sqrt(c)
    if not (ra.is_integer and rc.is_integer):
        return None
    r1 = ra * v
    r2 = rc
    dbl = 2 * r1 * r2
    dcoef = Poly(dbl, v).coeff_monomial(v**1)
    if simplify(dcoef + b) == 0:
        return (r1, r2, -1)
    if simplify(dcoef - b) == 0:
        return (r1, r2, 1)
    return None


def factor_pairs(f):
    """(f1, f2) factores lineales si f es producto de dos binomios."""
    args = ordered_factors(f)
    if len(args) == 2:
        return args[0], args[1]
    return None, None


def gen_in(exercises, unit):
    for i, (e, stmt) in enumerate(IN, 1):
        f = factor(expand(e))
        v = [s for s in ALL if e.has(s)][0]
        poly = Poly(expand(e), v)
        A = poly.coeff_monomial(v**2)
        B = poly.coeff_monomial(v**1)
        C = poly.coeff_monomial(v**0)
        neg_leading = A < 0
        tcp = tcp_parts(e, v)
        neg_tcp = False
        core = expand(e)
        if tcp is None and neg_leading:
            core = -expand(e)
            tcp = tcp_parts(core, v)
            neg_tcp = tcp is not None
            A = -A; B = -B; C = -C
        fcore = factor(core)

        def tcp_steps(r1, r2, sgn):
            ss = '+' if sgn == 1 else '-'
            steps = [
                {'stepNumber': 1, 'explanation': 'Identificamos los cuadrados perfectos.',
                 'mathLatex': f'{L(A*v**2)} = ({L(r1)})^{2} \\quad ; \\quad {L(C)} = ({L(r2)})^{2}'},
                {'stepNumber': 2, 'explanation': 'Verificamos el doble producto.',
                 'mathLatex': f'2 \cdot {L(r1)} \cdot {L(r2)} = {L(2*r1*r2)}'},
                {'stepNumber': 3, 'explanation': 'Es un trinomio cuadrado perfecto.',
                 'mathLatex': L((r1 + sgn*r2)**2)},
            ]
            if neg_tcp:
                steps.append({'stepNumber': 4,
                              'explanation': 'Reintroducimos el signo negativo extraído al inicio.',
                              'mathLatex': L(-(r1 + sgn*r2)**2)})
            return steps

        if tcp is not None:
            r1, r2, sgn = tcp
            root = r1 + sgn * r2
            correct = root ** 2 if not neg_tcp else -root ** 2
            steps = tcp_steps(r1, r2, sgn)
            d1 = (r1 - sgn * r2) ** 2
            d2 = root ** 2 if neg_tcp else -(root ** 2)
            d3 = (r1 - sgn * r2) * (r1 + sgn * r2)
            opts = build_options(correct, [
                (d1, 'El signo del doble producto debe coincidir con el término central del trinomio.'),
                (d2, 'Un cuadrado no puede ser negativo: verifica el signo al escribir el binomio.'),
                (d3, 'Aquí no es una diferencia de cuadrados: comprueba el doble producto 2·a·b.'),
            ])
        else:
            cpoly = Poly(core, v)
            cA = cpoly.coeff_monomial(v**2)
            cB = cpoly.coeff_monomial(v**1)
            cC = cpoly.coeff_monomial(v**0)

            if cA == 1:
                # x² + bx + c
                p, q = factor_pairs(fcore)
                if p is None:
                    raise SystemExit(f'IN-{i}: sin par de factores para {stmt} ({L(fcore)})')
                rp = Poly(p, v).coeff_monomial(v**0) / Poly(p, v).coeff_monomial(v**1) if p.has(v) else p
                rq = Poly(q, v).coeff_monomial(v**0) / Poly(q, v).coeff_monomial(v**1) if q.has(v) else q
                steps = [
                    {'stepNumber': 1, 'explanation': 'Buscamos dos números p y q tales que p·q = c y p + q = b.',
                     'mathLatex': f'p \cdot q = {L(cC)} \\quad ; \\quad p + q = {L(cB)}'},
                    {'stepNumber': 2, 'explanation': 'Los números son los que aparecen en la factorización.',
                     'mathLatex': f'p = {L(rp)} \\quad ; \\quad q = {L(rq)}'},
                    {'stepNumber': 3, 'explanation': 'Escribimos el producto de binomios.',
                     'mathLatex': L(fcore)},
                ]
            else:
                ac = cA * cC
                (fa, fb) = factor_pairs(fcore)
                if fa is None:
                    raise SystemExit(f'IN-{i}: sin par de factores para {stmt} ({L(fcore)})')
                fa_p = Poly(fa, v).coeff_monomial(v**1); fa_c = Poly(fa, v).coeff_monomial(v**0)
                fb_p = Poly(fb, v).coeff_monomial(v**1); fb_c = Poly(fb, v).coeff_monomial(v**0)
                term1 = fa_p * fb_c
                term2 = fb_p * fa_c
                rewr = cA * v**2 + term1 * v + term2 * v + cC
                steps = [
                    {'stepNumber': 1, 'explanation': 'Multiplicamos el coeficiente principal por el término constante.',
                     'mathLatex': f'{L(cA)} \cdot {L(cC)} = {L(ac)}'},
                    {'stepNumber': 2, 'explanation': 'Buscamos dos números p y q con p·q = a·c y p + q = b.',
                     'mathLatex': f'p \cdot q = {L(ac)} \\quad ; \\quad p + q = {L(cB)}'},
                    {'stepNumber': 3, 'explanation': 'Reescribimos el término central como la suma de esos dos términos.',
                     'mathLatex': f'{L(core)} = {L(rewr)}'},
                    {'stepNumber': 4, 'explanation': 'Agrupamos y extraemos el factor común.',
                     'mathLatex': L(fcore)},
                ]

            if neg_leading:
                steps.append({'stepNumber': 5,
                              'explanation': 'Reintroducimos el signo negativo extraído al inicio.',
                              'mathLatex': L(f)})
                correct = f
                (f1, f2) = factor_pairs(fcore)
                g1 = Poly(f1, v).coeff_monomial(v**1) * v - Poly(f1, v).coeff_monomial(v**0) if f1.has(v) else -f1
                g2 = Poly(f2, v).coeff_monomial(v**1) * v - Poly(f2, v).coeff_monomial(v**0) if f2.has(v) else -f2
                d1 = fcore
                d2 = -(g1 * f2)
                d3 = -(f1 * g2)
            else:
                correct = f
                (f1, f2) = factor_pairs(fcore)
                g1 = Poly(f1, v).coeff_monomial(v**1) * v - Poly(f1, v).coeff_monomial(v**0) if f1.has(v) else -f1
                g2 = Poly(f2, v).coeff_monomial(v**1) * v - Poly(f2, v).coeff_monomial(v**0) if f2.has(v) else -f2
                d1 = f1 * g2
                d2 = g1 * f2
                d3 = -f

            opts = build_options(correct, [
                (d1, 'Revisa los signos de los números p y q: uno de los signos está cambiado.'),
                (d2, 'Uno de los factores quedó con el signo invertido.'),
                (d3, 'El signo del producto está invertido; verifica la suma p + q.'),
            ])
        exercises.append(build_exercise('p2-inspeccion', i, 'Factorización por inspección', stmt, steps, opts))


# --- BI: binomios (DIFP) ----------------------------------------------------
def mono_root(t):
    """Raíz cuadrada de un monomio positivo: sqrt(coef)·var^(exp/2)."""
    if t.is_Number:
        return sqrt(t)
    poly = Poly(t)
    (mon, coeff) = poly.terms()[0]
    root = sqrt(coeff)
    for i, ex in enumerate(mon):
        if ex:
            if ex % 2 != 0:
                raise SystemExit(f'mono_root: exponente impar en {t}')
            root = root * poly.gens[i] ** (ex // 2)
    return root


def gen_bi(exercises, unit):
    for i, (e, stmt) in enumerate(BI, 1):
        terms = Add.make_args(expand(e))
        pos = [t for t in terms if t.as_coeff_Mul()[0] >= 0]
        neg = [t for t in terms if t.as_coeff_Mul()[0] < 0]
        if not pos or not neg:
            raise SystemExit(f'BI-{i}: no se pudieron identificar cuadrados')
        a = mono_root(pos[0])
        b = mono_root(-neg[0])
        correct = (a - b) * (a + b)
        steps = [
            {'stepNumber': 1, 'explanation': 'Reconocemos los cuadrados perfectos.',
             'mathLatex': f'{L(pos[0])} = ({L(a)})^{2} \\quad ; \\quad {L(abs(neg[0]))} = ({L(b)})^{2}'},
            {'stepNumber': 2, 'explanation': 'Es una diferencia de cuadrados.',
             'mathLatex': f'u^{2} - v^{2} = (u - v)(u + v)'},
            {'stepNumber': 3, 'explanation': 'Escribimos el producto de binomios conjugados.',
             'mathLatex': L(correct)},
        ]
        d1 = (a + b) ** 2
        d2 = (a - b) ** 2
        d3 = (b - a) * (b - a)
        opts = build_options(correct, [
            (d1, 'Es una RESTA de cuadrados, no una suma: los factores deben ser binomios conjugados.'),
            (d2, 'Ambos factores deben tener signos opuestos en la segunda raíz (binomios conjugados).'),
            (d3, 'En un factor la segunda raíz debe ir con signo positivo y en el otro con negativo.'),
        ])
        exercises.append(build_exercise('p2-binomios', i, 'Diferencia de cuadrados', stmt, steps, opts))


# --- CO: métodos combinados ------------------------------------------------
def difp_factors(g1):
    """g1 = A² - B² -> (a - b)(a + b) con las raíces directas."""
    terms = Add.make_args(expand(g1))
    pos = [t for t in terms if t.as_coeff_Mul()[0] >= 0]
    neg = [t for t in terms if t.as_coeff_Mul()[0] < 0]
    a = mono_root(pos[0])
    b = mono_root(-neg[0])
    return a, b, (a - b) * (a + b)


def gen_co(exercises, unit):
    for i, (e, stmt, g1, g2) in enumerate(CO, 1):
        f = factor(expand(e))
        common = sgcd(g1, g2)
        if common.is_negative or (common.is_Number and common < 0):
            common = -common
        if common == 0 or common == 1:
            factors = ordered_factors(f)
            common = factors[0]
        coeff = simplify(g2 / common)
        other = simplify(g1 / common)
        correct = common * (other + coeff)

        ra, rb, d1f = difp_factors(g1)
        steps = [
            {'stepNumber': 1, 'explanation': 'Agrupamos: un grupo es una diferencia de cuadrados y el otro tiene factor común.',
             'mathLatex': f'({L(g1)}) + ({L(g2)})'},
            {'stepNumber': 2, 'explanation': 'Factorizamos la diferencia de cuadrados.',
             'mathLatex': f'{L(g1)} = ({L(ra)} - {L(rb)})({L(ra)} + {L(rb)})'},
            {'stepNumber': 3, 'explanation': 'El binomio común también está en el segundo grupo.',
             'mathLatex': f'{L(g2)} = {L(coeff)} \cdot ({L(common)})'},
            {'stepNumber': 4, 'explanation': 'Extraemos el binomio común.',
             'mathLatex': L(correct)},
        ]

        opts = build_options(correct, [
            (common * (other - coeff), 'El signo del término agregado está invertido.'),
            (expand(factor(g1)) + expand(factor(g2)),
             'Faltó extraer el binomio común después de factorizar cada grupo.'),
            (other * (common + coeff), 'El factor común es el binomio que se repite en ambos grupos, no el otro factor.'),
        ], statement=e)
        exercises.append(build_exercise('p2-combinados', i, 'Métodos combinados', stmt, steps, opts))


# ===========================================================================
# EMISIÓN TS
# ===========================================================================
UNITS = [
    {
        'id': 'p2-factor-comun',
        'title': 'Factor común · Práctica 2',
        'subject': 'Álgebra',
        'description': 'Extracción del factor común monomio de un polinomio (práctica adicional 2, sección 1).',
        'topic': 'factor-comun',
        'method': 'factor-comun',
        'theory': [
            {
                'title': 'Factor común monomio',
                'contentLatex': 'Para extraer un factor común se calcula el máximo común divisor (MCD) de los coeficientes y se toma la menor potencia de cada variable que aparezca en todos los términos. Luego se divide cada término entre el factor común.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $18x^{3}y + 12x^{2}y + 2xy$.',
                        'solutionLatex': 'El MCD de $18$, $12$ y $2$ es $2$; la menor potencia de $x$ es $x$ y la de $y$ es $y$. El factor común es $2xy$. Al dividir cada término: $18x^{3}y \\div 2xy = 9x^{2}$, $12x^{2}y \\div 2xy = 6x$ y $2xy \\div 2xy = 1$. Entonces: $$18x^{3}y + 12x^{2}y + 2xy = 2xy(9x^{2} + 6x + 1).$$',
                    },
                    {
                        'title': 'Factor común polinómico',
                        'statementLatex': 'Factorice $5x(y+1)^{2} - 13m(y+1)^{2} + 4n(y+1)^{2}$.',
                        'solutionLatex': 'El paréntesis $(y+1)^{2}$ se repite en todos los términos. Extraemos $(y+1)^{2}$ y dividimos cada término: $$5x(y+1)^{2} - 13m(y+1)^{2} + 4n(y+1)^{2} = (y+1)^{2}(5x - 13m + 4n).$$',
                    },
                ],
            },
        ],
        'exercises': [],
    },
    {
        'id': 'p2-agrupacion',
        'title': 'Agrupación de términos · Práctica 2',
        'subject': 'Álgebra',
        'description': 'Factorización agrupando términos de dos en dos (práctica adicional 2, sección 2).',
        'topic': 'agrupacion',
        'method': 'agrupacion',
        'theory': [
            {
                'title': 'Agrupación de términos',
                'contentLatex': 'Cuando el polinomio tiene cuatro o más términos, se agrupan de dos en dos de modo que cada grupo tenga un factor común. Luego se extrae el factor común de cada grupo y finalmente el binomio común que queda en ambos.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $x - x^{2} - 1 + x^{3}$.',
                        'solutionLatex': 'Agrupamos: $(x - x^{2}) + (x^{3} - 1)$. En el primer grupo el factor común es $x$: $x - x^{2} = x(1 - x) = -x(x - 1)$. En el segundo: $x^{3} - 1 = (x - 1)(x^{2} + x + 1)$. Extraemos el binomio común $(x - 1)$: $$x - x^{2} - 1 + x^{3} = (x - 1)(x^{2} + 1).$$',
                    },
                ],
            },
        ],
        'exercises': [],
    },
    {
        'id': 'p2-inspeccion',
        'title': 'Inspección · Práctica 2',
        'subject': 'Álgebra',
        'description': 'Factorización de trinomios por inspección o tanteo (práctica adicional 2, sección 3).',
        'topic': 'inspeccion',
        'method': 'inspeccion',
        'theory': [
            {
                'title': 'Trinomio de la forma $x^{2} + bx + c$',
                'contentLatex': 'Se buscan dos números $p$ y $q$ tales que $p \\cdot q = c$ y $p + q = b$. Entonces: $x^{2} + bx + c = (x + p)(x + q)$.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $x^{2} + 7x + 12$.',
                        'solutionLatex': 'Buscamos dos números cuyo producto sea $12$ y cuya suma sea $7$: son $3$ y $4$. Entonces: $$x^{2} + 7x + 12 = (x + 3)(x + 4).$$',
                    },
                ],
            },
            {
                'title': 'Trinomio de la forma $ax^{2} + bx + c$',
                'contentLatex': 'Se multiplica el coeficiente principal por el término constante ($a \\cdot c$) y se buscan dos números $p$ y $q$ con $p \\cdot q = ac$ y $p + q = b$. Luego se descompone el término central en $px + qx$ y se factoriza por agrupación.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $2x^{2} + 7x + 3$.',
                        'solutionLatex': '$a \\cdot c = 6$. Dos números con producto $6$ y suma $7$ son $1$ y $6$. Descomponemos: $2x^{2} + x + 6x + 3$. Agrupamos: $x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)$.',
                    },
                ],
            },
            {
                'title': 'Trinomio cuadrado perfecto (TCP)',
                'contentLatex': 'Si dos de los términos son cuadrados perfectos y el término central es el doble producto de sus raíces, entonces: $a^{2} \\pm 2ab + b^{2} = (a \\pm b)^{2}$.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $9x^{2} + 30x + 25$.',
                        'solutionLatex': 'Las raíces son $3x$ y $5$. El doble producto es $2 \\cdot 3x \\cdot 5 = 30x$, que coincide con el término central. Entonces: $$9x^{2} + 30x + 25 = (3x + 5)^{2}.$$',
                    },
                ],
            },
        ],
        'exercises': [],
    },
    {
        'id': 'p2-binomios',
        'title': 'Diferencia de cuadrados · Práctica 2',
        'subject': 'Álgebra',
        'description': 'Factorización de binomios por diferencia de cuadrados (práctica adicional 2, sección 4).',
        'topic': 'binomios',
        'method': 'binomios',
        'theory': [
            {
                'title': 'Diferencia de cuadrados',
                'contentLatex': 'Una diferencia de cuadrados se factoriza como el producto de binomios conjugados: $$u^{2} - v^{2} = (u - v)(u + v).$$ Se identifican las raíces cuadradas de cada término y se escribe el producto de la resta por la suma.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $9x^{2} - 25$.',
                        'solutionLatex': 'Las raíces son $3x$ y $5$: $9x^{2} = (3x)^{2}$ y $25 = 5^{2}$. Entonces: $$9x^{2} - 25 = (3x - 5)(3x + 5).$$',
                    },
                ],
            },
        ],
        'exercises': [],
    },
    {
        'id': 'p2-combinados',
        'title': 'Métodos combinados · Práctica 2',
        'subject': 'Álgebra',
        'description': 'Factorización que combina diferencia de cuadrados y factor común (práctica adicional 2, sección 5).',
        'topic': 'combinados',
        'method': 'combinados',
        'theory': [
            {
                'title': 'Métodos combinados',
                'contentLatex': 'Primero se agrupan los términos: un grupo suele ser una diferencia de cuadrados y el otro un polinomio con factor común. Se factoriza cada grupo y luego se extrae el binomio común que queda en ambos.',
                'examples': [
                    {
                        'title': 'Ejemplo resuelto',
                        'statementLatex': 'Factorice $7a + 7b + a^{2} - b^{2}$.',
                        'solutionLatex': 'Agrupamos: $(7a + 7b) + (a^{2} - b^{2})$. En el primer grupo el factor común es $7$: $7(a + b)$. En el segundo aplicamos diferencia de cuadrados: $(a + b)(a - b)$. Extraemos el binomio común $(a + b)$: $$7a + 7b + a^{2} - b^{2} = (a + b)(7 + a - b).$$',
                    },
                ],
            },
        ],
        'exercises': [],
    },
]

gen_fc(UNITS[0]['exercises'], UNITS[0])
gen_ag(UNITS[1]['exercises'], UNITS[1])
gen_in(UNITS[2]['exercises'], UNITS[2])
gen_bi(UNITS[3]['exercises'], UNITS[3])
gen_co(UNITS[4]['exercises'], UNITS[4])

for u in UNITS:
    print(f'{u["id"]}: {len(u["exercises"])} ejercicios')


def q(s):
    return "'" + to_ts_str(s) + "'"


def emit_ts():
    lines = []
    lines.append('// Generado por tools/gen_practica02.py — no editar a mano.')
    lines.append('import type { PracticeUnit } from "./practices";')
    lines.append('')
    lines.append('export const practica02Units: PracticeUnit[] = [')

    for u in UNITS:
        lines.append('  {')
        lines.append(f'    id: {q(u["id"])},')
        lines.append(f'    title: {q(u["title"])},')
        lines.append(f'    subject: {q(u["subject"])},')
        lines.append(f'    description: {q(u["description"])},')
        lines.append(f'    topic: {q(u["topic"])},')
        lines.append(f'    method: {q(u["method"])},')
        lines.append('    theory: [')
        for ts in u['theory']:
            lines.append('      {')
            lines.append(f'        title: {q(ts["title"])},')
            lines.append(f'        contentLatex: {q(ts["contentLatex"])},')
            lines.append('        examples: [')
            for ex in ts['examples']:
                lines.append('          {')
                lines.append(f'            title: {q(ex["title"])},')
                lines.append(f'            statementLatex: {q(ex["statementLatex"])},')
                lines.append(f'            solutionLatex: {q(ex["solutionLatex"])},')
                lines.append('          },')
            lines.append('        ],')
            lines.append('      },')
        lines.append('    ],')
        lines.append('    exercises: [')
        for ex in u['exercises']:
            lines.append('      {')
            lines.append(f'        id: {q(ex["id"])},')
            lines.append(f'        title: {q(ex["title"])},')
            lines.append(f'        statementLatex: {q(ex["statementLatex"])},')
            lines.append('        steps: [')
            for s in ex['steps']:
                lines.append('          {')
                lines.append(f'            stepNumber: {s["stepNumber"]},')
                lines.append(f'            explanation: {q(s["explanation"])},')
                lines.append(f'            mathLatex: {q(s["mathLatex"])},')
                lines.append('          },')
            lines.append('        ],')
            lines.append('        options: [')
            for o in ex['options']:
                lines.append('          {')
                lines.append(f'            id: {q(o["id"])},')
                lines.append(f'            labelLatex: {q(o["labelLatex"])},')
                lines.append(f'            isCorrect: {str(o["isCorrect"]).lower()},')
                lines.append(f'            feedback: {q(o["feedback"])},')
                lines.append('          },')
            lines.append('        ],')
            lines.append('      },')
        lines.append('    ],')
        lines.append('  },')

    lines.append('];')
    return '\n'.join(lines)


ts = emit_ts()
with open('data/practica02.ts', 'w', encoding='utf-8') as fh:
    fh.write(ts)
print('data/practica02.ts escrito:', len(ts), 'bytes')