"use client";

import { Section } from "@/components/ui/section";

const feeOptions = [
  {
    icon: "🏦",
    title: "Partner Bank EMI",
    desc: "HDFC, ICICI, Axis Bank - no-cost EMI with instant approval",
  },
  {
    icon: "📱",
    title: "NBFC & Fintech",
    desc: "PaySense, KreditBee, EarlySalary - flexible tenures up to 36 months",
  },
  {
    icon: "🏢",
    title: "Corporate Sponsorship",
    desc: "Get your company to sponsor with B2B invoicing support",
  },
  {
    icon: "🎓",
    title: "Scholarship Available",
    desc: "Merit & need-based scholarships up to ₹40,000 available",
  },
];

export default function FeeSection() {
  return (
    <Section className="bg-white !py-10 sm:!py-14" id="fee">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
            1 Year MBA — O.P. Jindal
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Program Fee & <span className="text-red-600">Financing</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Flexible payment options to make world-class education accessible.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10" />

            <div className="relative z-10">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Total Program Fee
              </div>

              <div className="mb-2 text-4xl font-extrabold text-red-500 sm:text-5xl">
                ₹2,00,000
              </div>

              <div className="mb-6 text-sm text-slate-400 sm:text-base">
                1-Year Online MBA - Batch July 2026
              </div>

              {/* EMI Box */}
              <div className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                <div className="mb-1 text-sm font-bold text-red-400">
                  💳 No-Cost EMI
                </div>

                <div className="text-sm leading-6 text-slate-300 sm:text-base">
                  Starting from{" "}
                  <span className="font-bold text-white">₹8,500/month</span> -
                  24-month tenure
                </div>
              </div>

              {/* Button */}
              <button className="w-full rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 sm:text-base">
                Apply & Secure Seat
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4">
            {feeOptions.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-orange-100 text-2xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-1 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
