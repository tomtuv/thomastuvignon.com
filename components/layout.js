import { useEffect } from "react";
import AOS from "aos";
import { useDataContext } from "context/data";
import Preview from "./preview";
import Header from "./header";
import Footer from "./footer";

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
