interface PdfDownload {
  filename: string;
  title: string;
  description: string;
  size: string;
}

const downloads: PdfDownload[] = [
  {
    filename: 'practica02.pdf',
    title: 'Práctica adicional 2',
    description: 'Factorización: factor común, agrupación, inspección, binomios y combinados.',
    size: '663 KB',
  },
  {
    filename: 'practica03.pdf',
    title: 'Práctica adicional 3',
    description: 'Factorización, simplificación y operaciones con expresiones racionales.',
    size: '455 KB',
  },
];

export default function PdfDownloads() {
  return (
    <section aria-labelledby="soluciones-title" className="mt-10 border-t border-zinc-200 pt-8">
      <div className="flex items-center justify-between gap-3">
        <h2 id="soluciones-title" className="text-base font-semibold text-zinc-900">
          📄 Soluciones y guías (PDF)
        </h2>
        <p className="text-xs text-zinc-500">Base de todas las soluciones</p>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
        Descarga el documento oficial con todos los ejercicios y sus soluciones.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {downloads.map((doc) => (
          <article
            key={doc.filename}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-zinc-900">{doc.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{doc.description}</p>
              </div>
              <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-500">
                {doc.size}
              </span>
            </div>
            <a
              href={`/pdfs/${doc.filename}`}
              download={doc.filename}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-all hover:bg-zinc-50 active:scale-[0.98]"
            >
              ⬇ Descargar {doc.filename}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
