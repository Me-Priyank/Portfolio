import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]"
      />
      <div className="text-center">
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="display-xl font-display text-fg">
          Lost in <span className="font-serif italic text-accent">space</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-muted">
          This page drifted off the map. Let&apos;s get you back to something real.
        </p>
        <Link
          href="/home"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-accent"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back home
        </Link>
      </div>
    </section>
  );
}
