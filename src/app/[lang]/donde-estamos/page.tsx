import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL, pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { LocationMap } from "./LocationMap";
import styles from "./location.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.locationPage.metaTitle,
    description: dict.locationPage.metaDescription,
    alternates: pageAlternates(lang, "donde-estamos"),
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const phoneHref = dict.footer.phone.replace(/\s+/g, "");

  return (
    <>
      <Breadcrumbs lang={lang} homeName={dict.meta.siteName} name={dict.nav.location} path="donde-estamos" />
      {/* Structured data — Organization with LocalBusiness offices (@graph) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Nortex Systems",
              url: SITE_URL,
              email: "contact@nortexsys.com",
              telephone: "+34673764987",
            },
            {
              "@type": "LocalBusiness",
              name: "Nortex Systems — España",
              parentOrganization: { "@id": `${SITE_URL}/#organization` },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Núñez de Balboa, 118, 1i",
                addressLocality: "Madrid",
                postalCode: "28006",
                addressCountry: "ES",
              },
            },
            {
              "@type": "LocalBusiness",
              name: "Nortex Systems — Latam",
              parentOrganization: { "@id": `${SITE_URL}/#organization` },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Anastasio Ruiz, oficina E-9, corregimiento de Bella Vista",
                addressLocality: "Provincia de Panamá",
                addressCountry: "PA",
              },
            },
            {
              "@type": "LocalBusiness",
              name: "Nortex Systems — United States",
              parentOrganization: { "@id": `${SITE_URL}/#organization` },
              address: {
                "@type": "PostalAddress",
                streetAddress: "320 E Yavapai Rd, Apt 1205",
                addressLocality: "Tucson, AZ",
                postalCode: "85705",
                addressCountry: "US",
              },
            },
          ],
        }}
      />

      {/* Intro */}
      <Container className={styles.intro}>
        <h1>{dict.locationPage.title}</h1>
        <p className={styles.lead}>{dict.locationPage.lead}</p>
      </Container>

      {/* Locations map — interactive holographic markers */}
      <Section className={styles.mapSection}>
        <LocationMap
          offices={dict.locationPage.offices}
          viewMapLabel={dict.locationPage.viewMap}
          alt="Mapa mundial con las sedes de Nortex Systems: Tucson (Arizona, EE. UU.), Ciudad de Panamá y Madrid (España)."
        />
      </Section>

      {/* Direct contact + CTA */}
      <Section tone="inverse">
        <Container narrow>
          <h2 className={styles.contactTitle}>{dict.locationPage.contactTitle}</h2>
          <ul className={styles.contactList}>
            <li>
              <a href={`mailto:${dict.footer.email}`}>
                <span className={styles.contactLabel}>email</span>
                {dict.footer.email}
              </a>
            </li>
            <li>
              <a href={`tel:${phoneHref}`}>
                <span className={styles.contactLabel}>tel</span>
                {dict.footer.phone}
              </a>
            </li>
          </ul>
          <p className={styles.ctaBody}>{dict.locationPage.ctaBody}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.locationPage.ctaButton}
          </Button>
        </Container>
      </Section>
    </>
  );
}
