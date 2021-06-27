import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { getHomePage } from "../lib/api";

export default function Index({ homePage }) {
  return (
    <Layout isHomePage>
      <Seo bodyClass="home" />
      <main className="content">
        <div className="container">
          <div className="grid">
            {homePage.projectsCollection?.items.map((project) => (
              <Link href={`/projects/${project.slug}/`} key={project.sys.id}>
                <a data-column="6" data-column-lg="4" data-aos="fade-up">
                  <Image
                    src={project.thumbnail.url}
                    alt={project.title}
                    width="400"
                    height="300"
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const homePage = (await getHomePage(locale)) ?? [];

  return {
    props: { homePage },
  };
}
