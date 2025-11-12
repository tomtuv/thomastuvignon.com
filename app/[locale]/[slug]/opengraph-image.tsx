import OpengraphImage from "@/components/opengraph-image";
import { getPage } from "@/lib/api";

export default async function Image({ params }: PageProps<"/[locale]/[slug]">) {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

  return await OpengraphImage({ title: page?.title ?? undefined });
}
