"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholders = [1, 2, 3] as const;
// A second visual set supplies enough track for looping three visible cards.
const slides = [...placeholders, ...placeholders];

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getVisibility = () => document.visibilityState === "visible";
const serverReducedMotion = () => true;
const serverVisibility = () => false;

export function Testimonials() {
  const section = useRef<HTMLElement>(null);
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 5000,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  );
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    getReducedMotion,
    serverReducedMotion,
  );
  const [viewport, carousel] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      duration: reducedMotion ? 0 : 30,
      watchDrag: !reducedMotion,
    },
    [autoplay],
  );
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    getVisibility,
    serverVisibility,
  );
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState(0);
  const playing =
    !reducedMotion &&
    pageVisible &&
    inView &&
    !paused &&
    !hovered &&
    !focused &&
    !dragging;

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!carousel) return;
    const update = () =>
      setSelected(carousel.selectedScrollSnap() % placeholders.length);
    const startDrag = () => setDragging(true);
    const stopDrag = () => setDragging(false);
    carousel
      .on("select", update)
      .on("pointerDown", startDrag)
      .on("pointerUp", stopDrag);
    return () => {
      carousel
        .off("select", update)
        .off("pointerDown", startDrag)
        .off("pointerUp", stopDrag);
    };
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;
    const player = carousel.plugins().autoplay;
    if (playing) player.play();
    else player.stop();
  }, [carousel, playing]);

  function move(direction: "previous" | "next") {
    if (direction === "previous") carousel?.scrollPrev(reducedMotion);
    else carousel?.scrollNext(reducedMotion);
  }

  return (
    <section
      id="testimonials"
      ref={section}
      className="testimonials-section section-pad"
      aria-labelledby="testimonials-title"
      tabIndex={-1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="page-container flex flex-col gap-12">
        <div className="section-introduction">
          <div className="flex flex-col gap-4">
            <h2 id="testimonials-title" className="section-title">
              Testimonials
            </h2>
            <p className="text-sm text-gray-300">
              Preview placeholders — approved testimonials will appear here.
            </p>
          </div>
          <div
            className="flex shrink-0 gap-3"
            aria-label="Testimonial controls"
          >
            <Button
              variant="outline"
              size="icon"
              className="testimonial-arrow"
              aria-label="Previous testimonial"
              onClick={() => move("previous")}
            >
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="testimonial-arrow"
              aria-label="Next testimonial"
              onClick={() => move("next")}
            >
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="testimonial-arrow"
              disabled={reducedMotion}
              aria-label={
                paused
                  ? "Resume testimonial autoplay"
                  : "Pause testimonial autoplay"
              }
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? (
                <Play aria-hidden="true" />
              ) : (
                <Pause aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
        <div
          className="testimonials-viewport"
          ref={viewport}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonial placeholders"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? "previous" : "next");
            }
          }}
        >
          <div className="testimonials-track">
            {slides.map((number, index) => (
              <article
                className="testimonial-slide"
                key={`${number}-${index}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Placeholder ${number} of 3`}
                aria-hidden={index >= placeholders.length ? true : undefined}
              >
                <div className="testimonial-card">
                  <p className="text-sm text-gray-400">
                    Testimonial {String(number).padStart(2, "0")}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">
                      Awaiting an approved testimonial
                    </h3>
                    <p className="text-base leading-relaxed text-gray-300">
                      A client-approved quote and attribution will be added
                      here.
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    Placeholder for review
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p
          className="sr-only"
          aria-live={playing ? "off" : "polite"}
          aria-atomic="true"
        >
          Testimonial placeholder {selected + 1} of 3
        </p>
      </div>
    </section>
  );
}
