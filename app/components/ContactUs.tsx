'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDateTime: '',
    serviceType: 'Catering',
    ageRange: '',
    foodPreference: 'Veg Only',
    theme: '',
    location: '',
    pax: '', // Added Pax field
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://n8n.vyaapaarniti.com/webhook-test/d174def4-e789-458b-a782-35480edb7f9e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        // Reset form including pax
        setFormData({ 
            name: '', 
            phone: '', 
            eventDateTime: '', 
            serviceType: 'Catering',
            ageRange: '', 
            foodPreference: 'Veg Only', 
            theme: '', 
            location: '', 
            pax: '',
            message: ''
        })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error sending inquiry:", error)
      alert("Failed to connect to the server.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="pt-24 pb-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        <header className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#333333] mb-3 md:mb-4 leading-tight">
            Plan Your <span className="text-[#F26522]">Party</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl font-bold opacity-70">Tell us about your dream celebration and we'll handle the magic.</p>
        </header>

        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-2 md:gap-12 lg:gap-16 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05] relative overflow-hidden">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div className="w-full lg:w-1/3 space-y-5 md:space-y-8">
            <motion.div 
              animate={{ rotate: submitted ? [0, -10, 10, 0] : 0 }}
              className="aspect-square bg-[#FFF9F2] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-[4.5rem] sm:text-[6rem] md:text-[8rem] border-2 border-dashed border-[#F26522]/30"
            >
              {submitted ? '🎉' : '💌'}
            </motion.div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#333333] leading-tight">
                {submitted ? "Yay! You're In!" : "Get in Touch"}
              </h2>
              <p className="font-bold text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                {submitted 
                  ? "Your inquiry has been sent successfully. We'll get back to you within 24 hours to plan your magic!" 
                  : "Our team will respond to your inquiries within 24 hours."}
              </p>
            </div>

            <div className="hidden lg:block pt-6 border-t-2 border-dashed border-[#333333]/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFCB05] flex items-center justify-center font-black">📞</div>
                <span className="font-black text-[#333333]">+91 81309 64374</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F26522] flex items-center justify-center font-black text-white">📍</div>
                <span className="font-black text-[#333333]">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM OR SUCCESS MESSAGE --- */}
          <div className="w-full lg:w-2/3 relative min-h-[320px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: Rahul Sharma" className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Ex: +91 99999 88888" className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Event Date & Time</label>
                    <input type="datetime-local" name="eventDateTime" value={formData.eventDateTime} onChange={handleChange} className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Service Required</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all cursor-pointer">
                      <option value="Catering">Catering</option>
                      <option value="Party House">Party House</option>
                      <option value="Catering + Party House">Catering + Party House</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Food Preference</label>
                    <select name="foodPreference" value={formData.foodPreference} onChange={handleChange} className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all cursor-pointer">
                      <option value="Veg Only">Veg Only</option>
                      <option value="Both (Veg & Non Veg)">Both (Veg & Non Veg)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Age Range of Kids</label>
                    <input type="text" name="ageRange" value={formData.ageRange} onChange={handleChange} placeholder="Ex: 4-8 years" className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>


                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Pax (Total Guests)</label>
                    <input type="text" name="pax" value={formData.pax} onChange={handleChange} placeholder="20 Kids 5 Adults" className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Party Theme</label>
                    <input type="text" name="theme" value={formData.theme} onChange={handleChange} placeholder="Ex: Space, Jungle, Mermaid" className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-1"> {/* Keeping location half-width to fit alongside Pax if needed, or change to col-span-2 */}
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Location / Venue Name</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Ex: South Delhi Residence" className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="font-black text-[#F26522] uppercase text-[10px] sm:text-xs tracking-[0.08em] sm:tracking-widest">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us your event..."
                      rows={4}
                      className="w-full p-3 md:p-4 text-sm md:text-base bg-[#FFF9F2] border-2 border-[#333333] rounded-xl md:rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all resize-none"
                    />
                  </div>

                  <div className="md:col-span-2 pt-2 md:pt-4">
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-[#F26522] text-white py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-xl hover:bg-[#F26522] transition-all shadow-[4px_4px_0px_#FFCB05] md:shadow-[6px_6px_0px_#FFCB05] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send My Party Inquiry! →"}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full w-full flex flex-col items-center justify-center text-center space-y-4 md:space-y-6"
                >
                  <div className="bg-[#FFF9F2] p-5 sm:p-6 md:p-10 rounded-[1.75rem] md:rounded-[3rem] border-4 border-[#FFCB05] shadow-[6px_6px_0px_#F26522] md:shadow-[8px_8px_0px_#F26522]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#333333] mb-3 md:mb-4">Message Received!</h3>
                    <p className="text-sm sm:text-base md:text-xl font-bold opacity-70 mb-6 md:mb-8">
                      Check your phone! We'll reach out on WhatsApp or Call shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-[#F26522] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-black hover:bg-[#d6561d] transition-colors shadow-[3px_3px_0px_#333333] md:shadow-[4px_4px_0px_#333333]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-[#333333]/50 font-black italic text-xs sm:text-sm">
            Prefer instant chat? <span className="text-[#25D366] underline cursor-pointer hover:text-[#F26522]">WhatsApp us directly</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs