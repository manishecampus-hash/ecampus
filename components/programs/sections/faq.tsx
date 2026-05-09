"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

// Section component imported — it provides consistent px, pt, pb across all sections
// It renders: <section className="px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20 lg:pt-8">
//               <div className="mx-auto max-w-7xl">
import { Section } from "@/components/ui/section";

export const FAQSection = () => {
  // Tracks which FAQ is open. null = all closed, number = that index is open
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    // BEFORE: <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
    // AFTER:  Section handles all spacing. max-w-4xl moved to inner div below
    <Section>
      {/* Narrowing the content to max-w-4xl inside the max-w-7xl Section container */}
      <div className="mx-auto max-w-4xl">
        {/* Section heading — font unified to font-bold (was font-black) */}
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            // Check if this specific FAQ item is currently open
            const isOpen = openFaq === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border bg-white shadow-sm transition-all duration-300"
                style={{
                  // Red tint border when open, light gray when closed
                  borderColor: isOpen ? "#fee2e2" : "#f1f5f9",
                  // Subtle red shadow when open
                  boxShadow: isOpen
                    ? "0 10px 15px -3px rgba(220, 38, 38, 0.05)"
                    : "",
                }}
              >
                {/* Clicking this button toggles open/close:
                    - if already open (isOpen = true)  → set null (close it)
                    - if closed (isOpen = false)        → set idx (open it) */}
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="group flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    {/* Q badge — red bg when open, light red bg when closed */}
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors"
                      style={{
                        backgroundColor: isOpen ? "#dc2626" : "#fef2f2",
                        color: isOpen ? "white" : "#dc2626",
                      }}
                    >
                      Q
                    </span>

                    {/* Question text — red when open, dark gray when closed */}
                    <span
                      className="text-base font-bold leading-tight transition-colors sm:text-lg"
                      style={{ color: isOpen ? "#dc2626" : "#1e293b" }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon — Minus when open, Plus when closed */}
                  <div className="ml-4 shrink-0">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-red-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Answer panel — only renders in DOM when isOpen is true */}
                {isOpen && (
                  <div className="px-6 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Divider line between question and answer */}
                    <div className="mb-4 h-px w-full bg-red-50" />
                    {/* pl-10 aligns answer text with question text (skipping Q badge) */}
                    <div className="pl-10 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
