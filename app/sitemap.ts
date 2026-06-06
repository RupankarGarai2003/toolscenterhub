import type { MetadataRoute } from "next";
import { tools } from "@/lib/toolsList";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://toolscenterhub.com";

  const currentDate =
    new Date();

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/help",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified:
      currentDate,
    changeFrequency:
      "monthly" as const,
    priority:
      route === ""
        ? 1
        : 0.7,
  }));

  const toolPages =
    tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified:
        currentDate,
      changeFrequency:
        "weekly" as const,
      priority: 0.8,
    }));

  return [
    ...staticPages,
    ...toolPages,
  ];
}