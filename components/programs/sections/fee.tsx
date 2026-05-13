import React from "react";
import { CheckCircle2, ChevronRight, Award, ShieldCheck } from "lucide-react";

export const FeeSection = () => {
  return (
    <section className="bg-white px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20 lg:pt-8 overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Executive Education {"{IIM Kozhikode}"}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Invest In <span className="text-red-600">Your Success</span>
          </h2>
          <div className="mt-6 inline-block">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Program Fee Structure
            </h3>
            <div className="mt-1.5 h-1 w-full bg-red-600 rounded-full" />
          </div>
        </div>

        {/* Dual Card Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Card 1: Standard Executive Program */}
          <div className="flex flex-col rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-8 pb-6 text-center">
              <span className="inline-block rounded-full border-2 border-slate-900 px-6 py-1.5 text-xs font-black uppercase tracking-tight text-slate-900">
                Self-Paced + Live
              </span>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-500 uppercase tracking-tighter">
                    Program Fee:
                  </span>
                  <span className="text-slate-900">INR 1,75,000</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-500 uppercase tracking-tighter">
                    IIMK Alumni Waiver:
                  </span>
                  <span className="text-blue-700">INR 20,000</span>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100" />

            <div className="p-8 text-center bg-slate-50/40">
              <p className="text-xs font-bold text-slate-400 uppercase">
                Total Payable Fee
              </p>
              <h4 className="mt-1 text-2xl font-black text-slate-900">
                INR 1,55,000/-
              </h4>
              <p className="text-[10px] font-medium text-slate-400 mt-1">
                Excluding GST (18%)
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <p className="text-[11px] font-black text-red-600 uppercase tracking-widest">
                  EMI Options From
                </p>
                <p className="text-3xl font-black text-slate-900 mt-1">
                  INR 5,056<span className="text-sm text-slate-400">/mo</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Executive with Campus Immersion */}
          <div className="flex flex-col rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 overflow-hidden transition-transform hover:-translate-y-1">
            <div className="p-8 pb-6 text-center">
              <span className="inline-block rounded-full border-2 border-red-600 px-6 py-1.5 text-xs font-black uppercase tracking-tight text-red-600">
                With Campus Immersion
              </span>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-500 uppercase tracking-tighter">
                    Program Fee:
                  </span>
                  <span className="text-slate-900">INR 2,25,000</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-500 uppercase tracking-tighter">
                    Early Bird Offer:
                  </span>
                  <span className="text-red-600">INR 30,000</span>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100" />

            <div className="p-8 text-center bg-red-50/20">
              <p className="text-xs font-bold text-slate-400 uppercase">
                Total Payable Fee
              </p>
              <h4 className="mt-1 text-2xl font-black text-slate-900">
                INR 1,95,000/-
              </h4>
              <p className="text-[10px] font-medium text-slate-400 mt-1">
                Includes 3-Day IIMK Campus Stay
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <p className="text-[11px] font-black text-red-600 uppercase tracking-widest">
                  EMI Options From
                </p>
                <p className="text-3xl font-black text-slate-900 mt-1">
                  INR 7,240<span className="text-sm text-slate-400">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Highlights Footer */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            Reserve your seat with an enrollment fee of ₹25,000/-
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <button className="group flex items-center gap-3 rounded-xl bg-red-600 px-12 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-200 active:scale-95">
              Apply
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </button>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-1.5 opacity-60">
                <Award className="h-4 w-4 text-slate-900" />
                <span className="text-[10px] font-bold uppercase text-slate-900">
                  IIMK Executive Alumni Status
                </span>
              </div>
              <div className="flex items-center gap-1.5 opacity-60">
                <ShieldCheck className="h-4 w-4 text-slate-900" />
                <span className="text-[10px] font-bold uppercase text-slate-900">
                  Digital Certificate from IIMK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
