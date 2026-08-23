import { notFound } from 'next/navigation';
import { getPractice, getPracticeIds } from '@/data/practices';
import ExerciseRunner from '@/components/ExerciseRunner';

export function generateStaticParams() {
  return getPracticeIds().map((id) => ({ id }));
}

export default async function EjerciciosPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const practice = getPractice(id);
  if (!practice) notFound();
  return <ExerciseRunner practice={practice} />;
}
