import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { LegalDoc } from "@/components/legal/LegalDoc";
import {
  privacidadUpdatedAt,
  privacidadTitle,
  privacidadMetaDescription,
  privacidadSections,
} from "@/content/legal/privacidad";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: privacidadTitle[lang as Locale],
    description: privacidadMetaDescription[lang as Locale],
    robots: { index: true, follow: true },
    alternates: pageAlternates(lang, "privacidad"),
  };
}

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  return (
    <LegalDoc
      title={privacidadTitle[locale]}
      updatedAt={privacidadUpdatedAt[locale]}
      sections={privacidadSections[locale]}
    />
  );
}
