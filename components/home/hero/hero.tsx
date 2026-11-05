import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeCopy } from "@/data/home";

export function Hero() {
  return (
    <>
      <div id="home" className="home-anchor" tabIndex={-1} />
      <section className="hero" aria-labelledby="hero-title" tabIndex={-1}>
        <div className="page-container hero-inner">
          <h1 id="hero-title" className="hero-name" aria-label="Bukky Anny">
            {["Bukky", "Anny"].map((word) => (
              <span className="hero-name-line" aria-hidden="true" key={word}>
                {Array.from(word).map((letter, index) => (
                  <span className="hero-letter" key={`${letter}-${index}`}>
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="hero-baseline">
            <p className="hero-subtitle">{homeCopy.tagline}</p>
            <Button asChild variant="outline" size="icon" className="hero-down">
              <Link href="#about" aria-label="Explore Bukky Anny’s world">
                <ArrowDown aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
