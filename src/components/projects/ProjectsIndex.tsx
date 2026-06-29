"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/projects/ProjectCard";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectsIndex() {
  return (
    <section className="px-4 pt-32 sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow"
          >
            Portfolio · {projects.length} projects
          </motion.span>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease }}
              className="display-xl font-display text-fg"
            >
              Projects
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            A selection of work I&apos;ve designed, built, and automated for
            brands, from products to interaction studies. Each one taught me
            something about craft.
          </motion.p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
