// ============================================================================
// Diagramas SVG paramétricos para trigonometría (elevación/depresión, ley de
// senos). Cada generador devuelve un string <svg> autocontenido, responsivo
// (viewBox + width 100%) y con aria-label. Los ángulos dibujados son
// esquemáticos: los valores reales viajan en las etiquetas de texto.
// ============================================================================

const INK = '#27272a';
const SOFT = '#a1a1aa';
const FAINT = '#d4d4d8';
const ACCENT = '#4f46e5';
const ACCENT_SOFT = '#c7d2fe';
const FILL_SOFT = '#e4e4e7';
const AMBER = '#f59e0b';

type Pt = readonly [number, number];

function wrap(inner: string, w: number, h: number, label: string): string {
  return (
    `<svg viewBox="0 0 ${w} ${h}" width="100%" role="img" ` +
    `aria-label="${label}" style="max-width:${w}px;height:auto;display:block;margin:0 auto">` +
    `${inner}</svg>`
  );
}

function txt(
  x: number,
  y: number,
  s: string,
  opts: {
    size?: number;
    color?: string;
    weight?: number;
    anchor?: 'start' | 'middle' | 'end';
    rotate?: number;
  } = {}
): string {
  const { size = 13, color = '#3f3f46', weight = 500, anchor = 'middle', rotate } = opts;
  const t = rotate !== undefined ? ` transform="rotate(${rotate} ${x} ${y})"` : '';
  return `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}"${t}>${s}</text>`;
}

function line(p1: Pt, p2: Pt, stroke = INK, width = 2, dash?: string): string {
  const d = dash ? ` stroke-dasharray="${dash}"` : '';
  return `<line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="${stroke}" stroke-width="${width}"${d} />`;
}

function dot(p: Pt, r = 5, fill = INK): string {
  return `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${fill}" />`;
}

/** Marcador de ángulo recto (cuadradito) hacia dentro-derecha del vértice. */
function rightAngle(p: Pt, dirX = -1, dirY = -1, s = 12): string {
  const x = p[0] + dirX * s;
  const y = p[1] + dirY * s;
  return `<path d="M ${x} ${p[1]} L ${x} ${y} L ${p[0]} ${y}" fill="none" stroke="${SOFT}" stroke-width="1.5" />`;
}

/** Punto a distancia r del centro en el ángulo deg (convención matemática). */
function pt(c: Pt, r: number, deg: number): Pt {
  const rad = (deg * Math.PI) / 180;
  return [c[0] + r * Math.cos(rad), c[1] - r * Math.sin(rad)];
}

/** Arco de circunferencia entre dos ángulos (de a1 a a2, sentido visual). */
function arc(c: Pt, r: number, a1: number, a2: number, stroke = ACCENT): string {
  const [x1, y1] = pt(c, r, a1);
  const [x2, y2] = pt(c, r, a2);
  const sweep = a2 > a1 ? 0 : 1;
  return (
    `<path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 ${sweep} ` +
    `${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="${stroke}" stroke-width="2" />`
  );
}

/** Muñequito de observador: punto base + cabeza. */
function observer(p: Pt): string {
  return `${dot(p)}<circle cx="${p[0]}" cy="${p[1] - 13}" r="5" fill="#fff" stroke="${INK}" stroke-width="2" />`;
}

// ---------------------------------------------------------------------------
// Generadores de escenas
// ---------------------------------------------------------------------------

export interface ElevacionOpts {
  angulo: string;
  alturaLabel?: string;
  distanciaLabel?: string;
  topLabel?: string;
}

/** Observador en el suelo mirando hacia arriba a la cima de un objeto. */
export function diagElevacion({
  angulo,
  alturaLabel = 'h = ?',
  distanciaLabel,
  topLabel,
}: ElevacionOpts): string {
  const O: Pt = [64, 200];
  const B: Pt = [288, 200];
  const T: Pt = [288, 70];
  const drawn = (Math.atan2(O[1] - T[1], B[0] - O[0]) * 180) / Math.PI; // ≈30°
  const inner = [
    line([24, 200], [336, 200], SOFT, 2),
    `<rect x="${B[0] - 9}" y="${T[1]}" width="18" height="${B[1] - T[1]}" fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="1.5" rx="2" />`,
    rightAngle(B),
    line(O, T, INK, 2),
    arc(O, 42, 0, drawn),
    txt(...pt(O, 58, drawn / 2), angulo, { color: ACCENT, weight: 700, anchor: 'start' }),
    txt(306, 135, alturaLabel, { anchor: 'start', weight: 600 }),
    dot(T, 4, ACCENT),
    topLabel ? txt(T[0], T[1] - 12, topLabel, { size: 11, color: '#71717a' }) : '',
    observer(O),
    distanciaLabel ? txt((O[0] + B[0]) / 2, 226, distanciaLabel, { color: '#71717a' }) : '',
  ].join('');
  return wrap(inner, 360, 240, `Esquema de ángulo de elevación de ${angulo}`);
}

