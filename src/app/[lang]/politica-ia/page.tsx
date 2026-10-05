import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { LegalDoc } from "@/components/legal/LegalDoc";
import {
  aiActUpdatedAt,
  aiActTitle,
  aiActMetaDescription,
  aiActSections,
} from "@/content/legal/aiact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: aiActTitle[lang as Locale],
    description: aiActMetaDescription[lang as Locale],
    robots: { index: true, follow: true },
    alternates: pageAlternates(lang, "politica-ia"),
  };
}

export default async function PoliticaIaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  return (
    <LegalDoc
      title={aiActTitle[locale]}
      updatedAt={aiActUpdatedAt[locale]}
      sections={aiActSections[locale]}
    />
  );
}
