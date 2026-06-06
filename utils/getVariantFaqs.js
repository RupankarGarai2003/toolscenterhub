import { getVariantName } from "./toolVariants";

export function getVariantFaqs(
  toolName,
  slug
) {
  const variant =
    getVariantName(slug);

  if (!variant) return [];

  return [
    {
      q: `How do I use ${toolName} for ${variant}?`,
      a: `Upload your file, process it using our ${toolName} tool and download the optimized result for ${variant}.`,
    },

    {
      q: `What is the best size for ${variant}?`,
      a: `${toolName} helps optimize files according to ${variant} requirements and recommended dimensions.`,
    },

    {
      q: `Can I use ${toolName} for ${variant} for free?`,
      a: `Yes, our online ${toolName} tool is completely free to use.`,
    },
  ];
}