import type { Document } from "@contentful/rich-text-types";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Back from "@/components/Back";
import PageLayout from "@/components/PageLayout";
import RichText from "@/components/RichText";
import { getPage, getAllPagesWithSlug } from "@/lib/api";
import { LOCALES } from "@/lib/constants";

export async function generateStaticParams() {
  const allPages = await getAllPagesWithSlug();

  return allPages.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale: lang, preview: isEnabled });

  return {
    title: page?.title,
    description: page?.description,
    alternates: {
      canonical: `/${slug}`,
      languages: LOCALES.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: `/${locale}/${slug}`,
        }),
        {}
      ),
    },
  };
}

export default async function Page({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale: lang, preview: isEnabled });

  if (!page) notFound();

  return (
    <PageLayout page={page}>
      <article>
        <RichText text={page.body?.json as Document} />
      </article>
      <Back />
    </PageLayout>
  );
}
