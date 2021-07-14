import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { getHomePage } from "../lib/api";

export default function Index({ homePage }) {
  const intl = useIntl();

  return (
    <Layout isHomePage>
      <Seo description={intl.formatMessage({ id: "description" })} />
      <main className="content">
        <div className="container">
          <div className="grid">
            {homePage.projectsCollection?.items.map((project) => (
              <Link href={`/projects/${project.slug}/`} key={project.sys.id}>
                <a data-column="6" data-column-lg="4" data-aos="fade-up">
                  <figure>
                    <Image
                      src={project.thumbnail.url}
                      alt={project.title}
                      width={project.thumbnail.width}
                      height={project.thumbnail.height}
                      layout="responsive"
                      sizes="(min-width: 48em) 315px, 50vw"
                      placeholder="blur"
                      blurDataURL={`/_next/image?url=${project.thumbnail.url}&w=16&q=1`}
                    />
                  </figure>
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
  const homePage = await getHomePage(locale);

  return {
    props: { homePage },
  };
}
