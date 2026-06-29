"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/lib/data";

const reveal = [0.16, 1, 0.3, 1] as const;
const curtain = [0.76, 0, 0.24, 1] as const;

/**
 * First-load intro overlay: a name reveal + counter (0 -> 100) + progress line,
 * then the panel slides up to reveal the site. Once the curtain finishes
 * lifting it broadcasts `intro:done` so entrance animations can play.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("lenis-stopped");

    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); // easeOutExpo
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 280);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.documentElement.classList.remove("lenis-stopped");
  }, [done]);

  // fire once the curtain has fully lifted so the site reveals *after* it
  const handleExitComplete = () => {
    window.__introDone = true;
    window.dispatchEvent(new Event("intro:done"));
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-bg"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: curtain }}
        >
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[130px]"
          />

          {/* eyebrow */}
          <motion.span
            className="eyebrow absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Portfolio · {new Date().getFullYear()}
          </motion.span>

          {/* centered name with mask reveal */}
          <div className="absolute inset-0 grid place-items-center px-6">
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className="font-display block text-center text-[clamp(3rem,12vw,8.5rem)] leading-none tracking-tight text-fg"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: reveal, delay: 0.05 }}
              >
                {profile.name}
                <span className="text-accent">.</span>
              </motion.span>
            </span>
          </div>

          {/* bottom row: label + counter */}
          <div className="absolute inset-x-0 bottom-8 flex items-end justify-between px-6 sm:px-10">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Loading
            </motion.span>
            <span className="font-display text-3xl tabular-nums text-fg sm:text-5xl">
              {count}
              <span className="text-accent">%</span>
            </span>
          </div>

          {/* progress line */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/[0.06]">
            <div
              className="h-full bg-accent transition-[width] duration-75 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
