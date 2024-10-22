import OpengraphImage from "@/components/opengraph-image";
import { getPage } from "@/lib/api";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

  return await OpengraphImage({ title: page?.title ?? undefined });
}
