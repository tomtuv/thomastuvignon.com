import type { ReactNode } from "react";
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
  return (
    <div className={styles.root}>
      {preview && <Alert />}
      <Header page={page} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
