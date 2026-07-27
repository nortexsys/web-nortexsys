import { Fragment, type CSSProperties } from "react";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./method.module.css";

const phaseIcons: Record<string, IconName> = {
  D1: "discover",
  D2: "define",
  D3: "design",
  D4: "deliver",
  D5: "demonstrate",
};

// Down/right arrow connector between phases. Doubles as a tangential
// flow arrow on the desktop wheel layout (rotated via CSS custom property).
const ArrowDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path d="M12 3v16" strokeLinecap="square" />
    <path d="M5 12l7 7 7-7" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

// Desktop wheel geometry: phase i sits at -90° (12 o'clock) + i * step,
// advancing clockwise. Connectors sit at the midpoint angle between two
// phases, rotated tangentially so the arrowhead points along the flow.
const WHEEL_RADIUS = 42; // % of wheel box, center to icon center
function wheelPosition(angleDeg: number, radius = WHEEL_RADIUS): CSSProperties {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.methodPage.metaTitle,
    description: dict.methodPage.metaDescription,
    alternates: {
      languages: { es: "/es/metodologia", en: "/en/metodologia" },
    },
  };
}

export default async function MethodPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const phases = dict.methodPage.detail;

  return (
    <>
      {/* 1 · Intro + 2 · Flow diagram, side by side from 960px: text column
          (capped at 60ch, same measure as .lead) and the wheel filling the
          remaining width to the right — vertical list + stacked intro on
          mobile. */}
      <Section tone="muted">
        <div className={styles.introRow}>
          <div className={styles.intro}>
            <h1>{dict.methodPage.intro.title}</h1>
            <p className={styles.lead}>{dict.methodPage.intro.lead}</p>
          </div>
          <div className={styles.diagramWrap}>
          <ol className={styles.diagram} aria-label="Nortex 5D Method flow">
          {phases.map((p, i) => {
            const angleStep = 360 / phases.length;
            const phaseAngle = -90 + i * angleStep;
            const isClosing = i === phases.length - 1;
            const connectorAngle = phaseAngle + angleStep / 2;
            return (
              <Fragment key={p.code}>
                <li className={styles.phase} style={wheelPosition(phaseAngle)}>
                  <span className={styles.phaseIcon}>
                    <Icon name={phaseIcons[p.code] ?? "discover"} size={26} />
                  </span>
                  <div className={styles.phaseBody}>
                    <span className={styles.phaseCode}>{p.code}</span>
                    <h3 className={styles.phaseName}>{p.name}</h3>
                  </div>
                </li>
                {/* Connector to the next phase; the last one closes the loop
                    back to D1 and only renders on the desktop wheel. */}
                <li
                  className={isClosing ? styles.connectorClosing : styles.connector}
                  aria-hidden="true"
                  style={
                    {
                      ...wheelPosition(connectorAngle),
                      // ArrowDown's default heading is 90° (south); rotating
                      // by connectorAngle alone lands it on the tangent.
                      "--rotate": `${connectorAngle}deg`,
                    } as CSSProperties
                  }
                >
                  <ArrowDown />
                </li>
              </Fragment>
            );
          })}
          </ol>
          </div>
        </div>
        <p className={styles.loopHint} aria-label="Demonstrate feeds back into Discover">
          <Icon name="demonstrate" size={18} />
          <span>{dict.method.phases[4].name} → {dict.method.phases[0].name}</span>
        </p>
      </Section>

      {/* 3 · Phase detail */}
      <Section>
        <ol className={styles.detailList}>
          {phases.map((p) => (
            <li key={p.code}>
              <Card as="article" className={styles.detailCard}>
                <div className={styles.detailHead}>
                  <span className={styles.detailCode}>{p.code}</span>
                  <h2 className={styles.detailName}>{p.name}</h2>
                </div>
                <p className={styles.detailTagline}>{p.tagline}</p>
                <p className={styles.detailBody}>{p.body}</p>
                <div>
                  <p className={styles.deliverablesTitle}>{dict.methodPage.deliverablesLabel}</p>
                  <ul className={styles.deliverables}>
                    {p.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4 · Closing + CTA */}
      <Section tone="inverse">
        <Container narrow>
          <h2 className={styles.closingTitle}>{dict.methodPage.closing.title}</h2>
          <p className={styles.closingBody}>{dict.methodPage.closing.body}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.methodPage.closing.cta}
          </Button>
        </Container>
      </Section>
    </>
  );
}
