"use client";

import Image from "next/image";
import { Blog } from "@/lib/blogs-data";

function parseContent(rawContent: string, tableData?: Blog["tableData"]) {
  const lines = rawContent.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    // h2
    if (line.startsWith("## ")) {
      const text = line.replace(/## /, "").replace(/\s*\{#[^}]+\}/, "");
      const id =
        line.match(/\{#([^}]+)\}/)?.[1] ??
        text.toLowerCase().replace(/\s+/g, "-");
      elements.push(
        <h2
          key={key++}
          id={id}
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            fontWeight: 800,
            margin: "2.5rem 0 1rem",
            scrollMarginTop: "80px",
          }}
        >
          {text}
        </h2>,
      );
      i++;
      continue;
    }

    // h3
    if (line.startsWith("### ")) {
      const text = line.replace(/### /, "");
      elements.push(
        <h3
          key={key++}
          style={{
            color: "var(--text-primary)",
            fontSize: "1.2rem",
            fontWeight: 700,
            margin: "1.8rem 0 0.6rem",
          }}
        >
          {text}
        </h3>,
      );
      i++;
      continue;
    }

    // blockquote
    if (line.startsWith("> ")) {
      const text = line.replace(/^> /, "");
      elements.push(
        <blockquote
          key={key++}
          style={{
            borderLeft: "4px solid var(--accent)",
            paddingLeft: "1.25rem",
            margin: "1.5rem 0",
            color: "var(--text-muted)",
            fontStyle: "italic",
            lineHeight: 1.7,
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: inlineFormat(text) }} />
        </blockquote>,
      );
      i++;
      continue;
    }

    // table placeholder
    if (line === "<!-- TABLE -->" && tableData) {
      elements.push(
        <div
          key={key++}
          className="overflow-x-auto my-8 rounded-xl border"
          style={{ borderColor: "var(--border)" }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
            }}
          >
            <thead>
              <tr style={{ background: "var(--bg-table-head)" }}>
                {tableData.headers.map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      borderBottom: "1px solid var(--border)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    background:
                      ri % 2 === 0
                        ? "var(--bg-surface)"
                        : "var(--bg-table-alt)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "11px 16px",
                        color:
                          ci === 0
                            ? "var(--text-primary)"
                            : "var(--text-muted)",
                        fontWeight: ci === 0 ? 600 : 400,
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      i++;
      continue;
    }

    // markdown table (| col | col |)
    if (line.startsWith("|") && line.endsWith("|")) {
      const mdTableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        mdTableLines.push(lines[i].trim());
        i++;
      }
      const [headerRow, , ...bodyRows] = mdTableLines;
      const headers = headerRow
        .split("|")
        .slice(1, -1)
        .map((h) => h.trim());
      const body = bodyRows.map((r) =>
        r
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim()),
      );
      elements.push(
        <div
          key={key++}
          className="overflow-x-auto my-8 rounded-xl border"
          style={{ borderColor: "var(--border)" }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
            }}
          >
            <thead>
              <tr style={{ background: "var(--bg-table-head)" }}>
                {headers.map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr
                  key={ri}
                  style={{
                    background:
                      ri % 2 === 0
                        ? "var(--bg-surface)"
                        : "var(--bg-table-alt)",
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "11px 16px",
                        color: "var(--text-muted)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // unordered list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul
          key={key++}
          style={{
            margin: "1rem 0 1.5rem",
            paddingLeft: "1.5rem",
            listStyleType: "disc",
          }}
        >
          {items.map((item, ii) => (
            <li
              key={ii}
              style={{
                color: "var(--text-muted)",
                marginBottom: "0.4rem",
                lineHeight: 1.7,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={key++}
          style={{ margin: "1rem 0 1.5rem", paddingLeft: "1.5rem" }}
        >
          {items.map((item, ii) => (
            <li
              key={ii}
              style={{
                color: "var(--text-muted)",
                marginBottom: "0.4rem",
                lineHeight: 1.7,
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    // horizontal rule
    if (line === "---") {
      elements.push(
        <hr
          key={key++}
          style={{
            border: "none",
            borderTop: "1px solid var(--border)",
            margin: "2rem 0",
          }}
        />,
      );
      i++;
      continue;
    }

    // paragraph
    elements.push(
      <p
        key={key++}
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.8,
          marginBottom: "1.25rem",
          fontSize: "1rem",
        }}
        dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
      />,
    );
    i++;
  }

  return elements;
}

function inlineFormat(text: string) {
  return text
    .replace(
      /\*\*(.+?)\*\*/g,
      '<strong style="color:var(--text-primary);font-weight:700">$1</strong>',
    )
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code style="background:var(--bg-table-head);padding:2px 6px;border-radius:4px;font-size:0.9em;font-family:monospace;color:var(--accent)">$1</code>',
    );
}

export function BlogContent({ blog }: { blog: Blog }) {
  return (
    <article
      className="rounded-3xl border p-7 sm:p-10 lg:p-12"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Mid-article image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden mb-10"
        style={{ height: "300px" }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div style={{ maxWidth: "72ch" }}>
        {parseContent(blog.content, blog.tableData)}
      </div>
    </article>
  );
}
