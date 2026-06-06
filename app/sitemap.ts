import type { MetadataRoute } from "next";
import { tools } from "@/lib/toolsList";
import { seoVariants } from "@/utils/toolVariantsSeo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://toolscenterhub.com";

  const toolRoutes = tools.flatMap(
    (tool) => [
      {
        url: `${baseUrl}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },

      ...seoVariants.map(
        (variant) => ({
          url: `${baseUrl}/tools/${tool.slug}-${variant}`,
          lastModified:
            new Date(),
          changeFrequency:
            "weekly" as const,
          priority: 0.7,
        })
      ),
    ]
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency:
        "daily",
      priority: 1,
    },

    ...toolRoutes,
  ];
}