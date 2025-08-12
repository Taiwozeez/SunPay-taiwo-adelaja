"use client"

import { useState } from "react"

export default function ServiceSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "Facilitating\nDiscussions",
      description: "We facilitate discussions to reach mutually beneficial agreements in oil and gas operations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Resolving\nConflicts",
      description: "We specialize in resolving conflicts and disputes in oil and gas supply chain operations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Building Trust\n& Rapport",
      description: "We build trust and rapport with stakeholders to ensure successful partnerships and collaborations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 2C13.3 2 14 2.7 14 3.5C14 4.3 13.3 5 12.5 5S11 4.3 11 3.5C11 2.7 11.7 2 12.5 2M21 9V7H15L13.5 7.5C13.1 7.7 12.6 7.6 12.3 7.3L10.5 5.5C10.1 5.1 9.6 4.9 9 4.9S7.9 5.1 7.5 5.5L6 7H3V9H6.2L7.7 7.5C7.9 7.3 8.1 7.3 8.3 7.5L10.1 9.3C10.5 9.7 11 9.9 11.6 9.9C12.2 9.9 12.7 9.7 13.1 9.3L14.5 7.9H21M7 12V22H9V12H7M12 12V22H14V12H12M17 12V22H19V12H17Z" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Creative\nSolutions",
      description: "We identify creative solutions to complex challenges in oil and gas supply chain management.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 12h20v2H2zm0-4h20v2H2zm0 8h20v2H2z" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Managing\nNegotiations",
      description: "We manage negotiations to achieve desired outcomes and ensure successful business relationships.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          <path d="M9 9h6v2H9zm0 3h6v2H9zm0 3h4v2H9z" />
          <circle cx="12" cy="6" r="1" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Advisory\nServices",
      description: "We provide trusted consulting, advisory, and facilitation services in oil and gas operations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M12 6l1.5 3L17 9.5l-2.5 2.5L15 16l-3-1.5L9 16l.5-4L7 9.5l3.5-.5L12 6z" />
        </svg>
      ),
      featured: false,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 + services.length) % services.length)
  }

  const visibleServices = services.slice(currentSlide, currentSlide + 3)

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-16">
        <div>
          <p className="text-orange-500 text-sm font-medium mb-2 tracking-wide">OUR ROLES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Mediation Expert
            <br />
            (Oil & Gas)
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous service"
            title="Previous service"
          >
            <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next service"
            title="Next service"
          >
            <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {visibleServices.map((service, index) => (
          <div
            key={currentSlide + index}
            className="p-10 transition-all duration-300 cursor-pointer group min-h-[400px] bg-blue-50 hover:bg-orange-500 hover:text-white relative"
          >
            {/* Decorative elements for all cards */}
            <div className="absolute top-4 right-4">
              <div className="w-6 h-6 bg-blue-900 rounded"></div>
            </div>
            <div className="absolute top-12 right-8">
              <div className="w-4 h-4 bg-blue-900 rounded"></div>
            </div>

            <div className="w-16 h-16 bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center mb-8 transition-colors duration-300">
              <div className="text-white group-hover:text-orange-500 transition-colors duration-300">
                {service.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 whitespace-pre-line text-blue-900 group-hover:text-white transition-colors duration-300">
              {service.title}
            </h3>

            <p className="mb-8 leading-relaxed text-blue-700 group-hover:text-white group-hover:opacity-90 transition-colors duration-300">
              {service.description}
            </p>

            <button className="font-semibold text-sm tracking-wide text-blue-900 group-hover:text-white hover:opacity-80 transition-opacity duration-300">
              LEARN MORE
            </button>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-12 gap-2">
        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index * 3)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              Math.floor(currentSlide / 3) === index ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
