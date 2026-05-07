// "use client";

// const steps = [
//   {
//     number: "1",
//     color: "#ff362b",
//     bold: "60 Seconds",
//     label: "Discover Universities",
//   },
//   {
//     number: "2",
//     color: "#16a34a",
//     bold: "Quick Apply",
//     label: "Submit Your Application",
//   },
//   {
//     number: "3",
//     color: "#1e3a5f",
//     bold: "Fast Support",
//     label: "Get Offer & Enrollment",
//   },
// ];

// export function FeaturesSection() {
//   return (
//     <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Top row */}
//         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 sm:mb-10">
//           {/* Left */}
//           <div className="flex-1">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="flex items-center gap-1">
//                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                   <path
//                     d="M4 18L10 6l6 12"
//                     stroke="#2563eb"
//                     strokeWidth="2.2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M7 13h6"
//                     stroke="#2563eb"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                   />
//                 </svg>

//                 <span className="text-sm font-bold text-gray-800 tracking-tight">
//                   elevate
//                 </span>
//               </div>

//               <div className="flex items-center gap-1 bg-red-50 border border-red-100 rounded-full px-2 py-0.5">
//                 <span className="text-xs font-black text-red-600 tracking-tighter">
//                   ≡⏱
//                 </span>
//                 <span className="text-xs font-black text-red-700">60</span>
//               </div>

//               <span className="text-sm font-semibold text-gray-700">
//                 Seconds
//               </span>
//             </div>

//             <div className="flex items-center gap-4">
//               <h2
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-none whitespace-nowrap"
//                 style={{
//                   fontFamily: "Georgia, 'Times New Roman', serif",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 Your admission journey
//               </h2>

//               <div className="hidden sm:block flex-1 h-px bg-gray-300 min-w-[60px] max-w-[160px]" />
//             </div>
//           </div>

//           {/* Right */}
//           <div className="lg:max-w-xs xl:max-w-sm lg:pt-2">
//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//               Explore top universities, compare courses, apply online, and
//               complete your admission with fast guidance every step of the way.
//             </p>
//           </div>
//         </div>

//         {/* Steps */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-4 bg-gray-100 rounded-xl px-6 py-5"
//             >
//               <span
//                 className="text-6xl sm:text-7xl font-black leading-none select-none flex-shrink-0"
//                 style={{
//                   color: step.color,
//                   fontFamily: "Georgia, 'Times New Roman', serif",
//                   fontStyle: "italic",
//                   lineHeight: 1,
//                 }}
//               >
//                 {step.number}
//               </span>

//               <p className="text-sm sm:text-base text-gray-700 leading-snug">
//                 <span className="font-bold text-gray-900">{step.bold}</span>{" "}
//                 {step.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
