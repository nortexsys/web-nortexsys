import Link from "next/link";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost, getReadingMinutes } from "@/content/blog/posts";
import styles from "./article.module.css";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    blogPosts.map((post) => ({ lang, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const c = post.content[lang as Locale];
  return {
    title: c.title,
    description: c.excerpt,
    alternates: pageAlternates(lang, `blog/${slug}`),
    openGraph: {
      type: "article",
      title: c.title,
      description: c.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const dict = await getDictionary(lang as Locale);
  const c = post.content[lang as Locale];
  const category = post.category[lang as Locale];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: c.title,
          description: c.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Nortex Systems" },
          publisher: { "@type": "Organization", name: "Nortex Systems" },
        }}
      />

      {/* Fixed article header — same layout/branding on every post. */}
      <Section tone="inverse" className={styles.header}>
        <Container narrow>
          <span className={styles.category}>{category}</span>
          <h1 className={styles.title}>{c.title}</h1>
          <p className={styles.meta}>
            {dict.blogPage.publishedOn} {formatDate(post.date, lang as Locale)}
            {" · "}
            {getReadingMinutes(c.body)} {dict.blogPage.readingTimeSuffix}
          </p>
        </Container>
      </Section>

      <Container as="article" narrow className={styles.body}>
        <Link href={`/${lang}/blog`} className={styles.back}>
          ← {dict.blogPage.back}
        </Link>
        <div className={styles.prose}>{c.body}</div>
      </Container>

      <Section tone="inverse">
        <Container narrow className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>{dict.blogPage.ctaTitle}</h2>
          <p className={styles.ctaBody}>{dict.blogPage.ctaBody}</p>
          <Button href={`/${lang}/contacto`} variant="primary" size="lg">
            {dict.blogPage.ctaButton}
          </Button>
        </Container>
      </Section>
    </>
  );
}
