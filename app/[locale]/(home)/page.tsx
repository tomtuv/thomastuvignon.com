import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Intro from "./intro";
import Projects from "./projects";
import { getHomePage } from "@/lib/api";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage({ locale, preview: isEnabled });

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
