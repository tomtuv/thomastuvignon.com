import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Text from "../components/text";
import Media from "../components/media";

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
                    <Text block={block} />
                  ) : (
                    block.images.map((image, i) => (
                      <Media
                        project={project}
                        block={block}
                        image={image}
                        key={i}
                      />
                    ))
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
