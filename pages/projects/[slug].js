import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import { getAllProjectsWithSlug, getProject } from "../../lib/api";

export default function Project({ project }) {
  return (
    <Layout>
      <Container>
        <Header />
        <article>
          <Head>
            <title>{project?.title} | Thomas Tuvignon</title>
          </Head>
          <h1>{project?.title}</h1>
          <p>{project?.description}</p>
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = await getProject(params.slug);

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllProjectsWithSlug();

  return {
    paths: allPosts?.map(({ slug }) => `/projects/${slug}`) ?? [],
    fallback: true,
  };
}
