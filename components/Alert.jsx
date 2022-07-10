import Link from "next/link";
import styles from "./Alert.module.css";

export default function Alert() {
  return (
    <div className={styles.root}>
      <div className="container">
        <p>
          This is a page preview.{" "}
          <Link href="/api/exit-preview">Click here</Link> to exit preview mode.
        </p>
      </div>
    </div>
  );
}
