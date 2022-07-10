import { motion } from "framer-motion";
import Social from "./Social";
import Languages from "./Languages";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className={styles.root} layout="position" layoutId="footer">
      <div className="container">
        <div>
          <Social />
          <Languages />
          <p>&copy; {year} Thomas Tuvignon</p>
        </div>
      </div>
    </motion.footer>
  );
}
