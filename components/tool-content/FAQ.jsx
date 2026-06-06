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


"image-converter": [
  {
    q: "Which image formats can I convert?",
    a: "You can convert between popular formats such as JPG, PNG, and WEBP."
  },
  {
    q: "Will image quality be affected during conversion?",
    a: "The tool is designed to preserve image quality as much as possible during conversion."
  },
  {
    q: "Can I convert images online without software?",
    a: "Yes, the conversion process works directly in your browser."
  },
  {
    q: "Is image conversion free?",
    a: "Yes, the tool is completely free to use."
  },
  {
    q: "Are uploaded images stored permanently?",
    a: "No, uploaded files are processed securely and are not permanently stored."
  }
],

"image-cropper": [
  {
    q: "How do I crop an image online?",
    a: "Upload your image, select the desired area, and download the cropped result."
  },
  {
    q: "Can I crop JPG and PNG images?",
    a: "Yes, JPG, PNG, and WEBP images are supported."
  },
  {
    q: "Will cropping reduce image quality?",
    a: "Cropping removes unwanted areas without significantly affecting image quality."
  },
  {
    q: "Can I crop images for social media?",
    a: "Yes, you can crop images to fit social media dimensions and requirements."
  },
  {
    q: "Is the image cropper free?",
    a: "Yes, you can crop images online for free."
  }
],

"png-to-jpg": [
  {
    q: "How do I convert PNG to JPG?",
    a: "Upload a PNG image and download the converted JPG file."
  },
  {
    q: "Why convert PNG to JPG?",
    a: "JPG files are often smaller and more suitable for websites and sharing."
  },
  {
    q: "Will transparency be preserved?",
    a: "JPG does not support transparency, so transparent areas may be replaced with a background color."
  },
  {
    q: "Can I convert multiple PNG files?",
    a: "Support for multiple files depends on the tool's capabilities."
  },
  {
    q: "Is PNG to JPG conversion secure?",
    a: "Yes, uploaded files are processed securely."
  }
],

"jpg-to-png": [
  {
    q: "How do I convert JPG to PNG?",
    a: "Upload your JPG image and download the converted PNG version."
  },
  {
    q: "Why convert JPG to PNG?",
    a: "PNG is commonly used for higher-quality graphics and lossless image storage."
  },
  {
    q: "Will image quality improve after conversion?",
    a: "Converting formats does not increase image quality but preserves the existing image."
  },
  {
    q: "Can I use JPG to PNG for design projects?",
    a: "Yes, PNG files are widely used in graphic design and web development."
  },
  {
    q: "Is JPG to PNG conversion free?",
    a: "Yes, the tool is free to use."
  }
],

"qr-code-generator": [
  {
    q: "What can I create QR codes for?",
    a: "You can generate QR codes for URLs, text, contact information, Wi-Fi details, and more."
  },
  {
    q: "Can I download generated QR codes?",
    a: "Yes, QR codes can be downloaded and used anywhere."
  },
  {
    q: "Do QR codes expire?",
    a: "Standard QR codes do not expire as long as the linked content remains available."
  },
  {
    q: "Can I use QR codes for business purposes?",
    a: "Yes, QR codes are commonly used in marketing, packaging, and business materials."
  },
  {
    q: "Is the QR Code Generator free?",
    a: "Yes, it is completely free to use."
  }
],

"password-generator": [
  {
    q: "How does the password generator work?",
    a: "The tool creates random passwords using letters, numbers, and special characters."
  },
  {
    q: "Can I generate strong passwords?",
    a: "Yes, the generated passwords are designed to be secure and difficult to guess."
  },
  {
    q: "Can I customize password length?",
    a: "Yes, you can choose the desired password length."
  },
  {
    q: "Are generated passwords stored?",
    a: "No, generated passwords are not stored or tracked."
  },
  {
    q: "Is the password generator free?",
    a: "Yes, it is completely free."
  }
],

"word-counter": [
  {
    q: "What does the Word Counter measure?",
    a: "It counts words, characters, sentences, and paragraphs in your text."
  },
  {
    q: "Can I count words in large documents?",
    a: "Yes, the tool can analyze both short and long text content."
  },
  {
    q: "Is the word count updated automatically?",
    a: "Yes, results are updated in real time as you type or paste content."
  },
  {
    q: "Can students use the Word Counter?",
    a: "Yes, it is useful for essays, assignments, and academic writing."
  },
  {
    q: "Is my text stored?",
    a: "No, your text is not permanently stored."
  }
],

"json-formatter": [
  {
    q: "What does a JSON Formatter do?",
    a: "It organizes JSON data into a readable and properly indented format."
  },
  {
    q: "Can I format large JSON files?",
    a: "Yes, large JSON content can be formatted for easier reading."
  },
  {
    q: "Does formatting change the data?",
    a: "No, formatting only changes the presentation of the JSON structure."
  },
  {
    q: "Who can use a JSON Formatter?",
    a: "Developers, testers, students, and API users commonly use it."
  },
  {
    q: "Is JSON formatting free?",
    a: "Yes, the tool is completely free."
  }
],

