import { draftMode } from "next/headers";
import OpengraphImage from "@/components/OpengraphImage";
import { getProject } from "@/lib/api";

export default async function Image({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale: lang, preview: isEnabled });

  return await OpengraphImage({ title: project?.title ?? undefined });
}
