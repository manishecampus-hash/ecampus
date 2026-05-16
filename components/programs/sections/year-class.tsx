"use client";

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
    <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
        <span>{progress}%</span>
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
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
            Your Cohort
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Who’s In Your Class?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Professionals from 15+ industries, creating a vibrant, peer-learning
            environment.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          {["By Industry", "By Experience", "By Gender"].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setProfileTab(index)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                profileTab === index
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-red-400 hover:text-red-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProfileBars tab={profileTab} />

          {/* Stats Cards */}
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
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-3xl font-extrabold text-red-600">
                  {item.value}
                </div>

                <div className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