export interface DepresionOpts {
  angulo: string;
  alturaLabel?: string;
  distanciaLabel?: string;
  topLabel?: string;
  bottomLabel?: string;
  /** true = observador volando (avión); false = torre/acantilado. */
  volando?: boolean;
}

/** Observador elevado (faro, acantilado o avión) mirando hacia abajo. */
export function diagDepresion({
  angulo,
  alturaLabel = 'h',
  distanciaLabel = 'd = ?',
  topLabel,
  bottomLabel,
  volando = false,
}: DepresionOpts): string {
  const E: Pt = volando ? [72, 52] : [80, 48];
  const P: Pt = [272, 196];
  const drawn = -(Math.atan2(P[1] - E[1], P[0] - E[0]) * 180) / Math.PI; // negativo ≈ −36°
  const cliff = volando
    ? ''
    : [
        `<rect x="44" y="${E[1]}" width="36" height="${204 - E[1]}" fill="${FILL_SOFT}" stroke="${SOFT}" stroke-width="1.5" />`,
        rightAngle([80, 204]),
      ].join('');
  const boat =
    `<path d="M ${P[0] - 16} ${P[1]} L ${P[0] + 16} ${P[1]} L ${P[0] + 8} ${P[1] + 10} ` +
    `L ${P[0] - 8} ${P[1] + 10} Z" fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="1.5" />`;
  const inner = [
    line([24, 204], [336, 204], SOFT, 2),
    cliff,
    line(E, [336, E[1]], SOFT, 1.5, '6 4'),
    line(E, [P[0] - 14, P[1]], INK, 2),
    arc(E, 40, drawn, 0),
    txt(...pt(E, 56, drawn / 2), angulo, { color: ACCENT, weight: 700, anchor: 'start' }),
    boat,
    volando
      ? `<path d="M ${E[0] - 14} ${E[1] + 4} L ${E[0] + 16} ${E[1]} L ${E[0] - 14} ${E[1] - 6} L ${E[0] - 8} ${E[1]} Z" fill="${INK}" />`
      : observer([80, E[1]]),
    volando ? '' : txt(88, 130, alturaLabel, { anchor: 'start', weight: 600 }),
    volando ? txt(E[0] + 26, 130, alturaLabel, { anchor: 'start', weight: 600 }) : '',
    topLabel
      ? txt(E[0] + 6, E[1] - 16, topLabel, { size: 11, color: '#71717a', anchor: 'start' })
      : '',
    bottomLabel ? txt(P[0], P[1] + 26, bottomLabel, { size: 11, color: '#71717a' }) : '',
    txt(180, 230, distanciaLabel, { color: '#71717a' }),
  ].join('');
  return wrap(inner, 360, 244, `Esquema de ángulo de depresión de ${angulo}`);
}

export interface HipotenusaOpts {
  angulo: string;
  hipotenusaLabel?: string;
  alturaLabel?: string;
  /** 'pared' (escalera) · 'cometa' · 'globo' */
  variante?: 'pared' | 'cometa' | 'globo';
}

