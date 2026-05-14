// "use client";
// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
// import { createPortal } from "react-dom";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { LucideIcon } from "lucide-react";
// import {
//   BookOpen,
//   Award,
//   Users,
//   Zap,
//   Globe,
//   HelpCircle,
//   FileText,
//   Shield,
//   RotateCcw,
//   Handshake,
//   Leaf,
//   BarChart,
//   Briefcase,
// } from "lucide-react";

// type LinkItem = {
//   title: string;
//   href: string;
//   icon: LucideIcon;
//   description?: string;
// };

// export function Header() {
//   const [open, setOpen] = React.useState(false);
//   const scrolled = useScroll(10);

//   React.useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <header
//       className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
//         "bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg":
//           scrolled,
//       })}
//     >
//       <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
//         <div className="flex items-center gap-8">
//           <a href="/" className="flex items-center gap-2 hover:opacity-80">
//             <Image
//               src="/logo.png"
//               alt="eCampus"
//               width={120}
//               height={40}
//               className="h-8 w-auto"
//             />
//           </a>
//           <NavigationMenu className="hidden md:flex">
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="bg-transparent">
//                   Programs
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-white p-1 pr-1.5">
//                   <ul className="grid w-lg grid-cols-2 gap-2 rounded-md border border-gray-200 p-2 shadow-lg bg-white">
//                     {programLinks.map((item, i) => (
//                       <li key={i}>
//                         <ListItem {...item} />
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="p-2 bg-white">
//                     <p className="text-gray-600 text-sm">
//                       Interested?{" "}
//                       <a
//                         href="#"
//                         className="text-black font-medium hover:underline"
//                       >
//                         Schedule a demo
//                       </a>
//                     </p>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="bg-transparent">
//                   Company
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent className="bg-white p-1 pr-1.5 pb-1.5">
//                   <div className="grid w-lg grid-cols-2 gap-2">
//                     <ul className="space-y-2 rounded-md border border-gray-200 p-2 shadow-lg bg-white">
//                       {companyLinks.map((item, i) => (
//                         <li key={i}>
//                           <ListItem {...item} />
//                         </li>
//                       ))}
//                     </ul>
//                     <ul className="space-y-2 p-3 bg-white">
//                       {companyLinks2.map((item, i) => (
//                         <li key={i}>
//                           <NavigationMenuLink
//                             href={item.href}
//                             className="flex p-2 hover:bg-gray-100 flex-row rounded-md items-center gap-x-2"
//                           >
//                             <item.icon className="text-gray-800 size-4" />
//                             <span className="font-medium text-gray-900">
//                               {item.title}
//                             </span>
//                           </NavigationMenuLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//               <NavigationMenuLink className="px-4" asChild>
//                 <a href="#" className="hover:bg-accent rounded-md p-2">
//                   Pricing
//                 </a>
//               </NavigationMenuLink>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div className="hidden items-center gap-2 md:flex">
//           <Button>Enroll Now</Button>
//         </div>
//         <Button
//           size="icon"
//           variant="outline"
//           onClick={() => setOpen(!open)}
//           className="md:hidden"
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//           aria-label="Toggle menu"
//         >
//           <MenuToggleIcon open={open} className="size-5" duration={300} />
//         </Button>
//       </nav>
//       <MobileMenu
//         open={open}
//         className="flex flex-col justify-between gap-2 overflow-y-auto"
//       >
//         <NavigationMenu className="max-w-full">
//           <div className="flex w-full flex-col gap-y-2">
//             <span className="text-sm font-medium">Programs</span>
//             {programLinks.map((link) => (
//               <ListItem key={link.title} {...link} />
//             ))}
//             <span className="text-sm font-medium mt-4">Company</span>
//             {companyLinks.map((link) => (
//               <ListItem key={link.title} {...link} />
//             ))}
//             {companyLinks2.map((link) => (
//               <ListItem key={link.title} {...link} />
//             ))}
//           </div>
//         </NavigationMenu>
//         <div className="flex flex-col gap-2">
//           <Button className="w-full">Enroll Now</Button>
//         </div>
//       </MobileMenu>
//     </header>
//   );
// }

// type MobileMenuProps = React.ComponentProps<"div"> & {
//   open: boolean;
// };

// function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
//   if (!open || typeof window === "undefined") return null;

//   return createPortal(
//     <div
//       id="mobile-menu"
//       className={cn(
//         "bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg",
//         "fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden",
//       )}
//     >
//       <div
//         data-slot={open ? "open" : "closed"}
//         className={cn(
//           "data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out",
//           "size-full p-4",
//           className,
//         )}
//         {...props}
//       >
//         {children}
//       </div>
//     </div>,
//     document.body,
//   );
// }

// function ListItem({
//   title,
//   description,
//   icon: Icon,
//   className,
//   href,
//   ...props
// }: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
//   return (
//     <NavigationMenuLink
//       className={cn(
//         "w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2",
//         className,
//       )}
//       {...props}
//       asChild
//     >
//       <a href={href}>
//         <div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
//           <Icon className="text-foreground size-5" />
//         </div>
//         <div className="flex flex-col items-start justify-center">
//           <span className="font-medium">{title}</span>
//           <span className="text-muted-foreground text-xs">{description}</span>
//         </div>
//       </a>
//     </NavigationMenuLink>
//   );
// }

