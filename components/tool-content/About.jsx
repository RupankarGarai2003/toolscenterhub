"use client";

import { useParams } from "next/navigation";
import styles from "../../components/Styles/tool-component/About.module.css";
import getToolSlug from "@/utils/getToolSlug";
  import {
  getVariantContent,
} from "@/utils/toolVariantContent";

const aboutContent = {
  "image-resizer":{
    title: "About Image Resizer",
    content: `
        Image Resizer is a free online tool that allows you to resize JPG, PNG, and WEBP images quickly without installing any software. Whether you need to adjust image dimensions for websites, social media posts, email attachments, online forms, or digital marketing campaigns, our tool makes the process simple and efficient.

        With this Image Resizer, you can customize image width and height, maintain the original aspect ratio, and choose different output formats based on your requirements. The tool is designed to preserve image quality while reducing or increasing dimensions, ensuring your images remain sharp and professional.

        Our online image resizer supports popular formats including JPG, PNG, and WEBP. You can upload an image directly from your device, set the desired dimensions, preview the result, and download the resized image instantly. No registration, installation, or technical knowledge is required.

        This tool is useful for bloggers, designers, students, marketers, website owners, and anyone who needs to resize images online. Whether you are preparing images for social media platforms, optimizing visuals for websites, or adjusting photos for documents, the Image Resizer provides a fast and secure solution.

        All image processing is performed securely, and your files are not permanently stored. This ensures privacy, security, and complete control over your data while using the tool.
            `,
  },

"image-compressor": {
  title: "About Image Compressor",
  content: `
      Image Compressor is a free online tool that helps you reduce the file size of JPG, JPEG, PNG, and WEBP images without installing any software. Whether you need to optimize images for websites, social media, email attachments, or online forms, this tool makes image compression fast and simple.

      With our Image Compressor, you can significantly decrease image file size while maintaining excellent visual quality. Smaller image files load faster, improve website performance, and help save storage space without noticeably affecting appearance.

      The tool supports popular image formats including JPG, PNG, and WEBP. Simply upload your image, compress it in seconds, preview the result, and download the optimized version instantly. No registration or technical expertise is required.

      Image Compressor is useful for bloggers, designers, marketers, students, website owners, and anyone who needs smaller image files for faster sharing and improved performance.

      All image processing is performed securely, and your files are not permanently stored, ensuring privacy and complete control over your data.
  `,
},

"pdf-to-word": {
  title: "About PDF to Word",
  content: `
      PDF to Word is a free online tool that converts PDF files into editable Word documents quickly and accurately. It allows you to extract text and content from PDF files so you can make changes using Microsoft Word or compatible word processors.

      Whether you need to edit contracts, reports, assignments, resumes, or business documents, this tool helps transform PDF files into DOCX format while preserving formatting as much as possible.

      Simply upload your PDF file, start the conversion process, and download the Word document within seconds. No software installation, registration, or technical knowledge is required.

      PDF to Word is useful for students, professionals, teachers, businesses, and anyone who needs to edit PDF content efficiently.

      Your files are processed securely and are not permanently stored, ensuring privacy and data protection.
  `,
},

"word-to-pdf": {
  title: "About Word to PDF",
  content: `
      Word to PDF is a free online tool that converts DOC and DOCX documents into PDF files quickly and securely. It helps preserve formatting, fonts, images, and document structure while creating professional PDF files.

      Whether you are sharing reports, resumes, invoices, assignments, or business documents, converting Word files to PDF ensures consistent formatting across devices and platforms.

      Simply upload your Word document and download the generated PDF instantly. No registration, software installation, or technical expertise is required.

      This tool is ideal for students, professionals, businesses, and anyone who needs reliable Word to PDF conversion online.

      All uploaded files are processed securely and are not permanently stored, helping protect your privacy and sensitive information.
  `,
},

"jpg-to-pdf": {
  title: "About JPG to PDF",
  content: `
      JPG to PDF is a free online tool that allows you to convert JPG and JPEG images into PDF documents quickly and easily. It is perfect for creating professional PDF files from photos, scanned documents, screenshots, and other image files.

      You can combine one or multiple JPG images into a single PDF document while maintaining image quality and proper page layout.

      Simply upload your images, arrange them if needed, and download the generated PDF instantly. No registration or software installation is required.

      This tool is useful for students, office workers, businesses, and anyone who needs to convert images into a shareable and printable PDF format.

      All file processing is performed securely, and uploaded images are not permanently stored.
  `,
},

"pdf-merger": {
  title: "About PDF Merger",
  content: `
      PDF Merger is a free online tool that allows you to combine multiple PDF files into a single document quickly and efficiently. Whether you need to merge reports, invoices, contracts, presentations, or scanned documents, this tool simplifies the process.

      You can upload multiple PDF files, arrange them in your preferred order, and create one consolidated PDF document in just a few clicks.

      The PDF Merger tool helps improve document organization and makes sharing multiple files more convenient.

      No software installation, registration, or technical skills are required. Simply upload, merge, and download your combined PDF instantly.

      All uploaded files are processed securely and are not permanently stored, ensuring privacy and data protection.
  `,
},

"pdf-splitter": {
  title: "About PDF Splitter",
  content: `
      PDF Splitter is a free online tool that helps you extract pages or divide large PDF files into smaller documents. It provides a quick and efficient way to manage PDF files without installing software.

      Whether you need to separate chapters, extract specific pages, split reports, or create smaller PDF documents for sharing, this tool makes the process simple and reliable.

      Upload your PDF file, choose the pages you want to extract or split, and download the new PDF files instantly.

      PDF Splitter is useful for students, professionals, businesses, and anyone who works regularly with PDF documents.

      All file processing is performed securely, and uploaded documents are not permanently stored to protect your privacy.
  `,
},

"pdf-to-jpg": {
  title: "About PDF to JPG",
  content: `
      PDF to JPG is a free online tool that converts PDF pages into high-quality JPG images. It allows you to transform PDF documents into image files that can be easily shared, edited, or used in presentations and websites.

      Whether you need to extract pages from reports, convert scanned documents, or create images from PDF content, this tool provides a fast and accurate solution.

      Simply upload your PDF file, convert it to JPG format, and download the generated images instantly.

      The tool is ideal for students, designers, marketers, businesses, and anyone who needs image versions of PDF documents.

      All uploaded files are processed securely and are not permanently stored, ensuring complete privacy and security.
  `,
},

"image-converter": {
  title: "About Image Converter",
  content: `
      Image Converter is a free online tool that allows you to convert images between popular formats such as JPG, PNG, and WEBP. It provides a fast and convenient way to change image formats without installing software.

      Whether you need better compatibility, smaller file sizes, or a specific format for a project, this tool helps convert images while maintaining quality.

      Upload your image, select the desired output format, and download the converted image instantly. No registration or technical expertise is required.

      This tool is useful for designers, bloggers, marketers, website owners, students, and anyone who works with digital images.

      All image processing is performed securely, and uploaded files are not permanently stored.
  `,
},

"image-cropper": {
  title: "About Image Cropper",
  content: `
      Image Cropper is a free online tool that allows you to crop images quickly and precisely. It helps remove unwanted areas, improve composition, and prepare images for websites, social media, documents, and marketing materials.

      With this tool, you can select the exact portion of an image you want to keep while maintaining image quality and clarity.

      The Image Cropper supports popular formats including JPG, PNG, and WEBP. Simply upload your image, crop it to the desired area, preview the result, and download it instantly.

      This tool is useful for photographers, designers, students, marketers, and anyone who needs to edit images online.

      All uploaded files are processed securely and are not permanently stored, ensuring complete privacy.
  `,
},

"png-to-jpg": {
  title: "About PNG to JPG",
  content: `
      PNG to JPG is a free online tool that converts PNG images into JPG format quickly and efficiently. Converting PNG files to JPG can help reduce file size and improve compatibility across websites, applications, and devices.

      The tool preserves image quality while generating optimized JPG files suitable for sharing, uploading, and publishing online.

      Simply upload your PNG image, convert it within seconds, and download the JPG version instantly.

      This tool is ideal for students, designers, website owners, bloggers, and anyone who needs fast PNG to JPG conversion.

      All file processing is performed securely, and uploaded images are not permanently stored.
  `,
},

"jpg-to-png": {
  title: "About JPG to PNG",
  content: `
      JPG to PNG is a free online tool that converts JPG and JPEG images into PNG format. PNG files are widely used for high-quality graphics, transparency support, and lossless image storage.

      Whether you need PNG images for graphic design, website development, presentations, or digital projects, this tool provides a quick and reliable conversion solution.

      Upload your JPG image, convert it to PNG format, and download the result instantly without installing any software.

      The tool is useful for designers, developers, marketers, students, and anyone who works with digital images.

      All image processing is performed securely, and uploaded files are not permanently stored to ensure privacy and security.
  `,
},


"qr-code-generator": {
  title: "About QR Code Generator",
  content: `
      QR Code Generator is a free online tool that allows you to create QR codes instantly for URLs, text, contact information, Wi-Fi credentials, and more. QR codes make it easy to share information quickly using smartphones and QR code scanners.

      Simply enter your content, generate the QR code, and download it for use in marketing materials, business cards, posters, websites, packaging, and digital campaigns.

      The generated QR codes are high quality and can be used for both personal and professional purposes.

      This tool is useful for businesses, marketers, students, event organizers, and anyone who wants to share information efficiently.

      No registration is required, and all processing is performed securely to protect your data.
  `,
},

"password-generator": {
  title: "About Password Generator",
  content: `
      Password Generator is a free online tool that helps you create strong, secure, and random passwords instantly. Strong passwords play an important role in protecting online accounts, personal information, and sensitive data from unauthorized access.

      You can generate passwords with customizable lengths and character combinations, including uppercase letters, lowercase letters, numbers, and special symbols.

      Whether you need passwords for email accounts, social media, banking, business applications, or websites, this tool provides secure password generation in seconds.

      No passwords are stored or transmitted, ensuring complete privacy and security while using the tool.
  `,
},

"word-counter": {
  title: "About Word Counter",
  content: `
      Word Counter is a free online tool that instantly counts words, characters, sentences, and paragraphs in your text. It helps writers, students, bloggers, marketers, and professionals analyze written content quickly and accurately.

      Whether you are working on essays, articles, reports, social media posts, or website content, the tool provides detailed statistics to help meet word count requirements and improve writing productivity.

      Simply paste or type your text into the editor and view real-time results immediately.

      The tool works directly in your browser and does not permanently store your content, ensuring privacy and security.
  `,
},

"json-formatter": {
  title: "About JSON Formatter",
  content: `
      JSON Formatter is a free online tool that helps format and beautify JSON data for improved readability and debugging. Properly formatted JSON makes it easier to understand data structures and identify errors during development.

      Simply paste your JSON code and the tool will automatically organize and indent the content into a clean, readable format.

      This tool is useful for developers, software engineers, API users, testers, and students who regularly work with JSON data.

      No software installation is required, and all processing is performed securely within your browser whenever possible.
  `,
},

"json-validator": {
  title: "About JSON Validator",
  content: `
      JSON Validator is a free online tool that checks whether JSON data is valid and properly structured. It helps developers identify syntax errors, formatting issues, and invalid JSON elements quickly.

      Simply paste your JSON content into the validator and receive instant feedback about any detected errors.

      This tool is valuable for API development, data processing, software testing, and web development projects that rely on JSON data exchange.

      Fast validation and easy-to-understand error reporting help save time and improve development efficiency.

      Your data is processed securely and is not permanently stored.
  `,
},

"base64-encoder": {
  title: "About Base64 Encoder",
  content: `
      Base64 Encoder is a free online tool that converts text and data into Base64 format quickly and accurately. Base64 encoding is commonly used for data transmission, email attachments, APIs, authentication systems, and web development.

      Simply enter your text and generate the encoded Base64 output instantly.

      This tool is useful for developers, system administrators, students, and IT professionals who work with encoded data regularly.

      No software installation is required, and all processing is performed securely for maximum privacy.
  `,
},

"base64-decoder": {
  title: "About Base64 Decoder",
  content: `
      Base64 Decoder is a free online tool that converts Base64-encoded data back into its original readable format. It helps developers and IT professionals quickly decode text, strings, and encoded information.

      Simply paste your Base64 content and view the decoded result instantly.

      This tool is commonly used in software development, API integrations, authentication systems, and data processing workflows.

      Fast decoding and an easy-to-use interface make it a convenient solution for handling Base64 data online.

      Your information is processed securely and is not permanently stored.
  `,
},

"html-minifier": {
  title: "About HTML Minifier",
  content: `
      HTML Minifier is a free online tool that reduces HTML file size by removing unnecessary spaces, comments, and formatting. Minified HTML files load faster and help improve website performance.

      By optimizing HTML code, developers can reduce page size and improve user experience without changing website functionality.

      Simply paste your HTML code into the tool and receive a compressed version instantly.

      This tool is useful for web developers, designers, website owners, and digital marketers focused on performance optimization.

      All processing is performed securely and efficiently.
  `,
},

"css-minifier": {
  title: "About CSS Minifier",
  content: `
      CSS Minifier is a free online tool that compresses CSS code by removing unnecessary whitespace, comments, and formatting. Smaller CSS files help websites load faster and improve overall performance.

      The tool preserves functionality while reducing file size, making it ideal for production-ready websites and web applications.

      Simply paste your CSS code and generate a minified version instantly.

      CSS Minifier is useful for developers, designers, website owners, and performance optimization specialists.

      No software installation is required, and all processing is performed securely.
  `,
},

"js-minifier": {
  title: "About JS Minifier",
  content: `
      JS Minifier is a free online tool that compresses JavaScript code by removing unnecessary characters, spaces, and formatting. Minified JavaScript files load faster and help improve website speed and efficiency.

      The tool reduces file size while maintaining functionality, making it suitable for production environments and performance optimization.

      Simply paste your JavaScript code and generate the optimized version instantly.

      This tool is useful for web developers, software engineers, and website owners who want to improve page performance and reduce bandwidth usage.

      All code processing is handled securely and efficiently.
  `,
},

"url-encoder": {
  title: "About URL Encoder",
  content: `
      URL Encoder is a free online tool that converts special characters into URL-safe encoded formats. URL encoding ensures that web addresses and query parameters can be transmitted correctly over the internet.

      The tool is useful for developers, API integrations, web applications, and data transmission tasks where encoded URLs are required.

      Simply enter your text or URL and generate the encoded output instantly.

      URL Encoder is fast, accurate, and works directly in your browser without requiring software installation.

      Your data is processed securely and is not permanently stored.
  `,
},

"url-decoder": {
  title: "About URL Decoder",
  content: `
      URL Decoder is a free online tool that converts encoded URLs back into their original readable format. It helps developers and users understand encoded query strings, parameters, and web addresses.

      Simply paste an encoded URL and view the decoded output instantly.

      This tool is commonly used during web development, debugging, API testing, and data analysis.

      URL Decoder provides fast and accurate decoding while maintaining complete privacy and security.

      No registration or software installation is required.
  `,
},



};

export default function About() {
  const { slug } = useParams();

  const rawSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const currentSlug =
    getToolSlug(rawSlug);



const baseTool =
  aboutContent[currentSlug];

const variantTool =
  getVariantContent(
    baseTool?.title?.replace(
      "About ",
      ""
    ),
    rawSlug
  );

const tool =
  variantTool || baseTool;

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