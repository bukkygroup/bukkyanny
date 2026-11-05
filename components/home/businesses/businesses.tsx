import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businesses, homeCopy } from "@/data/home";

export function Businesses() {
  return (
    <section
      id="businesses"
      className="section-pad"
      aria-labelledby="businesses-title"
      tabIndex={-1}
    >
      <div className="page-container flex flex-col gap-24">
        <div className="section-introduction">
          <div className="flex max-w-2xl flex-col gap-6">
            <h2 id="businesses-title" className="section-title reveal-heading">
              Business found me early
            </h2>
            <p className="text-lg leading-relaxed">{homeCopy.business}</p>
          </div>
          <Button asChild>
            <Link
              href="https://www.bukkygroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Bukky Group{" "}
              <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <p className="section-label">Businesses &amp; creative work</p>
          <div className="business-list">
            {businesses.map((business) => (
              <Link
                className="business-row"
                key={business.name}
                href={business.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="business-category">{business.category}</span>
                <h3>{business.name}</h3>
                <ArrowUpRight className="size-6" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
