import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";

const popularCourses: Offer[] = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1970&auto=format&fit=crop",
    imageAlt: "Business analysis and data visualization",
    tag: "Popular",
    title: "Data Science Bootcamp",
    description: "Master Python, SQL, and machine learning from scratch.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1522869635100-ce148e6e6db0?q=80&w=1470&auto=format&fit=crop",
    brandName: "DataMasters",
    promoCode: "12 weeks",
    href: "#",
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1970&auto=format&fit=crop",
    imageAlt: "Web development coding",
    tag: "Trending",
    title: "Full Stack Development",
    description: "Learn React, Node.js, and MongoDB with real-world projects.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    brandName: "WebDev Pro",
    promoCode: "16 weeks",
    href: "#",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Digital marketing strategy",
    tag: "Bestseller",
    title: "Digital Marketing Master",
    description:
      "SEO, social media, and content strategy for modern marketers.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
    brandName: "MarketPro",
    promoCode: "8 weeks",
    href: "#",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1611592437281-460bfbe1220a?q=80&w=1970&auto=format&fit=crop",
    imageAlt: "Cloud infrastructure and AWS",
    tag: "Advanced",
    title: "AWS Cloud Architecture",
    description: "Design, deploy, and manage scalable cloud solutions on AWS.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1611592437281-460bfbe1220a?q=80&w=1470&auto=format&fit=crop",
    brandName: "CloudHub",
    promoCode: "10 weeks",
    href: "#",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "Artificial Intelligence Essentials",
    description: "Deep learning, neural networks, and AI applications.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    brandName: "AI Academy",
    promoCode: "14 weeks",
    href: "#",
  },
];

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
