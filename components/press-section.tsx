"use client";

import { pressArticles } from "@/data/press-section";

const articles = [...pressArticles, ...pressArticles];

export function PressSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-3 sm:mb-4">
            Media & Recognition
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            Making Headlines
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl text-pretty mx-auto">
            Our journey and impact, as shared by the nation's most respected
            voices.
          </p>
        </div>

        {/* Marquee */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="relative overflow-hidden border-t border-b border-red-100">
            {/* Gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

            <div
              className="flex w-max items-stretch"
              style={{ animation: "marquee 40s linear infinite" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {articles.map((article, i) => (
                <a
                  key={i}
                  href={article.href}
                  className="group flex flex-col gap-3 px-5 py-6 bg-white hover:bg-red-50/40 transition-colors duration-200 min-w-[240px] max-w-[320px]"
                  style={{
                    width: "fit-content",
                    flexShrink: 0,
                    borderRight: "1px solid #fee2e2",
                    textDecoration: "none",
                  }}
                >
                  {/* Logo */}
                  <div className="h-24 w-full flex items-center justify-center mb-1">
                    <img
                      src={article.logo}
                      alt={article.name}
                      className="h-16 sm:h-18 lg:h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `<span class="text-xl font-bold text-red-300">${article.abbr}</span>`;
                        }
                      }}
                    />
                  </div>

                  {/* Headline */}
                  <p className="text-sm leading-relaxed text-gray-800 font-medium">
                    {article.headline}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <span className="text-sm font-semibold text-red-600 group-hover:text-red-700">
                      Read More
                    </span>

                    <div className="relative flex items-center transition-transform duration-200 group-hover:translate-x-1">
                      <span className="w-5 h-[1.5px] bg-red-600" />
                      <span
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "4px solid transparent",
                          borderBottom: "4px solid transparent",
                          borderLeft: "6px solid #dc2626",
                        }}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
