import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
      aria-label="Primary navigation"
    >
      <div>
        <div className="flex items-center gap-2.5 rounded-full border border-slate-200/70 bg-white/70 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
          <Link
            href="#projects"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-900"
          >
            Contact
          </Link>
          <span className="mx-1 h-4 w-px bg-slate-200" aria-hidden />
          <a
            href="/cv.pdf"
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-800 hover:bg-slate-50"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
