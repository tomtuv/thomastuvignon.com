import { draftMode } from "next/headers";
import OpengraphImage from "@/components/OpengraphImage";
import { getPage } from "@/lib/api";

export default async function Image({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale: lang, preview: isEnabled });

  if (!page) {
    return null;
  }

  return await OpengraphImage({ title: page.title ?? undefined });
}
