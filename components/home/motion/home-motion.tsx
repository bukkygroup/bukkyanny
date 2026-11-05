"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-letter",
          { color: "#212121" },
          {
            color: "#ffffff",
            duration: 0.55,
            stagger: 0.06,
            ease: "power1.out",
          },
        );
        gsap.from(".hero-subtitle", {
          opacity: 0,
          y: 12,
          duration: 0.6,
          delay: 0.2,
          clearProps: "all",
        });
        gsap.utils
          .toArray<HTMLElement>(".reveal-heading")
          .forEach((heading) => {
            gsap.fromTo(
              heading,
              { color: "#777777" },
              {
                color: "#080808",
                ease: "none",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 92%",
                  end: "top 65%",
                  scrub: true,
                },
              },
            );
          });
      });
      return () => media.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
