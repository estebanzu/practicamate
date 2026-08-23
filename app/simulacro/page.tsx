'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { practices } from '@/data/practices';
import type { ExerciseOption } from '@/data/practices';
import LatexRenderer from '@/components/LatexRenderer';
import DiagramSvg from '@/components/DiagramSvg';
import {
  type BloqueSimulacro,
  type ConfigSimulacro,
  type PreguntaSimulacro,
  filterUnits,
  formatTime,
  loadLastResult,
  sampleQuestions,
  saveLastResult,
  shuffleOptions,
} from '@/lib/simulacro';

type Fase = 'config' | 'examen' | 'resultados';

interface Respuestas {
  [key: string]: string | null;
}

const LONGITUDES = [
  { cantidad: 5, label: 'Rápido', detalle: '5 preguntas' },
  { cantidad: 10, label: 'Media prueba', detalle: '10 preguntas' },
  { cantidad: 20, label: 'Prueba completa', detalle: '20 preguntas' },
];

const SEGUNDOS_POR_PREGUNTA = 90;

const BLOQUES: { id: BloqueSimulacro; label: string; detalle: string }[] = [
  { id: 'todos', label: 'Todos los temas', detalle: 'Trigonometría + Álgebra' },
  { id: 'trigonometria', label: 'Trigonometría', detalle: 'Elevación/depresión · ley de senos' },
  {
    id: 'algebra',
    label: 'Álgebra',
    detalle: 'Factorización · expresiones racionales',
  },
];

function poolSize(bloque: BloqueSimulacro): number {
  return filterUnits(practices, bloque).reduce((acc, p) => acc + p.exercises.length, 0);
}

function optionClasses(option: ExerciseOption, selectedId: string | null, revealed: boolean) {
  const base =
    'flex min-h-[52px] w-full items-center rounded-lg border px-4 text-left text-[15px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-[0.98]';
  if (revealed) {
    if (option.isCorrect) return `${base} border-emerald-300 bg-emerald-50 text-emerald-900`;
    if (selectedId === option.id) return `${base} border-red-300 bg-red-50 text-red-900`;
    return `${base} border-zinc-200 bg-white text-zinc-400`;
  }
  if (selectedId === option.id)
    return `${base} border-indigo-500 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-500`;
  return `${base} border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50`;
}

