import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ami-hollander",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
