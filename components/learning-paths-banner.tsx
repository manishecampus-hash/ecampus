'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const learningPaths = [
  {
    label: 'PG Courses',
    description: 'After Graduation',
    icon: '🎓',
    count: '90+',
  },
  {
    label: 'Executive Education',
    description: 'Working Professionals',
    icon: '💼',
    count: '50+',
  },
  {
    label: 'UG Courses',
    description: 'After 12th',
    icon: '📚',
    count: '40+',
  },
  {
    label: 'Skill-Based Bootcamps',
    description: 'Tech & In-Demand Skills',
    icon: '⚡',
    count: '30+',
  },
  {
    label: 'Study Abroad',
    description: 'Hybrid & Pathway Mode',
    icon: '🌍',
    count: '25+',
  },
  {
    label: 'Certifications',
    description: 'Industry Recognized',
    icon: '✅',
    count: '60+',
  },
]

export function LearningPathsBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      className="relative bg-gradient-to-b from-background to-muted/30 py-16 md:py-24"
      aria-labelledby="learning-paths-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={itemVariants}
            id="learning-paths-heading"
            className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Find Your Path
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70"
          >
            Explore courses & colleges across multiple learning paths
          </motion.p>
        </motion.div>

        {/* Grid of Learning Paths */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.label}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <Link href="#programs" className="block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-white p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg dark:border-border/30 dark:bg-foreground/[0.02] dark:hover:border-primary/40">
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.05] opacity-0 transition-opacity group-hover:opacity-100 dark:from-primary/0 dark:to-primary/[0.08]" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    {/* Top content */}
                    <div className="mb-4">
                      <div className="mb-3 text-3xl">{path.icon}</div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
                        {path.label}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {path.description}
                      </p>
                    </div>

                    {/* Bottom section with count and arrow */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">
                          {path.count}
                        </span>
                        <span className="text-xs text-foreground/50">Programs</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 flex justify-center"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-primary/60 hover:bg-primary/10 dark:border-primary/40 dark:bg-primary/[0.08] dark:hover:border-primary/60 dark:hover:bg-primary/[0.12]"
            >
              View All Learning Paths
              <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
