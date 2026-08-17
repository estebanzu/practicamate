'use client';

import katex from 'katex';
import { useMemo } from 'react';

// ---------------------------------------------------------------------------
// Renderizado de LaTeX: cadenas con texto mixto y delimitadores $...$ y $$...$$
// Mobile-first: los bloques largos van en contenedores con overflow-x-auto
// ---------------------------------------------------------------------------

type Segment =
  | { type: 'text'; value: string }
  | { type: 'inline'; value: string }
  | { type: 'block'; value: string };

export function parseLatex(input: string): Segment[] {
  const segments: Segment[] = [];
  let remaining = input;

  while (remaining.length > 0) {
    const blockMatch = remaining.match(/\$\$([\s\S]*?)\$\$/);
    const inlineMatch = remaining.match(/\$([\s\S]*?)\$/);

    let match: RegExpMatchArray | null = null;
    let kind: 'inline' | 'block' | null = null;

    if (
      blockMatch &&
      (!inlineMatch || (blockMatch.index ?? Infinity) <= (inlineMatch.index ?? Infinity))
    ) {
      match = blockMatch;
      kind = 'block';
    } else if (inlineMatch) {
      match = inlineMatch;
      kind = 'inline';
    }

    if (!match || kind === null) {
      segments.push({ type: 'text', value: remaining });
      break;
    }

    const start = match.index ?? 0;
    if (start > 0) {
      segments.push({ type: 'text', value: remaining.slice(0, start) });
    }
    segments.push({ type: kind, value: match[1] });
    remaining = remaining.slice(start + match[0].length);
  }

  return segments;
}

// Caché global: evita re-renderizar con KaTeX fórmulas ya procesadas
// (especialmente útil al re-renderizar opciones o al navegar entre ejercicios).
const katexCache = new Map<string, string>();

function renderLatex(latex: string, displayMode: boolean): string {
  const key = `${displayMode ? 'D' : 'I'}::${latex}`;
  const cached = katexCache.get(key);
  if (cached !== undefined) return cached;
  const html = katex.renderToString(latex, {
    displayMode,
    throwOnError: false,
    strict: 'ignore',
  });
  katexCache.set(key, html);
  return html;
}

interface LatexRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export default function LatexRenderer({ content, className, inline = false }: LatexRendererProps) {
  const segments = useMemo(() => parseLatex(content), [content]);

  const Wrapper: any = inline ? 'span' : 'div';
  const wrapperClassName = inline
    ? `whitespace-normal ${className ?? ''}`
    : `w-full min-w-0 max-w-full ${className ?? ''}`;

  return (
    <Wrapper className={wrapperClassName}>
      {segments.map((segment, i) => {
        if (segment.type === 'text') {
          const lines = segment.value.split('\n');
          return (
            <span key={i}>
              {lines.map((line, j) => (
                <span key={j}>
                  {line}
                  {j < lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </span>
          );
        }

        if (segment.type === 'block') {
          return (
            <div
              key={i}
              className="my-3 max-w-full overflow-x-auto overflow-y-hidden py-1"
              dangerouslySetInnerHTML={{ __html: renderLatex(segment.value, true) }}
            />
          );
        }

        return (
          <span
            key={i}
            className="whitespace-normal"
            dangerouslySetInnerHTML={{ __html: renderLatex(segment.value, false) }}
          />
        );
      })}
    </Wrapper>
  );
}
