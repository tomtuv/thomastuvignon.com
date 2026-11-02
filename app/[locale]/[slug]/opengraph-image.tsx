import OpengraphImage from "@/components/opengraph-image";
import { getAllPagesWithSlug, getPage } from "@/lib/api";
import { LOCALES } from "@/lib/constants";

export async function generateStaticParams() {
  const allPages = await getAllPagesWithSlug();

  return LOCALES.flatMap((locale) =>
    allPages.map((page) => ({ locale, slug: page?.slug })),
  );
}

export default async function Image({ params }: PageProps<"/[locale]/[slug]">) {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

  return await OpengraphImage({ title: page?.title ?? undefined });
}
