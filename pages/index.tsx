import React from "react";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import Link from "next/link";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Image from "../components/Image";
import { getHomePage } from "../lib/api";
import type { HomePage } from "../interfaces";

const MotionLink = motion(Link);

export default function Index({
  homePage,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { formatMessage } = useIntl();

  return (
    <Layout page={homePage} preview={preview}>
      <Seo description={formatMessage({ id: "description" })} />
      <div data-container="">
        {homePage.projectsCollection.items?.map((project) => (
          <MotionLink
            href={`/projects/${project.slug}/`}
            style={
              {
                "--grid-column": "span 6",
                "--grid-column-lg": "span 4",
              } as React.CSSProperties
            }
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            title={project.title}
            key={project.sys.id}
          >
            <figure>
              <Image
                src={project.thumbnail.url}
                alt=""
                width={project.thumbnail.width}
                height={project.thumbnail.height}
                sizes="(min-width: 1200px) 315px, (min-width: 1024px) 260px, (min-width: 768px) 308px, (min-width: 560px) 228px, 50vw"
              />
            </figure>
          </MotionLink>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({
  locale = "fr",
  preview = false,
}: GetStaticPropsContext) {
  const homePage: HomePage = (await getHomePage(locale, preview)) ?? {};

  return {
    props: { homePage, preview },
  };
}