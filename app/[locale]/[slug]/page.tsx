import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageBody from "./page-body";
import Back from "@/components/back";
import { getPage } from "@/lib/api";

export default function Page({ params }: PageProps<"/[locale]/[slug]">) {
  return (
    <Suspense fallback={null}>
      <PageContent params={params} />
    </Suspense>
  );
}

async function PageContent({
  params,
}: Pick<PageProps<"/[locale]/[slug]">, "params">) {
  const { slug, locale } = await params;
  const page = await getPage(slug, { locale });

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageBody page={page} />
      <Back />
    </>
  );
}
