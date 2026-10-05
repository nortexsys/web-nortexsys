import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { LegalDoc } from "@/components/legal/LegalDoc";
import {
  cookiesUpdatedAt,
  cookiesTitle,
  cookiesMetaDescription,
  cookiesSections,
} from "@/content/legal/cookies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: cookiesTitle[lang as Locale],
    description: cookiesMetaDescription[lang as Locale],
    robots: { index: true, follow: true },
    alternates: pageAlternates(lang, "cookies"),
  };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  return (
    <LegalDoc
      title={cookiesTitle[locale]}
      updatedAt={cookiesUpdatedAt[locale]}
      sections={cookiesSections[locale]}
    />
  );
}
