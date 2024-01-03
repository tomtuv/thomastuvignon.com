import styles from "./back.module.css";
import FormattedMessage from "./formatted-message";
import Link from "./link";

export default function Back() {
  return (
    <aside className={styles.root}>
      <Link href="/" variant="underline">
        <FormattedMessage id="back" />
      </Link>
    </aside>
  );
}
