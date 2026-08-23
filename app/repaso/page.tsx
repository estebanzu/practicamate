'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ExerciseOption } from '@/data/practices';
import { practices } from '@/data/practices';
import LatexRenderer from '@/components/LatexRenderer';
import DiagramSvg from '@/components/DiagramSvg';
import FeedbackBox from '@/components/FeedbackBox';
import { recordAnswer } from '@/lib/progress';
import { collectRepaso, contarErrores, type ItemRepaso } from '@/lib/repaso';
import { shuffleOptions } from '@/lib/simulacro';

interface EstadoItem {
  seleccion: string | null;
  correcto: boolean;
}

function optionClasses(option: ExerciseOption, estado: EstadoItem | undefined): string {
  const base =
    'flex min-h-[52px] w-full items-center rounded-lg border px-4 text-left text-[15px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 active:scale-[0.98]';
  if (estado?.correcto) {
    if (option.isCorrect) return `${base} border-emerald-300 bg-emerald-50 text-emerald-900`;
    if (estado.seleccion === option.id) return `${base} border-red-300 bg-red-50 text-red-900`;
    return `${base} border-zinc-200 bg-white text-zinc-400`;
  }
  if (estado && estado.seleccion === option.id) {
    return option.isCorrect
      ? `${base} border-emerald-300 bg-emerald-50 text-emerald-900`
      : `${base} border-red-400 bg-red-50 text-red-900`;
  }
  if (estado?.seleccion === null) {
    // reintentando tras un error
    return `${base} border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50`;
  }
  return `${base} border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50`;
}

