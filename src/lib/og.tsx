import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const COPY = {
  es: {
    headline: "Software a medida · IA agéntica",
    sub: "Transformación digital con rigor, procesos claros y resultados medibles.",
  },
  en: {
    headline: "Custom software · Agentic AI",
    sub: "Digital transformation built with rigor, clear processes and measurable results.",
  },
} as const;

// Social share card (1200x630), one per locale. Brand navy background with the
// logo, headline and the production host.
export async function renderOg(lang: string) {
  const copy = COPY[lang === "en" ? "en" : "es"];
  const logo = await readFile(join(process.cwd(), "public/brand/LOGO_Nortex.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0b1d33",
          color: "#f6f7f8",
          padding: "0 80px",
          gap: 72,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={305} height={198} alt="" />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {copy.headline}
          </div>
          <div style={{ fontSize: 30, marginTop: 28, opacity: 0.8, lineHeight: 1.35 }}>
            {copy.sub}
          </div>
          <div style={{ fontSize: 26, marginTop: 40, color: "#6c93f5" }}>
            www.nortexsys.com
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
