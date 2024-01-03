import styles from "./footer.module.css";
import Languages from "./languages";
import Social from "./social";

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
