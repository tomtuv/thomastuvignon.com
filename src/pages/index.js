import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bubbles from "../components/bubbles";

const IndexPage = ({ data }) => {
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
                    fluid={data.thomas.childImageSharp.fluid}
                    alt="Thomas Tuvignon"
                  />
                </figure>
                <div>
                  <h1>Thomas Tuvignon</h1>
                  <p>Intégrateur web</p>
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
                  poster="cv.jpg"
                  ref={video}
                >
                  <source src="cv.mp4" type="video/mp4" />
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
            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/ace-hotel">
                <figure>
                  <Img
                    fluid={data.aceHotel.childImageSharp.fluid}
                    alt="ACE Hôtel"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/cikaba">
                <figure>
                  <Img fluid={data.cikaba.childImageSharp.fluid} alt="Cikaba" />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/easy-snowboards">
                <figure>
                  <Img
                    fluid={data.easySnowboards.childImageSharp.fluid}
                    alt="Easy Snowboards"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/easybike">
                <figure>
                  <Img
                    fluid={data.easybike.childImageSharp.fluid}
                    alt="Easybike"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/solex">
                <figure>
                  <Img fluid={data.solex.childImageSharp.fluid} alt="Solex" />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/matra">
                <figure>
                  <Img fluid={data.matra.childImageSharp.fluid} alt="Matra" />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/easybike-group">
                <figure>
                  <Img
                    fluid={data.easybikeGroup.childImageSharp.fluid}
                    alt="Easybike Group"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/1991">
                <figure>
                  <Img
                    fluid={data.oneNineNineOne.childImageSharp.fluid}
                    alt="1991"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/hudi">
                <figure>
                  <Img fluid={data.hudi.childImageSharp.fluid} alt="Hudi" />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/michelin">
                <figure>
                  <Img
                    fluid={data.michelin.childImageSharp.fluid}
                    alt="Michelin"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/horse-pilot">
                <figure>
                  <Img
                    fluid={data.horsePilot.childImageSharp.fluid}
                    alt="Horse Pilot"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/midi-life">
                <figure>
                  <Img
                    fluid={data.midiLife.childImageSharp.fluid}
                    alt="Midi Life"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/paips">
                <figure>
                  <Img fluid={data.paips.childImageSharp.fluid} alt="Paips" />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/musee-de-la-mine">
                <figure>
                  <Img
                    fluid={data.museeDeLaMine.childImageSharp.fluid}
                    alt="Musée de la Mine"
                  />
                </figure>
              </Link>
            </div>

            <div className="col-lg-4 col-6" data-aos="fade-up">
              <Link to="/projects/arize-leze">
                <figure>
                  <Img
                    fluid={data.arizeLeze.childImageSharp.fluid}
                    alt="Arize-Lèze"
                  />
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    thomas: file(relativePath: { eq: "thomas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 170) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aceHotel: file(relativePath: { eq: "ace-hotel.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cikaba: file(relativePath: { eq: "cikaba.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    easySnowboards: file(relativePath: { eq: "easy-snowboards.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    easybike: file(relativePath: { eq: "easybike.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    solex: file(relativePath: { eq: "solex.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    matra: file(relativePath: { eq: "matra.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    easybikeGroup: file(relativePath: { eq: "easybike-group.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oneNineNineOne: file(relativePath: { eq: "1991.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hudi: file(relativePath: { eq: "hudi.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    michelin: file(relativePath: { eq: "michelin.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    horsePilot: file(relativePath: { eq: "horse-pilot.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    midiLife: file(relativePath: { eq: "midi-life.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    paips: file(relativePath: { eq: "paips.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    museeDeLaMine: file(relativePath: { eq: "musee-de-la-mine.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    arizeLeze: file(relativePath: { eq: "arize-leze.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
