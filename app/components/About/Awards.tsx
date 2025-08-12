"use client"

const AwardsAlt = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header - Updated to match image alignment */}
        <div className="flex justify-between items-start mb-12">
          <div className="text-left">
            <p className="text-blue-600 text-sm font-medium tracking-wider mb-4">AWARDS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Our Work
              <br />
              Achievements
            </h2>
          </div>

          {/* Navigation arrows - Updated to be bolder and moved down */}
          <div className="flex gap-2 mt-8">
            <button
              type="button"
              aria-label="Previous award"
              className="w-12 h-12 border-2 border-blue-200 rounded-md hover:bg-blue-50 bg-transparent flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next award"
              className="w-12 h-12 border-2 border-blue-200 rounded-md hover:bg-blue-50 bg-transparent flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Awards Cards - Updated content for mediation services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 2019 Award */}
          <div className="relative">
            <div className="bg-blue-900 hover:bg-amber-500 text-white p-8 h-64 flex flex-col justify-between rounded-lg transition-colors duration-300 cursor-pointer">
              <div className="text-sm font-medium text-blue-100 text-left">2019</div>
              <div className="text-right">
                <h3 className="text-xl font-bold leading-tight">
                  Mediation
                  <br />
                  Excellence
                  <br />
                  Award
                </h3>
              </div>
            </div>
          </div>

          {/* 2020 Award */}
          <div className="relative">
            <div className="bg-blue-900 hover:bg-amber-500 text-white p-8 h-64 flex flex-col justify-between rounded-lg transition-colors duration-300 cursor-pointer relative">
              <div className="text-sm font-medium text-blue-100 text-left">2020</div>
              <div className="text-right">
                <h3 className="text-xl font-bold leading-tight">
                  Conflict Resolution
                  <br />
                  Leadership
                  <br />
                  Award
                </h3>
              </div>
              
            </div>
          </div>

          {/* 2021 Award */}
          <div className="relative">
            <div className="bg-blue-900 hover:bg-amber-500 text-white p-8 h-64 flex flex-col justify-between rounded-lg transition-colors duration-300 cursor-pointer">
              <div className="text-sm font-medium text-blue-100 text-left">2021</div>
              <div className="text-right">
                <h3 className="text-xl font-bold leading-tight">
                  Advisory Services
                  <br />
                  Provider of
                  <br />
                  the Year Award
                </h3>
              </div>
            </div>
          </div>

          {/* 2022 Award */}
          <div className="relative">
            <div className="bg-blue-900 hover:bg-amber-500 text-white p-8 h-64 flex flex-col justify-between rounded-lg transition-colors duration-300 cursor-pointer">
              <div className="text-sm font-medium text-blue-100 text-left">2022</div>
              <div className="text-right">
                <h3 className="text-xl font-bold leading-tight">
                  Innovation in
                  <br />
                  Energy Mediation
                  <br />
                  Award
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsAlt
