"use client";

import { motion } from "motion/react";
import { EmailForm } from "@/components/main/email-form";

// Fixed positions — avoids hydration mismatch from random values
const DOTS = [
  { w: 420, h: 420, left: "-8%",  top: "-6%",  dx: [0, 55, -15, 40, 0], dy: [0, 45, 75, 25, 0], dur: 24, del: 0  },
  { w: 280, h: 280, left: "68%",  top: "2%",   dx: [0, -45, 20, -32, 0], dy: [0, 55, 28, 42, 0], dur: 30, del: 6  },
  { w: 240, h: 240, left: "58%",  top: "55%",  dx: [0, 32, -22, 18, 0],  dy: [0, -45, -22, -32, 0], dur: 22, del: 4  },
  { w: 200, h: 200, left: "8%",   top: "65%",  dx: [0, -28, 38, -12, 0], dy: [0, -32, -18, -38, 0], dur: 28, del: 9  },
  { w: 170, h: 170, left: "40%",  top: "30%",  dx: [0, 22, -32, 18, 0],  dy: [0, -28, 32, -18, 0],  dur: 20, del: 3  },
];

function MacbookMockup() {
  const posts = [
    {
      emoji: "🌸",
      handle: "@sakura_ditto",
      text: "오늘 찐퇴사 결심… 회사에선 못 말하지만 디토가 대신 말해줌",
      likes: 84,
      border: "border-violet-200",
      bg: "bg-violet-50",
    },
    {
      emoji: "🦋",
      handle: "@butterfly_me",
      text: "연차 써서 혼자 미술관. 본계정엔 올리기 민망해서 여기에",
      likes: 142,
      border: "border-indigo-200",
      bg: "bg-indigo-50",
    },
    {
      emoji: "🌙",
      handle: "@moon_vibes",
      text: "오늘 남자친구랑 싸웠는데 내 캐릭터 표정이 딱 내 기분이다 ㅋㅋ",
      likes: 57,
      border: "border-purple-200",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="relative w-full max-w-[480px]">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-violet-200/20 blur-3xl rounded-full pointer-events-none" />

      {/* Browser window */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-zinc-200">
        {/* Title bar */}
        <div className="bg-zinc-100 border-b border-zinc-200 px-3 h-9 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white border border-zinc-200 rounded px-2 py-0.5 text-[11px] text-zinc-400 text-center max-w-[160px] mx-auto">
              ditto.app/feed
            </div>
          </div>
        </div>

        {/* App */}
        <div className="bg-white">
          {/* App nav */}
          <div className="border-b border-zinc-100 px-4 h-9 flex items-center justify-between">
            <span className="font-bold text-zinc-900 text-sm">Ditto</span>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="text-violet-600 font-medium">피드</span>
              <span>내 캐릭터</span>
              <span>알림</span>
            </div>
          </div>
          {/* Feed posts */}
          <div className="p-3 space-y-2">
            {posts.map((post, i) => (
              <div key={i} className={`${post.bg} border ${post.border} rounded-xl p-3`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xs">
                    {post.emoji}
                  </div>
                  <span className="text-xs font-medium text-zinc-600">{post.handle}</span>
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed">{post.text}</p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-zinc-400">
                  <span>❤️ {post.likes}</span>
                  <span>💬</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ count }: { count: number }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center pt-16 overflow-hidden"
    >
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

          {/* Right: MacBook mockup — gentle float */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
            >
              <MacbookMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative pb-10 flex flex-col items-center gap-2">
        <span className="text-[11px] text-zinc-400 tracking-widest uppercase">
          스크롤하여 더 알아보기
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
        >
          <svg
            className="w-5 h-5 text-zinc-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
