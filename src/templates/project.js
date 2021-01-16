import React from "react";
import { Link, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bubbles from "../components/bubbles";

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject;

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description.description}
      />
      <header className="header">
        <Bubbles />

        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Link to="/" className="link-backward">
                Thomas Tuvignon
              </Link>
              <h1>{project.title}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="container">
          <article>
            {project.content.map((block, i) => (
              <>
                {block.content ? (
                  <div className="row" key={i}>
                    <div className="col-lg-10 offset-lg-1">
                      <h2>{block.title}</h2>
                      <h3>{block.subtitle}</h3>
                      {block.content &&
                        documentToReactComponents(block.content.json)}
                      {block.link && (
                        <a
                          href={block.link}
                          target="_blank"
                          rel="noreferrer"
                          className="link-forward"
                        >
                          Voir le site web
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div class="row" key={i}>
                    {block.images.map((image, i) => (
                      <div
                        class={
                          block.layout === "2 columns"
                            ? "col-md-6"
                            : block.layout === "3 columns"
                            ? "col-md-4"
                            : "col"
                        }
                        key={i}
                      >
                        <figure data-aos="fade-up">
                          <img src={image.file.url} alt="ACE Hôtel" />
                        </figure>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ))}
          </article>
          <p>
            <Link to="/" className="link-backward">
              Retour
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description {
        description
      }
      content {
        ... on ContentfulText {
          title
          subtitle
          content {
            json
          }
          link
        }
        ... on ContentfulMedia {
          layout
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
