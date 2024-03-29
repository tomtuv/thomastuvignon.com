import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export default async function OpengraphImage(props?: { title?: string }) {
  const { title } = props ?? {};

  const [interRegular, interBold] = await Promise.all([
    fetch(`${SITE_URL}/inter-regular.ttf`).then((res) => res.arrayBuffer()),
    fetch(`${SITE_URL}/inter-bold.ttf`).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 20,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          color: "#fff",
          backgroundColor: "#1f1f1f",
        }}
      >
        {title && (
          <div
            style={{
              fontSize: 48,
              fontWeight: 400,
              letterSpacing: -2,
            }}
          >
            {SITE_NAME}
          </div>
        )}
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -4,
          }}
        >
          {title ?? SITE_NAME}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
