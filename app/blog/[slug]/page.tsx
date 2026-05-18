// ── Server Component — NO "use client" ──
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  User,
  Tag,
  ChevronRight,
} from "lucide-react";
import { blogs } from "@/lib/blogs-data";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { RelatedPosts } from "@/components/blog/RealetedPost";
import { BlogContent } from "@/components/blog/blog-content";
import { ShareSaveButtons } from "@/components/blog/ShareSaveButtons";
import { Header } from "@/components/ui/header-3";
import { Footer } from "@/components/footer";
// import { ApplicationModal } from "@/components/landing/application-modal";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();

  return (
    <>
      <Header />

      <main
        className="min-h-screen"
        style={{ background: "var(--bg-page)", paddingTop: "80px" }}
      >
        {/* ── BREADCRUMB ── */}
        <div
          style={{
            borderBottom: "1px solid var(--border)",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--text-muted)", textDecoration: "none" }}
            >
              Home
            </Link>
            <ChevronRight
              style={{
                width: 14,
                height: 14,
                color: "var(--text-muted)",
                flexShrink: 0,
              }}
            />
            <Link
              href="/blog"
              style={{ color: "var(--text-muted)", textDecoration: "none" }}
            >
              Blog
            </Link>
            <ChevronRight
              style={{
                width: 14,
                height: 14,
                color: "var(--text-muted)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "var(--text-primary)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }}
            >
              {blog.title}
            </span>
          </div>
        </div>

        {/* ── HERO ── */}
        <div
          style={{
            borderBottom: "1px solid var(--border)",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "32px 16px 40px",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--accent)",
                textDecoration: "none",
                marginBottom: "24px",
              }}
            >
              <ArrowLeft style={{ width: 16, height: 16 }} />
              Back to all posts
            </Link>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                <Calendar style={{ width: 14, height: 14 }} />
                {blog.date}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                <Clock3 style={{ width: 14, height: 14 }} />
                {blog.readTime}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                }}
              >
                <User style={{ width: 14, height: 14 }} />
                {blog.author}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(1.6rem, 5vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.2,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                maxWidth: "800px",
                margin: 0,
              }}
            >
              {blog.title}
            </h1>

            <p
              style={{
                marginTop: "14px",
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                maxWidth: "680px",
              }}
            >
              {blog.description}
            </p>

            {/* Share/Save — client component */}
            <ShareSaveButtons />
          </div>
        </div>

        {/* ── BODY ── */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "40px 16px 60px",
          }}
        >
          <div
            className="blog-body-grid"
            style={{
              display: "grid",
              gap: "32px",
              gridTemplateColumns: "1fr",
              gridTemplateAreas: '"article" "sidebar"',
            }}
          >
            {/* LEFT TOC */}
            <aside className="blog-toc" style={{ display: "none" }}>
              <div style={{ position: "sticky", top: "100px" }}>
                <TableOfContents headings={blog.headings} />
              </div>
            </aside>

            {/* CENTER — Article */}
            <div style={{ gridArea: "article", minWidth: 0 }}>
              <BlogContent blog={blog} />
            </div>

            {/* RIGHT — Sidebar */}
            <aside style={{ gridArea: "sidebar" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <AuthorCard
                  author={blog.author}
                  authorBio={blog.authorBio}
                  authorImage={blog.authorImage}
                />

                {/* CTA */}
                <div
                  style={{
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid var(--border)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "var(--text-primary)",
                      margin: "0 0 8px",
                    }}
                  >
                    Ready to start?
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: "var(--text-muted)",
                      margin: "0 0 16px",
                    }}
                  >
                    Explore top online universities and take the next step in
                    your career.
                  </p>
                  {/* <ApplicationModal
                    trigger={
                      <button
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "center",
                          borderRadius: "12px",
                          padding: "10px",
                          fontSize: "13px",
                          fontWeight: 600,
                          background: "var(--accent)",
                          color: "#fff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Apply Now
                      </button>
                    }
                  /> */}
                </div>

                {/* Tags */}
              </div>
            </aside>
          </div>

          <RelatedPosts posts={blogs} currentPostId={blog.id} />
        </div>

        <style>{`
          @media (min-width: 768px) {
            .blog-body-grid {
              grid-template-columns: 1fr 260px !important;
              grid-template-areas: "article sidebar" !important;
            }
          }
          @media (min-width: 1024px) {
            .blog-body-grid {
              grid-template-columns: 210px 1fr 260px !important;
              grid-template-areas: "toc article sidebar" !important;
            }
            .blog-toc {
              display: block !important;
              grid-area: toc;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
