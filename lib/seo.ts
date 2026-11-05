import type { Metadata } from "next";

function readSiteUrl(): URL | undefined {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.hostname === "localhost"
  ) {
    throw new Error(
      "SITE_URL must be the confirmed HTTPS production origin, without a path, query, or credentials.",
    );
  }
  return url;
}

export const siteUrl = readSiteUrl();
export const indexable =
  Boolean(siteUrl) &&
  process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export const siteTitle = "Bukky Anny | Author, Entrepreneur & Humanitarian";
export const siteDescription =
  "Meet Bukky Anny, Adebukola Anifowose — author, entrepreneur, creative director, humanitarian and founder of Bukky Group. Explore her books, businesses and creative work.";

export const siteMetadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: { default: siteTitle, template: "%s | Bukky Anny" },
  description: siteDescription,
  applicationName: "Bukky Anny",
  authors: [{ name: "Bukky Anny", ...(siteUrl ? { url: siteUrl.href } : {}) }],
  creator: "Bukky Anny",
  robots: {
    index: indexable,
    follow: indexable,
    googleBot: {
      index: indexable,
      follow: indexable,
      ...(indexable ? { "max-image-preview": "large" as const } : {}),
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Bukky Anny",
    type: "website",
    locale: "en_ZA",
    ...(siteUrl
      ? {
          url: siteUrl.href,
          images: [
            {
              url: new URL("/opengraph-image", siteUrl).href,
              width: 1200,
              height: 630,
              alt: "Bukky Anny — Still becoming.",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    ...(siteUrl ? { images: [new URL("/opengraph-image", siteUrl).href] } : {}),
  },
};
