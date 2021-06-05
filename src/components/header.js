import React, { useRef, useState, useContext, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl, Link } from "gatsby-plugin-react-intl"
import Context from "./context"
import Bubbles from "./bubbles"
import Modal from "./modal"

const Header = ({ isHomePage }) => {
  const [modal, setModal] = useState("")
  const video = useRef(null)
  const { data } = useContext(Context)
  const intl = useIntl()
  const homePage = data.contentfulHomePage
  const project = data.contentfulProject
  const pageTitle = project?.title || intl.formatMessage({ id: "404.title" })

  function toggleModal() {
    setModal(modal === "" ? " active" : "")
    modal === "" ? video.current.play() : video.current.pause()
  }

  useEffect(() => {
    function closeModal(event) {
      if (modal === " active" && event.key === "Escape") {
        setModal("")
        video.current.pause()
      }
    }

    window.addEventListener("keydown", closeModal)
    return () => window.removeEventListener("keydown", closeModal)
  }, [modal])

  return (
    <header className="header">
      <Bubbles />
      <div className="container">
        {isHomePage ? (
          <div className="grid">
            <div data-column="12" data-column-lg="4">
              <GatsbyImage
                image={
                  homePage.profilePicture.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={homePage.title}
              />
            </div>
            <div data-column="12" data-column-lg="8">
              <h1>{homePage.title}</h1>
              <p>{homePage.jobTitle}</p>
              <button className="link" onClick={toggleModal}>
                {intl.formatMessage({ id: "modal.button" })}
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/"
              className="link link-back"
              aria-label={intl.formatMessage({ id: "general.back" })}
            >
              {homePage.title}
            </Link>
            <h1>{pageTitle}</h1>
          </>
        )}
      </div>
      {isHomePage && (
        <Modal modal={modal} toggleModal={toggleModal} video={video} />
      )}
    </header>
  )
}

export default Header
