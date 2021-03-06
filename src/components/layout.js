import React, { useEffect } from "react"
import AOS from "aos"
import Footer from "./footer"

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="wrapper">
      {children}
      <Footer />
    </div>
  )
}

export default Layout
