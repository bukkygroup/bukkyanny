import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeCopy } from "@/data/home";
import { socialUrl } from "@/data/site";

export function Media() {
  return (
    <section
      id="media"
      className="section-pad"
      aria-labelledby="media-title"
      tabIndex={-1}
    >
      <div className="page-container biography-layout">
        <p className="section-label">Media &amp; conversations</p>
        <div className="flex flex-col gap-10">
          <h2 id="media-title" className="section-title reveal-heading">
            Come into my world
          </h2>
          <p className="text-lg leading-relaxed">{homeCopy.invitation}</p>
          <p className="text-lg leading-relaxed">{homeCopy.youtube}</p>
          <div className="media-list">
            <div className="media-project">
              <h3>Loud Thoughts with Bukky</h3>
              <span>YouTube project</span>
            </div>
            <div className="media-project">
              <h3>Pose Like a Pro with Bukky</h3>
              <span>YouTube project</span>
            </div>
            <Link
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="media-project media-link"
            >
              <h3>Instagram: @iambukkyanny</h3>
              <ArrowUpRight className="size-5" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
