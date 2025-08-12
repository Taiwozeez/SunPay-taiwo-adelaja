export default function QuoteAbout() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[600px]">
      {/* Left Column - Dark Background */}
      <div className="bg-blue-900 text-white p-8 lg:p-16 relative h-[450px] lg:h-[500px] overflow-hidden">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold mb-6 relative pb-4">
            ABOUT
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-amber-500"></span>
          </h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            Corevault Energy Ltd successfully mediated this complex Multi-Party Energy Consortium Dispute, leveraging
            our extensive expertise in conflict resolution and stakeholder facilitation to achieve a mutually beneficial
            agreement among all parties involved.
          </p>
          <p className="text-blue-100 leading-relaxed mb-6">
            Through strategic negotiation management and trust-building initiatives, we ensured that every stakeholder&#39;s
            concerns were addressed while maintaining focus on the project&#39;s viability. From conducting comprehensive
            stakeholder assessments to implementing structured dialogue frameworks and monitoring progress, we remained
            committed to achieving optimal outcomes while preserving business relationships.
          </p>
          <p className="text-blue-100 leading-relaxed">
            The Multi-Party Energy Consortium mediation stands as a testament to our unwavering dedication to innovative
            conflict resolution and relationship preservation, setting a new standard for collaborative problem-solving
            in the energy sector.
          </p>
        </div>
        
      </div>

      {/* Right Column - White Background */}
      <div className="bg-white p-8 lg:p-16 flex-1 relative pt-24">
        <div className="max-w-2xl mx-auto lg:mx-0">
          {/* Category and Duration */}
          <div className="mb-8">
            <p className="text-blue-600 text-sm font-medium mb-1">Category</p>
            <p className="text-blue-900 text-lg font-semibold mb-4">Mediation & Advisory</p>

            <p className="text-blue-600 text-sm font-medium mb-1">Duration</p>
            <p className="text-blue-900 text-lg font-semibold">18 Months</p>
          </div>

          {/* Date Range */}
          <div className="mb-8 text-right">
            <p className="text-blue-900 text-3xl lg:text-4xl font-bold leading-tight">
              March 2022
              <br />
              September 2023
            </p>
          </div>

          {/* Key Achievements List */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
                </svg>
              </span>
              <p className="text-blue-700 leading-relaxed">
                Conducted comprehensive stakeholder assessments to identify core interests and concerns
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
                </svg>
              </span>
              <p className="text-blue-700 leading-relaxed">
                Implemented structured dialogue frameworks to facilitate productive communication between parties
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
                </svg>
              </span>
              <p className="text-blue-700 leading-relaxed">
                Deployed innovative negotiation strategies to achieve mutually beneficial agreement terms
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 10h8v2H8zm0 3h8v2H8zm0 3h5v2H8z" />
                </svg>
              </span>
              <p className="text-blue-700 leading-relaxed">
                Continuous monitoring and relationship management to ensure long-term agreement sustainability
              </p>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}
