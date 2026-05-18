import { Header } from "@/components/ui/header-3";
import { CarouselBanner } from "@/components/carousel-banner";
// import { GlowyWavesHero } from "@/components/glowy-waves-hero";
// import { LearningPathsBanner } from "@/components/learning-paths-banner";
// import { ProgramsSection } from "@/components/programs-section";
import { PopularCoursesSection } from "@/components/popular-courses-section";
import { StatsSection } from "@/components/stats-section";
// import { FeaturesSection } from "@/components/features-section";
import { GraduatesMarquee } from "@/components/graduates-marquee";
// import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { PressSection } from "@/components/press-section";
import AIProgramFinder from "@/components/AIProgramFinder";
import UniversitySection from "@/components/university-section";
import EcampusCta from "@/components/ui/cta";

export default function Home() {
  return (
    <main className="min-h-screen  pt-20">
      <Header />
      <div className="pt-4">
        {" "}
        {/* carousel se upar gap */}
        <CarouselBanner />
      </div>
      {/* <GlowyWavesHero /> */}
      {/* <FeaturesSection /> */}
      <AIProgramFinder />
      {/* <LearningPathsBanner /> */}
      {/* <ProgramsSection /> */}
      <PopularCoursesSection />
      <StatsSection />
      <UniversitySection />
      <GraduatesMarquee />
      {/* <CtaSection /> */}
      <EcampusCta />
      <PressSection />
      <Footer />
    </main>
  );
}

// export default function Home() {
//   return (
//     <div
//       style={{
//         margin: 0,
//         padding: "20px",
//         boxSizing: "border-box",
//         width: "100vw",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#ffffff",
//         fontFamily: "system-ui, -apple-system, sans-serif",
//         textAlign: "center",
//         gap: "12px",
//       }}
//     >
//       <h1
//         style={{
//           color: "#000000",
//           fontSize: "clamp(12px, 1vw, 18px)",
//           margin: 0,
//           fontWeight: "700",
//           letterSpacing: "-0.02em",
//         }}
//       >
//         call.ecampusapp.com
//       </h1>
//       <p
//         style={{
//           color: "#000000",
//           fontSize: "clamp(16px, 3vw, 20px)",
//           margin: 0,
//           fontWeight: "400",
//         }}
//       >
//         This is Test Page
//       </p>
//     </div>
//   );
// }
