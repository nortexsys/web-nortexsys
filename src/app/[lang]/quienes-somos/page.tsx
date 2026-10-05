import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
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
    alternates: pageAlternates(lang, "quienes-somos"),
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
      <Container className={styles.intro}>
        <h1>{dict.about.intro.title}</h1>
        <p className={styles.introBody}>{dict.about.intro.body}</p>
      </Container>

      {/* 2 · Mission */}
      <Section tone="muted">
        <h2 className={styles.sectionTitle}>{dict.about.mission.title}</h2>
        <p className={styles.missionBody}>{dict.about.mission.body}</p>
      </Section>

      {/* 3 · Values */}
      <Section>
        <header className={styles.valuesHeader}>
          <h2 className={styles.sectionTitle}>{dict.about.values.title}</h2>
          <p className={styles.sectionLead}>{dict.about.values.subtitle}</p>
        </header>
        <ul className={styles.values}>
          {dict.about.values.items.map((v, i) => (
            <li key={v.name}>
              <Card as="article" className={styles.valueCard}>
                <span className={styles.valueCode}>{`0${i + 1}`}</span>
                <h3 className={styles.valueName}>{v.name}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 · Audience + CTA */}
      <Section tone="inverse">
        <Container narrow>
          <p className={styles.audienceLead}>{dict.about.audience.lead}</p>
          <h2 className={styles.audienceTitle}>{dict.about.audience.title}</h2>
          <p className={styles.audienceBody}>{dict.about.audience.body}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.about.audience.cta}
          </Button>
        </Container>
      </Section>
    </>
  );
}
