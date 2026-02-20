import { FadeIn } from "@/components/ui/fade-in";
import { EmailForm } from "@/components/main/email-form";

interface CtaProps {
  count: number;
}

export default function Cta({ count }: CtaProps) {
  return (
    <section id="cta" className="py-32 relative overflow-hidden border-t border-zinc-100">
      {/* Soft violet glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(124,58,237,0.05),transparent)]" />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
            얼리버드 모집 중
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
            지금 신청하면
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">
              가장 먼저 초대해드려요
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-zinc-500 text-lg mb-12 leading-relaxed">
            얼리버드로 신청하시면 출시 시 가장 먼저 초대장을 보내드려요.
            <br />
            프리미엄 기능도 무료로 먼저 경험하실 수 있어요.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <EmailForm initialCount={count} size="lg" />
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              "무료로 시작",
              "언제든 탈퇴 가능",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-zinc-500 text-sm">
                <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
