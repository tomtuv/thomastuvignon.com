"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "./Image";
import Link from "./Link";
import styles from "./Projects.module.css";
import type { HomePage, Project } from "@/lib/types";

function ProjectCard({ project }: { project: Project }) {
  const { locale } = useIntl();
  const updatedProject = useContentfulLiveUpdates(project, { locale });

  const inspectorProps = useContentfulInspectorMode({
    entryId: project.sys.id,
  });

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link
        href={`/projects/${updatedProject?.slug}/`}
        {...inspectorProps({ fieldId: "slug" })}
      >
        {updatedProject?.thumbnail?.url && (
          <Image
            src={updatedProject.thumbnail.url}
            alt={updatedProject.title ?? ""}
            width={Number(updatedProject.thumbnail.width)}
            height={Number(updatedProject.thumbnail.height)}
            sizes="(min-width: 80rem) 251px, (min-width: 64rem) 366px, 50vw"
            {...inspectorProps({ fieldId: "thumbnail" })}
          />
        )}
      </Link>
    </motion.li>
  );
}

export default function Projects({ homePage }: { homePage: HomePage }) {
  const updatedHomePage = useContentfulLiveUpdates(homePage);

  const inspectorProps = useContentfulInspectorMode({
    entryId: homePage.sys.id,
  });

  return (
    <section className={styles.root} aria-labelledby={homePage.sys.id}>
      <h2 id={homePage.sys.id} className={styles.heading}>
        <FormattedMessage id="work" />
      </h2>
      <ul
        className={styles.grid}
        role="list"
        {...inspectorProps({ fieldId: "projects" })}
      >
        {updatedHomePage.projectsCollection?.items.map((project) =>
          project ? (
            <ProjectCard project={project} key={project.sys.id} />
          ) : null
        )}
      </ul>
    </section>
  );
}
