import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import { getAllPagesWithSlug, getPage } from "@/lib/api";
import { LOCALES, SITE_NAME, TWITTER_USERNAME } from "@/lib/constants";

export async function generateStaticParams() {
  const allPages = await getAllPagesWithSlug();

  return allPages.map((page) => ({ slug: page?.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

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

export default async function PageLayout({
  children,
  params,
}: React.PropsWithChildren<{
  params: Promise<{ slug: string; locale: string }>;
}>) {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

  if (!page) {
    notFound();
  }

  return <Layout page={page}>{children}</Layout>;
}
