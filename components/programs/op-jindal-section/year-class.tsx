"use client";

import { Section } from "@/components/ui/section";
import { useEffect, useState } from "react";

function ProfileBars({ tab }: { tab: number }) {
  const data = [
    [
      { label: "IT & Software", value: 85 },
      { label: "Finance", value: 70 },
      { label: "Marketing", value: 60 },
      { label: "Healthcare", value: 45 },
    ],
    [
      { label: "0–2 Years", value: 40 },
      { label: "3–5 Years", value: 75 },
      { label: "6–10 Years", value: 65 },
      { label: "10+ Years", value: 35 },
    ],
    [
      { label: "Male", value: 68 },
      { label: "Female", value: 30 },
      { label: "Others", value: 2 },
    ],
  ];

  return (
    <div className="space-y-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {data[tab].map((item, index) => (
        <AnimatedBar
          key={item.label}
          label={item.label}
          value={item.value}
          delay={index * 200}
        />
      ))}
    </div>
  );
}

function AnimatedBar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let current = 0;

      const interval = setInterval(() => {
        current += 1;

        if (current >= value) {
          current = value;
          clearInterval(interval);
        }

        setProgress(current);
      }, 15);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-gray-700">
        <span>{label}</span>

        <span className="font-bold text-red-600">{progress}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-red-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function YearClass() {
  const [profileTab, setProfileTab] = useState(0);

  return (
    <>
      {/* --- Section 1: Class Profile ---
          BEFORE: <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          AFTER:  <Section> handles all px, py, and max-w automatically
      */}

      <Section className="bg-white !pt-0 !pb-16 sm:!pb-20">
        <div className="text-center">
          {/* Heading */}
          <div className="mb-10">
            <span className="mb-4 inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
              1 Year MBA — O.P. Jindal
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Who’s In Your <span className="text-red-600">Class?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Join a diverse cohort of ambitious professionals from top
              industries and experience levels. Learn through collaborative
              discussions, peer networking, and real-world business insights
              inside the O.P. Jindal Global University 1-Year MBA program.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {["By Industry", "By Experience", "By Gender"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setProfileTab(index)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  profileTab === index
                    ? "border-red-600 bg-red-600 text-white shadow-md"
                    : "border-gray-300 bg-white text-gray-700 hover:border-red-400 hover:text-red-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left */}
            <ProfileBars tab={profileTab} />

            {/* Right */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  value: "12K+",
                  title: "Enrolled Learners",
                },
                {
                  value: "15+",
                  title: "Industries Represented",
                },
                {
                  value: "4.8/5",
                  title: "Average Rating",
                },
                {
                  value: "87%",
                  title: "Promoted or Switched Roles",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-3xl font-extrabold text-red-600 sm:text-4xl">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 rounded-3xl border border-red-100 bg-red-50 px-6 py-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Build Powerful Industry Connections
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              The O.P. Jindal Global University 1-Year MBA cohort includes
              professionals from technology, finance, healthcare, marketing, and
              consulting backgrounds — creating a strong peer-learning ecosystem
              that enhances collaboration, leadership, and career growth.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
