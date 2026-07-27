import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict-type";
import styles from "./Footer.module.css";

export function Footer({
  dict,
  lang,
}: {
  dict: Dict;
  lang: Locale;
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>{dict.meta.siteName}</p>
          <p className={styles.tagline}>{dict.meta.tagline}</p>
          <p className={styles.legalNote}>{dict.footer.legalNote}</p>
        </div>

        <nav className={styles.links} aria-label="footer">
          <Link href={`/${lang}/quienes-somos`}>{dict.nav.about}</Link>
          <Link href={`/${lang}/metodologia`}>{dict.nav.method}</Link>
          <Link href={`/${lang}/servicios`}>{dict.nav.services}</Link>
          <Link href={`/${lang}/donde-estamos`}>{dict.nav.location}</Link>
          <Link href={`/${lang}/contacto`}>{dict.nav.contact}</Link>
        </nav>

        <nav className={styles.links} aria-label={dict.footer.legalSectionTitle}>
          <p className={styles.colTitle}>{dict.footer.legalSectionTitle}</p>
          <Link href={`/${lang}/aviso-legal`}>{dict.footer.legal}</Link>
          <Link href={`/${lang}/privacidad`}>{dict.footer.privacy}</Link>
          <Link href={`/${lang}/cookies`}>{dict.footer.cookies}</Link>
          <Link href={`/${lang}/politica-ia`}>{dict.footer.aiPolicy}</Link>
          <Link href={`/${lang}/principios-ingenieria`}>{dict.footer.engineeringPrinciples}</Link>
        </nav>

        <div className={styles.contact}>
          <a href={`mailto:${dict.footer.email}`}>{dict.footer.email}</a>
          <a href={`tel:${dict.footer.phone.replace(/\s+/g, "")}`}>{dict.footer.phone}</a>
        </div>
      </div>
    </footer>
  );
}