// const programLinks: LinkItem[] = [
//   {
//     title: "Online Degrees",
//     href: "#",
//     description: "Earn accredited bachelor&apos;s and master&apos;s degrees",
//     icon: BookOpen,
//   },
//   {
//     title: "Certifications",
//     href: "#",
//     description: "Industry-recognized professional credentials",
//     icon: Award,
//   },
//   {
//     title: "Executive Programs",
//     href: "#",
//     description: "Leadership development for professionals",
//     icon: Briefcase,
//   },
//   {
//     title: "Skill Bootcamps",
//     href: "#",
//     description: "Intensive, hands-on technical training",
//     icon: Zap,
//   },
//   {
//     title: "Global Learning",
//     href: "#",
//     description: "Access courses from top universities worldwide",
//     icon: Globe,
//   },
//   {
//     title: "Flexible Learning",
//     href: "#",
//     description: "Study at your own pace and schedule",
//     icon: BarChart,
//   },
// ];

// const companyLinks: LinkItem[] = [
//   {
//     title: "About Us",
//     href: "#",
//     description: "Learn more about our story and mission",
//     icon: Users,
//   },
//   {
//     title: "Success Stories",
//     href: "#",
//     description: "See how learners transformed their careers",
//     icon: Award,
//   },
//   {
//     title: "Partnerships",
//     href: "#",
//     description: "Collaborate with top universities and companies",
//     icon: Handshake,
//   },
// ];

// const companyLinks2: LinkItem[] = [
//   {
//     title: "Terms of Service",
//     href: "#",
//     icon: FileText,
//   },
//   {
//     title: "Privacy Policy",
//     href: "#",
//     icon: Shield,
//   },
//   {
//     title: "Refund Policy",
//     href: "#",
//     icon: RotateCcw,
//   },
//   {
//     title: "Blog",
//     href: "#",
//     icon: Leaf,
//   },
//   {
//     title: "Help Center",
//     href: "#",
//     icon: HelpCircle,
//   },
// ];

// function useScroll(threshold: number) {
//   const [scrolled, setScrolled] = React.useState(false);

//   const onScroll = React.useCallback(() => {
//     setScrolled(window.scrollY > threshold);
//   }, [threshold]);

//   React.useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [onScroll]);

//   React.useEffect(() => {
//     onScroll();
//   }, [onScroll]);

//   return scrolled;
// }

// "use client";
// import { useState, useEffect, useRef } from "react";
// import {
//   Award,
//   BookOpen,
//   Briefcase,
//   Building2,
//   ChevronDown,
//   ChevronRight,
//   Clock,
//   GraduationCap,
//   Menu,
//   Phone,
//   University,
//   X,
//   Zap,
// } from "lucide-react";

// // ─── Data ────────────────────────────────────────────────────────────────────

// const categories = [
//   {
//     id: "iim",
//     label: "IIM Certification Courses",
//     Icon: Award,
//     courses: [
//       {
//         tag: "Certification",
//         name: "IIM K – HR Management & Analytics",
//         duration: "8 Months",
//       },
//       {
//         tag: "Certification",
//         name: "IIM K – AI Professional Certificate Program",
//         duration: "6 Months",
//       },
//       {
//         tag: "Certification",
//         name: "IIM K – Digital Marketing & Strategy",
//         duration: "5 Months",
//       },
//       {
//         tag: "Certification",
//         name: "IIM B – Finance for Non-Finance Managers",
//         duration: "4 Months",
//       },
//     ],
//   },
//   {
//     id: "dba",
//     label: "Online Doctorate (DBA)",
//     Icon: GraduationCap,
//     courses: [
//       {
//         tag: "Doctorate",
//         name: "Doctor of Business Administration – General",
//         duration: "3 Years",
//       },
//       {
//         tag: "Doctorate",
//         name: "DBA – Leadership & Strategy",
//         duration: "3 Years",
//       },
//     ],
//   },
//   {
//     id: "ug",
//     label: "Online UG Courses",
//     Icon: BookOpen,
//     courses: [
//       {
//         tag: "Undergraduate",
//         name: "B.Com – Accounting & Finance",
//         duration: "3 Years",
//       },
//       {
//         tag: "Undergraduate",
//         name: "BBA – Business Administration",
//         duration: "3 Years",
//       },
//       {
//         tag: "Undergraduate",
//         name: "B.Sc Computer Science",
//         duration: "3 Years",
//       },
//     ],
//   },
//   {
//     id: "pg",
//     label: "Online PG Courses",
//     Icon: BookOpen,
//     courses: [
//       {
//         tag: "Postgraduate",
//         name: "MBA – General Management",
//         duration: "2 Years",
//       },
//       {
//         tag: "Postgraduate",
//         name: "M.Com – Financial Management",
//         duration: "2 Years",
//       },
//       {
//         tag: "Postgraduate",
//         name: "MCA – Computer Applications",
//         duration: "2 Years",
//       },
//       {
//         tag: "Postgraduate",
//         name: "MA – HR & Organisational Psychology",
//         duration: "2 Years",
//       },
//     ],
//   },
//   {
//     id: "offline",
//     label: "Offline Certification Courses",
//     Icon: Building2,
//     courses: [
//       {
//         tag: "Certification",
//         name: "Data Science & Machine Learning",
//         duration: "6 Months",
//       },
//       {
//         tag: "Certification",
//         name: "Full Stack Web Development",
//         duration: "4 Months",
//       },
//     ],
//   },
//   {
//     id: "exec",
//     label: "1 Year Executive Program",
//     Icon: Briefcase,
//     courses: [
//       {
//         tag: "Executive",
//         name: "Executive MBA – Business Leadership",
//         duration: "12 Months",
//       },
//       {
//         tag: "Executive",
//         name: "Executive PG – Product Management",
//         duration: "11 Months",
//       },
//       {
//         tag: "Executive",
//         name: "Executive PG – Data Science & AI",
//         duration: "12 Months",
//       },
//     ],
//   },
//   {
//     id: "uni",
//     label: "Universities",
//     Icon: University,
//     courses: [
//       {
//         tag: "University",
//         name: "Jain University – Online Programs",
//         duration: "Multiple",
//       },
//       {
//         tag: "University",
//         name: "Amity University – Distance Learning",
//         duration: "Multiple",
//       },
//       {
//         tag: "University",
//         name: "Manipal University – UG & PG",
//         duration: "Multiple",
//       },
//     ],
//   },
// ];

