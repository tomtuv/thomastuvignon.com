import React, { useEffect } from "react"

const Bubbles = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrolled =
        window.scrollY || window.scrollTop || document.documentElement.scrollTop
      const parallax1 = document.querySelector(".bubbles-parallax-1")
      const parallax2 = document.querySelector(".bubbles-parallax-2")
      const parallax3 = document.querySelector(".bubbles-parallax-3")
      const parallax4 = document.querySelector(".bubbles-parallax-4")

      parallax1 && (parallax1.style.top = `${0 - scrolled * 0.1}px`)
      parallax2 && (parallax2.style.top = `${0 - scrolled * 0.2}px`)
      parallax3 && (parallax3.style.top = `${0 - scrolled * 0.3}px`)
      parallax4 && (parallax4.style.top = `${0 - scrolled * 0.4}px`)
    })
  })

  return (
    <div className="bubbles" aria-hidden="true">
      <div className="bubbles-parallax bubbles-parallax-1">
        <div className="bubbles-item bubbles-item-1">&nbsp;</div>
        <div className="bubbles-item bubbles-item-2">&nbsp;</div>
        <div className="bubbles-item bubbles-item-3">&nbsp;</div>
        <div className="bubbles-item bubbles-item-4">&nbsp;</div>
        <div className="bubbles-item bubbles-item-5">&nbsp;</div>
        <div className="bubbles-item bubbles-item-6">&nbsp;</div>
        <div className="bubbles-item bubbles-item-7">&nbsp;</div>
        <div className="bubbles-item bubbles-item-8">&nbsp;</div>
        <div className="bubbles-item bubbles-item-9">&nbsp;</div>
        <div className="bubbles-item bubbles-item-10">&nbsp;</div>
        <div className="bubbles-item bubbles-item-11">&nbsp;</div>
        <div className="bubbles-item bubbles-item-12">&nbsp;</div>
      </div>

      <div className="bubbles-parallax bubbles-parallax-2">
        <div className="bubbles-item bubbles-item-13">&nbsp;</div>
        <div className="bubbles-item bubbles-item-14">&nbsp;</div>
        <div className="bubbles-item bubbles-item-15">&nbsp;</div>
        <div className="bubbles-item bubbles-item-16">&nbsp;</div>
        <div className="bubbles-item bubbles-item-17">&nbsp;</div>
        <div className="bubbles-item bubbles-item-18">&nbsp;</div>
        <div className="bubbles-item bubbles-item-19">&nbsp;</div>
        <div className="bubbles-item bubbles-item-20">&nbsp;</div>
        <div className="bubbles-item bubbles-item-21">&nbsp;</div>
        <div className="bubbles-item bubbles-item-22">&nbsp;</div>
        <div className="bubbles-item bubbles-item-23">&nbsp;</div>
        <div className="bubbles-item bubbles-item-24">&nbsp;</div>
      </div>

      <div className="bubbles-parallax bubbles-parallax-3">
        <div className="bubbles-item bubbles-item-25">&nbsp;</div>
        <div className="bubbles-item bubbles-item-26">&nbsp;</div>
        <div className="bubbles-item bubbles-item-27">&nbsp;</div>
        <div className="bubbles-item bubbles-item-28">&nbsp;</div>
        <div className="bubbles-item bubbles-item-29">&nbsp;</div>
        <div className="bubbles-item bubbles-item-30">&nbsp;</div>
        <div className="bubbles-item bubbles-item-31">&nbsp;</div>
        <div className="bubbles-item bubbles-item-32">&nbsp;</div>
        <div className="bubbles-item bubbles-item-33">&nbsp;</div>
        <div className="bubbles-item bubbles-item-34">&nbsp;</div>
        <div className="bubbles-item bubbles-item-35">&nbsp;</div>
        <div className="bubbles-item bubbles-item-36">&nbsp;</div>
      </div>

      <div className="bubbles-parallax bubbles-parallax-4">
        <div className="bubbles-item bubbles-item-37">&nbsp;</div>
        <div className="bubbles-item bubbles-item-38">&nbsp;</div>
        <div className="bubbles-item bubbles-item-39">&nbsp;</div>
        <div className="bubbles-item bubbles-item-40">&nbsp;</div>
        <div className="bubbles-item bubbles-item-41">&nbsp;</div>
        <div className="bubbles-item bubbles-item-42">&nbsp;</div>
        <div className="bubbles-item bubbles-item-43">&nbsp;</div>
        <div className="bubbles-item bubbles-item-44">&nbsp;</div>
        <div className="bubbles-item bubbles-item-45">&nbsp;</div>
        <div className="bubbles-item bubbles-item-46">&nbsp;</div>
        <div className="bubbles-item bubbles-item-47">&nbsp;</div>
        <div className="bubbles-item bubbles-item-48">&nbsp;</div>
      </div>
    </div>
  )
}

export default Bubbles
