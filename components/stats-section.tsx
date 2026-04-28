import { BarChart3, Users, Award, Globe } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '150K+',
      label: 'Active Students',
      description: 'Learning and growing worldwide',
    },
    {
      icon: Globe,
      value: '180+',
      label: 'Countries Reached',
      description: 'Global community of learners',
    },
    {
      icon: Award,
      value: '95%',
      label: 'Satisfaction Rate',
      description: 'Student-rated quality education',
    },
    {
      icon: BarChart3,
      value: '$89K',
      label: 'Avg Salary Increase',
      description: 'Post-graduation outcomes',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-red-50 rounded-lg mb-4">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
