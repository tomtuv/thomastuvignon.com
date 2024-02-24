import OpengraphImage from "@/components/opengraph-image";
import { getProject } from "@/lib/api";

export default async function Image({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const project = await getProject(slug, { locale });

  return await OpengraphImage({ title: project?.title ?? undefined });
}
