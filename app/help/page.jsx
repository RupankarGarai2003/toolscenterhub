"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// export const metadata = {
//   title:
//     "Help Center | Tools Center Hub",
//   description:
//     "Find answers to common questions about image tools, PDF tools, developer utilities, file conversion, troubleshooting, and support.",
// };
export default function HelpPage() {
  const [openIndex, setOpenIndex] =
    useState(null);

  const toggle = (index) => {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-white to-[#f5d0fe] px-6 py-16">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Help Center
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Find answers to common
          questions, learn how to use
          ToolsCenterHub tools, and
          troubleshoot issues quickly.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mt-12 space-y-4">
        {faqData.map(
          (item, index) => {
            const isOpen =
              openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    toggle(index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {
                      item.question
                    }
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-indigo-600"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 px-5 overflow-hidden ${
                    isOpen
                      ? "max-h-48 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {
                      item.answer
                    }
                  </p>
                </div>
              </div>
            );
          }
        )}
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          How To Use
          ToolsCenterHub
        </h2>

        <p className="text-gray-600 mt-4 leading-8">
          ToolsCenterHub provides
          free online tools for
          image editing, PDF
          management, developer
          utilities, file
          conversion, and
          productivity tasks.
          Most tools work directly
          in your browser without
          requiring registration
          or software installation.
        </p>

        <p className="text-gray-600 mt-4 leading-8">
          You can resize images,
          compress JPG and PNG
          files, convert PDF
          documents, merge PDF
          files, split PDFs,
          generate QR codes,
          format JSON, encode
          Base64 data, minify
          code, and perform many
          other tasks instantly.
        </p>

        <p className="text-gray-600 mt-4 leading-8">
          All tools are designed
          to be fast, secure, and
          easy to use. Whether
          you are a student,
          developer, designer,
          marketer, freelancer,
          or business owner, our
          tools help streamline
          everyday digital tasks.
        </p>
      </section>

      {/* COMMON ISSUES */}
      <section className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Issues &
          Solutions
        </h2>

        <ul className="mt-5 space-y-4 text-gray-600">
          <li>
            ✓ Refresh the page if
            a tool is not
            responding.
          </li>

          <li>
            ✓ Ensure your browser
            is updated to the
            latest version.
          </li>

          <li>
            ✓ Check your internet
            connection if uploads
            fail.
          </li>

          <li>
            ✓ Make sure uploaded
            files are in a
            supported format.
          </li>

          <li>
            ✓ Try using Chrome,
            Edge, Firefox, or
            Safari.
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Still Need Help?
        </h2>

        <p className="text-gray-600 mt-3">
          If you couldn't find
          your answer, our support
          team is ready to help.
        </p>

        <Link
          href="/contact-us"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:shadow-lg transition"
        >
          Contact Support →
        </Link>
      </section>
    </div>
  );
}

const faqData = [
  {
    question:
      "Are all tools free to use?",
    answer:
      "Yes. All tools available on ToolsCenterHub are free to use without registration.",
  },

  {
    question:
      "Do I need to create an account?",
    answer:
      "No account or login is required to access our tools.",
  },

  {
    question:
      "Is my data secure?",
    answer:
      "We prioritize user privacy and secure processing. Files are not permanently stored.",
  },

  {
    question:
      "Can I use these tools on mobile devices?",
    answer:
      "Yes. All tools are optimized for desktop, tablet, and mobile browsers.",
  },

  {
    question:
      "Which image formats are supported?",
    answer:
      "Most image tools support JPG, JPEG, PNG, and WEBP formats.",
  },

  {
    question:
      "Which PDF tools are available?",
    answer:
      "We provide PDF conversion, PDF merging, PDF splitting, PDF compression, and PDF image conversion tools.",
  },

  {
    question:
      "Why is my upload failing?",
    answer:
      "File uploads may fail because of unsupported formats, browser limitations, network issues, or file size restrictions.",
  },

  {
    question:
      "Do I need to install software?",
    answer:
      "No. All tools work directly in your web browser.",
  },

  {
    question:
      "Can I use ToolsCenterHub for commercial work?",
    answer:
      "Yes. Businesses, freelancers, developers, marketers, and students can use our tools.",
  },

  {
    question:
      "How can I contact support?",
    answer:
      "Visit our Contact page and submit the contact form.",
  },
];