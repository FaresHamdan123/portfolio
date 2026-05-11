"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index?: string;
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = "left",
}: Props) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-5 ${
        isCenter ? "items-center text-center" : "items-start"
      } max-w-3xl ${isCenter ? "mx-auto" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3"
      >
        {index && (
          <span className="section-number">{index}</span>
        )}
        <span className="h-px w-8 bg-gradient-to-r from-amber-300/40 to-transparent" />
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {kicker}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance gradient-text"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-lg leading-relaxed text-zinc-400 text-pretty"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
