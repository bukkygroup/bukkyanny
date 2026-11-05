import { BookDetailPage, getBookMetadata } from "@/components/books/book-detail-page";

export const metadata = getBookMetadata("the-flags");

export default function Page() {
  return <BookDetailPage slug="the-flags" />;
}
