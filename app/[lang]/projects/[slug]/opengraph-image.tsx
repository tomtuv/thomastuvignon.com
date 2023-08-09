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

  if (!project) {
    return null;
  }

  return await OpengraphImage({ title: project.title ?? undefined });
}
