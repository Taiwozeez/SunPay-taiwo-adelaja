"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        setShowScrollTop(footerRect.top <= windowHeight)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Logo and description - left side */}
          <div className="flex-shrink-0 max-w-sm">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/corevault-logo.jpg"
                alt="Corevault Energy Ltd Logo"
                width={160}
                height={40}
                className="h-30 w-auto"
              />
            </Link>
            <p className="text-blue-300 text-sm mb-6 leading-relaxed">
              Expert mediation and advisory services for the oil and gas industry, specializing in conflict resolution
              and stakeholder facilitation.
            </p>

            {/* Social media icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-300 hover:text-white text-sm font-medium">
                TW
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white text-sm font-medium">
                IG
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white text-sm font-medium">
                FB
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white text-sm font-medium">
                IN
              </Link>
            </div>
          </div>

          {/* Right side container with columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto">
            {/* Company column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-blue-300 hover:text-white text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Our Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Work Journal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/phone" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Phone Number
                  </Link>
                </li>
                <li>
                  <Link href="/email" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Email Address
                  </Link>
                </li>
                <li>
                  <Link href="/social" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="text-blue-300 hover:text-white text-sm transition-colors">
                    HQ Location
                  </Link>
                </li>
                <li>
                  <Link href="/message" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Message Board
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services column */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/conflict-resolution"
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    Conflict Resolution
                  </Link>
                </li>
                <li>
                  <Link href="/dispute-mediation" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Dispute Mediation
                  </Link>
                </li>
                <li>
                  <Link href="/advisory-services" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Advisory Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/negotiation-management"
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    Negotiation Management
                  </Link>
                </li>
                <li>
                  <Link href="/trust-building" className="text-blue-300 hover:text-white text-sm transition-colors">
                    Trust Building
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stakeholder-facilitation"
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    Stakeholder Facilitation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="bg-blue-800 border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm">Copyright © 2025. All rights reserved.</p>{" "}
            {/* Updated copyright year */}
            <div className="flex space-x-4 sm:space-x-6 mt-2 md:mt-0">
              <Link href="/privacy" className="text-blue-300 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-blue-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-blue-300 hover:text-white text-sm transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button - square shape */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-sm shadow-lg transition-all duration-300 transform hover:scale-105" // Updated to amber for consistency
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  )
}
