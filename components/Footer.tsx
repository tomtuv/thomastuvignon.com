import styles from "./Footer.module.css";
import Languages from "./Languages";
import Social from "./Social";

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
