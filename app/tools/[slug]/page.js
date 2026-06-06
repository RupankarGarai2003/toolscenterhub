import { tools } from "@/lib/toolsList";
import * as ToolComponents from "@/components/tools";
import { getSeoData } from "@/utils/seo";
import { redirect } from "next/navigation";
import ToolHeading from "@/components/tools/ToolHeading";

function parseSlug(slug) {
  const decoded = decodeURIComponent(slug)
    .toLowerCase()
    .trim();

  const matchedTool = tools.find((t) =>
    decoded.startsWith(t.slug)
  );

  if (!matchedTool) {
    return {
      tool: decoded,
      limit: null,
    };
  }

  const kbMatch =
    decoded.match(
      /(\d+)\s*kb/i
    );

  const mbMatch =
    decoded.match(
      /(\d+)\s*mb/i
    );

  return {
    tool: matchedTool.slug,

    limit:
      kbMatch?.[1] ||
      mbMatch?.[1] ||
      null,
  };
}

/* ===========================
   SEO METADATA
=========================== */

export async function generateMetadata({
  params,
}) {
  const {
    slug: rawSlug,
  } = await params;

  const slug = Array.isArray(
    rawSlug
  )
    ? rawSlug[0]
    : rawSlug;

  const { tool, limit } =
    parseSlug(slug);

  const seo = getSeoData(
    tool,
    limit,
    slug
  );

  const url = `https://toolscenterhub.com/tools/${slug}`;

  const toolData = tools.find(
    (t) =>
      t.slug.toLowerCase() ===
      tool.toLowerCase()
  );

  return {
    title: seo.title,

    description:
      seo.description,

    keywords:
      seo.keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      title: seo.title,

      description:
        seo.description,

      url,

      siteName:
        "Tools Center Hub",

      type: "website",

      images: [
        {
          url:
            "/og-image.jpg",

          width: 1200,

          height: 630,

          alt:
            toolData?.name ||
            seo.title,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        seo.title,

      description:
        seo.description,

      images: [
        "/og-image.jpg",
      ],
    },
  };
}

/* ===========================
   PAGE
=========================== */

export default async function Page({
  params,
}) {
  const {
    slug: rawSlug,
  } = await params;

  const slug = Array.isArray(
    rawSlug
  )
    ? rawSlug[0]
    : rawSlug;

  const decoded =
    decodeURIComponent(slug);

  /* Redirect spaces */
  if (
    decoded.includes(" ")
  ) {
    const cleanSlug =
      decoded.replace(
        /\s+/g,
        "-"
      );

    return redirect(
      `/tools/${cleanSlug}`
    );
  }

  const { tool, limit } =
    parseSlug(slug);

  const toolData = tools.find(
    (t) =>
      t.slug.toLowerCase() ===
      tool.toLowerCase()
  );

  if (!toolData) {
    return (
      <div>
        Tool not found
      </div>
    );
  }

  const Component =
    ToolComponents[
    toolData.component
    ];

  if (!Component) {
    return (
      <div>
        Component not found
      </div>
    );
  }

  /* ===========================
     SOFTWARE SCHEMA
  =========================== */

  const softwareSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "SoftwareApplication",

    name: toolData.name,

    applicationCategory:
      "UtilitiesApplication",

    operatingSystem:
      "Web",

    url: `https://toolscenterhub.com/tools/${toolData.slug}`,

    offers: {
      "@type": "Offer",

      price: "0",

      priceCurrency:
        "USD",
    },
  };

  /* ===========================
     BREADCRUMB SCHEMA
  =========================== */

  const breadcrumbSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name: "Home",

        item:
          "https://toolscenterhub.com",
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name: "Tools",

        item:
          "https://toolscenterhub.com/tools",
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name: toolData.name,

        item: `https://toolscenterhub.com/tools/${toolData.slug}`,
      },
    ],
  };

  /* ===========================
     WEBPAGE SCHEMA
  =========================== */

  const webPageSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "WebPage",

    name: toolData.name,

    description:
      toolData.description,

    url: `https://toolscenterhub.com/tools/${slug}`,

    isPartOf: {
      "@type":
        "WebSite",

      name:
        "Tools Center Hub",

      url:
        "https://toolscenterhub.com",
    },
  };

  return (
    <>
      {/* Software Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              softwareSchema
            ),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              webPageSchema
            ),
        }}
      />

      <div className="p-6">
        <ToolHeading
          title={
            slug.includes("instagram")
              ? "Image Resizer For Instagram"
              : slug.includes("facebook")
                ? "Image Resizer For Facebook"
                : slug.includes("whatsapp")
                  ? "Image Resizer For WhatsApp"
                  : slug.includes("linkedin")
                    ? "Image Resizer For LinkedIn"
                    : slug.includes("youtube")
                      ? "Image Resizer For YouTube Thumbnail"
                      : limit
                        ? `${toolData.name} Under ${limit}KB`
                        : toolData.name
          }
          subtitle={
            toolData.description
          }
          gradient={true}
        />

        <Component
          {...(limit
            ? { limit }
            : {})}
        />
      </div>
    </>
  );
}