"use client"

import type React from "react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0 lg:items-stretch overflow-hidden">
          {/* Left Side - Industrial Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] lg:col-span-2 order-1 lg:order-none">
            <img
              src="/images/FAQimg.jpg"
              alt="Industrial petroleum refinery towers with cloudy sky"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Newsletter Content */}
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:col-span-3 bg-white">
            {/* Orange decorative square */}
            <div className="absolute top-4 right-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded"></div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Heading - Updated with Corevault content */}
              <div className="-mt-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-2 sm:mb-4">
                  Ready to resolve conflicts
                  <br />
                  in your energy projects?
                </h2>
                <p className="text-blue-700 text-lg sm:text-xl">
                  Subscribe for expert mediation insights and industry updates.
                </p>
              </div>

              {/* Email Subscription Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address ..."
                  className="flex-1 px-0 py-3 border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-amber-500 bg-transparent font-medium placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 text-white px-6 py-3 rounded-md sm:rounded-l-none hover:bg-amber-600 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>

              {/* Company Logos */}
              <div className="pt-20 sm:pt-25">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center opacity-80">
                  {/* Logo 1 */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="h-8 sm:h-10 w-20 sm:w-24 text-gray-600 font-bold"
                      fill="currentColor"
                      viewBox="0 0 100 32"
                    >
                      <text x="10" y="20" fontSize="14" fontFamily="Arial" fontWeight="bold">
                        Logolpsum
                      </text>
                    </svg>
                  </div>

                  {/* Logo 2 */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="h-8 sm:h-10 w-20 sm:w-24 text-gray-600 font-bold"
                      fill="currentColor"
                      viewBox="0 0 100 32"
                    >
                      <text x="10" y="20" fontSize="14" fontFamily="Arial" fontWeight="bold">
                        Logolpsum
                      </text>
                    </svg>
                  </div>

                  {/* Logo 3 */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="h-8 sm:h-10 w-20 sm:w-24 text-gray-600 font-bold"
                      fill="currentColor"
                      viewBox="0 0 100 32"
                    >
                      <text x="10" y="20" fontSize="14" fontFamily="Arial" fontWeight="bold">
                        Logolpsum
                      </text>
                    </svg>
                  </div>

                  {/* Logo 4 */}
                  <div className="flex items-center justify-center">
                    <svg
                      className="h-8 sm:h-10 w-20 sm:w-24 text-gray-600 font-bold"
                      fill="currentColor"
                      viewBox="0 0 100 32"
                    >
                      <text x="10" y="20" fontSize="14" fontFamily="Arial" fontWeight="bold">
                        Logolpsum
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
