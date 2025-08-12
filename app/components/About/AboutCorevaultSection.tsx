const AboutCorevaultSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-x-hidden">
      {/* Main dark background section - right aligned, reduced left width */}
      <div className="bg-blue-900 pl-8 pr-16 lg:pl-16 lg:pr-32 py-24 pb-32 ml-[300px] w-[calc(100%-300px)] relative max-sm:ml-0 max-sm:w-full max-sm:px-6 max-sm:py-16">
        {/* Transparent left cutout */}
        <div className="absolute left-[-300px] top-0 bottom-0 w-[300px] bg-transparent max-sm:hidden"></div>
        {/* Content aligned left inside reduced section */}
        <div className="max-w-2xl text-left">
          <p className="text-amber-500 text-sm font-medium tracking-wider mb-6">ABOUT</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 max-sm:text-3xl max-sm:mb-6">
            What We Do
            <br />
            Mediation Excellence
          </h2>
          <p className="text-blue-100 leading-relaxed text-base lg:text-lg max-sm:text-sm max-sm:leading-relaxed">
            We are proud to be recognized as a leading mediation expert in the oil and gas industry, committed to
            resolving conflicts and facilitating productive discussions between stakeholders. With decades of collective
            expertise in dispute resolution and a steadfast dedication to building trust, we help parties navigate
            complex energy sector challenges while fostering collaborative solutions.
          </p>
        </div>
      </div>
      {/* Timeline section */}
      <div className="bg-blue-50 -mt-16 ml-2 mr-24 lg:ml-4 lg:mr-48 px-8 lg:px-12 py-12 relative z-20 max-sm:ml-0 max-sm:mr-0 max-sm:px-6 max-sm:py-8 max-sm:-mt-8">
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-sm:gap-6">
          {/* 2005 */}
          <div className="text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-3 max-sm:text-xl max-sm:mb-2">2005</h3>
            <div>
              <h4 className="font-semibold text-blue-900 text-sm mb-1">Foundation</h4>
              <p className="text-blue-700 text-sm">& Establishment</p>
            </div>
          </div>
          {/* 2010 */}
          <div className="text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-3 max-sm:text-xl max-sm:mb-2">2010</h3>
            <div>
              <h4 className="font-semibold text-blue-900 text-sm mb-1">First Major</h4>
              <p className="text-blue-700 text-sm">Mediation Success</p>
            </div>
          </div>
          {/* 2015 */}
          <div className="text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-3 max-sm:text-xl max-sm:mb-2">2015</h3>
            <div>
              <h4 className="font-semibold text-blue-900 text-sm mb-1">Industry</h4>
              <p className="text-blue-700 text-sm">Recognition</p>
            </div>
          </div>
          {/* 2024 */}
          <div className="text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-3 max-sm:text-xl max-sm:mb-2">2024</h3>
            <div>
              <h4 className="font-semibold text-blue-900 text-sm mb-1">Continued Growth</h4>
              <p className="text-blue-700 text-sm">& Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCorevaultSection
