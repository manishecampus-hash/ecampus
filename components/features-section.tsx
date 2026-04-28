// import {
//   BookOpen,
//   Users,
//   Zap,
//   Award,
//   Smartphone,
//   Briefcase
// } from 'lucide-react'

// export function FeaturesSection() {
//   const features = [
//     {
//       icon: BookOpen,
//       title: 'Expert-Led Content',
//       description: 'Learn from industry professionals and university faculty with real-world experience and proven track records.',
//     },
//     {
//       icon: Smartphone,
//       title: '100% Online & Mobile',
//       description: 'Study anytime, anywhere on any device. Perfect for busy professionals balancing work and learning.',
//     },
//     {
//       icon: Users,
//       title: 'Supportive Community',
//       description: 'Connect with fellow learners, participate in group projects, and build lasting professional networks.',
//     },
//     {
//       icon: Award,
//       title: 'Recognized Credentials',
//       description: 'Earn certificates and degrees recognized by leading employers across all major industries.',
//     },
//     {
//       icon: Zap,
//       title: 'Hands-On Projects',
//       description: 'Work on real-world projects and build a portfolio that impresses potential employers.',
//     },
//     {
//       icon: Briefcase,
//       title: 'Career Services',
//       description: 'Get resume reviews, interview prep, and direct connections to hiring partners.',
//     },
//   ]

//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
//             Why Choose Elevate
//           </span>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
//             Everything You Need to Succeed
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
//             We&apos;ve designed our platform with your success in mind, combining quality education with practical support.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon
//             return (
//               <div key={index} className="card-hover p-8 bg-white rounded-xl border border-gray-100">
//                 {/* Icon */}
//                 <div className="inline-block p-3 bg-red-50 rounded-lg mb-4">
//                   <Icon className="w-6 h-6 text-red-600" />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