// // ─── Sub-components ──────────────────────────────────────────────────────────

// function CourseCard({ tag, name, duration }) {
//   return (
//     <div className="group border border-gray-200 rounded-xl p-4 cursor-pointer transition-all duration-150 hover:border-red-400 hover:bg-red-50">
//       <p className="text-[10px] font-semibold uppercase tracking-widest text-red-500 mb-1">
//         {tag}
//       </p>
//       <p className="text-sm font-medium text-gray-800 leading-snug mb-2">
//         {name}
//       </p>
//       <span className="flex items-center gap-1 text-[11px] text-gray-500">
//         <Clock size={11} />
//         {duration}
//       </span>
//     </div>
//   );
// }

// // Desktop mega dropdown
// function MegaDropdown({ open }) {
//   const [activeCat, setActiveCat] = useState(categories[0].id);
//   const active = categories.find((c) => c.id === activeCat);

//   if (!open) return null;

//   return (
//     <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-150">
//       <div className="max-w-5xl mx-auto flex min-h-[360px]">
//         {/* Left: category list */}
//         <aside className="w-56 border-r border-gray-100 py-3 flex-shrink-0">
//           {categories.map(({ id, label, Icon }) => (
//             <button
//               key={id}
//               onMouseEnter={() => setActiveCat(id)}
//               onClick={() => setActiveCat(id)}
//               className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-100 border-r-2 ${
//                 activeCat === id
//                   ? "bg-red-50 border-red-500 text-red-600 font-medium"
//                   : "border-transparent text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               <span
//                 className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
//                   activeCat === id
//                     ? "bg-red-100 text-red-500"
//                     : "bg-gray-100 text-gray-500"
//                 }`}
//               >
//                 <Icon size={15} />
//               </span>
//               <span className="leading-tight">{label}</span>
//               <ChevronRight
//                 size={13}
//                 className="ml-auto flex-shrink-0 text-gray-400"
//               />
//             </button>
//           ))}
//         </aside>

//         {/* Right: courses */}
//         <div className="flex-1 flex flex-col">
//           <div className="flex-1 p-5">
//             <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
//               {active.label}
//             </p>
//             <div className="grid grid-cols-2 gap-3">
//               {active.courses.map((c, i) => (
//                 <CourseCard key={i} {...c} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Mobile accordion
// function MobileMenu({ open }) {
//   const [expanded, setExpanded] = useState(null);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 top-14 bg-white z-40 overflow-y-auto pb-6 md:hidden">
//       <div className="px-4 pt-4 space-y-1">
//         <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 px-2 mb-2">
//           Programs
//         </p>

//         {categories.map(({ id, label, Icon, courses }) => (
//           <div key={id}>
//             <button
//               onClick={() => setExpanded(expanded === id ? null : id)}
//               className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-gray-800 hover:bg-gray-50 transition-colors"
//             >
//               <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
//                 <Icon size={15} className="text-gray-500" />
//               </span>
//               <span className="font-medium flex-1 text-left">{label}</span>
//               <ChevronDown
//                 size={15}
//                 className={`text-gray-400 transition-transform duration-200 ${
//                   expanded === id ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {expanded === id && (
//               <div className="ml-11 mt-1 space-y-2 pb-2">
//                 {courses.map((c, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="block px-3 py-2.5 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
//                   >
//                     <p className="text-[10px] font-semibold uppercase tracking-widest text-red-500 mb-0.5">
//                       {c.tag}
//                     </p>
//                     <p className="text-sm font-medium text-gray-800 leading-snug">
//                       {c.name}
//                     </p>
//                     <span className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
//                       <Clock size={10} />
//                       {c.duration}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}

//         <div className="pt-4 border-t border-gray-100 space-y-2">
//           <a
//             href="#"
//             className="block text-sm text-gray-700 px-3 py-2 hover:bg-gray-50 rounded-lg"
//           >
//             Blog
//           </a>
//           <a
//             href="#"
//             className="block text-sm text-gray-700 px-3 py-2 hover:bg-gray-50 rounded-lg"
//           >
//             More
//           </a>
//         </div>

//         <div className="pt-4">
//           <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-3 rounded-xl transition-colors">
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Main Header ─────────────────────────────────────────────────────────────

// export function Header() {
//   const [programOpen, setProgramOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const headerRef = useRef(null);

//   // Close on outside click
//   useEffect(() => {
//     function handleClick(e) {
//       if (headerRef.current && !headerRef.current.contains(e.target)) {
//         setProgramOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   // Scroll shadow
//   useEffect(() => {
//     function onScroll() {
//       setScrolled(window.scrollY > 8);
//     }
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Lock body scroll when mobile menu open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   const toggleProgram = () => {
//     setProgramOpen((p) => !p);
//     setMobileOpen(false);
//   };

//   const toggleMobile = () => {
//     setMobileOpen((m) => !m);
//     setProgramOpen(false);
//   };

//   return (
//     <header
//       ref={headerRef}
//       className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
//         scrolled ? "shadow-md" : "border-b border-gray-200"
//       }`}
//     >
//       <nav className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between relative">
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-1 select-none">
//           <img src="/logo.png" alt="eCampus" className="h-8 w-auto" />
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden md:flex items-center gap-1">
//           <button
//             onClick={toggleProgram}
//             className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//               programOpen
//                 ? "bg-red-50 text-red-600"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             Program
//             <ChevronDown
//               size={14}
//               className={`transition-transform duration-200 ${programOpen ? "rotate-180" : ""}`}
//             />
//           </button>
//           <a
//             href="#"
//             className="px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
//           >
//             Blog
//           </a>
//           <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors">
//             More
//             <ChevronDown size={14} />
//           </button>
//         </div>

//         {/* Desktop right */}
//         <div className="hidden md:flex items-center gap-2">
//           <a
//             href="tel:18001216201"
//             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-400 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
//           >
//             <Phone size={14} />
//             1800-121-6201
//           </a>
//           <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors">
//             Enroll Now
//           </button>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           onClick={toggleMobile}
//           className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
//           aria-label="Toggle menu"
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? <X size={18} /> : <Menu size={18} />}
//         </button>
//       </nav>

