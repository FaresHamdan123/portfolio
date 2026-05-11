"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personal } from "@/lib/content";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
      >
        <nav
          className={`flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass-strong px-3 py-2 sm:px-4 sm:py-2.5 w-full max-w-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "px-4 py-3 sm:px-6 sm:py-3.5 w-full max-w-4xl border border-transparent"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 group"
            aria-label="Fares Hamdan home"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/5 text-[11px] font-mono font-medium text-amber-200/90 group-hover:border-amber-300/60 transition-colors"
              aria-hidden
            >
              {personal.initials}
            </span>
            <span className="hidden sm:block font-display text-base tracking-tight text-zinc-100">
              Fares <span className="text-zinc-500">Hamdan</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="px-3 py-1.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CV CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            <a
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-300/90 to-amber-500/90 px-3.5 py-1.5 text-xs font-medium text-zinc-950 hover:from-amber-200 hover:to-amber-400 transition-all"
            >
              <Download className="size-3.5" />
              Download CV
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full glass text-zinc-200 hover:text-amber-200 transition-colors"
              aria-label="Open menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.nav
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-4 mt-24 rounded-3xl glass-strong p-6"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-zinc-200 hover:bg-white/5 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-zinc-500 font-mono">
                        0{navLinks.indexOf(link) + 1}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href={personal.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-300/90 to-amber-500/90 px-4 py-3 text-sm font-medium text-zinc-950"
                  >
                    <Download className="size-4" />
                    Download CV
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
