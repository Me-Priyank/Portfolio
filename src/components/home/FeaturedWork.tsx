import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="display-lg font-display text-fg">
              My <span className="font-serif italic text-accent">work</span>
            </h2>
            <span className="eyebrow hidden sm:block">/ 03 · Work</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal i={2}>
          <Link
            href="/projects"
            className="group mt-10 inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