//       {/* Desktop mega dropdown */}
//       <div className="hidden md:block relative">
//         <MegaDropdown open={programOpen} />
//       </div>

//       {/* Mobile menu */}
//       <MobileMenu open={mobileOpen} />
//     </header>
//   );
// }

// // ─── Demo Page ────────────────────────────────────────────────────────────────

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-3xl mx-auto px-4 py-16 text-center">
//         <p className="text-sm text-gray-400 mb-2">Demo Page Content</p>
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           eCampus Mega Navbar
//         </h1>
//         <p className="text-gray-500 text-sm">
//           Desktop par <strong>Program</strong> button hover/click karein mega
//           dropdown dekhne ke liye. Mobile par hamburger icon se accordion menu
//           khulega.
//         </p>

//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
//           {[
//             {
//               icon: <Zap size={18} className="text-red-500" />,
//               title: "Mega Dropdown",
//               desc: "Hover-triggered left/right panel on desktop",
//             },
//             {
//               icon: <BookOpen size={18} className="text-red-500" />,
//               title: "Mobile Accordion",
//               desc: "Expandable categories in full-screen mobile menu",
//             },
//             {
//               icon: <Award size={18} className="text-red-500" />,
//               title: "Fully Responsive",
//               desc: "Adapts seamlessly from 320px to 1440px",
//             },
//           ].map((f, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl border border-gray-200 p-4"
//             >
//               <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center mb-3">
//                 {f.icon}
//               </div>
//               <p className="font-semibold text-sm text-gray-800 mb-1">
//                 {f.title}
//               </p>
//               <p className="text-xs text-gray-500">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";
// import { useState, useEffect, useRef } from "react";
// import {
//   Award,
//   BookOpen,
//   Briefcase,
//   Building2,
//   ChevronDown,
//   ChevronRight,
//   Clock,
//   GraduationCap,
//   Image,
//   Layers,
//   Menu,
//   Phone,
//   University,
//   X,
// } from "lucide-react";

// // ─── Color themes per category ────────────────────────────────────────────────

