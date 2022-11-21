import { useIntl } from "react-intl";
import Link from "./Link";
import Linkedin from "./Linkedin";
import Mastodon from "./Mastodon";
import Twitter from "./Twitter";
import Github from "./Github";
import Mail from "./Mail";
import styles from "./Social.module.css";

export default function Social() {
  const { formatMessage } = useIntl();

  return (
    <ul className={styles.root} role="list">
      <li>
        <Link
          href="https://github.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
          title="GitHub"
        >
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/thomastuvignon"
          target="_blank"
          rel="me noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://techhub.social/@tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
          title="Mastodon"
        >
          <Mastodon />
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </Link>
      </li>
      <li>
        <Link
          href="mailto:ttuvignon@icloud.com"
          title={formatMessage({ id: "email" })}
        >
          <Mail />
        </Link>
      </li>
    </ul>
  );
}
