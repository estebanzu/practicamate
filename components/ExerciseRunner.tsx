'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Exercise, ExerciseOption, PracticeUnit } from '@/data/practices';
import { usePracticeProgress } from '@/lib/progress';
import LatexRenderer from './LatexRenderer';
import TheoryView from './TheoryView';

interface AnswerState {
  selected: string | null;
  solved: boolean;
}

function optionClasses(option: ExerciseOption, state: AnswerState): string {
  const base =
    'flex min-h-[52px] w-full items-center rounded-lg border px-4 text-left text-[15px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-[0.98]';

  if (state.solved) {
    if (option.isCorrect) {
      return `${base} border-emerald-300 bg-emerald-50 text-emerald-900`;
    }
    if (state.selected === option.id) {
      return `${base} border-red-300 bg-red-50 text-red-900`;
    }
    return `${base} border-zinc-200 bg-white text-zinc-400`;
  }

  if (state.selected === option.id) {
    return option.isCorrect
      ? `${base} border-emerald-300 bg-emerald-50 text-emerald-900`
      : `${base} border-red-400 bg-red-50 text-red-900`;
  }

  return `${base} border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50`;
}

export default function ExerciseRunner({ practice }: { practice: PracticeUnit }) {
  const { progress, answer, reset } = usePracticeProgress(practice.id);
  const [current, setCurrent] = useState(0);
  const [showTheory, setShowTheory] = useState(false);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>(() => {
    const initial: Record<string, AnswerState> = {};
    for (const ex of practice.exercises) {
      const saved = progress.byExercise[ex.id];
      initial[ex.id] = saved
        ? { selected: saved.lastAnswer, solved: saved.solved }
        : { selected: null, solved: false };
    }
    return initial;
  });
  const [stepsShown, setStepsShown] = useState<Record<string, number>>({});
  const [confirmReset, setConfirmReset] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  const total = practice.exercises.length;
  const exercise: Exercise = practice.exercises[current];
  const state = answers[exercise.id];
  const steps = stepsShown[exercise.id] ?? 0;
  const isLast = current === total - 1;

  const solvedCount = useMemo(
    () => practice.exercises.filter((ex) => progress.byExercise[ex.id]?.solved).length,
    [progress, practice]
  );
  const percent = total === 0 ? 0 : Math.round((solvedCount / total) * 100);

  // La opción de avanzar se habilita al responder o al revisar la solución completa.
  const canProceed = state.selected !== null || steps === exercise.steps.length;

  useEffect(() => {
    if (showTheory) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [showTheory]);

  function selectOption(optionId: string) {
    if (state.solved) return;
    const isCorrect = exercise.options.find((o) => o.id === optionId)?.isCorrect ?? false;
    setAnswers((prev) => ({
      ...prev,
      [exercise.id]: { selected: optionId, solved: isCorrect },
    }));
    answer(exercise.id, optionId, isCorrect);
  }

  function revealStep() {
    setStepsShown((prev) => ({
      ...prev,
      [exercise.id]: Math.min((prev[exercise.id] ?? 0) + 1, exercise.steps.length),
    }));
  }

  function revealAllSteps() {
    setStepsShown((prev) => ({ ...prev, [exercise.id]: exercise.steps.length }));
  }

  function revealFromHelp() {
    if (steps === 0) revealStep();
    requestAnimationFrame(() => {
      stepsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function handleReset() {
    reset();
    setAnswers((prev) => {
      const next: Record<string, AnswerState> = {};
      for (const ex of practice.exercises) {
        next[ex.id] = { selected: null, solved: false };
      }
      return next;
    });
    setStepsShown({});
    setConfirmReset(false);
  }

  function goTo(index: number) {
    setCurrent(Math.max(0, Math.min(total - 1, index)));
  }

  const statusBadge = state.solved ? (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
      ✓ Resuelto
    </span>
  ) : state.selected ? (
    <span className="inline-flex items-center gap-1 rounded-full border border-red-300 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-800">
      Inténtalo de nuevo
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-500">
      Pendiente
    </span>
  );

  const selectedOption = exercise.options.find((o) => o.id === state.selected) ?? null;
  const feedbackText =
    selectedOption && (state.solved || !selectedOption.isCorrect)
      ? selectedOption.feedback
      : undefined;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
      {/* Barra superior sticky: regreso, avance y acceso a teoría */}
      <header className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-zinc-50/95 px-4 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between gap-2 py-2">
          <Link
            href="/"
            aria-label="Volver al inicio"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-xl text-zinc-600 transition-all hover:bg-zinc-200/60 active:scale-95"
          >
            ←
          </Link>
          <div className="min-w-0 flex-1 text-center">
            <p className="truncate text-sm font-semibold text-zinc-900">
              Ejercicio {current + 1} de {total}
            </p>
            <p className="truncate text-xs text-zinc-500">{practice.title}</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTheory(true)}
            className="flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-100 active:scale-[0.98]"
          >
            📖 Teoría
          </button>
        </div>
      </header>

      {/* Progreso de la práctica */}
      <div className="mt-4">
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${solvedCount} de ${total} ejercicios resueltos`}
        >
          <div
            className="h-full rounded-full bg-indigo-500 transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-1.5 text-xs text-zinc-500">
          Progreso · {solvedCount} de {total} resueltos
        </p>
      </div>

      {solvedCount === total && (
        <div className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
          🎉 ¡Completaste la práctica completa! Puedes repasar los ejercicios o consultar la teoría.
        </div>
      )}

      {/* Selector de ejercicios (scroll horizontal en móvil) */}
      <nav
        className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1"
        aria-label="Selector de ejercicios"
      >
        {practice.exercises.map((ex, i) => {
          const solved = progress.byExercise[ex.id]?.solved;
          const active = i === current;
          return (
            <button
              key={ex.id}
              type="button"
              onClick={() => goTo(i)}
              aria-current={active ? 'true' : undefined}
              aria-label={`Ir al ejercicio ${i + 1}${solved ? ' (resuelto)' : ''}`}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold transition-all active:scale-95 ${
                active
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : solved
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:border-emerald-400'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400'
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </nav>

      {/* Enunciado */}
      <article
        key={exercise.id}
        className="animate-enter mt-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-sm font-medium text-zinc-500">{exercise.title}</h1>
          {statusBadge}
        </div>

        <p className="mt-3 text-base leading-relaxed text-zinc-900">
          <LatexRenderer content={exercise.statementLatex} />
        </p>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-400">
          Toca una opción para comprobar tu respuesta
        </p>

        {/* Opciones de respuesta */}
        <fieldset className="mt-3" disabled={state.solved}>
          <legend className="sr-only">Opciones de respuesta</legend>
          <div className="space-y-3">
            {exercise.options.map((option) => {
              const letter = option.id.toUpperCase();
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => selectOption(option.id)}
                  disabled={state.solved}
                  className={optionClasses(option, state)}
                >
                  <span className="flex w-full items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                        option.id === state.selected && state.solved && option.isCorrect
                          ? 'border-emerald-500 text-emerald-700'
                          : option.id === state.selected
                            ? 'border-current text-current'
                            : 'border-zinc-300 text-zinc-500'
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="min-w-0 flex-1">
                      <LatexRenderer content={option.labelLatex} />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Retroalimentación */}
        {feedbackText && (
          <div
            key={`${exercise.id}-${state.selected}`}
            className={`animate-enter mt-4 rounded-lg border p-4 text-sm leading-relaxed ${
              state.solved
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-red-200 bg-red-50 text-red-900'
            }`}
          >
            <LatexRenderer content={feedbackText} />
            {!state.solved && (
              <p className="mt-2 text-xs text-red-700/80">
                No te preocupes: selecciona otra opción para reintentar.
              </p>
            )}
          </div>
        )}

        {/* Ayuda: paso a paso */}
        <div ref={stepsRef} className="mt-5 border-t border-zinc-100 pt-4 scroll-mt-24">
          {steps === 0 ? (
            <div>
              <button
                type="button"
                onClick={revealStep}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
              >
                💡 ¿Cómo se resuelve? Ver paso a paso
              </button>
              <p className="mt-2 text-center text-xs text-zinc-400">
                ¿Dudas? Consulta la teoría o mira el paso a paso.
              </p>
            </div>
          ) : (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Paso a paso
              </p>
              <ol className="space-y-3">
                {exercise.steps.slice(0, steps).map((step) => (
                  <li
                    key={step.stepNumber}
                    className="rounded-lg border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                        {step.stepNumber}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[15px] leading-relaxed text-zinc-700">
                          {step.explanation}
                        </p>
                        {step.mathLatex && (
                          <div className="mt-2 overflow-x-auto text-zinc-900">
                            <LatexRenderer content={`$$${step.mathLatex}$$`} />
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              {steps < exercise.steps.length ? (
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={revealStep}
                    className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
                  >
                    Siguiente paso ({steps}/{exercise.steps.length})
                  </button>
                  <button
                    type="button"
                    onClick={revealAllSteps}
                    className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
                  >
                    Ver todos los pasos
                  </button>
                </div>
              ) : (
                <p className="mt-3 text-center text-xs font-medium text-emerald-700">
                  Resolución completa mostrada.
                </p>
              )}
            </div>
          )}
        </div>
      </article>

      {/* Navegación principal (thumb zone) */}
      <div className="mt-5 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Anterior
        </button>

        {state.selected !== null && !state.solved && steps === 0 ? (
          <button
            type="button"
            onClick={revealFromHelp}
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-base font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
          >
            💡 Ver cómo se resuelve
          </button>
        ) : isLast ? (
          canProceed ? (
            <Link
              href="/"
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-base font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
            >
              Finalizar práctica →
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-zinc-300 px-4 text-base font-semibold text-zinc-500"
            >
              Responde para finalizar
            </button>
          )
        ) : (
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={!canProceed}
            className={`flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg px-4 text-base font-semibold transition-all active:scale-[0.98] ${
              canProceed
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'cursor-not-allowed bg-zinc-200 text-zinc-400'
            }`}
          >
            Siguiente ejercicio →
          </button>
        )}
      </div>

      {/* Reiniciar progreso */}
      <footer className="mt-8 flex flex-col items-center border-t border-zinc-200 pt-5">
        {confirmReset ? (
          <div className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white p-4 text-center shadow-sm">
            <p className="text-sm font-medium text-zinc-800">
              ¿Reiniciar todo? Perderás tu avance en esta práctica.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="flex min-h-[48px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex min-h-[48px] flex-1 items-center justify-center rounded-lg bg-red-600 px-4 text-sm font-semibold text-white transition-all hover:bg-red-700 active:scale-[0.98]"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="flex min-h-[44px] items-center px-2 text-xs text-zinc-400 transition-colors hover:text-zinc-600"
          >
            Reiniciar progreso
          </button>
        )}
      </footer>

      {/* Drawer inferior de teoría */}
      {showTheory && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Teoría"
        >
          <div
            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
            onClick={() => setShowTheory(false)}
          />
          <div className="relative flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-2xl bg-zinc-50 shadow-2xl sm:max-w-lg">
            <div className="flex shrink-0 items-center justify-center pt-2">
              <div className="h-1 w-10 rounded-full bg-zinc-300" aria-hidden="true" />
            </div>
            <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-4 py-3">
              <h2 className="text-base font-semibold text-zinc-900">📖 Teoría</h2>
              <button
                type="button"
                onClick={() => setShowTheory(false)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-3 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-100 active:scale-[0.98]"
              >
                Listo
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <TheoryView practice={practice} embedded />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
