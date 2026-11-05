import { books } from "@/data/home";
import { siteUrl } from "@/lib/seo";

export function BooksStructuredData() {
  const personId = siteUrl ? new URL("/#person", siteUrl).href : "/#person";
  const listId = siteUrl ? new URL("/books#catalogue", siteUrl).href : "#catalogue";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Books by Bukky Anny",
        inLanguage: "en",
        mainEntity: { "@id": listId },
        ...(siteUrl ? { url: new URL("/books", siteUrl).href } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Bukky Anny",
        alternateName: "Adebukola Anifowose",
      },
      {
        "@type": "ItemList",
        "@id": listId,
        numberOfItems: books.length,
        itemListElement: books.map((book, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Book",
            name: book.title,
            author: { "@id": personId },
            url: siteUrl ? new URL(`/books/${book.id}`, siteUrl).href : `/books/${book.id}`,
            ...(siteUrl ? { image: new URL(book.mockup.src, siteUrl).href } : {}),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
