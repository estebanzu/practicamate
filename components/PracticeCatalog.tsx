'use client';

import { useMemo, useState } from 'react';
import type { PracticeUnit } from '@/data/practices';
import PracticeCard from '@/components/PracticeCard';

export default function PracticeCatalog({ practices }: { practices: PracticeUnit[] }) {
  const [query, setQuery] = useState('');

  const subjects = useMemo(
    () => Array.from(new Set(practices.map((p) => p.subject))).sort(),
    [practices]
  );
  const [subject, setSubject] = useState<string>('Todos');

  const filtered = practices.filter((p) => {
    const matchesQuery =
      query.trim() === '' ||
      p.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      p.description.toLowerCase().includes(query.trim().toLowerCase());
    const matchesSubject = subject === 'Todos' || p.subject === subject;
    return matchesQuery && matchesSubject;
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar práctica por tema…"
          aria-label="Buscar práctica"
          className="w-full min-h-[48px] rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2">
          {['Todos', ...subjects].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSubject(s)}
              aria-pressed={subject === s}
              className={
                subject === s
                  ? 'flex min-h-[48px] items-center rounded-full bg-indigo-600 px-4 text-xs font-medium text-white transition-all active:scale-[0.98]'
                  : 'flex min-h-[48px] items-center rounded-full border border-zinc-300 px-4 text-xs font-medium text-zinc-600 transition-all hover:bg-zinc-100 active:scale-[0.98]'
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-zinc-500">
          No se encontraron prácticas con esos criterios.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PracticeCard key={p.id} practice={p} />
          ))}
        </div>
      )}
    </div>
  );
}
