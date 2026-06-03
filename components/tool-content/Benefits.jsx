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