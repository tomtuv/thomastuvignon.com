import { useEffect } from "react";
import AOS from "aos";
import { useDataContext } from "context/data";
import Preview from "components/preview";
import Header from "components/header";
import Footer from "components/footer";

export default function Layout({ children, preview }) {
  const { homePage } = useDataContext();

  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={homePage ? "home" : "page"}>
      {preview && <Preview />}
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
