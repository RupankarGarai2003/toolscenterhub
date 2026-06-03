"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Rocket,
  Image,
  FileText,
  Code,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-6 py-20">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          About ToolsCenterHub
        </motion.h1>

        <p className="text-gray-600 mt-6 text-lg md:text-xl">
          Free Online Tools for Images, PDFs, Developers & Productivity
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-16">
        <p className="text-lg leading-8 text-gray-700">
          ToolsCenterHub is a free online platform that provides
          powerful tools for image editing, PDF management,
          developer workflows, and everyday productivity tasks.
          Our mission is to help users complete common digital
          tasks quickly, securely, and without installing software.
        </p>

        <p className="text-lg leading-8 text-gray-700 mt-6">
          Whether you need to resize images, compress files,
          convert PDFs, merge documents, generate QR codes,
          create strong passwords, format JSON, or perform
          other online tasks, ToolsCenterHub offers simple
          browser-based solutions that work instantly.
        </p>

        <p className="text-lg leading-8 text-gray-700 mt-6">
          We focus on speed, simplicity, and privacy.
          Our tools are designed to work across desktop,
          tablet, and mobile devices, helping users save
          time without unnecessary complexity.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Why Choose ToolsCenterHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <item.icon
                size={32}
                className="mx-auto text-indigo-600 mb-4"
              />

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Explore Our Tool Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <item.icon
                size={30}
                className="mx-auto text-purple-600 mb-4"
              />

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Mission
        </h2>

        <p className="text-lg leading-8 text-gray-700 mt-8">
          We believe online tools should be accessible,
          fast, and easy to use. ToolsCenterHub was
          created to provide free utilities that help
          students, developers, businesses, content
          creators, and everyday users complete tasks
          efficiently without downloading software or
          creating accounts.
        </p>

        <p className="text-lg leading-8 text-gray-700 mt-6">
          We continuously improve our platform by adding
          new tools, improving performance, and creating
          a better experience for our users.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center mt-24">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg"
        >
          <Rocket size={18} />
          Explore Tools
        </motion.a>

        <p className="text-gray-500 mt-4 text-sm">
          Free • Fast • No Signup Required
        </p>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Use tools instantly without downloads or complex setup.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Focused",
    desc: "We prioritize secure processing and user privacy.",
  },
  {
    icon: Sparkles,
    title: "Simple Experience",
    desc: "Clean and easy-to-use tools for everyone.",
  },
];

const categories = [
  {
    icon: Image,
    title: "Image Tools",
    desc: "Resize, compress, crop, and convert images online.",
  },
  {
    icon: FileText,
    title: "PDF Tools",
    desc: "Convert, merge, split, and manage PDF documents.",
  },
  {
    icon: Code,
    title: "Developer Tools",
    desc: "JSON formatting, Base64 utilities, code minifiers and more.",
  },
];