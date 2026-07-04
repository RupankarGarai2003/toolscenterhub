"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, MoreVertical } from "lucide-react";
import "../Styles/Header.css";
import { tools } from "../../lib/toolsList";

export default function Header() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  /* HOVER HANDLERS (DESKTOP) */
  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setActive(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 150);
  };

  /* CLICK HANDLER (MOBILE) */
  const toggle = (menu) => {
    setActive(active === menu ? null : menu);
  };

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);
  }, []);

  /* FILTER */
  const getTools = (category) => {
    return tools.filter((t) => {
      if (t.category) return t.category === category;

      // Fallback for tools without a category
      return t.slug.includes(category);
    });
  };
  const menus = [
    { name: "IMAGE", key: "image" },
    { name: "PDF", key: "pdf" },
    { name: "DEV", key: "json" },
    { name: "UTILITY", key: "password" },
    { name: "CONVERTERS", key: "to" },
    { name: "CALCULATORS", key: "calculator" },
  ];

  return (
    <header className="header">
      <div className="header-container" ref={ref}>

        {/* LOGO */}
        <Link href="/" className="logo">
          ToolsCenterHub
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav desktop-nav">
          {menus.map((m) => (
            <div
              key={m.key}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(m.key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className={active === m.key ? "active" : ""}>
                {m.name}
                <ChevronDown size={14} />
                <span className="underline"></span>
              </button>

              {active === m.key && (
                <div className="dropdown-grid">
                  {getTools(m.key).slice(0, 6).map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="dropdown-card"
                    >
                      <div className="dot"></div>

                      <div>
                        <p>{tool.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/blog" className="nav-item">
            <button>
              Blogs
              <span className="underline"></span>
            </button>
          </Link>
          {/* TRENDING */}
          {/* <div
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("trending")}
            onMouseLeave={handleMouseLeave}
          >

            <button className={active === "trending" ? "active" : ""}>
              🔥 Trending
              <ChevronDown size={14} />
              <span className="underline"></span>
            </button>

            {active === "trending" && (
              <div className="dropdown-grid">
                {tools.slice(0, 6).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="dropdown-card"
                  >
                    <div className="dot purple"></div>

                    <div>
                      <p>{tool.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div> */}
        </nav>

        {/* 3 DOT MENU (MOBILE) */}
        <div className="menu-wrapper">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-btn"
          >
            <MoreVertical size={20} />
          </button>

          {menuOpen && (
            <div className="menu-dropdown">

              {/* STATIC LINKS ONLY */}
              <Link href="/blog">Blogs</Link>
              <Link href="/about-us">About</Link>
              <Link href="/privacy-policy">Policy</Link>
              <Link href="/contact-us">Contact</Link>
              <Link href="/help">Help</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/disclaimer">Disclaimer</Link>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}