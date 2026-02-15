'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDateTime: '',
    ageRange: '',
    foodPreference: 'Both (Veg & Non Veg)',
    theme: '',
    location: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-24 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#333333] mb-4">
            Plan Your <span className="text-[#F26522]">Party</span>
          </h1>
          <p className="text-xl font-bold opacity-70">Tell us about your dream celebration and we'll handle the magic.</p>
        </header>

        {/* --- Form Container --- */}
        <div className="bg-white border-4 border-[#333333] rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 shadow-[12px_12px_0px_#FFCB05]">
          
          {/* Left Side: Info & Visual */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="aspect-square bg-[#FFF9F2] rounded-[2rem] flex items-center justify-center text-[8rem] border-2 border-dashed border-[#F26522]/30">
              💌
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-[#333333]">Get in Touch</h2>
              <p className="font-bold text-lg opacity-80 leading-relaxed">
                Our party planners respond to all inquiries within 24 hours. Let's make it legendary!
              </p>
            </div>

            <div className="pt-6 border-t-2 border-dashed border-[#333333]/10 space-y-3">
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

          {/* Right Side: The Form */}
          <form className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Full Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Ex: Rahul Sharma"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                placeholder="Ex: +91 99999 88888"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all"
              />
            </div>

            {/* Event Date & Time (Mini Calendar/Time Selector) */}
            <div className="flex flex-col gap-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Event Date & Time</label>
              <input 
                type="datetime-local" 
                name="eventDateTime"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all appearance-none"
              />
            </div>

            {/* Age Range */}
            <div className="flex flex-col gap-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Age Range of Kids</label>
              <input 
                type="text" 
                name="ageRange"
                placeholder="Ex: 4-8 years"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all"
              />
            </div>

            {/* Food Preference Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Food Preference</label>
              <select 
                name="foodPreference"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all appearance-none cursor-pointer"
              >
                <option>Veg Only</option>
                <option>Non Veg Only</option>
                <option>Both (Veg & Non Veg)</option>
              </select>
            </div>

            {/* Theme */}
            <div className="flex flex-col gap-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Party Theme</label>
              <input 
                type="text" 
                name="theme"
                placeholder="Ex: Space, Jungle, Mermaid"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all"
              />
            </div>

            {/* Location (Full Width) */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-black text-[#F26522] uppercase text-xs tracking-widest">Location / Venue Name</label>
              <input 
                type="text" 
                name="location"
                placeholder="Ex: South Delhi Residence or Venue Name"
                className="p-4 bg-[#FFF9F2] border-2 border-[#333333] rounded-2xl font-bold focus:outline-none focus:ring-4 focus:ring-[#FFCB05] transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <button 
                type="submit"
                className="w-full bg-[#333333] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#F26522] transition-all shadow-[6px_6px_0px_#FFCB05] active:translate-y-1 active:shadow-none"
              >
                Send My Party Inquiry! →
              </button>
            </div>
          </form>
        </div>

        {/* Trust Footer */}
        <div className="mt-16 text-center">
          <p className="text-[#333333]/50 font-black italic">
            Prefer instant chat? <span className="text-[#25D366] underline cursor-pointer hover:text-[#F26522]">WhatsApp us directly</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs