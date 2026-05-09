import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const FeeSection = () => {
  return (
    <section className="bg-white px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20 lg:pt-8 overflow-hidden">
      <div className="mx-auto max-w-7xl text-center md:text-left">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Human Resource Analytics Course {"{Fees}"}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Invest In <span className="text-red-600">Your Success</span>
          </h2>

          <div className="mt-6 inline-block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Course Fees
            </h3>
            <div className="mt-1.5 h-1 w-full bg-red-600 rounded-full" />
          </div>
          <div className="h-px w-full bg-slate-100" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Pricing Card */}
          <div className="relative z-10 mx-auto w-full max-w-lg lg:mx-0">
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 text-center">
              <span className="inline-block rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 ring-1 ring-slate-100">
                6 Months
              </span>

              <div className="mt-5">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">
                  Starting at
                </p>
                <h4 className="mt-1 text-3xl font-bold text-red-600 sm:text-4xl">
                  INR 5,056
                  <span className="text-lg font-bold text-slate-400">
                    /month
                  </span>
                </h4>
                <p className="mt-2 text-[11px] font-bold text-gray-900">
                  Totally INR 1,55,000*{" "}
                  <span className="font-medium text-slate-400 block sm:inline">
                    (No taxes applicable)
                  </span>
                </p>
              </div>

              <div className="my-6 h-px w-full bg-slate-100" />

              <div className="flex flex-col items-center space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  Inclusions
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">
                    Designed for Working Professionals
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">
                    Globally Accredited by EQUIS and AMBA
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center space-y-3">
                <button className="w-fit rounded-lg bg-red-600 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700 hover:shadow-md active:scale-95">
                  Apply Now
                </button>
                <button className="group flex w-fit items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-red-600">
                  View Plans
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            <div className="absolute -left-8 -top-8 -z-10 h-24 w-24 rounded-full bg-red-50/50 blur-2xl" />
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute left-1/2 top-1/2 -z-10 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/30 opacity-70 blur-3xl" />
              <img
                src="/gallery/fee.png"
                alt="Course Fee Details"
                className="relative z-10 w-full object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
