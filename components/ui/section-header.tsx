import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 text-center sm:mb-12 ${className}`}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-600 sm:mb-4">
          {badge}
        </span>
      )}

      <h2 className="mb-3 text-3xl font-bold text-gray-900 text-balance sm:mb-4 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-2xl text-base text-gray-600 text-pretty sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
