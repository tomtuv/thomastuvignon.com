import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { getHomePage } from "@/lib/api";

export default async function Home({
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
    <>
      <Intro homePage={homePage} />
      <Projects homePage={homePage} />
    </>
  );
}
