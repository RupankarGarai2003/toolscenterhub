"use client";

import { useState } from "react";
import {
  Clipboard,
  Check,
  RotateCcw,
  Download,
} from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function URLDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const decodeURL = () => {
    try {
      const decoded = decodeURIComponent(input);

      setOutput(decoded);
      setError("");
    } catch (err) {
      console.error(err);

      setError("Invalid encoded URL");
      setOutput("");
    }
  };

  const copyToClipboard = async () => {
    if (!output) return;

    await navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const downloadFile = () => {
    if (!output) return;

    const blob = new Blob([output], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "decoded-url.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const resetFields = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">
          {/* Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Paste Encoded URL
            </label>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello%2520world"
              className="w-full h-36 rounded-xl border border-gray-300 p-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
            />
          </div>

          {/* Output */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Decoded Result
            </label>

            <textarea
              value={output}
              readOnly
              placeholder="Decoded URL will appear here..."
              className="w-full h-36 rounded-xl border border-gray-300 bg-gray-50 p-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none resize-none"
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
              onClick={decodeURL}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition"
            >
              Decode URL
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
              🔒 Decoding happens locally in your browser.
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