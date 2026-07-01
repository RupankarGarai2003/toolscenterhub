"use client";

import { useState } from "react";
import { RotateCcw, Clipboard, Check } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function PercentageCalculator() {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const calculatePercentage = () => {
    if (!percentage || !number) {
      setResult("");
      return;
    }

    const value =
      (parseFloat(percentage) * parseFloat(number)) / 100;

    setResult(value.toFixed(2));
  };

  const copyToClipboard = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(result);

    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const resetFields = () => {
    setPercentage("");
    setNumber("");
    setResult("");
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          {/* Percentage */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Percentage (%)
            </label>

            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Enter percentage"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Number
            </label>

            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter number"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Result */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Result
            </label>

            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
              {result ? (
                <p className="text-3xl font-bold text-blue-600">
                  {result}
                </p>
              ) : (
                <p className="text-gray-400">
                  Result will appear here...
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={calculatePercentage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl"
            >
              Calculate
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!result}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={resetFields}
              className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </button>

          </div>

          <div className="mt-5 text-center">
            <span className="inline-block text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
              Example: 20% of 500 = 100
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