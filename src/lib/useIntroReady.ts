"use client";

import { useEffect, useState } from "react";

/**
 * Returns false until the first-load Preloader has lifted, then true.
 * Lets entrance animations wait so they actually play *after* the loader
 * instead of running hidden behind it. Already-complete loads resolve
 * immediately via the global flag.
 */
export function useIntroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.__introDone) {
      setReady(true);
      return;
    }
    const on = () => setReady(true);
    window.addEventListener("intro:done", on);
    return () => window.removeEventListener("intro:done", on);
  }, []);

  return ready;
}

declare global {
  interface Window {
    __introDone?: boolean;
  }
}
