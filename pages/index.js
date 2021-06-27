import Container from "../components/container";
import Layout from "../components/layout";
import { getAllProjectsForHome } from "../lib/api";
import Head from "next/head";
import Link from "next/link";

export default function Index({ allProjects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Thomas Tuvignon</title>
        </Head>
        <Container>
          <h1>Thomas Tuvignon</h1>
          <ul>
            {allProjects.map((project) => (
              <li key={project.slug}>
                <h3>
                  <Link
                    as={`/projects/${project.slug}`}
                    href="/projects/[slug]"
                  >
                    <a>{project.title}</a>
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = (await getAllProjectsForHome()) ?? [];

  return {
    props: { allProjects },
  };
}
