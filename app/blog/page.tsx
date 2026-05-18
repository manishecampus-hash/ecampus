"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock3, ArrowRight, Search, X } from "lucide-react";
import { blogs } from "@/lib/blogs-data";
import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";

export default function BlogListPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogs;
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  const isSearching = query.trim().length > 0;
  const [featured, ...rest] = filtered;

  return (
    <>
      <Header />

      <main
        className="min-h-screen"
        style={{ background: "var(--bg-page)", paddingTop: "80px" }}
      >
        {/* ── HEADER ── */}
        <div
          style={{
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Knowledge Hub
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Our Blog
            </h1>
            <p
              className="mt-4 text-lg max-w-xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Guides, insights, and resources to help you choose the right
              online education program.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-8 relative max-w-md mx-auto">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4"
                style={{ color: "var(--text-muted)" }}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, topics, categories..."
                className="w-full rounded-2xl border pl-11 pr-10 py-3 text-sm outline-none transition-all"
                style={{
                  background: "var(--bg-page)",
                  borderColor: query ? "var(--accent)" : "var(--border)",
                  color: "var(--text-primary)",
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--text-muted)" }}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {isSearching && (
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {filtered.length === 0
                  ? "No results found"
                  : `${filtered.length} article${filtered.length > 1 ? "s" : ""} found for "${query}"`}
              </p>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* NO RESULTS */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                No articles found
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Try searching for "MBA", "Finance", "UGC", or "Distance
                Learning"
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-5 rounded-xl px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Clear search
              </button>
            </div>
          )}

          {/* ── FEATURED CARD ── */}
          {featured && !isSearching && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl border overflow-hidden mb-12 transition-shadow hover:shadow-lg"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
                textDecoration: "none",
              }}
            >
              <div className="grid lg:grid-cols-2">
                {/* Image — full image, no crop */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ minHeight: "320px", background: "var(--bg-page)" }}
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-center"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span
                    className="inline-block text-xs font-semibold rounded-full px-3 py-1 w-fit mb-4"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    Featured · {featured.category}
                  </span>

                  <h2
                    className="text-2xl sm:text-3xl font-black leading-tight"
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                    }}
                  >
                    {featured.title}
                  </h2>

                  <p
                    className="mt-3 text-base leading-7"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {featured.description}
                  </p>

                  <div
                    className="mt-5 flex items-center gap-5 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                  </div>

                  <div
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    Read article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* ── GRID CARDS ── */}
          {filtered.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {(isSearching ? filtered : rest).map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group block rounded-2xl border overflow-hidden transition-shadow hover:shadow-md"
                  style={{
                    background: "var(--bg-surface)",
                    borderColor: "var(--border)",
                    textDecoration: "none",
                  }}
                >
                  {/* Responsive Card Image */}
                  <div
                    className="w-full overflow-hidden bg-[var(--bg-page)]"
                    style={{
                      height: "220px",
                    }}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5">
                    {/* No hover underline on title */}
                    <h2
                      className="mt-3 font-bold text-base leading-snug"
                      style={{
                        color: "var(--text-primary)",
                        textDecoration: "none",
                      }}
                    >
                      {blog.title}
                    </h2>

                    <p
                      className="mt-2 text-sm leading-6 line-clamp-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {blog.description}
                    </p>

                    <div
                      className="mt-3 flex items-center gap-3 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock3 className="h-3 w-3" /> {blog.readTime}
                      </span>
                    </div>

                    <div
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
