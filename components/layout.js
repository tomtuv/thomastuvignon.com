import Alert from "./alert";
import Header from "./header";
import Footer from "./footer";
import Analytics from "./analytics";

export default function Layout({ children, page, preview }) {
  const className = page.__typename === "HomePage" ? "home" : "page";

  return (
    <div className={className}>
      {preview && <Alert />}
      <Header page={page} />
      <main className="content">{children}</main>
      <Footer />
      <Analytics />
    </div>
  );
}
