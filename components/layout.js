import { useEffect } from "react";
import AOS from "aos";
import Preview from "./preview";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, data, preview }) {
  const className = data.__typename === "HomePage" ? "home" : "page";

  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={className}>
      {preview && <Preview />}
      <Header data={data} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}
