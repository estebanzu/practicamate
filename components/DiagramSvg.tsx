'use client';

interface DiagramSvgProps {
  svg: string;
  className?: string;
}

/**
 * Renderiza un diagrama SVG generado por lib/diagrams.ts (contenido estático
 * propio del proyecto, por lo que el uso de dangerouslySetInnerHTML es seguro).
 */
export default function DiagramSvg({ svg, className = '' }: DiagramSvgProps) {
  return (
    <figure
      className={`mt-3 overflow-x-auto rounded-lg border border-zinc-200 bg-white p-3 ${className}`}
    >
      <div
        className="mx-auto w-full max-w-[420px]"
        // Contenido SVG generado localmente en lib/diagrams.ts (confiable).
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </figure>
  );
}
