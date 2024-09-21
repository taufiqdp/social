import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Taufiq Dwi Purnomo - Social Links";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <h1
            style={{
              color: "#10B981",
              fontSize: 60,
              margin: 0,
              marginBottom: 10,
            }}
          >
            Taufiq Dwi Purnomo
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: 30, margin: 0 }}>
            Full-stack Developer | AI Enthusiast
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            maxWidth: 1000,
          }}
        ></div>
      </div>
    ),
    {
      ...size,
    }
  );
}
