// utils/seo.js

function formatName(slug) {
  return slug
    ?.replace(/-/g, " ")
    .replace(
      /\b\w/g,
      (c) => c.toUpperCase()
    );
}


const customSeo = {
  // IMAGE TOOLS

  "image-resizer": {
    title:
      "Image Resizer Online Free - Resize JPG, PNG & WEBP Images",

    description:
      "Resize JPG, PNG and WEBP images online for free. Change image dimensions instantly without losing quality. Fast, secure and easy-to-use image resizer.",

    keywords:
      "image resizer, resize image online, resize jpg, resize png, resize webp, change image dimensions, resize photos online, free image resizer",
  },

  "image-compressor": {
    title:
      "Image Compressor Online Free - Reduce JPG, PNG & WEBP File Size",

    description:
      "Compress JPG, PNG and WEBP images online without losing quality. Reduce image file size instantly for websites, email and social media.",

    keywords:
      "image compressor, compress image online, reduce image size, jpg compressor, png compressor, webp compressor",
  },

  "image-converter": {
    title:
      "Image Converter Online Free - Convert Images Instantly",

    description:
      "Convert images between JPG, PNG and WEBP formats online for free. Fast, secure and easy image conversion.",

    keywords:
      "image converter, convert image online, jpg converter, png converter, webp converter",
  },

  "image-cropper": {
    title:
      "Image Cropper Online Free - Crop Images Easily",

    description:
      "Crop JPG, PNG and WEBP images online for free. Adjust image dimensions and remove unwanted areas instantly.",

    keywords:
      "image cropper, crop image online, photo cropper, image editing tool",
  },

  "png-to-jpg": {
    title:
      "PNG to JPG Converter Online Free",

    description:
      "Convert PNG images to JPG format online for free. Fast image conversion without software installation.",

    keywords:
      "png to jpg, convert png to jpg, image converter",
  },

  "jpg-to-png": {
    title:
      "JPG to PNG Converter Online Free",

    description:
      "Convert JPG images to PNG format online instantly. Free and secure image conversion tool.",

    keywords:
      "jpg to png, convert jpg to png, image converter",
  },

  // PDF TOOLS

  "pdf-to-word": {
    title:
      "PDF to Word Converter Online Free - Convert PDF to DOCX",

    description:
      "Convert PDF files to editable Word documents online for free. Preserve formatting, text and layout with fast and secure conversion.",

    keywords:
      "pdf to word, pdf to docx, convert pdf to word, pdf converter, pdf to editable word",
  },

  "word-to-pdf": {
    title:
      "Word to PDF Converter Online Free - Convert DOCX to PDF",

    description:
      "Convert Word documents to PDF online for free. Preserve formatting, fonts and layout with secure and fast conversion.",

    keywords:
      "word to pdf, docx to pdf, convert word to pdf, word document to pdf",
  },

  "jpg-to-pdf": {
    title:
      "JPG to PDF Converter Online Free",

    description:
      "Convert JPG images into PDF documents online for free. Combine multiple images into a single PDF file instantly.",

    keywords:
      "jpg to pdf, image to pdf, convert jpg to pdf, pdf converter",
  },

  "pdf-merger": {
    title:
      "PDF Merger Online Free - Combine PDF Files Easily",

    description:
      "Merge multiple PDF files into a single document online for free. Fast, secure and easy-to-use PDF merger.",

    keywords:
      "pdf merger, merge pdf online, combine pdf files, join pdf documents",
  },

  "pdf-splitter": {
    title:
      "PDF Splitter Online Free - Split PDF Pages Easily",

    description:
      "Split PDF files into separate pages online for free. Extract pages instantly with our secure PDF splitter.",

    keywords:
      "pdf splitter, split pdf online, extract pdf pages, separate pdf pages",
  },

  "pdf-to-jpg": {
    title:
      "PDF to JPG Converter Online Free",

    description:
      "Convert PDF pages into high-quality JPG images online for free. Fast and secure PDF to image conversion.",

    keywords:
      "pdf to jpg, convert pdf to image, pdf image converter",
  },

  // UTILITY TOOLS

  "qr-code-generator": {
    title:
      "QR Code Generator Online Free - Create QR Codes Instantly",

    description:
      "Generate QR codes online for URLs, text, contact information and more. Free, fast and easy QR code generator.",

    keywords:
      "qr code generator, create qr code, qr maker, free qr generator",
  },

  "password-generator": {
    title:
      "Password Generator Online Free - Create Strong Passwords",

    description:
      "Generate secure and random passwords online instantly. Create strong passwords to improve account security.",

    keywords:
      "password generator, random password generator, secure password creator",
  },

  "word-counter": {
    title:
      "Word Counter Online Free - Count Words and Characters",

    description:
      "Count words, characters, sentences and paragraphs online instantly. Free word counter tool for writers and students.",

    keywords:
      "word counter, character counter, text counter, word count tool",
  },

  // DEVELOPER TOOLS

  "json-formatter": {
    title:
      "JSON Formatter Online Free - Format JSON Instantly",

    description:
      "Format and beautify JSON data online. Improve readability and validate JSON structure instantly.",

    keywords:
      "json formatter, json beautifier, format json online",
  },

  "json-validator": {
    title:
      "JSON Validator Online Free - Validate JSON Data",

    description:
      "Validate JSON data online and detect syntax errors instantly. Fast and accurate JSON validation tool.",

    keywords:
      "json validator, validate json, json checker",
  },

  "base64-encoder": {
    title:
      "Base64 Encoder Online Free",

    description:
      "Encode text and data into Base64 format online instantly. Fast and secure Base64 encoder tool.",

    keywords:
      "base64 encoder, encode base64, text to base64",
  },

  "base64-decoder": {
    title:
      "Base64 Decoder Online Free",

    description:
      "Decode Base64 encoded text and data online instantly. Fast and easy Base64 decoder tool.",

    keywords:
      "base64 decoder, decode base64, base64 converter",
  },

  "html-minifier": {
    title:
      "HTML Minifier Online Free - Minify HTML Code",

    description:
      "Minify HTML code online to reduce file size and improve website performance instantly.",

    keywords:
      "html minifier, minify html, html compressor",
  },

  "css-minifier": {
    title:
      "CSS Minifier Online Free - Minify CSS Code",

    description:
      "Minify CSS code online to reduce file size and improve website performance. Fast and secure CSS minifier.",

    keywords:
      "css minifier, minify css, css compressor",
  },

  "js-minifier": {
    title:
      "JavaScript Minifier Online Free - Minify JS Code",

    description:
      "Minify JavaScript code online and reduce file size instantly. Improve performance with our JS minifier.",

    keywords:
      "js minifier, javascript minifier, minify javascript",
  },

  "url-encoder": {
    title:
      "URL Encoder Online Free - Encode URLs Instantly",

    description:
      "Encode URLs and special characters online instantly. Fast and easy URL encoding tool.",

    keywords:
      "url encoder, encode url, url encoding tool",
  },

  "url-decoder": {
    title:
      "URL Decoder Online Free - Decode URLs Instantly",

    description:
      "Decode encoded URLs and special characters online instantly. Free URL decoder tool.",

    keywords:
      "url decoder, decode url, url decoding tool",
  },
};

