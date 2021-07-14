import { useEffect } from "react";
import AOS from "aos";
import { useDataContext } from "../context/data";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
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
      <Header />
      {children}
      <Footer />
    </div>
  );
}
