"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  CreditCard,
  TrendingUp,
  FileText,
  Sparkles,
  Info,
} from "lucide-react";

export default function ApprovalsSection() {
  // Recognition items with individual dynamic properties
  const recognitionItems = [
    {
      id: "ugc",
      title: "UGC Entrusted",
      description:
        "Approved by the University Grants Commission (UGC) to offer full-fledged online degree programs valid globally.",
      icon: ShieldCheck,
      color: "text-red-500 bg-red-50 border-red-100",
    },
    {
      id: "naac",
      title: "NAAC A+ Accredited",
      description:
        "The university holds a prestigious NAAC A+ grade rating, confirming outstanding academic delivery parameters.",
      icon: Award,
      color: "text-amber-500 bg-amber-50 border-amber-100",
    },
    {
      id: "nirf",
      title: "NIRF Ranked Portfolio",
      description:
        "Features prominently in multiple top institutional operational categories of the NIRF rankings framework.",
      icon: TrendingUp,
      color: "text-blue-500 bg-blue-50 border-blue-100",
    },
    {
      id: "wes",
      title: "WES Evaluation Clear",
      description:
        "Degrees are officially recognized by World Education Services (WES) across USA and Canadian corporate boards.",
      icon: CheckCircle2,
      color: "text-emerald-500 bg-emerald-50 border-emerald-100",
    },
    {
      id: "aicte",
      title: "AICTE Statutory Approvals",
      description:
        "AICTE statutory endorsement supports and validates specialized professional technical and management programs.",
      icon: FileText,
      color: "text-purple-500 bg-purple-50 border-purple-100",
    },
    {
      id: "aiu",
      title: "AIU Member Status",
      description:
        "Recognized officially by the Association of Indian Universities, ensuring global status parity and credit mapping.",
      icon: Sparkles,
      color: "text-slate-600 bg-slate-50 border-slate-100",
    },
  ];

  return (
    /* ============================================================
        RECOGNITION, ELIGIBILITY, & FEES SECTION
       ============================================================ */
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* 1. TOP PORTION: RECOGNITION & APPROVALS GRID MATRIX */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Recognition & <span className="text-red-500">Approvals</span>
        </h2>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recognitionItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-slate-100 hover:bg-slate-50/50"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${item.color}`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-gray-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. BOTTOM PORTION: ELIGIBILITY & FEES STRUCTURE SPLIT MATRIX */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* LEFT CARD COLUMN: ELIGIBILITY CRITERIA CARD BOX */}
        <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="border-b border-slate-100 pb-4 text-center">
            <h3 className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900">
              Eligibility <span className="text-red-500">Criteria</span>
            </h3>
          </div>

          <div className="mt-6 flex-1 space-y-6">
            {/* Subsection UG */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                For Online Undergraduate Programs
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    10+2 or equivalent qualifications from any recognized board.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    No rigid age limitation caps enforced for academic
                    admission.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    Open to freshers as well as corporate working professionals.
                  </span>
                </li>
              </ul>
            </div>

            {/* Subsection PG */}
            <div className="border-t border-slate-50 pt-5">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                For Online Postgraduate Programs
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    Bachelor's degree or equivalent milestone from a recognized
                    university.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    No specialized secondary entrance examination portfolio
                    cutoffs required.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>
                    Optimized for corporate executives, startup entrepreneurs,
                    and active career upgraders.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT CARD COLUMN: FEES STRUCTURE DATA BOX */}
        <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="border-b border-slate-100 pb-4 text-center">
            <h3 className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900">
              Fees <span className="text-red-500">Structure</span>
            </h3>
          </div>

          <div className="mt-6 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Online University operations offer highly affordable,
                competitive, and flexible fee structures, rendering premium
                global higher education fully accessible to cross-functional
                global learners.
              </p>

              {/* Fee Ranges Data Blocks */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Estimated Online Tuition Ranges
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between border-b border-slate-200/60 pb-2 text-sm">
                    <span className="font-semibold text-gray-700">
                      Online UG Programs Portfolio
                    </span>
                    <span className="font-bold text-gray-900">
                      ₹16,500 – ₹30,000{" "}
                      <span className="text-[10px] text-slate-400">/sem*</span>
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-700">
                      Online PG Programs Portfolio
                    </span>
                    <span className="font-bold text-gray-900">
                      ₹33,000 – ₹50,000{" "}
                      <span className="text-[10px] text-slate-400">/sem*</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Terms Warning Note block */}
              <div className="mt-5 flex gap-2.5 rounded-xl border border-amber-100 bg-amber-50/30 p-3.5 text-xs font-medium text-slate-600 leading-relaxed">
                <Info className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <span>
                  Programmatic costs vary selectively based upon your specific
                  chosen specialization track. Fee components are competitive
                  and subject to adjustments as per structural university
                  guidelines.
                </span>
              </div>
            </div>

            {/* Lower bottom metadata tag */}
            <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <CreditCard className="h-4 w-4 text-red-500" />
              <span>
                Easy structured installment and EMI options available.*
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
