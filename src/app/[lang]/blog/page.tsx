import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { Button } from "@/components/ui/Button";
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
    // Placeholder page — keep it out of search results until there is real content.
    robots: { index: false, follow: true },
    alternates: {
      languages: { es: "/es/blog", en: "/en/blog" },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <section className={styles.wrap}>
      <h1>{dict.blogPage.title}</h1>
      <p className={styles.lead}>{dict.blogPage.lead}</p>
      <p className={styles.body}>{dict.blogPage.body}</p>
      <Button href={`/${lang}/contacto`} variant="ghost" size="lg">
        {dict.blogPage.cta}
      </Button>
    </section>
  );
}
