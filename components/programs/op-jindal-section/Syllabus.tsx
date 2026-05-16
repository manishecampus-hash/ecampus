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
  Briefcase,
  Globe,
  GraduationCap,
} from "lucide-react";
import EcampusCta from "@/components/ui/cta";
import { Section } from "@/components/ui/section";

export function SyllabusSection() {
  const stats = [
    {
      label: "Hours of Learning",
      value: "280+",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      label: "Industry Case Studies",
      value: "15+",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Live Faculty Sessions",
      value: "20+",
      icon: <Video className="h-4 w-4" />,
    },
    {
      label: "Capstone Projects",
      value: "1",
      icon: <Layout className="h-4 w-4" />,
    },
  ];

  const modules = [
    {
      title: "Business Strategy & Leadership",
      duration: "4 Weeks",
      description:
        "Develop strategic leadership skills and understand how businesses create competitive advantage in modern industries.",
      points: [
        "Strategic decision-making",
        "Leadership frameworks",
        "Business growth models",
      ],
    },
    {
      title: "Marketing Management & Digital Strategy",
      duration: "3 Weeks",
      description:
        "Learn modern marketing concepts, digital customer engagement, and brand positioning strategies.",
      points: [
        "Digital marketing strategy",
        "Consumer behavior",
        "Brand management",
      ],
    },
    {
      title: "Financial Management for Managers",
      duration: "4 Weeks",
      description:
        "Understand financial planning, budgeting, investment analysis, and managerial finance concepts.",
      points: [
        "Financial analysis",
        "Budget planning",
        "Investment decision-making",
      ],
    },
    {
      title: "Human Resource & Organizational Behaviour",
      duration: "3 Weeks",
      description:
        "Explore workforce management, organizational culture, employee engagement, and performance management.",
      points: [
        "Talent management",
        "Organizational behavior",
        "Employee performance metrics",
      ],
    },
    {
      title: "Operations & Supply Chain Management",
      duration: "3 Weeks",
      description:
        "Learn how businesses optimize operations, logistics, and supply chain performance for efficiency.",
      points: [
        "Operations planning",
        "Supply chain strategy",
        "Process optimization",
      ],
    },
    {
      title: "Business Analytics & Data-Driven Decision Making",
      duration: "4 Weeks",
      description:
        "Gain practical exposure to analytics tools and business intelligence for data-backed decisions.",
      points: [
        "Business dashboards",
        "Data visualization",
        "Analytics-driven insights",
      ],
    },
    {
      title: "Entrepreneurship & Innovation",
      duration: "2 Weeks",
      description:
        "Understand startup ecosystems, innovation frameworks, and entrepreneurial business planning.",
      points: [
        "Startup fundamentals",
        "Innovation management",
        "Business model creation",
      ],
    },
    {
      title: "Global Business Environment",
      duration: "2 Weeks",
      description:
        "Learn global business trends, international markets, and cross-cultural management strategies.",
      points: [
        "International business",
        "Global trade concepts",
        "Cross-cultural leadership",
      ],
    },
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, modules.length - cardsPerView);

  const [activeIndex, setActiveIndex] = useState(0);

  const visibleModules = useMemo(() => {
    return modules.slice(activeIndex, activeIndex + cardsPerView);
  }, [activeIndex]);

  const prev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <>
      <Section className="bg-white ">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
              <GraduationCap className="h-4 w-4" />
              MBA Curriculum
            </span>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              O.P. Jindal Global University{" "}
              <span className="text-red-600">Online MBA Syllabus</span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Industry-focused MBA curriculum designed for working professionals
              with live classes, practical projects, case studies, and global
              business exposure.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-2 gap-3 rounded-3xl border border-slate-100 bg-slate-50 p-3 sm:mb-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                  {stat.icon}
                </div>

                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>

                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Desktop Slider */}
          <div className="relative hidden md:block">
            {/* Left Arrow */}
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="absolute -left-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-lg transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              disabled={activeIndex === maxIndex}
              className="absolute -right-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-lg transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {visibleModules.map((module, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Card Top */}
                  <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 text-white">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                      <Calendar className="h-4 w-4" />
                      {module.duration}
                    </div>

                    <h3 className="min-h-[60px] text-lg font-bold leading-snug">
                      {module.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-5 text-sm leading-7 text-gray-600">
                      {module.description}
                    </p>

                    <ul className="mb-6 flex-1 space-y-3">
                      {module.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <button className="rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-500">
                      View Module
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-red-600" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
              {modules.map((module, idx) => (
                <div
                  key={idx}
                  className="w-[88%] shrink-0 snap-center overflow-hidden rounded-3xl border border-slate-200 bg-white"
                >
                  <div className="bg-gradient-to-r from-red-600 to-red-500 p-5 text-white">
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                      <Calendar className="h-4 w-4" />
                      {module.duration}
                    </div>

                    <h3 className="text-base font-bold leading-snug">
                      {module.title}
                    </h3>
                  </div>

                  <div className="p-5">
                    <p className="mb-4 text-sm leading-7 text-gray-600">
                      {module.description}
                    </p>

                    <ul className="space-y-2.5">
                      {module.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-3 text-sm text-gray-700"
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

          {/* Bottom Highlights */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Briefcase className="mx-auto mb-3 h-8 w-8 text-red-500" />
              <h4 className="text-base font-bold text-slate-900">
                Industry-Oriented Learning
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Curriculum aligned with modern business and leadership demands.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Globe className="mx-auto mb-3 h-8 w-8 text-red-500" />
              <h4 className="text-base font-bold text-slate-900">
                Global Business Perspective
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn international business strategies and global market
                trends.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Layout className="mx-auto mb-3 h-8 w-8 text-red-500" />
              <h4 className="text-base font-bold text-slate-900">
                Practical MBA Projects
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Gain hands-on business exposure through real-world applications.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <EcampusCta />
    </>
  );
}
