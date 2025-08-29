import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal variant="up">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Let’s work together
            </h2>
            <p className="mt-2.5 max-w-2xl text-[15px] text-slate-600">
              Have a project in mind, need a prototype, or just want to chat?
              Drop me a line and I’ll get back quickly.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href="mailto:contact@yourname.com"
                className="rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm"
              >
                contact@yourname.com
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-800 hover:bg-slate-50"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-800 hover:bg-slate-50"
              >
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
