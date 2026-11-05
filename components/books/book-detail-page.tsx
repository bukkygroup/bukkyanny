import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { books } from "@/data/home";
import { bookDescriptionPlaceholder, bookExcerptPlaceholder } from "@/content/book-details";
import { BookShowcase } from "@/components/home/book-showcase/book-showcase";
import { FeaturedBook } from "@/components/home/featured-book/featured-book";
import { Button } from "@/components/ui/button";
import { siteMetadata, siteUrl } from "@/lib/seo";

function findBook(slug: string) {
  const book = books.find((entry) => entry.id === slug);
  if (!book) notFound();
  return book;
}

export function getBookMetadata(slug: string): Metadata {
  const book = findBook(slug);
  const description = `Explore ${book.title} by Bukky Anny${book.subtitle ? ` — ${book.subtitle}` : ""}. View this book on Amazon.`;
  const url = siteUrl ? new URL(`/books/${book.id}`, siteUrl).href : undefined;
  const image = siteUrl ? new URL(book.mockup.src, siteUrl).href : undefined;
  return {
    title: book.title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      ...siteMetadata.openGraph,
      title: `${book.title} | Bukky Anny`,
      description,
      url,
      ...(image ? { images: [{ url: image, width: book.mockup.width, height: book.mockup.height, alt: `${book.title} by Bukky Anny` }] } : {}),
    },
    twitter: {
      ...siteMetadata.twitter,
      title: `${book.title} | Bukky Anny`,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export function BookDetailPage({ slug }: { slug: string }) {
  const book = findBook(slug);
  const personId = siteUrl ? new URL("/#person", siteUrl).href : "/#person";
  const data = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", "@id": personId, name: "Bukky Anny", alternateName: "Adebukola Anifowose" },
    ...(siteUrl ? {
      "@id": new URL(`/books/${book.id}#book`, siteUrl).href,
      url: new URL(`/books/${book.id}`, siteUrl).href,
      image: new URL(book.mockup.src, siteUrl).href,
    } : {}),
  };
  const details = [
    ["Publisher", null],
    ["Author", "Bukky Anny"],
    ["Publication date", null],
    ["Language", null],
    ["Pages", null],
    ["ISBN", null],
  ] as const;

  return (
    <main id="main-content" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
      <section className="book-detail-header" aria-labelledby="book-detail-title">
        <div className="book-detail-cover">
          <Image
            src={book.mockup.src}
            alt={`${book.title} by Bukky Anny — hardcover studio mockup`}
            fill
            preload
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </div>
        <div className="book-detail-content">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 id="book-detail-title" className="text-5xl font-bold sm:text-6xl">{book.title}</h1>
              {book.subtitle && <p className="text-xl leading-relaxed text-gray-600">{book.subtitle}</p>}
              <p className="text-base text-gray-600">Bukky Anny</p>
            </div>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-600">
              {bookDescriptionPlaceholder.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Button asChild>
              <Link href={book.href} target="_blank" rel="noopener noreferrer">
                Purchase on Amazon <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Book details</h2>
            <dl>
              {details.map(([label, value]) => (
                <div key={label} className="grid grid-cols-2 gap-4 border-b py-4 text-base">
                  <dt className="text-gray-600">{label}</dt>
                  <dd>{value ?? <span className="text-gray-500">To be confirmed</span>}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="section-pad bg-gray-50" aria-label="Sample book excerpt">
        <div className="page-container flex flex-col items-center gap-6 text-center">
          <p className="section-label text-gray-600">Placeholder excerpt</p>
          <blockquote className="max-w-4xl text-3xl font-semibold leading-snug sm:text-4xl lg:text-5xl">
            <p>“{bookExcerptPlaceholder}”</p>
          </blockquote>
        </div>
      </section>
      <BookShowcase excludeId={book.id} />
      <FeaturedBook />
    </main>
  );
}
