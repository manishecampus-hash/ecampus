import React from "react";

const curriculum = [
  {
    title: "Financial Accounting",
    description:
      "Learn accounting principles, journal entries, ledgers, trial balance, and financial statements.",
  },
  {
    title: "Business Economics",
    description:
      "Understand demand, supply, pricing, market structures, and economic decision-making.",
  },
  {
    title: "Corporate Accounting",
    description:
      "Study company accounts, shares, debentures, final accounts, and corporate financial reporting.",
  },
  {
    title: "Income Tax Law",
    description:
      "Explore taxation rules, income heads, deductions, exemptions, and return filing basics.",
  },
  {
    title: "Business Law",
    description:
      "Learn contracts, company law, commercial regulations, and legal aspects of business.",
  },
  {
    title: "Cost Accounting",
    description:
      "Understand cost classification, budgeting, variance analysis, and cost control methods.",
  },
  {
    title: "Auditing",
    description:
      "Study audit principles, verification, internal controls, documentation, and reporting.",
  },
  {
    title: "Financial Management",
    description:
      "Learn capital budgeting, working capital, financial planning, and investment decisions.",
  },
];

export default function BComCurriculum() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-500">
            B.Com Program
          </span>

          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Program <span className="text-red-500">Curriculum</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Explore the core subjects covered throughout the online B.Com
            journey, designed to build strong commerce and finance foundations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {curriculum.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-red-50 transition group-hover:bg-red-100" />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-sm font-black text-red-500 transition group-hover:bg-red-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-black leading-snug text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-red-500 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
