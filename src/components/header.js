import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Bubbles from "./bubbles";

const Header = ({ homePage, project }) => {
  const [modal, setModal] = useState("");
  const video = useRef(null);

  function toggleModal() {
    setModal(modal === "" ? " active" : "");
    modal === "" ? video.current.play() : video.current.pause();
  }

  if (homePage) {
    return (
      <header className="header header-home">
        <Bubbles />
        <div className="container">
          <div className="grid">
            <figure>
              <Img fluid={homePage.profilePicture.fluid} alt={homePage.title} />
            </figure>
            <article>
              <h1>{homePage.title}</h1>
              <p>{homePage.jobTitle}</p>
              <button className="link" onClick={toggleModal}>
                Voir le CV vidéo
              </button>
            </article>
          </div>
        </div>

        <div className={`video${modal}`} role="dialog">
          <div className="container">
            <div className="grid">
              <div className="grid-col-10 grid-start-2">
                <button className="link link-back" onClick={toggleModal}>
                  Retour
                </button>

                <video // eslint-disable-line jsx-a11y/media-has-caption
                  controls
                  playsInline
                  preload="none"
                  ref={video}
                  poster="/og-image.jpg"
                >
                  <source src={homePage.video.file.url} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <Bubbles />

        <div className="container">
          <Link to="/" className="link link-back">
            Thomas Tuvignon
          </Link>
          <h1>{project ? project.title : "Page introuvable"}</h1>
        </div>
      </header>
    );
  }
};

export default Header;
