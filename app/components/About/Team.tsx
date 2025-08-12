"use client"

const Team = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-amber-500 text-sm font-medium tracking-wider mb-4">TEAM</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Our Experts &<br />
              Leadership Team
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous team member"
              className="w-12 h-12 border border-blue-200 rounded-md hover:bg-blue-50 bg-transparent flex items-center justify-center transition-colors text-blue-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next team member"
              className="w-12 h-12 border border-blue-200 rounded-md hover:bg-blue-50 bg-transparent flex items-center justify-center transition-colors text-blue-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Robert Smith */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-[4/5] relative">
              <img src="/images/engineer.jpg" alt="Robert Smith" className="w-full h-full object-cover grayscale" />
              {/* Social media links - vertical in one container */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    TW
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    IG
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    FB
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    IN
                  </div>
                </div>
              </div>
              {/* Orange accent square */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-amber-500"></div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-24 bg-blue-900 text-white p-6">
                <h3 className="text-xl font-semibold mb-1">Robert Smith</h3>
                <p className="text-blue-100 text-sm">CEO & Founder</p>
              </div>
            </div>
          </div>
          {/* Emily Lawson */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-[4/5] relative">
              <img src="/images/engineer.jpg" alt="Emily Lawson" className="w-full h-full object-cover" />
              {/* Social media links - vertical in one container */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    TW
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    IG
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    FB
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    IN
                  </div>
                </div>
              </div>
              {/* Orange accent square */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-amber-500"></div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-24 bg-blue-900 text-white p-6">
                <h3 className="text-xl font-semibold mb-1">Emily Lawson</h3>
                <p className="text-blue-100 text-sm">Head of Finance</p>
              </div>
            </div>
          </div>
          {/* Bob Martinez */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-[4/5] relative">
              <img src="/images/engineer.jpg" alt="Bob Martinez" className="w-full h-full object-cover grayscale" />
              {/* Social media links - vertical in one container */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-4 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col gap-3">
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    TW
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    IG
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    FB
                  </div>
                  <div className="text-blue-900 text-sm font-bold cursor-pointer hover:text-amber-500 transition-colors">
                    IN
                  </div>
                </div>
              </div>
              {/* Orange accent square */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-amber-500"></div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-24 bg-blue-900 text-white p-6">
                <h3 className="text-xl font-semibold mb-1">Bob Martinez</h3>
                <p className="text-blue-100 text-sm">Head of Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
