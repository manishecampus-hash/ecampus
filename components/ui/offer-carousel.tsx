"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  IndianRupee,
  Monitor,
  Sparkles,
  Tag as TagIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description?: string;
  href: string;
  duration?: string;
  fee?: string;
  mode?: "Online" | "Offline" | "Hybrid" | string;
  icon?: "popular" | "trending" | "advanced" | "new" | string;
}

interface OfferCardProps {
  offer: Offer;
}

const getTagIcon = (icon?: string, tag?: string) => {
  const value = (icon || tag || "").toLowerCase();

  if (value.includes("trending")) return Sparkles;
  if (value.includes("advanced")) return BriefcaseBusiness;
  if (value.includes("new")) return BookOpen;
  if (value.includes("popular")) return GraduationCap;
  if (value.includes("ai") || value.includes("bot")) return Bot;

  return TagIcon;
};

const OfferCard = ({ offer }: OfferCardProps) => {
  const TagDisplayIcon = getTagIcon(offer.icon, offer.tag);

  return (
    <div className="relative flex h-auto w-[85vw] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[300px]">
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src={offer.imageSrc}
          alt={offer.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute left-3 top-3">
          <div className="relative overflow-hidden rounded-full p-px shadow-sm">
            <div className="tag-border-spin absolute inset-[-100%] bg-[conic-gradient(#ef4444,#f97316,#eab308,#22c55e,#ef4444)]" />

            <div className="relative flex items-center rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
              <TagDisplayIcon className="mr-1 h-3 w-3 text-red-500" />
              {offer.tag}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-1">
          <h3 className="line-clamp-2 text-lg font-extrabold leading-tight text-slate-900">
            {offer.title}
          </h3>

          {offer.description && (
            <p className="line-clamp-2 text-sm text-slate-500">
              {offer.description}
            </p>
          )}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-[11px] font-semibold text-slate-600">
          {offer.duration && (
            <div className="flex min-w-0 flex-col items-center justify-center gap-1 text-center">
              <Clock className="h-4 w-4 flex-shrink-0 text-red-500" />
              <span className="w-full truncate">{offer.duration}</span>
            </div>
          )}

          {offer.fee && (
            <div className="flex min-w-0 flex-col items-center justify-center gap-1 text-center">
              <IndianRupee className="h-4 w-4 flex-shrink-0 text-red-500" />
              <span className="w-full truncate">{offer.fee}</span>
            </div>
          )}

          {offer.mode && (
            <div className="flex min-w-0 flex-col items-center justify-center gap-1 text-center">
              <Monitor className="h-4 w-4 flex-shrink-0 text-red-500" />
              <span className="w-full truncate">{offer.mode}</span>
            </div>
          )}
        </div>

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
