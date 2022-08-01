import React from "react";
import type { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Image from "../components/Image";
import { getHomePage } from "../lib/api";

const MotionLink = motion(Link);

export default function Index({ projectsCollection }: any) {
  const { formatMessage } = useIntl();

  return (
    <>
      <Seo description={formatMessage({ id: "description" })} />
      <div data-container="">
        {projectsCollection.items?.map((project: any) => (
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
    </>
  );
}

export async function getStaticProps({
  locale = "fr",
  preview = false,
}: GetStaticPropsContext) {
  const homePage = (await getHomePage(locale, preview)) ?? {};
  const { title, jobTitle, video, profilePicture, projectsCollection } =
    homePage;

  return {
    props: {
      title,
      jobTitle,
      profilePicture,
      video,
      projectsCollection,
      preview,
    },
  };
}
