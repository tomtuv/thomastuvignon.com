"use client";

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import styles from "./Header.module.css";
import Image from "./Image";
import Link from "./Link";
import type { HomePage, Project, Page } from "@/lib/types";

export default function Header({ page }: { page: HomePage | Project | Page }) {
  const updatedPage = useContentfulLiveUpdates(page);
  const inspectorProps = useContentfulInspectorMode({ entryId: page.sys.id });

  return (
    <header className={styles.root}>
      {updatedPage.__typename === "HomePage" ? (
        <>
          {updatedPage.profilePicture?.url && (
            <Image
              src={updatedPage.profilePicture.url}
              alt=""
              width={Number(updatedPage.profilePicture.width)}
              height={Number(updatedPage.profilePicture.height)}
              sizes="(min-width: 30rem) 170px, 130px"
              priority
              {...inspectorProps({ fieldId: "profilePicture" })}
            />
          )}
          <h1 {...inspectorProps({ fieldId: "title" })}>{updatedPage.title}</h1>
          <p {...inspectorProps({ fieldId: "jobTitle" })}>
            {updatedPage.jobTitle}
          </p>
        </>
      ) : (
        <>
          <Link href="/" variant="underline-inverse">
            Thomas Tuvignon
          </Link>
          <h1 {...inspectorProps({ fieldId: "title" })}>{updatedPage.title}</h1>
        </>
      )}
    </header>
  );
}
