import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/i18n/config";
import { blogPosts } from "@/content/blog/posts";


// Page paths under each locale.
const PATHS = [
  "", // home
  "quienes-somos",
  "metodologia",
  "servicios",
  "donde-estamos",
  "contacto",
  "blog",
  "aviso-legal",
  "privacidad",
  "cookies",
  "politica-ia",
  "principios-ingenieria",
] as const;

// Real last-modified dates (ISO). Bump the entry when a page's content changes;
// a build-time `new Date()` would tell crawlers everything changed on every
// deploy, and Google then ignores <lastmod>. Blog index follows its newest post.
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-10-05",
  "quienes-somos": "2026-10-05",
  metodologia: "2026-10-05",
  servicios: "2026-10-05",
  "donde-estamos": "2026-10-05",
  contacto: "2026-10-05",
  "aviso-legal": "2026-07-25",
  privacidad: "2026-07-25",
  cookies: "2026-10-05",
  "politica-ia": "2026-07-25",
  "principios-ingenieria": "2026-07-25",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const newestPost = blogPosts.reduce(
    (max, p) => (p.date > max ? p.date : max),
    "1970-01-01"
  );
  const pages = PATHS.flatMap((path) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path ? `/${path}` : ""}`,
      lastModified: new Date(path === "blog" ? newestPost : LAST_MODIFIED[path]),
      changeFrequency: "monthly" as const,
      // Home and commercial pages are high priority; legal/secondary lower.
      priority: path === "" ? 1 : path === "servicios" || path === "contacto" ? 0.9 : 0.6,
    }))
  );

  const posts = blogPosts.flatMap((post) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }))
  );

  return [...pages, ...posts];
}
