"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Heading column */}
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              kicker={about.kicker}
              title={
                <>
                  A Computer Science mind shaped by{" "}
                  <span className="italic gradient-text-amber">
                    real systems, users, and production pressure.
                  </span>
                </>
              }
            />
          </div>

          {/* Body column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.08,
                  }}
                  className="text-base sm:text-lg leading-relaxed text-zinc-300 text-pretty"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/5 bg-white/5"
            >
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[var(--color-bg)]/80 p-5 flex flex-col gap-1"
                >
                  <span className="font-display text-4xl gradient-text-amber leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-zinc-400 leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
