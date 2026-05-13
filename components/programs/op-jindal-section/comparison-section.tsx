import React from "react";
import {
  CheckCircle2,
  XCircle,
  Award,
  Target,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";

export const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Duration & ROI",
      jgu: "12-Month Accelerated MBA. Faster entry to job market with higher ROI.",
      others: "24-Month traditional timeline. Higher opportunity cost of time.",
    },
    {
      feature: "Accreditation",
      jgu: "AACSB Accredited (Global Gold Standard held by top 5% schools).",
      others: "Mostly non-AACSB; rely only on local regional approvals.",
    },
    {
      feature: "Institutional Standing",
      jgu: "Institutions of Eminence (IoE) status by the Ministry of Education.",
      others:
        "Standard private or state university status without IoE recognition.",
    },
    {
      feature: "Learning Format",
      jgu: "Fully online, live-enabled sessions with high academic rigor.",
      others: "Recorded content-heavy delivery with limited live interaction.",
    },
    {
      feature: "Global Exposure",
      jgu: "Option for short-term study abroad and global peer networking.",
      others: "Limited to local curriculum with zero international exposure.",
    },
    {
      feature: "Curriculum Focus",
      jgu: "Industry 4.0 ready: AI, Digital Transformation, and Analytics.",
      others: "Outdated theoretical models with slow industry alignment.",
    },
  ];

  return (
    /* Removed top padding using py-0 or pt-0 */
    <Section>
      <div className="mx-auto max-w-7xl">
        {/* Heading Area - Reduced mb-14 to mb-8 for tighter spacing */}
        <div className="mb-8 text-center pt-8">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            1-Year <span className="text-red-600">vs</span> 2-Year MBA
          </h2>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
            See how the JGU 1-Year Online MBA redefines executive education
            compared to traditional programs.
          </p>
        </div>

        {/* Comparison Structure */}
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Feature Label Column (Desktop) */}
            <div className="hidden md:flex md:col-span-3 flex-col bg-slate-50/50">
              <div className="h-24 border-b border-slate-200 p-8 flex items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Parameter
                </span>
              </div>
              {comparisonData.map((item, idx) => (
                <div
                  key={idx}
                  className="h-28 border-b border-slate-100 p-8 flex items-center"
                >
                  <span className="text-sm font-bold text-slate-700">
                    {item.feature}
                  </span>
                </div>
              ))}
            </div>

            {/* JGU Column (The Highlighted Winner) */}
            <div className="md:col-span-5 border-x-0 md:border-x border-slate-200 relative">
              <div className="h-24 bg-white border-b-2 border-red-600 p-6 flex flex-col justify-center items-center text-center">
                <span className="text-[9px] font-black uppercase text-red-600 tracking-tighter mb-1">
                  Recommended
                </span>
                <h3 className="text-lg font-black text-slate-900 uppercase leading-none">
                  JGU 1-Year Online MBA
                </h3>
              </div>

              {comparisonData.map((item, idx) => (
                <div
                  key={idx}
                  className="h-auto md:h-28 border-b border-slate-100 p-6 md:p-8 flex flex-col justify-center bg-red-50/5"
                >
                  <span className="md:hidden text-[10px] font-bold text-red-600 uppercase mb-2">
                    {item.feature}
                  </span>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      {item.jgu}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Competitor Column */}
            <div className="md:col-span-4 bg-white">
              <div className="h-24 border-b border-slate-200 p-6 flex items-center justify-center text-center">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Other MBA Programs
                </h3>
              </div>
              {comparisonData.map((item, idx) => (
                <div
                  key={idx}
                  className="h-auto md:h-28 border-b border-slate-100 p-6 md:p-8 flex flex-col justify-center opacity-60"
                >
                  <span className="md:hidden text-[10px] font-bold text-slate-400 uppercase mb-2">
                    {item.feature}
                  </span>
                  <div className="flex gap-3">
                    <XCircle className="h-5 w-5 text-slate-300 shrink-0" />
                    <p className="text-sm font-medium text-slate-500 leading-snug">
                      {item.others}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-12 mb-16 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-red-600 h-5 w-5" />
              <span className="text-xs font-bold uppercase text-slate-600">
                AACSB Accredited
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="text-red-600 h-5 w-5" />
              <span className="text-xs font-bold uppercase text-slate-600">
                UGC Approved
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-red-600 h-5 w-5" />
              <span className="text-xs font-bold uppercase text-slate-600">
                IoE Recognition
              </span>
            </div>
          </div>

          <button className="group flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-red-100 active:scale-95">
            Download Program Syllabus
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Section>
  );
};
