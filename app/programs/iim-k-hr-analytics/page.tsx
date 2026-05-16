"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Award,
  BarChart3,
  CheckCircle2,
  Target,
  Zap,
  ArrowUpRight,
  ChevronLeft,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";
import { OnlineMbaWorth } from "@/components/programs/sections/growth";
import { SyllabusSection } from "@/components/programs/sections/Syllabus";

import { FAQSection } from "@/components/programs/sections/faq";

// Section component — replaces <section> + inner <div className="mx-auto max-w-7xl px-4 ...">
// It gives every section the same consistent spacing automatically:
// px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20 lg:pt-8
import { Section } from "@/components/ui/section";
import AboutProgram from "@/components/programs/sections/about";
import HrAnalyticsTools from "@/components/programs/sections/analyticstools";
import YearClass from "@/components/programs/sections/year-class";
import FeeSection from "@/components/programs/sections/fee";

export default function ProgramDetailsPage() {
  // seatsLeft — shows how many seats remain in the hero badge
  // starts at 12, decreases by 1 every 45 seconds to create urgency
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    // setInterval runs the function every 45000ms (45 seconds)
    const timer = setInterval(() => {
      // prev is the current value of seatsLeft
      // if seats > 3, reduce by 1 — stops at 3 so it never goes to 0
      setSeatsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000);

    // cleanup: when component unmounts, clear the interval to avoid memory leak
    return () => clearInterval(timer);
  }, []); // [] means this runs only once when component first loads

  return (
    <>
      <Header />

      <main className="bg-white">
        {/* ============================================================
            HERO SECTION
            NOTE: Hero uses a plain <section> not <Section> component
            because it has a special bg-slate-50 background + SVG grid pattern
            and needs overflow-hidden — easier to keep custom here
            ============================================================ */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50 pt-12 pb-14 lg:pt-14 lg:pb-16">
          {/* Background SVG grid — purely decorative, very low opacity */}
          <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
            <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
              <defs>
                {/* Repeating grid pattern — 40x40 squares */}
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 40L40 40M40 0L40 40"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Hero content — relative so it sits above the absolute SVG background */}
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              {/* LEFT — text content */}
              <div>
                {/* Urgency badge — animate-pulse makes it slowly fade in/out */}
                <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200 animate-pulse">
                  {/* Ping dot — outer span pings (expands + fades), inner is the solid dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                  </span>
                  {/* seatsLeft is the live state value that decreases every 45s */}
                  ONLY {seatsLeft} SEATS LEFT FOR JUNE 2026 BATCH
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-red-500"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Courses
                </Link>

                <div className="mt-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-600">
                    <Award className="h-4 w-4" />
                    Popular Program
                  </span>
                </div>

                <h1 className="mt-4 text-4xl font-bold text-gray-900 leading-tight sm:text-5xl lg:text-6xl">
                  IIM K <span className="text-red-500">HR Analytics</span>
                </h1>

                <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-xl">
                  Master the art of data-driven decision making. Bridge the gap
                  between HR strategy and business outcomes with IIM Kozhikode's
                  premier executive program.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="#apply"
                    className="flex items-center gap-2 rounded-full bg-red-500 px-8 py-3 font-bold text-white shadow-lg shadow-red-200 transition hover:scale-105 hover:bg-red-600 active:scale-95"
                  >
                    Apply Now
                  </Link>
                  <button className="rounded-full border border-slate-200 bg-white px-8 py-3 font-bold text-slate-700 transition hover:bg-slate-50">
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* RIGHT — image with floating badge */}
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
                  <img
                    src="/courses/iim-kozhikode-.jpg"
                    alt="IIM K HR Analytics"
                    className="h-[400px] w-full object-cover"
                  />
                </div>

                {/* Floating badge — absolute positioned over the image bottom-left
                    z-20 so it sits above the image (which is z-10) */}
                <div className="absolute -bottom-5 -left-5 z-20 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-green-100 p-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Current Status
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        Admissions Open
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ABOUT SECTION
            BEFORE: <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            AFTER:  <Section> handles all spacing + max-w automatically
            ============================================================ */}

        <AboutProgram />
        <HrAnalyticsTools />

        {/* SyllabusSection and FeeSection already use Section internally */}
        <SyllabusSection />
        <FeeSection />

        {/* ============================================================
            COMPARISON SECTION
            BEFORE: <section className="mx-auto max-w-7xl px-4 py-12 ...">
            AFTER:  <Section> handles it
            ============================================================ */}
        <YearClass />
        <Section>
          <div className="mb-8 text-center sm:mb-12">
            <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
              Why IIMK
            </span>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Industry Comparison
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-xl">
              See how IIMK certification stands out
            </p>
          </div>

          {/* Two column grid — left gray (cons), right red (pros) */}
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 md:grid-cols-2">
            <div className="bg-slate-50 p-8">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-slate-400">
                <XCircle className="h-5 w-5" />
                Standard HR Courses
              </h3>
              <ul className="space-y-3 text-base text-gray-600">
                <li>✕ Theory-based learning only</li>
                <li>✕ No access to IIM faculty</li>
                <li>✕ Local certification recognition</li>
                <li>✕ Basic tool coverage</li>
              </ul>
            </div>
            <div className="bg-red-500 p-8 text-white">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
                <ShieldCheck className="h-5 w-5" />
                IIMK Advantage
              </h3>
              <ul className="space-y-3 text-base font-semibold">
                <li>✓ Live Case Studies from Fortune 500</li>
                <li>✓ Direct Sessions with IIM Professors</li>
                <li>✓ Global Executive Alumni Status</li>
                <li>✓ Master Advanced Tools</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* ============================================================
            GROWTH / ROI SECTION
            BEFORE: <section className="mx-auto max-w-7xl px-4 py-12 ...">
            AFTER:  <Section> handles it
            ============================================================ */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* LEFT — text content */}
            <div>
              <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
                Exclusive ROI Feature
              </span>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                The <span className="text-red-600">Growth Simulator</span>
              </h2>
              <p className="text-base text-gray-600 sm:text-xl">
                Most programs stop at learning. We focus on your market value.
                We bridge the gap between academic theory and the actual salary
                benchmarks of top-tier HR leaders.
              </p>

              <div className="mt-8 space-y-6">
                {/* Feature row — icon on left, text on right */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-red-500 shadow-md ring-1 ring-slate-100">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      Skill-to-Role Mapping
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 max-w-sm">
                      We analyze 1,000+ HR Job Descriptions to ensure your
                      learning matches the requirements of high-paying strategic
                      roles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-red-500 shadow-md ring-1 ring-slate-100">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      Market Value Assessment
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 max-w-sm">
                      Get clarity on which specific analytics modules contribute
                      most to your next salary negotiation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — career transformation card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100">
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-bold text-gray-900">
                  Career Transformation Path
                </h3>
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                  Est. Projections 2026
                </span>
              </div>

              <div className="space-y-5">
                {/* Current role box — gray background */}
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 border border-slate-100">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Current Role
                    </p>
                    <p className="font-bold text-gray-700">HR Specialist</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Avg. Salary
                    </p>
                    <p className="font-bold text-gray-600">₹6L - ₹10L</p>
                  </div>
                </div>

                {/* Animated connector line — dot → gradient line → dot
                    visually shows progression from current to future role */}
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-200"></div>
                    <div className="h-8 w-[2px] bg-gradient-to-b from-slate-200 via-red-200 to-red-500"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                  </div>
                </div>

                {/* Future role box — red border highlight
                    -left-3 on the Zap icon: absolute position hangs it off the left edge of the card */}
                <div className="relative flex items-center justify-between rounded-2xl border-2 border-red-500 bg-red-50/30 p-5 shadow-lg shadow-red-100">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full bg-red-500 p-1.5 text-white shadow-lg ring-4 ring-white">
                    <Zap className="h-4 w-4 fill-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                      Post IIMK Program
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      Strategic HRBP
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                      Salary Hike
                    </p>
                    <p className="flex items-center justify-end gap-1 text-xl font-bold text-green-600">
                      <ArrowUpRight className="h-5 w-5" />
                      40-55%
                    </p>
                  </div>
                </div>

                <p className="text-center text-[11px] text-slate-400 italic">
                  *Real-world results vary based on individual experience and
                  interview performance.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* OnlineMbaWorth and FAQSection already use Section internally */}
        <OnlineMbaWorth />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
