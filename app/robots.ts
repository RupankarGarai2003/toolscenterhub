import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap:
      "https://toolscenterhub.com/sitemap.xml",

    host:
      "https://toolscenterhub.com",
  };
}