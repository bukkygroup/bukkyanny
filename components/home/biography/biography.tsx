import Link from "next/link";
import Image from "next/image";
import portrait from "@/public/portraits/bukky-anny.jpeg";
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
        <div className="flex flex-col items-start gap-6">
          <p className="section-label">About Bukky</p>
          <Image
            src={portrait}
            alt="Bukky Anny standing beside a bookshelf"
            className="h-auto w-full max-w-sm rounded-md md:max-w-md"
            sizes="(max-width: 767px) min(384px, calc(100vw - 32px)), (max-width: 1023px) calc((100vw - 104px) / 2.7), min(448px, calc(100vw - 800px))"
          />
        </div>
        <div className="biography-content">
          <div className="flex flex-col items-start gap-8">
            <h2 id="about-title" className="biography-intro reveal-heading">
              {homeCopy.introduction}
            </h2>
            <p className="biography-description">{homeCopy.personality}</p>
            <div className="flex flex-wrap items-center gap-6">
              <Button asChild>
                <Link href="#businesses">Explore my work</Link>
              </Button>
              <Link href="/about" className="animated-link inline-flex min-h-11 items-center gap-2 font-semibold">
                More about Bukky <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
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
