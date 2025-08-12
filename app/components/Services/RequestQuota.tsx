"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function RequestQuota() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
  }

  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      {/* Background image with opacity overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroimg.jpg"
          alt="Energy operations background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-md">
          Ready to transform your
          <br />
          energy operations?
        </h2>

        <p className="text-white text-lg mb-8 max-w-2xl mx-auto drop-shadow-md">
          PetroLink is ready to help your company needs in energy optimization.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address ..."
              className="w-full px-0 py-3 text-white bg-transparent border-0 border-b border-white focus:outline-none focus:ring-0 focus:border-orange-500 placeholder:text-white/70"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 drop-shadow-md"
          >
            Request A Quote
          </button>
        </form>
      </div>
    </section>
  )
}