import { tools } from "@/lib/toolsList";

export default function getToolSlug(
  slug
) {
  const decoded =
    decodeURIComponent(slug)
      .toLowerCase()
      .trim();

  const matchedTool =
    tools.find((tool) =>
      decoded.startsWith(tool.slug)
    );

  return matchedTool
    ? matchedTool.slug
    : decoded;
}