import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "@/app/_styles/variables.scss" as *;`,
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
