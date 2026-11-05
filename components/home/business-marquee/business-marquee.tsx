"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { businesses } from "@/data/home";

function businessLogos(decorative = false) {
  return businesses.map((business) => (
    <Link
      key={business.name}
      href={business.href}
      target="_blank"
      rel="noopener noreferrer"
      className="brand-mark"
      tabIndex={decorative ? -1 : undefined}
      aria-label={`Visit ${business.name} (opens in a new tab)`}
    >
      <Image
        src={business.logo}
        alt={decorative ? "" : business.name}
        fill
        className="brand-image"
        sizes="176px"
      />
    </Link>
  ));
}

export function BusinessMarquee() {
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <section
      className="brand-strip"
      aria-label="The Bukky Group family"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="page-container brand-marquee-shell">
        {/* A single static set is the accessible navigation. The moving copies
            remain mouse/touch links, without repeating keyboard or AT targets. */}
        <div className="brand-static-list">{businessLogos()}</div>
        <div className="brand-moving" aria-hidden="true">
          <Marquee
            speed={28}
            gradient={false}
            pauseOnHover
            play={!paused && !focused}
          >
            {businessLogos(true)}
          </Marquee>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="brand-pause"
          aria-label={
            paused
              ? "Play business logo animation"
              : "Pause business logo animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </Button>
      </div>
    </section>
  );
}
