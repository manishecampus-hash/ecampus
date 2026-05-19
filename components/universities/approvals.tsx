"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Crown,
  FileCheck2,
  Landmark,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

type UniversityKey = "muj" | "mahe" | "smu";

interface RecognitionItem {
  id: string;
  label: string;
  description: string;
  ribbon?: string;
  icon: React.ElementType;
}

const universities: { id: UniversityKey; name: string }[] = [
  { id: "muj", name: "Manipal University Jaipur" },
  { id: "mahe", name: "Manipal Academy of Higher Education" },
  { id: "smu", name: "Sikkim Manipal University" },
];

const recognitionData: Record<UniversityKey, RecognitionItem[]> = {
  muj: [
    {
      id: "naac",
      label: "NAAC A+",
      description: "Rajasthan's 1st NAAC A+ Accredited University",
      icon: Award,
    },
    {
      id: "qs",
      label: "QS Ranking",
      description: "Amongst South Asia's Top Universities (2026)",
      ribbon: "Rank 195",
      icon: Trophy,
    },
    {
      id: "ugc",
      label: "UGC Entitled",
      description: "Online Degrees Equivalent to Campus Degree",
      icon: Landmark,
    },
    {
      id: "aicte",
      label: "AICTE",
      description: "AICTE Norms Compliant",
      icon: BadgeCheck,
    },
    {
      id: "impact",
      label: "Impact Ranking",
      description: "Amongst World's Top 400 Universities (2025)",
      ribbon: "Ranked 301-400",
      icon: Crown,
    },
    {
      id: "week",
      label: "The Week",
      description: "Amongst Private & Deemed Multidisciplinary Universities",
      ribbon: "Rank 15",
      icon: Sparkles,
    },
  ],
  mahe: [
    {
      id: "naac",
      label: "NAAC A++",
      description: "Recognized for high-quality academic excellence",
      icon: Award,
    },
    {
      id: "nirf",
      label: "NIRF Ranked",
      description: "Consistently ranked among leading Indian institutions",
      ribbon: "Top Ranked",
      icon: Trophy,
    },
    {
      id: "ugc",
      label: "UGC Entitled",
      description: "Online learning programs recognized by UGC",
      icon: Landmark,
    },
    {
      id: "degree",
      label: "Valid Degree",
      description: "Online degree validity equivalent to regular mode",
      icon: FileCheck2,
    },
    {
      id: "global",
      label: "Global Recognition",
      description: "Accepted for professional and higher education pathways",
      icon: Building2,
    },
    {
      id: "quality",
      label: "Academic Quality",
      description: "Strong curriculum, faculty, and student support system",
      icon: CheckCircle2,
    },
  ],
  smu: [
    {
      id: "ugc",
      label: "UGC Entitled",
      description: "Approved for online higher education programs",
      icon: Landmark,
    },
    {
      id: "naac",
      label: "NAAC Accredited",
      description: "Accredited institution with recognized academic systems",
      icon: Award,
    },
    {
      id: "approved",
      label: "Recognized University",
      description: "Degree programs accepted for career progression",
      icon: ShieldCheck,
    },
    {
      id: "online",
      label: "Online Learning",
      description: "Flexible learning mode for working professionals",
      icon: Sparkles,
    },
    {
      id: "career",
      label: "Career Ready",
      description: "Curriculum aligned with industry-focused outcomes",
      icon: BadgeCheck,
    },
    {
      id: "support",
      label: "Learner Support",
      description: "Structured student support and digital learning assistance",
      icon: CheckCircle2,
    },
  ],
};

export default function ApprovalsSection() {
  const [activeUniversity, setActiveUniversity] =
    useState<UniversityKey>("muj");

  const activeIndex = universities.findIndex(
    (university) => university.id === activeUniversity,
  );

  const activeRecognitions = useMemo(
    () => recognitionData[activeUniversity],
    [activeUniversity],
  );

  const goToPrevious = () => {
    const previousIndex =
      activeIndex === 0 ? universities.length - 1 : activeIndex - 1;

    setActiveUniversity(universities[previousIndex].id);
  };

  const goToNext = () => {
    const nextIndex =
      activeIndex === universities.length - 1 ? 0 : activeIndex + 1;

    setActiveUniversity(universities[nextIndex].id);
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Recognition & <span className="text-red-500">Approvals</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore key accreditations, rankings, and academic recognitions
              for online degree programs.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-gray-900 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              aria-label="Previous university"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-gray-900 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              aria-label="Next university"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mb-9 flex flex-wrap gap-5">
          {universities.map((university) => {
            const isActive = activeUniversity === university.id;

            return (
              <button
                key={university.id}
                type="button"
                onClick={() => setActiveUniversity(university.id)}
                className={`rounded-full border px-6 py-3 text-sm font-black transition sm:text-base ${
                  isActive
                    ? "border-gray-900 bg-gray-900 text-white shadow-md"
                    : "border-slate-200 bg-white text-gray-800 hover:border-red-200 hover:text-red-500"
                }`}
              >
                {university.name}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {activeRecognitions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="relative flex min-h-[310px] flex-col items-center rounded-lg border border-slate-200 bg-slate-50 px-5 pb-6 pt-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-red-100 hover:bg-white hover:shadow-[0_14px_36px_rgba(239,68,68,0.12)]"
              >
                {item.ribbon && (
                  <div className="absolute -top-1 left-1/2 z-10 -translate-x-1/2">
                    <div className="relative bg-red-600 px-7 py-1.5 text-sm font-black text-white shadow-sm">
                      {item.ribbon}
                      <span className="absolute left-[-13px] top-0 h-0 w-0 border-b-[17px] border-r-[13px] border-t-[17px] border-b-transparent border-r-red-600 border-t-transparent" />
                      <span className="absolute right-[-13px] top-0 h-0 w-0 border-b-[17px] border-l-[13px] border-t-[17px] border-b-transparent border-l-red-600 border-t-transparent" />
                    </div>
                  </div>
                )}

                <div className="mt-3 flex h-36 w-full items-center justify-center rounded-2xl bg-white shadow-sm">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-500">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>

                <h3 className="mt-6 text-base font-black text-gray-900">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
