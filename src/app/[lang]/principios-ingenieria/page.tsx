import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import {
  principiosTitle,
  principiosSubtitle,
  principiosMetaDescription,
  principiosIntro,
  principiosPrinciples,
  principiosCommitment,
  principiosEsNotice,
} from "@/content/legal/principios";
import styles from "./principios.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: principiosTitle,
    description: principiosMetaDescription,
    // English-only document; keep the Spanish route out of the index to avoid
    // a thin/placeholder page competing for the same intent.
    robots:
      lang === "en"
        ? { index: true, follow: true }
        : { index: false, follow: true },
    alternates: {
      languages: {
        es: "/es/principios-ingenieria",
        en: "/en/principios-ingenieria",
      },
    },
  };
}

export default async function PrincipiosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  // Spanish route — notice pointing to the English version (decision F4-2).
  if (locale === "es") {
    return (
      <Container className={styles.wrap} narrow>
        <div className={styles.notice}>
          <h1>{principiosEsNotice.title}</h1>
          <p>{principiosEsNotice.body}</p>
          <Link href="/en/principios-ingenieria">{principiosEsNotice.link} →</Link>
        </div>
      </Container>
    );
  }

  // English route — full document.
  return (
    <Container as="article" className={styles.wrap} narrow>
      <header className={styles.header}>
        <h1>{principiosTitle}</h1>
        <p className={styles.subtitle}>{principiosSubtitle}</p>
      </header>

      <div className={styles.intro}>
        {principiosIntro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {principiosPrinciples.map((pr) => (
        <section key={pr.title} className={styles.principle}>
          <h2>{pr.title}</h2>
          {pr.paragraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {pr.bullets ? (
            <ul>
              {pr.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section className={styles.commitment}>
        {principiosCommitment.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
    </Container>
  );
}
