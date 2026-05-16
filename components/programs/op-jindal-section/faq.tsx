"use client";

import React from "react";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    question:
      "What is the duration of the O.P. Jindal Global University 1-Year MBA?",
    answer:
      "The program is designed as an accelerated 1-year online MBA that helps professionals gain advanced business knowledge and leadership skills in a shorter duration.",
  },
  {
    question: "Is the O.P. Jindal Global University Online MBA recognized?",
    answer:
      "Yes, O.P. Jindal Global University is a globally recognized institution and holds prestigious accreditations including AACSB, ensuring high academic standards and international credibility.",
  },
  {
    question: "Who is eligible to apply for this MBA program?",
    answer:
      "Graduates from recognized universities with professional experience are eligible to apply. The program is ideal for working professionals, entrepreneurs, and managers looking to accelerate career growth.",
  },
  {
    question: "What specialisations are available in the MBA program?",
    answer:
      "The program offers industry-focused MBA specialisations such as Marketing, Finance, HR Management, Business Analytics, Operations, Data Science & AI, and International Business.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Classes are delivered through a flexible online learning format that includes live sessions, recorded lectures, case studies, projects, and interactive faculty discussions.",
  },
  {
    question: "Does the program offer placement or career support?",
    answer:
      "Yes, learners receive career assistance including resume building, interview preparation, networking opportunities, and executive career guidance support.",
  },
  {
    question: "Are EMI or financing options available?",
    answer:
      "Yes, flexible EMI and financing options are available through partner banks and fintech providers to make the program more accessible for professionals.",
  },
  {
    question:
      "What makes the JGU 1-Year MBA different from traditional MBA programs?",
    answer:
      "The JGU 1-Year MBA combines accelerated learning, industry-oriented curriculum, global exposure, modern business skills, and flexible online delivery for working professionals.",
  },
];

export const FAQSection = () => {
  return (
    <Section className="bg-white !py-10 sm:!py-14">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
            1 Year MBA — O.P. Jindal
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Get answers to the most common questions about the O.P. Jindal
            Global University 1-Year Online MBA program, eligibility, fees,
            learning format, and career outcomes.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-100 hover:shadow-lg"
            >
              {/* Question */}
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-600 text-sm font-bold text-white shadow-md">
                  Q
                </span>

                <h3 className="text-base font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-red-600 sm:text-lg">
                  {faq.question}
                </h3>
              </div>

              {/* Divider */}
              <div className="my-4 ml-12 h-px bg-gray-100" />

              {/* Answer */}
              <div className="ml-12 text-sm leading-7 text-gray-600 sm:text-base">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
