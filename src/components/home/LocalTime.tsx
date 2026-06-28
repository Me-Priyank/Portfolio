"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: profile.timezone,
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-3xl tabular-nums text-fg sm:text-4xl">
      {time || "--:--:--"}
    </span>
  );
}
