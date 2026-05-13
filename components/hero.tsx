import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-white to-gray-50 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                ✨ Learn at Your Pace
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              Master New Skills with{" "}
              <span className="text-gradient">World-Class Education</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl text-pretty">
              Access industry-leading degree programs and certifications
              designed for working professionals and students who demand
              flexibility and quality.
            </p>

            {/* Benefits */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Learn from top universities and experts
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  100% online and self-paced
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Recognized certifications & degrees
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="cta-btn flex items-center justify-center sm:justify-start space-x-2 group">
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:border-red-600 hover:text-red-600 transition-colors duration-200">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-premium overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm3-9H9v5l4.28 2.54.72-1.21-3-1.79V7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Start Learning Today
                  </h3>
                  <p className="text-gray-600">
                    Join 100,000+ students worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
