import { Clock, Users, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ProgramCardProps {
  title: string
  description: string
  duration: string
  students: number
  level: string
  price: string
  image?: string
}

export function ProgramCard({
  title,
  description,
  duration,
  students,
  level,
  price,
  image,
}: ProgramCardProps) {
  return (
    <div className="card-hover bg-white rounded-xl overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Header Image */}
      <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full opacity-20"></div>
            <div className="w-10 h-10 bg-red-600 rounded-full absolute top-8 right-8 opacity-30"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Badge */}
        <div className="inline-block mb-3">
          <span className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {description}
        </p>

        {/* Meta Info */}
        <div className="grid grid-cols-3 gap-3 py-4 border-t border-gray-100 border-b mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="text-xs font-semibold text-gray-700">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-red-600" />
            <span className="text-xs font-semibold text-gray-700">{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-red-600" />
            <span className="text-xs font-semibold text-gray-700">Growth</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">{price}</span>
          </div>
          <button className="inline-flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 group">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}
