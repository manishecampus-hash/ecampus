"use client";

import React, { useMemo, useState } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Video,
  Layout,
  FileText,
} from "lucide-react";
import EcampusCta from "@/components/ui/cta";

export function SyllabusSection() {
  const stats = [
    {
      label: "Hours of Learning",
      value: "280+",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      label: "Real-World Case Studies",
      value: "3",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Live Sessions",
      value: "20+",
      icon: <Video className="h-4 w-4" />,
    },
    {
      label: "Capstone Project",
      value: "1",
      icon: <Layout className="h-4 w-4" />,
    },
  ];

  const modules = [
    {
      title: "Talent Acquisition & Development Analytics",
      duration: "2 Weeks",
      description:
        "Understand talent acquisition frameworks and how analytics improves hiring quality and workforce planning.",
      points: [
        "Predicting employee performance",
        "Recruitment funnel analytics",
        "Measures to track — predictive analysis",
      ],
    },
    {
      title: "Induction and Culture Fit—Value Congruence",
      duration: "2 Weeks",
      description:
        "Learn how onboarding, socialization and value congruence influence employee engagement and productivity.",
      points: [
        "Socialization process",
        "Stages of onboarding",
        "Value congruence and culture alignment",
      ],
    },
    {
      title: "Talent Retention Analytics",
      duration: "1 Week",
      description:
        "Explore retention metrics, employee behaviour signals and practical strategies to reduce attrition.",
      points: [
        "Why do employees leave organizations?",
        "Attrition indicators",
        "Retention measures to track",
      ],
    },
    {
      title: "Performance Measurement & Workforce Planning",
      duration: "2 Weeks",
      description:
        "Measure performance using data-driven decision making and workforce planning frameworks.",
      points: [
        "Performance KPIs",
        "Forecasting workforce demand",
        "Strategic planning metrics",
      ],
    },
    {
      title: "HR Dashboards & Decision Support",
      duration: "1 Week",
      description:
        "Build practical HR dashboards to convert business data into actionable leadership insights.",
      points: [
        "Dashboard design",
        "Executive reporting",
        "Business interpretation",
      ],
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, modules.length - cardsPerView);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleModules = useMemo(() => {
    return modules.slice(activeIndex, activeIndex + cardsPerView);
  }, [activeIndex]);

  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <>
      <section className="bg-white px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20 lg:pt-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
              Curriculum
            </span>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 text-balance sm:text-4xl lg:text-5xl">
              IIM K HR Analytics Syllabus
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-xl">
              Industry-relevant curriculum taught by faculty and practitioners
              through case studies, live sessions, practical projects and
              applied learning.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-2 gap-3 rounded-3xl border border-slate-100 bg-slate-50 p-3 sm:mb-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Desktop carousel */}
          <div className="relative hidden md:block">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="absolute -left-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-lg transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={next}
              disabled={activeIndex === maxIndex}
              className="absolute -right-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-lg transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="grid gap-5 md:grid-cols-3">
              {visibleModules.map((module, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="bg-red-500 p-6 text-white">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                      <Calendar className="h-4 w-4" />
                      {module.duration}
                    </div>
                    <h3 className="min-h-[56px] text-lg font-bold leading-snug">
                      {module.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {module.description}
                    </p>
                    <ul className="mb-6 flex-1 space-y-2.5">
                      {module.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button className="rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-500">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === i ? "w-8 bg-gray-900" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile scroll cards */}
          <div className="md:hidden">
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
              {modules.map((module, idx) => (
                <div
                  key={idx}
                  className="w-[88%] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-white"
                >
                  <div className="bg-red-500 p-5 text-white">
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                      <Calendar className="h-4 w-4" />
                      {module.duration}
                    </div>
                    <h3 className="text-base font-bold leading-snug">
                      {module.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {module.description}
                    </p>
                    <ul className="space-y-2.5">
                      {module.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <EcampusCta />
    </>
  );
}
