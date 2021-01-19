import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Page introuvable" />
      <Header />
      <main className="content content-404">
        <div className="container">
          <h2>Oups, il n’y a rien à voir ici…</h2>
          <p>
            <Link to="/" className="link link-back">
              Retourner à l’accueil
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
