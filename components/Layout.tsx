import Alert from "./Alert";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

type Props = {
  page: React.ComponentProps<typeof Header>["page"];
  preview: boolean;
};

export default function Layout({
  page,
  preview,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={styles.root}>
      {preview && <Alert />}
      <Header page={page} />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
