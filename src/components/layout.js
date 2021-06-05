import React, { useEffect } from "react"
import AOS from "aos"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ isHomePage, children }) => {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="wrapper">
      <Header isHomePage={isHomePage} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
