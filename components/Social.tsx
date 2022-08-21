import { useIntl } from "react-intl";
import Link from "./Link";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
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
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/thomastuvignon"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com/tomtuv"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.facebook.com/thomas.tuvignon"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <Facebook />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/tomtuv"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <Instagram />
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
