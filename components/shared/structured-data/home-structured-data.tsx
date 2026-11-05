import { books } from "@/data/home";
import { socialUrl } from "@/data/site";
import { siteDescription, siteUrl } from "@/lib/seo";

export function HomeStructuredData() {
  const personId = siteUrl ? new URL("/#person", siteUrl).href : "#person";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Bukky Anny",
        alternateName: "Adebukola Anifowose",
        description: siteDescription,
        jobTitle: [
          "Author",
          "Entrepreneur",
          "Creative Director",
          "Humanitarian",
        ],
        sameAs: [socialUrl],
        ...(siteUrl
          ? {
              url: siteUrl.href,
              image: new URL("/portraits/bukky-anny.jpeg", siteUrl).href,
            }
          : {}),
      },
      ...(siteUrl
        ? [
            {
              "@type": "WebSite",
              "@id": new URL("/#website", siteUrl).href,
              url: siteUrl.href,
              name: "Bukky Anny",
              inLanguage: "en",
              about: { "@id": personId },
            },
          ]
        : []),
      ...books.map((book) => ({
        "@type": "Book",
        "@id": siteUrl ? new URL(`/#${book.id}`, siteUrl).href : `#${book.id}`,
        name: book.title,
        author: { "@id": personId },
        url: book.href,
        ...(siteUrl ? { image: new URL(book.mockup.src, siteUrl).href } : {}),
      })),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
