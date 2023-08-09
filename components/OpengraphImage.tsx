import { ImageResponse } from "next/server";
import { SITE_NAME } from "@/lib/constants";

export default async function OpengraphImage(props?: { title?: string }) {
  const { title } = props ?? {};

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: 24,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          color: "white",
          backgroundColor: "#1F1F1F",
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
            fontSize: 96,
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
          data: await fetch(
            new URL("./Inter-Regular.ttf", "http://localhost:3000")
          ).then((res) => res.arrayBuffer()),

          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: await fetch(
            new URL("./Inter-Bold.ttf", "http://localhost:3000")
          ).then((res) => res.arrayBuffer()),

          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
