import type { MetadataRoute } from "next";
import { tools } from "@/lib/toolsList";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolscenterhub.com";

  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolRoutes,
  ];
}