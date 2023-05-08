import Footer from "./Footer";
import Header from "./Header";
import styles from "./PageLayout.module.css";

export default function PageLayout({
  page,
  children,
}: React.PropsWithChildren<{
  page: React.ComponentProps<typeof Header>["page"];
}>) {
  return (
    <div className={styles.root}>
      <Header page={page} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
