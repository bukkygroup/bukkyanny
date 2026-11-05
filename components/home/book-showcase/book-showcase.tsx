import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { books } from "@/data/home";

export function BookShowcase({ pageHeading = false, excludeId }: { pageHeading?: boolean; excludeId?: string }) {
  const Heading = pageHeading ? "h1" : "h2";
  const BookHeading = pageHeading ? "h2" : "h3";
  return (
    <section
      id="books"
      className={pageHeading || excludeId ? "section-pad book-catalogue" : "section-pad"}
      aria-labelledby="books-title"
      tabIndex={-1}
    >
      <div className="page-container flex flex-col gap-12">
        <Heading
          id="books-title"
          className={pageHeading ? "text-6xl font-bold sm:text-7xl lg:text-9xl" : "section-title reveal-heading"}
        >
          {pageHeading ? "Books" : "Showcase of books"}
        </Heading>
        <div className="books-grid">
          {books.filter((book) => book.id !== excludeId).map((book) => (
            <Link
              id={book.id}
              key={book.id}
              href={`/books/${book.id}`}
              className="book-card"
              aria-label={`Read about ${book.title}`}
            >
              <div className="book-stage">
                <Image
                  src={book.mockup.src}
                  alt={`${book.title} by Bukky Anny — hardcover studio mockup`}
                  width={book.mockup.width}
                  height={book.mockup.height}
                  className="book-cover"
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 84px) / 2), (max-width: 1375px) calc((100vw - 136px) / 3), 414px"
                />
                <span className="book-action">
                  About book{" "}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </div>
              <div className="book-caption">
                <BookHeading className="text-2xl font-bold">{book.title}</BookHeading>
                {(pageHeading || excludeId) && book.subtitle && (
                  <p className="text-base leading-relaxed text-gray-600">{book.subtitle}</p>
                )}
                {!pageHeading && !excludeId && <p className="text-sm text-gray-600">Bukky Anny</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
