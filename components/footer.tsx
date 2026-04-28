"use client";

import Link from "next/link";
import { DIcons } from "dicons";
import Image from "next/image";

const navigation = {
  categories: [
    {
      id: "programs",
      name: "Programs",
      sections: [
        {
          id: "degrees",
          name: "Degrees",
          items: [
            { name: "Bachelor's Degrees", href: "/degrees/bachelors" },
            { name: "Master's Degrees", href: "/degrees/masters" },
            { name: "Doctoral Programs", href: "/degrees/phd" },
          ],
        },
        {
          id: "professional",
          name: "Professional",
          items: [
            { name: "Certifications", href: "/certifications" },
            { name: "Executive Programs", href: "/executive" },
            { name: "Bootcamps", href: "/bootcamps" },
          ],
        },
        {
          id: "learning",
          name: "Learning",
          items: [
            { name: "Micro-Credentials", href: "/micro-credentials" },
            { name: "Mini-Courses", href: "/mini-courses" },
            { name: "Corporate Training", href: "/corporate-training" },
          ],
        },
        {
          id: "subjects",
          name: "Subjects",
          items: [
            { name: "Business & MBA", href: "/subjects/business" },
            { name: "Technology & IT", href: "/subjects/technology" },
            { name: "Data Science", href: "/subjects/data-science" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "About Us", href: "/about" },
            { name: "Blog", href: "/blog" },
            { name: "Careers", href: "/careers" },
          ],
        },
        {
          id: "support",
          name: "Support",
          items: [
            { name: "Help Center", href: "/help" },
            { name: "Contact", href: "/contact" },
            { name: "FAQ", href: "/faq" },
          ],
        },
      ],
    },
  ],
};

// RED HOVER STYLE ADDED HERE
const Underline =
  "hover:-translate-y-1 border border-dotted border-slate-700 rounded-xl p-2.5 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 text-slate-400";

export function Footer() {
  return (
    <footer className="border-t border-dotted border-slate-800 mx-auto w-full bg-[#111828]">
      {/* Brand & Intro */}
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="eCampus"
            width={120}
            height={40}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-slate-400 md:text-left">
          Welcome to Elevate, where we empower learners worldwide with
          world-class education. We specialize in crafting unique learning
          experiences, comprehensive online programs, and engaging content that
          transforms careers.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 ">
        <div className="border-b border-dotted border-slate-800 "></div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-row justify-between gap-6 leading-6"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <h4 className="font-semibold text-sm mb-4 text-white">
                    {section.name}
                  </h4>
                  <ul role="list" className="flex flex-col space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-slate-500 hover:text-red-500 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-slate-800"></div>
      </div>

      {/* Social Icons with Red Hover */}
      <div className="flex flex-wrap justify-center gap-y-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Email"
            href="mailto:contact@elevate.com"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Twitter"
            href="https://twitter.com"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://linkedin.com"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Facebook"
            href="https://facebook.com"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </Link>
          <Link
            aria-label="YouTube"
            href="https://youtube.com"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="mx-auto mb-10 mt-4 flex flex-col justify-between text-center text-[11px] md:max-w-7xl">
        <div className="space-x-4 text-slate-500">
          <Link
            href="/privacy"
            className="hover:text-red-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-red-500 transition-colors">
            Terms of Service
          </Link>
          <span>·</span>
          <Link
            href="/accessibility"
            className="hover:text-red-500 transition-colors"
          >
            Accessibility
          </Link>
        </div>
        <p className="mt-4 text-slate-600">
          © 2026 Elevate Education. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
