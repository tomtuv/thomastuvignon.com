import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
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

  if (!homePage) {
    return notFound();
  }

  return (
    <PageLayout page={homePage as HomePage}>
      <Intro homePage={homePage} />
      <Projects homePage={homePage} />
    </PageLayout>
  );
}
