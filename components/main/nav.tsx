"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-bold text-xl text-zinc-900 tracking-tight">
          Ditto
        </span>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
          <a href="#problem" className="hover:text-zinc-900 transition-colors">
            문제
          </a>
          <a href="#solution" className="hover:text-zinc-900 transition-colors">
            솔루션
          </a>
          <a href="#features" className="hover:text-zinc-900 transition-colors">
            기능
          </a>
          <a href="#how-it-works" className="hover:text-zinc-900 transition-colors">
            사용법
          </a>
        </div>

        {/* CTA */}
        <a
          href="#cta"
          className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          얼리버드 신청
        </a>
      </div>
    </nav>
  );
}
