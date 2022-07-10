import { motion } from "framer-motion";
import Alert from "./Alert";
import Header from "./Header";
import Footer from "./Footer";
import Analytics from "./Analytics";
import styles from "./Layout.module.css";

export default function Layout({ children, page, preview }) {
  const className = page.__typename === "HomePage" ? styles.home : styles.page;

  return (
    <div className={className}>
      {preview && <Alert />}
      <Header page={page} />
      <motion.main className={styles.content} layout="position" layoutId="main">
        {children}
      </motion.main>
      <Footer />
      <Analytics />
    </div>
  );
}
