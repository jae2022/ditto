"use client";

import { useState, useTransition } from "react";
import { joinWaitlist } from "@/app/actions";

const AVATAR_SEEDS = ["🎨", "✨", "🌿", "🖊️", "🌟"];

interface EmailFormProps {
  initialCount: number;
  size?: "default" | "lg";
}

export function EmailForm({ initialCount, size = "default" }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(initialCount);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await joinWaitlist(email);
      setStatus(result.success ? "success" : "error");
      setMessage(result.message);
      if (result.success) {
        setCount(result.count);
        setEmail("");
      }
    });
  };

  const isLg = size === "lg";

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="py-4">
          <p className="text-violet-600 font-semibold text-base">{message}</p>
          <SocialProof count={count} />
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className={`flex gap-2 ${isLg ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              required
              disabled={isPending}
              className={`flex-1 bg-white border border-zinc-300 rounded-xl text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all ${
                isLg ? "px-5 py-4 text-base" : "px-4 py-3 text-sm"
              }`}
            />
            <button
              type="submit"
              disabled={isPending || !email}
              className={`bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold rounded-xl transition-colors whitespace-nowrap ${
                isLg ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"
              }`}
            >
              {isPending ? "신청 중..." : "얼리버드 신청"}
            </button>
          </form>
          {status === "error" && <p className="text-red-500 text-sm mt-2">{message}</p>}
          <SocialProof count={count} />
        </>
      )}
    </div>
  );
}

function SocialProof({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="flex -space-x-1.5">
        {AVATAR_SEEDS.map((seed, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full bg-violet-100 border-2 border-white flex items-center justify-center text-xs shadow-sm"
          >
            {seed}
          </div>
        ))}
      </div>
      <p className="text-zinc-500 text-sm">
        {count > 0 ? (
          <>
            <span className="text-zinc-900 font-semibold">{count}명</span>의 새로운 나 자신이 대기 중
          </>
        ) : (
          "첫 번째로 신청해보세요"
        )}
      </p>
    </div>
  );
}
