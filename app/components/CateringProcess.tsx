'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CateringProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Share your event details",
      description: "Tell us about your event requirements (Theme, Age Group, No. of Guests). We provide a fully flexible menu based on your guest count – no per-person charges or minimum guarantees.",
      icon: "📋",
      color: "#F26522"
    },
    {
      number: "02",
      title: "Shortlist your add-ons",
      description: "Want to add more fun? Pick from our live stations (waffles, mini pancakes, churros, cotton candy, potato spirals, and more), crockery, cutlery, servers, or table décor to match your vibe.",
      icon: "🍦",
      color: "#FFCB05"
    },
    {
      number: "03",
      title: "We set it all up! Sit back and enjoy",
      description: "Our team arrives at the venue before the guest invite time with all essentials. We manage the entire setup, ensuring a stress-free celebration for you & your guests.",
      icon: "✨",
      color: "#25D366"
    }
  ]

  return (
    <section className="py-24 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-[#333333] mb-6">
            How It <span className="text-[#F26522]">Works?</span>
          </h2>
          <div className="inline-block bg-[#333333] text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#FFCB05]">
            Simple. Stress-Free. Super Fun.
          </div>
        </div>

        {/* --- Steps Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 border-t-4 border-dashed border-[#333333]/20 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Number Badge */}
              <div 
                className="w-16 h-16 rounded-2xl border-4 border-[#333333] flex items-center justify-center text-2xl font-black mb-8 shadow-[6px_6px_0px_#333333] rotate-3"
                style={{ backgroundColor: step.color, color: index === 1 ? '#333333' : 'white' }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-white border-4 border-[#333333] p-8 rounded-[2.5rem] shadow-[10px_10px_0px_#333333] text-center flex-1 hover:-translate-y-2.5 transition-transform group">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black text-[#333333] mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="font-bold text-[#333333]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Flexible Pricing Highlight --- */}
        <div className="mt-20 bg-white border-4 border-[#333333] rounded-4xl p-6 flex flex-col md:flex-row items-center justify-center gap-6 shadow-[8px_8px_0px_#F26522]">
          <div className="text-4xl">💸</div>
          <p className="text-xl font-black text-[#333333] text-center md:text-left">
            The Best Part? <span className="text-[#F26522]">No per-person charges</span> or minimum guarantees. Pay only for what you need!
          </p>
        </div>

      </div>
    </section>
  )
}

export default CateringProcess