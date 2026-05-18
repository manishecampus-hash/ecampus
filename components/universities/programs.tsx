"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  GraduationCap,
  Layers,
  Target,
  Briefcase,
  TrendingUp,
  Globe2,
  CheckCircle2,
} from "lucide-react";

interface WhyOnlineProps {
  university?: {
    name?: string;
  };
}

export default function WhyOnline({ university }: WhyOnlineProps) {
  const universityName = university?.name || "Amity University Online";
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const coreFeatures = [
    {
      id: "future-ready",
      title: "Future-Ready Education",
      description:
        "Programs designed to match evolving industry trends and cutting-edge operational frameworks.",
      icon: Layers,
    },
    {
      id: "personalized-path",
      title: "Personalized Learning Path",
      description:
        "Study plans tailored to individual goals and pace to maximize long-term learning outcomes.",
      icon: Target,
    },
    {
      id: "skill-centric",
      title: "Skill-Centric Approach",
      description:
        "Focus on building practical, employable skills beyond classic purely academic curriculum structures.",
      icon: Briefcase,
    },
    {
      id: "career-support",
      title: "Career Enhancement Support",
      description:
        "Comprehensive tools, structured resume metrics guidance, and counseling to boost your overall employability and career confidence.",
      icon: TrendingUp,
    },
    {
      id: "recognized-degrees",
      title: "Recognized Online Degrees",
      description:
        "Earn a premium digital credential valued highly by major corporate employers and diverse industries worldwide.",
      icon: Globe2,
    },
  ];

  useEffect(() => {
    /*
      IntersectionObserver with rootMargin trick:
      - Top margin = -(viewport height * 0.3) — ignore top 30%
      - Bottom margin = -(viewport height * 0.4) — ignore bottom 40%
      - This creates a "sweet spot" band in the middle of the screen.
      - Whichever feature card enters this band becomes active.
    */
    const updateActive = () => {
      const vh = window.innerHeight;
      const band = vh * 0.35; // center band = 35% from top to 65%

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const screenCenter = vh / 2;
        const distance = Math.abs(elCenter - screenCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    // Run on scroll
    window.addEventListener("scroll", updateActive, { passive: true });
    // Run once on mount
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        {/* ── LEFT: STICKY DEGREE CARD ── */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-[112px] flex-shrink-0">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-xl shadow-slate-100/80 sm:p-8">
            <div className="mb-6 text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Verified Asset
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                Globally Accepted Degree
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Internationally aligned programs designed to meet elite global
                standards.
              </p>
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] rounded-xl border-[10px] border-slate-900 bg-amber-50/15 p-4 shadow-lg ring-1 ring-slate-900/10">
              <div className="h-full w-full border border-amber-800/15 p-2.5 flex flex-col justify-between text-center relative overflow-hidden bg-white/70">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                  <GraduationCap className="h-32 w-32 text-slate-900" />
                </div>
                <div className="space-y-1 relative z-10">
                  <div className="mx-auto h-3.5 w-3.5 rounded-full bg-slate-200" />
                  <p className="text-[8px] font-black uppercase tracking-wider text-slate-800">
                    Amity University
                  </p>
                  <p className="text-[4px] font-bold text-slate-400 uppercase tracking-widest">
                    Uttar Pradesh
                  </p>
                </div>
                <div className="my-auto space-y-1.5 relative z-10">
                  <p className="text-[5px] font-medium text-slate-400">
                    On recommendation of the academic council hereby confers the
                    degree of
                  </p>
                  <p className="text-[9px] font-bold text-gray-900 border-b border-slate-200 pb-0.5 max-w-[110px] mx-auto">
                    Graduate Scholar
                  </p>
                  <p className="text-[8px] font-extrabold text-red-600 uppercase tracking-wide">
                    Master of Business Administration
                  </p>
                </div>
                <div className="flex items-end justify-between relative z-10">
                  <div className="text-left">
                    <div className="h-1 w-6 border-b border-slate-200" />
                    <p className="text-[3px] font-bold uppercase text-slate-400 mt-0.5">
                      Registrar
                    </p>
                  </div>
                  <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full border border-dashed border-white/20" />
                  </div>
                  <div className="text-right">
                    <div className="h-1 w-6 border-b border-slate-200" />
                    <p className="text-[3px] font-bold uppercase text-slate-400 mt-0.5">
                      Vice Chancellor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
              <span>100% Secure Student Credentials</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: SCROLLABLE CONTENT ── */}
        <div className="w-full lg:w-7/12">
          {/* Heading & Description */}
          <div className="mb-10">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              Why <span className="text-red-500">Amity University</span> Online?
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed sm:text-lg">
              Choose <strong>{universityName}</strong> for flexible, accredited
              programs tailored to real-world career growth. Gain practical
              skills through expert faculty and industry-focused learning. Our
              advanced digital platform ensures a smooth and engaging learning
              experience from anywhere.
            </p>
          </div>

          {/* Feature Cards — scroll-activated */}
          <div className="flex flex-col gap-4 border-t border-slate-100 pt-8">
            {coreFeatures.map((feat, index) => {
              const IconComponent = feat.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={feat.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`
                    flex gap-4 rounded-2xl border p-5 
                    transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "border-red-100 bg-white shadow-md scale-[1.01]"
                        : "border-slate-100 bg-white/60 shadow-sm opacity-50"
                    }
                  `}
                >
                  <div
                    className={`
                      flex h-11 w-11 shrink-0 items-center justify-center 
                      rounded-xl border transition-all duration-500
                      ${
                        isActive
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-slate-50 text-slate-400 border-slate-100"
                      }
                    `}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3
                      className={`
                        text-base font-bold transition-colors duration-500
                        ${isActive ? "text-red-500" : "text-gray-400"}
                      `}
                    >
                      {feat.title}
                    </h3>
                    <p
                      className={`
                        mt-1.5 text-sm leading-relaxed font-medium transition-colors duration-500
                        ${isActive ? "text-gray-600" : "text-gray-400"}
                      `}
                    >
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
