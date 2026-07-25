import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./services.module.css";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.servicesPage.metaTitle,
    description: dict.servicesPage.metaDescription,
    alternates: {
      languages: { es: "/es/servicios", en: "/en/servicios" },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const blocks = dict.servicesPage.blocks;

  return (
    <>
      {/* Intro */}
      <Container className={styles.intro} narrow>
        <h1>{dict.servicesPage.title}</h1>
        <p className={styles.lead}>{dict.servicesPage.lead}</p>
      </Container>

      {/* In-page navigation — sticky pill index */}
      <nav className={styles.indexNav} aria-label={dict.servicesPage.navLabel}>
        <div className={styles.indexNavInner}>
          {blocks.map((b) => (
            <a key={b.id} href={`#srv-${b.id}`}>
              {b.id}
            </a>
          ))}
        </div>
      </nav>

      {/* Service blocks */}
      <ol className={styles.blocks}>
        {blocks.map((b) => (
          <li key={b.id} id={`srv-${b.id}`} className={styles.block}>
            <Container narrow>
              <div className={styles.blockHead}>
                <span className={styles.blockId}>
                  <Icon name={serviceIcons[b.id] ?? "code"} size={26} />
                </span>
                <div>
                  <span className={styles.blockCode}>{b.id}</span>
                  <h2 className={styles.blockTitle}>{b.title}</h2>
                </div>
              </div>
              <p className={styles.blockTarget}>{b.target}</p>
              {"intro" in b && b.intro ? (
                <p className={styles.blockIntro}>{b.intro}</p>
              ) : null}
              {"intro2" in b && b.intro2 ? (
                <p className={styles.blockIntro}>{b.intro2}</p>
              ) : null}
              <ul className={styles.items}>
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Container>
          </li>
        ))}
      </ol>

      {/* CTA */}
      <Section tone="inverse">
        <Container narrow className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>{dict.servicesPage.ctaTitle}</h2>
          <p className={styles.ctaBody}>{dict.servicesPage.ctaBody}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.servicesPage.ctaButton}
          </Button>
        </Container>
      </Section>
    </>
  );
}
