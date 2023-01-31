import type { NextApiRequest, NextApiResponse } from "next";
import { getEntryForPreview } from "@/lib/api";
import type { HomePage, Page, Project } from "@/lib/types";

function resolveUrl(entry: HomePage | Project | Page) {
  switch (entry.__typename) {
    case "Project":
      return `/projects/${entry.slug ?? ""}`;

    case "Page":
      return `/${entry.slug}`;

    default:
      return "/";
  }
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { secret, entryId } = req.query as { secret: string; entryId: string };

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !entryId) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const entry = (await getEntryForPreview(entryId)) ?? {};

  if (!entry) return res.status(401).json({ message: "Invalid entry ID" });

  const url = resolveUrl(entry);

  res.setPreviewData({});
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}
