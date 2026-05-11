import { Mail } from "lucide-react";
import { personal } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/5 text-[11px] font-mono font-medium text-amber-200/90"
            >
              {personal.initials}
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-zinc-200">{personal.name}</span>
              <span className="text-[11px] text-zinc-500">
                Computer Science Engineer · {personal.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-zinc-300 hover:text-amber-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-zinc-300 hover:text-amber-200 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full glass text-zinc-300 hover:text-amber-200 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600">
          <span>© {year} Fares Hamdan · Designed and built with intent.</span>
          <span>Next.js · React · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
