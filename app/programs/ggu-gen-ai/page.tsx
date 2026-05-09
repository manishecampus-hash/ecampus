import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-500">
                New Program
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                GGU Gen AI
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Build practical expertise in Generative AI, prompt engineering,
                automation, and business applications through a flexible online
                executive learning experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#apply"
                  className="rounded-full bg-red-500 px-7 py-4 font-semibold text-white transition hover:bg-red-600"
                >
                  Apply Now
                </Link>

                <Link
                  href="/"
                  className="rounded-full border border-slate-200 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </Link>
              </div>
            </div>

            <div>
              <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-lg">
                <Image
                  src="/courses/ggu-gen-ai.jpg"
                  alt="GGU Gen AI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 p-6">
            <p className="text-sm text-slate-500">Duration</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              16 Weeks
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 p-6">
            <p className="text-sm text-slate-500">Mode</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Online</p>
          </div>

          <div className="rounded-3xl border border-slate-100 p-6">
            <p className="text-sm text-slate-500">Eligibility</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              Graduates & Professionals
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="rounded-[32px] border border-slate-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Program Overview
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            This program helps professionals understand how Generative AI is
            transforming products, operations, decision-making, and customer
            experience across modern businesses.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                What You Will Learn
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Prompt engineering fundamentals</li>
                <li>• Generative AI workflows</li>
                <li>• AI automation and productivity tools</li>
                <li>• Real-world business use cases</li>
              </ul>
            </div>

            <div id="apply" className="rounded-3xl bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Apply Today
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Gain practical AI skills that can immediately create impact in
                your current role and future career growth.
              </p>

              <button className="mt-6 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
