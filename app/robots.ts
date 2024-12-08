import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.URL || "https://krypto-assigment.vercel.app/";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: baseUrl,
  };
}
