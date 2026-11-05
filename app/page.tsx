import { HomeMotion } from "@/components/home/motion/home-motion";
import { Hero } from "@/components/home/hero/hero";
import { Biography } from "@/components/home/biography/biography";
import { BusinessMarquee } from "@/components/home/business-marquee/business-marquee";
import { FeaturedBook } from "@/components/home/featured-book/featured-book";
import { BookShowcase } from "@/components/home/book-showcase/book-showcase";
import { Businesses } from "@/components/home/businesses/businesses";
import { Testimonials } from "@/components/home/testimonials/testimonials";
import { Media } from "@/components/home/media/media";
import type { Metadata } from "next";
import { HomeStructuredData } from "@/components/shared/structured-data/home-structured-data";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = siteUrl
  ? { alternates: { canonical: siteUrl.href } }
  : {};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HomeStructuredData />
      <HomeMotion>
        <Hero />
        <div className="home-content">
          <Biography />
          <BusinessMarquee />
          <FeaturedBook />
          <BookShowcase />
          <Businesses />
          <Testimonials />
          <Media />
        </div>
      </HomeMotion>
    </main>
  );
}
