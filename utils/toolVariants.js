export const toolVariants = {
 online: "online",
free: "free",

"20kb": "20kb",
"50kb": "50kb",
"100kb": "100kb",
"200kb": "200kb",
"500kb": "500kb",

"in-kb": "in-kb",
"in-cm": "in-cm",
pixels: "pixels",

"for-instagram": "for-instagram",
"for-facebook": "for-facebook",
"for-whatsapp": "for-whatsapp",
"for-linkedin": "for-linkedin",
"for-twitter": "for-twitter",
"for-pinterest": "for-pinterest",
"for-tiktok": "for-tiktok",
"for-youtube-thumbnail": "for-youtube-thumbnail",

"under-20kb": "under-20kb",
"under-50kb": "under-50kb",
"under-100kb": "under-100kb",
"under-200kb": "under-200kb",
"under-500kb": "under-500kb",
"under-1mb": "under-1mb",
"under-2mb": "under-2mb",
"under-5mb": "under-5mb",

"passport-photo": "passport-photo",
signature: "signature",
"aadhaar-card": "aadhaar-card",
"pan-card": "pan-card",
"profile-photo": "profile-photo",
thumbnail: "thumbnail",
banner: "banner",
logo: "logo",
resume: "resume",
cv: "cv",

"to-20kb": "to-20kb",
"to-30kb": "to-30kb",
"to-50kb": "to-50kb",
"to-100kb": "to-100kb",
"to-200kb": "to-200kb",
"to-300kb": "to-300kb",
"to-500kb": "to-500kb",

"for-youtube": "for-youtube",

"online-free": "online-free",
"by-pixel": "by-pixel",
circle: "circle",
"and-resizer": "and-resizer",
ai: "ai",

converter: "converter",
"converter-online": "converter-online",
"converter-free": "converter-free",

"to-jpg": "to-jpg",
"to-png": "to-png",
"to-pdf": "to-pdf",

size: "size",

"jpg-to-png": "jpg-to-png",
"png-to-jpg": "png-to-jpg",
"webp-to-jpg": "webp-to-jpg",
"webp-to-png": "webp-to-png",
"png-to-webp": "png-to-webp",
"jpg-to-webp": "jpg-to-webp",


"converter-online-free": "converter-online-free",
"file-converter": "file-converter",
"with-ocr": "with-ocr",
ocr: "ocr",
"scanned-pdf": "scanned-pdf",
"editable-word": "editable-word",
"to-docx": "to-docx",

"docx-to-pdf": "docx-to-pdf",
"doc-to-pdf": "doc-to-pdf",
maker: "maker",

merge: "merge",
"multiple-images": "multiple-images",
"300kb": "300kb",
"2mb": "2mb",

"merge-online": "merge-online",
"combine-pdf-files": "combine-pdf-files",
"merge-pdf-files": "merge-pdf-files",
"join-pdf": "join-pdf",
"and-splitter": "and-splitter",
"and-compressor": "and-compressor",

"page-wise": "page-wise",
range: "range",
"extract-pages": "extract-pages",
"split-large-pdf": "split-large-pdf",
"separate-pages": "separate-pages",
"and-merger": "and-merger",
"and-merger-free": "and-merger-free",

"high-quality": "high-quality",
"extract-images": "extract-images",

"free-online": "free-online",
"for-location": "for-location",
"for-pdf": "for-pdf",
"with-logo": "with-logo",
"for-website": "for-website",
"wifi-qr-code": "wifi-qr-code",
"url-qr-code": "url-qr-code",

"random-password": "random-password",
"strong-password": "strong-password",
"secure-password": "secure-password",
"password-list": "password-list",
"password-words": "password-words",

tool: "tool",
"from-text": "from-text",
"from-pdf": "from-pdf",
"character-counter": "character-counter",
"text-counter": "text-counter",
"word-count-tool": "word-count-tool",

viewer: "viewer",
"and-validator": "and-validator",
"and-compare": "and-compare",
"to-single-line": "to-single-line",
"beautify-json": "beautify-json",
"json-prettifier": "json-prettifier",
"format-json": "format-json",

"and-fixer": "and-fixer",
"and-corrector": "and-corrector",
"with-schema": "with-schema",
"and-beautifier": "and-beautifier",
"check-json": "check-json",
"validate-json": "validate-json",
"json-checker": "json-checker",

image: "image",
website: "website",
"encode-text": "encode-text",
"text-to-base64": "text-to-base64",

"tool-online": "tool-online",
"to-image": "to-image",
"to-file": "to-file",
"decode-base64": "decode-base64",
"base64-to-text": "base64-to-text",

"compress-html": "compress-html",
"minify-html-online": "minify-html-online",


"code-minifier": "code-minifier",
"file-minifier": "file-minifier",
"compress-css": "compress-css",
"minify-css-online": "minify-css-online",

"and-obfuscator": "and-obfuscator",
"compress-javascript": "compress-javascript",
"minify-js-online": "minify-js-online",

decoder: "decoder",
"decoder-online": "decoder-online",
"for-svg": "for-svg",
"encode-url": "encode-url",
"url-encoding": "url-encoding",

encoder: "encoder",
"encoder-online": "encoder-online",
"decode-url": "decode-url",
"url-decoding": "url-decoding"

};

/* Extract variant from slug */

export function getVariantName(slug = "") {
  const lowerSlug = slug.toLowerCase();

  // Match longest variants first
  const variants = Object.entries(toolVariants).sort(
    ([a], [b]) => b.length - a.length
  );

  for (const [key, value] of variants) {
    if (lowerSlug.includes(key.toLowerCase())) {
      return value;
    }
  }

  return null;
}

/* Extract size target */

export function getSizeVariant(slug = "") {
  const lowerSlug = slug.toLowerCase();

  const underKb = lowerSlug.match(/under-(\d+)kb/);
  if (underKb) {
    return {
      type: "under",
      value: underKb[1],
      unit: "KB",
    };
  }

  const underMb = lowerSlug.match(/under-(\d+)mb/);
  if (underMb) {
    return {
      type: "under",
      value: underMb[1],
      unit: "MB",
    };
  }

  const toKb = lowerSlug.match(/to-(\d+)kb/);
  if (toKb) {
    return {
      type: "to",
      value: toKb[1],
      unit: "KB",
    };
  }

  const toMb = lowerSlug.match(/to-(\d+)mb/);
  if (toMb) {
    return {
      type: "to",
      value: toMb[1],
      unit: "MB",
    };
  }

  const kbMatch = lowerSlug.match(/(\d+)kb/);
  if (kbMatch) {
    return {
      type: "size",
      value: kbMatch[1],
      unit: "KB",
    };
  }

  const mbMatch = lowerSlug.match(/(\d+)mb/);
  if (mbMatch) {
    return {
      type: "size",
      value: mbMatch[1],
      unit: "MB",
    };
  }

  return null;
}

/* Generate Dynamic Heading */

export function getDynamicHeading(toolName, slug) {
  const variant = getVariantName(slug);
  const size = getSizeVariant(slug);

  if (size?.type === "under") {
    return `${toolName} Under ${size.value}${size.unit}`;
  }

  if (size?.type === "to") {
    return `${toolName} To ${size.value}${size.unit}`;
  }

  if (variant?.startsWith("for-")) {
    const label = variant
      .replace("for-", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return `${toolName} For ${label}`;
  }

  if (variant) {
    const label = variant
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return `${toolName} ${label}`;
  }

  return toolName;
}