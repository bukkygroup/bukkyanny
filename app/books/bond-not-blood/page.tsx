import { BookDetailPage, getBookMetadata } from "@/components/books/book-detail-page";

export const metadata = getBookMetadata("bond-not-blood");

export default function Page() {
  return <BookDetailPage slug="bond-not-blood" />;
}
