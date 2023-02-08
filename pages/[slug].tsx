import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import RichText from "@/components/RichText";
import Back from "@/components/Back";
import { getPage, getAllPagesWithSlug } from "@/lib/api";
import type { Page as PageType } from "@/lib/types";

export default function Page({
  page,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout page={page} preview={preview}>
      <Seo title={page.title} description={page.description} />
      <article>
        <RichText text={page.body?.json} />
      </article>
      <Back />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<
  {
    page: PageType;
    preview: boolean;
  },
  { slug: string }
> = async ({ params, locale, preview = false }) => {
  const { slug } = params!;
  const page = await getPage(slug, locale!, preview);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      preview,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allPages = await getAllPagesWithSlug();
  const paths: { params: { slug: string }; locale: string }[] = [];

  allPages.forEach((page) => {
    locales!.forEach((locale) => {
      if (!page?.slug) return;

      paths.push({
        params: { slug: page.slug },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};
