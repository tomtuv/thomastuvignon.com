import { notFound } from "next/navigation";
import { Suspense } from "react";
import Blocks from "./blocks";
import Back from "@/components/back";
import { getProject } from "@/lib/api";

export default function Project({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  return (
    <Suspense fallback={null}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({
  params,
}: Pick<PageProps<"/[locale]/projects/[slug]">, "params">) {
  const { slug, locale } = await params;
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