/** Escalera contra pared o cuerda tensa hacia arriba (hipotenusa conocida). */
export function diagHipotenusa({
  angulo,
  hipotenusaLabel = 'L = ?',
  alturaLabel = 'h = ?',
  variante = 'pared',
}: HipotenusaOpts): string {
  const O: Pt = [76, 202];
  const wallX = 292;
  const T: Pt = variante === 'pared' ? [wallX, 84] : [268, 66];
  const drawn = (Math.atan2(O[1] - T[1], T[0] - O[0]) * 180) / Math.PI;
  const wall =
    variante === 'pared'
      ? [line([wallX, 40], [wallX, 204], INK, 3), rightAngle([wallX, 202], -1, -1)].join('')
      : '';
  const icono =
    variante === 'cometa'
      ? `<polygon points="${T[0]},${T[1] - 14} ${T[0] + 11},${T[1]} ${T[0]},${T[1] + 14} ${T[0] - 11},${T[1]}" fill="${AMBER}" stroke="#b45309" />`
      : variante === 'globo'
        ? `<circle cx="${T[0]}" cy="${T[1] - 16}" r="15" fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="1.5" />` +
          line(T, [T[0], T[1] - 2], SOFT, 1)
        : '';
  const mid: Pt = [(O[0] + T[0]) / 2 + 6, (O[1] + T[1]) / 2 - 12];
  const inner = [
    line([24, 204], [336, 204], SOFT, 2),
    wall,
    line(O, T, ACCENT, 3),
    arc(O, 40, 0, drawn),
    txt(...pt(O, 56, drawn / 2), angulo, { color: ACCENT, weight: 700, anchor: 'start' }),
    txt(mid[0], mid[1], hipotenusaLabel, { weight: 600, rotate: -drawn }),
    icono,
    variante === 'pared'
      ? txt(wallX + 12, 140, alturaLabel, { anchor: 'start', weight: 600 })
      : txt(300, 60, alturaLabel, { anchor: 'start', weight: 600 }),
    observer(O),
  ].join('');
  return wrap(inner, 360, 234, `Esquema con hipotenusa y ángulo de ${angulo}`);
}

export interface CombinadaOpts {
  anguloArriba: string;
  anguloAbajo: string;
  alturaObservadorLabel?: string;
  alturaTotalLabel?: string;
  distanciaLabel?: string;
}

/** Observador a media altura: ve la base abajo y la cima arriba. */
export function diagCombinada({
  anguloArriba,
  anguloAbajo,
  alturaObservadorLabel = '10 m',
  alturaTotalLabel = 'h = ?',
  distanciaLabel = 'd',
}: CombinadaOpts): string {
  const W: Pt = [78, 104];
  const upDrawn = (Math.atan2(W[1] - 34, 292 - W[0]) * 180) / Math.PI;
  const downDrawn = -(Math.atan2(204 - W[1], 292 - W[0]) * 180) / Math.PI;
  const inner = [
    line([24, 204], [336, 204], SOFT, 2),
    `<rect x="46" y="${W[1]}" width="32" height="${204 - W[1]}" fill="${FILL_SOFT}" stroke="${SOFT}" stroke-width="1.5" />`,
    `<rect x="288" y="30" width="20" height="174" fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="1.5" rx="2" />`,
    line(W, [336, W[1]], SOFT, 1.5, '6 4'),
    line(W, [290, 36], INK, 2),
    line(W, [290, 200], INK, 2),
    arc(W, 34, 0, upDrawn),
    arc(W, 34, downDrawn, 0),
    txt(...pt(W, 50, upDrawn / 2 + 2), anguloArriba, {
      color: ACCENT,
      weight: 700,
      anchor: 'start',
    }),
    txt(...pt(W, 50, downDrawn / 2 - 2), anguloAbajo, {
      color: ACCENT,
      weight: 700,
      anchor: 'start',
    }),
    rightAngle([298, 202]),
    txt(62, 158, alturaObservadorLabel, { size: 12, weight: 600, rotate: -90 }),
    txt(320, 118, alturaTotalLabel, { anchor: 'start', weight: 600, size: 12 }),
    txt((W[0] + 298) / 2, 228, distanciaLabel, { color: '#71717a' }),
    `<rect x="${W[0] - 5}" y="${W[1] - 5}" width="10" height="10" fill="#fff" stroke="${INK}" stroke-width="2" />`,
  ].join('');
  return wrap(
    inner,
    360,
    240,
    'Esquema combinado: depresión hacia la base y elevación hacia la cima'
  );
}

export interface DosObservacionesOpts {
  anguloCerca: string;
  distanciaLabel?: string;
  alturaLabel?: string;
  etiquetaCerca?: string;
  etiquetaLejos?: string;
}

