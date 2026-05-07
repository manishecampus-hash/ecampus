import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";
import { popularCourses } from "@/data/popular-courses";
export function PopularCoursesSection() {
  return (
    <section
      id="popular-courses"
      // Responsive vertical padding and horizontal padding
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-3 sm:mb-4">
            Trending Now
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            Popular Courses
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl text-pretty mx-auto">
            Discover the most sought-after courses by thousands of learners
            worldwide.
          </p>
        </div>

        {/*
          On mobile the carousel needs a little negative margin so cards can
          bleed to the edge and show the peek of the next card naturally.
          The -mx + px pair keeps content aligned with the section padding
          while giving the scroll container full-width room.
        */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <OfferCarousel offers={popularCourses} />
        </div>
      </div>
    </section>
  );
}
