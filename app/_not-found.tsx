import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-zinc-900">404</h1>
      <p className="mt-4 text-zinc-600">Página no encontrada</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-[0.98]"
      >
        ← Volver al inicio
      </Link>
    </main>
  );
}
