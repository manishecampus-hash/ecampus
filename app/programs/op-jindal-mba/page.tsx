"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { OpjIntroduction } from "@/components/programs/op-jindal-section/opj-introduction";
import { ComparisonSection } from "@/components/programs/op-jindal-section/comparison-section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";

export default function Page() {
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((prev) => (prev > 3 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/50 via-slate-50 to-white pt-24 pb-20 lg:pt-28 lg:pb-24">
          {/* Background Decor */}
          <div className="absolute -top-24 -right-24 z-0 h-96 w-96 animate-pulse rounded-full bg-red-100/50 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Column: Content */}
              <div className="relative z-10 space-y-6">
                {/* 1. Live Seats Alert */}
                <div className="flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                  </span>
                  ONLY {seatsLeft} SEATS LEFT FOR JUNE 2026 BATCH
                </div>

                {/* 2. Back Button */}
                <div className="pb-1">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-semibold text-slate-500 transition-colors hover:text-red-500"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Back to Courses
                  </Link>
                </div>

                {/* 3. Hero Header */}
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-red-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-red-600 ring-1 ring-red-100">
                    Trending Program
                  </div>
                  <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
                    1 Year MBA <br />
                    <span className="text-red-600">— O.P. Jindal</span>
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                    Accelerate your career with a fast-track online MBA designed
                    for professionals who want leadership, business strategy,
                    and modern management skills.
                  </p>
                </div>

                {/* 4. Feature Tags */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <Zap className="h-3.5 w-3.5 text-red-500" /> Fast-Track
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                    <ShieldCheck className="h-3.5 w-3.5 text-red-500" /> UGC
                    Recognized
                  </div>
                </div>

                {/* 5. Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="#apply"
                    className="flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-red-200 transition hover:bg-slate-900 active:scale-95"
                  >
                    Apply Now
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <button className="rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-700 transition hover:bg-slate-50 active:scale-95">
                    Download Brochure
                  </button>
                </div>

                {/* 6. Social Proof */}
                <div className="flex items-center gap-6 pt-6">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
                    ].map((url, i) => (
                      <div
                        key={i}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm"
                      >
                        <Image
                          src={url}
                          alt={`Student ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[10px] font-bold text-white shadow-sm">
                      +5k
                    </div>
                  </div>

                  <div className="h-10 w-[1px] bg-slate-200" />

                  <div>
                    <div className="flex items-center gap-1 text-orange-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                      <span className="ml-1 text-sm font-bold text-slate-900">
                        4.9/5
                      </span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Top Rated MBA Program
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Image */}
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200">
                  <img
                    src="/courses/op.webp"
                    alt="O.P. Jindal MBA"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                {/* Floating Card */}
                {/* Floating Card - Decreased Size */}
                <div className="absolute -right-4 top-1 z-20 hidden animate-bounce-slow rounded-xl border border-white/50 bg-white/80 p-3 shadow-xl backdrop-blur-md lg:block">
                  <div className="flex items-center gap-3">
                    {/* Smaller Icon Container */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white shadow-md">
                      <Users className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 leading-none">
                        Learn From
                      </p>
                      <p className="text-xs font-black text-slate-900 mt-0.5">
                        Global Faculty
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decor Circles */}
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-red-100/30 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Tightened Components */}
        <OpjIntroduction />
        <ComparisonSection />
      </main>
      <Footer />
    </>
  );
}
