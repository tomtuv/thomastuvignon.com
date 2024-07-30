import Languages from "./languages";
import Social from "./social";
import styles from "./footer.module.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.root}>
      <Social />
      <Languages />
      <small>{`© ${year} Thomas Tuvignon`}</small>
    </footer>
  );
}
