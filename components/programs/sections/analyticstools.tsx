"use client";

import React from "react";
import { BarChart3, Database, LineChart, FileSpreadsheet } from "lucide-react";

const tools = [
  {
    title: "Power BI",
    icon: BarChart3,
    description:
      "Build interactive dashboards that help HR teams track attrition, hiring efficiency, workforce productivity, and employee trends through real-time reporting.",
  },
  {
    title: "Tableau",
    icon: LineChart,
    description:
      "Transform large people datasets into visual stories that make engagement, performance, and workforce behaviour easier to understand and communicate.",
  },
  {
    title: "Advanced Excel",
    icon: FileSpreadsheet,
    description:
      "Learn advanced formulas, data modelling, pivot analysis, and reporting techniques that support day-to-day HR decisions with practical business impact.",
  },
];

export default function HrAnalyticsTools() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-semibold text-[#e8000b]">
            Tools & Technology
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            HR Analytics Tools Taught in{" "}
            <span className="text-[#e8000b]">IIM Kozhikode</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Build practical capability with modern analytics platforms used by
            HR teams to understand workforce patterns, improve decision-making,
            and convert raw people data into measurable business insights.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.title}
                className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {tool.title}
                  </h3>

                  <div className="mt-4 h-px w-full bg-slate-100" />

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    {tool.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 bg-slate-50 px-8 py-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Database className="h-4 w-4 text-blue-700" />
                    Practical business-focused application
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
