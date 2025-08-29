import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb orb-1 left-[-12%] top-[-12%] h-48 w-48" />
        <div className="orb orb-2 right-[-12%] top-[8%] h-56 w-56 float-slow" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <Reveal variant="up" delay={0}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[12px] text-slate-600 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
            Available for freelance work
          </div>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <h1 className="text-balance text-[32px] font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Hi, I’m <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">Your Name</span>.
          </h1>
        </Reveal>
        <Reveal variant="fade" delay={140}>
          <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-7 text-slate-600 sm:text-base">
            I design minimalist, fast and elegant web experiences. Clean interfaces,
            subtle micro‑interactions and high polish are my thing.
          </p>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-[13px] font-semibold text-slate-800 backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Contact me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
