"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="05"
          kicker="Selected work"
          title={
            <>
              Projects, products and{" "}
              <span className="italic gradient-text-amber">
                ownership stories.
              </span>
            </>
          }
          description="From a full-stack hospital app to production support inside a bank — these are the chapters that shaped how I build, test and ship."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 2) * 0.1,
              }}
              className="card-hover group relative flex flex-col overflow-hidden rounded-3xl glass p-7 sm:p-8 min-h-[420px]"
            >
              {/* Accent glow */}
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70 ${
                  p.accent === "amber"
                    ? "bg-amber-300/20"
                    : "bg-emerald-400/15"
                }`}
              />

              <header className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-2 rounded-full ${
                        p.accent === "amber"
                          ? "bg-amber-300"
                          : "bg-emerald-300"
                      }`}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                      {p.kind} · {p.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-zinc-100 leading-tight">
                    {p.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      p.accent === "amber"
                        ? "text-amber-200/80"
                        : "text-emerald-200/80"
                    }`}
                  >
                    {p.tagline}
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 group-hover:border-amber-300/40 group-hover:text-amber-200 transition-colors">
                  <ArrowUpRight className="size-4" />
                </span>
              </header>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400 text-pretty">
                {p.description}
              </p>

              <ul className="mt-5 space-y-2">
                {p.highlights.slice(0, 3).map((h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <span
                      aria-hidden
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                        p.accent === "amber" ? "bg-amber-300" : "bg-emerald-300"
                      }`}
                    />
                    <span className="leading-relaxed text-zinc-400">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10.5px] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 5 && (
                    <span className="text-[10.5px] text-zinc-500 self-center">
                      +{p.stack.length - 5}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                  {p.role}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
