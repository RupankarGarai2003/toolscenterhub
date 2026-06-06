"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../../components/Styles/tool-component/Benefits.module.css";
import getToolSlug from "@/utils/getToolSlug";

const toolBenefits = {
  "image-resizer": [
    "Resize images for websites, blogs, and online stores",
    "Optimize images for social media platforms",
    "Reduce image dimensions without installing software",
    "Maintain image quality while resizing",
    "Prepare images for email attachments and online forms",
    "Save time with instant online image resizing",
    "Works directly in your browser on any device",
    "Secure image processing with no permanent storage",
  ],

  "image-compressor": [
    "Reduce image file size for faster website loading",
    "Improve SEO and page speed performance",
    "Save storage space on devices and servers",
    "Share images more easily through email and messaging",
    "Maintain visual quality while compressing images",
    "Optimize images for social media and websites",
    "No software installation required",
    "Secure browser-based image compression",
  ],

  "pdf-to-word": [
    "Edit PDF content easily in Microsoft Word",
    "Save time compared to manual document recreation",
    "Preserve document formatting and layout",
    "Convert business and personal documents quickly",
    "Improve document editing workflows",
    "Access converted files instantly",
    "Works online without software installation",
    "Secure document processing",
  ],

  "word-to-pdf": [
    "Create professional PDF documents instantly",
    "Preserve fonts and formatting accurately",
    "Improve document compatibility across devices",
    "Share files in a universally accepted format",
    "Protect document layout from unwanted changes",
    "Fast online conversion process",
    "No registration required",
    "Secure file handling",
  ],


"jpg-to-pdf": [
  "Convert JPG images into PDF documents online",
  "Combine multiple JPG files into a single PDF",
  "Create printable and shareable PDF files",
  "Preserve image quality during conversion",
  "Perfect for scanned documents and photos",
  "No software installation required",
  "Fast JPG to PDF conversion process",
  "Secure file processing and privacy protection",
],

"pdf-merger": [
  "Merge multiple PDF files into one document",
  "Organize reports, invoices, and contracts easily",
  "Combine PDFs without losing formatting",
  "Improve document management workflows",
  "Share a single PDF instead of multiple files",
  "Fast online PDF merging",
  "Works on desktop and mobile devices",
  "Secure and private PDF processing",
],

"pdf-splitter": [
  "Split PDF files into smaller documents instantly",
  "Extract specific pages from PDF files",
  "Reduce PDF file size by separating pages",
  "Organize large PDF documents efficiently",
  "Save time managing PDF content",
  "No software installation needed",
  "Works directly in your browser",
  "Secure PDF splitting process",
],

"pdf-to-jpg": [
  "Convert PDF pages into high-quality JPG images",
  "Extract images from PDF documents easily",
  "Create shareable image files from PDFs",
  "Perfect for presentations and social media",
  "Maintain image clarity during conversion",
  "Fast PDF to JPG conversion",
  "No registration required",
  "Secure document processing",
],

"image-converter": [
  "Convert JPG, PNG, and WEBP images online",
  "Change image formats without quality loss",
  "Improve image compatibility across devices",
  "Optimize images for websites and apps",
  "Quick image format conversion process",
  "Supports popular image file types",
  "No software installation required",
  "Secure image conversion",
],

"image-cropper": [
  "Crop images online with precision",
  "Remove unwanted areas from photos",
  "Create perfect social media image sizes",
  "Improve image composition instantly",
  "Supports JPG, PNG, and WEBP formats",
  "Easy drag-and-crop functionality",
  "No software download required",
  "Secure image editing process",
],

"png-to-jpg": [
  "Convert PNG images to JPG format instantly",
  "Reduce image file size for faster uploads",
  "Improve compatibility with websites and apps",
  "Maintain image quality during conversion",
  "Perfect for online sharing and publishing",
  "Fast PNG to JPG conversion",
  "Works on all devices",
  "Secure image processing",
],

"jpg-to-png": [
  "Convert JPG images to PNG format online",
  "Generate high-quality PNG image files",
  "Ideal for graphics and design projects",
  "Improve image editing flexibility",
  "Fast JPG to PNG conversion process",
  "No registration or installation required",
  "Supports high-resolution images",
  "Secure file conversion",
],

"qr-code-generator": [
  "Generate QR codes for URLs and text instantly",
  "Create QR codes for business and marketing",
  "Share information quickly using QR technology",
  "Download high-quality QR code images",
  "Perfect for websites, flyers, and packaging",
  "Easy QR code creation process",
  "Works on desktop and mobile devices",
  "Free online QR code generator",
],

"password-generator": [
  "Generate strong and secure passwords instantly",
  "Protect accounts from unauthorized access",
  "Create random passwords with custom length",
  "Improve online security and privacy",
  "Generate passwords with symbols and numbers",
  "Perfect for personal and business accounts",
  "No data storage or tracking",
  "Free secure password generator",
],

"word-counter": [
  "Count words and characters instantly",
  "Track essay and article word limits",
  "Analyze writing length and readability",
  "Monitor content creation progress",
  "Useful for students and content writers",
  "Real-time word count updates",
  "Works directly in your browser",
  "Free online word counter tool",
],

"json-formatter": [
  "Format and beautify JSON data instantly",
  "Improve JSON readability for developers",
  "Debug API responses more efficiently",
  "Automatically indent JSON structures",
  "Save time during development",
  "Validate JSON formatting visually",
  "Browser-based JSON formatting",
  "Free online JSON formatter",
],

"json-validator": [
  "Validate JSON syntax instantly",
  "Detect JSON errors and formatting issues",
  "Improve API development workflows",
  "Verify JSON structure before deployment",
  "Reduce debugging time",
  "Fast and accurate validation results",
  "Works directly in your browser",
  "Free online JSON validator",
],

"base64-encoder": [
  "Encode text into Base64 format instantly",
  "Useful for APIs and data transmission",
  "Generate Base64 strings quickly",
  "Support web development workflows",
  "Fast and accurate encoding process",
  "No software installation required",
  "Works on all modern browsers",
  "Secure online Base64 encoding",
],

"base64-decoder": [
  "Decode Base64 strings instantly",
  "Convert encoded data into readable text",
  "Useful for APIs and development projects",
  "Fast Base64 decoding process",
  "Improve debugging efficiency",
  "Browser-based decoding tool",
  "No registration required",
  "Secure Base64 decoding online",
],

"html-minifier": [
  "Minify HTML code for faster websites",
  "Reduce HTML file size instantly",
  "Improve website loading speed",
  "Optimize pages for better SEO performance",
  "Remove unnecessary whitespace and comments",
  "Generate production-ready HTML code",
  "Browser-based HTML optimization",
  "Free online HTML minifier",
],

"css-minifier": [
  "Compress CSS code for faster page loads",
  "Reduce stylesheet file size instantly",
  "Improve website performance and SEO",
  "Generate production-ready CSS code",
  "Remove unnecessary spaces and comments",
  "Optimize frontend resources",
  "Fast browser-based processing",
  "Free online CSS minifier",
],

"js-minifier": [
  "Minify JavaScript code for better performance",
  "Reduce JS file size and bandwidth usage",
  "Improve website loading speed",
  "Generate optimized production code",
  "Remove unnecessary whitespace and formatting",
  "Enhance frontend performance",
  "Fast browser-based JavaScript minification",
  "Free online JS minifier",
],

"url-encoder": [
  "Encode URLs and query parameters safely",
  "Convert special characters into URL-safe format",
  "Useful for APIs and web applications",
  "Improve URL compatibility across systems",
  "Fast and accurate URL encoding",
  "Browser-based processing",
  "No software installation required",
  "Free online URL encoder",
],

"url-decoder": [
  "Decode encoded URLs instantly",
  "Convert URL-safe strings into readable text",
  "Analyze query parameters easily",
  "Useful for debugging and API development",
  "Fast URL decoding process",
  "Browser-based tool",
  "No registration required",
  "Free online URL decoder",
],


};

export default function Benefits() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);

  const items =
    toolBenefits[currentSlug] || [];

  if (!items.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Why Use This Tool?
      </h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >
            <div className={styles.icon}>
              ✓
            </div>

            <p className={styles.text}>
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}