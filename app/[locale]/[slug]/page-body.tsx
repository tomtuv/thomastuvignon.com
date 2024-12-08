import type { Document } from "@contentful/rich-text-types";
import RichText from "@/components/rich-text";
import type { Page } from "@/lib/types";

export default function PageBody({ page }: { page: Page }) {
  return (
    <article>
      <RichText text={page?.body?.json as Document} />
    </article>
  );
}
