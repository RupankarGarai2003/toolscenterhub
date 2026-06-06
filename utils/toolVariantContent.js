import { getVariantName } from "./toolVariants";

export function getVariantContent(
  toolName,
  slug
) {
  const variant =
    getVariantName(slug);

  if (!variant) {
    return null;
  }

  return {
    title: `About ${toolName} For ${variant}`,

    content: `
${toolName} for ${variant} helps you optimize files specifically for ${variant} requirements.

This tool is useful when uploading images, PDFs, documents or assets to ${variant} while maintaining quality and compatibility.

Simply upload your file, process it instantly and download the optimized version.

No registration or software installation is required.
    `,
  };
}