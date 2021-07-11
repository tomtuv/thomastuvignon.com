import { useEffect } from "react";
import AOS from "aos";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ isHomePage, children }) {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={`page ${isHomePage ? "page-home" : "page-project"}`}>
      <Header isHomePage={isHomePage} />
      {children}
      <Footer />
    </div>
  );
}
