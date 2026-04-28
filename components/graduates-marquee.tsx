'use client';

import React from 'react';

type GraduateTestimonialT = {
  image: string;
  name: string;
  role: string;
  testimonial: string;
};

const DEFAULT_GRADUATES: GraduateTestimonialT[] = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Sarah Chen',
    role: 'Product Manager at Google',
    testimonial:
      'This degree completely transformed my career. The flexible schedule allowed me to work while studying, and the job support was instrumental in landing my dream role at Google.',
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Marcus Johnson',
    role: 'Senior Engineer at Microsoft',
    testimonial:
      'As a career changer, I was nervous about upskilling. The program broke everything down perfectly, and mentorship from industry experts made all the difference.',
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Priya Sharma',
    role: 'Data Scientist at Meta',
    testimonial:
      'The hands-on projects and real-world case studies gave me exactly what I needed. I went from curious to job-ready in less than a year. Highly recommend!',
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'James Wilson',
    role: 'MBA Graduate, Finance Director',
    testimonial:
      'The MBA program balanced theory with practice beautifully. Studying while working was manageable because of the flexible schedule. My team has noticed a real difference.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    name: 'Emma Rodriguez',
    role: 'UX Designer at Apple',
    testimonial:
      'The design program focused on real-world problem solving. I loved the peer collaboration and the supportive community. Worth every penny!',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    name: 'David Kim',
    role: 'DevOps Engineer at AWS',
    testimonial:
      'The cloud certification program was comprehensive and up-to-date. The labs were practical, and the instructors were genuinely invested in our success.',
  },
];

const VerifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 48 48"
    className="inline-block"
  >
    <polygon
      fill="#fe332a"
      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
    ></polygon>
    <polygon
      fill="#fff"
      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
    ></polygon>
  </svg>
);

const GraduateCard = ({ testimonial }: { testimonial: GraduateTestimonialT }) => (
  <div className="p-6 rounded-xl mx-4 shadow-soft hover:shadow-medium transition-all duration-300 w-80 shrink-0 bg-white border border-gray-100">
    <div className="flex gap-3 mb-4">
      <img
        className="w-12 h-12 rounded-full object-cover"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
          <VerifyIcon />
        </div>
        <span className="text-xs text-gray-500">{testimonial.role}</span>
      </div>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed italic">
      "{testimonial.testimonial}"
    </p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 30,
}: {
  data: GraduateTestimonialT[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      <div
        className="flex transform-gpu min-w-[200%]"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((testimonial, i) => (
          <GraduateCard key={i} testimonial={testimonial} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

export function GraduatesMarquee({
  row1 = DEFAULT_GRADUATES.slice(0, 3),
  row2 = DEFAULT_GRADUATES.slice(3, 6),
}: {
  row1?: GraduateTestimonialT[];
  row2?: GraduateTestimonialT[];
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
              What Our Graduates Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Join thousands of successful graduates who&apos;ve transformed their careers and achieved their goals.
            </p>
          </div>

          {/* Marquee Rows */}
          <div className="flex flex-col gap-8">
            <MarqueeRow data={row1} reverse={false} speed={30} />
            <MarqueeRow data={row2} reverse={true} speed={30} />
          </div>
        </div>
      </section>
    </>
  );
}
