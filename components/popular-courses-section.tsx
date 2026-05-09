import { OfferCarousel } from "@/components/ui/offer-carousel";
import { popularCourses } from "@/data/popular-courses";

export function PopularCoursesSection() {
  return (
    <section
      id="popular-courses"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
            Trending Now
          </span>

          <h2 className="mb-3 text-3xl font-bold text-gray-900 text-balance sm:mb-4 sm:text-4xl lg:text-5xl">
            Popular Courses
          </h2>

          <p className="mx-auto max-w-2xl text-base text-gray-600 text-pretty sm:text-xl">
            Discover the most sought-after courses by thousands of learners
            worldwide.
          </p>
        </div>

        <OfferCarousel offers={popularCourses} />
      </div>
    </section>
  );
}
