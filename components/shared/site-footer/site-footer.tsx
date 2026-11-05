import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/shared/brand-mark/brand-mark";
import { navigation, socialUrl, siteCopy } from "@/data/site";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="site-footer"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="page-container flex flex-col gap-16">
        <BrandMark />
        <div className="footer-grid">
          <nav aria-label="Footer navigation" className="footer-links">
            <h2 className="footer-label">Pages</h2>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-links">
            <h2 className="footer-label">Social</h2>
            <Link href={socialUrl} target="_blank" rel="noopener noreferrer">
              Instagram <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </div>
          <div className="footer-invitation">
            <h2 id="contact-title" className="text-2xl font-bold">
              Building with purpose. Leading with kindness. Living with
              laughter.
            </h2>
            <p>{siteCopy.contact}</p>
            <Button asChild variant="secondary">
              <Link href={socialUrl} target="_blank" rel="noopener noreferrer">
                Connect on Instagram{" "}
                <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="footer-bottom">
          <Link href="/#home">Bukky Anny. Still becoming.</Link>
          <p>© 2026 Bukky Anny. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
