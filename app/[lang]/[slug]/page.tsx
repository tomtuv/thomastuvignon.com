import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Back from "@/components/Back";
import PageBody from "@/components/PageBody";
import { getPage } from "@/lib/api";

export default async function Page({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale: lang, preview: isEnabled });

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
