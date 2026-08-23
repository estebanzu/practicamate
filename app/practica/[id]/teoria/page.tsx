import { notFound } from 'next/navigation';
import { getPractice, getPracticeIds } from '@/data/practices';
import TheoryView from '@/components/TheoryView';

export function generateStaticParams() {
  return getPracticeIds().map((id) => ({ id }));
}

export default async function TeoriaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const practice = getPractice(id);
  if (!practice) notFound();
  return <TheoryView practice={practice} />;
}
