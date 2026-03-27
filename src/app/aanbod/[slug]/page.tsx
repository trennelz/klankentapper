import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aanbodData, getAanbodBySlug } from "@/lib/aanbod-data";
import { AanbodDetail } from "@/components/aanbod/AanbodDetail";
import { ContactStrip } from "@/components/home/ContactStrip";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return aanbodData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getAanbodBySlug(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function AanbodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getAanbodBySlug(slug);

  if (!item) notFound();

  return (
    <>
      <AanbodDetail item={item} />
      <ContactStrip />
    </>
  );
}
