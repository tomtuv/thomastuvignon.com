import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Alert from "./Alert";
import Header from "./Header";
import Footer from "./Footer";
import { HomePage, Page, Project } from "../interfaces";
import styles from "./Layout.module.css";

type Props = {
  page: HomePage | Project | Page;
  preview: boolean;
  children: ReactNode;
};

export default function Layout({ page, preview, children }: Props) {
  const variant = page.__typename === "HomePage" ? "home" : "page";

  return (
    <div className={styles.root} data-variant={variant}>
      {preview && <Alert />}
      <Header page={page} />
      <motion.main className={styles.content} layout="position" layoutId="main">
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
