import { FormattedMessage } from "react-intl";
import Link from "./Link";
import styles from "./Back.module.css";

export default function Back() {
  return (
    <aside className={styles.root}>
      <Link href="/" variant="underline">
        <FormattedMessage id="back" />
      </Link>
    </aside>
  );
}