/** Dos observadores en tierra; el objeto vuela sobre el lejano. */
export function diagDosObservaciones({
  anguloCerca,
  distanciaLabel = '200 m',
  alturaLabel = 'h = ?',
  etiquetaCerca = 'A',
  etiquetaLejos = 'B',
}: DosObservacionesOpts): string {
  const A: Pt = [56, 202];
  const B: Pt = [252, 202];
  const P: Pt = [252, 56];
  const drawn = (Math.atan2(A[1] - P[1], P[0] - A[0]) * 180) / Math.PI;
  const avion =
    `<path d="M ${P[0] + 20} ${P[1]} L ${P[0] - 16} ${P[1] + 9} L ${P[0] - 8} ${P[1]} ` +
    `L ${P[0] - 16} ${P[1] - 9} Z" fill="${INK}" />`;
  const inner = [
    line([24, 202], [336, 202], SOFT, 2),
    line(B, P, SOFT, 1.5, '6 4'),
    line(A, [P[0] - 18, P[1] + 2], INK, 2),
    arc(A, 42, 0, drawn),
    txt(...pt(A, 58, drawn / 2), anguloCerca, { color: ACCENT, weight: 700, anchor: 'start' }),
    line(A, B, SOFT, 1.5),
    line(A, [A[0], 212], SOFT, 1.5),
    line(B, [B[0], 212], SOFT, 1.5),
    txt((A[0] + B[0]) / 2, 232, distanciaLabel, { color: '#71717a' }),
    txt(P[0] + 12, 130, alturaLabel, { anchor: 'start', weight: 600 }),
    avion,
    txt(A[0], 222, etiquetaCerca, { weight: 700 }),
    txt(B[0], 222, etiquetaLejos, { weight: 700 }),
    observer(A),
    dot(B, 4),
  ].join('');
  return wrap(inner, 360, 244, 'Esquema con dos observadores y objeto elevado');
}

/** Edificio con antena; dos líneas de vista desde un punto del suelo. */
export function diagAntena(anguloPie: string, anguloPunta: string): string {
  const O: Pt = [64, 202];
  const pie: Pt = [288, 122];
  const punta: Pt = [288, 54];
  const a1 = (Math.atan2(O[1] - pie[1], pie[0] - O[0]) * 180) / Math.PI;
  const a2 = (Math.atan2(O[1] - punta[1], punta[0] - O[0]) * 180) / Math.PI;
  const inner = [
    line([24, 204], [336, 204], SOFT, 2),
    `<rect x="280" y="${pie[1]}" width="18" height="${204 - pie[1]}" fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="1.5" rx="2" />`,
    line([289, pie[1]], punta, INK, 2.5),
    dot(punta, 5, ACCENT),
    line(O, pie, INK, 2),
    line(O, punta, INK, 2),
    arc(O, 24, 0, a1),
    arc(O, 52, 0, a2),
    txt(...pt(O, 36, a1 / 2 - 4), anguloPie, { color: ACCENT, weight: 700, anchor: 'start' }),
    txt(...pt(O, 66, a2 / 2 + 5), anguloPunta, { color: ACCENT, weight: 700, anchor: 'start' }),
    txt(300, 88, '15 m', { anchor: 'start', weight: 600 }),
    txt(304, 165, 'h = ?', { anchor: 'start', weight: 600, size: 12 }),
    rightAngle([289, 202]),
    observer(O),
  ].join('');
  return wrap(inner, 360, 232, 'Edificio con antena visto desde un punto del suelo');
}

/** Poste y edificio con sombras paralelas del sol. */
export function diagSombras(): string {
  const inner = [
    txt(210, 18, 'El sol tiene el mismo ángulo para ambos objetos', { size: 11, color: '#71717a' }),
    line([24, 200], [396, 200], SOFT, 2),
    `<circle cx="52" cy="52" r="15" fill="${AMBER}" opacity="0.9" />`,
    // poste
    line([96, 200], [96, 148], ACCENT, 3.5),
    txt(82, 176, '4 m', { anchor: 'end', weight: 600 }),
    line([98, 201], [146, 201], '#52525b', 4),
    txt(122, 224, '5 m', { color: '#71717a' }),
    line([26, 92], [94, 146], AMBER, 2),
    // edificio
    `<rect x="280" y="74" width="22" height="126" fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="1.5" rx="2" />`,
    txt(310, 138, 'h = ?', { anchor: 'start', weight: 600 }),
    line([283, 201], [383, 201], '#52525b', 4),
    txt(333, 224, '25 m', { color: '#71717a' }),
    line([212, 16], [278, 72], AMBER, 2),
  ].join('');
  return wrap(inner, 420, 236, 'Poste y edificio proyectando sombras con rayos de sol paralelos');
}

