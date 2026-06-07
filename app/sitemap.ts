import type { MetadataRoute } from "next";
import { tools } from "@/lib/toolsList";

const toolSeoVariants: Record<
  string,
  string[]
> = {
  /* IMAGE RESIZER */
  "image-resizer": [
    "online",
    "free",

    "20kb",
    "50kb",
    "100kb",
    "200kb",
    "500kb",

    "in-kb",
    "in-cm",
    "pixels",

    "for-instagram",
    "for-facebook",
    "for-whatsapp",
    "for-linkedin",
    "for-twitter",
    "for-pinterest",
    "for-tiktok",
    "for-youtube-thumbnail",

    "under-20kb",
    "under-50kb",
    "under-100kb",
    "under-200kb",
    "under-500kb",
    "under-1mb",
    "under-2mb",
    "under-5mb",

    "passport-photo",
    "signature",
    "aadhaar-card",
    "pan-card",
    "profile-photo",
    "thumbnail",
    "banner",
    "logo",
    "resume",
    "cv",
  ],

  /* IMAGE COMPRESSOR */
  "image-compressor": [
    "online",
    "free",

    "20kb",
    "50kb",
    "100kb",
    "200kb",
    "500kb",

    "to-20kb",
    "to-30kb",
    "to-50kb",
    "to-100kb",
    "to-200kb",
    "to-300kb",
    "to-500kb",

    "under-20kb",
    "under-50kb",
    "under-100kb",
    "under-200kb",
    "under-500kb",
    "under-1mb",
    "under-2mb",

    "for-instagram",
    "for-facebook",
    "for-whatsapp",
    "for-linkedin",
    "for-youtube",
  ],

  /* IMAGE CROPPER */
  "image-cropper": [
    "online",
    "online-free",
    "free",

    "by-pixel",
    "in-cm",

    "circle",

    "and-resizer",

    "ai",

    "passport-photo",
    "profile-photo",
    "banner",
    "thumbnail",
  ],

  /* IMAGE CONVERTER */
  "image-converter": [
    "online",
    "free",

    "to-jpg",
    "to-png",
    "to-pdf",

    "size",
    "in-kb",

    "jpg-to-png",
    "png-to-jpg",
    "webp-to-jpg",
    "webp-to-png",
    "png-to-webp",
    "jpg-to-webp",
  ],

  /* PNG TO JPG */
  "png-to-jpg": [
    "converter",
    "converter-online",
    "converter-free",

    "online",

    "50kb",
    "100kb",
  ],

  /* JPG TO PNG */
  "jpg-to-png": [
    "converter",
    "converter-online",
    "converter-free",

    "50kb",

    "under-50kb",
  ],

  /* PDF TO WORD */
  "pdf-to-word": [
    "converter",
    "converter-free",
    "converter-online",
    "converter-online-free",

    "file-converter",

    "with-ocr",
    "ocr",
    "scanned-pdf",

    "editable-word",
    "to-docx",
  ],

  /* WORD TO PDF */
  "word-to-pdf": [
    "converter",
    "converter-free",
    "converter-online",
    "converter-online-free",

    "free",
    "online",

    "docx-to-pdf",
    "doc-to-pdf",

    "maker",
  ],

  /* JPG TO PDF */
  "jpg-to-pdf": [
    "converter",
    "converter-online",
    "converter-free",

    "merge",
    "multiple-images",

    "100kb",
    "300kb",
    "2mb",
  ],

  /* PDF MERGER */
  "pdf-merger": [
    "online-free",
    "online",

    "merge-online",

    "combine-pdf-files",
    "merge-pdf-files",
    "join-pdf",

    "and-splitter",
    "and-compressor",
  ],

  /* PDF SPLITTER */
  "pdf-splitter": [
    "online-free",
    "online",

    "free",

    "page-wise",
    "range",

    "extract-pages",
    "split-large-pdf",
    "separate-pages",

    "and-merger",
    "and-merger-free",
  ],

  /* PDF TO JPG */
  "pdf-to-jpg": [
    "converter",
    "converter-online",
    "converter-free",

    "online",

    "high-quality",
    "extract-images",

    "50kb",
    "100kb",
    "200kb",
  ],

  /* QR CODE GENERATOR */
  "qr-code-generator": [
    "free",
    "online",
    "free-online",

    "for-location",
    "for-pdf",

    "with-logo",

    "for-website",
    "for-whatsapp",
    "for-instagram",

    "wifi-qr-code",
    "url-qr-code",
  ],

  /* PASSWORD GENERATOR */
  "password-generator": [
    "free",
    "online",

    "random-password",
    "strong-password",
    "secure-password",

    "password-list",
    "password-words",
  ],

  /* WORD COUNTER */
  "word-counter": [
    "online",
    "online-free",
    "free",

    "tool",

    "from-text",
    "from-pdf",

    "character-counter",
    "text-counter",
    "word-count-tool",
  ],

  /* JSON FORMATTER */
  "json-formatter": [
    "online",

    "viewer",

    "and-validator",
    "and-compare",

    "to-single-line",

    "beautify-json",
    "json-prettifier",
    "format-json",
  ],

  /* JSON VALIDATOR */
  "json-validator": [
    "online",
    "online-free",

    "tool",

    "and-formatter",
    "and-fixer",
    "and-corrector",

    "with-schema",

    "and-beautifier",

    "check-json",
    "validate-json",
    "json-checker",
  ],

  /* BASE64 ENCODER */
  "base64-encoder": [
    "online",

    "tool",

    "image",

    "website",

    "encode-text",
    "text-to-base64",
  ],

  /* BASE64 DECODER */
  "base64-decoder": [
    "online",
    "online-free",

    "tool",
    "tool-online",

    "to-image",
    "to-file",
    "to-pdf",

    "decode-base64",
    "base64-to-text",
  ],

  /* HTML MINIFIER */
  "html-minifier": [
    "online",
    "online-free",

    "compress-html",

    "minify-html-online",
  ],

  /* CSS MINIFIER */
  "css-minifier": [
    "online",

    "and-compressor",

    "code-minifier",

    "file-minifier",

    "compress-css",

    "minify-css-online",
  ],

  /* JS MINIFIER */
  "js-minifier": [
    "online",

    "tool",

    "and-obfuscator",

    "compress-javascript",

    "minify-js-online",
  ],

  /* URL ENCODER */
  "url-encoder": [
    "online",

    "tool",

    "decoder-online",

    "for-svg",

    "encode-url",
    "url-encoding",
  ],

  /* URL DECODER */
  "url-decoder": [
    "online",

    "tool",

    "encoder-online",

    "decode-url",
    "url-decoding",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://toolscenterhub.com";

  const toolRoutes = tools.flatMap(
    (tool) => {
      const variants =
        toolSeoVariants[
          tool.slug
        ] || [];

      return [
        {
          url: `${baseUrl}/tools/${tool.slug}`,
          lastModified: new Date(),
          changeFrequency:
            "weekly" as const,
          priority: 0.8,
        },

        ...variants.map(
          (variant) => ({
            url: `${baseUrl}/tools/${tool.slug}-${variant}`,
            lastModified:
              new Date(),
            changeFrequency:
              "weekly" as const,
            priority: 0.7,
          })
        ),
      ];
    }
  );

  return [
    {
      url: baseUrl,
      lastModified:
        new Date(),
      changeFrequency:
        "daily",
      priority: 1,
    },

    ...toolRoutes,
  ];
}