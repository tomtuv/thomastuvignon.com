import { draftMode } from "next/headers";
import { getDraftEntry } from "@/lib/api";
import type { DraftEntry } from "@/lib/types";

function resolveURL(entry: DraftEntry) {
  switch (entry?.__typename) {
    case "Project":
      return `/projects/${entry.slug ?? ""}`;

    case "Page":
      return `/${entry.slug}`;

    default:
      return "/";
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const entryId = searchParams.get("entryId");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !entryId) {
    return new Response("Invalid token", { status: 401 });
  }

  const entry = await getDraftEntry(entryId);

  if (!entry) {
    return new Response("Invalid entry ID", { status: 401 });
  }

  const url = resolveURL(entry);

  draftMode().enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: url,
    },
  });
}
