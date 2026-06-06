import { getVariantName } from "./toolVariants";

export function getVariantHowToTitle(
  toolName,
  slug
) {
  const variant =
    getVariantName(slug);

  if (!variant) {
    return `How To Use ${toolName}`;
  }

  return `How To Use ${toolName} For ${variant}`;
}