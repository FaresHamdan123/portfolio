"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { philosophy } from "@/lib/content";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Backdrop accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(232,184,106,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
            {philosophy.kicker}
          </span>

          <Quote
            aria-hidden
            className="size-8 text-amber-300/60 -mb-2"
          />

          <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] max-w-4xl gradient-text text-balance">
            &ldquo;{philosophy.quote}&rdquo;
          </blockquote>

          <div className="mt-4 flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-zinc-500">
            <span className="h-px w-10 bg-zinc-700" />
            FARES HAMDAN · OPERATING NOTES
            <span className="h-px w-10 bg-zinc-700" />
          </div>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {philosophy.principles.map((pr, i) => (
            <motion.article
              key={pr.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="card-hover relative rounded-3xl glass p-6 sm:p-7"
            >
              <span className="absolute top-4 right-5 font-mono text-xs tracking-[0.2em] text-zinc-600">
                · {String(i + 1).padStart(2, "0")} ·
              </span>
              <h3 className="font-display text-xl text-zinc-100 leading-tight">
                {pr.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {pr.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
