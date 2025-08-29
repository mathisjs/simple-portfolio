import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          About
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          What I love to build
        </h2>

        <div className="mt-6 grid items-center gap-6 sm:grid-cols-[128px_1fr]">
          <Reveal variant="up">
            <div className="mx-auto h-28 w-28 rounded-2xl bg-gradient-to-br from-sky-200 to-violet-200 shadow-inner" />
          </Reveal>
          <Reveal variant="fade" delay={80}>
            <div>
              <p className="text-pretty text-[15px] leading-7 text-slate-600">
                Passionate about simple, effective interfaces. I help teams turn ideas
                into clear, desirable products. Design systems, accessibility and
                performance drive my work.
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Framer Motion",
                  "Accessible UI",
                ].map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-700 shadow-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
