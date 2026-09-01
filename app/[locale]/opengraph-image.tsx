import OpengraphImage from "@/components/opengraph-image";
import { LOCALES } from "@/lib/constants";

export const dynamic = "force-static";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Image() {
  return await OpengraphImage();
}
