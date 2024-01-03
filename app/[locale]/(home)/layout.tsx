import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { getHomePage } from "@/lib/api";

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { isEnabled } = draftMode();
  const homePage = await getHomePage({ locale, preview: isEnabled });

  if (!homePage) {
    return notFound();
  }

  return <PageLayout page={homePage}>{children}</PageLayout>;
}
