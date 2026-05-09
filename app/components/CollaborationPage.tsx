'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CollaborationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    type: 'school',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/collaboration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        organization: '',
        phone: '',
        type: 'school',
        message: ''
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Failed to send your request. Please try again.')
      setTimeout(() => {
        setError('')
      }, 5000)
    } finally {
      setLoading(false)
    }
  }

  const collaborationBenefits = [
    {
      title: "Premium Catering",
      description: "Hygienic, delicious, and kids-approved menus tailored to your event needs with zero compromise on quality",
      icon: "🍽️"
    },
    {
      title: "Hassle-Free Setup",
      description: "Our professional team handles complete setup, serving, and cleanup so you can focus on your event",
      icon: "✨"
    },
    {
      title: "Flexible Packages",
      description: "Customizable options for any budget and guest count. No hidden charges, no per-person minimums",
      icon: "🎯"
    },
    {
      title: "Trusted Experience",
      description: "Years of experience catering to school events and party venues across Delhi NCR",
      icon: "🏆"
    },
    {
      title: "Creative Add-ons",
      description: "Live stations, special décor, interactive food setups to make your event unforgettable",
      icon: "🎪"
    },
    {
      title: "Dedicated Support",
      description: "Personal account manager to handle all your catering needs and special requests",
      icon: "📞"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 md:gap-10 items-center bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]"
          >
            {/* Content Side */}
            <div className="order-2 md:order-1 space-y-4 md:space-y-6 text-center md:text-left">
              <span className="inline-block bg-[#F26522] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Growing Together
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#333333] leading-tight">
                Let's <span className="text-[#F26522]">Collaborate!</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-bold text-[#333333]/80 leading-relaxed">
                Partner with Little Jalebis for premium kids-centered catering that brings joy to every event.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg font-bold text-[#F26522] leading-relaxed">
                Whether you're a school planning an annual event or a party venue looking to enhance your offerings, we're here to partner with you.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                <a href="#form" className="cta-button inline-block text-center">
                  Explore Partnership
                </a>
                <a href="/menu" className="px-6 py-3 rounded-lg border-4 border-[#333333] font-bold text-[#333333] hover:bg-[#FFCB05] transition-all text-center">
                  View Menu
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 md:order-2 relative flex justify-center items-center group">
              <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-[1.5rem] md:rounded-[2rem] border-4 border-[#333333] overflow-hidden shadow-[6px_6px_0px_#F26522] md:shadow-[8px_8px_0px_#F26522] transition-transform group-hover:scale-[1.02]">
                <Image 
                  src="/images/services/Catering_Img_6_c0lus9.avif"
                  alt="School and Party Venue Collaboration with Little Jalebis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Background Decorative Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] md:w-[120%] md:h-[120%] bg-[#FFCB05] opacity-20 rounded-full blur-2xl md:blur-3xl -z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-4 leading-tight">
              Why Partner <span className="text-[#F26522]">With Us?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#333333]/70 max-w-2xl mx-auto">
              We bring more than just food. We bring expertise, reliability, and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collaborationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-4 border-[#333333] p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-[6px_6px_0px_#333333] hover:shadow-[10px_10px_0px_#333333] transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl md:text-2xl font-black text-[#333333] mb-3 text-left leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base font-bold text-[#333333]/70 text-left leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-4 leading-tight">
              Partnership <span className="text-[#FFCB05]">Opportunities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Schools */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#F26522]/10 to-[#FFF9F2] border-4 border-[#F26522] p-8 rounded-2xl md:rounded-3xl shadow-[8px_8px_0px_#F26522]"
            >
              <div className="text-5xl md:text-6xl mb-4">🏫</div>
              <h3 className="text-2xl md:text-3xl font-black text-[#333333] mb-4">
                Schools & Educational Institutions
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#F26522] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Annual day events & celebrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26522] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Sports meets & competitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26522] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">School picnics & outings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26522] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Graduation events & reunions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F26522] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Bulk catering for large groups</span>
                </li>
              </ul>
              <p className="font-bold text-[#333333]/70 text-sm">
                We specialize in kid-friendly menus that are both nutritious and exciting!
              </p>
            </motion.div>

            {/* Party Venues */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FFCB05]/10 to-[#FFF9F2] border-4 border-[#FFCB05] p-8 rounded-2xl md:rounded-3xl shadow-[8px_8px_0px_#FFCB05]"
            >
              <div className="text-5xl md:text-6xl mb-4">🎉</div>
              <h3 className="text-2xl md:text-3xl font-black text-[#333333] mb-4">
                Party Houses & Venues
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCB05] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Birthday party catering services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCB05] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Co-branded offerings & packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCB05] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Revenue sharing arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCB05] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Dedicated venue coordinators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFCB05] font-black text-lg mt-1">✓</span>
                  <span className="font-bold text-[#333333]/80">Premium add-on packages</span>
                </li>
              </ul>
              <p className="font-bold text-[#333333]/70 text-sm">
                Enhance your venue value and delight your customers with our premium catering!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }} id="form">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-4 leading-tight">
              Get In <span className="text-[#F26522]">Touch</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#333333]/70">
              Share your collaboration idea with us. We'll get back to you within 24 hours!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border-4 border-[#333333] p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-[8px_8px_0px_#333333]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm md:text-base font-black text-[#333333] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/50 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm md:text-base font-black text-[#333333] mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/50 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all"
                  placeholder="School or Venue name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm md:text-base font-black text-[#333333] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/50 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Type Selection */}
              <div>
                <label className="block text-sm md:text-base font-black text-[#333333] mb-2">
                  I'm a:
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white cursor-pointer"
                >
                  <option value="school">School or Educational Institution</option>
                  <option value="venue">Party House or Venue</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm md:text-base font-black text-[#333333] mb-2">
                Tell us about your collaboration idea
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/50 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all resize-none"
                placeholder="Share your event type, expected guest count, and any special requirements..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!loading ? { scale: 1.02, rotate: -2 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading}
              className="w-full bg-[#F26522] text-white px-6 py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all border-4 border-[#F26522] shadow-[6px_6px_0px_#FFCB05] hover:shadow-[8px_8px_0px_#FFCB05] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Collaboration Request'}
            </motion.button>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 border-3 border-red-500 rounded-xl text-red-700 font-bold text-center"
              >
                ✗ {error}
              </motion.div>
            )}

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 border-3 border-green-500 rounded-xl text-green-700 font-bold text-center"
              >
                ✓ Your request has been sent! We'll contact you soon.
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-4 leading-tight">
              Our <span className="text-[#FFCB05]">Track Record</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '500+', label: 'Happy Events' },
              { number: '10K+', label: 'Smiling Kids' },
              { number: '50+', label: 'Venues Partnered' },
              { number: '5★', label: 'Avg Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFF9F2] border-3 border-[#333333] p-4 md:p-6 rounded-xl md:rounded-2xl text-center shadow-[4px_4px_0px_#333333]"
              >
                <div className="text-3xl md:text-4xl font-black text-[#F26522] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-bold text-[#333333]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CollaborationPage
