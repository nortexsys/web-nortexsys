import Link from "next/link";
import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getReadingMinutes, getSortedBlogPosts } from "@/content/blog/posts";
import styles from "./blog.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.blogPage.metaTitle,
    description: dict.blogPage.metaDescription,
    alternates: pageAlternates(lang, "blog"),
  };
}

function formatDate(iso: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const posts = getSortedBlogPosts();

  return (
    <>
      <Container className={styles.intro}>
        <h1>{dict.blogPage.title}</h1>
        <p className={styles.lead}>{dict.blogPage.lead}</p>
      </Container>

      <Container className={styles.wrap}>
        {posts.length === 0 ? (
          <p className={styles.empty}>{dict.blogPage.empty}</p>
        ) : (
          <ul className={styles.grid}>
            {posts.map((post) => {
              const c = post.content[lang as Locale];
              return (
                <li key={post.slug}>
                  <Card
                    as={Link}
                    href={`/${lang}/blog/${post.slug}`}
                    interactive
                    className={styles.card}
                  >
                    <div className={styles.cardMeta}>
                      <span className={styles.category}>
                        {post.category[lang as Locale]}
                      </span>
                      <span className={styles.date}>
                        {formatDate(post.date, lang as Locale)}
                      </span>
                      <span className={styles.readingTime}>
                        {getReadingMinutes(c.body)} {dict.blogPage.readingTimeSuffix}
                      </span>
                    </div>
                    <h2 className={styles.cardTitle}>{c.title}</h2>
                    <p className={styles.cardExcerpt}>{c.excerpt}</p>
                    <span className={styles.readMore}>
                      {dict.blogPage.readMore} →
                    </span>
                  </Card>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </>
  );
}
