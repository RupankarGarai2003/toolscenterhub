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

  const limitMatch = decoded.match(/(\d+)kb/);

  return {
    tool: matchedTool.slug,
    limit: limitMatch ? limitMatch[1] : null,
  };
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug: rawSlug } = await params;

  const slug = Array.isArray(rawSlug)
    ? rawSlug[0]
    : rawSlug;

  const { tool, limit } = parseSlug(slug);

  const seo = getSeoData(tool, limit);

  const baseUrl =
    "https://toolscenterhub.com";

  const url =
    `${baseUrl}/tools/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

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
      description: seo.description,
      url,
      siteName:
        "Tools Center Hub",
      type: "website",
    },

    twitter: {
      card:
        "summary_large_image",
      title: seo.title,
      description:
        seo.description,
    },
  };
}

export default async function Page({
  params,
}) {
  const { slug: rawSlug } =
    await params;

  const slug = Array.isArray(
    rawSlug
  )
    ? rawSlug[0]
    : rawSlug;

  const decoded =
    decodeURIComponent(slug);

  // Redirect spaces to hyphens
  if (decoded.includes(" ")) {
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
      <div>Tool not found</div>
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

  // SoftwareApplication schema
  const softwareSchema = {
    "@context":
      "https://schema.org",
    "@type":
      "SoftwareApplication",

    name: toolData.name,

    applicationCategory:
      "UtilitiesApplication",

    operatingSystem: "Web",

    url: `https://toolscenterhub.com/tools/${toolData.slug}`,

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  // Breadcrumb schema
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

      <div className="p-6">
        <ToolHeading
          title={
            limit
              ? `${toolData.name} (${limit}KB)`
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