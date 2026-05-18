// ─── Content imports (each blog's content lives in its own file) ───
import * as blog1 from "./blog-content/complete-guide";
import * as blog2 from "./blog-content/top-online-universities";
import * as blog3 from "./blog-content/online-degree";
import * as blog4 from "./blog-content/ugc";

export type Blog = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorBio: string;
  authorImage: string;
  headings: { id: string; label: string; level: number }[];
  content: string;
  tableData?: { headers: string[]; rows: string[][] };
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Top 7 Budget-Friendly DBA Programs in India for 2026",
    slug: "top-7-budget-friendly-dba-programs",
    description:
      "Explore eligibility, fees, career opportunities, and top universities for online DBA programs in India.",
    image: "/blogs/mba.png",
    date: "12 May 2026",
    readTime: "8 min read",
    author: "Priya Sharma",
    authorBio:
      "Education counselor with 10+ years of experience helping students choose the right online programs.",
    authorImage: "/authors/priya.webp",
    headings: [
      { id: "what-is-dba", label: "What is a DBA Program?", level: 2 },
      { id: "why-trending", label: "Why Trending in 2026", level: 2 },
      { id: "rushford", label: "1. Rushford Business School", level: 2 },
      { id: "ssbm", label: "2. SSBM Geneva", level: 2 },
      { id: "esgci", label: "3. ESGCI Paris", level: 2 },
      { id: "edgewood", label: "4. Edgewood University", level: 2 },
      { id: "golden-gate", label: "5. Golden Gate University", level: 2 },
      { id: "sp-jain", label: "6. SP Jain Global", level: 2 },
      { id: "eiasm", label: "7. EIASM", level: 2 },
      { id: "comparison", label: "Comparison Table", level: 2 },
      { id: "how-to-choose", label: "How to Choose", level: 2 },
      { id: "conclusion", label: "Final Thoughts", level: 2 },
      { id: "faqs", label: "FAQs", level: 2 },
    ],
    tableData: blog1.tableData,
    content: blog1.content,
  },
  {
    id: 2,
    title: "Top Online Universities for Working Professionals",
    slug: "top-online-universities-working-professionals",
    description:
      "Discover the best UGC-approved online universities designed for busy professionals in India.",
    image: "/blogs/online-university.webp",
    date: "10 May 2026",
    readTime: "6 min read",
    author: "Rahul Mehta",
    authorBio:
      "Higher education researcher and content writer covering India's online learning ecosystem.",
    authorImage: "/authors/rahul.webp",
    headings: [
      { id: "why-online", label: "Why Choose Online?", level: 2 },
      { id: "top-picks", label: "Top University Picks", level: 2 },
      { id: "accreditation", label: "Accreditation & Validity", level: 2 },
      { id: "comparison", label: "Quick Comparison", level: 2 },
      { id: "tips", label: "How to Choose", level: 2 },
    ],
    tableData: blog2.tableData,
    content: blog2.content,
  },
  {
    id: 3,
    title: "Online Degree vs Distance Learning: Key Differences",
    slug: "online-degree-vs-distance-learning",
    description:
      "Understand the key differences between online degree programs and traditional distance education.",
    image: "/blogs/distance-learning.webp",
    date: "08 May 2026",
    readTime: "7 min read",
    author: "Anita Joshi",
    authorBio:
      "Education policy analyst and former academic advisor at a leading Indian university.",
    authorImage: "/authors/anita.webp",
    headings: [
      { id: "what-is-online", label: "What is Online Learning?", level: 2 },
      { id: "what-is-distance", label: "What is Distance Learning?", level: 2 },
      { id: "key-differences", label: "Key Differences", level: 2 },
      { id: "which-to-choose", label: "Which Should You Choose?", level: 2 },
    ],
    tableData: blog3.tableData,
    content: blog3.content,
  },
  {
    id: 4,
    title: "UGC-Approved Online Degrees: Everything You Need to Know",
    slug: "ugc-approved-online-degrees-guide",
    description:
      "A complete breakdown of UGC-DEB norms, approved universities, and what makes an online degree valid in India.",
    image: "/blogs/ugc.webp",
    date: "05 May 2026",
    readTime: "5 min read",
    author: "Vikram Nair",
    authorBio:
      "Former UGC consultant and education policy writer with expertise in online learning regulations.",
    authorImage: "/authors/vikram.webp",
    headings: [
      { id: "what-is-ugc-deb", label: "What is UGC-DEB?", level: 2 },
      { id: "validity", label: "Is the Degree Valid?", level: 2 },
      { id: "approved-list", label: "Approved Universities", level: 2 },
      { id: "how-to-verify", label: "How to Verify", level: 2 },
    ],
    tableData: blog4.tableData,
    content: blog4.content,
  },
];
