import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import styles from "./about.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: {
      languages: { es: "/es/quienes-somos", en: "/en/quienes-somos" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      {/* 1 · Intro */}
      <Container className={styles.intro} narrow>
        <h1>{dict.about.intro.title}</h1>
        <p className={styles.lead}>{dict.about.intro.lead}</p>
        <p className={styles.introBody}>{dict.about.intro.body}</p>
      </Container>

      {/* 2 · Mission */}
      <Section tone="muted">
        <Container narrow>
          <h2>{dict.about.mission.title}</h2>
          <p className={styles.missionBody}>{dict.about.mission.body}</p>
        </Container>
      </Section>

      {/* 3 · Values */}
      <Section>
        <header style={{ marginBottom: "var(--sp-12)", maxWidth: "60ch" }}>
          <h2>{dict.about.values.title}</h2>
          <p className="blockLead" style={{ fontSize: "var(--fs-lg)", color: "var(--text-muted)" }}>
            {dict.about.values.subtitle}
          </p>
        </header>
        <ul className={styles.values}>
          {dict.about.values.items.map((v) => (
            <li key={v.name} className={styles.valueItem}>
              <Card as="article" className={styles.valueCard}>
                <h3>{v.name}</h3>
                <p>{v.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 · Audience + CTA */}
      <Section tone="inverse">
        <Container narrow>
          <p className={styles.audienceLead}>{dict.about.audience.lead}</p>
          <h2 style={{ color: "var(--text-inverse)", marginBottom: "var(--sp-4)" }}>
            {dict.about.audience.title}
          </h2>
          <p className={styles.audienceBody}>{dict.about.audience.body}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.about.audience.cta}
          </Button>
        </Container>
      </Section>
    </>
  );
}
