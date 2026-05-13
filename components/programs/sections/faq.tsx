"use client";

import React from "react";
import { faqs } from "@/data/faqs";
import { Section } from "@/components/ui/section";

export const FAQSection = () => {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-red-50 bg-white shadow-sm"
            >
              {/* Question */}
              <div className="flex items-start gap-4 px-5 pt-5">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-600 text-xs font-bold text-white">
                  Q
                </span>

                <span className="text-base font-bold leading-tight text-slate-900 sm:text-lg">
                  {faq.question}
                </span>
              </div>

              {/* Answer */}
              <div className="px-6 pb-5 pt-4">
                <div className="mb-4 h-px w-full bg-red-50" />

                <div className="pl-10 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
