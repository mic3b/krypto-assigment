import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.PUBLIC_URL || "krypto-assigment.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
