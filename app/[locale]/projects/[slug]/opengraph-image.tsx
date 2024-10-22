import OpengraphImage from "@/components/opengraph-image";
import { getProject } from "@/lib/api";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = await getProject(slug, { locale });

  return await OpengraphImage({ title: project?.title ?? undefined });
}
