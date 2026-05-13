import React from "react";
import { CheckCircle2, TrendingUp, Award } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function OpjIntroduction() {
  const highlights = [
    "Global academic ecosystem with interdisciplinary learning",
    "Industry-connected curriculum built for modern professionals",
    "International exposure through research and academic partnerships",
    "Designed to strengthen leadership, strategy, and business thinking",
  ];

  return (
    <Section>
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Content */}
          <div className="space-y-2">
            {/* 
                SectionHeader with Bolded Keywords in Description 
                Note: Passing JSX to the description prop if your SectionHeader supports ReactNode, 
                otherwise you can manually place the text here.
            */}
            <SectionHeader
              badge="Institution of Eminence"
              title="Redefining Global Leadership"
              className="text-left mb-2"
            />

            {/* Manually rendering the description to allow bold keywords */}
            <p className="mt-2 text-lg leading-relaxed text-slate-600 max-w-2xl text-left mb-8">
              O.P. Jindal Global University merges{" "}
              <strong>interdisciplinary thinking</strong> with
              <strong> real-world relevance</strong> to shape the next
              generation of
              <strong> strategic leaders</strong>. As a premier{" "}
              <strong>Institution of Eminence</strong>, we provide a{" "}
              <strong>global academic ecosystem</strong> designed for
              <strong> modern professionals</strong> and{" "}
              <strong>business innovation</strong>.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold leading-snug text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image & Floating UI */}
          <div className="relative group flex items-center justify-center">
            {/* Main Image Container */}
            <div className="relative z-10 w-full overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-2xl ring-1 ring-slate-200/50">
              <img
                src="/gallery/opjindal.png"
                alt="O.P. Jindal Global University"
                className="w-full h-full aspect-auto min-h-[450px] object-contain bg-slate-50 transition-transform duration-[3s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
            </div>

            {/* Ranking Badge */}
            <div className="absolute -right-6 top-12 z-30 hidden animate-[bounce_5s_infinite] xl:block">
              <div className="rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur-xl transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                      Ranked #1
                    </p>
                    <p className="text-sm font-black leading-none text-slate-900 mt-0.5 whitespace-nowrap">
                      Private Univ. in India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Bar */}
            <div className="absolute -bottom-10 z-20 w-[105%] rounded-[2rem] bg-white/95 p-8 shadow-2xl border border-slate-100 backdrop-blur-md hidden md:block">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-red-600">1:9</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Faculty Ratio
                  </div>
                </div>
                <div className="border-x border-slate-100 text-center px-4">
                  <div className="text-2xl font-black text-slate-900">50+</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Countries
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-slate-900">10k+</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Alumni
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-red-50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <p className="text-xs font-bold leading-tight text-slate-700">
                  Building strategic clarity in changing business climates.
                </p>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 -z-10 h-80 w-80 rounded-full bg-red-50 blur-[100px]" />
          </div>
        </div>
      </div>
    </Section>
  );
}
