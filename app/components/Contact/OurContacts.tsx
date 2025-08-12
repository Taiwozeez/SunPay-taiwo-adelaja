"use client"

import type React from "react"

import { useState } from "react"

export default function OurContacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  const MapPinIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  )

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-amber-500 opacity-30"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-blue-400 opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-2">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get In Touch With Our Mediation Experts</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Ready to resolve your energy sector disputes? Contact Corevault Energy Ltd for professional mediation and
            advisory services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information & Image */}
          <div className="space-y-8">
            {/* Company Image */}
            <div className="relative">
              <img
                src="/images/heroimg2.jpg"
                alt="Corevault Energy Ltd Office"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg"></div>
            </div>

            {/* Contact Details */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-amber-500 mt-1 flex-shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Address</p>
                    <p className="text-blue-700">Plot 12, Jumba Street, Wuse Zone 6 Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-amber-500 mt-1 flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Phone</p>
                    <p className="text-blue-700">+234 803 414 2881 • +234 818 849 5485</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-amber-500 mt-1 flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Email</p>
                    <p className="text-blue-700">Corevaultenergy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-amber-500 mt-1 flex-shrink-0">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Business Hours</p>
                    <p className="text-blue-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-blue-700">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-blue-100 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                  placeholder="Mediation inquiry, Advisory services, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-vertical"
                  placeholder="Please describe your mediation or advisory needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
