import React from "react";
import { CheckCircle2, FileText, GraduationCap } from "lucide-react";

export default function BComEligibilityFees() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <GraduationCap className="mb-4 h-8 w-8 text-red-500" />
          <h2 className="text-2xl font-black text-gray-900">
            Eligibility Criteria
          </h2>

          <ul className="mt-5 space-y-3">
            {[
              "10+2 or equivalent qualification from a recognized board.",
              "Open for freshers, students, and working professionals.",
              "No entrance examination required for standard admission.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-semibold text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <FileText className="mb-4 h-8 w-8 text-red-500" />
          <h2 className="text-2xl font-black text-gray-900">Fee Structure</h2>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="font-bold text-slate-600">Total Fees</span>
              <span className="font-black text-gray-900">INR 99,000</span>
            </div>
            <div className="flex items-center justify-between pt-3">
              <span className="font-bold text-slate-600">EMI Starts</span>
              <span className="font-black text-red-500">INR 2,750/month</span>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Fees may vary depending on university policy, admission cycle, and
            available scholarship options.
          </p>
        </div>
      </div>
    </section>
  );
}
