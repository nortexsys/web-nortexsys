import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/site";

// BreadcrumbList structured data: Home > current page. `path` is the segment
// under the locale (e.g. "servicios"); `homeName`/`name` are already localized.
export function Breadcrumbs({
  lang,
  homeName,
  name,
  path,
}: {
  lang: string;
  homeName: string;
  name: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: `${SITE_URL}/${lang}` },
          { "@type": "ListItem", position: 2, name, item: `${SITE_URL}/${lang}/${path}` },
        ],
      }}
    />
  );
}
