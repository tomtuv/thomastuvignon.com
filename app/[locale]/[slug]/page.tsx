import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import PageBody from "./page-body";
import Back from "@/components/back";
import { getPage } from "@/lib/api";

export default async function Page({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale, preview: isEnabled });

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
