
import { getVariantName } from "./toolVariants";

export function getVariantFaqs(toolName, slug) {
  const variant = getVariantName(slug);

  if (!variant) return [];

  const label = variant
    .replace(/^for-/, "")
    .replace(/^under-/, "Under ")
    .replace(/^to-/, "To ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  return [
    {
      q: `How can I use ${toolName} ${label} online for free?`,
      a: `Simply upload your file, process it using our online ${toolName}, and download the optimized result instantly. No registration or software installation is required.`,
    },

    {
      q: `How do I resize an image ${label} without losing quality?`,
      a: `${toolName} uses advanced optimization methods to help maintain image quality while resizing, compressing, or converting your files according to your selected requirements.`,
    },

    {
      q: `Which file formats are supported by ${toolName} ${label}?`,
      a: `Our tool supports popular formats such as JPG, JPEG, PNG, WEBP, PDF, and other commonly used file types depending on the selected tool.`,
    },

    {
      q: `Is ${toolName} ${label} safe to use?`,
      a: `Yes. All uploaded files are processed securely and are automatically removed after processing to help protect your privacy and personal data.`,
    },

    {
      q: `Can I use ${toolName} ${label} on mobile devices?`,
      a: `Yes. The tool works on Android phones, iPhones, tablets, Windows, macOS, and Linux using any modern web browser.`,
    },

    {
      q: `Do I need to install software to use ${toolName} ${label}?`,
      a: `No. Everything works directly in your browser, so there is nothing to download or install.`,
    },

    {
      q: `Is ${toolName} ${label} completely free?`,
      a: `Yes. You can use ${toolName} ${label} online for free without creating an account or paying any subscription fees.`,
    },

    {
      q: `Why should I use ${toolName} ${label}?`,
      a: `${toolName} helps you save time by quickly optimizing files while maintaining quality, making them suitable for websites, social media, online applications, business documents, and personal use.`,
    },
  ];
}