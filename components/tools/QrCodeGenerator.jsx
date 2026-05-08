"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

import {
  Globe,
  FileText,
  Mail,
  Phone,
  Wifi,
  Contact,
  Video,
  Download,
  Check,
  Copy,
  RotateCcw,
  Sparkles,
  Palette,
  QrCode,
} from "lucide-react";

export default function UltraQRGenerator() {
  const canvasRef = useRef(null);

  // =========================
  // STATES
  // =========================
  const [activeTab, setActiveTab] = useState("website");
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // DESIGN
  const [size, setSize] = useState(450);
  const [margin, setMargin] = useState(2);

  const [darkColor, setDarkColor] = useState("#111827");
  const [lightColor, setLightColor] = useState("#ffffff");

  // EXPORT
  const [downloadFormat, setDownloadFormat] = useState("png");
  const [errorLevel, setErrorLevel] = useState("H");

  // EFFECTS
  const [gradient, setGradient] = useState(false);
  const [gradientFrom, setGradientFrom] = useState("#7c3aed");
  const [gradientTo, setGradientTo] = useState("#2563eb");

  // FRAME
  const [frameStyle, setFrameStyle] = useState("modern");

  // =========================
  // TABS
  // =========================
  const tabs = [
    {
      id: "website",
      label: "Website",
      icon: <Globe size={18} />,
      placeholder: "https://example.com",
    },
    {
      id: "text",
      label: "Text",
      icon: <FileText size={18} />,
      placeholder: "Enter text...",
    },
    {
      id: "email",
      label: "Email",
      icon: <Mail size={18} />,
      placeholder: "mailto:hello@example.com",
    },
    {
      id: "phone",
      label: "Phone",
      icon: <Phone size={18} />,
      placeholder: "tel:+1234567890",
    },
    {
      id: "wifi",
      label: "WiFi",
      icon: <Wifi size={18} />,
      placeholder: "WIFI:T:WPA;S:MyWifi;P:12345678;;",
    },
    {
      id: "vcard",
      label: "vCard",
      icon: <Contact size={18} />,
      placeholder: "BEGIN:VCARD...",
    },
    {
      id: "video",
      label: "Video",
      icon: <Video size={18} />,
      placeholder: "https://youtube.com/",
    },
  ];

  // =========================
  // GENERATE QR
  // =========================
  const generateQR = async () => {
    if (!text) return;

    try {
      setLoading(true);

      const canvas = canvasRef.current;

      if (!canvas) return;

      await QRCode.toCanvas(canvas, text, {
        width: size,
        margin,
        errorCorrectionLevel: errorLevel,
        color: {
          dark: darkColor,
          light: lightColor,
        },
      });

      const ctx = canvas.getContext("2d");

      // =========================
      // GRADIENT EFFECT
      // =========================
      if (gradient && ctx) {
        const img = new Image();

        img.src = canvas.toDataURL();

        await new Promise((resolve) => {
          img.onload = resolve;
        });

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const grad = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );

        grad.addColorStop(0, gradientFrom);
        grad.addColorStop(1, gradientTo);

        ctx.fillStyle = lightColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0);

        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "source-over";
      }

      // EXPORT
      const finalQR =
        downloadFormat.toLowerCase() === "jpeg"
          ? canvas.toDataURL("image/jpeg")
          : canvas.toDataURL("image/png");

      setQr(finalQR);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // AUTO GENERATE
  // =========================
  useEffect(() => {
    if (text) {
      generateQR();
    }
  }, [
    text,
    darkColor,
    lightColor,
    size,
    margin,
    gradient,
    gradientFrom,
    gradientTo,
    errorLevel,
  ]);

  // =========================
  // DOWNLOAD
  // =========================
  const downloadQR = () => {
    if (!qr) return;

    const a = document.createElement("a");

    a.href = qr;
    a.download = `advanced-qr.${downloadFormat}`;

    a.click();
  };

  // =========================
  // COPY
  // =========================
  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  // =========================
  // RESET
  // =========================
  const resetAll = () => {
    setText("");
    setQr("");

    setDarkColor("#111827");
    setLightColor("#ffffff");

    setGradient(false);

    setGradientFrom("#7c3aed");
    setGradientTo("#2563eb");

    setFrameStyle("modern");
  };

  // =========================
  // FRAME STYLES
  // =========================
  const frameStyles = {
    modern:
      "rounded-[28px] shadow-xl border border-gray-200",

    glass:
      "rounded-[28px] backdrop-blur-xl bg-white/60 border border-white shadow-xl",

    neon:
      "rounded-[28px] border-[5px] border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.5)]",

    dark:
      "rounded-[28px] bg-black p-4",

    clean:
      "rounded-[20px] border-2 border-dashed border-gray-300",
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-4 md:p-6">

      {/* WRAPPER */}
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
            Advanced QR Code Generator
          </h1>

          <p className="text-gray-500 text-sm md:text-lg">
            Create stunning QR codes with gradients,
            custom styles & premium design.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-5">

          {/* LEFT PANEL */}
          <div className="bg-white rounded-[28px] shadow-lg p-4 md:p-6">

            {/* TABS */}
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-3 mb-6">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setText("");
                  }}
                  className={`p-3 rounded-2xl border transition-all flex flex-col items-center gap-2
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow"
                        : "hover:bg-gray-50"
                    }`}
                >
                  {tab.icon}

                  <span className="text-xs md:text-sm font-semibold">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

            {/* INPUT */}
            <div className="mb-6">

              <label className="font-bold text-lg mb-3 block">
                QR Content
              </label>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={
                  tabs.find((t) => t.id === activeTab)?.placeholder
                }
                className="w-full h-32 border-2 border-gray-200 rounded-2xl p-4 outline-none focus:ring-4 focus:ring-purple-100"
              />
            </div>

            {/* SETTINGS */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* QR COLOR */}
              <div className="bg-gray-50 rounded-2xl p-4">

                <div className="flex items-center gap-2 mb-3">
                  <Palette size={16} />

                  <h3 className="font-semibold text-sm">
                    QR Color
                  </h3>
                </div>

                <input
                  type="color"
                  value={darkColor}
                  onChange={(e) =>
                    setDarkColor(e.target.value)
                  }
                  className="w-full h-12 rounded-xl"
                />
              </div>

              {/* BG */}
              <div className="bg-gray-50 rounded-2xl p-4">

                <div className="flex items-center gap-2 mb-3">
                  <Palette size={16} />

                  <h3 className="font-semibold text-sm">
                    Background
                  </h3>
                </div>

                <input
                  type="color"
                  value={lightColor}
                  onChange={(e) =>
                    setLightColor(e.target.value)
                  }
                  className="w-full h-12 rounded-xl"
                />
              </div>

              {/* SIZE */}
              <div className="bg-gray-50 rounded-2xl p-4">

                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-sm">
                    Size
                  </h3>

                  <span className="text-sm font-bold">
                    {size}px
                  </span>
                </div>

                <input
                  type="range"
                  min={200}
                  max={1000}
                  value={size}
                  onChange={(e) =>
                    setSize(Number(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              {/* MARGIN */}
              <div className="bg-gray-50 rounded-2xl p-4">

                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-sm">
                    Margin
                  </h3>

                  <span className="text-sm font-bold">
                    {margin}
                  </span>
                </div>

                <input
                  type="range"
                  min={0}
                  max={10}
                  value={margin}
                  onChange={(e) =>
                    setMargin(Number(e.target.value))
                  }
                  className="w-full"
                />
              </div>
            </div>

            {/* FRAME STYLES */}
            <div className="mt-6">

              <h2 className="font-bold text-xl mb-4">
                Frame Styles
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">

                {Object.keys(frameStyles).map((style) => (
                  <button
                    key={style}
                    onClick={() => setFrameStyle(style)}
                    className={`h-16 rounded-2xl border-2 text-sm font-bold capitalize transition
                      ${
                        frameStyle === style
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200"
                      }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* GRADIENT */}
            <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <Sparkles size={18} />

                  <h2 className="font-bold">
                    Gradient Effect
                  </h2>
                </div>

                <input
                  type="checkbox"
                  checked={gradient}
                  onChange={() =>
                    setGradient(!gradient)
                  }
                  className="w-5 h-5"
                />
              </div>

              {gradient && (
                <div className="grid md:grid-cols-2 gap-4 mt-4">

                  <div>
                    <label className="text-sm font-medium block mb-2">
                      From
                    </label>

                    <input
                      type="color"
                      value={gradientFrom}
                      onChange={(e) =>
                        setGradientFrom(e.target.value)
                      }
                      className="w-full h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">
                      To
                    </label>

                    <input
                      type="color"
                      value={gradientTo}
                      onChange={(e) =>
                        setGradientTo(e.target.value)
                      }
                      className="w-full h-12 rounded-xl"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* EXPORT SETTINGS */}
            <div className="bg-gray-50 rounded-2xl p-4 mt-6">
              <h3 className="font-bold text-base mb-4">
                Export Settings
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {/* FORMAT */}
                <div>
                  <label className="text-sm font-medium block mb-2">
                    Format
                  </label>

                  <select
                    value={downloadFormat}
                    onChange={(e) =>
                      setDownloadFormat(e.target.value)
                    }
                    className="w-full border rounded-xl px-3 py-3 bg-white text-sm"
                  >
                    <option value="png">PNG</option>
                    <option value="jpeg">JPEG</option>
                  </select>
                </div>

                {/* ERROR */}
                <div>
                  <label className="text-sm font-medium block mb-2">
                    Error Correction
                  </label>

                  <select
                    value={errorLevel}
                    onChange={(e) =>
                      setErrorLevel(e.target.value)
                    }
                    className="w-full border rounded-xl px-3 py-3 bg-white text-sm"
                  >
                    <option value="L">Low</option>
                    <option value="M">Medium</option>
                    <option value="Q">Quartile</option>
                    <option value="H">High</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap items-center gap-3 mt-6">

              <button
                onClick={generateQR}
                disabled={loading}
                className="h-11 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow hover:opacity-90 transition"
              >
                {loading ? "Generating..." : "Generate QR"}
              </button>

              <button
                onClick={copyText}
                className="h-11 px-5 rounded-xl bg-green-600 text-white font-semibold text-sm flex items-center gap-2 hover:bg-green-700 transition"
              >
                {copied ? (
                  <Check size={16} />
                ) : (
                  <Copy size={16} />
                )}

                {copied ? "Copied" : "Copy"}
              </button>

              <button
                onClick={resetAll}
                className="h-11 px-5 rounded-xl border border-gray-300 bg-white text-sm font-semibold flex items-center gap-2 hover:bg-gray-50 transition"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white rounded-[28px] shadow-lg p-5 h-fit sticky top-5">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center">
                <QrCode size={24} />
              </div>

              <div>
                <h2 className="font-black text-xl">
                  QR Preview
                </h2>

                <p className="text-sm text-gray-500">
                  Live generated preview
                </p>
              </div>
            </div>

            {/* QR CARD */}
            <div
              className={`bg-white p-5 flex justify-center items-center transition-all ${frameStyles[frameStyle]}`}
            >
              {qr ? (
                <img
                  src={qr}
                  alt="QR"
                  className="w-full max-w-[280px]"
                />
              ) : (
                <div className="w-[280px] h-[280px] rounded-3xl bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                  <QrCode size={60} />

                  <p className="mt-4 font-semibold">
                    QR Preview
                  </p>
                </div>
              )}
            </div>

            {/* DOWNLOAD */}
            <button
              onClick={downloadQR}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl py-4 text-lg font-bold flex items-center justify-center gap-3 shadow-lg hover:opacity-90 transition"
            >
              <Download size={22} />

              Download QR
            </button>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 mt-5">

              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-black">
                  {size}
                </h3>

                <p className="text-xs text-gray-500">
                  Resolution
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 text-center">
                <h3 className="text-2xl font-black">
                  {errorLevel}
                </h3>

                <p className="text-xs text-gray-500">
                  Error Level
                </p>
              </div>
            </div>

            <canvas
              ref={canvasRef}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}