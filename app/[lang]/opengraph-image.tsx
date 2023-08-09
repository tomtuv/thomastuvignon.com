import OpengraphImage from "@/components/OpengraphImage";

export const runtime = "edge";

export default async function Image() {
  return await OpengraphImage();
}
