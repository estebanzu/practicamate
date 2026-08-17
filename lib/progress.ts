import { useCallback, useState } from 'react';

// ---------------------------------------------------------------------------
// Persistencia del progreso en localStorage
// ---------------------------------------------------------------------------

export interface ExerciseProgress {
  /** Número total de intentos registrados para el ejercicio. */
  attempts: number;
  /** true cuando el ejercicio fue respondido correctamente al menos una vez. */
  solved: boolean;
  /** id de la última opción seleccionada. */
  lastAnswer: string | null;
}

export interface PracticeProgress {
  byExercise: Record<string, ExerciseProgress>;
}

const STORAGE_KEY = 'practicas-matematica:progress:v1';

export function loadPracticeProgress(practiceId: string): PracticeProgress {
  if (typeof window === 'undefined') return { byExercise: {} };
  try {
    const raw = window.localStorage.getItem(`${STORAGE_KEY}:${practiceId}`);
    if (!raw) return { byExercise: {} };
    const parsed = JSON.parse(raw) as PracticeProgress;
    return parsed && parsed.byExercise ? parsed : { byExercise: {} };
  } catch {
    return { byExercise: {} };
  }
}

export function savePracticeProgress(practiceId: string, progress: PracticeProgress): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(`${STORAGE_KEY}:${practiceId}`, JSON.stringify(progress));
  } catch {
    // almacenamiento no disponible (modo privado, cuota llena, etc.)
  }
}

export function recordAnswer(
  practiceId: string,
  exerciseId: string,
  optionId: string,
  isCorrect: boolean
): PracticeProgress {
  const progress = loadPracticeProgress(practiceId);
  const entry: ExerciseProgress = progress.byExercise[exerciseId] ?? {
    attempts: 0,
    solved: false,
    lastAnswer: null,
  };
  entry.attempts += 1;
  entry.lastAnswer = optionId;
  if (isCorrect) entry.solved = true;
  progress.byExercise[exerciseId] = entry;
  savePracticeProgress(practiceId, progress);
  return progress;
}

export function countSolved(progress: PracticeProgress): number {
  return Object.values(progress.byExercise).filter((e) => e.solved).length;
}

// ---------------------------------------------------------------------------
// Hook de React para usar el progreso en componentes clientes
// ---------------------------------------------------------------------------

export function usePracticeProgress(practiceId: string) {
  const [progress, setProgress] = useState<PracticeProgress>(() =>
    loadPracticeProgress(practiceId)
  );

  const answer = useCallback(
    (exerciseId: string, optionId: string, isCorrect: boolean) => {
      setProgress((prev) => {
        const next = recordAnswer(practiceId, exerciseId, optionId, isCorrect);
        return next;
      });
    },
    [practiceId]
  );

  const reset = useCallback(() => {
    savePracticeProgress(practiceId, { byExercise: {} });
    setProgress({ byExercise: {} });
  }, [practiceId]);

  return { progress, answer, reset };
}
