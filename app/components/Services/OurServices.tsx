"use client"

import { useState } from "react"

export default function OurServices() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "Conflict\nResolution",
      description: "We specialize in resolving complex disputes between stakeholders in energy sector projects.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Dispute\nMediation",
      description:
        "We provide expert mediation services for safe and efficient resolution of energy industry disputes.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Stakeholder\nFacilitation",
      description: "We offer expertise in facilitating discussions between multiple parties to achieve consensus.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 2C13.3 2 14 2.7 14 3.5C14 4.3 13.3 5 12.5 5S11 4.3 11 3.5C11 2.7 11.7 2 12.5 2M21 9V7H15L13.5 7.5C13.1 7.7 12.6 7.6 12.3 7.3L10.5 5.5C10.1 5.1 9.6 4.9 9 4.9S7.9 5.1 7.5 5.5L6 7H3V9H6.2L7.7 7.5C7.9 7.3 8.1 7.3 8.3 7.5L10.1 9.3C10.5 9.7 11 9.9 11.6 9.9C12.2 9.9 12.7 9.7 13.1 9.3L14.5 7.9H21M7 12V22H9V12H7M12 12V22H14V12H12M17 12V22H19V12H17Z" />
        </svg>
      ),
      featured: false,
    },
    {
      title: "Negotiation\nManagement",
      description: "We conduct thorough assessments to identify optimal negotiation strategies and outcomes.",
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
      title: "Advisory\nServices",
      description: "We support organizations with strategic advice to meet the growing demand for energy solutions.",
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
      title: "Trust\nBuilding",
      description: "We help energy sector stakeholders build trust, improve relationships, and enhance collaboration.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M12 6l1.5 3L17 9.5l-2.5 2.5L15 16l-3-1.5L9 16l.5-4L7 9.5l3.5-.5L12 6z" />
        </svg>
      ),
      featured: false,
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Service Cards - Static Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 transition-all duration-300 cursor-pointer group min-h-[450px] relative bg-gray-50 hover:bg-amber-500 hover:text-white`}
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 bg-amber-500 text-white group-hover:bg-white group-hover:text-amber-500`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className={`text-2xl font-bold mb-4 whitespace-pre-line transition-colors duration-300 text-blue-900 group-hover:text-white`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`mb-8 leading-relaxed transition-colors duration-300 text-blue-600 group-hover:text-white group-hover:opacity-90`}
            >
              {service.description}
            </p>

            {/* Learn More Button */}
            <button
              className={`font-semibold text-sm tracking-wide transition-opacity duration-300 hover:opacity-80 text-blue-900 group-hover:text-white`}
            >
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
