"use client"

import Link from "next/link"
import Image from "next/image"

export default function QuoteHeroAlt() {
  return (
    <section className="relative min-h-[500px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[500px]">
          {/* Left Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 md:mb-8">
              <div className="flex items-center space-x-2 text-sm text-blue-600">
                <Link href="/" className="hover:text-blue-800 transition-colors">
                  Home
                </Link>
                <span>›</span>
                <Link href="/projects" className="hover:text-blue-800 transition-colors">
                  Projects
                </Link>
                <span>›</span>
                <span className="text-blue-900 font-medium">Details</span>
              </div>
            </nav>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-4 md:mb-6">
              Sunrise Oilfield
              <br />
              Development
              <br />
              Project
            </h1>

            {/* Description */}
            <p className="text-blue-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
              The Sunrise Oilfield Development project represents a groundbreaking endeavor in harnessing the vast
              energy and oilfield potential of the Gulf of Mexico while prioritizing environmental stewardship and
              operational excellence.
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:block w-1/2 relative">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/heroimg.jpg"
                alt="Industrial oil refinery facility"
                fill
                className="object-cover object-center"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar - Adjusted to be on the right side with reduced width */}
      <div className="absolute bottom-0 left-0 md:left-auto md:right-0 bg-blue-900 text-white px-4 md:px-8 py-4 md:py-6 w-full md:w-fit">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
          {/* Location */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm opacity-90">Location</p>
              <p className="font-semibold">Gulf of Mexico, USA</p>
            </div>
          </div>

          {/* Client */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <p className="text-sm opacity-90">Client</p>
              <p className="font-semibold">Sunrise Energy Exploration LLC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
