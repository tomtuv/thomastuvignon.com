import { notFound } from "next/navigation";
import PageBody from "./page-body";
import Back from "@/components/back";
import { getPage } from "@/lib/api";

export default async function Page({ params }: PageProps<"/[locale]/[slug]">) {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageBody page={page} />
      <Back />
    </>
  );
}
