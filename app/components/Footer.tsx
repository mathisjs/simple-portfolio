export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/60 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 text-[13px] text-slate-600">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="opacity-80">Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
