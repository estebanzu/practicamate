import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Matemática en foco — Prácticas interactivas',
  description:
    'Prácticas interactivas de Álgebra con teoría en LaTeX, ejemplos resueltos y resolución paso a paso.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/KaTeX_Main-Regular.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/KaTeX_Main-Bold.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/KaTeX_Main-Italic.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/KaTeX_Math-Italic.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/fonts/KaTeX_Size1-Regular.woff2"
        crossOrigin="anonymous"
      />
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
