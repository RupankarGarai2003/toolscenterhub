"use client";

import { useState } from "react";
import {
  Clipboard,
  Check,
  Download,
  RotateCcw,
} from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function HTMLMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  // MINIFY HTML
  const minifyHTML = () => {
    if (!input.trim()) return;

    try {
      setError("");

      let result = input;

      // Remove comments
      result = result.replace(/<!--[\s\S]*?-->/g, "");

      // Remove spaces between tags
      result = result.replace(/>\s+</g, "><");

      // Collapse multiple spaces
      result = result.replace(/\s{2,}/g, " ");

      // Remove line breaks
      result = result.replace(/\n/g, "");

      // Trim
      result = result.trim();

      setOutput(result);
    } catch (err) {
      console.error(err);

      setError("Invalid HTML");
      setOutput("");
    }
  };

  // COPY
  const copyToClipboard = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  // DOWNLOAD
  const downloadFile = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "text/html",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "minified.html";
    a.click();

    URL.revokeObjectURL(url);
  };

  // RESET
  const resetFields = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  // STATS
  const originalSize = new Blob([input]).size;
  const minifiedSize = new Blob([output]).size;

  const saved =
    originalSize > 0
      ? (((originalSize - minifiedSize) / originalSize) * 100).toFixed(1)
      : 0;

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          {/* Input */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-800">
                HTML Input
              </label>

              <span className="text-xs text-gray-500">
                {originalSize} bytes
              </span>
            </div>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your HTML code here..."
              className="w-full h-56 rounded-xl border border-gray-300 p-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none font-mono"
            />
          </div>

          {/* Output */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-800">
                Minified Output
              </label>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>{minifiedSize} bytes</span>

                {output && (
                  <span className="text-green-600 font-medium">
                    ↓ {saved}% smaller
                  </span>
                )}
              </div>
            </div>

            <textarea
              value={output}
              readOnly
              placeholder="Minified HTML will appear here..."
              className="w-full h-56 rounded-xl border border-gray-300 bg-gray-50 p-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none resize-none font-mono"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-5 text-center">
              {error}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={minifyHTML}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition"
            >
              Minify HTML
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!output}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={downloadFile}
              disabled={!output}
              className="bg-violet-500 hover:bg-violet-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </button>

            <button
              onClick={resetFields}
              className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>

          {/* Footer */}
          <div className="mt-5 text-center">
            <span className="inline-block text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
              🔒 Runs fully in your browser. No server required.
            </span>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        <RelatedTools />
        <About />
        <HowToUse />
        <Features />
        <Benefits />
        <FAQ />
      </div>
    </>
  );
}