"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  const isActive = (href: string) =>
    href === "/home" ? pathname === "/" || pathname === "/home" : pathname === href;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "border-line bg-bg/70 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="/home"
            className="group flex items-center gap-2.5"
            aria-label="Home"
          >
            <span className="relative size-8 overflow-hidden rounded-full ring-1 ring-line-strong transition-all duration-300 group-hover:ring-accent">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="32px"
                className="object-cover object-[50%_18%]"
              />
            </span>
            <span className="font-machina text-sm tracking-wide text-fg/90">
              {profile.name}
              <span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-fg"
                    : "text-muted hover:text-fg"
                )}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-line"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-line px-4 py-1.5 text-sm text-fg/90 transition-colors hover:border-line-strong hover:bg-white/[0.04] md:inline-block"
            >
              Résumé
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid size-9 place-items-center rounded-full border border-line text-fg md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col bg-bg/95 p-6 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-machina text-sm">
                {profile.name}
                <span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full border border-line"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display block text-6xl leading-tight tracking-tight text-fg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-3 text-center text-sm"
            >
              Download Résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
