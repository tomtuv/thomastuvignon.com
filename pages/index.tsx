import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useIntl } from "react-intl";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
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
      <Intro intro={homePage.intro.json} />
      <Projects projects={homePage.projectsCollection.items} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  homePage: HomePage;
  preview: boolean;
}> = async ({ locale, preview = false }) => {
  const homePage = await getHomePage(locale!, preview);

  return {
    props: {
      homePage,
      preview,
    },
  };
};
