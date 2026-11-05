import type { MetadataRoute } from "next";
import { indexable, siteUrl } from "@/lib/seo";
import { books } from "@/data/home";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexable && siteUrl
    ? [
        { url: siteUrl.href },
        { url: new URL("/about", siteUrl).href },
        { url: new URL("/books", siteUrl).href },
        ...books.map((book) => ({ url: new URL(`/books/${book.id}`, siteUrl).href })),
      ]
    : [];
}
