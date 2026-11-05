"use client";

import Link from "next/link";
import { BrandMark } from "@/components/shared/brand-mark/brand-mark";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navigation, socialUrl } from "@/data/site";

export function SiteMenu() {
  const [open, setOpen] = useState(false);
  const destination = useRef<string | null>(null);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="site-menu-trigger"
          aria-label="Open navigation menu"
        >
          Menu
        </Button>
      </DialogTrigger>
      <DialogContent
        placement="navigation"
        showCloseButton={false}
        onCloseAutoFocus={(event) => {
          if (!destination.current) return;
          event.preventDefault();
          document
            .querySelector<HTMLElement>(destination.current)
            ?.focus({ preventScroll: true });
          destination.current = null;
        }}
      >
        <DialogTitle className="sr-only">
          Explore Bukky Anny’s world
        </DialogTitle>
        <DialogDescription className="sr-only">
          Navigate to a section of the homepage.
        </DialogDescription>
        <DialogClose asChild>
          <Button
            variant="ghost"
            className="menu-close"
            aria-label="Close navigation menu"
          >
            Close
          </Button>
        </DialogClose>
        <BrandMark
          onNavigate={() => {
            destination.current =
              window.location.pathname === "/" ? "#home" : null;
            setOpen(false);
          }}
        />
        <nav aria-label="Main navigation" className="menu-links">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => {
                destination.current =
                  window.location.pathname === "/" ? item.href.slice(1) : null;
                setOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="secondary" className="w-full">
          <Link href={socialUrl} target="_blank" rel="noopener noreferrer">
            Let’s connect
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