"json-validator": [
  {
    q: "What does a JSON Validator check?",
    a: "It verifies whether JSON data follows valid syntax rules."
  },
  {
    q: "Can it detect JSON errors?",
    a: "Yes, invalid formatting and syntax issues can be identified."
  },
  {
    q: "Why is JSON validation important?",
    a: "It helps prevent errors in APIs, applications, and data processing systems."
  },
  {
    q: "Can I validate JSON online?",
    a: "Yes, validation is performed directly in your browser."
  },
  {
    q: "Is the JSON Validator free?",
    a: "Yes, it is free to use."
  }
],

"base64-encoder": [
  {
    q: "What is Base64 encoding?",
    a: "Base64 encoding converts data into a text-based format suitable for transmission and storage."
  },
  {
    q: "Can I encode text online?",
    a: "Yes, simply enter text and generate the Base64 output instantly."
  },
  {
    q: "Is Base64 encoding encryption?",
    a: "No, Base64 is an encoding method, not encryption."
  },
  {
    q: "Who uses Base64 encoding?",
    a: "Developers and IT professionals commonly use Base64 in web and software development."
  },
  {
    q: "Is the Base64 Encoder free?",
    a: "Yes, it is completely free."
  }
],

"base64-decoder": [
  {
    q: "What does a Base64 Decoder do?",
    a: "It converts Base64-encoded data back into readable text."
  },
  {
    q: "Can I decode Base64 strings online?",
    a: "Yes, simply paste the encoded content and decode it instantly."
  },
  {
    q: "Is Base64 decoding secure?",
    a: "Yes, decoding is performed securely within the tool."
  },
  {
    q: "Who uses Base64 decoding?",
    a: "Developers, administrators, and IT professionals frequently use it."
  },
  {
    q: "Is the Base64 Decoder free?",
    a: "Yes, it is completely free."
  }
],


"html-minifier": [
  {
    q: "What does an HTML Minifier do?",
    a: "It removes unnecessary spaces, comments, and formatting from HTML code to reduce file size."
  },
  {
    q: "Will minifying HTML affect website functionality?",
    a: "No, HTML minification is designed to preserve functionality while reducing file size."
  },
  {
    q: "Why should I minify HTML?",
    a: "Minifying HTML can improve website loading speed and overall performance."
  },
  {
    q: "Can I minify HTML code online?",
    a: "Yes, simply paste your HTML code and get the minified version instantly."
  },
  {
    q: "Is the HTML Minifier free to use?",
    a: "Yes, the tool is completely free."
  }
],

"css-minifier": [
  {
    q: "What does a CSS Minifier do?",
    a: "It compresses CSS code by removing unnecessary spaces, comments, and formatting."
  },
  {
    q: "Will CSS minification break my styles?",
    a: "No, CSS minification preserves styling while reducing file size."
  },
  {
    q: "Why should I minify CSS?",
    a: "Smaller CSS files load faster and can improve website performance."
  },
  {
    q: "Can I minify CSS online without software?",
    a: "Yes, the tool works directly in your browser."
  },
  {
    q: "Is CSS Minifier free?",
    a: "Yes, it is completely free to use."
  }
],

"js-minifier": [
  {
    q: "What does a JS Minifier do?",
    a: "It reduces JavaScript file size by removing unnecessary whitespace and formatting."
  },
  {
    q: "Will JavaScript minification affect functionality?",
    a: "No, properly minified JavaScript should work exactly the same as the original code."
  },
  {
    q: "Why should I minify JavaScript?",
    a: "Minified JavaScript files load faster and help improve website performance."
  },
  {
    q: "Can I minify JavaScript online?",
    a: "Yes, simply paste your JavaScript code and generate a minified version instantly."
  },
  {
    q: "Is the JS Minifier free?",
    a: "Yes, the tool is completely free."
  }
],

"url-encoder": [
  {
    q: "What is URL encoding?",
    a: "URL encoding converts special characters into a format that can be safely transmitted in URLs."
  },
  {
    q: "Why do I need to encode URLs?",
    a: "Encoding ensures URLs work correctly when they contain spaces, symbols, or special characters."
  },
  {
    q: "Can I encode URL parameters online?",
    a: "Yes, the tool can encode URLs and query parameters instantly."
  },
  {
    q: "Is URL encoding important for web development?",
    a: "Yes, it helps ensure accurate data transmission between browsers and servers."
  },
  {
    q: "Is the URL Encoder free?",
    a: "Yes, it is completely free to use."
  }
],

"url-decoder": [
  {
    q: "What does a URL Decoder do?",
    a: "It converts encoded URLs and parameters back into a readable format."
  },
  {
    q: "Why would I need to decode a URL?",
    a: "Decoding helps you understand encoded query strings and URL parameters."
  },
  {
    q: "Can I decode URL parameters online?",
    a: "Yes, simply paste the encoded URL and view the decoded result instantly."
  },
  {
    q: "Who commonly uses URL Decoders?",
    a: "Web developers, testers, and IT professionals frequently use URL decoding tools."
  },
  {
    q: "Is the URL Decoder free?",
    a: "Yes, it is completely free."
  }
],


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