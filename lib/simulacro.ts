// ============================================================================
// Simulacro cronometrado — muestreo aleatorio de ejercicios del banco completo
// ============================================================================

import type { Exercise, PracticeUnit } from '@/data/practices';

export type BloqueSimulacro = 'todos' | 'trigonometria' | 'algebra';

export interface ConfigSimulacro {
  bloque: BloqueSimulacro;
  cantidad: number;
  segundosPorPregunta: number;
}

export interface PreguntaSimulacro {
  /** clave única prácticaId:ejercicioId */
  key: string;
  practiceId: string;
  practiceTitle: string;
  exercise: Exercise;
}

export interface ResultadoSimulacro {
  fecha: string;
  bloque: BloqueSimulacro;
  correctas: number;
  total: number;
  segundosUsados: number;
}

const RESULTADO_KEY = 'practicas-matematica:simulacro:last:v1';

/** Filtra las unidades por bloque temático. */
export function filterUnits(practices: PracticeUnit[], bloque: BloqueSimulacro): PracticeUnit[] {
  if (bloque === 'todos') return practices;
  const subject = bloque === 'trigonometria' ? 'Trigonometría' : 'Álgebra';
  return practices.filter((p) => p.subject === subject);
}

/**
 * Muestrea `cantidad` preguntas al azar (sin repetición) del banco filtrado.
 * Se ejecuta solo en el cliente, al iniciar el simulacro.
 */
export function sampleQuestions(
  practices: PracticeUnit[],
  config: ConfigSimulacro
): PreguntaSimulacro[] {
  const pool: PreguntaSimulacro[] = [];
  for (const unit of filterUnits(practices, config.bloque)) {
    for (const exercise of unit.exercises) {
      // Evita duplicados si un ejercicio compartiera id entre prácticas.
      const key = `${unit.id}:${exercise.id}`;
      if (!pool.some((p) => p.key === key)) {
        pool.push({ key, practiceId: unit.id, practiceTitle: unit.title, exercise });
      }
    }
  }
  // Fisher-Yates con Math.random (solo cliente).
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(config.cantidad, shuffled.length));
}

/** Mezcla determinista de opciones (misma semilla que ExerciseRunner). */
export function shuffleOptions<T>(items: readonly T[], seedKey: string): T[] {
  let seed = 2166136261;
  for (let i = 0; i < seedKey.length; i++) {
    seed ^= seedKey.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  const random = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function saveLastResult(resultado: ResultadoSimulacro): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(RESULTADO_KEY, JSON.stringify(resultado));
  } catch {
    /* almacenamiento no disponible */
  }
}

export function loadLastResult(): ResultadoSimulacro | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(RESULTADO_KEY);
    return raw ? (JSON.parse(raw) as ResultadoSimulacro) : null;
  } catch {
    return null;
  }
}
