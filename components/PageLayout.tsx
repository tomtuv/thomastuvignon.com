import { draftMode } from "next/headers";
import Alert from "./Alert";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./PageLayout.module.css";

export default function PageLayout({
  page,
  children,
}: React.PropsWithChildren<{
  page: React.ComponentProps<typeof Header>["page"];
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
