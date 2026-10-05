import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, pageAlternates } from "@/lib/site";
import styles from "./home.module.css";

// Map service icon id (from dictionary) to icon name.
const serviceIcons: Record<string, IconName> = {
  "01": "web",
  "02": "code",
  "03": "layers",
  "04": "agent",
  "05": "shield",
  "06": "plug",
  "07": "catalog",
  "08": "sales",
  "09": "legacy",
};

// Map 5D phase code to icon name.
const phaseIcons: Record<string, IconName> = {
  D1: "discover",
  D2: "define",
  D3: "design",
  D4: "deliver",
  D5: "demonstrate",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: pageAlternates(lang) };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  // Hero layout: "full" (image fills the navy block edge-to-edge) | "wide" (inside container).
  const heroLayout = "full" as "full" | "wide";
  // Per-language hero image assets.
  const heroImg = {
    full: `/brand/hero-${lang}.webp`,
    s768: `/brand/hero-${lang}-768.webp`,
    s1024: `/brand/hero-${lang}-1024.webp`,
  };

  return (
    <>
      {/* Structured data — Organization (schema.org) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nortex Systems",
          alternateName: "Fawalt Investment S.L.",
          url: SITE_URL,
          logo: `${SITE_URL}/brand/LOGO_Nortex.png`,
          description: dict.meta.tagline,
          email: "contact@nortexsys.com",
          telephone: "+34673764987",
          foundingDate: "2026",
          areaServed: ["ES", "MX", "CO", "AR", "PE", "CL", "US"],
          knowsLanguage: ["es", "en"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Núñez de Balboa, 118, 1º I",
            addressLocality: "Madrid",
            postalCode: "28006",
            addressCountry: "ES",
          },
        }}
      />

      {/* 1 · HERO — propuesta de valor + CTA */}
      {heroLayout === "full" ? (
        <section className={`${styles.hero} ${styles.heroFull}`}>
          <div className={styles.heroFullMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImg.full}
              alt={`${dict.meta.siteName} — ${dict.meta.tagline}`}
              width={1536}
              height={1024}
              fetchPriority="high"
            />
          </div>
          <Container>
            <span className={styles.srOnly}>
              <h1>{dict.home.hero.headline}</h1>
              <p>{dict.home.hero.subtext}</p>
            </span>
            <div className={styles.heroCta}>
              <Button href={`/${lang}/contacto`} variant="primary" size="lg">
                {dict.home.hero.cta}
              </Button>
            </div>
          </Container>
        </section>
      ) : (
        <Section tone="inverse" className={`${styles.hero} ${styles.heroWide}`}>
          <Container className={styles.heroInner}>
            <picture className={styles.heroImage}>
              <source media="(max-width: 768px)" srcSet={heroImg.s768} type="image/webp" />
              <source media="(max-width: 1024px)" srcSet={heroImg.s1024} type="image/webp" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImg.full}
                alt={`${dict.meta.siteName} — ${dict.meta.tagline}`}
                width={1536}
                height={1024}
                fetchPriority="high"
              />
            </picture>
            <span className={styles.srOnly}>
              <h1>{dict.home.hero.headline}</h1>
              <p>{dict.home.hero.subtext}</p>
            </span>
            <div className={styles.heroCta}>
              <Button href={`/${lang}/contacto`} variant="primary" size="lg">
                {dict.home.hero.cta}
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* 2 · QUÉ HACEMOS — resumen de los 9 servicios */}
      <Section id="services">
        <header className={styles.blockHeader}>
          <h2>{dict.home.servicesSummary.title}</h2>
          <p className={styles.blockLead}>
            {dict.home.servicesSummary.subtitle}
          </p>
        </header>
        <ul className={styles.serviceGrid}>
          {dict.services.list.map((s) => (
            <li key={s.id}>
              <Card
                as={Link}
                href={`/${lang}/servicios#srv-${s.id}`}
                interactive
                className={styles.serviceCard}
              >
                <div className={styles.serviceHead}>
                  <span className={styles.serviceIcon}>
                    <Icon name={serviceIcons[s.id] ?? "code"} size={26} />
                  </span>
                  <span className={styles.serviceId}>{s.id}</span>
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceSummary}>{s.summary}</p>
              </Card>
            </li>
          ))}
        </ul>
        <div className={styles.blockFooter}>
          <Button href={`/${lang}/servicios`} variant="ghost">
            {dict.home.servicesSummary.seeAll}
          </Button>
        </div>
      </Section>

      {/* 3 · CÓMO TRABAJAMOS — mini 5D Method */}
      <Section tone="muted" id="method">
        <header className={styles.blockHeader}>
          <h2>{dict.home.methodSummary.title}</h2>
          <p className={styles.blockLead}>
            {dict.home.methodSummary.subtitle}
          </p>
        </header>
        <ol className={styles.methodLine} aria-label="Nortex 5D Method">
          {dict.method.phases.map((p) => (
            <li key={p.code} className={styles.methodStep}>
              <span className={styles.methodIcon}>
                <Icon name={phaseIcons[p.code] ?? "discover"} size={22} />
              </span>
              <span className={styles.methodCode}>{p.code}</span>
              <span className={styles.methodName}>{p.name}</span>
            </li>
          ))}
        </ol>
        <div className={styles.blockFooter}>
          <Button href={`/${lang}/metodologia`} variant="ghost">
            {dict.home.methodSummary.seeMethod}
          </Button>
        </div>
      </Section>

      {/* 4 · QUIÉNES SOMOS — extracto */}
      <Section id="about">
        <div className={styles.aboutSplit}>
          <div>
            <h2>{dict.home.aboutSummary.title}</h2>
          </div>
          <div>
            <p className={styles.aboutBody}>{dict.home.aboutSummary.body}</p>
            <Button href={`/${lang}/quienes-somos`} variant="ghost">
              {dict.home.aboutSummary.seeAbout}
            </Button>
          </div>
        </div>
      </Section>

      {/* 5 · CTA FINAL */}
      <Section tone="inverse" className={styles.ctaFinal}>
        <Container className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{dict.home.ctaFinal.title}</h2>
          <p className={styles.ctaBody}>{dict.home.ctaFinal.body}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.home.ctaFinal.button}
          </Button>
        </Container>
      </Section>
    </>
  );
}
