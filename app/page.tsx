import { practices } from '@/data/practices';
import PracticeCatalog from '@/components/PracticeCatalog';
import PdfDownloads from '@/components/PdfDownloads';
import ContinueCard from '@/components/ContinueCard';

export default function HomePage() {
  const totalExercises = practices.reduce((acc, p) => acc + p.exercises.length, 0);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8 sm:px-6 sm:pt-10">
      <header className="border-b border-zinc-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Álgebra · Noveno nivel
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Matemática en foco
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
          Selecciona una práctica para empezar a repasar y resolver ejercicios.
        </p>
        <p className="mt-3 text-sm text-zinc-500">
          {practices.length} prácticas · {totalExercises} ejercicios · tu progreso se guarda
          automáticamente en este dispositivo.
        </p>
      </header>

      <ContinueCard practices={practices} />

      <section aria-label="Prácticas disponibles" className="py-6">
        <PracticeCatalog practices={practices} />
      </section>

      <PdfDownloads />
    </main>
  );
}
