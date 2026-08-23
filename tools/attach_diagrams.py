#!/usr/bin/env python3
"""Inserta diagramSvg en teoría y ejercicios de data/trigonometria.ts."""
import re

PATH = 'data/trigonometria.ts'

with open(PATH, 'r', encoding='utf-8') as f:
    src = f.read()


def insert_after(src, anchor, addition):
    n = src.count(anchor)
    assert n == 1, f'ancla {anchor[:60]!r} aparece {n} veces'
    return src.replace(anchor, anchor + addition)


def add_diagram_after_statement(src, ex_id, svg_expr):
    idx = src.find(f"id: {ex_id}")
    assert idx != -1, f'no encontrado {ex_id}'
    sidx = src.find('statementLatex:', idx)
    assert sidx != -1
    # fin del valor del string: la primera secuencia "',\n" tras el inicio
    end = src.find("',\n", sidx)
    assert end != -1, f'sin fin de statement en {ex_id}'
    insert_at = end + 2  # después de la coma
    return src[:insert_at] + f'\n      diagramSvg: {svg_expr},' + src[insert_at:]


# ---------- Teoría ED ----------
src = insert_after(src, '        VALORES_NOTABLES,\n',
                   '    diagramSvg: diagTrianguloRectangulo(),\n')
src = insert_after(src, "**debajo** del objeto observado.',",
                   "\n    diagramSvg: diagElevacion({ angulo: '45°', alturaLabel: '30 m arriba', distanciaLabel: '30 m' }),")
src = insert_after(src, '**ángulos alternos internos** entre dos paralelas).',
                   '\n    diagramSvg: diagDepresion({ angulo: "45°", alturaLabel: \'50 m\', distanciaLabel: \'d\' }),'.replace('"45°"', "'45°'"))
src = insert_after(src, 'y combina los resultados.',
                   "\n    diagramSvg: diagCombinada({ anguloArriba: '60°', anguloAbajo: '30°' }),")

# ---------- Teoría LS ----------
src = insert_after(src, 'más otro dato.',
                   '\n    diagramSvg: diagTriangulo(),')
src = insert_after(src, 'si conoces dos, el tercero sale restando.',
                   '\n    diagramSvg: diagTriangulo(),')
src = insert_after(src, 'lado–ángulo opuesto completo que tengas.',
                   "\n    diagramSvg: diagTriangulo({ verticeA: 'C', verticeB: 'D', verticeC: 'T', ladoC: '100 m' }),")

# ---------- Ejercicios ED ----------
ed = {
    "'ed-01'": "diagElevacion({ angulo: '45°', distanciaLabel: '20 m' })",
    "'ed-02'": "diagElevacion({ angulo: '30°', distanciaLabel: '18 m (sombra)', topLabel: 'Rayos de sol' })",
    "'ed-03'": "diagElevacion({ angulo: '60°', distanciaLabel: '350 m', topLabel: 'Avión' })",
    "'ed-04'": "diagDepresion({ angulo: '45°', alturaLabel: '25 m', topLabel: 'Faro', bottomLabel: 'Bote' })",
    "'ed-05'": "diagDepresion({ angulo: '30°', alturaLabel: '60 m', topLabel: 'Acantilado', bottomLabel: 'Lancha' })",
    "'ed-06'": "diagHipotenusa({ angulo: '60°', hipotenusaLabel: '10 m' })",
    "'ed-07'": "diagHipotenusa({ angulo: '30°', hipotenusaLabel: '80 m (cuerda)', variante: 'cometa' })",
    "'ed-08'": "diagDepresion({ angulo: '30°', alturaLabel: '45 m', topLabel: 'Azotea', bottomLabel: 'Base del otro edificio' })",
    "'ed-09'": "diagCombinada({ anguloArriba: '60°', anguloAbajo: '30°' })",
    "'ed-10'": "diagDosObservaciones({ anguloCerca: '30°', distanciaLabel: '200 m' })",
    "'ed-11'": "diagDepresion({ angulo: '60°', alturaLabel: '40 m', topLabel: 'Puente', bottomLabel: 'Bote' })",
    "'ed-12'": "diagAntena('45°', '60°')",
    "'ed-13'": "diagDron()",
    "'ed-14'": "diagDepresion({ angulo: '30°', alturaLabel: '50 m', topLabel: 'Faro', bottomLabel: 'Barco' })",
    "'ed-15'": "diagHipotenusa({ angulo: '30°', hipotenusaLabel: 'L = ?', alturaLabel: '' })",
    "'ed-16'": "diagHipotenusa({ angulo: '60°', hipotenusaLabel: '100 m (cuerda)', variante: 'globo' })",
    "'ed-17'": "diagDepresion({ angulo: '60°', alturaLabel: '900 m', volando: True, topLabel: 'Avión', bottomLabel: 'Pista' })",
    "'ed-18'": "diagSombras()",
    "'ed-19'": "diagCombinada({ anguloArriba: '30°', anguloAbajo: '45°', alturaObservadorLabel: '24 m', alturaTotalLabel: 'H = ?' })",
    "'ed-20'": "diagAuto('45°', '60°')",
}
for ex_id, expr in ed.items():
    src = add_diagram_after_statement(src, ex_id, expr)

# ---------- Ejercicios LS ----------
ls_default = 'diagTriangulo()'
ls_custom = {
    "'ls-05'": "diagTriangulo({ verticeA: 'C', verticeB: 'D', verticeC: 'T', ladoC: '100 m' })",
    "'ls-10'": "diagTriangulo({ verticeC: 'P', ladoC: '150 m' })",
    "'ls-13'": "diagTriangulo({ verticeC: 'P', ladoC: '120 m' })",
    "'ls-16'": "diagTriangulo({ verticeC: 'T', ladoC: '40 m' })",
    "'ls-18'": "diagTriangulo({ verticeC: 'K', ladoC: '250 m' })",
}
ls_ids = [f"'ls-{i:02d}'" for i in range(1, 21)]
for ex_id in ls_ids:
    src = add_diagram_after_statement(src, ex_id, ls_custom.get(ex_id, ls_default))

with open(PATH, 'w', encoding='utf-8') as f:
    f.write(src)

n = src.count('diagramSvg:')
print(f'OK — diagramSvg insertados: {n}')
