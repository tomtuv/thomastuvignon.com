import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import { useIntl } from "react-intl";
import SEO from "../components/SEO";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import { getHomePage } from "../lib/api";
import type { HomePage } from "../interfaces";

export default function Index({
  homePage,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { formatMessage } = useIntl();

  return (
    <Layout page={homePage} preview={preview}>
      <SEO description={formatMessage({ id: "description" })} />
      <Intro intro={homePage.intro.json} />
      <Projects projects={homePage.projectsCollection.items} />
    </Layout>
  );
}

export async function getStaticProps({
  locale,
  preview = false,
}: GetStaticPropsContext) {
  const homePage: HomePage = (await getHomePage(locale!, preview)) ?? {};

  return {
    props: { homePage, preview },
  };
}
