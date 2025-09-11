import { draftMode } from "next/headers";
import { unstable_ViewTransition as ViewTransition } from "react";
import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.css";

export default async function Layout({
  page,
  children,
}: React.PropsWithChildren<{
  page: React.ComponentPropsWithoutRef<typeof Header>["page"];
}>) {
  const { isEnabled } = await draftMode();

  return (
    <ViewTransition enter={styles["slide-in"]}>
      <div className={styles.root}>
        {isEnabled && <Alert />}
        <ViewTransition name="header">
          <Header page={page} />
        </ViewTransition>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </ViewTransition>
  );
}
