import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "./layout";
import SEO from "../components/seo";
import Bubbles from "./bubbles";

const shortcodes = { Link };

const Project = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <header className="header">
        <Bubbles />

        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Link to="/" className="link-backward">
                Thomas Tuvignon
              </Link>
              <h1>{mdx.frontmatter.title}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="container">
          <article>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
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

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`;

export default Project;
