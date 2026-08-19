import LatexRenderer from './LatexRenderer';

interface FeedbackBoxProps {
  status: 'correct' | 'retry';
  feedback: string;
}

export default function FeedbackBox({ status, feedback }: FeedbackBoxProps) {
  const correct = status === 'correct';
  return (
    <div
      role="status"
      aria-live="polite"
      className={`animate-enter mt-4 rounded-lg border p-4 ${
        correct
          ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
          : 'border-red-200 bg-red-50 text-red-900'
      }`}
    >
      <p className="flex items-center gap-2 text-sm font-semibold">
        <span aria-hidden="true" className="text-base">
          {correct ? '✓' : '✗'}
        </span>
        {correct ? '¡Correcto!' : 'Aún no'}
      </p>
      <div className="mt-1 text-sm leading-relaxed">
        <LatexRenderer content={feedback} />
      </div>
      {!correct && (
        <p className="mt-2 text-xs text-red-700/80">Inténtalo de nuevo o revisa el paso a paso.</p>
      )}
    </div>
  );
}
