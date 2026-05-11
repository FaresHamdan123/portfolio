"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Hammer, BookOpen, Users } from "lucide-react";
import { skills } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Practical experience": CheckCircle2,
  "Project experience": Hammer,
  "Familiar with": BookOpen,
  "Working strengths": Users,
};

const ACCENT: Record<
  string,
  { dot: string; chip: string; iconWrap: string; label: string }
> = {
  "Practical experience": {
    dot: "bg-amber-300",
    chip: "hover:bg-amber-300/10 hover:border-amber-300/30 hover:text-amber-100",
    iconWrap: "bg-amber-300/10 border-amber-300/20 text-amber-200",
    label: "text-amber-200/80",
  },
  "Project experience": {
    dot: "bg-emerald-300",
    chip: "hover:bg-emerald-400/10 hover:border-emerald-400/30 hover:text-emerald-100",
    iconWrap: "bg-emerald-400/10 border-emerald-400/20 text-emerald-200",
    label: "text-emerald-200/80",
  },
  "Familiar with": {
    dot: "bg-zinc-400",
    chip: "hover:bg-white/10 hover:border-white/20 hover:text-zinc-100",
    iconWrap: "bg-white/5 border-white/10 text-zinc-300",
    label: "text-zinc-300",
  },
  "Working strengths": {
    dot: "bg-amber-200",
    chip: "hover:bg-amber-300/10 hover:border-amber-300/30 hover:text-amber-100",
    iconWrap: "bg-amber-300/10 border-amber-300/20 text-amber-200",
    label: "text-amber-200/80",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="04"
          kicker="Technical foundation"
          title={
            <>
              The toolkit —{" "}
              <span className="italic gradient-text-amber">
                grouped honestly by confidence.
              </span>
            </>
          }
          description="Rather than listing everything at the same level, I separate what I've used in production, what I've built real things with, and what I'm familiar with but still growing into."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {skills.map((group, i) => {
            const Icon = ICONS[group.group] ?? CheckCircle2;
            const a = ACCENT[group.group] ?? ACCENT["Familiar with"];
            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (i % 2) * 0.08,
                }}
                className="card-hover rounded-3xl glass p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${a.iconWrap}`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className={`size-1.5 rounded-full ${a.dot}`}
                        />
                        <span
                          className={`text-[10px] font-mono uppercase tracking-[0.2em] ${a.label}`}
                        >
                          Level 0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base sm:text-lg font-medium text-zinc-100 tracking-wide">
                        {group.group}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600 whitespace-nowrap">
                    0{i + 1} / 0{skills.length}
                  </span>
                </div>

                {group.note && (
                  <p className="mt-4 text-[13px] leading-relaxed text-zinc-400 text-pretty">
                    {group.note}
                  </p>
                )}

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11.5px] text-zinc-300 transition-colors ${a.chip}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
