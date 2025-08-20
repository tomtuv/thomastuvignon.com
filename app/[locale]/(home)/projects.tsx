"use client";

import { motion } from "motion/react";
import { useId } from "react";
import FormattedMessage from "@/components/formatted-message";
import Image from "@/components/image";
import Link from "@/components/link";
import type { ProjectCard as ProjectCardType, HomePage } from "@/lib/types";
import styles from "./projects.module.css";

function ProjectCard({ project }: { project: ProjectCardType }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project?.slug}`}>
        {project?.thumbnail?.url && (
          <Image
            src={project.thumbnail.url}
            alt={project.title ?? ""}
            width={Number(project.thumbnail.width)}
            height={Number(project.thumbnail.height)}
            sizes="(min-width: 80rem) 251px, (min-width: 64rem) 366px, 50vw"
          />
        )}
      </Link>
    </motion.li>
  );
}

export default function Projects({ homePage }: { homePage: HomePage }) {
  const id = useId();

  return (
    <section className={styles.root} aria-labelledby={id}>
      <h2 id={id} className={styles.heading}>
        <FormattedMessage id="work" />
      </h2>
      <ul className={styles.grid} role="list">
        {homePage?.projectsCollection?.items.map(
          (project) =>
            project && <ProjectCard project={project} key={project?.sys.id} />
        )}
      </ul>
    </section>
  );
}