export function getSeoData(
  tool,
  limit,
  unit,
  rawSlug = ""
) {
  const name =
    formatName(tool);

  const slug =
    rawSlug.toLowerCase();

  /* IMAGE RESIZER - SIZE VARIANTS */

  if (tool === "image-resizer" && limit) {
  const unit = slug.includes("mb") ? "MB" : "KB";

  return {
    title: `Resize Image Under ${limit}${unit} Online Free`,

    description: `Resize image under ${limit}${unit} online without losing quality. Perfect for job applications, government forms, passport photos, exam forms, email attachments, and website uploads.`,

    keywords: `
      resize image under ${limit}${unit.toLowerCase()},
      image resizer ${limit}${unit.toLowerCase()},
      reduce image size ${limit}${unit.toLowerCase()},
      compress image under ${limit}${unit.toLowerCase()},
      online image resizer
    `,
  };
}

  /* IMAGE COMPRESSOR - SIZE VARIANTS */

  if (
    tool === "image-compressor" &&
    limit
  ) {
    return {
      title: `Compress Image To ${limit}${unit} Online Free`,

      description: `Compress image to ${limit}KB while maintaining image quality. Fast, secure and free online image compression tool.`,

      keywords: `
        compress image to ${limit}kb,
        image compressor ${limit}kb,
        reduce image size,
        image compression online
      `,
    };
  }

  /* INSTAGRAM */

  if (
    tool === "image-resizer" &&
    slug.includes("instagram")
  ) {
    return {
      title:
        "Image Resizer For Instagram Online Free",

      description:
        "Resize images for Instagram posts, stories, reels and profile photos online. Fast and free image resizer.",

      keywords:
        "instagram image resizer, resize image for instagram, instagram image size, instagram photo resize",
    };
  }

  /* FACEBOOK */

  if (
    tool === "image-resizer" &&
    slug.includes("facebook")
  ) {
    return {
      title:
        "Image Resizer For Facebook Online Free",

      description:
        "Resize images for Facebook posts, cover photos and profile pictures online instantly.",

      keywords:
        "facebook image resizer, resize image for facebook, facebook image size",
    };
  }

  /* WHATSAPP */

  if (
    tool === "image-resizer" &&
    slug.includes("whatsapp")
  ) {
    return {
      title:
        "Image Resizer For WhatsApp Online Free",

      description:
        "Resize images for WhatsApp profile photos, status images and sharing. Fast and free online tool.",

      keywords:
        "whatsapp image resizer, resize image for whatsapp, whatsapp photo resize",
    };
  }

  /* LINKEDIN */

  if (
    tool === "image-resizer" &&
    slug.includes("linkedin")
  ) {
    return {
      title:
        "Image Resizer For LinkedIn Online Free",

      description:
        "Resize images for LinkedIn posts, banners and profile pictures with the correct dimensions.",

      keywords:
        "linkedin image resizer, resize image for linkedin, linkedin banner size",
    };
  }

  /* YOUTUBE */

  if (
    tool === "image-resizer" &&
    slug.includes("youtube")
  ) {
    return {
      title:
        "Image Resizer For YouTube Thumbnail Online Free",

      description:
        "Resize images for YouTube thumbnails with the perfect dimensions and quality.",

      keywords:
        "youtube thumbnail resizer, resize image for youtube thumbnail, youtube image size",
    };
  }

  /* CUSTOM TOOL SEO */

  if (customSeo[tool]) {
    return customSeo[tool];
  }

  /* DEFAULT */

  return {
    title:
      `${name} Online Free`,

    description: `Use our free ${name} tool online. Fast, secure and works directly in your browser with no signup required.`,

    keywords: `${tool}, ${tool} online, free ${tool}`,
  };
}