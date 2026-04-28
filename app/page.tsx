import { Header } from "@/components/ui/header-3";
// import { CarouselBanner } from '@/components/carousel-banner'
import { GlowyWavesHero } from "@/components/glowy-waves-hero";
// import { LearningPathsBanner } from "@/components/learning-paths-banner";
// import { ProgramsSection } from "@/components/programs-section";
import { PopularCoursesSection } from "@/components/popular-courses-section";
import { StatsSection } from "@/components/stats-section";
// import { FeaturesSection } from "@/components/features-section";
import { GraduatesMarquee } from "@/components/graduates-marquee";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { PressSection } from "@/components/press-section";
import AIProgramFinder from "@/components/AIProgramFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* <CarouselBanner /> */}
      <GlowyWavesHero />
      <AIProgramFinder />
      {/* <LearningPathsBanner /> */}
      {/* <ProgramsSection /> */}
      <PopularCoursesSection />
      <StatsSection />
      {/* <FeaturesSection /> */}
      <GraduatesMarquee />
      <CtaSection />
      <PressSection />
      <Footer />
    </main>
  );
}
