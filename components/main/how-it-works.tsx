import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    number: "01",
    title: "회원가입",
    description: "이메일 또는 소셜 계정으로 간단하게 Ditto를 시작해봐요.",
    icon: "🚀",
  },
  {
    number: "02",
    title: "캐릭터 생성",
    description: "원하는 스타일과 특징을 텍스트로 묘사하면 AI가 나만의 캐릭터를 만들어줘요.",
    icon: "✨",
  },
  {
    number: "03",
    title: "일상 입력",
    description: "오늘 있었던 일, 기분, 장소를 간단히 텍스트로 써요.",
    icon: "📝",
  },
  {
    number: "04",
    title: "AI 씬 생성",
    description: "내 캐릭터가 등장하는 일러스트가 자동으로 만들어져요.",
    icon: "🎨",
  },
  {
    number: "05",
    title: "공유",
    description: "Ditto 피드에 올리거나 원하는 SNS로 바로 내보내요.",
    icon: "📤",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="text-violet-600 text-sm font-semibold tracking-widest uppercase mb-4">사용법</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">5분이면 충분해요</h2>
            <p className="mt-5 text-zinc-500 text-lg">가입부터 첫 포스팅까지, 복잡한 것 없어요.</p>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — centered on the 56px (h-14) icon: top-7 = 28px */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent" />

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1} direction="up">
                <div className="flex flex-col items-start lg:items-center lg:text-center">
                  {/* Icon circle */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-zinc-900 font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
