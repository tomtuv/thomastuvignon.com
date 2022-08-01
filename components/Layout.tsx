import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Alert from "./Alert";
import Header from "./Header";
import Footer from "./Footer";
import Analytics from "./Analytics";
import styles from "./Layout.module.css";

type Props = {
  preview: boolean;
  children: React.ReactNode;
  props: any;
};

export default function Layout({ preview, children, ...props }: Props) {
  const router = useRouter();
  const variant = router.pathname === "/" ? "home" : "page";

  return (
    <div className={styles.root} data-variant={variant}>
      {preview && <Alert />}
      <Header {...props} />
      <motion.main className={styles.content} layout="position" layoutId="main">
        {children}
      </motion.main>
      <Footer />
      <Analytics />
    </div>
  );
}
