import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styles from "./Alert.module.css";

export default function Alert() {
  return (
    <div className={styles.root}>
      <p>
        <FormattedMessage id="previewMode" />{" "}
        <Link href="/api/exit-preview" data-link="" data-variant="reverse">
          <FormattedMessage id="exit" />
        </Link>
      </p>
    </div>
  );
}
