"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { contact, personal } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

type ChannelKey =
  | "email"
  | "emailSecondary"
  | "whatsapp"
  | "phone"
  | "linkedin"
  | "github";

const channels: {
  key: ChannelKey;
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  hint?: string;
  accent?: "amber" | "olive";
}[] = [
  {
    key: "email",
    label: "Primary email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
    hint: "Best for opportunities",
    accent: "amber",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: personal.phone,
    href: personal.whatsapp,
    Icon: MessageCircle,
    hint: "Fastest reply",
    accent: "olive",
  },
  {
    key: "phone",
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phoneRaw}`,
    Icon: Phone,
  },
  {
    key: "emailSecondary",
    label: "Secondary email",
    value: personal.emailSecondary,
    href: `mailto:${personal.emailSecondary}`,
    Icon: Mail,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "in/fares-hamdan",
    href: personal.linkedin,
    Icon: LinkedInIcon,
  },
  {
    key: "github",
    label: "GitHub",
    value: "FaresHamdan123",
    href: personal.github,
    Icon: GitHubIcon,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<ChannelKey | null>(null);

  const copy = async (key: ChannelKey, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-7 sm:p-10 lg:p-14">
          {/* Backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(232,184,106,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(91,107,58,0.10) 0%, transparent 60%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                index="08"
                kicker={contact.kicker}
                title={
                  <>
                    If your team is building{" "}
                    <span className="italic gradient-text-amber">
                      something serious
                    </span>{" "}
                    — I&apos;d like to hear about it.
                  </>
                }
                description={contact.body}
              />

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-200 to-amber-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail className="size-4" />
                  Write to me
                  <span
                    aria-hidden
                    className="inline-block group-hover:translate-x-0.5 transition-transform"
                  >
                    →
                  </span>
                </a>
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-zinc-100 hover:text-amber-100 transition-colors"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-zinc-500">
                <MapPin className="size-3.5" />
                <span>
                  {personal.location} · {personal.locale}
                </span>
              </div>
            </div>

            {/* Channels */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {channels.map((c, i) => {
                const canCopy =
                  c.key === "email" ||
                  c.key === "emailSecondary" ||
                  c.key === "phone";
                return (
                  <motion.div
                    key={c.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: (i % 2) * 0.06 + Math.floor(i / 2) * 0.03,
                    }}
                    className="group relative card-hover rounded-2xl glass p-4 sm:p-5"
                  >
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="absolute inset-0 rounded-2xl"
                      aria-label={`${c.label}: ${c.value}`}
                    />
                    <div className="relative flex flex-col gap-3 min-w-0">
                      {/* Top row: icon + label + arrow */}
                      <div className="flex items-center justify-between gap-3 min-w-0">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                              c.accent === "amber"
                                ? "bg-amber-300/10 border-amber-300/20 text-amber-200"
                                : c.accent === "olive"
                                ? "bg-emerald-400/10 border-emerald-400/20 text-emerald-200"
                                : "bg-white/5 border-white/10 text-zinc-300"
                            }`}
                          >
                            <c.Icon className="size-3.5" />
                          </div>
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 truncate">
                              {c.label}
                            </span>
                            {c.hint && (
                              <span className="text-[10px] text-amber-200/70 whitespace-nowrap">
                                · {c.hint}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-zinc-500 group-hover:text-amber-200 transition-colors">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>

                      {/* Value row: full card width */}
                      <div className="flex items-center justify-between gap-3 min-w-0">
                        <span
                          className="text-[13px] sm:text-sm text-zinc-100 min-w-0 leading-snug"
                          style={{
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                        >
                          {c.value}
                        </span>
                        {canCopy && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              copy(c.key, c.value);
                            }}
                            className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-zinc-400 hover:text-amber-200 hover:border-amber-300/40 transition-colors"
                            aria-label={`Copy ${c.label}`}
                          >
                            {copied === c.key ? (
                              <Check className="size-3 text-emerald-300" />
                            ) : (
                              <Copy className="size-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
