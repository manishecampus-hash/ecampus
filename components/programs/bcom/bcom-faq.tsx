import React from "react";

const faqs = [
  {
    question: "Is the online B.Com degree valid?",
    answer:
      "Yes, a UGC-entitled online B.Com degree is valid and equivalent to a regular degree as per applicable university guidelines.",
  },
  {
    question: "Who can apply for this program?",
    answer:
      "Students who have completed 10+2 or equivalent qualification from a recognized board can apply.",
  },
  {
    question: "Can working professionals pursue this course?",
    answer:
      "Yes, the online format is flexible and suitable for students, freshers, and working professionals.",
  },
];

export default function BComFAQ() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="font-black text-gray-900">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
