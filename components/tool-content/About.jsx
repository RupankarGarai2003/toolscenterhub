"use client";

import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/About.module.css";
import getToolSlug from "@/utils/getToolSlug";

const aboutContent = {
  "image-resizer": {
    title: "About Image Resizer",
    content: `
        Image Resizer is a free online tool that allows you to resize JPG, PNG, and WEBP images quickly without installing any software. Whether you need to adjust image dimensions for websites, social media posts, email attachments, online forms, or digital marketing campaigns, our tool makes the process simple and efficient.

        With this Image Resizer, you can customize image width and height, maintain the original aspect ratio, and choose different output formats based on your requirements. The tool is designed to preserve image quality while reducing or increasing dimensions, ensuring your images remain sharp and professional.

        Our online image resizer supports popular formats including JPG, PNG, and WEBP. You can upload an image directly from your device, set the desired dimensions, preview the result, and download the resized image instantly. No registration, installation, or technical knowledge is required.

        This tool is useful for bloggers, designers, students, marketers, website owners, and anyone who needs to resize images online. Whether you are preparing images for social media platforms, optimizing visuals for websites, or adjusting photos for documents, the Image Resizer provides a fast and secure solution.

        All image processing is performed securely, and your files are not permanently stored. This ensures privacy, security, and complete control over your data while using the tool.
            `,
  },

  //   "image-compressor": {
  //     title: "About Image Compressor",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "pdf-to-word": {
  //     title: "About PDF to Word",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "word-to-pdf": {
  //     title: "About Word to PDF",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "jpg-to-pdf": {
  //     title: "About JPG to PDF",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "pdf-merger": {
  //     title: "About PDF Merger",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "pdf-splitter": {
  //     title: "About PDF Splitter",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "pdf-to-jpg": {
  //     title: "About PDF to JPG",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "image-converter": {
  //     title: "About Image Converter",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "image-cropper": {
  //     title: "About Image Cropper",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "png-to-jpg": {
  //     title: "About PNG to JPG",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "jpg-to-png": {
  //     title: "About JPG to PNG",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "qr-code-generator": {
  //     title: "About QR Code Generator",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "password-generator": {
  //     title: "About Password Generator",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "word-counter": {
  //     title: "About Word Counter",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "json-formatter": {
  //     title: "About JSON Formatter",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "json-validator": {
  //     title: "About JSON Validator",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "base64-encoder": {
  //     title: "About Base64 Encoder",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "base64-decoder": {
  //     title: "About Base64 Decoder",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "html-minifier": {
  //     title: "About HTML Minifier",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "css-minifier": {
  //     title: "About CSS Minifier",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "js-minifier": {
  //     title: "About JS Minifier",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "url-encoder": {
  //     title: "About URL Encoder",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },

  //   "url-decoder": {
  //     title: "About URL Decoder",
  //     content: `
  // ADD YOUR SEO CONTENT HERE
  //     `,
  //   },
};

export default function About() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);

  const tool =
    aboutContent[currentSlug];
  if (!tool) return null;


  return (
    <div className={styles.container}>
      <div className={styles.topLine}></div>

      <h2 className={styles.heading}>
        {tool.title}
      </h2>

      <div className={styles.text}>
        {tool.content
          .trim()
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index}>
              {paragraph.trim()}
            </p>
          ))}
      </div>
    </div>
  );
}