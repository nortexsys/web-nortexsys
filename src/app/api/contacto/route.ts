import { NextResponse } from "next/server";
import { Resend } from "resend";

// Contact form submission handler.
//
// Security / anti-spam:
//  - Honeypot field `company`: bots tend to fill every field; legitimate users
//    never see it (visually hidden, not display:none). If filled → silently
//    drop (return 200 so the bot can't tell it was rejected).
//  - Server-side validation of required fields + email format.
//  - Content size cap to avoid payload abuse.
//
// Email transport: Resend. Credentials live in env (never in the repo):
//   RESEND_API_KEY      — Resend API key (re_...)
//   CONTACT_FROM_EMAIL  — verified sender (e.g. onboarding@resend.dev while
//                         nortexsys.com is not yet verified, then
//                         contacto@nortexsys.com)
//   CONTACT_TO_EMAIL    — recipient (contact@nortexsys.com)
//
// Without RESEND_API_KEY the handler returns a controlled 503 so the form
// degrades gracefully (the UI shows an actionable error, not a crash).

const MAX_MESSAGE = 5000;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string; // honeypot — must be empty
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const company = (data.company ?? "").trim();
  const message = (data.message ?? "").trim();

  // Honeypot: silently accept but do nothing.
  if (company !== "") {
    return NextResponse.json({ ok: true });
  }

  // Validation.
  const errors: Record<string, string> = {};
  if (!name) errors.name = "required";
  if (!email) errors.email = "required";
  else if (!isEmail(email)) errors.email = "format";
  if (!message) errors.message = "required";
  else if (message.length > MAX_MESSAGE) errors.message = "too_long";
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "contact@nortexsys.com";

  if (!apiKey || !fromEmail) {
    // Resend not configured yet — fail closed with a clear signal.
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Nuevo contacto web — ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      "",
      "Mensaje:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("[contacto] resend error", error);
    return NextResponse.json({ error: "transport" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
