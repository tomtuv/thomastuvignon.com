import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import Layout from "components/layout";
import Seo from "components/seo";
import { getHomePage } from "lib/api";

export default function Index({ homePage, preview }) {
  const { formatMessage } = useIntl();

  return (
    <Layout page={homePage} preview={preview}>
      <Seo description={formatMessage({ id: "description" })} />
      <div className="grid">
        {homePage.projectsCollection?.items.map((project) => (
          <Link href={`/projects/${project.slug}/`} key={project.sys.id}>
            <a
              style={{
                "--grid-column": "span 6",
                "--grid-column-lg": "span 4",
              }}
              data-aos="fade-up"
            >
              <figure>
                <Image
                  src={project.thumbnail.url}
                  alt={project.title}
                  title={project.title}
                  width={project.thumbnail.width}
                  height={project.thumbnail.height}
                  layout="responsive"
                  sizes="(min-width: 75em) 315px, (min-width: 64em) 260px, (min-width: 48em) 308px, (min-width: 35em) 228px, 50vw"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${project.thumbnail.url}&w=16&q=1`}
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
  const homePage = (await getHomePage(locale, preview)) ?? [];

  return {
    props: { homePage, preview },
  };
}
