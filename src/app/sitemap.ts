import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { blogPosts } from "@/content/blog/posts";

// Production origin. Override in production via NEXT_PUBLIC_SITE_URL.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nortexsys.com";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = PATHS.flatMap((path) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path ? `/${path}` : ""}`,
      lastModified: now,
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
