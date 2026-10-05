import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Open_Sans } from "next/font/google";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Consent } from "@/components/analytics/Consent";
import { SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

// Open Sans across the entire site — sans-serif everywhere, matching the
// clean, technical look of the reference (Deloitte). Weights cover Light (300),
// regular (400), semibold (600) and bold (700).
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans-raw",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Per-locale metadata. `title.template` propagates to every child page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";
  return {
    title: {
      default: isEs
        ? "Nortex Systems — Software a medida · IA agéntica"
        : "Nortex Systems — Custom software · Agentic AI",
      template: "%s · Nortex Systems",
    },
    description: isEs
      ? "Consultora de software a medida, IA agéntica y transformación digital. Convertimos necesidades poco definidas en soluciones con rigor, procesos claros y resultados medibles."
      : "Custom software, agentic AI and digital transformation consultancy. We turn poorly defined needs into solutions built with rigor, clear processes and measurable results.",
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: "website",
      siteName: "Nortex Systems",
      locale: isEs ? "es_ES" : "en_US",
      title: isEs
        ? "Nortex Systems — Software a medida · IA agéntica"
        : "Nortex Systems — Custom software · Agentic AI",
      description: isEs
        ? "Consultora de software a medida, IA agéntica y transformación digital."
        : "Custom software, agentic AI and digital transformation consultancy.",
    },
    twitter: {
      card: "summary_large_image",
    },
    // Site-ownership tokens for Search Console / Bing Webmaster Tools. Only
    // emitted when the env var is set (DNS verification needs no tag).
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
      other: process.env.NEXT_PUBLIC_BING_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
        : undefined,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className={openSans.variable}>
      <body>
        <Header dict={dict} lang={lang as Locale} />
        <main id="main">{children}</main>
        <Footer dict={dict} lang={lang as Locale} />
        <Consent labels={dict.consent} policyHref={`/${lang}/cookies`} />
      </body>
    </html>
  );
}
