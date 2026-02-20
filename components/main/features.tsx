import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

/* ─── Illustration components ─────────────────────────────────────────── */

function Illust01() {
  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl border border-violet-200 p-5 space-y-3">
      {/* Prompt input */}
      <div className="bg-white rounded-xl p-3 border border-violet-100 shadow-sm">
        <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">캐릭터 묘사</p>
        <p className="text-sm text-zinc-700 leading-relaxed">&ldquo;따뜻한 느낌의 단발머리 여성, 카페를 좋아하는 20대...&rdquo;</p>
      </div>

      {/* Generating indicator */}
      <div className="flex items-center justify-center gap-2 py-1">
        <span className="text-xs text-violet-500 font-medium">AI 생성 중</span>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="bg-white rounded-xl p-3 border border-violet-100 shadow-sm flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src="/images/단발머리_여성.png" alt="나만의 캐릭터" width={48} height={48} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">생성 완료</p>
          <p className="text-sm font-bold text-zinc-900">나만의 캐릭터</p>
          <p className="text-xs text-violet-600">지브리 스타일 · 단발머리</p>
        </div>
        <span className="text-lg">✨</span>
      </div>
    </div>
  );
}

function Illust02() {
  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl border border-indigo-200 p-5 space-y-3">
      {/* Text input */}
      <div className="bg-white rounded-xl p-3 border border-indigo-100 shadow-sm">
        <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide mb-1.5">오늘의 일상</p>
        <p className="text-sm text-zinc-700 leading-relaxed">&ldquo;오늘 카페에서 혼자 독서했는데 너무 좋았어 ☕&rdquo;</p>
      </div>

      {/* Generated scene */}
      <div className="bg-white rounded-xl p-3 border border-indigo-100 shadow-sm">
        <div className="aspect-video rounded-lg overflow-hidden mb-2">
          <Image src="/images/단발머리_여성_카페.png" alt="카페 씬" width={400} height={225} className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-zinc-500">씬이 생성됐어요</p>
          <span className="text-[10px] bg-indigo-50 border border-indigo-200 text-indigo-600 px-2 py-0.5 rounded-full">카페 씬</span>
        </div>
      </div>
    </div>
  );
}

function Illust03() {
  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl border border-purple-200 p-5 space-y-3">
      {/* Post preview */}
      <div className="bg-white rounded-xl p-3 border border-purple-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-sm">
            🌸
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-zinc-900">@sakura_ditto</p>
            <p className="text-[10px] text-zinc-400">방금</p>
          </div>
          <div className="text-[10px] bg-green-50 text-green-600 border border-green-200 px-2 py-0.5 rounded-full font-medium">게시됨</div>
        </div>
        <div className="aspect-video rounded-lg mb-2 overflow-hidden">
          <Image src="/images/단발머리_여성_공원.png" alt="공원 씬" width={400} height={225} className="w-full h-full object-cover" />
        </div>
        <p className="text-xs text-zinc-600 leading-relaxed">&ldquo;생각정리를 위해 공원 산책을 한 하루&rdquo;</p>
        <div className="flex gap-3 mt-2 text-xs text-zinc-400">
          <span>❤️ 84</span>
          <span>💬 12</span>
          <span>🔗 공유</span>
        </div>
      </div>

      {/* Share buttons */}
      <div className="flex gap-2">
        <div className="flex-1 text-xs bg-violet-600 text-white rounded-xl py-2 font-medium text-center">Ditto 피드</div>
        <div className="flex-1 text-xs bg-white border border-zinc-200 text-zinc-600 rounded-xl py-2 text-center">다른 SNS</div>
      </div>
    </div>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────── */

const FEATURES = [
  {
    number: "01",
    title: "AI 캐릭터 생성",
    subtitle: "#내감성대로 #내스타일대로",
    description:
      "텍스트로 묘사하거나 스타일을 선택하면 AI가 나만의 캐릭터를 생성해요. 웹툰, 픽사, 지브리, 일러스트 등 다양한 그림체를 만들 수 있어요.",
    tags: ["웹툰 스타일", "픽사 스타일", "지브리 감성", "자유 묘사"],
  },
  {
    number: "02",
    title: "일상 일러스트 생성",
    subtitle: "#텍스트한줄 #그림한장",
    description:
      "오늘 있었던 일을 텍스트로 입력하면 내 캐릭터가 등장하는 일러스트를 AI가 그려줘요. 매일 다른 표정, 다른 배경, 나만의 만화같은 일기장.",
    tags: ["텍스트 → 이미지", "캐릭터 일관성 유지", "다양한 씬 구도"],
  },
  {
    number: "03",
    title: "SNS 피드 공유",
    subtitle: "#진짜나, #진짜이야기",
    description: "완성된 씬을 Ditto 피드에 공유하거나 다른 SNS에 내보내요. 캐릭터가 나를 대신하지만, 나의 이야기는 진짜예요.",
    tags: ["Ditto 피드", "반응 & 댓글", "외부 공유"],
  },
];

const ILLUSTS = [Illust01, Illust02, Illust03];

/* ─── Section ───────────────────────────────────────────────────────────── */

export default function Features() {
  return (
    <section id="features" className="py-32 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <FadeIn>
          <div className="max-w-2xl mb-24">
            <p className="text-violet-600 text-sm font-semibold tracking-widest uppercase mb-4">기능</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">세 가지로 충분해요</h2>
            <p className="mt-5 text-zinc-500 text-lg">복잡하지 않아요. 만들고, 그리고, 공유하면 끝.</p>
          </div>
        </FadeIn>

        {/* Zigzag rows */}
        <div className="space-y-20 md:space-y-28">
          {FEATURES.map((f, i) => {
            const IllustComp = ILLUSTS[i];
            const isReverse = i % 2 === 1;
            return (
              <FadeIn key={f.number} direction="up">
                <div className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
                  {/* Text side */}
                  <div className="flex-1">
                    <span className="text-8xl font-black text-zinc-900/[0.04] leading-none select-none block mb-4">{f.number}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">{f.title}</h3>
                    <p className="text-violet-600 text-sm font-medium mb-5">{f.subtitle}</p>
                    <p className="text-zinc-500 text-base leading-relaxed mb-6">{f.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map((tag) => (
                        <span key={tag} className="text-xs text-zinc-500 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Illustration side */}
                  <div className="flex-1 flex justify-center">
                    <IllustComp />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
