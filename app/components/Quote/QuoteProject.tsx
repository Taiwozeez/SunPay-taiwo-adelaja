"use client"
import { useState } from "react"
import Image from "next/image"

export default function QuoteProject() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Multi-Party Contract Dispute Resolution",
      location: "Alberta, Canada",
      image: "/images/heroimg2.jpg",
      featured: false,
    },
    {
      id: 2,
      title: "Joint Venture Negotiation Facilitation",
      location: "London, UK",
      image: "/images/heroimg2.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Regulatory Compliance Mediation",
      location: "Houston, USA",
      image: "/images/heroimg2.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Cross-Border Energy Agreement",
      location: "Dubai, UAE",
      image: "/images/heroimg2.jpg",
      featured: true,
    },
  ]

  const nextProject = () => {
    const increment = window.innerWidth < 768 ? 1 : 2
    const maxIndex = window.innerWidth < 768 ? projects.length : projects.length - 1
    setCurrentIndex((prev) => (prev + 1) % maxIndex)
  }

  const prevProject = () => {
    const increment = window.innerWidth < 768 ? 1 : 2
    const maxIndex = window.innerWidth < 768 ? projects.length : projects.length - 1
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex)
  }

  const visibleProjects =
    typeof window !== "undefined" && window.innerWidth < 768
      ? [projects[currentIndex]]
      : projects.slice(currentIndex, currentIndex + 2)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-amber-500 text-sm font-medium mb-2 tracking-wide uppercase">CASE STUDIES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Related Mediation Cases</h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevProject}
              className="w-12 h-12 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 flex items-center justify-center transition-colors"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 flex items-center justify-center transition-colors"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div key={project.id} className="relative group overflow-visible cursor-pointer">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />

                <div className="absolute top-4 right-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-blue-200"></div>
                    <div className="w-3 h-3 bg-blue-200"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-0 right-24 bg-blue-900 group-hover:bg-amber-500 text-white p-6 rounded-b-lg transition-colors duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-100 group-hover:text-white text-sm flex items-center transition-colors duration-300">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {project.location}
                    </p>
                  </div>

                  <div
                    className={`w-4 h-4 ${project.featured ? "bg-amber-500" : "bg-amber-400"} group-hover:bg-white transition-colors duration-300`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
