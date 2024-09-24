import { draftMode } from "next/headers";
import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";
import styles from "./layout.module.css";

export default function Layout({
  page,
  children,
}: React.PropsWithChildren<{
  page: React.ComponentPropsWithoutRef<typeof Header>["page"];
}>) {
  const { isEnabled } = draftMode();

  return (
    <div className={styles.root}>
      {isEnabled && <Alert />}
      <Header page={page} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
