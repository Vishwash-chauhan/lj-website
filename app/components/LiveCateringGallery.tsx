'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LiveCateringCarousel = () => {
  const content = [
    {
      url: "/videos/Because every celebration deserves great food, smiling faces, and zero stress 💛You enjoy, we make!.mp4",
      title: "Zero Stress Hosting",
    },
    {
      url: "/videos/K-pop energy meets a fun Demon-Hunters twist 💜⚡ - Little Jalebis - Kids Catering & Delivery Co. (1080p, h264).mp4",
      title: "K-Pop & Demon Hunters",
    },
    {
      url: "/videos/Little Jalebis brought the magic to a spook-tacular Halloween celebration! - Little Jalebis - Kids Catering & Delivery Co. (1080p, h264).mp4",
      title: "Spook-tacular Halloween",
    },
    {
      url: "/videos/Our_car-themed_catering_zoomed_into_this_birthday_with_a_themed_based_setup_live_burgers_station_720P.mp4",
      title: "Car-Themed Party",
    },
    {
      url: "/videos/Roblox_Themed_Event_Catered_by_Little_Jalebis_-_Kids_Catering_Delivery_Co_720P.mp4",
      title: "Roblox Themed Event",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextStep = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % content.length)
  }, [content.length])

  const prevStep = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + content.length) % content.length)
  }, [content.length])

  useEffect(() => {
    const timer = setInterval(nextStep, 5000)
    return () => clearInterval(timer)
  }, [nextStep])

  const getVisibleItems = () => {
    return content.map((_, i) => content[(currentIndex + i) % content.length])
  }

  return (
    <section className="py-24 px-6 bg-[#FFF9F2] overflow-hidden" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <span className="text-[#F26522] font-black uppercase tracking-[0.2em] text-sm">Real Moments</span>
          <h2 className="text-5xl md:text-6xl font-black text-[#333333] mt-2">
            Catering <span className="text-[#F26522]">In Action</span>
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-30">
            <button 
              onClick={prevStep}
              className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-[#333333] rounded-2xl shadow-[4px_4px_0px_#333333] hover:bg-[#FFCB05] active:translate-y-1 transition-all flex items-center justify-center text-2xl"
            >
              ←
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-30">
            <button 
              onClick={nextStep}
              className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-[#333333] rounded-2xl shadow-[4px_4px_0px_#333333] hover:bg-[#F26522] hover:text-white active:translate-y-1 transition-all flex items-center justify-center text-2xl"
            >
              →
            </button>
          </div>

          <div className="relative min-h-[500px] md:min-h-[600px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleItems().slice(0, 3).map((item, idx) => (
                  <motion.div 
                    key={`${item.url}-${currentIndex}-${idx}`}
                    className={`relative bg-white border-4 border-[#333333] p-4 rounded-[2.5rem] shadow-[10px_10px_0px_#333333] flex flex-col ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    transition={{ duration: 0.5, ease: "anticipate" }}
                  >
                    {/* VIDEO CONTAINER - Clean Look */}
                    <div className="overflow-hidden rounded-[1.8rem] aspect-[9/16] w-full">
                      <video 
                        key={item.url} // Forces video to reload when source changes
                        src={item.url} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="font-black text-xl text-[#333333] italic">"{item.title}"</p>
                    </div>

                    {/* Decorative Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#FFCB05]/80 border-2 border-[#333333] rotate-[-2deg]" />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Dots --- */}
        <div className="flex justify-center gap-3 mt-16">
          {content.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1)
                setCurrentIndex(i)
              }}
              className={`h-4 rounded-full border-2 border-[#333333] transition-all ${
                currentIndex === i ? 'w-12 bg-[#F26522]' : 'w-4 bg-white hover:bg-[#FFCB05]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveCateringCarousel