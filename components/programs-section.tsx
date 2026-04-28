import { ProgramCard } from './program-card'

const programs = [
  {
    title: 'Online Degree Programs',
    description: "Earn accredited bachelor&apos;s and master&apos;s degrees from top universities worldwide.",
    duration: '2-4 years',
    students: 15000,
    level: 'All Levels',
    price: '$15,000+',
    image: '/degree-program.jpg',
  },
  {
    title: 'Professional Certifications',
    description: 'Industry-recognized certifications that boost your career prospects and salary.',
    duration: '3-6 months',
    students: 22500,
    level: 'Intermediate',
    price: '$2,000-$8,000',
    image: '/certification-program.jpg',
  },
  {
    title: 'Executive Programs',
    description: 'Leadership and strategy courses designed for working professionals and executives.',
    duration: '4-12 weeks',
    students: 8900,
    level: 'Advanced',
    price: '$10,000-$25,000',
    image: '/executive-program.jpg',
  },
  {
    title: 'Skill-Based Bootcamps',
    description: 'Intensive, hands-on training in emerging tech and in-demand skills.',
    duration: '8-16 weeks',
    students: 18500,
    level: 'Beginner-Intermediate',
    price: '$5,000-$12,000',
    image: '/bootcamp-program.jpg',
  },
  {
    title: 'Micro-Credentials & Mini-Courses',
    description: 'Short, focused learning modules to upskill on specific topics.',
    duration: '2-8 weeks',
    students: 31000,
    level: 'Beginner',
    price: '$299-$2,000',
    image: '/micro-credential.jpg',
  },
  {
    title: 'Corporate Training Programs',
    description: 'Customized learning solutions for teams and organizations.',
    duration: 'Flexible',
    students: 5200,
    level: 'All Levels',
    price: 'Custom Pricing',
    image: '/corporate-training.jpg',
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Featured Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Explore our curated selection of industry-recognized programs designed to accelerate your career.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="cta-btn">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  )
}
