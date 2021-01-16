import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bubbles from "../components/bubbles";
import useContentfulImage from "../hook/useContentfulImage";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fluid = useContentfulImage(node.data.target.fields.file["fr"].url);
      return <Img className="my-8" fluid={fluid} />;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          className="link-forward"
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      return (
        <Link to={`/${node.data.target.fields.slug["fr"]}`}>{children}</Link>
      );
    },
  },
};

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
            {project.content &&
              documentToReactComponents(project.content.json, options)}
            <p>
              <Link to="/" className="link-backward">
                Retour
              </Link>
            </p>
          </article>
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
        json
      }
    }
  }
`;
