import { BookDetailPage, getBookMetadata } from "@/components/books/book-detail-page";

export const metadata = getBookMetadata("slave-boss");

export default function Page() {
  return <BookDetailPage slug="slave-boss" />;
}
