import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { books } from "@/data/home";

export function BookShowcase() {
  return (
    <section
      id="books"
      className="section-pad"
      aria-labelledby="books-title"
      tabIndex={-1}
    >
      <div className="page-container flex flex-col gap-12">
        <h2 id="books-title" className="section-title reveal-heading">
          Showcase of books
        </h2>
        <div className="books-grid">
          {books.map((book) => (
            <Link
              id={book.id}
              key={book.id}
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="book-card"
              aria-label={`Explore ${book.title} on Amazon (opens in a new tab)`}
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
                  View on Amazon{" "}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </div>
              <div className="book-caption">
                <h3 className="text-2xl font-bold">{book.title}</h3>
                <p className="text-sm text-gray-600">Bukky Anny</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
