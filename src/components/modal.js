import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-react-intl"
import Context from "./context"

const Modal = ({ modal, toggleModal, video }) => {
  const { data } = useContext(Context)
  const { poster } = useStaticQuery(query)
  const intl = useIntl()

  return (
    <div
      className={`modal${modal}`}
      role="dialog"
      aria-hidden={modal === "" ? true : null}
      tabIndex="-1"
    >
      <div className="container">
        <div className="grid">
          <div data-column="12" data-column-lg="10" data-start-lg="2">
            <button className="link link-back" onClick={toggleModal}>
              {intl.formatMessage({ id: "general.back" })}
            </button>
            <video // eslint-disable-line jsx-a11y/media-has-caption
              width="1920"
              height="1080"
              controls
              playsInline
              preload="none"
              poster={poster.publicURL}
              ref={video}
            >
              <source
                src={data.contentfulHomePage.video.localFile.publicURL}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

const query = graphql`
  query {
    poster: file(absolutePath: { regex: "/og-image.jpg/" }) {
      publicURL
    }
  }
`
