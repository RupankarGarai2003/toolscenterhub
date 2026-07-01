"use client";

import { useState } from "react";
import { RotateCcw, Clipboard, Check } from "lucide-react";

import About from "@/components/tool-content/About";
import HowToUse from "@/components/tool-content/HowToUse";
import Features from "@/components/tool-content/Features";
import Benefits from "@/components/tool-content/Benefits";
import FAQ from "@/components/tool-content/FAQ";
import RelatedTools from "@/components/tool-content/RelatedTools";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      setResult(null);
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += previousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({
      years,
      months,
      days,
    });
  };

  const copyToClipboard = async () => {
    if (!result) return;

    const text = `${result.years} Years, ${result.months} Months, ${result.days} Days`;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const resetFields = () => {
    setDob("");
    setResult(null);
  };

  return (
    <>
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm">

          {/* Date of Birth */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Date of Birth
            </label>

            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Result */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Age
            </label>

            <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">

              {result ? (
                <>
                  <p className="text-3xl font-bold text-blue-600">
                    {result.years} Years
                  </p>

                  <p className="mt-2 text-gray-700">
                    {result.months} Months
                  </p>

                  <p className="text-gray-700">
                    {result.days} Days
                  </p>
                </>
              ) : (
                <p className="text-gray-400">
                  Your age will appear here...
                </p>
              )}

            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">

            <button
              onClick={calculateAge}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition"
            >
              Calculate Age
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!result}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              {copied ? <Check size={16} /> : <Clipboard size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>

            <button
              onClick={resetFields}
              className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium transition flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset
            </button>

          </div>

          <div className="mt-5 text-center">
            <span className="inline-block text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg">
              🎂 Age is calculated based on your date of birth and today's date.
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