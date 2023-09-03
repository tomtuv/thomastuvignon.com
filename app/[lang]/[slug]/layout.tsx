import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { getAllPagesWithSlug, getPage } from "@/lib/api";
import { LOCALES, SITE_NAME, TWITTER_USERNAME } from "@/lib/constants";

export async function generateStaticParams() {
  const allPages = await getAllPagesWithSlug();

  return allPages.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale: lang, preview: isEnabled });

  return {
    title: page?.title,
    description: page?.description,
    alternates: {
      canonical: `/${lang}/${slug}`,
      languages: LOCALES.reduce(
        (acc, locale) => ({
          ...acc,
          [locale]: `/${locale}/${slug}`,
        }),
        {}
      ),
    },
    openGraph: {
      title: page?.title ?? undefined,
      siteName: SITE_NAME,
      description: page?.description ?? undefined,
      url: `/${lang}/${slug}`,
      locale: lang,
      alternateLocale: LOCALES.filter((locale) => locale !== lang),
    },
    twitter: {
      title: page?.title ?? undefined,
      description: page?.description ?? undefined,
      card: "summary_large_image",
      creator: TWITTER_USERNAME,
    },
  };
}

export default async function Layout({
  children,
  params: { slug, lang },
}: {
  children: React.ReactNode;
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale: lang, preview: isEnabled });

  if (!page) {
    notFound();
  }

  return <PageLayout page={page}>{children}</PageLayout>;
}
