import { draftMode } from "next/headers";
import OpengraphImage from "@/components/opengraph-image";
import { getPage } from "@/lib/api";

export default async function Image({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const { isEnabled } = draftMode();
  const page = await getPage(slug, { locale, preview: isEnabled });

  return await OpengraphImage({ title: page?.title ?? undefined });
}
