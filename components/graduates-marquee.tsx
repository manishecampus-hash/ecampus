"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type GraduateTestimonialT = {
  initials: string;
  avatarColor: string;
  avatarSrc?: string;
  name: string;
  role: string;
  rating: number;
  testimonial: string;
};

const DEFAULT_GRADUATES: GraduateTestimonialT[] = [
  {
    initials: "SC",
    avatarColor: "#ef4444",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Sarah Chen",
    role: "MBA, Jul'25",
    rating: 5,
    testimonial:
      "This degree completely transformed my career. The flexible schedule allowed me to work while studying, and the job support was instrumental in landing my dream role at Google. The Career Services team was exceptional from start to finish.",
  },
  {
    initials: "MJ",
    avatarColor: "#f97316",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Marcus Johnson",
    role: "B.Tech, Jun'25",
    rating: 5,
    testimonial:
      "As a career changer, I was nervous about upskilling. The program broke everything down perfectly, and mentorship from industry experts made all the difference. I secured a senior engineering role at Microsoft within 3 months of graduating.",
  },
  {
    initials: "PS",
    avatarColor: "#dc2626",
    avatarSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Priyanshu Mishra",
    role: "MBA, Jul'25",
    rating: 5,
    testimonial:
      "My name is Priyanshu Mishra. I am a first year student at Amity University. I am truly grateful to the Career Services team at Amity University for their constant support and guidance in helping me secure my internship as an HR Intern with Inorg.",
  },
  {
    initials: "JW",
    avatarColor: "#64748b",
    avatarSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80",
    name: "James Wilson",
    role: "MBA, May'25",
    rating: 4,
    testimonial:
      "The MBA program balanced theory with practice beautifully. Studying while working was manageable because of the flexible schedule. My team has noticed a real difference in my leadership approach since graduating.",
  },
];

const GAP = 20;

const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ display: "flex", gap: 2, margin: "4px 0 12px" }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{
          color: star <= rating ? "#facc15" : "#e5e7eb",
          fontSize: 16,
          lineHeight: 1,
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const Avatar = ({
  initials,
  color,
  src,
}: {
  initials: string;
  color: string;
  src?: string;
}) => (
  <div
    style={{
      width: 52,
      height: 52,
      borderRadius: "50%",
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: 15,
      flexShrink: 0,
      overflow: "hidden",
      border: "3px solid #fee2e2",
    }}
  >
    {src ? (
      <img
        src={src}
        alt={initials}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ) : (
      initials
    )}
  </div>
);

const GraduateCard = ({
  testimonial,
  width,
}: {
  testimonial: GraduateTestimonialT;
  width: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const SHORT_LIMIT = 140;
  const isLong = testimonial.testimonial.length > SHORT_LIMIT;

  const displayText =
    !isLong || expanded
      ? testimonial.testimonial
      : `${testimonial.testimonial.slice(0, SHORT_LIMIT)}...`;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #fee2e2",
        borderRadius: 16,
        padding: 20,
        width,
        minHeight: 300,
        flexShrink: 0,
        boxShadow: "0 10px 28px rgba(15, 23, 42, 0.08)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar
          initials={testimonial.initials}
          color={testimonial.avatarColor}
          src={testimonial.avatarSrc}
        />

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontWeight: 800,
              fontSize: 15,
              margin: 0,
              color: "#0f172a",
            }}
          >
            {testimonial.name}
          </p>
          <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
            {testimonial.role}
          </p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <p
        style={{
          fontSize: 14,
          color: "#475569",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {displayText}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          style={{
            marginTop: "auto",
            alignSelf: "flex-start",
            background: "#fff",
            border: "1px solid #fecaca",
            borderRadius: 999,
            padding: "7px 16px",
            fontSize: 13,
            color: "#dc2626",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export function GraduatesMarquee({
  graduates = DEFAULT_GRADUATES,
}: {
  graduates?: GraduateTestimonialT[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateSize = () => {
      const width = viewportRef.current?.clientWidth ?? 320;

      if (width < 700) {
        setVisibleCount(1);
        setCardWidth(Math.min(320, width));
      } else if (width < 1040) {
        setVisibleCount(2);
        setCardWidth((width - GAP) / 2);
      } else {
        setVisibleCount(3);
        setCardWidth((width - GAP * 2) / 3);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, graduates.length - visibleCount),
    [graduates.length, visibleCount],
  );

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const prev = () => setCurrentIndex((index) => Math.max(0, index - 1));
  const next = () => setCurrentIndex((index) => Math.min(maxIndex, index + 1));

  return (
    <section style={{ padding: "80px 16px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              background: "#fef2f2",
              color: "#dc2626",
              padding: "5px 16px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Success Stories
          </span>

          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 900,
              color: "#0f172a",
              margin: "0 0 12px",
            }}
          >
            What Our Graduates Say
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Join thousands of successful graduates who have transformed their
            careers and achieved their goals.
          </p>
        </div>

        <div ref={viewportRef} style={{ overflow: "hidden", width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: GAP,
              transform: `translateX(-${currentIndex * (cardWidth + GAP)}px)`,
              transition: "transform 0.4s ease",
            }}
          >
            {graduates.map((graduate, index) => (
              <GraduateCard
                key={index}
                testimonial={graduate}
                width={cardWidth}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            marginTop: 36,
          }}
        >
          <button
            type="button"
            onClick={prev}
            disabled={currentIndex === 0}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid #fecaca",
              background: currentIndex === 0 ? "#f8fafc" : "#fff",
              color: currentIndex === 0 ? "#cbd5e1" : "#dc2626",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              fontSize: 22,
            }}
          >
            ‹
          </button>

          <div style={{ display: "flex", gap: 8 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 999,
                  background: index === currentIndex ? "#dc2626" : "#fecaca",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={currentIndex === maxIndex}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid #fecaca",
              background: currentIndex === maxIndex ? "#f8fafc" : "#fff",
              color: currentIndex === maxIndex ? "#cbd5e1" : "#dc2626",
              cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
              fontSize: 22,
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
