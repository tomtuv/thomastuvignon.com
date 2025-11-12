import { notFound } from "next/navigation";
import Intro from "./intro";
import Projects from "./projects";
import { getHomePage } from "@/lib/api";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
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
