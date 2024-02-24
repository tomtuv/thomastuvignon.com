import { notFound } from "next/navigation";
import Blocks from "./blocks";
import Back from "@/components/back";
import { getProject } from "@/lib/api";

export default async function Project({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  const project = await getProject(slug, { locale });

  if (!project) {
    notFound();
  }

  return (
    <>
      <Blocks project={project} />
      <Back />
    </>
  );
}
