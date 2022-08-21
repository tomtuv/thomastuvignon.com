import Social from "./Social";
import Languages from "./Languages";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <Social />
      <Languages />
      <small>{`© ${year} Thomas Tuvignon`}</small>
    </footer>
  );
}
