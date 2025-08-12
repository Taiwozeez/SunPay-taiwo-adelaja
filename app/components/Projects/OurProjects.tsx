"use client"

import Image from "next/image"

export default function OurProjectsAlt2() {
  const projects = [
    {
      title: "Multi-Party Dispute Resolution",
      location: "Alberta, Canada",
      image: "/images/heroimg.jpg",
      featured: false,
    },
    {
      title: "Contract Negotiation Facilitation",
      location: "Louisiana, USA",
      image: "/images/heroimg.jpg",
      featured: false,
    },
    {
      title: "Stakeholder Alignment Project",
      location: "California, USA",
      image: "/images/heroimg.jpg",
      featured: false,
    },
    {
      title: "Joint Venture Mediation",
      location: "Gulf of Mexico, USA",
      image: "/images/heroimg.jpg",
      featured: true,
    },
    {
      title: "Regulatory Compliance Advisory",
      location: "Wyoming, USA",
      image: "/images/heroimg.jpg",
      featured: false,
    },
    {
      title: "Cross-Border Energy Mediation",
      location: "Singapore",
      image: "/images/heroimg.jpg",
      featured: true,
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group overflow-visible rounded-lg cursor-pointer ${index >= 2 ? "mt-8" : ""}`}
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

              {/* Decorative squares */}
              <div className="absolute top-4 right-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-blue-200"></div>
                  <div className="w-3 h-3 bg-blue-200"></div>
                </div>
              </div>
            </div>

            {/* Project info overlay - positioned to overlap down more */}
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
                  className={`w-4 h-4 ${project.featured ? "bg-amber-500" : "bg-amber-500"} group-hover:bg-white transition-colors duration-300`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
