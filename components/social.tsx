import Bluesky from "./bluesky";
import Github from "./github";
import Link from "./link";
import Linkedin from "./linkedin";
import Mastodon from "./mastodon";
import VisuallyHidden from "./visually-hidden";
import X from "./x";
import styles from "./social.module.css";

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
          href="https://bsky.app/profile/thomastuvignon.com"
          target="_blank"
          rel="me noopener noreferrer"
        >
          <VisuallyHidden>Bluesky</VisuallyHidden>
          <Bluesky />
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
    </ul>
  );
}
