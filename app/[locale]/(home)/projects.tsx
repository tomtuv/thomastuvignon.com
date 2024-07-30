"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import { motion } from "framer-motion";
import { useId } from "react";
import FormattedMessage from "@/components/formatted-message";
import Image from "@/components/image";
import Link from "@/components/link";
import type { ProjectCard as ProjectCardType, HomePage } from "@/lib/types";
import styles from "./projects.module.css";

function ProjectCard({ project }: { project: ProjectCardType }) {
  const updatedProject = useContentfulLiveUpdates(project);

  const inspectorProps = useContentfulInspectorMode({
    entryId: project?.sys.id,
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
  const id = useId();
  const updatedHomePage = useContentfulLiveUpdates(homePage);

  const inspectorProps = useContentfulInspectorMode({
    entryId: homePage?.sys.id,
  });

  return (
    <section className={styles.root} aria-labelledby={id}>
      <h2 id={id} className={styles.heading}>
        <FormattedMessage id="work" />
      </h2>
      <ul
        className={styles.grid}
        role="list"
        {...inspectorProps({ fieldId: "projects" })}
      >
        {updatedHomePage?.projectsCollection?.items.map(
          (project) =>
            project && <ProjectCard project={project} key={project?.sys.id} />
        )}
      </ul>
    </section>
  );
}
