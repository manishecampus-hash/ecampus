"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  FileText,
  GraduationCap,
  Handshake,
  HelpCircle,
  Layers,
  RotateCcw,
  Shield,
  University,
  Users,
} from "lucide-react";

export const categories = [
  {
    id: "iim",
    label: "IIM Certification Courses",
    Icon: Award,
    courses: [
      {
        tag: "Certification",
        name: "IIM K – HR Management & Analytics",
        duration: "8 Months",
      },
      {
        tag: "Certification",
        name: "IIM K – AI Professional Certificate",
        duration: "6 Months",
      },
      {
        tag: "Certification",
        name: "IIM K – Digital Marketing & Strategy",
        duration: "5 Months",
      },
      {
        tag: "Certification",
        name: "IIM B – Finance for Non-Finance Managers",
        duration: "4 Months",
      },
    ],
  },
  {
    id: "dba",
    label: "Online Doctorate (DBA)",
    Icon: GraduationCap,
    courses: [
      {
        tag: "Doctorate",
        name: "Doctor of Business Administration – General",
        duration: "3 Years",
      },
      {
        tag: "Doctorate",
        name: "DBA – Leadership & Strategy",
        duration: "3 Years",
      },
    ],
  },
  {
    id: "ug",
    label: "Online UG Courses",
    Icon: BookOpen,
    courses: [
      {
        tag: "Undergraduate",
        name: "B.Com – Accounting & Finance",
        duration: "3 Years",
        href: "/programs/bcom",
      },
      {
        tag: "Undergraduate",
        name: "BBA – Business Administration",
        duration: "3 Years",
        href: "/programs/bba",
      },
      {
        tag: "Undergraduate",
        name: "B.Sc Computer Science",
        duration: "3 Years",
        href: "/programs/bsc-computer-science",
      },
      {
        tag: "Undergraduate",
        name: "BA – Psychology & Sociology",
        duration: "3 Years",
        href: "/programs/ba-psychology-sociology",
      },
    ],
  },
  {
    id: "pg",
    label: "Online PG Courses",
    Icon: Layers,
    courses: [
      {
        tag: "Postgraduate",
        name: "MBA – General Management",
        duration: "2 Years",
        href: "/programs/mba",
      },
      {
        tag: "Postgraduate",
        name: "M.Com – Financial Management",
        duration: "2 Years",
        href: "/programs/mcom",
      },
      {
        tag: "Postgraduate",
        name: "MCA – Computer Applications",
        duration: "2 Years",
        href: "/programs/mca",
      },
      {
        tag: "Postgraduate",
        name: "MA – HR & Organisational Psychology",
        duration: "2 Years",
        href: "/programs/ma-hr-organisational-psychology",
      },
    ],
  },
  {
    id: "offline",
    label: "Offline Certification Courses",
    Icon: Building2,
    courses: [
      {
        tag: "Certification",
        name: "Data Science & Machine Learning",
        duration: "6 Months",
      },
      {
        tag: "Certification",
        name: "Full Stack Web Development",
        duration: "4 Months",
      },
      {
        tag: "Certification",
        name: "UI/UX Design Bootcamp",
        duration: "3 Months",
      },
    ],
  },
  {
    id: "exec",
    label: "1 Year Executive Program",
    Icon: Briefcase,
    courses: [
      {
        tag: "Executive",
        name: "Executive MBA – Business Leadership",
        duration: "12 Months",
      },
      {
        tag: "Executive",
        name: "Executive PG – Product Management",
        duration: "11 Months",
      },
      {
        tag: "Executive",
        name: "Executive PG – Data Science & AI",
        duration: "12 Months",
      },
    ],
  },
  {
    id: "uni",
    label: "Universities",
    Icon: University,
    courses: [
      {
        tag: "University",
        name: "Jain University – Online Programs",
        duration: "Multiple",
      },
      {
        tag: "University",
        name: "Amity University – Distance Learning",
        duration: "Multiple",
      },
      {
        tag: "University",
        name: "Manipal University – UG & PG Programs",
        duration: "Multiple",
      },
    ],
  },
];

export const companyLinks = [
  {
    title: "About Us",
    href: "#",
    description: "Learn more about our story and mission",
    Icon: Users,
  },
  {
    title: "Success Stories",
    href: "#",
    description: "See how learners transformed their careers",
    Icon: Award,
  },
  {
    title: "Partnerships",
    href: "#",
    description: "Collaborate with top universities and companies",
    Icon: Handshake,
  },
];

export const companyLinks2 = [
  { title: "Terms of Service", href: "#", Icon: FileText },
  { title: "Privacy Policy", href: "#", Icon: Shield },
  { title: "Refund Policy", href: "#", Icon: RotateCcw },
  { title: "Help Center", href: "#", Icon: HelpCircle },
];
