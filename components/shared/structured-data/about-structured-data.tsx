import { socialUrl } from "@/data/site";
import { siteDescription, siteUrl } from "@/lib/seo";

export function AboutStructuredData() {
  const personId = siteUrl ? new URL("/#person", siteUrl).href : "/#person";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": siteUrl ? new URL("/about#webpage", siteUrl).href : "#webpage",
        name: "About Bukky Anny",
        inLanguage: "en",
        mainEntity: { "@id": personId },
        ...(siteUrl ? { url: new URL("/about", siteUrl).href } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Bukky Anny",
        alternateName: "Adebukola Anifowose",
        description: siteDescription,
        jobTitle: ["Author", "Entrepreneur", "Creative Director", "Humanitarian"],
        sameAs: [socialUrl],
        ...(siteUrl ? {
          url: siteUrl.href,
          image: new URL("/portraits/bukky-anny.jpeg", siteUrl).href,
        } : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
