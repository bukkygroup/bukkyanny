import Image from "next/image";
import monogram from "@/public/branding/ba-transparent.png";
import Link from "next/link";

export function BrandMark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      href="/#home"
      className="site-brand"
      aria-label="Bukky Anny — Home"
      onClick={onNavigate}
    >
      <Image
        src={monogram}
        alt="Bukky Anny monogram"
        sizes="80px"
        loading="eager"
      />
    </Link>
  );
}
