import React, { useState } from "react";
import {
  Globe2,
  PieChart,
  CheckCircle2,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Section } from "@/components/ui/section";

export function OnlineMbaWorth() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white font-sans antialiased text-slate-900">
      {/* --- Section 1: Hero Narrative ---
          BEFORE: <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-50">
                    <div className="mx-auto max-w-4xl text-center">
          AFTER:  <Section> handles all px, py, and max-w automatically */}
      <Section className="border-b border-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
            </span>
            Executive Insights
          </div>

          <h3 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl lg:text-2xl">
            Why Choose an HR Analytics Course{" "}
            <span className="text-red-600">Online?</span>
          </h3>

          <div className="space-y-4 text-sm leading-7 text-gray-700 sm:text-base lg:text-lg">
            <p>
              An HR Analytics course online helps professionals develop modern,
              data-driven HR skills that are highly valued across industries.
              From workforce planning to employee performance analysis, the
              course equips learners with practical knowledge to make smarter HR
              decisions.
            </p>

            <p className="font-semibold text-gray-900">
              Here’s why choosing an online HR analytics course is beneficial:
            </p>
          </div>

          {/* Collapsible Content Section */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded
                ? "mt-4 max-h-[1200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-4 pl-5 pt-4 text-sm leading-7 text-gray-700 sm:text-base lg:text-lg">
              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Learn In-Demand HR Skills:
                </strong>{" "}
                Gain expertise in people analytics, workforce management,
                recruitment metrics, and performance analysis.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Flexible Learning Experience:
                </strong>{" "}
                Study anytime and from anywhere while balancing your job,
                business, or personal commitments.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Industry-Relevant Curriculum:
                </strong>{" "}
                Online HR analytics courses are designed to match current
                industry trends, including AI-driven HR practices and data-based
                decision-making.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Better Career Opportunities:
                </strong>{" "}
                HR analytics skills can help professionals qualify for advanced
                HR roles and improve long-term career growth potential.
              </li>

              <li className="list-disc">
                <strong className="font-semibold text-gray-900">
                  Practical Business Insights:
                </strong>{" "}
                Learn how to analyze employee data, improve retention
                strategies, and support organizational growth through informed
                HR decisions.
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Toggle Trigger */}
        </div>
      </Section>

      {/* --- Section 2: Comparative Advantage ---
          BEFORE: <section className="px-4 py-20 bg-white sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
          AFTER:  <Section> replaces both tags */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Strategic Shift
            </h3>
            <p className="mt-2 text-gray-600 font-medium sm:text-xl">
              Why top professionals are choosing digital-first education
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-5 font-bold uppercase tracking-wider">
                    Strategic Feature
                  </th>
                  <th className="px-6 py-5 font-bold uppercase tracking-wider">
                    On-Campus MBA
                  </th>
                  <th className="px-6 py-5 font-bold uppercase tracking-wider bg-red-600">
                    Online MBA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  [
                    "Tuition & Costs",
                    "Premium (Plus housing/commute)",
                    "30-50% Cost Efficiency",
                  ],
                  [
                    "Opportunity Cost",
                    "High (2 Years Lost Income)",
                    "Zero (Active Career)",
                  ],
                  [
                    "Networking",
                    "Localized & Periodic",
                    "Global & Hyper-connected",
                  ],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-5 font-bold text-gray-900">
                      {row[0]}
                    </td>
                    <td className="px-6 py-5 text-gray-600">{row[1]}</td>
                    <td className="px-6 py-5 font-semibold text-red-600 italic">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* --- Section 3: Future Forecast ---
          BEFORE: <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-6xl">
          AFTER:  <Section> replaces both tags */}
      <Section className="bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The 2050 Vision: <br />
                <span className="text-red-600">
                  Hyper-Personalized Leadership
                </span>
              </h2>
              <p className="text-base text-gray-600 sm:text-xl">
                By 2050, learning will transcend screens. Integration with{" "}
                <strong>VR/AR and Generative AI</strong> will create immersive
                "Bio-Simulations" where leaders practice crisis management in
                real-time.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-600">
                <div className="p-3 bg-red-50 rounded-full">
                  <Globe2 className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Focus on ESG, AI Ethics, and Cross-Border Digital Management.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-blue-600">
                    <PieChart className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      Market Intelligence
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    INDIA MBA MARKET{" "}
                    <span className="text-slate-400 font-light">2050</span>
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Projected Reach
                      </p>
                      <p className="text-3xl font-bold text-gray-900">95%</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                        Market CAGR
                      </p>
                      <p className="text-3xl font-bold text-green-600">15%</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-slate-100 group">
                  <img
                    src="/gallery/growth.png"
                    alt="Growth Analysis"
                    className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-sm border border-slate-200">
                    Proprietary Forecast Data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Section 4: Credibility Grid ---
          BEFORE: <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    (no inner div — max-w was on section itself, moved inside Section)
          AFTER:  <Section> wraps it, max-w-5xl applied on inner div */}
      <Section>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Executive Cohorts",
              desc: "Network with senior leaders from Fortune 500 firms.",
            },
            {
              icon: Zap,
              title: "Real-time Impact",
              desc: "Apply Sunday's theory to Monday's board meeting.",
            },
            {
              icon: ShieldCheck,
              title: "Global Accreditation",
              desc: "Gold-standard AACSB and EQUIS certifications.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <item.icon className="h-10 w-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-base font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
