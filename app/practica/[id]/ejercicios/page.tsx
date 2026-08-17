import { notFound } from 'next/navigation';
import { getPractice, getPracticeIds } from '@/data/practices';
import ExerciseRunner from '@/components/ExerciseRunner';

export function generateStaticParams() {
  return getPracticeIds().map((id) => ({ id }));
}

export default function EjerciciosPage({ params }: { params: { id: string } }) {
  const practice = getPractice(params.id);
  if (!practice) notFound();
  return <ExerciseRunner practice={practice} />;
}
