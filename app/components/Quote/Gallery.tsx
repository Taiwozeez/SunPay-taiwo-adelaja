"use client"

import Image from "next/image"

export default function Gallery() {
  return (
    <section className="relative w-full min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/heroimg3.jpg"
        alt="Business meeting for energy mediation"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-20">
        <button
          type="button"
          aria-label="Previous image"
          className="w-12 h-12 bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-20">
        <button
          type="button"
          aria-label="Next image"
          className="w-12 h-12 bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
