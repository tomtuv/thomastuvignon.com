import type { ImageLoaderProps } from "next/image";
import { SITE_URL } from "./lib/constants";

const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export default function cloudflareLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = ["format=avif", `width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `${SITE_URL}/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
}
