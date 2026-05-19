"use client";

import React, { useMemo, useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

type TabKey =
  | "Program Overview"
  | "Skills You Will Learn"
  | "Eligibility"
  | "Who is this Program for"
  | "Program Fee";

const tabContent: Record<
  TabKey,
  {
    heading: string;
    subtext: string;
    list: string[];
  }
> = {
  "Program Overview": {
    heading: "Program <span class='text-red-600'>Overview</span>",
    subtext:
      "The IIM Kozhikode HR Analytics programme is designed for working professionals who want to combine human resource leadership with analytical decision-making. The curriculum integrates strategic HR frameworks, business context, and modern analytics tools to help learners solve workforce challenges through data-driven insights.",
    list: [
      "Executive education from IIM Kozhikode",
      "Live faculty-led online sessions",
      "Industry-oriented case studies and practical applications",
      "Hands-on exposure to HR analytics tools and dashboards",
      "Flexible learning format for working professionals",
      "Capstone-based applied learning experience",
    ],
  },

  "Skills You Will Learn": {
    heading: "Skills You Will <span class='text-red-600'>Learn</span>",
    subtext:
      "Develop practical capabilities required to lead modern HR functions where business strategy, people management, and analytics work together.",
    list: [
      "Strategic HR management and business alignment",
      "People analytics and workforce intelligence",
      "Data interpretation and dashboard reporting",
      "Talent acquisition and retention analytics",
      "Performance measurement frameworks",
      "Compensation and workforce planning",
      "Predictive modelling for HR decision-making",
      "AI-enabled human capital insights",
    ],
  },

  Eligibility: {
    heading: "Minimum <span class='text-red-600'>Eligibility</span>",
    subtext:
      "The programme is intended for professionals who wish to strengthen analytical thinking within HR, people strategy, and organisational decision-making.",
    list: [
      "Bachelor’s degree (10+2+3) from a recognised university",
      "Diploma holders with relevant professional experience may also apply",
      "Minimum one year of work experience preferred",
      "Suitable for HR, operations, consulting, and business professionals",
      "Basic familiarity with business functions is beneficial",
      "No prior analytics background required",
    ],
  },

  "Who is this Program for": {
    heading: "Who Can <span class='text-red-600'>Pursue This Program?</span>",
    subtext:
      "Ideal for professionals aiming to move beyond traditional HR execution and build strategic capability through data-backed decision-making.",
    list: [
      "HR executives and people managers",
      "Mid-career professionals transitioning into strategic HR roles",
      "Business leaders managing workforce decisions",
      "Analysts interested in people and organisational data",
      "Entrepreneurs building high-performance teams",
      "Professionals preparing for leadership roles in HR",
    ],
  },

  "Program Fee": {
    heading: "Program <span class='text-red-600'>Fee & Investment</span>",
    subtext:
      "The programme fee is structured to provide strong long-term career value while offering flexibility for professionals balancing work and learning commitments.",
    list: [
      "Transparent fee structure with no hidden charges",
      "Flexible payment and instalment options",
      "EMI facilities available through supported partners",
      "Access to live sessions, learning materials, and assessments",
      "Certificate awarded upon successful completion",
      "Strong long-term career ROI through executive upskilling",
    ],
  },
};

const tabs = Object.keys(tabContent) as TabKey[];

export default function AboutProgram() {
  const [activeTab, setActiveTab] = useState<TabKey>("Skills You Will Learn");

  const currentContent = useMemo(() => tabContent[activeTab], [activeTab]);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600">
            About
          </span>

          <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-800 sm:text-4xl lg:text-4xl">
            About IIM K HR Analytics Course
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Empowering HR professionals with data-driven insights and strategic
            decision-making capabilities.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-2 rounded-3xl border border-slate-100 bg-white p-2">
              {tabs.map((tab) => {
                const active = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-sm font-semibold transition-all duration-200 sm:text-[15px] ${
                      active
                        ? "bg-red-50 text-red-600 shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="pr-3 leading-snug">{tab}</span>

                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-all duration-200 ${
                        active
                          ? "translate-x-1 opacity-100"
                          : "opacity-0 group-hover:opacity-60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="rounded-[28px] border border-slate-100 bg-slate-50 p-6 shadow-sm sm:p-8 lg:min-h-[520px] lg:p-12">
              <div
                key={activeTab}
                className="animate-in fade-in slide-in-from-right-4 duration-300"
              >
                <h3
                  className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
                  dangerouslySetInnerHTML={{
                    __html: currentContent.heading,
                  }}
                />

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  {currentContent.subtext}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {currentContent.list.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm"
                    >
                      <div className="mt-0.5 rounded-full border border-red-100 bg-red-50 p-1">
                        <CheckCircle2 className="h-4 w-4 text-red-500" />
                      </div>

                      <span className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
