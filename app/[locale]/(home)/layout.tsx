import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import { getHomePage } from "@/lib/api";
import { DEFAULT_LOCALE } from "@/lib/constants";

export default async function HomeLayout({
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

  return <Layout page={homePage}>{children}</Layout>;
}