/** Auto que se acerca a un edificio: dos posiciones con distinta depresión. */
export function diagAuto(anguloLejos: string, anguloCerca: string): string {
  const R: Pt = [62, 44];
  const C1: Pt = [296, 194];
  const C2: Pt = [186, 194];
  const aFar = -(Math.atan2(C1[1] - R[1], C1[0] - R[0]) * 180) / Math.PI;
  const aNear = -(Math.atan2(C2[1] - R[1], C2[0] - R[0]) * 180) / Math.PI;
  const car = (p: Pt) =>
    `<rect x="${p[0] - 17}" y="${p[1] - 8}" width="34" height="11" rx="3.5" fill="${ACCENT}" />` +
    `<circle cx="${p[0] - 9}" cy="${p[1] + 5}" r="4" fill="${INK}" />` +
    `<circle cx="${p[0] + 9}" cy="${p[1] + 5}" r="4" fill="${INK}" />`;
  const inner = [
    line([24, 202], [336, 202], SOFT, 2),
    `<rect x="46" y="${R[1]}" width="32" height="${202 - R[1]}" fill="${FILL_SOFT}" stroke="${SOFT}" stroke-width="1.5" />`,
    line(R, [336, R[1]], SOFT, 1.5, '6 4'),
    line(R, [C1[0] - 6, C1[1] - 8], INK, 2),
    line(R, [C2[0] + 6, C2[1] - 8], INK, 2),
    arc(R, 28, aFar, 0),
    arc(R, 44, aNear, 0),
    txt(...pt(R, 40, aFar / 2), anguloLejos, { color: ACCENT, weight: 700, anchor: 'start' }),
    txt(...pt(R, 56, aNear / 2), anguloCerca, { color: ACCENT, weight: 700, anchor: 'start' }),
    txt(86, 124, '90 m', { anchor: 'start', weight: 600, rotate: -90 }),
    line([214, 172], [266, 172], '#52525b', 2),
    `<polygon points="270,172 262,168 262,176" fill="#52525b" />`,
    txt(240, 164, '¿avance?', { size: 11, color: '#52525b' }),
    car(C1),
    car(C2),
    observer(R),
  ].join('');
  return wrap(inner, 360, 236, 'Auto avanzando hacia el edificio visto desde la terraza');
}

/** Dron que sube verticalmente: posición inicial y nueva. */
export function diagDron(): string {
  const O: Pt = [64, 202];
  const D1: Pt = [250, 108];
  const D2: Pt = [250, 58];
  const drawn = (Math.atan2(O[1] - D1[1], D1[0] - O[0]) * 180) / Math.PI;
  const dron = (p: Pt, filled: boolean) =>
    `<circle cx="${p[0]}" cy="${p[1]}" r="6" ${filled ? `fill="${ACCENT}"` : `fill="#fff" stroke="${ACCENT}" stroke-width="2"`} />` +
    line([p[0] - 12, p[1] - 6], [p[0] + 12, p[1] - 6], INK, 2);
  const inner = [
    line([24, 202], [336, 202], SOFT, 2),
    line(D2, D1, SOFT, 1.5, '5 4'),
    line(O, D1, INK, 2),
    line(O, [D2[0] - 8, D2[1] + 4], SOFT, 1.5, '5 4'),
    arc(O, 40, 0, drawn),
    txt(...pt(O, 56, drawn / 2), '45°', { color: ACCENT, weight: 700, anchor: 'start' }),
    line([D2[0] + 14, D2[1]], [D2[0] + 14, D1[1]], '#52525b', 2),
    `<polygon points="${D2[0] + 14},${D2[1] + 4} ${D2[0] + 10},${D2[1] + 11} ${D2[0] + 18},${D2[1] + 11}" fill="#52525b" />`,
    `<polygon points="${D2[0] + 14},${D1[1] - 4} ${D2[0] + 10},${D1[1] - 11} ${D2[0] + 18},${D1[1] - 11}" fill="#52525b" />`,
    txt(D2[0] + 22, 86, '+40 m', { anchor: 'start', size: 12, weight: 600 }),
    line([64, 216], [250, 216], SOFT, 1.5),
    txt(157, 234, '120 m', { color: '#71717a' }),
    dron(D1, true),
    dron(D2, false),
    observer(O),
  ].join('');
  return wrap(inner, 360, 244, 'Dron que asciende verticalmente frente al operador');
}

// ---------------------------------------------------------------------------
// Triángulos (ley de senos)
// ---------------------------------------------------------------------------

export interface TrianguloOpts {
  verticeA?: string;
  verticeB?: string;
  verticeC?: string;
  ladoA?: string;
  ladoB?: string;
  ladoC?: string;
}

