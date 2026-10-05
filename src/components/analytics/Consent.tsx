"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import styles from "./Consent.module.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "nortex-consent-v1";
const OPEN_EVENT = "nortex:open-consent";

type Choice = "granted" | "denied";
type Labels = {
  text: string;
  accept: string;
  reject: string;
  policy: string;
  settings: string;
};

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function clearGaCookies() {
  const host = window.location.hostname;
  const domains = [host, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${d}`;
      });
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  });
}

// GA4 gated by explicit opt-in. Nothing from Google is loaded until the user
// accepts; rejecting (or withdrawing) removes the _ga cookies. Renders nothing
// when NEXT_PUBLIC_GA_ID is not configured.
export function Consent({ labels, policyHref }: { labels: Labels; policyHref: string }) {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    setChoice(stored);
    setOpen(stored === null);
    setReady(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!GA_ID || !ready) return null;

  function decide(next: Choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode: choice lasts for this page view only */
    }
    if (next === "denied") {
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
      clearGaCookies();
    } else {
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false;
    }
    setChoice(next);
    setOpen(false);
  }

  return (
    <>
      {choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      {open && (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label={labels.settings}>
          <p className={styles.text}>
            {labels.text}{" "}
            <a href={policyHref}>{labels.policy}</a>
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.secondary} onClick={() => decide("denied")}>
              {labels.reject}
            </button>
            <button type="button" className={styles.primary} onClick={() => decide("granted")}>
              {labels.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Footer link to reopen the banner and change the choice at any time.
export function ConsentSettingsButton({ label }: { label: string }) {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      className={styles.link}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {label}
    </button>
  );
}
