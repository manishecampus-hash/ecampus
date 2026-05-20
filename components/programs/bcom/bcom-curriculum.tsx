import React from "react";

const curriculum = [
  "Financial Accounting",
  "Business Economics",
  "Corporate Accounting",
  "Income Tax Law",
  "Business Law",
  "Cost Accounting",
  "Auditing",
  "Financial Management",
];

export default function BComCurriculum() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            Program <span className="text-red-500">Curriculum</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Core subjects covered across the online B.Com journey.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {curriculum.map((subject, index) => (
            <div
              key={subject}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:shadow-[0_14px_36px_rgba(239,68,68,0.12)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-sm font-black text-red-500">
                {index + 1}
              </div>
              <h3 className="text-base font-black text-gray-900">{subject}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
