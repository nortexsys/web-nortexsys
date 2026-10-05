import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
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

// Optional illustration per service block (id -> asset path). Only blocks
// present here render the image; the rest keep the text-only layout.
// `dark` opts a block into the navy #071221 surface with white text so the
// illustration blends into the block. Omit it (or set false) to keep the
// default light --bg-muted surface. `reverse` mirrors the layout so the
// image sits on the left and the text on the right.
const serviceImages: Partial<
  Record<
    string,
    { src: string; width: number; height: number; dark?: boolean; reverse?: boolean }
  >
> = {
  // Zigzag layout: odd blocks keep the image on the right, even blocks
  // (reverse) flip it to the left, alternating down the page.
  "01": { src: "/services/01-digitalizacion-web.png", width: 511, height: 339, dark: true },
  "02": {
    src: "/services/02-servicios-sin-fondo.png",
    width: 508,
    height: 338,
    dark: true,
    reverse: true,
  },
  "03": { src: "/services/03-servicios-sin-fondo.png", width: 511, height: 338, dark: true },
  "04": {
    src: "/services/04-servicios-sin-fondo.png",
    width: 510,
    height: 334,
    dark: true,
    reverse: true,
  },
  "05": { src: "/services/05-servicios-sin-fondo.png", width: 511, height: 333, dark: true },
  "06": {
    src: "/services/06-servicios-sin-fondo.png",
    width: 511,
    height: 335,
    dark: true,
    reverse: true,
  },
  "07": { src: "/services/07-servicios-sin-fondo.png", width: 511, height: 346, dark: true },
  "08": {
    src: "/services/08-servicios-sin-fondo.png",
    width: 511,
    height: 347,
    dark: true,
    reverse: true,
  },
  "09": { src: "/services/09-servicios-sin-fondo.png", width: 512, height: 346, dark: true },
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
    alternates: pageAlternates(lang, "servicios"),
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
      <Container className={styles.intro}>
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
        {blocks.map((b) => {
          const image = serviceImages[b.id];
          return (
            <li key={b.id} id={`srv-${b.id}`} className={styles.block}>
              <Container
                className={
                  image
                    ? [
                        styles.blockSplit,
                        image.dark ? styles.blockDark : "",
                        image.reverse ? styles.blockReversed : "",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    : undefined
                }
              >
                <div className={image ? styles.blockText : undefined}>
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
                </div>
                {image ? (
                  <div className={styles.blockImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt=""
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      className={styles.blockImage}
                    />
                  </div>
                ) : null}
              </Container>
            </li>
          );
        })}
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
