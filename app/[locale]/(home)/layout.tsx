import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { getHomePage } from "@/lib/api";
import { DEFAULT_LOCALE } from "@/lib/constants";

export default async function Layout({
  children,
  params: { locale },
}: React.PropsWithChildren<{
  params: { locale: string };
}>) {
  locale = locale.replace("worker.js", DEFAULT_LOCALE);
  const homePage = await getHomePage({ locale });

  if (!homePage) {
    return notFound();
  }

  return <PageLayout page={homePage}>{children}</PageLayout>;
}
