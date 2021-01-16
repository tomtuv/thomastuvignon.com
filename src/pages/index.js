import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bubbles from "../components/bubbles";

const IndexPage = ({ data }) => {
  const page = data.contentfulHomePage;
  const [modal, setModal] = useState("");
  const video = useRef(null);

  function toggleModal() {
    setModal(modal === "" ? " active" : "");
    modal === "" ? video.current.play() : video.current.pause();
  }

  return (
    <Layout>
      <SEO />
      <header className="header header-home">
        <Bubbles />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <figure>
                  <Img
                    fluid={page.profilePicture.fluid}
                    alt={page.profilePicture.title}
                  />
                </figure>
                <div>
                  <h1>{page.title}</h1>
                  <p>{page.jobTitle}</p>
                  <button className="link-forward" onClick={toggleModal}>
                    Voir le CV vidéo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`video${modal}`}>
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <button className="link-backward" onClick={toggleModal}>
                  Retour
                </button>

                <video // eslint-disable-line jsx-a11y/media-has-caption
                  controls
                  playsInline
                  preload="none"
                  ref={video}
                  poster="cv.jpg"
                >
                  <source src={page.video.file.url} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="overlay"></div>
        </div>
      </header>

      <main className="content">
        <div className="container">
          <div className="row">
            {page.projects.map((project, i) => (
              <div className="col-lg-4 col-6" data-aos="fade-up" key={i}>
                <Link to={`/projects/${project.slug}`}>
                  <figure>
                    <Img
                      fluid={project.thumbnail.fluid}
                      alt={project.thumbnail.title}
                    />
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulHomePage {
      title
      jobTitle
      profilePicture {
        fluid(maxHeight: 170, quality: 80) {
          ...GatsbyContentfulFluid_withWebp
        }
        title
      }
      video {
        file {
          url
        }
      }
      projects {
        thumbnail {
          fluid(maxHeight: 330, quality: 80) {
            ...GatsbyContentfulFluid_withWebp
          }
          title
        }
        slug
      }
    }
  }
`;

export default IndexPage;
