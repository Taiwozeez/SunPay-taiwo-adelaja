"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Where Trusted Vault Meets Reliability",
    description:
      "COREVAULT Energy Ltd specializes in empowering clients to navigate complex energy landscapes and optimize oil and gas supply chains through trusted consulting and advisory services.",
    image: "/images/heroimg.jpg",
  },
  {
    id: 2,
    title: "Consultancy Operations Excellence",
    description:
      "Resources Evaluation via Visionary Advisory Utilization and Logistics Transformations - delivering effective partnerships that navigate complexity and mitigate risk.",
    image: "/images/heroimg2.jpg",
  },
  {
    id: 3,
    title: "Mediation Expert in Oil & Gas",
    description:
      "Facilitating discussions to reach mutually beneficial agreements, resolving conflicts and disputes while building trust and rapport with stakeholders.",
    image: "/images/heroimg3.jpg",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber)
  }

  const currentSlideData = slides.find((slide) => slide.id === currentSlide) || slides[0]

  return (
    <section className="relative min-h-screen bg-blue-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image || "/placeholder.svg"}
          alt="Oil refinery industrial plant"
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full flex justify-between items-center">
          {/* Left Content */}
          <div className="max-w-full sm:max-w-lg lg:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-lg">
              {currentSlideData.description}
            </p>

            {/* Explore More Button with Number Indicators Below */}
            <div className="flex flex-col items-start space-y-4 sm:space-y-6">
              <Link
                href="/explore"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-colors rounded-sm"
              >
                Explore More
              </Link>

              {/* Number Indicators - Now placed below the button */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {[1, 2, 3].map((slide) => (
                  <button
                    key={slide}
                    onClick={() => goToSlide(slide)}
                    className={`transition-all duration-300 ${
                      currentSlide === slide
                        ? "w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-700 bg-white flex items-center justify-center"
                        : "text-sm text-white/70 hover:text-white"
                    }`}
                  >
                    <span className={`text-xs sm:text-sm ${currentSlide === slide ? "text-blue-900 font-medium" : ""}`}>
                      {slide.toString().padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Bar - Mobile Responsive */}
      <div className="absolute bottom-0 left-0 right-0 sm:left-auto sm:right-0 bg-orange-500 text-white z-20">
        <div className="flex flex-col sm:flex-row">
          {/* Location */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center space-x-3 sm:space-x-4 border-b sm:border-b-0 sm:border-r border-orange-400">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm opacity-90">Location</div>
              <div className="font-medium text-sm sm:text-base">Plot in Turing Street, Nigeria</div>
            </div>
          </div>

          {/* Phone */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center space-x-3 sm:space-x-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <div className="text-xs sm:text-sm opacity-90">Phone Number</div>
              <div className="font-medium text-sm sm:text-base">+123A 803 014 2841</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
