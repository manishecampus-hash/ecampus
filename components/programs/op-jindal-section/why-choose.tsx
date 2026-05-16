"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/section";
import { SyllabusSection } from "./Syllabus";
// import { FeeSection } from "./fee";
import YearClass from "./year-class";
import { FAQSection } from "./faq";
import FeeSection from "./fee";
import Specialisations from "./specialisations";

export default function WhyChooseSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Section className="border-b border-slate-100 py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          {/* Heading */}
          <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-2xl">
            Why Choose an O.P. Jindal Global University{" "}
            <span className="text-red-600">Online MBA?</span>
          </h3>

          {/* Intro */}
          <div className="space-y-3 text-sm leading-7 text-gray-700 sm:text-base lg:text-lg">
            <p>
              The O.P. Jindal Global University Online MBA is designed for
              professionals who want industry-relevant business knowledge,
              leadership capabilities, and flexible online learning from a
              globally recognized institution.
            </p>

            <p className="font-semibold text-gray-900">
              Here’s why this online MBA stands out:
            </p>
          </div>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded
                ? "mt-4 max-h-[1200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-3 pl-5 pt-2 text-left text-sm leading-7 text-gray-700 sm:text-base lg:text-lg">
              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Flexible Online Learning:
                </strong>{" "}
                Attend live sessions and learn from anywhere while balancing
                work and personal commitments.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Industry-Focused Curriculum:
                </strong>{" "}
                Learn modern business concepts including analytics, digital
                transformation, leadership, and strategic decision-making.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Global Recognition:
                </strong>{" "}
                Study at a globally ranked university known for academic
                excellence and international collaborations.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Career Advancement:
                </strong>{" "}
                Build management and leadership skills that support career
                growth, promotions, and role transitions.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Networking Opportunities:
                </strong>{" "}
                Connect with professionals from diverse industries and expand
                your professional network.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Practical Learning Approach:
                </strong>{" "}
                Gain practical exposure through case studies, projects, and
                real-world business applications.
              </li>
            </ul>
          </div>

          {/* Button */}
          <div className="mt-5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </Section>
      <Specialisations />
      <SyllabusSection />
      <FeeSection />
      <YearClass />
      <FAQSection />
    </>
  );
}
