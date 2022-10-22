import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RichText from "../components/RichText";
import Back from "../components/Back";
import { getPage, getAllPagesWithSlug } from "../lib/api";
import type { Page as PageType } from "../interfaces";

export default function Page({
  page,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout page={page} preview={preview}>
      <SEO title={page.title} description={page.description} />
      <article>
        <RichText text={page.body.json} />
      </article>
      <Back />
    </Layout>
  );
}

export async function getStaticProps({
  params,
  locale,
  preview = false,
}: GetStaticPropsContext) {
  const { slug } = params as { slug: string };
  const page: PageType = (await getPage(slug, locale!, preview)) ?? {};

  return {
    props: { page, preview },
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const allPages: PageType[] = (await getAllPagesWithSlug()) ?? [];
  const paths: GetStaticPathsResult["paths"] = [];

  allPages.forEach(({ slug }) => {
    locales!.forEach((locale) => {
      paths.push({
        params: { slug },
        locale,
      });
    });
  });

  return {
    paths: paths ?? [],
    fallback: false,
  };
}
