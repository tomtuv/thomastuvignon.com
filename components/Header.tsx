"use client";

import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import styles from "./Header.module.css";
import Image from "./Image";
import Link from "./Link";
import type { HomePage, Project, Page } from "@/lib/types";

export default function Header({ page }: { page: HomePage | Project | Page }) {
  const data = useContentfulLiveUpdates(page);

  return (
    <header className={styles.root}>
      {data.__typename === "HomePage" ? (
        <>
          {data.profilePicture?.url && (
            <Image
              src={data.profilePicture.url}
              alt=""
              width={Number(data.profilePicture.width)}
              height={Number(data.profilePicture.height)}
              sizes="(min-width: 30rem) 170px, 130px"
              priority
            />
          )}
          <h1>{data.title}</h1>
          <p>{data.jobTitle}</p>
        </>
      ) : (
        <>
          <Link href="/" variant="underline-inverse">
            Thomas Tuvignon
          </Link>
          <h1>{data.title}</h1>
        </>
      )}
    </header>
  );
}
