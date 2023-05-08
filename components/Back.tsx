"use client";

import { FormattedMessage } from "react-intl";
import styles from "./Back.module.css";
import Link from "./Link";

export default function Back() {
  return (
    <aside className={styles.root}>
      <Link href="/" variant="underline">
        <FormattedMessage id="back" />
      </Link>
    </aside>
  );
}
