import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO />
      <main title="Page introuvable" className="content">
        <div className="container">
          <h1>Page introuvable</h1>
          <Link to="/" className="link-backward">
            Retourner à l’accueil
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
