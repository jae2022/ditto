import { FadeIn } from "@/components/ui/fade-in";

const problems = [
  {
    number: "01",
    title: "공개 SNS, 필요한데 두려워",
    description: "현대인은 커리어와 브랜딩을 위해 공개 SNS가 필요하지만, 실제 얼굴과 개인정보 노출에 대한 불안감이 공존합니다.",
    icon: "👀",
  },
  {
    number: "02",
    title: "수요의 증명",
    description:
      "인스타툰 크리에이터들이 캐릭터를 통해 자신을 표현하며 큰 팔로워를 형성한 사례는, 캐릭터 기반 자기표현에 대한 대중적 니즈가 실재함을 증명합니다.",
    icon: "📈",
  },
  {
    number: "03",
    title: "중간 지점의 부재",
    description:
      "기존 SNS는 '익명 계정'과 '공개 계정' 사이의 중간 지점을 제공하지 않습니다. 나를 드러내되, 완전히 드러내지 않는 공간이 필요합니다.",
    icon: "⚖️",
  },
  {
    number: "04",
    title: "일관된 나만의 캐릭터의 어려움",
    description:
      "그림 실력 없이는 나만의 캐릭터를 만들기 어렵고, 이전 AI 도구들은 일관된 그림체를 생성 못해요. 온전히 나를 투영할 일관된 캐릭터가 필요합니다.",
    icon: "🖌️",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-32 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="text-violet-600 text-sm font-semibold tracking-widest uppercase mb-4">문제</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              일상을 공유하고 싶은데,
              <br />
              마땅한 공간이 없어요
            </h2>
          </div>
        </FadeIn>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.1} direction="up">
              <div className="relative group h-full bg-white border border-zinc-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-md transition-all duration-300">
                {/* Ghost number */}
                <span className="absolute top-4 right-5 text-5xl font-black text-zinc-900/[0.04] leading-none select-none">{p.number}</span>
                <div className="text-3xl mb-5">{p.icon}</div>
                <h3 className="text-zinc-900 font-semibold text-base mb-3 leading-snug">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
