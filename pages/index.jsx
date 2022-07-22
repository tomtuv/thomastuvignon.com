import Link from "next/link";
import Image from "next/future/image";
import { getPlaiceholder } from "plaiceholder";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import Seo from "components/Seo";
import { getHomePage } from "lib/api";

const MotionLink = motion(Link);

export default function Index({ projects }) {
  const { formatMessage } = useIntl();

  return (
    <>
      <Seo description={formatMessage({ id: "description" })} />
      <div data-container="">
        {projects?.map((project) => (
          <MotionLink
            href={`/projects/${project.slug}/`}
            style={{
              "--grid-column": "span 6",
              "--grid-column-lg": "span 4",
            }}
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
                placeholder="blur"
                blurDataURL={project.thumbnail.base64}
              />
            </figure>
          </MotionLink>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps({ locale, preview = false }) {
  const homePage = (await getHomePage(locale, preview)) ?? {};
  const { title, jobTitle, video } = homePage;

  const profilePicture = {
    ...homePage.profilePicture,
    base64: await (await getPlaiceholder(homePage.profilePicture.url)).base64,
  };

  const projects =
    (await Promise.all(
      homePage.projectsCollection?.items.map(async (project) => ({
        ...project,
        thumbnail: {
          ...project.thumbnail,
          base64: await (await getPlaiceholder(project.thumbnail.url)).base64,
        },
      }))
    )) ?? [];

  return {
    props: { title, jobTitle, profilePicture, video, projects, preview },
  };
}
