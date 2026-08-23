'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { PracticeUnit } from '@/data/practices';
import { contarErrores } from '@/lib/repaso';

interface RepasoCardProps {
  practices: PracticeUnit[];
}

export default function RepasoCard({ practices }: RepasoCardProps) {
  const [conteo, setConteo] = useState({ pendientes: 0, reintentados: 0 });

  useEffect(() => {
    setConteo(contarErrores(practices));
  }, [practices]);

  if (conteo.pendientes === 0 && conteo.reintentados === 0) return null;

  return (
    <section
      aria-label="Repaso de errores"
      className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-5 shadow-sm"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            Aprende de tus errores
          </p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">🔁 Repaso de errores</h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600">
            {conteo.pendientes > 0 && (
              <span>
                <strong>{conteo.pendientes}</strong> sin resolver
              </span>
            )}
            {conteo.pendientes > 0 && conteo.reintentados > 0 && <span> · </span>}
            {conteo.reintentados > 0 && (
              <span>
                <strong>{conteo.reintentados}</strong> resueltos con reintentos
              </span>
            )}
          </p>
        </div>
        <Link
          href="/repaso"
          className="flex min-h-[48px] shrink-0 items-center justify-center rounded-lg bg-amber-600 px-5 text-sm font-semibold text-white transition-all hover:bg-amber-700 active:scale-[0.98]"
        >
          Repasar ahora →
        </Link>
      </div>
    </section>
  );
}
