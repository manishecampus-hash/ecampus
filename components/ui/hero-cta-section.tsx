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
    const duration = 1400;
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
    <section className="px-4 py-8">
      <div className="mx-auto max-w-[1600px] rounded-[18px] border border-gray-100 bg-white px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-1 divide-y divide-gray-100 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-4 py-4 sm:py-3">
              <p className="mb-3 text-[11px] font-bold uppercase leading-none tracking-[0.45em] text-gray-400">
                {stat.label}
              </p>

              <p className="text-4xl font-extrabold leading-none text-red-600 sm:text-[40px]">
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
