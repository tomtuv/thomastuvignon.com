import React from "react";
import type { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Seo from "../components/Seo";
import Back from "../components/Back";
import { getPage, getAllPagesWithSlug } from "../lib/api";

export default function Page({ title, description, body }: any) {
  return (
    <>
      <Seo title={title} description={description} />
      <article>
        <div data-container="">
          <div
            style={
              {
                "--grid-column-md": "3 / span 8",
              } as React.CSSProperties
            }
          >
            {documentToReactComponents(body.json)}
          </div>
        </div>
      </article>
      <Back />
    </>
  );
}

export async function getStaticProps({
  params = {},
  locale = "fr",
  preview = false,
}: GetStaticPropsContext) {
  const page = (await getPage(params.slug, locale, preview)) ?? {};
  const { title, description, body } = page;

  return {
    props: { title, description, body, preview },
  };
}

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  const allPages = (await getAllPagesWithSlug()) ?? [];
  const paths: any[] = [];

  allPages.forEach(({ slug }: { slug: string }) => {
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
