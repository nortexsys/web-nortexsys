"use client";

import { useState } from "react";
import type { Dict } from "@/i18n/dict-type";
import styles from "./ContactForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function ContactForm({ dict }: { dict: Dict }) {
  const t = dict.contactPage.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim(); // honeypot

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = t.validationRequired;
    if (!email) nextErrors.email = t.validationRequired;
    else if (!isEmail(email)) nextErrors.email = t.validationEmail;
    if (!message) nextErrors.message = t.validationRequired;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: fd.get("phone"), company, message }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className={styles.success}>
        <h3>{t.successTitle}</h3>
        <p className={styles.successBody}>{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Honeypot — visually hidden, not display:none (bots detect that).
          aria-hidden so assistive tech skips it; tabIndex -1 so it's not in tab order. */}
      <div className="field honeypot" aria-hidden="true">
        <label htmlFor="company">{t.companyFieldLabel}</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="name">
          {t.name} <span className="req" aria-hidden="true">*</span>
          <span className={styles.srOnly}> ({t.required})</span>
        </label>
        <span className="hint" id="name-hint">{t.nameHint}</span>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "name-err" : "name-hint"}
        />
        {errors.name ? (
          <span className="error" id="name-err" role="alert">{errors.name}</span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="email">
          {t.email} <span className="req" aria-hidden="true">*</span>
        </label>
        <span className="hint" id="email-hint">{t.emailHint}</span>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "email-err" : "email-hint"}
        />
        {errors.email ? (
          <span className="error" id="email-err" role="alert">{errors.email}</span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="phone">{t.phone}</label>
        <span className="hint" id="phone-hint">{t.phoneHint}</span>
        <input id="phone" name="phone" type="tel" autoComplete="tel" aria-describedby="phone-hint" />
      </div>

      <div className="field">
        <label htmlFor="message">
          {t.message} <span className="req" aria-hidden="true">*</span>
        </label>
        <span className="hint" id="message-hint">{t.messageHint}</span>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-err" : "message-hint"}
        />
        {errors.message ? (
          <span className="error" id="message-err" role="alert">{errors.message}</span>
        ) : null}
      </div>

      {status === "error" ? (
        <div role="alert" className={`field ${styles.alertBox}`}>
          <strong>{t.errorTitle}</strong>
          <p className="hint">{t.errorBody}</p>
        </div>
      ) : null}

      <button type="submit" className={styles.submit} disabled={status === "submitting"}>
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
