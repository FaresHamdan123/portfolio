"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { hero, personal } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.15 + i * 0.08,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* Decorative number column */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 text-[10px] font-mono tracking-[0.3em] text-zinc-600"
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-amber-300/30" />
        <span className="rotate-90 origin-center whitespace-nowrap">
          PORTFOLIO · 2026
        </span>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — Copy */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <motion.div
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="tag tag-accent">
                <Sparkles className="size-3" />
                {hero.eyebrow}
              </span>
              <span className="tag">
                <MapPin className="size-3" />
                {personal.location}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
            >
              <span className="block gradient-text">{hero.headline[0]}</span>
              <span className="block">
                <span className="italic gradient-text-amber">
                  {hero.headline[1]}
                </span>
              </span>
              <span className="block gradient-text">{hero.headline[2]}</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-200 text-pretty"
            >
              {hero.supportingLine}
            </motion.p>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2.4}
              variants={fadeUp}
              className="max-w-xl text-sm sm:text-[15px] leading-relaxed text-zinc-400 text-pretty -mt-3"
            >
              {hero.intro}
            </motion.p>

            {/* Meta strip */}
            <motion.dl
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
            >
              {hero.meta.map((m) => (
                <div
                  key={m.label}
                  className="bg-[var(--color-bg)]/80 p-4 sm:p-5"
                >
                  <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                    {m.label}
                  </dt>
                  <dd className="mt-1.5 text-sm text-zinc-200 leading-snug">
                    {m.value}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={4}
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-200 to-amber-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Let&apos;s work together
                <span
                  aria-hidden
                  className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform"
                >
                  →
                </span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-zinc-100 hover:text-amber-100 transition-colors"
              >
                See my work
              </a>
              <a
                href={personal.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                Download CV ↗
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <PortraitCard />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 lg:mt-20 flex items-center gap-3 text-zinc-500"
        >
          <span className="h-px w-12 bg-zinc-700" />
          <ArrowDown className="size-4 animate-bounce" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em]">
            Scroll · The full story
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <div className="relative">
      {/* Decorative grid frame */}
      <div
        aria-hidden
        className="absolute -inset-6 sm:-inset-8 rounded-[2rem] bg-grid-fine opacity-30 mask-radial-soft"
      />
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-amber-300/20 via-amber-500/0 to-emerald-700/15 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] glass-strong p-1.5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
          <Image
            src={personal.photo}
            alt={`${personal.name} portrait`}
            fill
            sizes="(max-width: 1024px) 80vw, 40vw"
            priority
            className="object-cover object-center grayscale-[15%] contrast-[1.05]"
          />
          {/* Photo overlays */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-transparent mix-blend-overlay"
          />

          {/* Corner markers */}
          <CornerMark className="top-3 left-3" />
          <CornerMark className="top-3 right-3 rotate-90" />
          <CornerMark className="bottom-3 left-3 -rotate-90" />
          <CornerMark className="bottom-3 right-3 rotate-180" />

          {/* Caption strip */}
          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
            <div className="rounded-xl glass-strong px-3 py-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Subject
              </div>
              <div className="text-sm font-medium text-zinc-100">
                {personal.name}
              </div>
            </div>
            <div className="rounded-xl glass-strong px-3 py-2 text-right">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Role
              </div>
              <div className="text-sm font-medium text-amber-200/90">
                Computer Science
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ID chip */}
      <div className="absolute -left-4 sm:-left-8 top-8 hidden sm:flex">
        <div className="glass-strong rounded-2xl px-3 py-2 shadow-lg animate-float-slow">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Floating tag */}
      <div className="absolute -right-4 sm:-right-6 bottom-12 hidden sm:flex">
        <div className="glass-strong rounded-2xl px-3 py-2 shadow-lg">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            Based in
          </div>
          <div className="text-sm font-medium text-zinc-100">
            Ramallah · 🇵🇸
          </div>
        </div>
      </div>
    </div>
  );
}

function CornerMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-5 w-5 border-l border-t border-amber-200/50 ${className}`}
    />
  );
}
