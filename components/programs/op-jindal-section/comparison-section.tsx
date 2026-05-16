"use client";

import React from "react";
import {
  CheckCircle2,
  XCircle,
  Award,
  Target,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import WhyChooseSection from "./why-choose";

export default function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Duration & ROI",
      jgu: "12-Month Accelerated MBA with faster career growth and higher ROI.",
      others: "24-Month traditional MBA with longer completion timeline.",
    },
    {
      feature: "Accreditation",
      jgu: "AACSB Accredited — Global Gold Standard held by top B-schools.",
      others: "Limited global accreditation and recognition.",
    },
    {
      feature: "Institutional Standing",
      jgu: "Institution of Eminence (IoE) recognition by Ministry of Education.",
      others: "Regular university recognition without IoE status.",
    },
    {
      feature: "Learning Format",
      jgu: "Live online learning with faculty interaction and practical sessions.",
      others: "Mostly recorded classes with limited engagement.",
    },
    {
      feature: "Global Exposure",
      jgu: "Global networking and international immersion opportunities.",
      others: "Limited international exposure and networking.",
    },
    {
      feature: "Curriculum Focus",
      jgu: "Industry-ready curriculum focused on AI, Analytics & Leadership.",
      others: "Traditional syllabus with slower industry adaptation.",
    },
  ];

  return (
    <>
      <Section className="bg-white !py-8 sm:!py-10">
        <div className="mx-auto max-w-7xl">
          {/* Badge */}
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
              1 Year MBA — O.P. Jindal
            </span>
          </div>

          {/* Heading */}
          <div className="mb-5 text-center">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              1-Year <span className="text-red-600">vs</span> 2-Year MBA
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Compare how the JGU 1-Year Online MBA stands ahead of traditional
              MBA programs.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="grid grid-cols-12">
              {/* Features */}
              <div className="col-span-4 border-r border-slate-200 bg-slate-50/70">
                <div className="flex h-12 items-center border-b border-slate-200 px-3 sm:px-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 sm:text-[10px]">
                    Parameters
                  </span>
                </div>

                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex min-h-[72px] items-center border-b border-slate-100 px-3 py-2 sm:px-4"
                  >
                    <span className="text-[11px] font-bold leading-4 text-slate-700 sm:text-sm">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* JGU */}
              <div className="col-span-4 border-r border-slate-200">
                <div className="flex h-12 flex-col items-center justify-center border-b-2 border-red-600 px-2 text-center">
                  <span className="text-[7px] font-black uppercase tracking-[0.15em] text-red-600 sm:text-[8px]">
                    Recommended
                  </span>

                  <h3 className="mt-0.5 text-[10px] font-black leading-none text-slate-900 sm:text-sm">
                    JGU MBA
                  </h3>
                </div>

                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex min-h-[72px] items-start border-b border-slate-100 bg-red-50/10 px-2 py-2 sm:px-3"
                  >
                    <CheckCircle2 className="mt-0.5 mr-1.5 h-3.5 w-3.5 shrink-0 text-green-500 sm:h-4 sm:w-4" />

                    <p className="text-[10px] leading-4 text-slate-900 sm:text-xs sm:leading-5">
                      {item.jgu}
                    </p>
                  </div>
                ))}
              </div>

              {/* Others */}
              <div className="col-span-4 bg-white">
                <div className="flex h-12 items-center justify-center border-b border-slate-200 px-2 text-center">
                  <h3 className="text-[9px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
                    Other MBAs
                  </h3>
                </div>

                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex min-h-[72px] items-start border-b border-slate-100 px-2 py-2 opacity-80 sm:px-3"
                  >
                    <XCircle className="mt-0.5 mr-1.5 h-3.5 w-3.5 shrink-0 text-slate-300 sm:h-4 sm:w-4" />

                    <p className="text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                      {item.others}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex flex-col items-center">
            <div className="mb-4 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-red-600" />

                <span className="text-[9px] font-bold uppercase text-slate-600 sm:text-[10px]">
                  AACSB Accredited
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Target className="h-3.5 w-3.5 text-red-600" />

                <span className="text-[9px] font-bold uppercase text-slate-600 sm:text-[10px]">
                  UGC Approved
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-red-600" />

                <span className="text-[9px] font-bold uppercase text-slate-600 sm:text-[10px]">
                  IoE Recognition
                </span>
              </div>
            </div>

            <button className="group flex items-center gap-2 rounded-xl bg-red-600 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-md transition-all duration-300 hover:bg-slate-900 active:scale-95 sm:px-8 sm:py-3 sm:text-xs">
              Download Program Syllabus
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>

      <WhyChooseSection />
    </>
  );
}
