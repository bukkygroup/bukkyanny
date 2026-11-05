import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { books, homeCopy } from "@/data/home";

export function Biography() {
  return (
    <section
      id="about"
      className="section-pad"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="page-container biography-layout">
        <p className="section-label">About Bukky</p>
        <div className="biography-content">
          <div className="flex flex-col items-start gap-8">
            <h2 id="about-title" className="biography-intro reveal-heading">
              {homeCopy.introduction}
            </h2>
            <p className="biography-description">{homeCopy.personality}</p>
            <Button asChild>
              <Link href="#businesses">Explore my work</Link>
            </Button>
          </div>
          <div className="book-index">
            <h3 className="text-2xl font-bold">Books</h3>
            <div className="flex flex-col">
              {books.map((book) => (
                <Link
                  href={`#${book.id}`}
                  className="book-index-row"
                  key={book.id}
                >
                  <span>{book.title}</span>
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