// const themes = {
//   iim: {
//     grad: "from-amber-400 to-orange-500",
//     iconColor: "text-white",
//     accent: "text-orange-600",
//     activeBg: "bg-orange-50",
//     activeBorder: "border-orange-500",
//     cardHover: "hover:border-orange-400 hover:bg-orange-50",
//     tagColor: "text-orange-500",
//   },
//   dba: {
//     grad: "from-violet-500 to-purple-600",
//     iconColor: "text-white",
//     accent: "text-violet-600",
//     activeBg: "bg-violet-50",
//     activeBorder: "border-violet-500",
//     cardHover: "hover:border-violet-400 hover:bg-violet-50",
//     tagColor: "text-violet-500",
//   },
//   ug: {
//     grad: "from-sky-400 to-blue-600",
//     iconColor: "text-white",
//     accent: "text-blue-600",
//     activeBg: "bg-blue-50",
//     activeBorder: "border-blue-500",
//     cardHover: "hover:border-blue-400 hover:bg-blue-50",
//     tagColor: "text-blue-500",
//   },
//   pg: {
//     grad: "from-emerald-400 to-teal-600",
//     iconColor: "text-white",
//     accent: "text-teal-600",
//     activeBg: "bg-teal-50",
//     activeBorder: "border-teal-500",
//     cardHover: "hover:border-teal-400 hover:bg-teal-50",
//     tagColor: "text-teal-600",
//   },
//   offline: {
//     grad: "from-pink-400 to-rose-600",
//     iconColor: "text-white",
//     accent: "text-rose-600",
//     activeBg: "bg-rose-50",
//     activeBorder: "border-rose-500",
//     cardHover: "hover:border-rose-400 hover:bg-rose-50",
//     tagColor: "text-rose-500",
//   },
//   exec: {
//     grad: "from-indigo-500 to-blue-700",
//     iconColor: "text-white",
//     accent: "text-indigo-600",
//     activeBg: "bg-indigo-50",
//     activeBorder: "border-indigo-500",
//     cardHover: "hover:border-indigo-400 hover:bg-indigo-50",
//     tagColor: "text-indigo-500",
//   },
//   uni: {
//     grad: "from-lime-400 to-green-600",
//     iconColor: "text-white",
//     accent: "text-green-700",
//     activeBg: "bg-green-50",
//     activeBorder: "border-green-600",
//     cardHover: "hover:border-green-500 hover:bg-green-50",
//     tagColor: "text-green-600",
//   },
// };

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const categories = [
//   {
//     id: "iim",
//     label: "IIM Certification Courses",
//     Icon: Award,
//     courses: [
//       {
//         tag: "Certification",
//         name: "IIM K – HR Management & Analytics",
//         duration: "8 Months",
//       },
//       {
//         tag: "Certification",
//         name: "IIM K – AI Professional Certificate",
//         duration: "6 Months",
//       },
//       {
//         tag: "Certification",
//         name: "IIM K – Digital Marketing & Strategy",
//         duration: "5 Months",
//       },
//       {
//         tag: "Certification",
//         name: "IIM B – Finance for Non-Finance Managers",
//         duration: "4 Months",
//       },
//     ],
//   },
//   {
//     id: "dba",
//     label: "Online Doctorate (DBA)",
//     Icon: GraduationCap,
//     courses: [
//       {
//         tag: "Doctorate",
//         name: "Doctor of Business Administration – General",
//         duration: "3 Years",
//       },
//       {
//         tag: "Doctorate",
//         name: "DBA – Leadership & Strategy",
//         duration: "3 Years",
//       },
//     ],
//   },
//   {
//     id: "ug",
//     label: "Online UG Courses",
//     Icon: BookOpen,
//     courses: [
//       {
//         tag: "Undergraduate",
//         name: "B.Com – Accounting & Finance",
//         duration: "3 Years",
//       },
//       {
//         tag: "Undergraduate",
//         name: "BBA – Business Administration",
//         duration: "3 Years",
//       },
//       {
//         tag: "Undergraduate",
//         name: "B.Sc Computer Science",
//         duration: "3 Years",
//       },
//       {
//         tag: "Undergraduate",
//         name: "BA – Psychology & Sociology",
//         duration: "3 Years",
//       },
//     ],
//   },
//   {
//     id: "pg",
//     label: "Online PG Courses",
//     Icon: Layers,
//     courses: [
//       {
//         tag: "Postgraduate",
//         name: "MBA – General Management",
//         duration: "2 Years",
//       },
//       {
//         tag: "Postgraduate",
//         name: "M.Com – Financial Management",
//         duration: "2 Years",
//       },
//       {
//         tag: "Postgraduate",
//         name: "MCA – Computer Applications",
//         duration: "2 Years",
//       },
//       {
//         tag: "Postgraduate",
//         name: "MA – HR & Organisational Psychology",
//         duration: "2 Years",
//       },
//     ],
//   },
//   {
//     id: "offline",
//     label: "Offline Certification Courses",
//     Icon: Building2,
//     courses: [
//       {
//         tag: "Certification",
//         name: "Data Science & Machine Learning",
//         duration: "6 Months",
//       },
//       {
//         tag: "Certification",
//         name: "Full Stack Web Development",
//         duration: "4 Months",
//       },
//       {
//         tag: "Certification",
//         name: "UI/UX Design Bootcamp",
//         duration: "3 Months",
//       },
//     ],
//   },
//   {
//     id: "exec",
//     label: "1 Year Executive Program",
//     Icon: Briefcase,
//     courses: [
//       {
//         tag: "Executive",
//         name: "Executive MBA – Business Leadership",
//         duration: "12 Months",
//       },
//       {
//         tag: "Executive",
//         name: "Executive PG – Product Management",
//         duration: "11 Months",
//       },
//       {
//         tag: "Executive",
//         name: "Executive PG – Data Science & AI",
//         duration: "12 Months",
//       },
//     ],
//   },
//   {
//     id: "uni",
//     label: "Universities",
//     Icon: University,
//     courses: [
//       {
//         tag: "University",
//         name: "Jain University – Online Programs",
//         duration: "Multiple",
//       },
//       {
//         tag: "University",
//         name: "Amity University – Distance Learning",
//         duration: "Multiple",
//       },
//       {
//         tag: "University",
//         name: "Manipal University – UG & PG Programs",
//         duration: "Multiple",
//       },
//     ],
//   },
// ];

// // ─── ColorIcon ────────────────────────────────────────────────────────────────

// function ColorIcon({ id, Icon, size = 16, boxClass = "w-9 h-9 rounded-xl" }) {
//   const t = themes[id];
//   return (
//     <span
//       className={`${boxClass} bg-gradient-to-br ${t.grad} flex items-center justify-center flex-shrink-0 shadow-sm`}
//     >
//       <Icon size={size} className={t.iconColor} strokeWidth={2} />
//     </span>
//   );
// }

// // ─── CourseCard ───────────────────────────────────────────────────────────────

// function CourseCard({ tag, name, duration, catId }) {
//   const t = themes[catId];
//   return (
//     <div
//       className={`border border-gray-200 rounded-xl p-4 cursor-pointer transition-all duration-150 ${t.cardHover}`}
//     >
//       <p
//         className={`text-[10px] font-semibold uppercase tracking-widest mb-1 ${t.tagColor}`}
//       >
//         {tag}
//       </p>
//       <p className="text-sm font-medium text-gray-800 leading-snug mb-2">
//         {name}
//       </p>
//       <span className="flex items-center gap-1 text-[11px] text-gray-500">
//         <Clock size={11} />
//         {duration}
//       </span>
//     </div>
//   );
// }

// // ─── MegaDropdown (desktop) ───────────────────────────────────────────────────

// function MegaDropdown({ open }) {
//   const [activeCat, setActiveCat] = useState(categories[0].id);
//   const active = categories.find((c) => c.id === activeCat);
//   const t = themes[activeCat];

//   if (!open) return null;

//   return (
//     <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
//       <div className="max-w-5xl mx-auto flex min-h-[380px]">
//         {/* Left: category list */}
//         <aside className="w-64 border-r border-gray-100 py-2 flex-shrink-0 bg-gray-50/70">
//           {categories.map((cat) => {
//             const isActive = cat.id === activeCat;
//             const ct = themes[cat.id];
//             return (
//               <button
//                 key={cat.id}
//                 onMouseEnter={() => setActiveCat(cat.id)}
//                 onClick={() => setActiveCat(cat.id)}
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-all duration-100 border-r-2 ${
//                   isActive
//                     ? `${ct.activeBg} ${ct.activeBorder} ${ct.accent} font-semibold`
//                     : "border-transparent text-gray-600 hover:bg-white hover:text-gray-900"
//                 }`}
//               >
//                 <ColorIcon
//                   id={cat.id}
//                   Icon={cat.Icon}
//                   size={15}
//                   boxClass="w-8 h-8 rounded-lg"
//                 />
//                 <span className="leading-tight flex-1 text-[13px]">
//                   {cat.label}
//                 </span>
//                 <ChevronRight
//                   size={13}
//                   className={`flex-shrink-0 ${isActive ? ct.accent : "text-gray-300"}`}
//                 />
//               </button>
//             );
//           })}
//         </aside>

//         {/* Right: course panel */}
//         <div className="flex-1 flex flex-col">
//           {/* Panel header */}
//           <div className="flex items-center gap-3 px-5 pt-4 pb-3 border-b border-gray-100">
//             <ColorIcon
//               id={activeCat}
//               Icon={active.Icon}
//               size={18}
//               boxClass="w-11 h-11 rounded-xl"
//             />
//             <div>
//               <p className={`text-sm font-semibold ${t.accent}`}>
//                 {active.label}
//               </p>
//               <p className="text-[11px] text-gray-400">
//                 {active.courses.length} programs available
//               </p>
//             </div>
//           </div>

//           <div className="flex-1 p-5">
//             <div className="grid grid-cols-2 gap-3">
//               {active.courses.map((c, i) => (
//                 <CourseCard key={i} {...c} catId={activeCat} />
//               ))}
//             </div>
//           </div>

//           {/* <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between">
//             <p className="text-sm text-gray-500">
//               Interested?{" "}
//               <a href="#" className="text-red-500 font-medium hover:underline">
//                 Schedule a demo
//               </a>
//             </p>
//             <a
//               href="#"
//               className={`text-xs font-semibold ${t.accent} hover:underline`}
//             >
//               View all →
//             </a>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── MobileMenu ───────────────────────────────────────────────────────────────

// function MobileMenu({ open }) {
//   const [expanded, setExpanded] = useState(null);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 top-14 bg-white z-40 overflow-y-auto pb-8 md:hidden">
//       <div className="px-4 pt-4 space-y-1">
//         <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 px-2 mb-3">
//           Programs
//         </p>

//         {categories.map(({ id, label, Icon, courses }) => {
//           const t = themes[id];
//           const isOpen = expanded === id;
//           return (
//             <div key={id}>
//               <button
//                 onClick={() => setExpanded(isOpen ? null : id)}
//                 className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
//                   isOpen ? t.activeBg : "hover:bg-gray-50"
//                 }`}
//               >
//                 <ColorIcon
//                   id={id}
//                   Icon={Icon}
//                   size={15}
//                   boxClass="w-9 h-9 rounded-xl"
//                 />
//                 <span
//                   className={`font-medium flex-1 text-left ${isOpen ? t.accent : "text-gray-800"}`}
//                 >
//                   {label}
//                 </span>
//                 <ChevronDown
//                   size={15}
//                   className={`flex-shrink-0 transition-transform duration-200 ${
//                     isOpen ? `rotate-180 ${t.accent}` : "text-gray-400"
//                   }`}
//                 />
//               </button>

//               {isOpen && (
//                 <div className="ml-12 mt-1.5 space-y-2 pb-2">
//                   {courses.map((c, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       className={`block px-3 py-2.5 rounded-lg border border-gray-200 transition-all ${t.cardHover}`}
//                     >
//                       <p
//                         className={`text-[10px] font-semibold uppercase tracking-widest mb-0.5 ${t.tagColor}`}
//                       >
//                         {c.tag}
//                       </p>
//                       <p className="text-sm font-medium text-gray-800 leading-snug">
//                         {c.name}
//                       </p>
//                       <span className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
//                         <Clock size={10} />
//                         {c.duration}
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         <div className="pt-4 border-t border-gray-100 space-y-1">
//           <a
//             href="#"
//             className="block text-sm text-gray-700 px-3 py-2.5 hover:bg-gray-50 rounded-xl font-medium"
//           >
//             Blog
//           </a>
//           <a
//             href="#"
//             className="block text-sm text-gray-700 px-3 py-2.5 hover:bg-gray-50 rounded-xl font-medium"
//           >
//             More
//           </a>
//         </div>

//         <div className="pt-3 space-y-2">
//           <a
//             href="tel:18001216201"
//             className="flex items-center justify-center gap-2 w-full border border-red-400 text-red-500 text-sm font-medium py-2.5 rounded-xl hover:bg-red-50 transition-colors"
//           >
//             <Phone size={14} /> 1800-121-6201
//           </a>
//           <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors">
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Header ───────────────────────────────────────────────────────────────────

// export function Header() {
//   const [programOpen, setProgramOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     function handleClick(e) {
//       if (headerRef.current && !headerRef.current.contains(e.target))
//         setProgramOpen(false);
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   useEffect(() => {
//     function onScroll() {
//       setScrolled(window.scrollY > 8);
//     }
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   return (
//     <header
//       ref={headerRef}
//       className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
//         scrolled ? "shadow-md" : "border-b border-gray-200"
//       }`}
//     >
//       <nav className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between relative">
//         <a href="/" className="flex items-center gap-2 hover:opacity-80">
//           <img src="/logo.png" alt="eCampus" className="h-8 w-auto" />
//         </a>

//         <div className="hidden md:flex items-center gap-1">
//           <button
//             onClick={() => {
//               setProgramOpen((p) => !p);
//               setMobileOpen(false);
//             }}
//             className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//               programOpen
//                 ? "bg-red-50 text-red-600"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             Program
//             <ChevronDown
//               size={14}
//               className={`transition-transform duration-200 ${programOpen ? "rotate-180" : ""}`}
//             />
//           </button>
//           <a
//             href="#"
//             className="px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors font-medium"
//           >
//             Blog
//           </a>
//           <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors font-medium">
//             More <ChevronDown size={14} />
//           </button>
//         </div>

//         {/* Desktop right CTA */}
//         <div className="hidden md:flex items-center gap-2">
//           <a
//             href="tel:18001216201"
//             className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-300 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
//           >
//             <Phone size={14} />
//             1800-121-6201
//           </a>
//           <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-red-200">
//             Enroll Now
//           </button>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           onClick={() => {
//             setMobileOpen((m) => !m);
//             setProgramOpen(false);
//           }}
//           className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
//           aria-label="Toggle menu"
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? <X size={18} /> : <Menu size={18} />}
//         </button>
//       </nav>

//       {/* Desktop mega dropdown */}
//       <div className="hidden md:block relative">
//         <MegaDropdown open={programOpen} />
//       </div>

//       {/* Mobile menu */}
//       <MobileMenu open={mobileOpen} />
//     </header>
//   );
// }

// // ─── Demo page ────────────────────────────────────────────────────────────────

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="max-w-3xl mx-auto px-4 py-16 text-center">
//         <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
//           Demo
//         </p>
//         <h1 className="text-3xl font-bold text-gray-900 mb-3">
//           eCampus Mega Navbar
//         </h1>
//         <p className="text-gray-500 text-sm mb-10">
//           Desktop par <strong>Program</strong> click karein — hover se
//           categories switch hoti hain.
//           <br />
//           Mobile par hamburger se accordion menu khulta hai.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
//           {[
//             {
//               id: "iim",
//               Icon: Award,
//               title: "7 Colorful Icons",
//               desc: "Har category ka unique gradient",
//             },
//             {
//               id: "ug",
//               Icon: BookOpen,
//               title: "Mega Dropdown",
//               desc: "Left nav + right course cards",
//             },
//             {
//               id: "exec",
//               Icon: Briefcase,
//               title: "Fully Responsive",
//               desc: "Mobile accordion bhi smooth",
//             },
//           ].map((f) => (
//             <div
//               key={f.id}
//               className="bg-white rounded-xl border border-gray-200 p-4 flex gap-3 items-start"
//             >
//               <ColorIcon
//                 id={f.id}
//                 Icon={f.Icon}
//                 size={16}
//                 boxClass="w-10 h-10 rounded-xl"
//               />
//               <div>
//                 <p className="font-semibold text-sm text-gray-800 mb-0.5">
//                   {f.title}
//                 </p>
//                 <p className="text-xs text-gray-500">{f.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  Handshake,
  HelpCircle,
  Layers,
  Leaf,
  Menu,
  Phone,
  RotateCcw,
  Shield,
  University,
  Users,
  X,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
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
      },
      {
        tag: "Undergraduate",
        name: "BBA – Business Administration",
        duration: "3 Years",
      },
      {
        tag: "Undergraduate",
        name: "B.Sc Computer Science",
        duration: "3 Years",
      },
      {
        tag: "Undergraduate",
        name: "BA – Psychology & Sociology",
        duration: "3 Years",
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
      },
      {
        tag: "Postgraduate",
        name: "M.Com – Financial Management",
        duration: "2 Years",
      },
      {
        tag: "Postgraduate",
        name: "MCA – Computer Applications",
        duration: "2 Years",
      },
      {
        tag: "Postgraduate",
        name: "MA – HR & Organisational Psychology",
        duration: "2 Years",
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

// Company links — left column (with description)
const companyLinks = [
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

// Company links — right column (simple links)
const companyLinks2 = [
  { title: "Terms of Service", href: "#", Icon: FileText },
  { title: "Privacy Policy", href: "#", Icon: Shield },
  { title: "Refund Policy", href: "#", Icon: RotateCcw },
  { title: "Blog", href: "#", Icon: Leaf },
  { title: "Help Center", href: "#", Icon: HelpCircle },
];

// ─── GrayIcon ─────────────────────────────────────────────────────────────────

function GrayIcon({
  Icon,
  size = 16,
  boxClass = "w-9 h-9 rounded-xl bg-gray-100",
}) {
  return (
    <span
      className={`${boxClass} flex items-center justify-center flex-shrink-0`}
    >
      <Icon size={size} className="text-gray-500" strokeWidth={2} />
    </span>
  );
}

// ─── CourseCard ───────────────────────────────────────────────────────────────

function CourseCard({ tag, name, duration }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 cursor-pointer transition-all duration-150 hover:border-red-400 hover:bg-red-50">
      <p className="text-[10px] font-semibold uppercase tracking-widest mb-1 text-red-500">
        {tag}
      </p>
      <p className="text-sm font-medium text-gray-800 leading-snug mb-2">
        {name}
      </p>
      <span className="flex items-center gap-1 text-[11px] text-gray-500">
        <Clock size={11} />
        {duration}
      </span>
    </div>
  );
}

// ─── Program Mega Dropdown ────────────────────────────────────────────────────

function ProgramDropdown({ open }) {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeCat);

  if (!open) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50">
      <div className="max-w-5xl mx-auto flex min-h-[380px]">
        {/* Left: category list */}
        <aside className="w-64 border-r border-gray-100 py-2 flex-shrink-0 bg-gray-50/70">
          {categories.map((cat) => {
            const isActive = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveCat(cat.id)}
                onClick={() => setActiveCat(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-all duration-100 border-r-2 ${
                  isActive
                    ? "bg-red-50 border-red-500 text-red-600 font-semibold"
                    : "border-transparent text-gray-600 hover:bg-white hover:text-gray-900"
                }`}
              >
                <GrayIcon
                  Icon={cat.Icon}
                  size={15}
                  boxClass={`w-8 h-8 rounded-lg ${isActive ? "bg-red-100" : "bg-gray-100"}`}
                />
                <span className="leading-tight flex-1 text-[13px]">
                  {cat.label}
                </span>
                <ChevronRight
                  size={13}
                  className={`flex-shrink-0 ${isActive ? "text-red-400" : "text-gray-300"}`}
                />
              </button>
            );
          })}
        </aside>

        {/* Right: courses */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 px-5 pt-4 pb-3 border-b border-gray-100">
            <GrayIcon
              Icon={active.Icon}
              size={18}
              boxClass="w-11 h-11 rounded-xl bg-gray-100"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {active.label}
              </p>
              <p className="text-[11px] text-gray-400">
                {active.courses.length} programs available
              </p>
            </div>
          </div>
          <div className="flex-1 p-5">
            <div className="grid grid-cols-2 gap-3">
              {active.courses.map((c, i) => (
                <CourseCard key={i} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// ─── Company Dropdown ─────────────────────────────────────────────────────────

function CompanyDropdown({ open }) {
  if (!open) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50">
      <div className="max-w-5xl mx-auto py-3 px-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Left: with description */}
          <div className="space-y-1 border border-gray-200 rounded-xl p-2 shadow-sm bg-white">
            {companyLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-11 h-11 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.Icon size={18} className="text-gray-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: simple links */}
          <div className="space-y-0.5 p-2">
            {companyLinks2.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.Icon size={15} className="text-gray-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ open }) {
  const [expanded, setExpanded] = useState(null);
  const [companyExpanded, setCompanyExpanded] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 top-14 bg-white z-40 overflow-y-auto pb-8 md:hidden">
      <div className="px-4 pt-4 space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 px-2 mb-3">
          Programs
        </p>

        {categories.map(({ id, label, Icon, courses }) => {
          const isOpen = expanded === id;
          return (
            <div key={id}>
              <button
                onClick={() => setExpanded(isOpen ? null : id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  isOpen ? "bg-red-50" : "hover:bg-gray-50"
                }`}
              >
                <GrayIcon
                  Icon={Icon}
                  size={15}
                  boxClass={`w-9 h-9 rounded-xl ${isOpen ? "bg-red-100" : "bg-gray-100"}`}
                />
                <span
                  className={`font-medium flex-1 text-left ${isOpen ? "text-red-600" : "text-gray-800"}`}
                >
                  {label}
                </span>
                <ChevronDown
                  size={15}
                  className={`flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-red-400" : "text-gray-400"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="ml-12 mt-1.5 space-y-2 pb-2">
                  {courses.map((c, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-3 py-2.5 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5 text-red-500">
                        {c.tag}
                      </p>
                      <p className="text-sm font-medium text-gray-800 leading-snug">
                        {c.name}
                      </p>
                      <span className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                        <Clock size={10} />
                        {c.duration}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Company accordion */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 px-2 pt-4 mb-2">
          Company
        </p>

        <button
          onClick={() => setCompanyExpanded((v) => !v)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
            companyExpanded ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
        >
          <GrayIcon
            Icon={Users}
            size={15}
            boxClass="w-9 h-9 rounded-xl bg-gray-100"
          />
          <span className="font-medium flex-1 text-left text-gray-800">
            Company
          </span>
          <ChevronDown
            size={15}
            className={`text-gray-400 transition-transform duration-200 ${companyExpanded ? "rotate-180" : ""}`}
          />
        </button>

        {companyExpanded && (
          <div className="ml-12 mt-1.5 space-y-1 pb-2">
            {[...companyLinks, ...companyLinks2].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <item.Icon size={14} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item.title}</span>
              </a>
            ))}
          </div>
        )}

        <div className="pt-3 space-y-2">
          <a
            href="tel:18001216201"
            className="flex items-center justify-center gap-2 w-full border border-red-400 text-red-500 text-sm font-medium py-2.5 rounded-xl hover:bg-red-50 transition-colors"
          >
            <Phone size={14} /> 1800-121-6201
          </a>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // "program" | "company" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Scroll detection for shadow
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggle = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "border-b border-gray-200"
      }`}
    >
      <nav className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between relative">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-80 select-none flex-shrink-0"
        >
          <img src="/logo.png" alt="eCampus" className="h-8 w-auto" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => toggle("program")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeMenu === "program"
                ? "bg-red-50 text-red-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Programs
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${activeMenu === "program" ? "rotate-180" : ""}`}
            />
          </button>

          <button
            onClick={() => toggle("company")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeMenu === "company"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Company
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${activeMenu === "company" ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:18001216201"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-300 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
          >
            <Phone size={14} />
            1800-121-6201
          </a>
          <button className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm shadow-red-200">
            Enroll Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => {
            setMobileOpen((m) => !m);
            setActiveMenu(null);
          }}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Desktop dropdowns */}
      <div className="hidden md:block relative">
        <ProgramDropdown open={activeMenu === "program"} />
        <CompanyDropdown open={activeMenu === "company"} />
      </div>

      {/* Mobile menu */}
      <MobileMenu open={mobileOpen} />
    </header>
  );
}

// ─── Usage note ───────────────────────────────────────────────────────────────
// In your layout.tsx wrap content with pt-14 to account for fixed navbar:
//   <Header />
//   <main className="pt-14">{children}</main>

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-14 max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Demo
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          eCampus Mega Navbar
        </h1>
        <p className="text-gray-500 text-sm mb-2">
          <strong>Programs</strong> — mega dropdown with category hover.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          <strong>Company</strong> — two-column dropdown (description + quick
          links).
        </p>
        <p className="text-gray-400 text-xs">
          Scroll karo — navbar upar fixed rahega ✓
        </p>
      </main>
    </div>
  );
}
