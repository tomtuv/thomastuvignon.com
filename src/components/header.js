import React, { useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl, Link } from "gatsby-plugin-intl"
import Bubbles from "./bubbles"

const Header = ({ homePage, project }) => {
  const [modal, setModal] = useState("")
  const video = useRef(null)
  const intl = useIntl()

  function toggleModal() {
    setModal(modal === "" ? " active" : "")
    modal === "" ? video.current.play() : video.current.pause()
  }

  const data = useStaticQuery(graphql`
    query {
      poster: file(absolutePath: { regex: "/og-image.jpg/" }) {
        publicURL
      }
    }
  `)

  if (homePage) {
    return (
      <header className="header header-home">
        <Bubbles />
        <div className="container">
          <div className="grid">
            <figure data-column="12" data-column-lg="4">
              <GatsbyImage
                image={
                  homePage.profilePicture.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={homePage.title}
                style={{ display: "block" }}
              />
            </figure>
            <article data-column="12" data-column-lg="8">
              <h1>{homePage.title}</h1>
              <p>{homePage.jobTitle}</p>
              <button className="link" onClick={toggleModal}>
                {intl.formatMessage({ id: "modal.button" })}
              </button>
            </article>
          </div>
        </div>
        <div className={`video${modal}`} role="dialog">
          <div className="container">
            <div className="grid">
              <div data-column="12" data-column-lg="10" data-start-lg="2">
                <button className="link link-back" onClick={toggleModal}>
                  {intl.formatMessage({ id: "general.back" })}
                </button>
                <video // eslint-disable-line jsx-a11y/media-has-caption
                  controls
                  playsInline
                  preload="none"
                  ref={video}
                  poster={data.poster.publicURL}
                >
                  <source
                    src={homePage.video.localFile.publicURL}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  } else {
    return (
      <header className="header">
        <Bubbles />
        <div className="container">
          <Link
            to="/"
            className="link link-back"
            aria-label={intl.formatMessage({ id: "general.back" })}
          >
            Thomas Tuvignon
          </Link>
          <h1>
            {project ? project.title : intl.formatMessage({ id: "404.title" })}
          </h1>
        </div>
      </header>
    )
  }
}

export default Header
