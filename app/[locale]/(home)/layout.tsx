import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import { getHomePage } from "@/lib/api";

export default async function HomeLayout({
  params,
  children,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const homePage = await getHomePage({ locale });

  if (!homePage) {
    return notFound();
  }

  return <Layout page={homePage}>{children}</Layout>;
}
