'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { PracticeUnit } from '@/data/practices';
import LatexRenderer from './LatexRenderer';

interface TheoryViewProps {
  practice: PracticeUnit;
  embedded?: boolean;
}

export default function TheoryView({ practice, embedded = false }: TheoryViewProps) {
  const [openExamples, setOpenExamples] = useState<Record<string, boolean>>({});

  const toggleExample = (key: string) =>
    setOpenExamples((prev) => ({ ...prev, [key]: !prev[key] }));

  const cta = (
    <Link
      href={`/practica/${practice.id}/ejercicios`}
      className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-base font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
    >
      Ir a los Ejercicios →
    </Link>
  );

  if (embedded) {
    return (
      <div>
        <header className="border-b border-zinc-200 pb-4">
          <h2 className="text-lg font-semibold text-zinc-900">{practice.title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600">
            ¿Dudas? Repasa la teoría y los ejemplos antes de responder.
          </p>
        </header>

        <div className="mt-4 space-y-5">
          {practice.theory.map((section, i) => (
            <section key={i}>
              <h3 className="text-base font-semibold text-zinc-900">{section.title}</h3>
              <div className="mt-2 text-[15px] leading-relaxed text-zinc-700">
                <LatexRenderer content={section.contentLatex} />
              </div>
              {section.examples.map((example, j) => {
                const key = `${i}-${j}`;
                const open = !!openExamples[key];
                return (
                  <div key={key} className="mt-3">
                    <button
                      type="button"
                      onClick={() => toggleExample(key)}
                      aria-expanded={open}
                      className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 text-left text-sm font-medium text-zinc-800 transition-all hover:border-zinc-300 active:scale-[0.99]"
                    >
                      <span>{example.title}</span>
                      <span aria-hidden="true" className="shrink-0 text-zinc-400">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && (
                      <div className="mt-2 rounded-lg border border-zinc-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                          Enunciado
                        </p>
                        <div className="mt-1 text-[15px] leading-relaxed text-zinc-700">
                          <LatexRenderer content={example.statementLatex} />
                        </div>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                          Solución
                        </p>
                        <div className="mt-1 text-[15px] leading-relaxed text-zinc-800">
                          <LatexRenderer content={example.solutionLatex} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-[max(6.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-6 sm:pt-8">
      <nav className="mb-5">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-800"
        >
          ← Inicio
        </Link>
      </nav>

      <header className="border-b border-zinc-200 pb-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {practice.subject} · Teoría
        </span>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          {practice.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Lee con calma y revisa los ejemplos resueltos. Luego pasa a los ejercicios para ponerlo en
          práctica.
        </p>
      </header>

      <div className="mt-6 space-y-5">
        {practice.theory.map((section, i) => (
          <section
            key={i}
            className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2 className="text-lg font-semibold text-zinc-900">{section.title}</h2>
            <div className="mt-3 text-base leading-relaxed text-zinc-700">
              <LatexRenderer content={section.contentLatex} />
            </div>

            {section.examples.length > 0 && (
              <div className="mt-5 border-t border-zinc-100 pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  Ejemplos resueltos
                </p>
                {section.examples.map((example, j) => {
                  const key = `${i}-${j}`;
                  const open = !!openExamples[key];
                  return (
                    <div key={key} className="mb-3 last:mb-0">
                      <button
                        type="button"
                        onClick={() => toggleExample(key)}
                        aria-expanded={open}
                        className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 text-left text-sm font-medium text-zinc-800 transition-all hover:border-zinc-300 active:scale-[0.99]"
                      >
                        <span>
                          {open ? 'Ocultar' : 'Ver'} · {example.title}
                        </span>
                        <span aria-hidden="true" className="shrink-0 text-zinc-400">
                          {open ? '−' : '+'}
                        </span>
                      </button>
                      {open && (
                        <div className="mt-2 rounded-lg border border-zinc-200 bg-white p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                            Enunciado
                          </p>
                          <div className="mt-1 text-base leading-relaxed text-zinc-700">
                            <LatexRenderer content={example.statementLatex} />
                          </div>
                          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                            Solución
                          </p>
                          <div className="mt-1 text-base leading-relaxed text-zinc-800">
                            <LatexRenderer content={example.solutionLatex} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto max-w-3xl">{cta}</div>
      </div>
    </main>
  );
}
