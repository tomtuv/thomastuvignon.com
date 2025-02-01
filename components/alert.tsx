import FormattedMessage from "./formatted-message";
import Link from "./link";
import styles from "./alert.module.css";

export default function Alert() {
  return (
    <aside className={styles.root}>
      <p>
        <FormattedMessage id="draftMode" />{" "}
        <Link href="/api/disable-draft" underline>
          <FormattedMessage id="disable" />
        </Link>
      </p>
    </aside>
  );
}
