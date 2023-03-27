import type { Document } from "@contentful/rich-text-types";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useIntl } from "react-intl";
import Intro from "@/components/Intro";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Seo from "@/components/Seo";
import { getHomePage } from "@/lib/api";
import type { HomePage } from "@/lib/types";

export default function Index({
  homePage,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { formatMessage } = useIntl();

  return (
    <Layout page={homePage} preview={preview}>
      <Seo description={formatMessage({ id: "description" })} />
      <Intro intro={homePage?.intro?.json as Document} />
      <Projects projects={homePage?.projectsCollection?.items} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  homePage: HomePage;
  preview: boolean;
}> = async ({ locale = "fr", preview = false }) => {
  const homePage = await getHomePage(locale, preview);

  if (!homePage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      homePage,
      preview,
    },
  };
};
