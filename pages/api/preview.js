import { getProject, getPage } from "lib/api";

export default async function preview(req, res) {
  const { secret, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const project = await getProject(slug, "fr");
  const page = await getPage(slug, "fr");

  if (!page && !project && slug !== "home") {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});

  const url = `${project ? "/projects" : ""}/${slug === "home" ? "" : slug}`;
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}
