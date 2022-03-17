import Link from "next/link";
import { useIntl } from "react-intl";
import Layout from "components/Layout";
import Seo from "components/Seo";
import CustomImage from "components/CustomImage";
import { getHomePage } from "lib/api";

export default function Index({ homePage, preview }) {
  const { formatMessage } = useIntl();

  return (
    <Layout page={homePage} preview={preview}>
      <Seo description={formatMessage({ id: "description" })} />
      <div className="container">
        {homePage.projectsCollection?.items.map((project) => (
          <Link href={`/projects/${project.slug}/`} key={project.sys.id}>
            <a
              style={{
                "--grid-column": "span 6",
                "--grid-column-lg": "span 4",
              }}
              title={project.title}
            >
              <figure>
                <CustomImage
                  src={project.thumbnail.url}
                  alt=""
                  width={project.thumbnail.width}
                  height={project.thumbnail.height}
                  layout="responsive"
                  sizes="(min-width: 75em) 315px, (min-width: 64em) 260px, (min-width: 48em) 308px, (min-width: 35em) 228px, 50vw"
                />
              </figure>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale, preview = false }) {
  const homePage = (await getHomePage(locale, preview)) ?? {};

  return {
    props: { homePage, preview },
  };
}
