import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: "#0F766E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFEF9",
          fontFamily: "sans-serif",
          fontWeight: 700,
        }}
      >
        J
      </div>
    ),
    {
      ...size,
    }
  );
}
