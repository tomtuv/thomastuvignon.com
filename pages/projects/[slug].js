import Link from "next/link";
import { useIntl } from "react-intl";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Text from "../../components/text";
import Media from "../../components/media";
import { getAllProjectsWithSlug, getProject } from "../../lib/api";

export default function Project({ project }) {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={project.title} description={project.description} />
      <main className="content">
        <div className="container">
          <article>
            {project.blocksCollection?.items.map((block) => {
              if (block.__typename === "Text") {
                return <Text block={block} key={block.sys.id} />;
              }

              return (
                <Media project={project} block={block} key={block.sys.id} />
              );
            })}
          </article>
          <aside>
            <Link href="/">
              <a className="link link-back">
                {intl.formatMessage({ id: "back" })}
              </a>
            </Link>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const project = await getProject(params.slug, locale);

  return {
    props: { project },
  };
}

export async function getStaticPaths({ locales }) {
  const allProjects = await getAllProjectsWithSlug();

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...allProjects.map(({ slug }) => ({
        params: {
          slug,
        },
        locale,
      })),
    ],
    []
  );

  return {
    paths,
    fallback: false,
  };
}
