"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc: string;
  brandName: string;
  promoCode?: string;
  href: string;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard = React.forwardRef<HTMLAnchorElement, OfferCardProps>(
  ({ offer }, ref) => (
    <motion.a
      ref={ref}
      href={offer.href}
      // On mobile: cards fill ~85% of viewport width so one card is fully visible
      // with a peek of the next. On sm+: fixed 300px width.
      className="relative flex-shrink-0 w-[85vw] sm:w-[300px] h-[380px] rounded-2xl overflow-hidden group snap-start"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "1000px" }}
    >
      {/* Background Image */}
      <img
        src={offer.imageSrc}
        alt={offer.imageAlt}
        className="absolute inset-0 w-full h-2/4 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-card p-5 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Tag */}
          <div className="flex items-center text-xs text-muted-foreground">
            <Tag className="w-4 h-4 mr-2 text-primary" />
            <span>{offer.tag}</span>
          </div>
          {/* Title & Description */}
          <h3 className="text-xl font-bold text-card-foreground leading-tight">
            {offer.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {offer.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <img
              src={offer.brandLogoSrc}
              alt={`${offer.brandName} logo`}
              className="w-8 h-8 rounded-full object-cover bg-muted flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-card-foreground truncate">
                {offer.brandName}
              </p>
              {offer.promoCode && (
                <p className="text-xs text-muted-foreground">
                  {offer.promoCode}
                </p>
              )}
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground flex-shrink-0 transform transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.a>
  ),
);
OfferCard.displayName = "OfferCard";

export interface OfferCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  offers: Offer[];
}

const OfferCarousel = React.forwardRef<HTMLDivElement, OfferCarouselProps>(
  ({ offers, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth * 0.8;
        current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full group/carousel", className)}
        {...props}
      >
        {/* Left Scroll Button — hidden on mobile (touch scroll handles it) */}
        <button
          onClick={() => scroll("left")}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 -left-5 z-10",
            "w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border",
            "items-center justify-center text-foreground",
            // Hidden on mobile, shown on hover for md+
            "hidden md:flex",
            "opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300",
            "hover:bg-background shadow-md",
          )}
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex gap-4 sm:gap-6",
            "overflow-x-auto",
            // Padding so cards don't clip on edges; on mobile use px for side-peek effect
            "px-1 pb-4",
            // Snap behaviour
            "snap-x snap-mandatory",
            // Hide scrollbar across browsers
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          )}
        >
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Right Scroll Button — hidden on mobile */}
        <button
          onClick={() => scroll("right")}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 -right-5 z-10",
            "w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border",
            "items-center justify-center text-foreground",
            "hidden md:flex",
            "opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300",
            "hover:bg-background shadow-md",
          )}
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  },
);
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };
