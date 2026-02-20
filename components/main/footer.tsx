export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="text-zinc-900 font-semibold">Ditto</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a
              href="mailto:hello@ditto.app"
              className="hover:text-zinc-700 transition-colors"
            >
              문의하기
            </a>
            <span>·</span>
            <span>개인정보처리방침</span>
            <span>·</span>
            <span>이용약관</span>
          </div>

          {/* Copyright */}
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Ditto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
