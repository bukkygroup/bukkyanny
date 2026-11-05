import type { Metadata } from "next";
import Image from "next/image";
import founderPortrait from "@/public/portraits/founder1.jpeg";
import fashionPortrait from "@/public/portraits/fashion (5).jpg";
import eveningPortrait from "@/public/portraits/fashion-portrait.jpg";
import { aboutIntroduction, aboutSections } from "@/content/about";
import { BookShowcase } from "@/components/home/book-showcase/book-showcase";
import { AboutStructuredData } from "@/components/shared/structured-data/about-structured-data";
import { ScrollBackdrop } from "@/components/shared/scroll-backdrop/scroll-backdrop";
import { siteMetadata, siteUrl } from "@/lib/seo";

const description =
  "Get to know Bukky Anny, Adebukola Anifowose: her Nigerian roots, family, businesses, writing, and belief in love and kindness.";

const gallery = [
  { src: founderPortrait, alt: "Bukky Anny seated in a floral suit" },
  { src: fashionPortrait, alt: "Bukky Anny in a black embellished outfit beside a railing" },
  { src: eveningPortrait, alt: "Bukky Anny wearing a green evening dress" },
];

export const metadata: Metadata = {
  title: "About",
  description,
  ...(siteUrl ? { alternates: { canonical: new URL("/about", siteUrl).href } } : {}),
  openGraph: {
    ...siteMetadata.openGraph,
    title: "About | Bukky Anny",
    description,
    // Override Home's URL when inheriting its social image and site metadata.
    url: siteUrl ? new URL("/about", siteUrl).href : undefined,
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "About | Bukky Anny",
    description,
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <AboutStructuredData />
      <ScrollBackdrop className="section-pad bg-[#080808] text-white" aria-labelledby="about-page-title">
        <div className="page-container flex flex-col gap-12 lg:gap-16">
          <h1 id="about-page-title" className="text-6xl font-bold sm:text-7xl lg:text-9xl">
            About
          </h1>
          <div className="biography-layout">
            <p className="section-label text-gray-300">About bio</p>
            <div className="flex min-w-0 flex-col gap-8">
              <h2 className="biography-intro">{aboutIntroduction.heading}</h2>
              <div className="flex flex-col gap-2 text-sm font-medium text-gray-300">
                {aboutIntroduction.roles.map((role) => <p key={role}>{role}</p>)}
              </div>
              <p className="text-2xl font-semibold">{aboutIntroduction.tagline}</p>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-300">
                {aboutIntroduction.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            role="group"
            aria-label="Bukky Anny photo gallery"
          >
            {gallery.map((photo) => (
              <div key={photo.src.src} className="relative aspect-4/3 overflow-hidden rounded-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc((100vw - 96px) / 3), (max-width: 1375px) calc((100vw - 128px) / 3), 416px"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollBackdrop>
      <div className="home-content">
        <div className="section-pad">
          <div className="page-container flex flex-col gap-16">
            {aboutSections.map((section, index) => (
              <section
                key={section.id}
                aria-labelledby={`story-${section.id}`}
                className={index === 0 ? "biography-layout" : "biography-layout border-t pt-10"}
              >
                <h2 id={`story-${section.id}`} className="max-w-sm text-3xl font-semibold sm:text-4xl">
                  {section.heading}
                </h2>
                <div className="flex min-w-0 flex-col gap-6 text-lg leading-relaxed text-gray-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <BookShowcase />
      </div>
    </main>
  );
}
