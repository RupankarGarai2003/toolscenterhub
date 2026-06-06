"use client";

import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/HowToUse.module.css";
import getToolSlug from "@/utils/getToolSlug";

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


"image-compressor": [
  {
    title: "Upload Your Image",
    desc: "Upload a JPG, PNG, or WEBP image from your device using the Image Compressor tool.",
    icon: <Upload size={32} />,
  },
  {
    title: "Compress the Image",
    desc: "Choose your preferred compression settings and let the tool reduce the image file size while maintaining quality.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download the Compressed Image",
    desc: "Preview the optimized image and download the compressed file instantly.",
    icon: <Download size={32} />,
  },
],

"pdf-to-word": [
  {
    title: "Upload Your PDF File",
    desc: "Select and upload the PDF document you want to convert into an editable Word file.",
    icon: <Upload size={32} />,
  },
  {
    title: "Convert PDF to Word",
    desc: "The tool processes your document and converts it into DOCX format while preserving formatting.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download the Word Document",
    desc: "Download the converted Word file and start editing immediately.",
    icon: <Download size={32} />,
  },
],

"word-to-pdf": [
  {
    title: "Upload Your Word File",
    desc: "Upload a DOC or DOCX document from your device.",
    icon: <Upload size={32} />,
  },
  {
    title: "Convert to PDF",
    desc: "The tool converts your Word document into a professional PDF format.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download the PDF",
    desc: "Download the generated PDF file instantly and share it anywhere.",
    icon: <Download size={32} />,
  },
],

"jpg-to-pdf": [
  {
    title: "Upload JPG Images",
    desc: "Select one or multiple JPG or JPEG images from your device.",
    icon: <Upload size={32} />,
  },
  {
    title: "Create PDF Document",
    desc: "Arrange the images and convert them into a single PDF file.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download the PDF",
    desc: "Save the generated PDF document to your device instantly.",
    icon: <Download size={32} />,
  },
],

"pdf-merger": [
  {
    title: "Upload PDF Files",
    desc: "Choose the PDF documents you want to merge into one file.",
    icon: <Upload size={32} />,
  },
  {
    title: "Merge PDFs",
    desc: "Arrange the files in the correct order and combine them into a single PDF.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download Merged PDF",
    desc: "Download the combined PDF document instantly.",
    icon: <Download size={32} />,
  },
],

"pdf-splitter": [
  {
    title: "Upload Your PDF",
    desc: "Select the PDF file you want to split into smaller documents.",
    icon: <Upload size={32} />,
  },
  {
    title: "Choose Pages",
    desc: "Select specific pages or page ranges to extract from the PDF.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download Split Files",
    desc: "Download the newly created PDF files instantly.",
    icon: <Download size={32} />,
  },
],

"pdf-to-jpg": [
  {
    title: "Upload PDF File",
    desc: "Select the PDF document you want to convert into images.",
    icon: <Upload size={32} />,
  },
  {
    title: "Convert PDF Pages",
    desc: "The tool converts each PDF page into a high-quality JPG image.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download JPG Images",
    desc: "Save the converted JPG files to your device.",
    icon: <Download size={32} />,
  },
],

"image-converter": [
  {
    title: "Upload an Image",
    desc: "Choose the image file you want to convert.",
    icon: <Upload size={32} />,
  },
  {
    title: "Select Output Format",
    desc: "Choose JPG, PNG, or WEBP as the desired output format.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download Converted Image",
    desc: "Download the converted image instantly.",
    icon: <Download size={32} />,
  },
],

"image-cropper": [
  {
    title: "Upload an Image",
    desc: "Select the image you want to crop from your device.",
    icon: <Upload size={32} />,
  },
  {
    title: "Crop the Image",
    desc: "Adjust the crop area and remove unwanted portions of the image.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download Cropped Image",
    desc: "Save the cropped image in your preferred format.",
    icon: <Download size={32} />,
  },
],

"png-to-jpg": [
  {
    title: "Upload PNG Image",
    desc: "Choose the PNG image you want to convert.",
    icon: <Upload size={32} />,
  },
  {
    title: "Convert PNG to JPG",
    desc: "The tool processes the image and converts it into JPG format.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download JPG File",
    desc: "Download the converted JPG image instantly.",
    icon: <Download size={32} />,
  },
],

"jpg-to-png": [
  {
    title: "Upload JPG Image",
    desc: "Select the JPG or JPEG image you want to convert.",
    icon: <Upload size={32} />,
  },
  {
    title: "Convert JPG to PNG",
    desc: "The image is processed and converted into PNG format.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download PNG File",
    desc: "Save the converted PNG image to your device.",
    icon: <Download size={32} />,
  },
],

