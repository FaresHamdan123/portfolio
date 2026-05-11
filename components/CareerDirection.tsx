"use client";

import { motion } from "framer-motion";
import { Check, Minus, Compass } from "lucide-react";
import { careerDirection } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function CareerDirection() {
  return (
    <section id="career" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="07"
              kicker={careerDirection.kicker}
              title={
                <>
                  Building toward stronger{" "}
                  <span className="italic gradient-text-amber">
                    international roles.
                  </span>
                </>
              }
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300 text-pretty"
            >
              {careerDirection.body}
            </motion.p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* Looking for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="card-hover rounded-3xl glass p-6 sm:p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <Compass className="size-4 text-amber-300" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-200/70">
                  Looking for
                </span>
              </div>
              <ul className="space-y-3">
                {careerDirection.looking.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Less aligned with */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08,
              }}
              className="card-hover rounded-3xl glass p-6 sm:p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <Minus className="size-4 text-zinc-500" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                  Less aligned with
                </span>
              </div>
              <ul className="space-y-3">
                {careerDirection.lessAligned.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                  >
                    <Minus className="mt-1 size-3.5 shrink-0 text-zinc-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
