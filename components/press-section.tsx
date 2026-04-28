"use client";

const pressLogos = [
  { name: "Lokma Times", href: "#", abbr: "LT" },
  { name: "Hindustan Times", href: "#", abbr: "HT" },
  { name: "ThePrint", href: "#", abbr: "TP" },
  { name: "ANI", href: "#", abbr: "ANI" },
  { name: "Digpu", href: "#", abbr: "DG" },
  { name: "LatestLY", href: "#", abbr: "LY" },
  { name: "Daily Hunt", href: "#", abbr: "DH" },
];

const logos = [...pressLogos, ...pressLogos];

export function PressSection() {
  return (
    <section className="relative overflow-hidden mb-16 sm:mb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rose-50 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, #fee2e2 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-16">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-10 px-6">
          <div className="h-px w-16 sm:w-32 bg-gray-200" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-red-600 whitespace-nowrap">
            As Featured In
          </p>
          <div className="h-px w-16 sm:w-32 bg-gray-200" />
        </div>

        {/* Marquee with cards */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex w-max items-stretch gap-4 py-2 px-4"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            {logos.map((logo, i) => (
              <a
                key={i}
                href={logo.href}
                className={[
                  "group flex items-center gap-3 px-5 py-3 rounded-2xl",
                  "border border-gray-100 bg-white/60 backdrop-blur-sm",
                  "shadow-sm hover:shadow-md",
                  "transition-all duration-300 hover:-translate-y-1",
                  "hover:border-red-200 hover:bg-red-50/40",
                ].join(" ")}
              >
                {/* Avatar */}
                <div
                  className={[
                    "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                    "text-xs font-black tracking-tight",
                    "bg-gradient-to-br from-gray-100 to-gray-200",
                    "group-hover:from-red-500 group-hover:to-rose-600",
                    "text-gray-500 group-hover:text-white",
                    "transition-all duration-300",
                  ].join(" ")}
                >
                  {logo.abbr}
                </div>

                {/* Name */}
                <span
                  className={[
                    "whitespace-nowrap text-sm font-semibold tracking-tight",
                    "transition-colors duration-200",
                    logo.name === "Digpu"
                      ? "text-gray-900 font-black"
                      : "text-gray-500 group-hover:text-gray-900",
                  ].join(" ")}
                >
                  {logo.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-gray-900 text-xs mt-10 tracking-wide">
          Trusted by leading media outlets across India
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
