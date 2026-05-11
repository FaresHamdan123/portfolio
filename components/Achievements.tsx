"use client";

import { motion } from "framer-motion";
import { Award, Crown, Globe2, Sparkles } from "lucide-react";
import { achievements } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const ICONS = [Crown, Award, Globe2, Sparkles];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="06"
          kicker="Selected achievements"
          title={
            <>
              Beyond the job —{" "}
              <span className="italic gradient-text-amber">
                contributions, leadership, recognition.
              </span>
            </>
          }
          description="Long before the first job, I was already organizing CS communities, winning competitions, and representing my university internationally."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {achievements.map((a, i) => {
            const Icon = ICONS[i] ?? Award;
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (i % 2) * 0.08,
                }}
                className="card-hover relative flex gap-5 rounded-3xl glass p-6 sm:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-300/10 border border-amber-300/20 text-amber-200">
                  <Icon className="size-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                    <span>{a.year}</span>
                    <span className="h-px w-6 bg-zinc-700" />
                    <span className="text-amber-200/80">{a.org.split(" · ")[0]}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl text-zinc-100 leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-zinc-500">{a.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {a.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
