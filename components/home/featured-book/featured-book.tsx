import Image from "next/image";
import bookStudio from "@/public/books/slave-boss-studio.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { books, homeCopy } from "@/data/home";

export function FeaturedBook() {
  return (
    <section className="section-pad" aria-labelledby="featured-title">
      <div className="page-container">
        <div className="featured-book">
          <div className="featured-copy">
            <h2 id="featured-title" className="section-title">
              Writing is where my thoughts find their voice
            </h2>
            <div className="flex flex-col items-start gap-8">
              <p>{homeCopy.writing}</p>
              <Button asChild variant="secondary">
                <Link href="#books">Explore my books</Link>
              </Button>
            </div>
          </div>
          <Link
            href={`/books/${books[0].id}`}
            className="featured-art"
            aria-label="Read about Slave Boss"
          >
            <svg
              className="shape-definitions"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <clipPath
                  id="book-silhouette"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M .167 0 H .833 A .167 .167 0 0 1 .833 .333 A .167 .167 0 0 1 .833 .667 A .167 .167 0 0 1 .833 1 H .167 A .167 .167 0 0 1 .167 .667 A .167 .167 0 0 1 .167 .333 A .167 .167 0 0 1 .167 0 Z" />
                </clipPath>
              </defs>
            </svg>
            <Image
              src={bookStudio}
              alt="Slave Boss by Bukky Anny — hardcover studio mockup"
              className="featured-studio"
              sizes="(max-width: 767px) 85vw, 40vw"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
