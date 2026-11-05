import Link from "next/link";
import { SiteMenu } from "./site-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="#main-content" className="skip-link">
        Skip to content
      </Link>
      <SiteMenu />
    </header>
  );
}
