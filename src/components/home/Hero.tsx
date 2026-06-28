"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/lib/data";
import Magnetic from "@/components/ui/Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

/** Independent entrance: each element drives its own animation so nothing
 *  depends on fragile parent orchestration. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

const line = (delay: number) => ({
  initial: { y: "115%" },
  animate: { y: "0%" },
  transition: { duration: 1.1, ease, delay },
});

export default function Hero() {
  return (
    <section className="relative px-4 pt-28 sm:px-6 sm:pt-36 lg:pt-44">
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-28 left-1/4 size-[34rem] rounded-full bg-accent/[0.10] blur-[130px]" />
        <div className="absolute right-0 top-44 size-[30rem] rounded-full bg-sky-500/[0.08] blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        {/* Left: headline */}
        <div>
          <motion.div
            {...rise(0.1)}
            className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="eyebrow">
              {profile.role} · {profile.location}
            </span>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-fg/80">
                <span className="relative inline-flex size-1.5 text-emerald-400">
                  <span className="pulse-ring" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                Available for work
              </span>
            )}
          </motion.div>

          <h1 className="display-xl font-display text-fg">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span {...line(0.18)} className="block">
                Software
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span {...line(0.28)} className="block">
                that feels
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                {...line(0.38)}
                className="block font-serif italic text-accent"
              >
                intentional.
              </motion.span>
            </span>
          </h1>

          <motion.p
            {...rise(0.55)}
            className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            {...rise(0.68)}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
          >
            <Magnetic>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-accent"
              >
                View projects
                <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:rotate-[-45deg]" />
              </Link>
            </Magnetic>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm text-muted hover:text-fg"
            >
              Download résumé
            </a>
          </motion.div>
        </div>

        {/* Right: portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="relative w-full lg:max-w-none"
        >
          <div className="card overflow-hidden p-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[0.9rem] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="font-mono text-xs text-white/90">
                  {profile.name}, {profile.age}
                </span>
                <span className="font-mono text-xs text-white/70">
                  est. {new Date().getFullYear() - 3}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="mx-auto mt-14 flex max-w-6xl items-center justify-between border-t border-line pt-6 sm:mt-20">
        <span className="eyebrow">Scroll to explore</span>
        <span className="eyebrow hidden sm:block">{profile.tagline}</span>
      </div>
    </section>
  );
}
