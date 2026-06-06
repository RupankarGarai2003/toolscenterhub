import type { MetadataRoute } from "next";
import { tools } from "@/lib/toolsList";

const platformVariants = [
  "for-instagram",
  "for-facebook",
  "for-whatsapp",
  "for-youtube",
  "for-linkedin",
  "for-twitter",
  "for-tiktok",
  "for-pinterest",
];

const sizeVariants = [
  "under-20kb",
  "under-50kb",
  "under-100kb",
  "under-150kb",
  "under-200kb",
  "under-300kb",
  "under-500kb",
  "under-1mb",
  "under-2mb",
  "under-5mb",
];

const documentVariants = [
  "passport-photo",
  "signature",
  "aadhaar-card",
  "pan-card",
  "resume",
  "cv",
  "thumbnail",
  "banner",
  "logo",
  "profile-photo",
];

const seoVariants = [
  ...platformVariants,
  ...sizeVariants,
  ...documentVariants,
];

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
          lastModified: new Date(),
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