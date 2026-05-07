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
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1970&auto=format&fit=crop",
    imageAlt: "Business analysis and data visualization",
    tag: "Popular",
    title: "Data Science Bootcamp",
    description: "Master Python, SQL, and machine learning from scratch.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1522869635100-ce148e6e6db0?q=80&w=1470&auto=format&fit=crop",
    brandName: "DataMasters",
    promoCode: "12 weeks",
    href: "/",
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1970&auto=format&fit=crop",
    imageAlt: "Web development coding",
    tag: "Trending",
    title: "Full Stack Development",
    description: "Learn React, Node.js, and MongoDB with real-world projects.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    brandName: "WebDev Pro",
    promoCode: "16 weeks",
    href: "/",
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1970&q=80",
    imageAlt: "Global network and cloud data center",
    tag: "Advanced",
    title: "AWS Cloud Architecture",
    description: "Design, deploy, and manage scalable cloud solutions on AWS.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&w=400&h=400&q=80",
    brandName: "CloudHub",
    promoCode: "10 weeks",
    href: "/",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AI and machine learning",
    tag: "New",
    title: "Artificial Intelligence Essentials",
    description: "Deep learning, neural networks, and AI applications.",
    brandLogoSrc:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    brandName: "AI Academy",
    promoCode: "14 weeks",
    href: "/",
  },
];
