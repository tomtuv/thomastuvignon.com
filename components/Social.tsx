import FormattedMessage from "./FormattedMessage";
import Github from "./Github";
import Link from "./Link";
import Linkedin from "./Linkedin";
import Mail from "./Mail";
import Mastodon from "./Mastodon";
import styles from "./Social.module.css";
import VisuallyHidden from "./VisuallyHidden";
import X from "./X";

export default function Social() {
  return (
    <ul className={styles.root} role="list">
      <li>
        <Link
          href="https://github.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>GitHub</VisuallyHidden>
          <Github />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/thomastuvignon"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>LinkedIn</VisuallyHidden>
          <Linkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://techhub.social/@tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>Mastodon</VisuallyHidden>
          <Mastodon />
        </Link>
      </li>
      <li>
        <Link
          href="https://x.com/tomtuv"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>X</VisuallyHidden>
          <X />
        </Link>
      </li>
      <li>
        <Link href="mailto:ttuvignon@icloud.com">
          <VisuallyHidden>
            <FormattedMessage id="email" />
          </VisuallyHidden>
          <Mail />
        </Link>
      </li>
    </ul>
  );
}
