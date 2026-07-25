"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dict-type";
import styles from "./Header.module.css";

type NavLink = { href: string; label: string };

export function Header({
  dict,
  lang,
}: {
  dict: Dict;
  lang: Locale;
}) {
  const otherLang: Locale = lang === "es" ? "en" : "es";
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open, and close on ESC.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links: NavLink[] = [
    { href: `/${lang}/quienes-somos`, label: dict.nav.about },
    { href: `/${lang}/metodologia`, label: dict.nav.method },
    { href: `/${lang}/servicios`, label: dict.nav.services },
    { href: `/${lang}/donde-estamos`, label: dict.nav.location },
    { href: `/${lang}/blog`, label: dict.nav.blog },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={`/${lang}`} className={styles.logo} aria-label={dict.meta.siteName}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/LOGO_Nortex.png"
            alt={`${dict.meta.siteName} logo`}
            width={150}
            height={100}
          />
        </Link>

        <nav className={styles.nav} aria-label="primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link
            href={`/${otherLang}`}
            className={styles.langSwitch}
            aria-label={`Switch to ${otherLang.toUpperCase()}`}
          >
            {dict.nav.langSwitch}
          </Link>
          <Link href={`/${lang}/contacto`} className={styles.cta}>
            {dict.nav.contact}
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        hidden={!open}
      >
        <nav className={styles.mobileNavList} aria-label="mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Click-away overlay (mobile only) */}
      {open ? (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
