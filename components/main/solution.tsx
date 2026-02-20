import { FadeIn } from "@/components/ui/fade-in";

const solutions = [
  {
    step: "1",
    title: "AI로 나만의 캐릭터 생성",
    description:
      "텍스트 한 줄로 내 감성에 딱 맞는 캐릭터를 만들어 보세요. 웹툰, 픽사, 지브리 등 다양한 스타일 중 선택하거나 자유롭게 묘사하면 돼요.",
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    accent: "text-violet-600",
    icon: "✨",
  },
  {
    step: "2",
    title: "캐릭터로 일상 씬 공유",
    description:
      "오늘 있었던 일을 텍스트로 쓰면, AI가 내 캐릭터가 등장하는 씬을 만들어줘요. 나의 얼굴 없이도 나만의 이야기를 그림으로 남길 수 있어요.",
    gradient: "from-indigo-50 to-blue-50",
    border: "border-indigo-200",
    accent: "text-indigo-600",
    icon: "🎨",
  },
  {
    step: "3",
    title: "얼굴 없이 나답게 표현",
    description: "본계정의 인간관계 걱정 없이, 진짜 나를 표현할 수 있는 공간. 캐릭터가 나를 대신하지만, 나의 이야기는 진짜예요.",
    gradient: "from-purple-50 to-pink-50",
    border: "border-purple-200",
    accent: "text-purple-600",
    icon: "🌟",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-32 relative border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="text-violet-600 text-sm font-semibold tracking-widest uppercase mb-4">솔루션</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">Ditto가 다른 이유</h2>
            <p className="mt-5 text-zinc-500 text-lg leading-relaxed">
              부계정의 번거로움도, 익명의 낯섦도 없이.
              <br />
              AI 캐릭터가 나를 대신해 진짜 일상을 전해요.
            </p>
          </div>
        </FadeIn>

        {/* Solution cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.12} direction="up">
              <div className={`relative h-full bg-gradient-to-br ${s.gradient} border ${s.border} rounded-2xl p-8 overflow-hidden`}>
                {/* Step number background */}
                <span className="absolute -bottom-4 -right-2 text-9xl font-black text-zinc-900/[0.03] leading-none select-none">
                  {s.step}
                </span>

                <div className="text-4xl mb-6">{s.icon}</div>

                <div className={`text-xs font-bold tracking-widest uppercase ${s.accent} mb-3`}>Step {s.step}</div>
                <h3 className="text-zinc-900 font-bold text-xl mb-4 leading-snug">{s.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
