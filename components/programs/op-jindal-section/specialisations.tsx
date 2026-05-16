"use client";

import {
  Briefcase,
  BarChart3,
  Megaphone,
  Database,
  TrendingUp,
  Users,
  Globe,
  Laptop2,
  ArrowUpRight,
} from "lucide-react";

import { Section } from "@/components/ui/section";

const specialisations = [
  {
    title: "Marketing Management",
    icon: Megaphone,
    desc: "Learn brand strategy, digital marketing, consumer behaviour, and growth marketing.",
  },
  {
    title: "Finance Management",
    icon: TrendingUp,
    desc: "Master investment analysis, financial planning, fintech, and risk management.",
  },
  {
    title: "Human Resource Management",
    icon: Users,
    desc: "Build expertise in talent acquisition, HR analytics, employee engagement, and leadership.",
  },
  {
    title: "Business Analytics",
    icon: BarChart3,
    desc: "Develop analytical thinking using data visualization, AI tools, and business intelligence.",
  },
  {
    title: "Operations Management",
    icon: Briefcase,
    desc: "Understand supply chain, logistics, quality control, and operational strategy.",
  },
  {
    title: "Data Science & AI",
    icon: Database,
    desc: "Gain practical exposure to machine learning, predictive analytics, and AI-driven decisions.",
  },
  {
    title: "International Business",
    icon: Globe,
    desc: "Explore global trade, international markets, cross-border strategy, and global economics.",
  },
  {
    title: "Information Technology",
    icon: Laptop2,
    desc: "Learn IT strategy, digital transformation, cloud systems, and technology management.",
  },
];

export default function Specialisations() {
  return (
    <Section className="relative overflow-hidden bg-[#f8fafc] !py-14 sm:!py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-red-100 bg-white px-4 py-1.5 text-sm font-semibold text-red-600 shadow-sm">
            1 Year MBA - O.P. Jindal
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Future-Ready MBA{" "}
            <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
              Specialisations
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Choose industry-focused MBA specialisations designed for ambitious
            professionals who want sharper skills, stronger leadership, and
            faster career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialisations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:bg-white hover:shadow-[0_24px_70px_rgba(220,38,38,0.16)]"
              >
                <div className="absolute right-4 top-4 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-red-50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 text-red-600 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:from-red-600 group-hover:to-rose-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-red-600">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="mb-3 text-lg font-bold leading-snug text-slate-950">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-10 rounded-full bg-red-600 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
