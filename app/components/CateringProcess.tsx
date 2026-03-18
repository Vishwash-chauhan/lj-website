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

  const [mobileStepIndex, setMobileStepIndex] = React.useState(0)

  const showPrevStep = () => {
    setMobileStepIndex((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const showNextStep = () => {
    setMobileStepIndex((prev) => (prev + 1) % steps.length)
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-[#333333] mb-4 md:mb-6 leading-tight">
            How It <span className="text-[#F26522]">Works?</span>
          </h2>
          <div className="inline-block bg-[#333333] text-white px-4 sm:px-6 py-2 rounded-full font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.08em] sm:tracking-wide md:tracking-widest shadow-[3px_3px_0px_#FFCB05] md:shadow-[4px_4px_0px_#FFCB05]">
            Simple. Stress-Free. Super Fun.
          </div>
        </div>

        {/* --- Steps Grid --- */}
        <div className="md:hidden">
          <motion.div
            key={mobileStepIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-white border-4 border-[#333333] p-5 rounded-[1.5rem] shadow-[6px_6px_0px_#333333] text-center h-full">
              <div
                className="w-12 h-12 rounded-xl border-4 border-[#333333] flex items-center justify-center text-lg font-black mb-4 mx-auto shadow-[4px_4px_0px_#333333] rotate-3"
                style={{ backgroundColor: steps[mobileStepIndex].color, color: mobileStepIndex === 1 ? '#333333' : 'white' }}
              >
                {steps[mobileStepIndex].number}
              </div>
              <h3 className="text-xl font-black text-[#333333] mb-3 leading-tight">
                {steps[mobileStepIndex].title}
              </h3>
              <p className="font-bold text-[#333333]/70 leading-relaxed text-sm">
                {steps[mobileStepIndex].description}
              </p>
            </div>
          </motion.div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={showPrevStep}
              aria-label="Previous step"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F26522] border-2 border-[#333333] text-white shadow-[3px_3px_0px_#333333] active:translate-y-1 active:shadow-none transition-all"
            >
              <span className="text-lg font-black">‹</span>
            </button>

            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#333333]">
              {mobileStepIndex + 1} / {steps.length}
            </p>

            <button
              type="button"
              onClick={showNextStep}
              aria-label="Next step"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F26522] border-2 border-[#333333] text-white shadow-[3px_3px_0px_#333333] active:translate-y-1 active:shadow-none transition-all"
            >
              <span className="text-lg font-black">›</span>
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 md:gap-12 relative">
          
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
                className="hidden md:flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl border-4 border-[#333333] items-center justify-center text-lg sm:text-xl md:text-2xl font-black mb-5 md:mb-8 shadow-[4px_4px_0px_#333333] md:shadow-[6px_6px_0px_#333333] rotate-3"
                style={{ backgroundColor: step.color, color: index === 1 ? '#333333' : 'white' }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-white border-4 border-[#333333] p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-[6px_6px_0px_#333333] sm:shadow-[8px_8px_0px_#333333] md:shadow-[10px_10px_0px_#333333] text-center flex-1 hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-2.5 transition-transform group">
                <div className="hidden md:inline-block text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#333333] mb-3 md:mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="font-bold text-[#333333]/70 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Flexible Pricing Highlight --- */}
        <div className="mt-10 md:mt-20 bg-white border-4 border-[#333333] rounded-[1.5rem] md:rounded-4xl p-4 sm:p-5 md:p-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 shadow-[6px_6px_0px_#F26522] md:shadow-[8px_8px_0px_#F26522]">
          <div className="text-3xl md:text-4xl">💸</div>
          <p className="text-sm sm:text-base md:text-xl font-black text-[#333333] text-center md:text-left leading-snug md:leading-normal">
            The Best Part? <span className="text-[#F26522]">No per-person charges</span> or minimum guarantees. Pay only for what you need!
          </p>
        </div>

      </div>
    </section>
  )
}

export default CateringProcess