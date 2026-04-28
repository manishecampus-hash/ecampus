'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-soft">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-2xl">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="text-gray-900">Elevate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#programs" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Programs
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Testimonials
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="cta-btn">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
            <Link
              href="#programs"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <button className="w-full text-center py-2 text-gray-700 hover:text-red-600 font-medium">
                Sign In
              </button>
              <button className="w-full cta-btn">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
