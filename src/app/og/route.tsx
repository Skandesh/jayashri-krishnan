import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") || siteConfig.description;
  const font = fetch(
    new URL("../../assets/fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

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
          backgroundColor: "#FFFEF9", // Warm cream background
          padding: "60px",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#0F766E", // Primary emerald green
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "900px",
          }}
        >
          <Icons.logo
            style={{
              width: "80px",
              height: "80px",
              marginBottom: "32px",
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: "700",
              marginBottom: "24px",
              textAlign: "center",
              color: "#1F2937", // Charcoal text
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
              fontWeight: "500",
              textAlign: "center",
              color: "#0F766E", // Primary color
              lineHeight: 1.4,
              marginBottom: "40px",
            }}
          >
            {postTitle}
          </div>

          <div
            style={{
              display: "flex",
              gap: "48px",
              fontSize: "20px",
              color: "#6B7280",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#0F766E" }}>2000+</div>
              <div>Clients</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#0F766E" }}>200+</div>
              <div>Projects</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#0F766E" }}>Top 150</div>
              <div>SME Globally</div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#E07A5F", // Accent terracotta
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
