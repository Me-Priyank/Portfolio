import { skillGroups } from "@/lib/data";
import { techMeta } from "@/lib/techMeta";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="display-lg font-display text-fg">
              The <span className="font-serif italic text-accent">toolkit</span>
            </h2>
            <span className="eyebrow hidden sm:block">/ 02 · Stack</span>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {skillGroups.map((group, i) => (
            <Reveal i={i} key={group.title} as="div">
              <div className="grid grid-cols-1 gap-3 border-b border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:py-7">
                <div className="flex items-baseline gap-2">
                  <span className="font-machina text-sm tracking-wide text-fg">
                    {group.title}
                  </span>
                  <span className="font-mono text-[0.7rem] text-faint">
                    ({String(group.items.length).padStart(2, "0")})
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const meta = techMeta[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] py-1.5 pl-2.5 pr-3.5 text-sm text-fg/80 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.05] hover:text-fg"
                      >
                        {meta && (
                          <meta.Icon
                            className="size-4 shrink-0"
                            style={{ color: meta.color }}
                          />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
