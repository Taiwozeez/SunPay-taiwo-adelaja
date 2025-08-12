"use client"

import { useState, useEffect } from "react"

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "Thanks to Corevault expert team, our oil energy mining operations have become more streamlined, cost-effective, and environmentally responsible.",
      name: "Rick Johnson",
      title: "CEO of Petro Nussa",
      rating: 5,
    },
    {
      quote:
        "The expertise and professionalism of the Corevault team exceeded our expectations. Their innovative solutions transformed our operations.",
      name: "Sarah Mitchell",
      title: "Operations Director at Energy Corp",
      rating: 5,
    },
    {
      quote:
        "Working with Corevault has been a game-changer for our company. Their commitment to sustainability and efficiency is unmatched.",
      name: "Michael Chen",
      title: "VP of Operations at Global Oil",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, []) // Removed nextTestimonial from dependencies

  const currentData = testimonials[currentTestimonial]

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image with Background */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] -ml-4 lg:-ml-8 xl:-ml-16">
            {/* Small white decorative square */}
            <div className="absolute -top-4 left-4 lg:left-8 xl:left-16 z-30">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border-2 border-blue-200"></div>
            </div>

            {/* Blue background moved further to the left with increased width */}
            <div className="absolute top-8 -left-16 sm:-left-20 md:-left-24 w-[calc(100%+100px)] sm:w-[550px] md:w-[650px] h-[300px] sm:h-[350px] md:h-[450px] bg-blue-900 z-20"></div>

            {/* Main Image moved down and positioned */}
            <div className="absolute top-12 left-4 sm:left-8 lg:left-16 xl:left-24 z-30 w-[calc(100%-50px)] sm:w-[500px] md:w-[580px]">
              <img
                src="/images/heroimg2.jpg"
                alt="Oil pump jack with worker in industrial setting"
                className="w-full h-[250px] sm:h-[300px] md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Navigation Arrows positioned below right edge of image - moved up */}
            <div className="absolute bottom-4 sm:bottom-8 lg:bottom-17 right-0 sm:right-[-1px] flex gap-2 z-40">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Previous testimonial"
                title="Previous testimonial"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-blue-300 rounded flex items-center justify-center hover:bg-blue-50 transition-colors"
                aria-label="Next testimonial"
                title="Next testimonial"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="flex flex-col justify-center h-auto md:h-96 space-y-4 sm:space-y-6 mt-8 sm:mt-12 lg:mt-0">
            <div>
              <p className="text-amber-500 text-xs sm:text-sm font-medium mb-1 sm:mb-2 tracking-wide">TESTIMONIAL</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                What People Say
                <br />
                About Us
              </h2>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1">
              {[...Array(currentData.rating)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-blue-700 text-base sm:text-lg leading-relaxed">
              &ldquo;{currentData.quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div>
              <p className="font-bold text-blue-900 text-base sm:text-lg">{currentData.name}</p>
              <p className="text-blue-600 text-xs sm:text-sm">{currentData.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
