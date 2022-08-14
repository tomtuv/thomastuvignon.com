import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import { FormattedMessage, useIntl } from "react-intl";
import SEO from "../components/SEO";
import ProjectGrid from "../components/ProjectGrid";
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
      <h2>
        <FormattedMessage id="work" />
      </h2>
      <ProjectGrid projects={homePage.projectsCollection.items} />
    </Layout>
  );
}

export async function getStaticProps({
  locale = "fr",
  preview = false,
}: GetStaticPropsContext) {
  const homePage: HomePage = (await getHomePage(locale, preview)) ?? {};

  return {
    props: { homePage, preview },
  };
}
