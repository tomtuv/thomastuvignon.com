import { notFound } from "next/navigation";
import Intro from "./intro";
import Projects from "./projects";
import { getHomePage } from "@/lib/api";
import { DEFAULT_LOCALE } from "@/lib/constants";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  let { locale } = await params;
  locale = locale.replace("worker.js", DEFAULT_LOCALE);
  const homePage = await getHomePage({ locale });

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
