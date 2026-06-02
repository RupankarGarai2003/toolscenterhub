// utils/seo.js

function formatName(slug) {
  return slug
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const customSeo = {
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

  // ADD REMAINING TOOLS HERE
};

export function getSeoData(tool, limit) {
  const name = formatName(tool);

  // Custom SEO
  if (customSeo[tool]) {
    return customSeo[tool];
  }

  // IMAGE COMPRESSOR WITH LIMIT
  if (tool === "image-compressor" && limit) {
    return {
      title: `Compress Image to ${limit}KB Online Free`,
      description: `Compress image to ${limit}KB without losing quality. Fast, secure and free online tool.`,
      keywords: `compress image to ${limit}kb, image compressor, reduce image size`,
    };
  }

  // IMAGE TOOLS
  if (
    tool.includes("image") ||
    tool.includes("jpg") ||
    tool.includes("png")
  ) {
    return {
      title: `${name} Online Free (Fast & Secure Image Tool)`,

      description: `Use our free ${name} tool to convert, resize or optimize images online. No signup required. Works instantly in your browser.`,

      keywords: `${tool}, ${tool} online, ${tool} free, image tool`,
    };
  }

  // PDF TOOLS
  if (tool.includes("pdf")) {
    return {
      title: `${name} - Free PDF Tool Online`,

      description: `Use our ${name} tool to manage PDF files online. Convert, merge, split and optimize PDFs securely.`,

      keywords: `${tool}, pdf tool, pdf converter`,
    };
  }

  // DEVELOPER TOOLS
  if (
    tool.includes("json") ||
    tool.includes("base64") ||
    tool.includes("minifier") ||
    tool.includes("encoder") ||
    tool.includes("decoder")
  ) {
    return {
      title: `${name} Tool - Free Developer Utility`,

      description: `Use ${name} online for free. Fast, accurate and easy to use. No installation required.`,

      keywords: `${tool}, developer tool, formatter, encoder, decoder`,
    };
  }

  // GENERATORS
  if (tool.includes("generator")) {
    return {
      title: `${name} Online Free Generator Tool`,

      description: `Generate content instantly using our free ${name}. Fast, secure and easy to use.`,

      keywords: `${tool}, generator, free generator`,
    };
  }

  // DEFAULT
  return {
    title: `${name} Tool - Free Online Utility`,

    description: `Use our free ${name} tool online. Fast, secure and works directly in your browser with no signup required.`,

    keywords: `${tool}, ${tool} online, ${tool} free`,
  };
}