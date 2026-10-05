import { ogSize, renderOg } from "@/lib/og";

export const alt = "Nortex Systems";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return renderOg(lang);
}
