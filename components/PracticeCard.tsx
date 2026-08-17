'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { PracticeUnit } from '@/data/practices';
import { countSolved, loadPracticeProgress } from '@/lib/progress';
import LatexRenderer from './LatexRenderer';

interface PracticeCardProps {
  practice: PracticeUnit;
}

export default function PracticeCard({ practice }: PracticeCardProps) {
  const total = practice.exercises.length;
  const [solved, setSolved] = useState(0);

  useEffect(() => {
    const progress = loadPracticeProgress(practice.id);
    if (progress) setSolved(countSolved(progress));
  }, [practice.id]);

  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-indigo-600">
          {practice.subject}
        </span>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${
            solved === total
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-zinc-200 bg-zinc-50 text-zinc-600'
          }`}
        >
          {solved} de {total} resueltos
        </span>
      </div>

      <div>
        <h2 className="text-lg font-semibold leading-snug text-zinc-900">{practice.title}</h2>
        <div className="mt-1.5 text-sm leading-relaxed text-zinc-600">
          <LatexRenderer content={practice.description} />
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={solved}
        aria-label={`${solved} de ${total} ejercicios resueltos`}
        className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100"
      >
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <Link
          href={`/practica/${practice.id}/ejercicios`}
          className="flex min-h-[52px] w-full flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
        >
          Comenzar Práctica
        </Link>
        <Link
          href={`/practica/${practice.id}/teoria`}
          className="flex min-h-[52px] w-full flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
        >
          Ver Teoría
        </Link>
      </div>
    </article>
  );
}
