'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CollaborationPage = () => {
  const [formData, setFormData] = useState({
    collabType: 'Venue / Pre-school Tie-Up',
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    location: '',
    aboutSpace: '',
    lookingFor: '',
    spaceType: 'Indoor',
    capacity: '',
    availability: '',
    socialLink: '',
    additionalInfo: ''
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
        collabType: 'Venue / Pre-school Tie-Up',
        businessName: '',
        contactPerson: '',
        phone: '',
        email: '',
        location: '',
        aboutSpace: '',
        lookingFor: '',
        spaceType: 'Indoor',
        capacity: '',
        availability: '',
        socialLink: '',
        additionalInfo: ''
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Failed to send your request. Please try again.')
      setTimeout(() => {
        setError('')
      }, 6000)
    } finally {
      setLoading(false)
    }
  }

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
                Community & Partnerships
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#333333] leading-tight">
                Collaborate with <span className="text-[#F26522]">Little Jalebis</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-bold text-[#333333]/80 leading-relaxed">
                At Little Jalebis, we’re building a community around thoughtfully curated kids’ experiences — from birthday celebrations to meaningful gatherings for parents and children.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg font-bold text-[#F26522] leading-relaxed">
                We are currently open to two exciting types of collaborations: Venue & Pre-School Tie-Ups, and curated events at our Gurgaon Kids Party House.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 justify-center md:justify-start">
                <a href="#form-section" className="cta-button inline-block text-center bg-[#F26522] text-white px-6 py-3 rounded-xl border-4 border-[#333333] font-bold shadow-[4px_4px_0px_#333333] hover:shadow-[6px_6px_0px_#333333] hover:bg-[#ff7a3a] transition-all">
                  Let’s Work Together
                </a>
                <a href="#collab-types" className="px-6 py-3 rounded-xl border-4 border-[#333333] font-bold text-[#333333] hover:bg-[#FFCB05] transition-all text-center">
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 md:order-2 relative flex justify-center items-center group">
              <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-[1.5rem] md:rounded-[2rem] border-4 border-[#333333] overflow-hidden shadow-[6px_6px_0px_#F26522] md:shadow-[8px_8px_0px_#F26522] transition-transform group-hover:scale-[1.02]">
                <Image 
                  src="/images/services/Catering_Img_6_c0lus9.avif"
                  alt="Collaborations with Little Jalebis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] md:w-[120%] md:h-[120%] bg-[#FFCB05] opacity-20 rounded-full blur-2xl md:blur-3xl -z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Types Section */}
      <section id="collab-types" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-4 leading-tight">
              Our Collaboration <span className="text-[#FFCB05]">Opportunities</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#333333]/70 max-w-3xl mx-auto">
              We look forward to partnering with individuals, pre-schools, activity centres, and brands to design wonderful, curated experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Type 1 Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFF9F2] border-4 border-[#333333] p-6 md:p-10 rounded-3xl shadow-[8px_8px_0px_#F26522] flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl md:text-5xl mb-4">🏫</div>
                <span className="inline-block bg-[#FFCB05] border-3 border-[#333333] text-[#333333] px-3 py-1 rounded-full font-black text-xs uppercase tracking-wide mb-3 shadow-[2px_2px_0px_#333333]">
                  Option 1
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#333333] mb-2 leading-tight">
                  Venue & Pre-School Tie-Ups
                </h3>
                <h4 className="text-base md:text-lg font-bold text-[#F26522] mb-4">
                  Host beautifully managed kids’ parties at your space
                </h4>
                <p className="font-bold text-[#333333]/80 mb-6 leading-relaxed">
                  Whether you run a pre-school, activity centre, or a venue suitable for small gatherings, we partner with you to bring professionally managed kids’ birthday parties and catering experiences to your location.
                </p>

                {/* What we bring */}
                <div className="mb-6">
                  <h5 className="font-black text-[#333333] text-lg mb-3 flex items-center gap-2">
                    <span className="text-[#F26522]">✨</span> What we bring:
                  </h5>
                  <ul className="space-y-2 pl-2">
                    {[
                      "End-to-end catering designed specifically for kids",
                      "Setup support (tables, service staff, basic presentation)",
                      "Experience of hosting multiple kids’ events across NCR",
                      "Trusted by parents for hassle-free celebrations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-bold text-[#333333]/70">
                        <span className="text-[#F26522] mt-1">🧡</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What this means for you */}
                <div className="mb-6">
                  <h5 className="font-black text-[#333333] text-lg mb-3 flex items-center gap-2">
                    <span className="text-[#FFCB05]">💰</span> What this means for you:
                  </h5>
                  <ul className="space-y-2 pl-2">
                    {[
                      "Additional revenue stream",
                      "Increased footfall and visibility",
                      "Value-added offering for your existing parents & community"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-bold text-[#333333]/70">
                        <span className="text-[#FFCB05] mt-1">💛</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Type 2 Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FFF9F2] border-4 border-[#333333] p-6 md:p-10 rounded-3xl shadow-[8px_8px_0px_#FFCB05] flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl md:text-5xl mb-4">🏠</div>
                <span className="inline-block bg-[#F26522] border-3 border-[#333333] text-white px-3 py-1 rounded-full font-black text-xs uppercase tracking-wide mb-3 shadow-[2px_2px_0px_#333333]">
                  Option 2
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#333333] mb-2 leading-tight">
                  Kids Party House Collaborations (Gurgaon)
                </h3>
                <h4 className="text-base md:text-lg font-bold text-[#F26522] mb-4">
                  Use our space to host engaging, meaningful events
                </h4>
                <p className="font-bold text-[#333333]/80 mb-6 leading-relaxed">
                  Our Kids Party House in Gurgaon is designed for curated experiences beyond birthdays. We collaborate with individuals and brands who want to host memorable community events.
                </p>

                {/* We collaborate with... */}
                <div className="mb-6">
                  <h5 className="font-black text-[#333333] text-lg mb-3 flex items-center gap-2">
                    <span className="text-[#F26522]">🎨</span> Perfect space for hosting:
                  </h5>
                  <ul className="space-y-3 pl-2">
                    {[
                      "Kids workshops (art, craft, storytelling, etc.)",
                      "Mom community meet-ups",
                      "Brand pop-ups (kids/moms focused brands)",
                      "Influencer-led events",
                      "Small curated gatherings"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm md:text-base font-bold text-[#333333]/70">
                        <span className="text-[#F26522] mt-1">🎈</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Collaborate Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-10 leading-tight">
            Why Collaborate <span className="text-[#F26522]">With Us?</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Ready-to-Use Space", desc: "A thoughtfully designed, highly child-friendly environment", icon: "🧸" },
              { title: "Built-in Audience", desc: "An engaged, local community of parents and families", icon: "👨‍👩‍👧‍👦" },
              { title: "Tailored Catering", desc: "Catering support strictly personalized for kids & families", icon: "🍕" },
              { title: "Safe & Managed", desc: "Clean, safe, and professionally managed space & event execution", icon: "🛡️" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-4 border-[#333333] p-6 rounded-2xl shadow-[5px_5px_0px_#333333]"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="font-black text-[#333333] text-xl mb-2">{item.title}</h4>
                <p className="font-bold text-[#333333]/70 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form-section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mb-4 leading-tight">
              Let’s <span className="text-[#F26522]">Work Together</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#333333]/70 max-w-2xl mx-auto">
              If you’d like to explore a collaboration, please fill in the details below and our team will get in touch.
            </p>
            <p className="mt-3 text-xs md:text-sm font-black text-[#F26522] uppercase tracking-wider">
              ✨ All fields are optional — feel free to fill in whatever details are relevant!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#FFF9F2] border-4 border-[#333333] p-6 md:p-10 rounded-3xl shadow-[8px_8px_0px_#333333] space-y-6">
            
            {/* Section 1: Collab Type */}
            <div className="p-4 bg-white border-3 border-[#333333] rounded-2xl">
              <label className="block text-base font-black text-[#333333] mb-3">
                1. Type of Collaboration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Venue / Pre-school Tie-Up',
                  'Kids Party House Collaboration'
                ].map((typeOption) => (
                  <label
                    key={typeOption}
                    className={`flex items-center gap-3 p-3 rounded-xl border-3 cursor-pointer transition-all ${
                      formData.collabType === typeOption
                        ? 'border-[#F26522] bg-[#F26522]/10 text-[#333333]'
                        : 'border-[#333333] hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="collabType"
                      value={typeOption}
                      checked={formData.collabType === typeOption}
                      onChange={handleChange}
                      className="accent-[#F26522] h-5 w-5"
                    />
                    <span className="font-bold text-sm md:text-base">{typeOption}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2: Personal / Business details */}
            <div className="space-y-4">
              <h3 className="font-black text-lg md:text-xl text-[#333333] border-b-3 border-[#333333]/20 pb-1">
                Contact & Business Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 2. Business Name */}
                <div>
                  <label className="block text-sm font-black text-[#333333] mb-2">
                    2. Name of Individual / Business
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                    placeholder="Business or Individual name"
                  />
                </div>

                {/* 3. Contact Person */}
                <div>
                  <label className="block text-sm font-black text-[#333333] mb-2">
                    3. Contact Person Name
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                    placeholder="Your name"
                  />
                </div>

                {/* 4. Phone Number */}
                <div>
                  <label className="block text-sm font-black text-[#333333] mb-2">
                    4. Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* 5. Email Address */}
                <div>
                  <label className="block text-sm font-black text-[#333333] mb-2">
                    5. Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* 6. Location */}
              <div>
                <label className="block text-sm font-black text-[#333333] mb-2">
                  6. Location (City / Area)
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                  placeholder="e.g. Gurgaon Sector 54, South Delhi"
                />
              </div>
            </div>

            {/* Section 3: Space / Concept Details */}
            <div className="space-y-4 pt-2">
              <h3 className="font-black text-lg md:text-xl text-[#333333] border-b-3 border-[#333333]/20 pb-1">
                Collaboration & Space Details
              </h3>

              {/* 7. About Space / Brand */}
              <div>
                <label className="block text-sm font-black text-[#333333] mb-2">
                  7. About Your Space / Brand
                </label>
                <textarea
                  name="aboutSpace"
                  value={formData.aboutSpace}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all resize-none bg-white"
                  placeholder="Brief description of your venue, business, or concept..."
                />
              </div>

              {/* 8. Looking For */}
              <div>
                <label className="block text-sm font-black text-[#333333] mb-2">
                  8. Type of Collaboration You’re Looking For
                </label>
                <input
                  type="text"
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                  placeholder="e.g. Birthday parties / workshops / pop-ups / regular events..."
                />
              </div>

              {/* 9. Space Details Sub-grid */}
              <div className="p-4 bg-white border-3 border-[#333333] rounded-2xl space-y-4">
                <span className="block font-black text-[#333333] text-sm md:text-base mb-1">
                  9. Space Details (if applicable)
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Space Type: Indoor / Outdoor */}
                  <div>
                    <label className="block text-xs font-black text-[#333333] mb-2">
                      Indoor / Outdoor
                    </label>
                    <select
                      name="spaceType"
                      value={formData.spaceType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-3 border-[#333333] rounded-lg font-bold text-[#333333] focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white cursor-pointer text-sm"
                    >
                      <option value="Indoor">Indoor</option>
                      <option value="Outdoor">Outdoor</option>
                      <option value="Both">Both</option>
                      <option value="Not Applicable">Not Applicable</option>
                    </select>
                  </div>

                  {/* Approx Capacity */}
                  <div>
                    <label className="block text-xs font-black text-[#333333] mb-2">
                      Approx Capacity
                    </label>
                    <input
                      type="text"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-3 border-[#333333] rounded-lg font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white text-sm"
                      placeholder="e.g. 30-50 kids"
                    />
                  </div>

                  {/* Timings */}
                  <div>
                    <label className="block text-xs font-black text-[#333333] mb-2">
                      Available Days/Timings
                    </label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-3 border-[#333333] rounded-lg font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white text-sm"
                      placeholder="e.g. Weekends only, 10am-6pm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Socials & Extra */}
            <div className="space-y-4 pt-2">
              <h3 className="font-black text-lg md:text-xl text-[#333333] border-b-3 border-[#333333]/20 pb-1">
                Socials & Additional Info
              </h3>

              {/* 10. Social Handle */}
              <div>
                <label className="block text-sm font-black text-[#333333] mb-2">
                  10. Insta Handle / Website Link (if any)
                  <span className="text-[#F26522] font-black text-xs ml-1">📱</span>
                </label>
                <input
                  type="text"
                  name="socialLink"
                  value={formData.socialLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all bg-white"
                  placeholder="e.g. @littlejalebis / www.littlejalebis.com"
                />
              </div>

              {/* 11. Additional Information */}
              <div>
                <label className="block text-sm font-black text-[#333333] mb-2">
                  11. Any Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-3 border-[#333333] rounded-xl font-bold text-[#333333] placeholder-[#333333]/30 focus:outline-none focus:shadow-[0_0_0_3px_#F26522] transition-all resize-none bg-white"
                  placeholder="Any other details, specific questions, or unique requests..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!loading ? { scale: 1.02, rotate: -1 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading}
              className="w-full bg-[#F26522] text-white px-6 py-4 rounded-2xl font-black text-base md:text-lg transition-all border-4 border-[#333333] shadow-[6px_6px_0px_#FFCB05] hover:shadow-[8px_8px_0px_#FFCB05] hover:bg-[#ff7a3a] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-center"
            >
              {loading ? 'Sending Request...' : 'Send Collaboration Details'}
            </motion.button>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 border-3 border-red-500 rounded-xl text-red-700 font-bold text-center"
              >
                ✗ {error}
              </motion.div>
            )}

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 border-3 border-green-500 rounded-xl text-green-700 font-bold text-center"
              >
                ✓ Success! Your collaboration details have been submitted. Our team will review them and reach out!
              </motion.div>
            )}
          </form>

          {/* Important Tone Closing Line */}
          <div className="mt-12 text-center p-6 border-4 border-dashed border-[#F26522] rounded-3xl bg-[#FFF9F2]">
            <p className="text-base sm:text-lg font-black text-[#333333] italic leading-relaxed">
              "We believe in creating simple, well-executed experiences for children and families. If your space or idea aligns with this philosophy, we’d love to connect."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CollaborationPage