/** Triángulo oblicuángulo genérico ABC con lados opuestos etiquetados. */
export function diagTriangulo({
  verticeA = 'A',
  verticeB = 'B',
  verticeC = 'C',
  ladoA = 'a',
  ladoB = 'b',
  ladoC = 'c',
}: TrianguloOpts = {}): string {
  const A: Pt = [52, 198];
  const B: Pt = [308, 198];
  const C: Pt = [152, 46];
  /**
   * Marca el ángulo interior en P (entre direcciones P→Q1 y P→Q2) usando
   * coordenadas de pantalla; coloca la etiqueta sobre el bisector.
   */
  const mark = (P: Pt, Q1: Pt, Q2: Pt, label: string) => {
    const s1 = (Math.atan2(Q1[1] - P[1], Q1[0] - P[0]) * 180) / Math.PI;
    const s2 = (Math.atan2(Q2[1] - P[1], Q2[0] - P[0]) * 180) / Math.PI;
    let d = s2 - s1;
    while (d <= -180) d += 360;
    while (d > 180) d -= 360;
    const mid = s1 + d / 2;
    const [x1, y1] = [
      P[0] + 22 * Math.cos((s1 * Math.PI) / 180),
      P[1] + 22 * Math.sin((s1 * Math.PI) / 180),
    ];
    const [x2, y2] = [
      P[0] + 22 * Math.cos((s2 * Math.PI) / 180),
      P[1] + 22 * Math.sin((s2 * Math.PI) / 180),
    ];
    const sweep = d > 0 ? 1 : 0;
    const isQ = label.includes('?');
    return (
      `<path d="M ${x1.toFixed(1)} ${y1.toFixed(1)} A 22 22 0 0 ${sweep} ${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="${isQ ? ACCENT : '#71717a'}" stroke-width="2" />` +
      txt(
        P[0] + 38 * Math.cos((mid * Math.PI) / 180),
        P[1] + 38 * Math.sin((mid * Math.PI) / 180) + 4,
        label,
        { color: isQ ? ACCENT : '#52525b', weight: isQ ? 700 : 500 }
      )
    );
  };
  const inner = [
    `<polygon points="${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}" fill="#fafafa" stroke="${INK}" stroke-width="2" />`,
    mark(A, B, C, verticeA),
    mark(B, A, C, verticeB),
    mark(C, A, B, verticeC),
    txt((B[0] + C[0]) / 2 + 16, (B[1] + C[1]) / 2 - 8, ladoA, { weight: 600, anchor: 'start' }),
    txt((A[0] + C[0]) / 2 - 14, (A[1] + C[1]) / 2 - 8, ladoB, { weight: 600, anchor: 'end' }),
    txt((A[0] + B[0]) / 2, (A[1] + B[1]) / 2 + 24, ladoC, { weight: 600 }),
    dot(A, 4),
    dot(B, 4),
    dot(C, 4),
  ].join('');
  return wrap(inner, 360, 236, 'Triángulo oblicuángulo con lados y ángulos etiquetados');
}

/** Triángulo rectángulo de referencia con catetos e hipotenusa nombrados. */
export function diagTrianguloRectangulo(): string {
  const A: Pt = [72, 202];
  const B: Pt = [300, 202];
  const C: Pt = [300, 62];
  const theta = (Math.atan2(A[1] - C[1], C[0] - A[0]) * 180) / Math.PI;
  const inner = [
    line([24, 204], [336, 204], SOFT, 2),
    `<polygon points="${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}" fill="#fafafa" stroke="${INK}" stroke-width="2" />`,
    rightAngle(B),
    arc(A, 40, 0, theta),
    txt(...pt(A, 56, theta / 2), 'θ', { color: ACCENT, weight: 700, size: 15, anchor: 'start' }),
    txt((A[0] + B[0]) / 2, 226, 'adyacente', { color: '#71717a' }),
    txt(B[0] + 12, 134, 'opuesto', { anchor: 'start', color: '#71717a', rotate: -90 }),
    txt((A[0] + C[0]) / 2 - 10, (A[1] + C[1]) / 2 - 12, 'hipotenusa', {
      color: '#71717a',
      rotate: -theta,
    }),
    dot(A, 4),
    dot(B, 4),
    dot(C, 4),
  ].join('');
  return wrap(
    inner,
    360,
    238,
    'Triángulo rectángulo con hipotenusa, opuesto y adyacente respecto de θ'
  );
}
