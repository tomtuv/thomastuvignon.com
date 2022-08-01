import React from "react";
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Back from "../components/Back";
import { getPage, getAllPagesWithSlug } from "../lib/api";
import type { Page as PageType } from "../interfaces";

export default function Page({
  page,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout page={page} preview={preview}>
      <Seo title={page.title} description={page.description} />
      <article>
        <div data-container="">
          <div
            style={
              {
                "--grid-column-md": "3 / span 8",
              } as React.CSSProperties
            }
          >
            {documentToReactComponents(page.body.json)}
          </div>
        </div>
      </article>
      <Back />
    </Layout>
  );
}

export async function getStaticProps({
  params = {},
  locale = "fr",
  preview = false,
}: GetStaticPropsContext) {
  const page: PageType = (await getPage(params.slug, locale, preview)) ?? {};

  return {
    props: { page, preview },
  };
}

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  const allPages: PageType[] = (await getAllPagesWithSlug()) ?? [];
  const paths: any[] = [];

  allPages.forEach(({ slug }) => {
    for (const locale of locales) {
      paths.push({
        params: { slug },
        locale,
      });
    }
  });

  return {
    paths: paths ?? [],
    fallback: false,
  };
}
