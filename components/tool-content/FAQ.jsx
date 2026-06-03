"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../components/Styles/tool-component/FAQ.module.css";
import getToolSlug from "@/utils/getToolSlug";

/* COMMON FAQs */
const commonFAQ = [
  {
    q: "Is this tool free to use?",
    a: "Yes, this tool is completely free to use without any hidden charges.",
  },

  {
    q: "Do I need to create an account?",
    a: "No, you can use this tool instantly without registration or login.",
  },

  {
    q: "Are my files secure?",
    a: "Yes, files are processed securely and are not permanently stored.",
  },
];

/* TOOL SPECIFIC FAQs */
const toolFAQs = {
  "image-resizer": [
    {
      q: "How do I resize an image online?",
      a: "Upload your image, choose the desired dimensions and download the resized image instantly.",
    },

    {
      q: "Which image formats can I resize?",
      a: "JPG, JPEG, PNG and WEBP images are supported.",
    },

    {
      q: "Will resizing reduce image quality?",
      a: "The tool is optimized to maintain image quality while changing dimensions.",
    },

    {
      q: "Can I resize images for social media?",
      a: "Yes, you can resize images for Instagram, Facebook, LinkedIn and other platforms.",
    },

    {
      q: "Can I resize images without installing software?",
      a: "Yes, everything works directly in your browser.",
    },
  ],

  "image-compressor": [
    {
      q: "How does image compression work?",
      a: "The tool reduces file size while preserving image quality as much as possible.",
    },

    {
      q: "Can I compress JPG images?",
      a: "Yes, JPG images are fully supported.",
    },

    {
      q: "Can I compress PNG images?",
      a: "Yes, PNG images can be compressed online.",
    },

    {
      q: "Will compression affect image quality?",
      a: "Some quality reduction may occur depending on the settings used.",
    },

    {
      q: "What is the maximum compression possible?",
      a: "Results depend on the image format, dimensions and content.",
    },
  ],

  "pdf-to-word": [
    {
      q: "How do I convert PDF to Word?",
      a: "Upload your PDF file and download the converted DOCX file after processing.",
    },

    {
      q: "Will formatting be preserved?",
      a: "The tool attempts to preserve formatting, fonts and layout.",
    },

    {
      q: "Can I edit the converted Word file?",
      a: "Yes, the resulting DOCX file can be edited in Microsoft Word and compatible editors.",
    },

    {
      q: "Are scanned PDFs supported?",
      a: "Support depends on the PDF content and formatting.",
    },

    {
      q: "Is PDF to Word conversion free?",
      a: "Yes, the tool is completely free to use.",
    },
  ],

  "word-to-pdf": [
    {
      q: "How do I convert Word to PDF?",
      a: "Upload your DOC or DOCX file and download the generated PDF.",
    },

    {
      q: "Will fonts remain unchanged?",
      a: "The tool attempts to preserve fonts and document formatting.",
    },

    {
      q: "Can I convert DOCX files?",
      a: "Yes, DOCX files are supported.",
    },

    {
      q: "Will images remain inside the PDF?",
      a: "Yes, embedded images are included in the converted PDF.",
    },

    {
      q: "Is Word to PDF conversion secure?",
      a: "Yes, files are processed securely.",
    },
  ],

  "jpg-to-pdf": [
    {
      q: "Can I convert JPG images into PDF files?",
      a: "Yes, upload one or multiple JPG images and convert them into PDF.",
    },

    {
      q: "Can multiple images be combined into one PDF?",
      a: "Yes, supported images can be merged into a single PDF.",
    },

    {
      q: "Will image quality be preserved?",
      a: "The tool aims to maintain image quality during conversion.",
    },
  ],

  "pdf-merger": [
    {
      q: "How do I merge PDF files?",
      a: "Upload multiple PDFs and combine them into a single document.",
    },

    {
      q: "Can I rearrange PDF files before merging?",
      a: "Depending on the tool features, file order can be adjusted before merging.",
    },

    {
      q: "Is there a limit on the number of PDFs?",
      a: "Limits may vary depending on file size and browser performance.",
    },
  ],

  "pdf-splitter": [
    {
      q: "How do I split a PDF file?",
      a: "Upload a PDF and choose the pages you want to extract.",
    },

    {
      q: "Can I extract a single page?",
      a: "Yes, individual pages can be separated.",
    },

    {
      q: "Will the original PDF remain unchanged?",
      a: "Yes, the original file is not modified.",
    },
  ],

  "pdf-to-jpg": [
    {
      q: "Can I convert PDF pages into images?",
      a: "Yes, each PDF page can be converted into JPG format.",
    },

    {
      q: "Will image quality be preserved?",
      a: "The tool aims to generate high-quality image output.",
    },

    {
      q: "Can multi-page PDFs be converted?",
      a: "Yes, multiple pages can be processed.",
    },
  ],

  /* ADD REMAINING TOOLS HERE */

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

export default function FAQ() {
  const { slug } = useParams();

  const [open, setOpen] = useState(null);

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);


  const faqs = [
    ...(toolFAQs[currentSlug] || []),
    ...commonFAQ,
  ];

  if (!faqs.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Frequently Asked Questions
      </h2>

      <div className={styles.grid}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.item} ${open === index
                ? styles.active
                : ""
              }`}
            onClick={() =>
              setOpen(
                open === index
                  ? null
                  : index
              )
            }
          >
            <div className={styles.header}>
              <p className={styles.question}>
                {faq.q}
              </p>

              <span className={styles.icon}>
                {open === index
                  ? "−"
                  : "+"}
              </span>
            </div>

            <AnimatePresence>
              {open === index && (
                <motion.div
                  className={
                    styles.answerWrapper
                  }
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <p className={styles.answer}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}