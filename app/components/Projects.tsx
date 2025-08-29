import Reveal from "./Reveal";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  code?: string;
};

const projects: Project[] = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere.",
    tech: ["React", "CSS", "Framer"],
    live: "#",
    code: "#",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere.",
    tech: ["Next.js", "Framer"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <Reveal variant="up">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Projects
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Recent work
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} variant="up" delay={idx * 60}>
              <article className="group relative rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-transform hover:-translate-y-[3px] hover:shadow-md">
                <div className="mb-2.5 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-400 to-violet-400 opacity-80" />
                  <h3 className="text-[15px] font-semibold text-slate-900">{p.title}</h3>
                </div>
                <p className="text-[13px] leading-6 text-slate-600">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {(p.live || p.code) && (
                  <div className="mt-3.5 flex gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        className="text-[13px] font-medium text-slate-800 underline underline-offset-4 hover:text-slate-900"
                      >
                        Demo
                      </a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        className="text-[13px] font-medium text-slate-800 underline underline-offset-4 hover:text-slate-900"
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

