import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { LegalDoc } from "@/components/legal/LegalDoc";
import {
  avisoUpdatedAt,
  avisoTitle,
  avisoMetaDescription,
  avisoSections,
} from "@/content/legal/aviso";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: avisoTitle[lang as Locale],
    description: avisoMetaDescription[lang as Locale],
    robots: { index: true, follow: true },
    alternates: pageAlternates(lang, "aviso-legal"),
  };
}

export default async function AvisoLegalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  return (
    <LegalDoc
      title={avisoTitle[locale]}
      updatedAt={avisoUpdatedAt[locale]}
      sections={avisoSections[locale]}
    />
  );
}
