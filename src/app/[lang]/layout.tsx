import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Spectral } from "next/font/google";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-spectral",
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
    <html lang={lang} className={`${inter.variable} ${spectral.variable}`}>
      <body>
        <Header dict={dict} lang={lang as Locale} />
        <main id="main">{children}</main>
        <Footer dict={dict} lang={lang as Locale} />
      </body>
    </html>
  );
}
