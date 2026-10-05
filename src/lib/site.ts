// Single source of truth for the production origin. Canonical host is www
// (the apex redirects to it), so every absolute URL must use it.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nortexsys.com"
).replace(/\/$/, "");

// Canonical + hreflang alternates for a page. `path` is the segment under the
// locale ("" for home). x-default points to the Spanish version.
export function pageAlternates(lang: string, path = "") {
  const suffix = path ? `/${path}` : "";
  return {
    canonical: `/${lang}${suffix}`,
    languages: {
      es: `/es${suffix}`,
      en: `/en${suffix}`,
      "x-default": `/es${suffix}`,
    },
  };
}
