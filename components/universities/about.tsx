"use client";

import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Briefcase,
  GraduationCap,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

interface AboutProgramProps {
  university?: {
    name?: string;
    fullName?: string;
  };
}

export default function AboutProgram({ university }: AboutProgramProps) {
  const universityName = university?.name || "Amity Online";
  const universityFullName = university?.fullName || "Amity University Online";

  const pillars = [
    {
      id: "academics",
      title: "Academic Excellence",
      description:
        "Nurturing top-tier global talent with a robust, research-driven curriculum structurally built for career innovation.",
      icon: GraduationCap,
    },
    {
      id: "industry",
      title: "Industry-Focused Pathways",
      description:
        "Practical learning programs spanning across Management, Commerce, Computer Applications, and Sciences.",
      icon: Briefcase,
    },
    {
      id: "delivery",
      title: "Flexible Online Delivery",
      description:
        "Immersive virtual learning ecosystem designed to fit your routine without compromising rigorous educational standards.",
      icon: Layers,
    },
  ];

  return (
    /* ============================================================
        ABOUT SECTION — AMITY UNIVERSITY ONLINE
        Centered narrative architecture emphasizing institutional pedigree
       ============================================================ */
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Centered Intro Card Container */}
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600">
          <Sparkles className="h-3.5 w-3.5" />
          About The University
        </span>

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
          Nurturing Talent, Creating <br />
          <span className="text-red-500">Future-Ready Professionals</span>
        </h2>

        <p className="mt-6 text-base text-gray-600 leading-relaxed sm:text-xl">
          <strong className="text-gray-900">{universityFullName}</strong> is one
          of India’s leading private universities, widely recognized for its
          academic excellence, global outlook, and industry-aligned frameworks.
          The institution offers a diverse portfolio of undergraduate and
          postgraduate programs across multiple digital disciplines.
        </p>
      </div>

      {/* Center Spotlight Accreditations & Compliance Callouts */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3.5 rounded-2xl border border-red-100 bg-red-50/20 p-5 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
              Accreditation
            </span>
            <p className="text-sm font-bold text-gray-900 sm:text-base">
              UGC-Approved & NAAC Accredited Status
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-slate-300 transition-colors">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Focus Metrics
            </span>
            <p className="text-sm font-bold text-gray-900 sm:text-base">
              Strong Emphasis on Research & Innovation
            </p>
          </div>
        </div>
      </div>

      {/* 3-Column Core Institutional Value Matrix Stack */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-100/80"
            >
              <div>
                {/* Icon Box with active hover state transitions */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-600 border border-slate-100 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-red-500">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Verified verification bottom label line */}
              <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide border-t border-slate-50 pt-4">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                <span>{universityName} Standard</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
