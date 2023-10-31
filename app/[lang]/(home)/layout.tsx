import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { getHomePage } from "@/lib/api";

export default async function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage({ locale: lang, preview: isEnabled });

  if (!homePage) {
    return notFound();
  }

  return <PageLayout page={homePage}>{children}</PageLayout>;
}
