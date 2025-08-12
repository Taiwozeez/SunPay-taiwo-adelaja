"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    clientSatisfaction: 0,
    projectFinalization: 0,
    carbonEmission: 0,
  })

  const sectionRef = useRef<HTMLDivElement>(null)

  const targetValues = {
    clientSatisfaction: 90,
    projectFinalization: 65,
    carbonEmission: 25,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        clientSatisfaction: Math.floor(targetValues.clientSatisfaction * progress),
        projectFinalization: Math.floor(targetValues.projectFinalization * progress),
        carbonEmission: Math.floor(targetValues.carbonEmission * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts(targetValues) // Ensure exact final values
      }
    }, stepDuration)
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    console.log("Playing company video...")
  }

  return (
    <section className=" py-16" ref={sectionRef}>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {" "}
          {/* Changed items-center to items-stretch */}
          {/* Left Side - Image with Video Play Button */}
          <div className="relative h-full">
            {" "}
            {/* Added h-full */}
            <div className="relative overflow-hidden h-full">
              {" "}
              {/* Added h-full */}
              <Image
                src="/images/heroimg.jpg"
                alt="Oil refinery industrial plant"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Video Play Button */}
              <button
                onClick={handlePlayVideo}
                className="absolute bottom-6 left-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 flex items-center space-x-3 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Play</div>
                  <div className="font-medium">Company Video</div>
                </div>
              </button>
            </div>
            {/* Orange accent square */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500"></div>
          </div>
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                {" "}
                {/* Added responsive text sizing */}A Glimpse Closer to COREVAULT Energy Ltd.
              </h2>
              <p className="text-blue-700 text-lg leading-relaxed">
                COREVAULT Energy Ltd was incorporated on the 15th April, 2005, as a trusted consulting, advisory, and
                facilitation services firm specializing in empowering clients to navigate complex energy landscapes,
                optimize oil and gas supply chains, and offer sustainable growth through innovative solutions and
                collaborative partnerships.
              </p>
            </div>

            {/* Statistics with Animated Counters */}
            <div className="space-y-6">
              {/* Client Satisfaction */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-900 font-medium">Client Satisfaction</span>
                  <span className="text-blue-900 font-bold">{counts.clientSatisfaction}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className="bg-blue-600 h-2 transition-all duration-2000 ease-out"
                    style={{ width: `${counts.clientSatisfaction}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Finalization */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-900 font-medium">Project Finalization</span>
                  <span className="text-blue-900 font-bold">{counts.projectFinalization}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className="bg-blue-600 h-2 transition-all duration-2000 ease-out"
                    style={{ width: `${counts.projectFinalization}%` }}
                  ></div>
                </div>
              </div>

              {/* Industry Carbon Emission */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-900 font-medium">Industry Carbon Emission</span>
                  <span className="text-blue-900 font-bold">{counts.carbonEmission}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className="bg-orange-500 h-2 transition-all duration-2000 ease-out"
                    style={{ width: `${counts.carbonEmission}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* More About Us Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="text-blue-900 font-medium hover:text-orange-500 transition-colors inline-block border-b-2 border-gray-300 pb-1"
              >
                MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
