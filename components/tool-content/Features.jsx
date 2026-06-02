"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../../components/Styles/tool-component/Features.module.css";

const toolFeatures = {
  "image-resizer": [
    "Resize JPG, PNG and WEBP images online",
    "Custom image width and height settings",
    "Maintain original aspect ratio automatically",
    "Resize images by percentage or dimensions",
    "High-quality image resizing technology",
    "Instant browser-based image processing",
    "No software installation required",
    "Secure and private image handling",
  ],

  "image-compressor": [
    "Compress JPG, PNG and WEBP images",
    "Reduce image file size instantly",
    "Maintain image quality during compression",
    "Fast browser-based image optimization",
    "Supports multiple image formats",
    "No registration required",
    "Secure image processing",
    "Free online image compression",
  ],

  "pdf-to-word": [
    "Convert PDF files into editable Word documents",
    "Preserve document formatting and layout",
    "Fast PDF to DOCX conversion",
    "Supports business and personal documents",
    "Easy drag and drop workflow",
    "Secure file processing",
    "No software installation required",
    "Free online PDF conversion",
  ],

  "word-to-pdf": [
    "Convert DOC and DOCX files to PDF",
    "Maintain fonts and document formatting",
    "Fast Word to PDF conversion",
    "High-quality PDF output",
    "Supports Microsoft Word documents",
    "Secure browser-based processing",
    "Easy file uploads",
    "Free online conversion",
  ],

  "jpg-to-pdf": [],
  "pdf-merger": [],
  "pdf-splitter": [],
  "pdf-to-jpg": [],
  "image-converter": [],
  "image-cropper": [],
  "png-to-jpg": [],
  "jpg-to-png": [],
  "qr-code-generator": [],
  "password-generator": [],
  "word-counter": [],
  "json-formatter": [],
  "json-validator": [],
  "base64-encoder": [],
  "base64-decoder": [],
  "html-minifier": [],
  "css-minifier": [],
  "js-minifier": [],
  "url-encoder": [],
  "url-decoder": [],
};

export default function Features() {
  const { slug } = useParams();

  const currentSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const items =
    toolFeatures[currentSlug] || [];

  if (!items.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Features
      </h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className={styles.card}
          >
            <div className={styles.glow}></div>

            <div className={styles.content}>
              <div className={styles.icon}>
                {i + 1}
              </div>

              <p className={styles.text}>
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}