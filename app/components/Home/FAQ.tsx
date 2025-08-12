"use client"

import { useState } from "react"

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1) // Second FAQ is open by default

  const faqs = [
    {
      question: "What does Corevault specialize in?",
      answer:
        "Corevault Energy Ltd specializes in mediation and advisory services for the oil and gas industry, facilitating discussions between parties, resolving conflicts, and providing expert guidance on complex energy sector disputes and negotiations.",
    },
    {
      question: "How can Corevault assist with oil and gas disputes?",
      answer:
        "Corevault offers expertise in conflict resolution, dispute mediation, and negotiation management, enabling parties to reach mutually beneficial agreements while maintaining professional relationships in the energy sector.",
    },
    {
      question: "Does Corevault support energy transition projects?",
      answer:
        "Yes, Corevault provides mediation and advisory services for energy transition projects, helping stakeholders navigate complex negotiations around renewable energy initiatives and sustainable practice implementations.",
    },
    {
      question: "How can Corevault help with regulatory compliance issues?",
      answer:
        "Corevault assists in mediating regulatory compliance disputes, facilitating discussions between companies and regulatory bodies, and providing advisory services to ensure smooth resolution of compliance-related conflicts.",
    },
    {
      question: "What approach does Corevault take to conflict resolution?",
      answer:
        "Corevault employs a trust-building approach, focusing on creating rapport between parties, identifying creative solutions, and managing negotiations to achieve sustainable resolutions that benefit all stakeholders involved.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - FAQ Header with blue background */}
          <div className="lg:col-span-2 p-8 rounded-lg mt-8">
            <div className="space-y-6">
              <div>
                <p className="text-orange-500 text-sm font-medium mb-2 tracking-wide -mt-2">FAQ</p>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                  Questions
                  <br />
                  From People
                </h2>
              </div>

              <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors font-medium mt-8">
                Ask A Question
              </button>
            </div>
          </div>

          {/* Right Side - FAQ Accordion with white background */}
          <div className="lg:col-span-3 relative bg-gray-100 px-8 py-12 rounded-lg -mr-4 lg:-mr-8 xl:-mr-16 -mt-4">
            {/* Decorative elements in top-right */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="w-8 h-8 bg-blue-900 rounded"></div>
            </div>
            <div className="absolute -top-8 -right-8 z-10">
              <div className="w-6 h-6 bg-blue-900 rounded"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-blue-900 text-lg">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-blue-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
