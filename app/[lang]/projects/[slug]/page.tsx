import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import Back from "@/components/Back";
import Blocks from "@/components/Blocks";
import { getProject } from "@/lib/api";

export default async function Project({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) {
  const { isEnabled } = draftMode();
  const project = await getProject(slug, { locale: lang, preview: isEnabled });

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
