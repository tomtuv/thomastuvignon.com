import { notFound } from "next/navigation";
import PageBody from "./page-body";
import Back from "@/components/back";
import { getPage } from "@/lib/api";

export default async function Page({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
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
