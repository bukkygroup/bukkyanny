import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portrait from "@/public/portraits/founder1.jpeg";
import { BookShowcase } from "@/components/home/book-showcase/book-showcase";
import { BooksStructuredData } from "@/components/shared/structured-data/books-structured-data";
import { ReaderReviews } from "@/components/books/reader-reviews";
import { Button } from "@/components/ui/button";
import { homeCopy } from "@/data/home";
import { siteMetadata, siteUrl } from "@/lib/seo";

const description =
  "Explore books by Bukky Anny: Slave Boss, The Flags, A Safe Place, and Bond Not Blood. View each title on Amazon.";

export const metadata: Metadata = {
  title: "Books",
  description,
  ...(siteUrl ? { alternates: { canonical: new URL("/books", siteUrl).href } } : {}),
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Books | Bukky Anny",
    description,
    url: siteUrl ? new URL("/books", siteUrl).href : undefined,
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Books | Bukky Anny",
    description,
  },
};

export default function BooksPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <BooksStructuredData />
      <BookShowcase pageHeading />
      <section className="section-pad bg-gray-50" aria-labelledby="books-author-title">
        <div className="page-container grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="flex min-w-0 flex-col items-start gap-8">
            <p className="section-label text-gray-600">About the author</p>
            <h2 id="books-author-title" className="section-title">Get to know Bukky Anny</h2>
            <p className="max-w-lg text-lg leading-relaxed text-gray-600">{homeCopy.writing}</p>
            <Button asChild className="bg-gray-900 text-white hover:bg-primary focus-visible:bg-primary">
              <Link href="/about">
                About
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square w-full">
            <svg className="shape-definitions" aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="books-author-silhouette" clipPathUnits="objectBoundingBox">
                  <path d="M .167 0 H .833 A .167 .167 0 0 1 .833 .333 A .167 .167 0 0 1 .833 .667 A .167 .167 0 0 1 .833 1 H .167 A .167 .167 0 0 1 .167 .667 A .167 .167 0 0 1 .167 .333 A .167 .167 0 0 1 .167 0 Z" />
                </clipPath>
              </defs>
            </svg>
            <Image
              src={portrait}
              alt="Bukky Anny seated in a floral suit"
              fill
              className="object-cover object-top"
              style={{ clipPath: "url(#books-author-silhouette)" }}
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 104px) / 2), (max-width: 1375px) calc((100vw - 160px) / 2), 608px"
            />
          </div>
        </div>
      </section>
      <ReaderReviews />
    </main>
  );
}
