'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadLastResult } from '@/lib/simulacro';

export default function SimulacroCard() {
  const [ultimo, setUltimo] = useState<ReturnType<typeof loadLastResult>>(null);

  useEffect(() => {
    setUltimo(loadLastResult());
  }, []);

  return (
    <section
      aria-label="Simulacro de examen"
      className="mt-4 rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-900 to-zinc-700 p-5 text-white shadow-sm"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
            Modo examen · cronometrado
          </p>
          <h2 className="mt-1 text-lg font-semibold">📝 Simulacro de prueba trimestral</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300">
            Preguntas al azar de todo el banco, sin pistas hasta el final y con tiempo límite.
            {ultimo && (
              <span className="block text-xs text-indigo-200">
                Último intento: {ultimo.correctas}/{ultimo.total} correctas
              </span>
            )}
          </p>
        </div>
        <Link
          href="/simulacro"
          className="flex min-h-[48px] shrink-0 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-100 active:scale-[0.98]"
        >
          Iniciar simulacro →
        </Link>
      </div>
    </section>
  );
}
