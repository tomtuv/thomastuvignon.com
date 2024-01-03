import { draftMode } from "next/headers";
import OpengraphImage from "@/components/opengraph-image";
import { getProject } from "@/lib/api";

export default async function Image({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale, preview: isEnabled });

  return await OpengraphImage({ title: project?.title ?? undefined });
}
