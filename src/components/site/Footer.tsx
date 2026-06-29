"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/lib/data";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const letters = profile.name.toUpperCase().split("");
  const nameRef = useRef<HTMLSpanElement>(null);
  // No `once`: re-fires every time the name scrolls in/out of view, so the
  // letters rise on the way down and drop again on the way up. `amount` keys
  // off how much of the word is visible (works at the very bottom on mobile,
  // where a position-based margin would never register).
  const nameInView = useInView(nameRef, { amount: 0.2 });

  return (
    <footer className="relative overflow-hidden border-t border-line px-4 pt-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6">Have an idea?</p>
        </Reveal>
        <Reveal i={1}>
          <a
            href={`https://cal.com/priyank-verma/30min`}
            className="group inline-flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <span className="display-lg font-display text-fg transition-colors group-hover:text-accent">
              Let&apos;s talk
            </span>
            <span className="grid size-12 place-items-center rounded-full border border-line-strong text-fg transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent sm:size-16">
              <ArrowUpRight className="size-6 sm:size-7" />
            </span>
          </a>
        </Reveal>

        <Reveal i={2}>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-6 inline-block font-mono text-sm text-muted hover:text-fg"
          >
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line py-10 sm:grid-cols-3 lg:grid-cols-5">
          {socials.map((s, i) => (
            <Reveal i={i} key={s.label}>
              <Magnetic strength={0.2}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <span className="eyebrow block">{s.label}</span>
                  <span className="mt-2 flex items-center gap-1 text-sm text-fg/90 transition-colors group-hover:text-accent">
                    {s.handle}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                </a>
              </Magnetic>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 py-8 text-xs text-faint sm:flex-row sm:items-center">
          <span className="font-mono">
            © {year} {profile.name}. Built with Next.js & care.
          </span>
          <span className="font-mono">{profile.location} · {profile.timezone}</span>
        </div>
      </div>

      {/* Oversized watermark: reveals letter by letter on scroll */}
      <div
        aria-hidden
        className="pointer-events-none flex select-none justify-center px-2"
      >
        <span
          ref={nameRef}
          className="font-display flex translate-y-[16%] overflow-hidden pb-[0.12em] text-[22vw] leading-none tracking-tighter text-white/[0.055]"
        >
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ y: "115%" }}
              animate={nameInView ? { y: "0%" } : { y: "115%" }}
              transition={{ duration: 1, delay: i * 0.06, ease }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      </div>
    </footer>
  );
}
