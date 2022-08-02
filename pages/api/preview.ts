import type { NextApiRequest, NextApiResponse } from "next";
import { HomePage, Page, Project } from "../../interfaces";
import { getEntryForPreview } from "../../lib/api";

function resolveURL(entry: HomePage | Project | Page) {
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
  const { token: id }: Record<string, any> = req.query;
  const entry = (await getEntryForPreview(id)) ?? {};

  if (!entry) return res.status(401).json({ message: "Invalid token" });

  const url = resolveURL(entry);

  res.setPreviewData({});
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}
