"use client";

import { useEffect, useState } from "react";

const heroStats = [
  { label: "Listed Universities", value: 100, suffix: "+" },
  { label: "Program Rating", value: 4.6, suffix: "/5", decimals: 1 },
  { label: "Learner Associated", value: 10000, suffix: "+" },
];

function CountUpNumber({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(value * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  const formattedValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString("en-IN");

  return (
    <span>
      {formattedValue}
      {suffix}
    </span>
  );
}

export function HeroStatsSection() {
  return (
    <section className="bg-[#f7f7f7] px-4 py-3">
      <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.05)] sm:px-8">
        <div className="grid grid-cols-1 divide-y divide-gray-100 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden px-4 py-2.5"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 transition group-hover:opacity-100" />

              <p className="mb-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.35em] text-gray-400">
                {stat.label}
              </p>

              <p className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-2xl font-extrabold leading-tight text-transparent sm:text-3xl">
                <CountUpNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
