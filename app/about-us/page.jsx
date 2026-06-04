"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Rocket,
  Image,
  FileText,
  Code,
  Users,
  Lock,
  TrendingUp,
} from "lucide-react";

import styles from "./AboutUs.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={styles.heroTitle}
        >
          About ToolsCenterHub
        </motion.h1>

        <p className={styles.heroSubtitle}>
          Free Online Tools for Images,
          PDFs, Developers &
          Productivity
        </p>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          What is ToolsCenterHub?
        </h2>

        <p className={styles.paragraph}>
          ToolsCenterHub is a free online
          platform that provides useful
          browser-based tools for image
          editing, PDF management,
          developer workflows, and
          productivity tasks. Our goal is
          to help users complete common
          digital tasks quickly and
          efficiently without installing
          software.
        </p>

        <p className={styles.paragraph}>
          Whether you need to resize
          images, compress files, convert
          PDFs, merge documents, generate
          QR codes, create strong
          passwords, format JSON, or use
          developer utilities,
          ToolsCenterHub offers simple
          solutions that work instantly in
          your browser.
        </p>

        <p className={styles.paragraph}>
          We focus on performance,
          usability, accessibility and
          privacy so that users can
          complete their work faster
          without unnecessary complexity.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Why Choose ToolsCenterHub?
        </h2>

        <div className={styles.cardGrid}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className={styles.featureCard}
            >
              <item.icon
                size={34}
                className={styles.icon}
              />

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Explore Our Categories
        </h2>

        <div className={styles.cardGrid}>
          {categories.map(
            (item, index) => (
              <div
                key={index}
                className={
                  styles.featureCard
                }
              >
                <item.icon
                  size={34}
                  className={styles.icon}
                />

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* WHO USES */}
      <section className={styles.section}>
        <div className={styles.titleRow}>
          <Users
            className={styles.icon}
          />

          <h2
            className={
              styles.sectionTitle
            }
          >
            Who Uses
            ToolsCenterHub?
          </h2>
        </div>

        <p className={styles.paragraph}>
          ToolsCenterHub is used by
          students, developers,
          designers, bloggers,
          marketers, freelancers,
          startups and businesses.
        </p>

        <p className={styles.paragraph}>
          From resizing images for
          social media to managing PDF
          documents and formatting
          code, our tools help users
          save time every day.
        </p>
      </section>

      {/* PRIVACY */}
      <section className={styles.section}>
        <div className={styles.titleRow}>
          <Lock
            className={styles.icon}
          />

          <h2
            className={
              styles.sectionTitle
            }
          >
            Privacy & Security
          </h2>
        </div>

        <p className={styles.paragraph}>
          User privacy is one of our
          top priorities. Many of our
          tools process data directly
          in the browser, reducing
          unnecessary file transfers
          and helping users maintain
          control over their content.
        </p>

        <p className={styles.paragraph}>
          We continuously improve our
          platform to ensure a safe,
          reliable and trustworthy
          experience.
        </p>
      </section>

      {/* POPULAR TOOLS */}
      <section className={styles.section}>
        <div className={styles.titleRow}>
          <TrendingUp
            className={styles.icon}
          />

          <h2
            className={
              styles.sectionTitle
            }
          >
            Popular Tools
          </h2>
        </div>

        <div className={styles.toolGrid}>
          {popularTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className={
                styles.toolCard
              }
            >
              <h3>{tool.name}</h3>

              <p>
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Our Mission
        </h2>

        <p className={styles.paragraph}>
          We believe online tools
          should be free, fast and
          accessible to everyone.
          ToolsCenterHub was created to
          provide practical utilities
          that help users complete
          digital tasks without
          software installations,
          subscriptions or complex
          workflows.
        </p>

        <p className={styles.paragraph}>
          Our mission is to continue
          building reliable tools that
          improve productivity and
          simplify everyday work.
        </p>
      </section>

      {/* FUTURE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Looking Ahead
        </h2>

        <p className={styles.paragraph}>
          We are constantly expanding
          our collection of image
          tools, PDF tools, developer
          utilities and productivity
          solutions. Future updates
          will focus on performance,
          usability and new tool
          categories.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
        >
          <Link
            href="/"
            className={styles.ctaBtn}
          >
            <Rocket size={18} />
            Explore Tools
          </Link>
        </motion.div>

        <p className={styles.ctaText}>
          Free • Fast • No Signup
          Required
        </p>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Use tools instantly without downloads or complicated setup.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Focused",
    desc: "Secure and reliable tools designed with user privacy in mind.",
  },
  {
    icon: Sparkles,
    title: "Easy To Use",
    desc: "Simple interfaces that work for beginners and professionals.",
  },
];

const categories = [
  {
    icon: Image,
    title: "Image Tools",
    desc: "Resize, compress, crop and convert images online.",
  },
  {
    icon: FileText,
    title: "PDF Tools",
    desc: "Convert, merge, split and manage PDF documents.",
  },
  {
    icon: Code,
    title: "Developer Tools",
    desc: "JSON utilities, Base64 tools, minifiers and more.",
  },
];

const popularTools = [
  {
    name: "Image Resizer",
    slug: "image-resizer",
    description:
      "Resize images online quickly and easily.",
  },
  {
    name: "Image Compressor",
    slug: "image-compressor",
    description:
      "Reduce image size without losing quality.",
  },
  {
    name: "PDF to Word",
    slug: "pdf-to-word",
    description:
      "Convert PDF files into editable Word documents.",
  },
  {
    name: "PDF Merger",
    slug: "pdf-merger",
    description:
      "Combine multiple PDF files into one document.",
  },
];