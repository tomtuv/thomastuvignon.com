import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/[locale]", "layout");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
