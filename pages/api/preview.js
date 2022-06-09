import { getEntryForPreview } from "lib/api";

function resolveURL(entry) {
  if (entry.__typename === "Project") return `/projects/${entry.slug ?? ""}`;
  return `/${entry.slug ?? ""}`;
}

export default async function preview(req, res) {
  const { token: id } = req.query;
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