export default function SimulacroPage() {
  const [fase, setFase] = useState<Fase>('config');
  const [bloque, setBloque] = useState<BloqueSimulacro>('todos');
  const [cantidad, setCantidad] = useState(10);
  const [preguntas, setPreguntas] = useState<PreguntaSimulacro[]>([]);
  const [respuestas, setRespuestas] = useState<Respuestas>({});
  const [actual, setActual] = useState(0);
  const [segundosRestantes, setSegundosRestantes] = useState(0);
  const [segundosUsados, setSegundosUsados] = useState(0);
  const [entregado, setEntregado] = useState(false);
  const [confirmarEntrega, setConfirmarEntrega] = useState(false);
  const [stepsShown, setStepsShown] = useState<Record<string, number>>({});
  const [ultimoResultado, setUltimoResultado] = useState<ReturnType<typeof loadLastResult>>(null);
  const deadlineRef = useRef<number>(0);

  useEffect(() => {
    setUltimoResultado(loadLastResult());
  }, []);

  // Cuenta regresiva del examen.
  useEffect(() => {
    if (fase !== 'examen') return;
    const tick = () => {
      const restantes = Math.max(0, Math.round((deadlineRef.current - Date.now()) / 1000));
      setSegundosRestantes(restantes);
      if (restantes <= 0) entregar(true);
    };
    tick();
    const interval = setInterval(tick, 250);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  function iniciar() {
    const config: ConfigSimulacro = {
      bloque,
      cantidad,
      segundosPorPregunta: SEGUNDOS_POR_PREGUNTA,
    };
    const seleccionadas = sampleQuestions(practices, config);
    if (seleccionadas.length === 0) return;
    const iniciales: Respuestas = {};
    for (const p of seleccionadas) iniciales[p.key] = null;
    setPreguntas(seleccionadas);
    setRespuestas(iniciales);
    setActual(0);
    setStepsShown({});
    setEntregado(false);
    setConfirmarEntrega(false);
    deadlineRef.current = Date.now() + seleccionadas.length * SEGUNDOS_POR_PREGUNTA * 1000;
    setSegundosRestantes(seleccionadas.length * SEGUNDOS_POR_PREGUNTA);
    setFase('examen');
  }

  function elegir(key: string, optionId: string) {
    setRespuestas((prev) => ({ ...prev, [key]: prev[key] === optionId ? null : optionId }));
  }

  const entregar = useCallback(
    (porTiempo = false) => {
      setSegundosUsados(() =>
        porTiempo
          ? preguntas.length * SEGUNDOS_POR_PREGUNTA
          : Math.min(
              preguntas.length * SEGUNDOS_POR_PREGUNTA,
              Math.max(
                1,
                preguntas.length * SEGUNDOS_POR_PREGUNTA -
                  Math.round((deadlineRef.current - Date.now()) / 1000)
              )
            )
      );
      setEntregado(true);
      setConfirmarEntrega(false);
      setFase('resultados');
    },
    [preguntas]
  );

  // Persiste el resultado cuando entra a la fase de resultados.
  useEffect(() => {
    if (fase !== 'resultados' || preguntas.length === 0) return;
    const correctas = preguntas.filter((p) => {
      const elegida = respuestas[p.key];
      return (
        elegida !== null && p.exercise.options.find((o) => o.id === elegida)?.isCorrect === true
      );
    }).length;
    saveLastResult({
      fecha: new Date().toISOString(),
      bloque,
      correctas,
      total: preguntas.length,
      segundosUsados,
    });
    setUltimoResultado(loadLastResult());
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  const respondidas = useMemo(
    () => preguntas.filter((p) => respuestas[p.key] !== null).length,
    [preguntas, respuestas]
  );
  const correctasCount = useMemo(
    () =>
      entregado || fase === 'resultados'
        ? preguntas.filter((p) => {
            const elegida = respuestas[p.key];
            return (
              elegida !== null &&
              p.exercise.options.find((o) => o.id === elegida)?.isCorrect === true
            );
          }).length
        : 0,
    [fase, entregado, preguntas, respuestas]
  );

  function revealStep(key: string, total: number) {
    setStepsShown((prev) => ({ ...prev, [key]: Math.min((prev[key] ?? 0) + 1, total) }));
  }

  // ------------------------------------------------------------------ CONFIG
  if (fase === 'config') {
    const totalTiempo = Math.round((cantidad * SEGUNDOS_POR_PREGUNTA) / 60);
    return (
      <main className="mx-auto w-full max-w-2xl px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
        <header className="flex items-center justify-between gap-2 py-2">
          <Link
            href="/"
            aria-label="Volver al inicio"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-xl text-zinc-600 transition-all hover:bg-zinc-200/60 active:scale-95"
          >
            ←
          </Link>
          <h1 className="text-base font-semibold text-zinc-900">📝 Simulacro de examen</h1>
          <span className="w-11" />
        </header>

        <section className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm leading-relaxed text-zinc-600">
            Responde bajo condiciones de examen: sin retroalimentación hasta el final y con tiempo
            límite ({SEGUNDOS_POR_PREGUNTA}s por pregunta). Al terminar verás tu nota y la solución
            paso a paso de cada ejercicio.
          </p>

          <fieldset className="mt-5">
            <legend className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Temas incluidos
            </legend>
            <div className="mt-2 grid gap-2">
              {BLOQUES.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBloque(b.id)}
                  aria-pressed={bloque === b.id}
                  className={`flex min-h-[56px] items-center justify-between rounded-lg border px-4 py-3 text-left transition-all active:scale-[0.98] ${
                    bloque === b.id
                      ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500'
                      : 'border-zinc-200 bg-white hover:border-zinc-400'
                  }`}
                >
                  <span>
                    <span className="block text-sm font-semibold text-zinc-900">{b.label}</span>
                    <span className="block text-xs text-zinc-500">{b.detalle}</span>
                  </span>
                  <span className="text-xs font-medium text-zinc-400">
                    {poolSize(b.id)} ejercicios
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Extensión
            </legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {LONGITUDES.map((l) => (
                <button
                  key={l.cantidad}
                  type="button"
                  onClick={() => setCantidad(l.cantidad)}
                  aria-pressed={cantidad === l.cantidad}
                  className={`flex min-h-[64px] flex-col items-center justify-center rounded-lg border px-2 transition-all active:scale-[0.98] ${
                    cantidad === l.cantidad
                      ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500'
                      : 'border-zinc-200 bg-white hover:border-zinc-400'
                  }`}
                >
                  <span className="text-sm font-semibold text-zinc-900">{l.label}</span>
                  <span className="text-xs text-zinc-500">{l.detalle}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <p className="mt-4 rounded-lg bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
            ⏱️ Tiempo total: <strong>{totalTiempo} minutos</strong> para {cantidad} preguntas.
          </p>

          <button
            type="button"
            onClick={iniciar}
            className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-base font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
          >
            Comenzar simulacro →
          </button>

          {ultimoResultado && (
            <p className="mt-4 text-center text-xs text-zinc-500">
              Último intento: {ultimoResultado.correctas}/{ultimoResultado.total} correctas ·{' '}
              {formatTime(ultimoResultado.segundosUsados)}
            </p>
          )}
        </section>
      </main>
    );
  }

  // ------------------------------------------------------------------- EXAMEN
  if (fase === 'examen') {
    const pregunta = preguntas[actual];
    const opciones = shuffleOptions(
      pregunta.exercise.options,
      `${pregunta.practiceId}:${pregunta.exercise.id}`
    );
    const totalSegundos = preguntas.length * SEGUNDOS_POR_PREGUNTA;
    const urgente = segundosRestantes <= totalSegundos * 0.15;
    const sinResponder = preguntas.length - respondidas;

    return (
      <main className="mx-auto w-full max-w-3xl px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
        <header className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-zinc-50/95 px-4 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-2 py-2">
            <div
              role="timer"
              aria-label={`Tiempo restante ${formatTime(segundosRestantes)}`}
              className={`flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-bold tabular-nums ${
                urgente ? 'bg-red-50 text-red-700' : 'bg-white text-zinc-700 ring-1 ring-zinc-200'
              }`}
            >
              ⏱ {formatTime(segundosRestantes)}
            </div>
            <div className="min-w-0 flex-1 text-center">
              <p className="truncate text-sm font-semibold text-zinc-900">
                Pregunta {actual + 1} de {preguntas.length}
              </p>
              <p className="truncate text-xs text-zinc-500">{respondidas} respondidas</p>
            </div>
            {confirmarEntrega ? (
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  onClick={() => entregar(false)}
                  className="flex min-h-[40px] items-center rounded-lg bg-red-600 px-3 text-xs font-semibold text-white transition-all hover:bg-red-700 active:scale-[0.98]"
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmarEntrega(false)}
                  className="flex min-h-[40px] items-center rounded-lg border border-zinc-300 bg-white px-3 text-xs font-medium text-zinc-600 active:scale-[0.98]"
                >
                  No
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmarEntrega(true)}
                className="flex min-h-[40px] shrink-0 items-center rounded-lg bg-indigo-600 px-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
              >
                Entregar
              </button>
            )}
          </div>
        </header>

        <article
          key={pregunta.key}
          className="animate-enter mt-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
        >
          <p className="text-xs font-medium text-zinc-400">{pregunta.practiceTitle}</p>
          <div className="mt-2 text-base leading-relaxed text-zinc-900">
            <LatexRenderer content={pregunta.exercise.statementLatex} />
          </div>
          {pregunta.exercise.diagramSvg && <DiagramSvg svg={pregunta.exercise.diagramSvg} />}

          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-400">
            Marca una opción (podrás cambiarla antes de entregar)
          </p>
          <div className="mt-3 space-y-3">
            {opciones.map((option, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => elegir(pregunta.key, option.id)}
                  className={optionClasses(option, respuestas[pregunta.key], false)}
                >
                  <span className="flex w-full items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                        respuestas[pregunta.key] === option.id
                          ? 'border-indigo-500 text-indigo-700'
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
        </article>

        {/* Mapa de preguntas */}
        <div className="mt-4 flex flex-wrap gap-1.5" role="navigation" aria-label="Ir a pregunta">
          {preguntas.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setActual(i)}
              aria-label={`Pregunta ${i + 1}`}
              aria-current={i === actual}
              className={`flex h-9 w-9 items-center justify-center rounded-md border text-xs font-semibold transition-all active:scale-95 ${
                i === actual
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : respuestas[p.key] !== null
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                    : 'border-zinc-200 bg-white text-zinc-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setActual(Math.max(0, actual - 1))}
            disabled={actual === 0}
            className="flex min-h-[48px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Anterior
          </button>
          <button
            type="button"
            onClick={() => setActual(Math.min(preguntas.length - 1, actual + 1))}
            disabled={actual === preguntas.length - 1}
            className="flex min-h-[48px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Siguiente →
          </button>
        </div>

        {sinResponder > 0 && confirmarEntrega && (
          <p className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700">
            Tienes {sinResponder} pregunta(s) sin responder.
          </p>
        )}
      </main>
    );
  }

  // --------------------------------------------------------------- RESULTADOS
  const percent =
    preguntas.length === 0 ? 0 : Math.round((correctasCount / preguntas.length) * 100);
  const mensaje =
    percent >= 90
      ? '¡Excelente! Estás lista para el examen. 🏆'
      : percent >= 70
        ? 'Muy bien. Repasa los errores y vuelve a intentarlo. 💪'
        : percent >= 50
          ? 'Vas por buen camino. Repasa el paso a paso de tus errores.'
          : 'Con calma: revisa la teoría y los pasos de cada ejercicio, luego reintenta.';

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 sm:px-6">
      <header className="sticky top-0 z-30 -mx-4 border-b border-zinc-200 bg-zinc-50/95 px-4 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between gap-2 py-2">
          <Link
            href="/"
            aria-label="Volver al inicio"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-xl text-zinc-600 transition-all hover:bg-zinc-200/60 active:scale-95"
          >
            ←
          </Link>
          <h1 className="text-base font-semibold text-zinc-900">Resultados del simulacro</h1>
          <span className="w-11" />
        </div>
      </header>

      <section className="animate-enter mt-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 text-center shadow-sm sm:p-6">
        <p className="text-4xl font-bold tabular-nums text-indigo-700">
          {correctasCount}
          <span className="text-2xl text-indigo-400">/{preguntas.length}</span>
        </p>
        <p className="mt-1 text-sm font-semibold text-indigo-600">{percent}% de aciertos</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{mensaje}</p>
        <p className="mt-2 text-xs text-zinc-500">
          Tiempo empleado: {formatTime(segundosUsados)} de{' '}
          {formatTime(preguntas.length * SEGUNDOS_POR_PREGUNTA)}
        </p>
      </section>

      <section aria-label="Revisión de preguntas" className="mt-5 space-y-4">
        {preguntas.map((p, i) => {
          const elegida = respuestas[p.key];
          const correcta = p.exercise.options.find((o) => o.isCorrect);
          const acierto = elegida !== null && correcta?.id === elegida;
          const opciones = shuffleOptions(p.exercise.options, `${p.practiceId}:${p.exercise.id}`);
          const steps = stepsShown[p.key] ?? 0;
          return (
            <article
              key={p.key}
              className={`rounded-xl border bg-white p-5 shadow-sm ${
                acierto ? 'border-emerald-200' : 'border-red-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-sm font-semibold text-zinc-700">
                  {i + 1}. {p.exercise.title}
                </h2>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                    acierto
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : 'border-red-300 bg-red-50 text-red-800'
                  }`}
                >
                  {acierto ? '✓ Correcta' : elegida === null ? 'Sin responder' : '✗ Incorrecta'}
                </span>
              </div>

              <div className="mt-3 text-[15px] leading-relaxed text-zinc-900">
                <LatexRenderer content={p.exercise.statementLatex} />
              </div>
              {p.exercise.diagramSvg && <DiagramSvg svg={p.exercise.diagramSvg} />}

              {!acierto && (
                <div className="mt-3 space-y-1.5 rounded-lg bg-zinc-50 p-3 text-sm">
                  <p className="text-zinc-600">
                    Tu respuesta:{' '}
                    {elegida ? (
                      <LatexRenderer
                        content={
                          p.exercise.options.find((o) => o.id === elegida)?.labelLatex ?? '—'
                        }
                      />
                    ) : (
                      <em>ninguna</em>
                    )}
                  </p>
                  <p className="font-medium text-emerald-800">
                    Correcta: <LatexRenderer content={correcta?.labelLatex ?? ''} /> —{' '}
                    {correcta?.feedback}
                  </p>
                </div>
              )}

              {acierto && (
                <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
                  ✓ {correcta?.feedback}
                </p>
              )}

              {/* Paso a paso */}
              <div className="mt-4 border-t border-zinc-100 pt-3">
                {steps === 0 ? (
                  <button
                    type="button"
                    onClick={() => revealStep(p.key, p.exercise.steps.length)}
                    className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
                  >
                    💡 Ver paso a paso
                  </button>
                ) : (
                  <ol className="space-y-2.5">
                    {p.exercise.steps.slice(0, steps).map((step) => (
                      <li
                        key={step.stepNumber}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 p-3"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                            {step.stepNumber}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm leading-relaxed text-zinc-700">
                              {step.explanation}
                            </p>
                            {step.mathLatex && (
                              <div className="mt-1.5 overflow-x-auto text-zinc-900">
                                <LatexRenderer content={`$$${step.mathLatex}$$`} />
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                    {steps < p.exercise.steps.length && (
                      <button
                        type="button"
                        onClick={() => revealStep(p.key, p.exercise.steps.length)}
                        className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
                      >
                        Siguiente paso ({steps}/{p.exercise.steps.length})
                      </button>
                    )}
                  </ol>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => setFase('config')}
          className="flex min-h-[52px] flex-1 items-center justify-center rounded-lg bg-indigo-600 px-4 text-base font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
        >
          🔄 Nuevo simulacro
        </button>
        <Link
          href="/"
          className="flex min-h-[52px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-base font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
        >
          Volver a prácticas
        </Link>
      </div>
    </main>
  );
}
