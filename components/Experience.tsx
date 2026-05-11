"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      {/* Section divider top */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="divider-glow mb-14 sm:mb-16" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="03"
          kicker="Experience"
          title={
            <>
              A timeline of real work —{" "}
              <span className="italic gradient-text-amber">
                support, QA, and software.
              </span>
            </>
          }
          description="Three professional chapters that built one engineer: full-stack software, manual QA, and production support inside a bank."
        />

        <div className="mt-12 sm:mt-14 relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-amber-300/30 via-white/10 to-transparent"
          />

          <ol className="flex flex-col gap-10 sm:gap-14">
            {experience.map((job, i) => (
              <motion.li
                key={job.company + job.period}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.05,
                }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Dot */}
                <span
                  aria-hidden
                  className="absolute left-2.5 sm:left-4 top-6 h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-300/15"
                />

                <article className="card-hover rounded-3xl glass p-6 sm:p-8">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Briefcase className="size-3.5 text-amber-200/80" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                          {job.kind}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl text-zinc-100 leading-tight">
                        {job.role}
                      </h3>
                      <p className="text-sm text-amber-200/80">
                        {job.company}
                        <span className="text-zinc-600"> · </span>
                        <span className="inline-flex items-center gap-1 text-zinc-400">
                          <MapPin className="size-3" />
                          {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-wider text-zinc-300 whitespace-nowrap">
                      {job.period}
                    </span>
                  </header>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-300 text-pretty">
                    {job.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {job.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-300/70"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}

            {/* Education entry */}
            {education.map((ed, i) => (
              <motion.li
                key={ed.institution}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (experience.length + i) * 0.05,
                }}
                className="relative pl-14 sm:pl-20"
              >
                <span
                  aria-hidden
                  className="absolute left-2.5 sm:left-4 top-6 h-3 w-3 rounded-full bg-emerald-300/80 ring-4 ring-emerald-300/15"
                />
                <article className="rounded-3xl glass p-6 sm:p-8">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="size-3.5 text-emerald-200/90" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                          Education
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl text-zinc-100 leading-tight">
                        {ed.degree}
                      </h3>
                      <p className="text-sm text-emerald-200/80">
                        {ed.institution}
                        <span className="text-zinc-600"> · </span>
                        <span className="inline-flex items-center gap-1 text-zinc-400">
                          <MapPin className="size-3" />
                          {ed.location}
                        </span>
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono tracking-wider text-zinc-300 whitespace-nowrap">
                      {ed.period}
                    </span>
                  </header>
                  <p className="mt-5 text-sm leading-relaxed text-zinc-300 text-pretty">
                    {ed.note}
                  </p>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
