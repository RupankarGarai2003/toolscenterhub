"use client";

import { useState } from "react";
import Link from "next/link";
import { tools } from "@/lib/toolsList";
import "../components/Styles/page.css"
import CustomButton from "../components/tools/CustomButton";

import {
  Image,
  Crop,
  Scissors,
  Maximize,
  FileText,
  Split,
  FileDown,
  Unlock,
  Lock,
  CheckCircle,
  Binary,
  Key,
  FileCode,
  FileJson,
  FileType,
  QrCode,
  Text,
  Link as LinkIcon,
  Repeat,
  LucideIcon,
} from "lucide-react";

/* ICON MAP */
const iconMap: Record<string, LucideIcon> = {
  "image compressor": Image,
  "image converter": Repeat,
  "image cropper": Crop,
  "image resizer": Maximize,
  "background remover": Scissors,
  "jpg to png": Image,
  "png to jpg": Image,

  "pdf compressor": FileText,
  "pdf merger": FileText,
  "pdf splitter": Split,
  "pdf to word": FileDown,
  "pdf to jpg": FileDown,
  "pdf unlock": Unlock,
  "pdf protect": Lock,
  "jpg to pdf": FileText,
  "word to pdf": FileText,

  "json formatter": FileJson,
  "json validator": CheckCircle,
  "html minifier": FileCode,
  "css minifier": FileCode,
  "js minifier": FileCode,

  "base64 encoder": Binary,
  "base64 decoder": Binary,
  "url encoder": LinkIcon,
  "url decoder": LinkIcon,

  "password generator": Key,
  "qr code generator": QrCode,
  "word counter": Text,
};

function getCategory(name: string) {
  const n = name.toLowerCase();

  if (n.includes("image") || n.includes("jpg") || n.includes("png"))
    return "image";

  if (n.includes("pdf") || n.includes("word"))
    return "pdf";

  if (
    n.includes("json") ||
    n.includes("html") ||
    n.includes("css") ||
    n.includes("js")
  )
    return "dev";

  if (n.includes("to")) return "converter";

  return "tool";
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const userChoiceSlugs = [
    "image-compressor",
    "background-remover",
    "pdf-merger",
    "pdf-to-word",
    "qr-code-generator",
    "password-generator",
  ];

  const filteredTools =
    activeTab === "all"
      ? tools
      : activeTab === "choice"
        ? tools.filter((t) => userChoiceSlugs.includes(t.slug))
        : tools.filter((t) => getCategory(t.name) === activeTab);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Image", value: "image" },
    { label: "PDF", value: "pdf" },
    { label: "Dev", value: "dev" },
    { label: "Utility", value: "tool" },
    { label: "⭐ User’s Choice", value: "choice" },
  ];

  const toolColorMap = [
    { types: ["image"], color: "#facc15" },
    { types: ["pdf"], color: "#ef4444" },
    { types: ["word"], color: "#3b82f6" },
    { types: ["jpg"], color: "#a855f7" },
    { types: ["url"], color: "#22c55e" },
    { types: ["json"], color: "#c52274" },
    { types: ["png"], color: "#5a8ec6" },
    { types: ["html", "css", "js"], color: "#bd299f" },
    { types: ["base"], color: "#75d545" },
    { types: ["qr"], color: "#412d3c" },
  ];

  const getToolColor = (name: string) => {
    const n = name.toLowerCase();

    const match = toolColorMap.find(item =>
      item.types.some(type => n.startsWith(type))
    );

    return match ? match.color : "#6b7280";
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">
          All-in-One Free{" "}
          <span className="hero-gradient">Online Tools</span> 🚀
        </h1>

        <p className="hero-text">
          Image, PDF, developer & utility tools — fast, free and powerful.
        </p>
      </section>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`tab-btn ${activeTab === tab.value ? "tab-active" : ""
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="grid">
        {filteredTools.map((tool) => {
          const name = tool.name.toLowerCase();
          const Icon: LucideIcon = iconMap[name] || FileType;

          return (
            <Link key={tool.slug} href={`/tools/${tool.slug}`}>
              <div className="card">

                <div className="glass-icon">
                  <Icon
                    size={25}
                    strokeWidth={2.5}
                    color={getToolColor(tool.name)}
                  />
                </div>

                <h3 className="title">{tool.name}</h3>

                <p className="description">
                  {tool.description}
                </p>

                {/* <div className="card-btn">
                  <button>Explore →</button>
                </div> */}
                <div>
                  <CustomButton variant="card" btnSize="sm">
                    Explore →
                  </CustomButton>
                </div>
              </div>
            </Link>


          );
        })}
      </section>
      <section className="seo-section">
        <h2>
          Why Choose ToolsCenterHub?
        </h2>

        <p>
          ToolsCenterHub provides free
          online tools for image editing,
          PDF management, file conversion,
          developer utilities, and
          productivity tasks. Our tools
          work directly in your browser
          without requiring downloads,
          installation, or registration.
        </p>

        <p>
          Whether you need to resize
          images, compress files, merge
          PDFs, convert documents, format
          JSON, generate QR codes, or
          create secure passwords,
          ToolsCenterHub offers fast,
          secure, and easy-to-use
          solutions.
        </p>
      </section>

      <section className="seo-section">
        <h2>
          Popular Tool Categories
        </h2>

        <ul className="seo-list">
          <li>
            Image Tools – Resize,
            compress, crop, and convert
            images.
          </li>

          <li>
            PDF Tools – Merge, split,
            convert, and optimize PDF
            files.
          </li>

          <li>
            Developer Tools – JSON
            formatter, validator, Base64
            utilities, and code minifiers.
          </li>

          <li>
            Utility Tools – Password
            generator, QR code generator,
            word counter, and more.
          </li>
        </ul>
      </section>

      <section className="seo-section">
        <h2>
          Free Online Tools For Everyday
          Tasks
        </h2>

        <p>
          ToolsCenterHub is an all-in-one
          platform offering free online
          tools for students, developers,
          designers, marketers,
          businesses, and everyday users.
        </p>

        <p>
          Our collection includes image
          compressors, image resizers,
          PDF converters, PDF mergers,
          JSON formatters, URL encoders,
          Base64 tools, QR code
          generators, and many other
          utilities designed to save time
          and improve productivity.
        </p>

        <p>
          All tools are optimized for
          speed and simplicity, allowing
          users to complete tasks quickly
          from desktop and mobile
          devices.
        </p>
      </section>

      <section className="seo-section">
        <h2>
          Frequently Asked Questions
        </h2>

        <div className="faq-home">
          <h3>
            Are these tools free?
          </h3>

          <p>
            Yes. All tools on
            ToolsCenterHub are completely
            free to use.
          </p>

          <h3>
            Do I need an account?
          </h3>

          <p>
            No registration or login is
            required.
          </p>

          <h3>
            Is my data secure?
          </h3>

          <p>
            We prioritize privacy and do
            not permanently store user
            files.
          </p>
        </div>
      </section>
    </div>
  );
}