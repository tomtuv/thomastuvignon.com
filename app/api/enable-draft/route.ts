import { enableDraftHandler } from "@contentful/vercel-nextjs-toolkit/app-router";

const GET = enableDraftHandler as () =>
  | void
  | Response
  | Promise<void>
  | Promise<Response>;

export { GET };
