import Social from "./Social";
import Languages from "./Languages";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className="container">
        <div>
          <Social />
          <Languages />
          <p>&copy; {year} Thomas Tuvignon</p>
        </div>
      </div>
    </footer>
  );
}
