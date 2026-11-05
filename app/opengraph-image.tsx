import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Bukky Anny — Author, entrepreneur, creative director and humanitarian. Still becoming.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/branding/ba-transparent.png"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: "#080808",
        color: "#ffffff",
        borderBottom: "12px solid #E10616",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1 }}>
            Bukky Anny
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 28,
              color: "#BFC0C2",
            }}
          >
            <span>Author · Entrepreneur</span>
            <span>Creative director · Humanitarian</span>
          </div>
        </div>
        {/* ImageResponse renders native image elements directly into the PNG. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          width={240}
          height={240}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 28,
        }}
      >
        <span>Still becoming.</span>
        <span style={{ color: "#BFC0C2", fontSize: 24 }}>
          Love. Kindness. Possibility.
        </span>
      </div>
    </div>,
    size,
  );
}
