import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so the stray lockfile in the home dir is ignored.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
