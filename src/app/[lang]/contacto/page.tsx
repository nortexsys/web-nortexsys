import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "./contact.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.contactPage.metaTitle,
    description: dict.contactPage.metaDescription,
    alternates: pageAlternates(lang, "contacto"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const phoneHref = dict.footer.phone.replace(/\s+/g, "");

  return (
    <>
      <Container className={styles.intro}>
        <h1>{dict.contactPage.title}</h1>
        <p className={styles.lead}>{dict.contactPage.lead}</p>
      </Container>

      <Container>
        <div className={styles.grid}>
          <div className={styles.formCol}>
            <ContactForm dict={dict} />
          </div>

          <aside className={styles.directCol}>
            <h2>{dict.contactPage.directTitle}</h2>
            <ul className={styles.directList}>
              <li>
                <span className={styles.label}>email</span>
                <a href={`mailto:${dict.footer.email}`}>{dict.footer.email}</a>
              </li>
              <li>
                <span className={styles.label}>tel</span>
                <a href={`tel:${phoneHref}`}>{dict.footer.phone}</a>
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </>
  );
}
