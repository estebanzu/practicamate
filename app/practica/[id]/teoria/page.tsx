import { notFound } from 'next/navigation';
import { getPractice, getPracticeIds } from '@/data/practices';
import TheoryView from '@/components/TheoryView';

export function generateStaticParams() {
  return getPracticeIds().map((id) => ({ id }));
}

export default function TeoriaPage({ params }: { params: { id: string } }) {
  const practice = getPractice(params.id);
  if (!practice) notFound();
  return <TheoryView practice={practice} />;
}
