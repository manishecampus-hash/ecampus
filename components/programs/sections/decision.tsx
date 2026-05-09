import React from "react";
import { Target, BarChart3, ArrowUpRight, Zap } from "lucide-react";

const DecisionLens = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Pattern - Very subtle to maintain the "White" feel */}
      <div className="absolute inset-0 opacity-[0.3]">
        <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="decision-grid-pure"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#e2e8f0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#decision-grid-pure)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Content */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600 ring-1 ring-red-100">
            <Target className="h-3 w-3" />
            Decision Lens
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Before this program, HR data is noise.
            <span className="mt-1 block text-red-500">
              After this program, it becomes direction.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Modern organizations do not need more dashboards. They need leaders
            who can interpret signals, anticipate risk, and convert workforce
            data into strategic action.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Strategic Thinking */}
          <div className="rounded-[32px] border border-slate-100 bg-white p-8">
            <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-900">
                How strategic leaders think
              </h3>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-500">
                <Zap className="h-3 w-3 fill-blue-500" />
                Applied Insights
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Attrition is not a report",
                  text: "It is an early warning signal about capability gaps, manager effectiveness, and future business risk.",
                },
                {
                  title: "Hiring is not a headcount target",
                  text: "It is a capital allocation decision that directly affects growth velocity and productivity outcomes.",
                },
                {
                  title: "Performance is not only evaluation",
                  text: "It is a system of behavior, incentives, and workforce design that shapes business execution.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 rounded-2xl border border-transparent p-4 transition-all hover:border-slate-100 hover:bg-slate-50/50"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 group-hover:text-red-500 group-hover:ring-red-200">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Strategic Shift Table */}
          <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="mb-8 border-b border-slate-100 pb-4 text-center lg:text-left">
              <h3 className="font-bold text-slate-900 text-lg">
                The Strategic Shift
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Your evolution as an HR leader
              </p>
            </div>

            <div className="space-y-4">
              {[
                ["Operational HR", "Business-led HR"],
                ["Past reporting", "Predictive decision"],
                ["Activity focus", "Outcome ownership"],
                ["Support function", "Strategic partner"],
              ].map(([left, right], i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center gap-3"
                >
                  <div className="w-full rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-center text-[11px] font-bold uppercase tracking-tight text-slate-400">
                    {left}
                  </div>
                  <div className="shrink-0 rounded-full bg-red-50 p-1.5 text-red-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <div className="w-full rounded-xl bg-red-600 px-4 py-3.5 text-center text-[11px] font-extrabold uppercase tracking-tight text-white shadow-md shadow-red-100">
                    {right}
                  </div>
                </div>
              ))}
            </div>

            {/* Program Outcome Box */}
            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/30 p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">
                Market Outcome
              </p>
              <p className="text-sm leading-relaxed text-slate-600 font-medium">
                Frame business questions and influence leadership decisions with
                <span className="text-slate-900 font-bold">
                  {" "}
                  analytical clarity
                </span>{" "}
                that is rare in today's workforce management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionLens;
