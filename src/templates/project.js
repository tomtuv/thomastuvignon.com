import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProject;

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description.description}
      />
      <Header project={project} />

      <main className="content">
        <div className="container">
          <article>
            {project.blocks.map((block, i) => (
              <section key={i}>
                <div className="row">
                  {block.internal.type === "ContentfulText" ? (
                    <div className="col-lg-10 offset-lg-1">
                      <h2>{block.title}</h2>
                      <p>{block.subtitle}</p>
                      {block.body && renderRichText(block.body)}
                      {block.link && (
                        <a
                          href={block.link}
                          target="_blank"
                          rel="noreferrer"
                          className="link"
                        >
                          Voir le site web
                        </a>
                      )}
                    </div>
                  ) : (
                    <>
                      {block.images.map((image, i) => (
                        <div
                          className={
                            block.layout === "2 columns"
                              ? "col-md-6"
                              : block.layout === "3 columns"
                              ? "col-md-4"
                              : "col"
                          }
                          data-aos="fade-up"
                          key={i}
                        >
                          <figure>
                            <Img
                              fixed={image.fixed}
                              alt={project.title}
                              style={{
                                display: "block",
                                width: "100%",
                                height: "auto",
                              }}
                              imgStyle={{ position: "relative" }}
                              placeholderStyle={{ position: "absolute" }}
                            />
                          </figure>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </section>
            ))}
          </article>
          <aside>
            <Link to="/" className="link link-back">
              Retour
            </Link>
          </aside>
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
      blocks {
        ... on ContentfulText {
          title
          subtitle
          body {
            raw
          }
          link
          internal {
            type
          }
        }
        ... on ContentfulMedia {
          layout
          images {
            fixed(width: 2200, quality: 0) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
          internal {
            type
          }
        }
      }
    }
  }
`;
