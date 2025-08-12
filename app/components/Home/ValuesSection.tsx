"use client"

import Image from "next/image"

export default function ValuesSection() {
  return (
    <section className="py-16">
      <div className="relative w-full">
        {/* Main dark section extending to right edge */}
        <div className="ml-0 lg:ml-80">
          <div className="bg-blue-900 text-white p-8 lg:p-12 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">
              {/* Values Content - Left side of dark section */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="text-sm font-medium text-blue-300 mb-4 tracking-wider">VALUES</div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    We Believe in
                    <br />
                    This Quality
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Expertise */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 transform rotate-45"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                      <p className="text-blue-300 leading-relaxed">
                        Providing trusted guidance and insights in oil and gas supply consulting, advisory, and
                        facilitation services through our seasoned professionals.
                      </p>
                    </div>
                  </div>

                  {/* Reliability */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 transform rotate-45"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                      <p className="text-blue-300 leading-relaxed">
                        Delivering high-quality services and support to clients, ensuring reliable oil and gas supply
                        through effective partnerships that navigate complexity and mitigate risk.
                      </p>
                    </div>
                  </div>

                  {/* Collaboration */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 transform rotate-45"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                      <p className="text-blue-300 leading-relaxed">
                        Fostering strong partnerships and stakeholder relationships, building trust and rapport while
                        facilitating discussions to reach mutually beneficial agreements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industrial Plant Image - Right side of dark section */}
              <div className="lg:col-span-1 relative">
                <div className="h-full min-h-[300px] lg:min-h-[600px] relative -mt-25">
                  {" "}
                  {/* Changed height and added negative margin */}
                  <Image src="/images/aboutimg.jpg" alt="Industrial oil refinery plant" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orange Experience Counter - Extended to left edge */}
        <div className="absolute bottom-0 left-0 z-10 w-80">
          <div className="relative h-full bg-orange-500 text-white p-8 lg:p-12">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold mb-4">19</div>
              <div className="text-lg font-medium leading-tight">
                Years of Energy
                <br />
                Industry Experience
              </div>
            </div>

            {/* Decorative squares */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <div className="w-4 h-4 bg-white"></div>
              <div className="w-4 h-4 bg-white"></div>
            </div>
            <div className="absolute bottom-4 right-8 flex space-x-2">
              <div className="w-4 h-4 bg-white"></div>
              <div className="w-4 h-4 bg-white"></div>
            </div>
          </div>
        </div>

        {/* Dark Section Extended to right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-full bg-blue-900 -z-10"></div>
      </div>
    </section>
  )
}
