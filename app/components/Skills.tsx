import Reveal from "./Reveal";

export default function Skills() {
  const icons = [
    "ts",
    "js",
    "react",
    "next",
    "tailwind",
    "nodejs",
    "git",
    "github",
    "figma",
    "vercel",
  ];

  const src = `https://skillicons.dev/icons?i=${icons.join(",")}&perline=10`;

  return (
    <section id="skills" className="py-10">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal variant="up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Skills
            </p>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Tools I use
            </h2>
          </div>
        </Reveal>
        <Reveal variant="fade" delay={80}>
          <div className="mt-5 flex justify-center">

          <img
            src={src}
            alt={`Skills: ${icons.join(", ")}`}
            className="h-auto w-full max-w-2xl select-none"
            loading="lazy"
            decoding="async"
          />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
