'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { PracticeUnit } from '@/data/practices';
import { countSolved, loadPracticeProgress } from '@/lib/progress';

interface ContinueCardProps {
  practices: PracticeUnit[];
}

export default function ContinueCard({ practices }: ContinueCardProps) {
  const [practice, setPractice] = useState<PracticeUnit | null>(null);
  const [solved, setSolved] = useState(0);

  useEffect(() => {
    let best: PracticeUnit | null = null;
    let bestSolved = 0;
    for (const p of practices) {
      const count = countSolved(loadPracticeProgress(p.id));
      if (count > 0 && count < p.exercises.length && count > bestSolved) {
        best = p;
        bestSolved = count;
      }
    }
    setPractice(best);
    setSolved(bestSolved);
  }, [practices]);

  if (!practice) return null;

  const total = practice.exercises.length;
  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);

  return (
    <section
      aria-label="Continuar donde quedaste"
      className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
        Continúa donde quedaste
      </p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-zinc-900">{practice.title}</h2>
          <p className="mt-0.5 text-sm text-zinc-600">
            {solved} de {total} resueltos · {percent}%
          </p>
        </div>
        <Link
          href={`/practica/${practice.id}/ejercicios`}
          className="flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
        >
          Continuar →
        </Link>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={solved}
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-indigo-100"
      >
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  );
}
