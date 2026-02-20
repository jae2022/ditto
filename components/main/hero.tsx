"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { EmailForm } from "@/components/main/email-form";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; r: number; vx: number; vy: number; alpha: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: 1 + Math.random() * 11, // 1–12px radius
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          alpha: 0.06 + Math.random() * 0.16, // 큰 도트일수록 자연스럽게 낮은 opacity
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`; // violet-500
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = canvas.width + p.r;
        if (p.x > canvas.width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = canvas.height + p.r;
        if (p.y > canvas.height + p.r) p.y = -p.r;
      }
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", resize);
    init();
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// Fixed positions — avoids hydration mismatch from random values
const DOTS = [
  { w: 420, h: 420, left: "-8%", top: "-6%", dx: [0, 55, -15, 40, 0], dy: [0, 45, 75, 25, 0], dur: 24, del: 0 },
  { w: 280, h: 280, left: "68%", top: "2%", dx: [0, -45, 20, -32, 0], dy: [0, 55, 28, 42, 0], dur: 30, del: 6 },
  { w: 240, h: 240, left: "58%", top: "55%", dx: [0, 32, -22, 18, 0], dy: [0, -45, -22, -32, 0], dur: 22, del: 4 },
  { w: 200, h: 200, left: "8%", top: "65%", dx: [0, -28, 38, -12, 0], dy: [0, -32, -18, -38, 0], dur: 28, del: 9 },
  { w: 170, h: 170, left: "40%", top: "30%", dx: [0, 22, -32, 18, 0], dy: [0, -28, 32, -18, 0], dur: 20, del: 3 },
];

function CharacterMockup() {
  const keyRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  return (
    <div className="relative w-[300px]">
      {/* Phone shell — identical to PhoneMockup */}
      <div className="relative rounded-[44px] border-[7px] border-zinc-800 bg-zinc-800 shadow-2xl">
        {/* Side buttons */}
        <div className="absolute -left-[9px] top-[80px] w-[3px] h-7 bg-zinc-700 rounded-l-full" />
        <div className="absolute -left-[9px] top-[120px] w-[3px] h-10 bg-zinc-700 rounded-l-full" />
        <div className="absolute -left-[9px] top-[172px] w-[3px] h-10 bg-zinc-700 rounded-l-full" />
        <div className="absolute -right-[9px] top-[120px] w-[3px] h-14 bg-zinc-700 rounded-r-full" />

        {/* Screen */}
        <div className="rounded-[38px] overflow-hidden bg-white h-[570px] flex flex-col">
          {/* Status bar */}
          <div className="relative bg-white h-9 flex items-center px-5">
            <span className="text-[10px] font-semibold text-zinc-900">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-[7px] w-[72px] h-[22px] bg-zinc-900 rounded-full" />
            <div className="ml-auto flex items-center gap-1">
              <svg className="w-3.5 h-2.5 text-zinc-900" viewBox="0 0 17 12" fill="currentColor">
                <rect x="0" y="6" width="3" height="6" rx="0.8" opacity="0.4" />
                <rect x="4.5" y="4" width="3" height="8" rx="0.8" opacity="0.6" />
                <rect x="9" y="2" width="3" height="10" rx="0.8" opacity="0.8" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.8" />
              </svg>
              <svg className="w-5 h-3 text-zinc-900" viewBox="0 0 25 12" fill="none">
                <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
                <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor" />
                <path d="M23 4v4a2 2 0 000-4z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          {/* App nav */}
          <div className="border-b border-zinc-100 px-4 h-9 flex items-center gap-2">
            <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-bold text-zinc-900">캐릭터 만들기</span>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 flex-1">
            {/* Description input */}
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-violet-500 uppercase tracking-wide mb-1.5">캐릭터 묘사</p>
              <p className="text-xs text-zinc-700 leading-relaxed">
                따뜻한 느낌의 단발머리 여성, 카페를 좋아하는 20대
                <span className="inline-block w-px h-[11px] bg-violet-500 align-middle ml-0.5 animate-pulse" />
              </p>
            </div>

            {/* Generated character result */}
            <div className="bg-white rounded-xl border border-zinc-100 shadow-sm p-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-violet-200">
                  <Image src="/images/단발머리_여성.png" alt="생성된 캐릭터" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 mb-0.5">생성 완료 ✨</p>
                  <p className="text-sm font-bold text-zinc-900">나만의 캐릭터</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["#따뜻한스타일", "#단발머리", "#여성"].map((tag) => (
                  <span key={tag} className="text-[10px] bg-violet-50 text-violet-600 border border-violet-200 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* iPhone keyboard */}
          <div className="bg-[#d1d5db] px-2 pt-2 pb-1 space-y-[3px]">
            {keyRows.map((row, ri) => (
              <div key={ri} className="flex justify-center gap-[3px]">
                {ri === 2 && (
                  <div className="w-[34px] h-[34px] bg-zinc-400 rounded-lg flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                    <span className="text-sm text-zinc-700">⇧</span>
                  </div>
                )}
                {row.map((key) => (
                  <div key={key} className="w-[23px] h-[34px] bg-white rounded-lg flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                    <span className="text-[11px] text-zinc-800">{key}</span>
                  </div>
                ))}
                {ri === 2 && (
                  <div className="w-[34px] h-[34px] bg-zinc-400 rounded-lg flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                    <span className="text-sm text-zinc-700">⌫</span>
                  </div>
                )}
              </div>
            ))}
            {/* Space bar row */}
            <div className="flex justify-center gap-[3px]">
              <div className="w-[34px] h-[34px] bg-zinc-400 rounded-lg flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                <span className="text-[10px] text-zinc-700 font-medium">123</span>
              </div>
              <div className="flex-1 h-[34px] bg-white rounded-lg flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                <span className="text-xs text-zinc-400">space</span>
              </div>
              <div className="w-[44px] h-[34px] bg-zinc-400 rounded-lg flex items-center justify-center shadow-[0_1px_0_rgba(0,0,0,0.25)]">
                <span className="text-[10px] text-zinc-700 font-medium">return</span>
              </div>
            </div>
            {/* Home indicator */}
            <div className="py-1 flex justify-center">
              <div className="w-24 h-1 bg-zinc-900 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const posts = [
    {
      avatarSrc: "/images/오피스여성_수영.png",
      handle: "@office.ditto",
      time: "방금",
      caption: "오늘도 퇴근 후 오운완, 부끄러우니까 디토에 슬쩍...",
      likes: 84,
      comments: 12,
      imageSrc: "/images/오피스여성_4.png",
    },
    {
      avatarSrc: "/images/공대남성_프사.png",
      handle: "@vibe.ditto",
      time: "3분 전",
      caption: "사이드공부로 하고 있는 바이브 코딩, 혹시 같이 할 사람?",
      likes: 31,
      comments: 8,
      imageSrc: "/images/공대남성_2.png",
    },
  ];

  return (
    <div className="relative w-[300px]">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-violet-200/20 blur-3xl rounded-full pointer-events-none" />

      {/* Phone shell */}
      <div className="relative rounded-[44px] border-[7px] border-zinc-800 bg-zinc-800 shadow-2xl">
        {/* Side buttons */}
        <div className="absolute -left-[9px] top-[80px] w-[3px] h-7 bg-zinc-700 rounded-l-full" />
        <div className="absolute -left-[9px] top-[120px] w-[3px] h-10 bg-zinc-700 rounded-l-full" />
        <div className="absolute -left-[9px] top-[172px] w-[3px] h-10 bg-zinc-700 rounded-l-full" />
        <div className="absolute -right-[9px] top-[120px] w-[3px] h-14 bg-zinc-700 rounded-r-full" />

        {/* Screen — fixed height clips second post */}
        <div className="rounded-[38px] overflow-hidden bg-white h-[570px]">
          {/* Status bar */}
          <div className="relative bg-white h-9 flex items-center px-5">
            <span className="text-[10px] font-semibold text-zinc-900">9:41</span>
            {/* Dynamic island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[7px] w-[72px] h-[22px] bg-zinc-900 rounded-full" />
            <div className="ml-auto flex items-center gap-1">
              {/* Signal bars */}
              <svg className="w-3.5 h-2.5 text-zinc-900" viewBox="0 0 17 12" fill="currentColor">
                <rect x="0" y="6" width="3" height="6" rx="0.8" opacity="0.4" />
                <rect x="4.5" y="4" width="3" height="8" rx="0.8" opacity="0.6" />
                <rect x="9" y="2" width="3" height="10" rx="0.8" opacity="0.8" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.8" />
              </svg>
              {/* Battery */}
              <svg className="w-5 h-3 text-zinc-900" viewBox="0 0 25 12" fill="none">
                <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
                <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor" />
                <path d="M23 4v4a2 2 0 000-4z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          {/* App nav */}
          <div className="border-b border-zinc-100 px-4 h-9 flex items-center justify-between">
            <span className="font-bold text-zinc-900 text-sm">Ditto</span>
            <div className="flex items-center gap-3 text-zinc-400 text-xs">
              <span className="text-violet-600 font-medium">피드</span>
              <span>알림</span>
              <span>나</span>
            </div>
          </div>

          {/* Feed */}
          <div className="divide-y divide-zinc-100">
            {posts.map((post, i) => (
              <div key={i}>
                {/* Post header */}
                <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={post.avatarSrc} alt={post.handle} width={28} height={28} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-zinc-900 leading-none">{post.handle}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">{post.time}</p>
                  </div>
                  <span className="text-zinc-300 text-sm leading-none">···</span>
                </div>

                {/* Post image */}
                <Image src={post.imageSrc} alt="게시물 이미지" width={400} height={400} className="w-full h-auto" />

                {/* Reactions + caption */}
                <div className="px-3 pt-2 pb-3">
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mb-1.5">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span className="ml-auto">🔗</span>
                  </div>
                  <p className="text-[11px] text-zinc-700 leading-relaxed">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="py-2 flex justify-center">
            <div className="w-24 h-1 bg-zinc-900 rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ count }: { count: number }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center pt-16 overflow-hidden">
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Floating violet blobs */}
      {DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-500 pointer-events-none"
          style={{
            width: dot.w,
            height: dot.h,
            left: dot.left,
            top: dot.top,
            opacity: 0.07,
            filter: "blur(80px)",
          }}
          animate={{ x: dot.dx, y: dot.dy }}
          transition={{
            duration: dot.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.del,
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto px-5 py-24 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text + Form */}
          <div className="flex flex-col gap-7">
            {/* Ping badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-sm text-zinc-500">얼리버드 신청 받는 중</span>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-zinc-700 leading-snug">
              익명과 공개의{" "}
              <span className="relative inline-block text-violet-600">
                새로운 중간
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-violet-300 rounded-full" />
              </span>
            </p>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-zinc-900">
                부계정 말고,
                <br />
                <span className="text-violet-600">Ditto</span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-lg">
                AI가 만든 나만의 캐릭터로
                <br />
                진짜 일상을 공유하세요
              </p>
            </div>

            <div className="max-w-md">
              <EmailForm initialCount={count} />
            </div>
          </div>

          {/* Right: Two phone mockups */}
          <div className="flex items-end gap-2 justify-center lg:justify-end">
            <div className="hidden sm:block" style={{ transform: "rotate(-6deg)" }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, delay: 1.2 }}
              >
                <CharacterMockup />
              </motion.div>
            </div>
            <div style={{ transform: "rotate(6deg)" }}>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
              >
                <PhoneMockup />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-10 flex flex-col items-center gap-2">
        <span className="text-[11px] text-zinc-400 tracking-widest uppercase">스크롤하여 더 알아보기</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}>
          <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
