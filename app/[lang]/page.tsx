import type { Document } from "@contentful/rich-text-types";
import { draftMode } from "next/headers";
import Intro from "@/components/Intro";
import PageLayout from "@/components/PageLayout";
import Projects from "@/components/Projects";
import { getHomePage } from "@/lib/api";
import { HomePage } from "@/lib/types";

export default async function Index({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage({ locale: lang, preview: isEnabled });

  return (
    <PageLayout page={homePage as HomePage}>
      <Intro intro={homePage?.intro?.json as Document} />
      <Projects projects={homePage?.projectsCollection?.items} />
    </PageLayout>
  );
}