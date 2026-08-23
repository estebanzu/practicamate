// ============================================================================
// Repaso de errores global — recolecta ejercicios fallados en todas las
// prácticas usando el progreso guardado en localStorage.
// ============================================================================

import type { Exercise, PracticeUnit } from '@/data/practices';
import { loadPracticeProgress } from './progress';

export interface ItemRepaso {
  key: string;
  practiceId: string;
  practiceTitle: string;
  exercise: Exercise;
}

export interface ConteoErrores {
  /** Fallados y aún sin resolver (attempts > 0 && !solved). */
  pendientes: number;
  /** Resueltos pero que costaron más de un intento (solved && attempts > 1). */
  reintentados: number;
}

export function contarErrores(practices: PracticeUnit[]): ConteoErrores {
  let pendientes = 0;
  let reintentados = 0;
  for (const p of practices) {
    const prog = loadPracticeProgress(p.id);
    for (const ex of p.exercises) {
      const e = prog.byExercise[ex.id];
      if (!e || !e.attempts) continue;
      if (!e.solved) pendientes += 1;
      else if (e.attempts > 1) reintentados += 1;
    }
  }
  return { pendientes, reintentados };
}

/**
 * Construye la lista de ejercicios a repasar. Con `incluirReintentados`
 * también agrega los que se resolvieron al segundo intento o después.
 */
export function collectRepaso(
  practices: PracticeUnit[],
  incluirReintentados: boolean
): ItemRepaso[] {
  const items: ItemRepaso[] = [];
  for (const p of practices) {
    const prog = loadPracticeProgress(p.id);
    for (const ex of p.exercises) {
      const e = prog.byExercise[ex.id];
      if (!e || !e.attempts) continue;
      const esPendiente = !e.solved;
      const esReintentado = e.solved && e.attempts > 1;
      if (esPendiente || (incluirReintentados && esReintentado)) {
        items.push({
          key: `${p.id}:${ex.id}`,
          practiceId: p.id,
          practiceTitle: p.title,
          exercise: ex,
        });
      }
    }
  }
  return items;
}
