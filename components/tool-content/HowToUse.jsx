"use client";

import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/HowToUse.module.css";

import {
  Upload,
  RefreshCw,
  Download,
} from "lucide-react";

const toolSteps = {
  "image-resizer": [
  {
    title: "Upload Your Image",
    desc: "Upload a JPG, PNG, or WEBP image from your device using the Image Resizer tool.",
    icon: <Upload size={32} />,
  },

  {
    title: "Choose Image Dimensions",
    desc: "Set a custom width and height, maintain the aspect ratio, or use percentage-based resizing to adjust image dimensions.",
    icon: <RefreshCw size={32} />,
  },

  {
    title: "Download the Resized Image",
    desc: "Preview the result and download your resized image instantly in JPG, PNG, or WEBP format.",
    icon: <Download size={32} />,
  },
],

  "image-compressor": [
    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Upload size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <RefreshCw size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Download size={32} />,
    },
  ],

  "pdf-to-word": [
    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Upload size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <RefreshCw size={32} />,
    },

    {
      title: "Step Title",
      desc: "Step description here.",
      icon: <Download size={32} />,
    },
  ],

  "word-to-pdf": [],
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

export default function HowToUse() {
  const { slug } = useParams();

  const currentSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const steps =
    toolSteps[currentSlug] || [];

  if (!steps.length) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        How to Use
      </h2>

      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div
            key={i}
            className={styles.card}
          >
            <div className={styles.icon}>
              {step.icon}
            </div>

            <h3
              className={
                styles.stepTitle
              }
            >
              {i + 1}. {step.title}
            </h3>

            <p className={styles.desc}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}