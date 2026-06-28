"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      data-cursor="hover"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block"
    >
      <div className="card overflow-hidden p-2 transition-colors duration-500 group-hover:border-line-strong">
        {/* Media */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-[0.7rem]">
          <div
            aria-hidden
            className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(120% 80% at 50% 100%, ${project.accent}22, transparent 70%)`,
            }}
          />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 z-20 font-mono text-[0.65rem] text-white/80 mix-blend-difference">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute right-3 top-3 z-20 grid size-8 place-items-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between gap-3 px-2.5 pb-1 pt-3">
          <h3 className="font-display text-base text-fg transition-colors duration-300 group-hover:text-accent sm:text-lg">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[0.65rem] text-faint">
            {project.year}
          </span>
        </div>

        <p className="line-clamp-1 px-2.5 text-[0.8rem] leading-relaxed text-muted">
          {project.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5 px-2.5 pb-2 pt-2.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.62rem] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
