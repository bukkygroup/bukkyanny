import { BookDetailPage, getBookMetadata } from "@/components/books/book-detail-page";

export const metadata = getBookMetadata("a-safe-place");

export default function Page() {
  return <BookDetailPage slug="a-safe-place" />;
}
