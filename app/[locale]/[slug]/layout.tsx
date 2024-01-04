import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { getAllPagesWithSlug, getPage } from "@/lib/api";
import { LOCALES, SITE_NAME, TWITTER_USERNAME } from "@/lib/constants";

export async function generateStaticParams() {
  const allPages = await getAllPagesWithSlug();

  return allPages.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale, preview: isEnabled });

  return {
    title: page?.title,
    description: page?.description,
    alternates: {
      canonical: `/${locale}/${slug}`,
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
      url: `/${locale}/${slug}`,
      locale,
      alternateLocale: LOCALES.filter((l) => l !== locale),
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
  params: { slug, locale },
}: React.PropsWithChildren<{
  params: { slug: string; locale: string };
}>) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale, preview: isEnabled });

  if (!page) {
    notFound();
  }

  return <PageLayout page={page}>{children}</PageLayout>;
}
