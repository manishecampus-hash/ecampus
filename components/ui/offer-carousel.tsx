"use client";

import * as React from "react";
import Link from "next/link"; // Import Link for SPA navigation
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Tag as TagIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  href: string;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard = ({ offer }: OfferCardProps) => {
  return (
    <div className="relative flex h-auto w-[85vw] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:w-[300px]">
      {/* Image Section */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src={offer.imageSrc}
          alt={offer.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3">
          <div className="flex items-center rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500 shadow-sm">
            <TagIcon className="mr-1 h-3 w-3 fill-red-500" />
            {offer.tag}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-5">
        <div className="space-y-1">
          <h3 className="line-clamp-2 text-lg font-extrabold leading-tight text-slate-900">
            {offer.title}
          </h3>
          <p className="line-clamp-2 text-sm text-slate-500">
            {offer.description}
          </p>
        </div>

        {/* Action Button Section - Fixed spacing & No Page Refresh */}
        <div className="mt-4 border-t border-slate-100 pt-4">
          <Link
            href={offer.href}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-red-500 hover:text-white"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const OfferCarousel = ({
  offers,
  className,
}: {
  offers: Offer[];
  className?: string;
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const current = scrollContainerRef.current;
    const scrollAmount = current.clientWidth * 0.8;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("group/carousel relative w-full", className)}>
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute left-[-20px] top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute right-[-20px] top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};
