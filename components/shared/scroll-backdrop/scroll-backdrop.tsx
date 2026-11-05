"use client";

import { useEffect, useRef, type ComponentProps } from "react";

export function ScrollBackdrop({
  children,
  className = "",
  ...props
}: ComponentProps<"section">) {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = section.current;
    if (!element) return;

    // Tall introductions scroll to their bottom before the next section covers them.
    const update = () => {
      const top = Math.min(0, window.innerHeight - element.offsetHeight);
      element.style.setProperty("--backdrop-top", `${top}px`);
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={section} className={`scroll-backdrop ${className}`} {...props}>
      {children}
    </section>
  );
}
