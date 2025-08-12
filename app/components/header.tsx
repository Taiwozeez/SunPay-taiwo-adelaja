"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/corevault-logo.jpg"
                alt="CoreVault Logo"
                width={140}
                height={40}
                className="h-30 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center flex-1 h-full">
            <div className="flex-1 flex justify-end">
              <nav className="flex items-center h-full mr-6">
                <Link
                  href="/"
                  className={`px-3 py-2 text-sm transition-colors h-full flex items-center ${
                    isActive("/") ? "text-blue-900 font-extrabold" : "text-blue-700 hover:text-blue-900 font-medium"
                  }`}
                >
                  Home
                </Link>
                <span className="text-blue-300 mx-1 h-full flex items-center">•</span>
                <Link
                  href="/about"
                  className={`px-3 py-2 text-sm transition-colors h-full flex items-center ${
                    isActive("/about")
                      ? "text-blue-900 font-extrabold"
                      : "text-blue-700 hover:text-blue-900 font-medium"
                  }`}
                >
                  About
                </Link>
                <span className="text-blue-300 mx-1 h-full flex items-center">•</span>
                <Link
                  href="/services"
                  className={`px-3 py-2 text-sm transition-colors h-full flex items-center ${
                    isActive("/services")
                      ? "text-blue-900 font-extrabold"
                      : "text-blue-700 hover:text-blue-900 font-medium"
                  }`}
                >
                  Services
                </Link>
                <span className="text-blue-300 mx-1 h-full flex items-center">•</span>
                <Link
                  href="/projects"
                  className={`px-3 py-2 text-sm transition-colors h-full flex items-center ${
                    isActive("/projects")
                      ? "text-blue-900 font-extrabold"
                      : "text-blue-700 hover:text-blue-900 font-medium"
                  }`}
                >
                  Projects
                </Link>
                <span className="text-blue-300 mx-1 h-full flex items-center">•</span>
                <Link
                  href="/contact"
                  className={`px-3 py-2 text-sm transition-colors h-full flex items-center ${
                    isActive("/contact")
                      ? "text-blue-900 font-extrabold"
                      : "text-blue-700 hover:text-blue-900 font-medium"
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Request A Quote Button - Updated with conditional colors */}
            <div className="h-full">
              <Link
                href="/quote"
                className={`text-white px-6 h-full flex items-center text-sm font-bold transition-colors ${
                  isActive("/quote") ? "bg-blue-900 hover:bg-blue-800" : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Request A Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto flex items-center">
            <button
              type="button"
              className="text-blue-900 hover:text-orange-500 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/") ? "text-blue-900 font-extrabold" : "text-blue-700 hover:text-blue-900 font-medium"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/about") ? "text-blue-900 font-extrabold" : "text-blue-700 hover:text-blue-900 font-medium"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/services")
                    ? "text-blue-900 font-extrabold"
                    : "text-blue-700 hover:text-blue-900 font-medium"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/projects")
                    ? "text-blue-900 font-extrabold"
                    : "text-blue-700 hover:text-blue-900 font-medium"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm transition-colors ${
                  isActive("/contact")
                    ? "text-blue-900 font-extrabold"
                    : "text-blue-700 hover:text-blue-900 font-medium"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className={`mt-4 text-white px-6 py-2 text-center text-sm font-bold transition-colors ${
                  isActive("/quote") ? "bg-blue-900 hover:bg-blue-800" : "bg-orange-500 hover:bg-orange-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Request A Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