"qr-code-generator": [
  {
    title: "Enter Your Content",
    desc: "Add a URL, text, contact information, or other content for the QR code.",
    icon: <Upload size={32} />,
  },
  {
    title: "Generate QR Code",
    desc: "Create a QR code instantly using the provided information.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Download QR Code",
    desc: "Save the generated QR code image to your device.",
    icon: <Download size={32} />,
  },
],

"password-generator": [
  {
    title: "Choose Password Settings",
    desc: "Select the desired password length and character options.",
    icon: <Upload size={32} />,
  },
  {
    title: "Generate Password",
    desc: "Create a secure and random password instantly.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy the Password",
    desc: "Use the generated password for your accounts and applications.",
    icon: <Download size={32} />,
  },
],

"word-counter": [
  {
    title: "Enter or Paste Text",
    desc: "Type or paste your content into the editor.",
    icon: <Upload size={32} />,
  },
  {
    title: "Analyze the Content",
    desc: "The tool automatically counts words, characters, and sentences.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Review Results",
    desc: "View real-time text statistics instantly.",
    icon: <Download size={32} />,
  },
],

"json-formatter": [
  {
    title: "Paste JSON Data",
    desc: "Copy and paste your JSON data into the JSON Formatter tool.",
    icon: <Upload size={32} />,
  },
  {
    title: "Format the JSON",
    desc: "The tool automatically beautifies and organizes the JSON structure for better readability.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy the Formatted JSON",
    desc: "Review the formatted output and copy or use it in your project instantly.",
    icon: <Download size={32} />,
  },
],

"json-validator": [
  {
    title: "Paste JSON Content",
    desc: "Enter or paste the JSON data you want to validate.",
    icon: <Upload size={32} />,
  },
  {
    title: "Validate JSON",
    desc: "The tool checks your JSON syntax and identifies formatting or structural errors.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Review Validation Results",
    desc: "View validation results instantly and fix any issues found in the JSON data.",
    icon: <Download size={32} />,
  },
],

"base64-encoder": [
  {
    title: "Enter Text or Data",
    desc: "Paste the text or data you want to encode into Base64 format.",
    icon: <Upload size={32} />,
  },
  {
    title: "Encode to Base64",
    desc: "The tool converts your content into Base64 encoded format instantly.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy the Encoded Output",
    desc: "Copy the generated Base64 string and use it wherever needed.",
    icon: <Download size={32} />,
  },
],

"base64-decoder": [
  {
    title: "Paste Base64 Data",
    desc: "Enter the Base64 encoded string you want to decode.",
    icon: <Upload size={32} />,
  },
  {
    title: "Decode the Content",
    desc: "The tool converts the Base64 string back into its original readable format.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "View the Decoded Result",
    desc: "Review and copy the decoded content instantly.",
    icon: <Download size={32} />,
  },
],

"html-minifier": [
  {
    title: "Paste HTML Code",
    desc: "Copy and paste your HTML code into the HTML Minifier tool.",
    icon: <Upload size={32} />,
  },
  {
    title: "Minify HTML",
    desc: "The tool removes unnecessary spaces, comments, and formatting to reduce file size.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy Minified Code",
    desc: "Use the optimized HTML code in your website or application.",
    icon: <Download size={32} />,
  },
],

"css-minifier": [
  {
    title: "Paste CSS Code",
    desc: "Enter or paste the CSS code you want to compress.",
    icon: <Upload size={32} />,
  },
  {
    title: "Minify CSS",
    desc: "The tool removes unnecessary characters and whitespace to reduce file size.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy Optimized CSS",
    desc: "Download or copy the minified CSS code for production use.",
    icon: <Download size={32} />,
  },
],

"js-minifier": [
  {
    title: "Paste JavaScript Code",
    desc: "Enter or paste your JavaScript code into the JS Minifier tool.",
    icon: <Upload size={32} />,
  },
  {
    title: "Minify JavaScript",
    desc: "The tool compresses the code by removing unnecessary spaces and formatting.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy Minified JavaScript",
    desc: "Use the optimized JavaScript code to improve website performance.",
    icon: <Download size={32} />,
  },
],

"url-encoder": [
  {
    title: "Enter URL or Text",
    desc: "Paste the URL or text that you want to encode safely for web usage.",
    icon: <Upload size={32} />,
  },
  {
    title: "Encode the URL",
    desc: "The tool converts special characters into URL-safe encoded format.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy Encoded URL",
    desc: "Use the encoded URL in web applications, APIs, or query strings.",
    icon: <Download size={32} />,
  },
],

"url-decoder": [
  {
    title: "Paste Encoded URL",
    desc: "Enter the encoded URL or query string you want to decode.",
    icon: <Upload size={32} />,
  },
  {
    title: "Decode the URL",
    desc: "The tool converts encoded characters back into readable text.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Copy Decoded Result",
    desc: "Review and use the decoded URL or text instantly.",
    icon: <Download size={32} />,
  },
],




};

export default function HowToUse() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);

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