"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/RelatedTools.module.css";
import getToolSlug from "@/utils/getToolSlug";

const relatedTools = {
  "image-resizer": [
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Cropper", slug: "image-cropper" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "image-compressor": [
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Cropper", slug: "image-cropper" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "image-cropper": [
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "image-converter": [
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Cropper", slug: "image-cropper" },
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "JPG to PNG", slug: "jpg-to-png" },
  ],

  "png-to-jpg": [
    { name: "JPG to PNG", slug: "jpg-to-png" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Cropper", slug: "image-cropper" },
  ],

  "jpg-to-png": [
    { name: "PNG to JPG", slug: "png-to-jpg" },
    { name: "Image Converter", slug: "image-converter" },
    { name: "Image Compressor", slug: "image-compressor" },
    { name: "Image Resizer", slug: "image-resizer" },
    { name: "Image Cropper", slug: "image-cropper" },
  ],

  "pdf-to-word": [
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "word-to-pdf": [
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "pdf-merger": [
    { name: "PDF Splitter", slug: "pdf-splitter" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "pdf-splitter": [
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
  ],

  "pdf-to-jpg": [
    { name: "JPG to PDF", slug: "jpg-to-pdf" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
  ],

  "jpg-to-pdf": [
    { name: "PDF to JPG", slug: "pdf-to-jpg" },
    { name: "PDF to Word", slug: "pdf-to-word" },
    { name: "Word to PDF", slug: "word-to-pdf" },
    { name: "PDF Merger", slug: "pdf-merger" },
    { name: "PDF Splitter", slug: "pdf-splitter" },
  ],

  "qr-code-generator": [
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
    { name: "Password Generator", slug: "password-generator" },
    { name: "Word Counter", slug: "word-counter" },
    { name: "JSON Formatter", slug: "json-formatter" },
  ],

  "password-generator": [
    { name: "QR Code Generator", slug: "qr-code-generator" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
  ],

  "word-counter": [
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "QR Code Generator", slug: "qr-code-generator" },
    { name: "Password Generator", slug: "password-generator" },
    { name: "URL Encoder", slug: "url-encoder" },
  ],

  "json-formatter": [
    { name: "JSON Validator", slug: "json-validator" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
  ],

  "json-validator": [
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
  ],

  "base64-encoder": [
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
  ],

  "base64-decoder": [
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "URL Decoder", slug: "url-decoder" },
  ],

  "html-minifier": [
    { name: "CSS Minifier", slug: "css-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
  ],

  "css-minifier": [
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "JS Minifier", slug: "js-minifier" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "URL Encoder", slug: "url-encoder" },
  ],

  "js-minifier": [
    { name: "HTML Minifier", slug: "html-minifier" },
    { name: "CSS Minifier", slug: "css-minifier" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
  ],

  "url-encoder": [
    { name: "URL Decoder", slug: "url-decoder" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
  ],

  "url-decoder": [
    { name: "URL Encoder", slug: "url-encoder" },
    { name: "Base64 Encoder", slug: "base64-encoder" },
    { name: "Base64 Decoder", slug: "base64-decoder" },
    { name: "JSON Formatter", slug: "json-formatter" },
    { name: "JSON Validator", slug: "json-validator" },
  ],
};



export default function RelatedTools() {
    const { slug } = useParams();

    const rawSlug = Array.isArray(slug)
        ? slug[0]
        : slug;

    const currentSlug =
        getToolSlug(rawSlug);

    const tools =
        relatedTools[currentSlug] || [];

    if (!tools.length) return null;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                Related Tools
            </h2>

            <div className={styles.grid}>
                {tools.map((tool) => (
                    <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className={styles.card}
                    >
                        <span>{tool.name}</span>

                        <span className={styles.arrow}>
                            →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}