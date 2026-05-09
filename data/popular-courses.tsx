type Offer = {
  id: number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc: string;
  brandName: string;
  promoCode: string;
  href: string;
};

export const popularCourses: Offer[] = [
  {
    id: 1,
    imageSrc: "/courses/iim-kozhikode-.jpg",
    imageAlt: "Business analysis and data visualization",
    tag: "Popular",
    title: "IIM K HR Analytics",
    description: "Master HR analytics with IIM Kozhikode's online program.",
    brandLogoSrc: "",
    brandName: "DataMasters",
    promoCode: "12 weeks",
    href: "/programs/iim-k-hr-analytics",
  },
  {
    id: 2,
    imageSrc: "/courses/op.webp",
    imageAlt: "1 Year MBA - O.P Jindal",
    tag: "Trending",
    title: "1 Year MBA - O.P Jindal",
    description: "Accelerate your career with a fast-track degree.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    brandName: "WebDev Pro",
    promoCode: "16 weeks",
    href: "/programs/op-jindal-mba",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1970&q=80",
    imageAlt: "Online DBA - Rushfordr",
    tag: "Advanced",
    title: "Online DBA - Rushford",
    description: "Earn your Swiss DBA online with Rushford University.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=400&h=400&q=80",
    brandName: "CloudHub",
    promoCode: "10 weeks",
    href: "/programs/rushford-dba",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "GGU Gen Ai",
    description: "Advance your leadership with GGU's flexible online DBA.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    brandName: "AI Academy",
    promoCode: "14 weeks",
    href: "/programs/ggu-gen-ai",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "IIM K AI Professional",
    description: "Master Generative and Agentic AI through IIM Kozhikode's.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    brandName: "AI Academy",
    promoCode: "14 weeks",
    href: "/programs/iimk-ai",
  },
];
