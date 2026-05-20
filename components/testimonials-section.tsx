"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Product Manager, Tech Corp",
      content:
        "The program transformed my career. Within 3 months of completing the PM course, I landed my dream role with a 40% salary increase. The hands-on projects were incredibly valuable.",
      image: "👩‍💼",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      title: "Senior Software Engineer",
      content:
        "As a career changer, I was nervous about upskilling. The Full Stack program broke everything down perfectly. The mentorship was exceptional and job support helped me land offers from multiple companies.",
      image: "👨‍💻",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      title: "Data Scientist, Analytics Startup",
      content:
        "The Data Science course gave me exactly what I needed. Real-world projects, expert instructors, and a supportive community. I went from curious to job-ready in under a year.",
      image: "👩‍🔬",
      rating: 5,
    },
    {
      name: "James Wilson",
      title: "MBA Graduate, Finance Director",
      content:
        "The MBA program balanced theory with practice perfectly. Studying while working was manageable because of the flexible schedule. My colleagues have noticed a real difference in my strategic thinking.",
      image: "👨‍💼",
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            What Our Graduates Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Join thousands of students who've transformed their careers with our
            programs.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 sm:p-10 shadow-medium">
            {/* Stars */}
            <div className="flex mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl text-gray-900 font-medium mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{testimonials[currentIndex].image}</div>
              <div>
                <p className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-200 hover:bg-red-600 text-gray-900 hover:text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-red-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-200 hover:bg-red-600 text-gray-900 hover:text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
