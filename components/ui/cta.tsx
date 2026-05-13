"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Section } from "./section";

export default function EcampusCta() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] border border-red-100 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_32%)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-200/50 blur-3xl" />
          <div className="absolute -bottom-28 left-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />

          <div className="relative grid gap-8 rounded-[24px] border border-white/70 bg-white/75 p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                <Sparkles className="h-4 w-4" />
                Admissions Open 2026
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Ready to Upgrade Your Career?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Join top online and executive programs designed for working
                professionals, ambitious managers, and future business leaders.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Flexible learning",
                  "Top universities",
                  "Career-focused",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-red-600" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-[0_16px_36px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_20px_44px_rgba(220,38,38,0.36)]">
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-sm font-medium text-slate-500">
                Limited seats available
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
