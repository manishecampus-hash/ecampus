"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  Layers,
  Clock,
  IndianRupee,
  CreditCard,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ProgramCardProps {
  id: string;
  badge: string;
  title: string;
  rating: number;
  image: string;
  specializationsCount: number;
  durationMonths: number;
  totalFees: string;
  emiStarting: string;
  slug: string;
}

export default function ProgramsSection() {
  // Define active active programmatic navigation tab
  const [activeTab, setActiveTab] = useState<"ug" | "pg" | "specs">("ug");

  // Tab configurations array mapping names to states
  const tabs = [
    { id: "ug", label: "UG Courses" },
    { id: "pg", label: "PG Courses" },
    { id: "specs", label: "Top Specializations" },
  ];

  // Dynamic datasets structured mimicking production schemas cleanly
  const programsData = {
    ug: [
      {
        id: "bba",
        badge: "BBA (Amity Online)",
        title: "Online BBA Degree",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60",
        specializationsCount: 4,
        durationMonths: 36,
        totalFees: "1,65,000 INR",
        emiStarting: "4,583 INR",
        slug: "#",
      },
      {
        id: "bcom",
        badge: "BCOM (Amity Online)",
        title: "Online B.Com Degree",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=60",
        specializationsCount: 3,
        durationMonths: 36,
        totalFees: "99,000 INR",
        emiStarting: "2,750 INR",
        slug: "#",
      },
      {
        id: "bca",
        badge: "BCA (Amity Online)",
        title: "Online BCA Degree",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=60",
        specializationsCount: 3,
        durationMonths: 36,
        totalFees: "1,50,000 INR",
        emiStarting: "4,166 INR",
        slug: "#",
      },
      {
        id: "ba",
        badge: "BA (Amity Online)",
        title: "Online BA Degree",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60",
        specializationsCount: 6,
        durationMonths: 36,
        totalFees: "85,000 INR",
        emiStarting: "3,431 INR",
        slug: "#",
      },
    ],
    pg: [
      {
        id: "mba",
        badge: "MBA (Amity Online)",
        title: "Online MBA Degree",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=60",
        specializationsCount: 12,
        durationMonths: 24,
        totalFees: "2,50,000 INR",
        emiStarting: "6,944 INR",
        slug: "#",
      },
      {
        id: "mca",
        badge: "MCA (Amity Online)",
        title: "Online MCA Degree",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=60",
        specializationsCount: 5,
        durationMonths: 24,
        totalFees: "1,80,000 INR",
        emiStarting: "5,000 INR",
        slug: "#",
      },
    ],
    specs: [
      {
        id: "spec-ai",
        badge: "Data Science (Amity Online)",
        title: "BCA with AI & Machine Learning",
        rating: 4.9,
        image: "",
        specializationsCount: 1,
        durationMonths: 36,
        totalFees: "1,95,000 INR",
        emiStarting: "5,416 INR",
        slug: "#",
      },
    ],
  };

  // Switch context baseline arrays dynamically based on tab activation
  const activePrograms: ProgramCardProps[] = programsData[activeTab];

  return (
    /* ============================================================
        PROGRAMS EXPLORER GRID CONTAINER SECTION
       ============================================================ */
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Dynamic Header Architecture centered */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600">
          <Sparkles className="h-3.5 w-3.5" />
          Education Catalog
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Amity Online <span className="text-red-500">Programs</span>
        </h2>
      </div>

      {/* Interactive Tabs Menu Control Line Array Toggle */}
      <div className="mx-auto mb-12 flex max-w-3xl justify-center rounded-2xl bg-slate-50 p-2 border border-slate-100">
        <div className="grid w-full grid-cols-3 gap-2">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-xl py-3 text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-red-500 text-white shadow-md shadow-red-100"
                    : "text-slate-600 hover:bg-white hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Program Cards Layout Grid Architecture Matrix */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {activePrograms.map((program) => (
          <div
            key={program.id}
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100"
          >
            <div>
              {/* Card Image Area + Floating Indicators absolute contextual setups */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />

                {/* Lower left pill yellow label dynamic text badge tracking */}
                <div className="absolute bottom-3 left-3 rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-extrabold text-amber-800 border border-amber-200 shadow-sm">
                  {program.badge}
                </div>

                {/* Floating dynamic star review floating layout block tag right bottom */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg bg-white px-2 py-0.5 text-xs font-bold text-gray-900 shadow-sm ring-1 ring-slate-100">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span>{program.rating}</span>
                </div>
              </div>

              {/* Title Section content context block */}
              <h3 className="mt-4 text-lg font-bold text-gray-900 tracking-tight leading-snug min-h-[3.5rem] flex items-center">
                {program.title}
              </h3>

              {/* Structural Bullet Matrix Details Parameters */}
              <div className="mt-4 space-y-3 border-t border-slate-50 pt-4">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                  <Layers className="h-4 w-4 text-slate-500 shrink-0" />
                  <span className="text-slate-500 font-medium">
                    Specializations:
                  </span>
                  <span className="text-gray-900 font-bold">
                    {program.specializationsCount}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                  <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                  <span className="text-slate-500 font-medium">Duration:</span>
                  <span className="text-gray-900 font-bold">
                    {program.durationMonths} months
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                  <IndianRupee className="h-4 w-4 text-slate-500 shrink-0" />
                  <span className="text-slate-500 font-medium">
                    Total Fees:
                  </span>
                  <span className="text-gray-900 font-bold">
                    {program.totalFees}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                  <CreditCard className="h-4 w-4 text-slate-500 shrink-0" />
                  <span className="text-slate-500 font-medium">EMI/month:</span>
                  <span className="text-red-500 font-bold">
                    Starting {program.emiStarting}
                  </span>
                </div>
              </div>
            </div>

            {/* Redesigned Clean Action Trigger Wrapper Button bottom tracking */}
            <div className="mt-6">
              <Link
                href={program.slug}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white py-2.5 text-sm font-bold text-red-500 transition-all hover:bg-red-500 hover:text-white active:scale-[0.98]"
              >
                Explore More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
