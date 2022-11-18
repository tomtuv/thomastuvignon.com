import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
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

export const getStaticProps: GetStaticProps<{
  page: PageType;
  preview: boolean;
}> = async ({ params, locale, preview = false }) => {
  const { slug } = params as { slug: string };
  const page = await getPage(slug, locale!, preview);

  return {
    props: { page, preview },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allPages: PageType[] = (await getAllPagesWithSlug()) ?? [];
  const paths: { params: { slug: string }; locale: string }[] = [];

  allPages.forEach(({ slug }) => {
    locales!.forEach((locale) => {
      paths.push({
        params: { slug },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};
