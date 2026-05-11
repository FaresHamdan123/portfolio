"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Wrench } from "lucide-react";
import { pillars } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const ICONS = [Cpu, ShieldCheck, Wrench];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="02"
          kicker="What I'm built on"
          title={
            <>
              Three pillars that shape{" "}
              <span className="italic gradient-text-amber">
                how I work.
              </span>
            </>
          }
          description="A Computer Science foundation, a QA mindset, and real-world engineering discipline — together, not separately."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((p, i) => {
            const Icon = ICONS[i] ?? Cpu;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
                className="card-hover relative flex flex-col gap-5 rounded-3xl glass p-6 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10 border border-amber-300/20 text-amber-200">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">
                    {p.id}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-zinc-100 leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>
                </div>

                <ul className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 border border-white/5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
