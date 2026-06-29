import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal from "@/components/ui/Reveal";
import LocalTime from "@/components/home/LocalTime";
import { principles, stats, profile } from "@/lib/data";

export default function Bento() {
  return (
    <section id="about" className="relative px-4 pt-28 sm:px-6 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="display-lg font-display text-fg">
              The <span className="font-serif italic text-accent">person</span>
              <br />
              behind it.
            </h2>
            <span className="eyebrow hidden sm:block">/ 01 · About</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:auto-rows-[170px] lg:grid-cols-6">
          {/* About: large */}
          <Reveal className="lg:col-span-4 lg:row-span-2" as="div">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between gap-8">
                <span className="eyebrow">Hello, world</span>
                <p className="font-display text-2xl leading-snug text-fg/90 sm:text-3xl lg:text-[2.1rem]">
                  I&apos;m {profile.name}, a {profile.age}-year-old developer based in{" "}
                  {profile.location}. I build web products and automations for
                  B2B and B2C brands, obsessing over the moments that make
                  software feel
                  <span className="text-accent"> alive</span>.
                </p>
                <span className="font-mono text-xs text-faint">
                  Product-minded · Automation-driven
                </span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Local time */}
          <Reveal i={1} className="lg:col-span-2" as="div">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between">
                <span className="eyebrow">Local time</span>
                <LocalTime />
                <span className="font-mono text-xs text-faint">
                  {profile.location} · GMT +5:30
                </span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Stats */}
          <Reveal i={2} className="lg:col-span-2" as="div">
            <SpotlightCard className="h-full">
              <div className="flex h-full items-center justify-between gap-2">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl text-fg sm:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-wider text-faint">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Principles: tall */}
          <Reveal i={1} className="lg:col-span-3 lg:row-span-2" as="div">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col gap-5">
                <span className="eyebrow">How I work</span>
                <div className="flex flex-col">
                  {principles.map((p, idx) => (
                    <div
                      key={p.title}
                      className="flex gap-4 border-b border-line py-4 mb-[-6] last:border-b-0"
                    >
                      <span className="font-mono text-xs text-accent">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-lg leading-tight text-fg">
                          {p.title}
                        </p>
                        <p className="mt-1 text-sm leading-snug text-muted">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Currently */}
          <Reveal i={2} className="lg:col-span-3" as="div">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col justify-between gap-4">
                <span className="eyebrow">Currently</span>
                <p className="text-base leading-relaxed text-fg/85">
                  Building interfaces and automations that do real work for
                  brands, so people don&apos;t have to.
                </p>
                <span className="font-mono text-xs text-faint">Open to freelance & full-time</span>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* CTA to projects */}
          <Reveal i={3} className="lg:col-span-3" as="div">
            <Link href="/projects" className="block h-full" data-cursor="hover">
              <SpotlightCard className="h-full bg-accent/[0.04] hover:bg-accent/[0.07]">
                <div className="flex h-full items-end justify-between">
                  <div>
                    <span className="eyebrow">See my work</span>
                    <p className="mt-3 font-display text-2xl text-fg sm:text-3xl">
                      See the projects
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong text-fg transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