export default function RepasoPage() {
  const [listo, setListo] = useState(false);
  const [incluirReintentados, setIncluirReintentados] = useState(false);
  const [items, setItems] = useState<ItemRepaso[]>([]);
  const [estados, setEstados] = useState<Record<string, EstadoItem>>({});
  const [pasos, setPasos] = useState<Record<string, number>>({});
  const [actual, setActual] = useState(0);
  const [intentosSesion, setIntentosSesion] = useState(0);
  const [conteo, setConteo] = useState({ pendientes: 0, reintentados: 0 });

  useEffect(() => {
    setConteo(contarErrores(practices));
    setItems(collectRepaso(practices, false));
    setListo(true);
  }, []);

  const alternarAlcance = useCallback((incluir: boolean) => {
    setIncluirReintentados(incluir);
    setItems((prevItems) => {
      const prevMap = new Map(prevItems.map((i) => [i.key, i]));
      const nuevos = collectRepaso(practices, incluir);
      // Conserva el orden del banco; mantiene estados de sesión existentes.
      return nuevos.map((n) => prevMap.get(n.key) ?? n);
    });
  }, []);

  function elegir(item: ItemRepaso, optionId: string) {
    const estado = estados[item.key];
    if (estado?.correcto) return;
    const isCorrect = item.exercise.options.find((o) => o.id === optionId)?.isCorrect ?? false;
    setEstados((prev) => ({ ...prev, [item.key]: { seleccion: optionId, correcto: isCorrect } }));
    setIntentosSesion((n) => n + 1);
    // Sincroniza con el progreso global: al acertar desaparece de futuros repasos.
    recordAnswer(item.practiceId, item.exercise.id, optionId, isCorrect);
  }

  function reintentar(item: ItemRepaso) {
    setEstados((prev) => ({ ...prev, [item.key]: { seleccion: null, correcto: false } }));
  }

  function revelarPaso(key: string, total: number) {
    setPasos((prev) => ({ ...prev, [key]: Math.min((prev[key] ?? 0) + 1, total) }));
  }

  const corregidos = useMemo(
    () => items.filter((i) => estados[i.key]?.correcto).length,
    [items, estados]
  );
  const completado = listo && items.length > 0 && corregidos === items.length;

  const item = items[actual];
  const estado = item ? estados[item.key] : undefined;
  const opciones = useMemo(
    () =>
      item ? shuffleOptions(item.exercise.options, `${item.practiceId}:${item.exercise.id}`) : [],
    [item]
  );
  const pasosVisibles = item ? (pasos[item.key] ?? 0) : 0;
  const opcionElegida =
    item && estado?.seleccion
      ? (item.exercise.options.find((o) => o.id === estado.seleccion) ?? null)
      : null;
  const feedback =
    opcionElegida && (estado?.correcto || !opcionElegida.isCorrect)
      ? opcionElegida.feedback
      : undefined;

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
          <div className="min-w-0 flex-1 text-center">
            <p className="truncate text-sm font-semibold text-zinc-900">🔁 Repaso de errores</p>
            {items.length > 0 && (
              <p className="truncate text-xs text-zinc-500">
                {corregidos} de {items.length} corregidos · {intentosSesion} intentos
              </p>
            )}
          </div>
          <span className="w-11" />
        </div>
        {items.length > 0 && (
          <div className="pb-2">
            <div
              role="progressbar"
              aria-valuenow={corregidos}
              aria-valuemin={0}
              aria-valuemax={items.length}
              className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200"
            >
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${Math.round((corregidos / items.length) * 100)}%` }}
              />
            </div>
          </div>
        )}
      </header>

      {!listo ? null : items.length === 0 ? (
        <section className="mt-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-center shadow-sm">
          <p className="text-base font-semibold text-emerald-900">🎉 No hay nada por repasar</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-emerald-800">
            {conteo.pendientes === 0 && conteo.reintentados === 0
              ? 'Todavía no has fallado ningún ejercicio. Resuelve prácticas y los errores aparecerán aquí automáticamente.'
              : '¡Corregiste todos tus errores! Sigue resolviendo prácticas nuevas.'}
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
          >
            Ver prácticas →
          </Link>
        </section>
      ) : (
        <>
          {/* Alcance del repaso */}
          <section className="mt-4 flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-600">
              {conteo.pendientes} sin resolver · {conteo.reintentados} resueltos con reintentos
            </p>
            <button
              type="button"
              role="switch"
              aria-checked={incluirReintentados}
              onClick={() => alternarAlcance(!incluirReintentados)}
              className={`flex min-h-[40px] shrink-0 items-center justify-center gap-2 rounded-lg border px-3 text-xs font-semibold transition-all active:scale-[0.98] ${
                incluirReintentados
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-zinc-300 bg-white text-zinc-600'
              }`}
            >
              {incluirReintentados ? '✓' : ''} Incluir resueltos con reintentos
            </button>
          </section>

          {completado && (
            <section className="animate-enter mt-4 rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-900 shadow-sm">
              <p className="text-base font-semibold">🎉 ¡Repaso completo!</p>
              <p className="mt-1 text-sm leading-relaxed text-emerald-800">
                Corregiste los {items.length} ejercicios en {intentosSesion} intentos de esta
                sesión. Tu progreso quedó guardado en cada práctica.
              </p>
              <Link
                href="/"
                className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
              >
                Volver a prácticas →
              </Link>
            </section>
          )}

          {/* Tarjeta del ejercicio actual */}
          {item && (
            <article
              key={item.key}
              className="animate-enter mt-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h1 className="text-sm font-medium text-zinc-500">{item.practiceTitle}</h1>
                {estado?.correcto ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                    ✓ Corregido
                  </span>
                ) : estado?.seleccion ? (
                  <button
                    type="button"
                    onClick={() => reintentar(item)}
                    className="inline-flex min-h-[32px] items-center gap-1 rounded-full border border-red-300 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-800 transition-all hover:bg-red-100 active:scale-[0.98]"
                  >
                    ↺ Reintentar
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                    Fallado antes
                  </span>
                )}
              </div>

              <div className="mt-3 text-base leading-relaxed text-zinc-900">
                <LatexRenderer content={item.exercise.statementLatex} />
              </div>
              {item.exercise.diagramSvg && <DiagramSvg svg={item.exercise.diagramSvg} />}

              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-400">
                Responde correctamente para sacarlo del repaso
              </p>
              <fieldset className="mt-3" disabled={estado?.correcto ?? false}>
                <legend className="sr-only">Opciones de respuesta</legend>
                <div className="space-y-3">
                  {opciones.map((option, index) => {
                    const letter = String.fromCharCode(65 + index);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => elegir(item, option.id)}
                        disabled={estado?.correcto}
                        className={optionClasses(option, estado)}
                      >
                        <span className="flex w-full items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                              estado?.seleccion === option.id
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

              {feedback && (
                <FeedbackBox
                  key={`${item.key}-${estado?.seleccion}`}
                  status={estado?.correcto ? 'correct' : 'retry'}
                  feedback={feedback}
                />
              )}

              {/* Paso a paso */}
              <div className="mt-5 border-t border-zinc-100 pt-4">
                {pasosVisibles === 0 ? (
                  <button
                    type="button"
                    onClick={() => revelarPaso(item.key, item.exercise.steps.length)}
                    className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
                  >
                    💡 ¿Cómo se resuelve? Ver paso a paso
                  </button>
                ) : (
                  <ol className="space-y-3">
                    {item.exercise.steps.slice(0, pasosVisibles).map((step) => (
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
                    {pasosVisibles < item.exercise.steps.length && (
                      <button
                        type="button"
                        onClick={() => revelarPaso(item.key, item.exercise.steps.length)}
                        className="flex min-h-[48px] w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
                      >
                        Siguiente paso ({pasosVisibles}/{item.exercise.steps.length})
                      </button>
                    )}
                  </ol>
                )}
              </div>
            </article>
          )}

          {/* Navegación */}
          <div
            className="mt-5 flex flex-wrap gap-1.5"
            role="navigation"
            aria-label="Ir a ejercicio"
          >
            {items.map((it, i) => (
              <button
                key={it.key}
                type="button"
                onClick={() => setActual(i)}
                aria-label={`Ejercicio ${i + 1}`}
                aria-current={i === actual}
                className={`flex h-9 min-w-[36px] items-center justify-center rounded-md border px-1.5 text-xs font-semibold transition-all active:scale-95 ${
                  i === actual
                    ? 'border-indigo-600 bg-indigo-600 text-white'
                    : estados[it.key]?.correcto
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                      : estados[it.key]?.seleccion
                        ? 'border-red-300 bg-red-50 text-red-800'
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
              onClick={() => setActual(Math.min(items.length - 1, actual + 1))}
              disabled={actual === items.length - 1}
              className="flex min-h-[48px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        </>
      )}
    </main>
  );
}
