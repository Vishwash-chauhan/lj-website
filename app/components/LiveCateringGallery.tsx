'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const LiveCateringCarousel = () => {
  const content = [
    {
      url: "/videos/zero-stress-hosting.mp4",
      title: "Zero Stress Hosting",
    },
    {
      url: "/videos/kpop-demon-hunters.mp4",
      title: "K-Pop & Demon Hunters",
    },
    {
      url: "/videos/halloween-celebration.mp4",
      title: "Spook-tacular Halloween",
    },
    {
      url: "/videos/car-themed-party.mp4",
      title: "Car-Themed Party",
    },
    {
      url: "/videos/roblox-themed-event.mp4",
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
    const timer = setInterval(nextStep, 6000)
    return () => clearInterval(timer)
  }, [nextStep])

  const getVisibleItems = () => {
    return content.map((_, i) => content[(currentIndex + i) % content.length])
  }

  // FIXED: Explicitly typed as Variants to resolve TS2322
  const cardVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotate: direction > 0 ? 5 : -5
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 100, damping: 20 },
        scale: { duration: 0.4 },
        rotate: { type: "spring" as const, stiffness: 100 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9,
      rotate: direction < 0 ? 5 : -5,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    })
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#FFF9F2] overflow-hidden" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-[#F26522] font-black uppercase tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm">Real Moments</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mt-2 leading-tight">
            Catering <span className="text-[#F26522]">In Action</span>
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 z-40">
            <button 
              onClick={prevStep}
              className="w-16 h-16 bg-white border-4 border-[#333333] rounded-2xl shadow-[4px_4px_0px_#333333] hover:bg-[#FFCB05] active:translate-y-1 transition-all flex items-center justify-center text-2xl"
            >
              ←
            </button>
          </div>

          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12 z-40">
            <button 
              onClick={nextStep}
              className="w-16 h-16 bg-white border-4 border-[#333333] rounded-2xl shadow-[4px_4px_0px_#333333] hover:bg-[#F26522] hover:text-white active:translate-y-1 transition-all flex items-center justify-center text-2xl"
            >
              →
            </button>
          </div>

          <div className="relative h-auto md:h-[650px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8">
                {getVisibleItems().slice(0, 3).map((item, idx) => (
                  <motion.div 
                    key={`${item.url}-${idx}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`relative w-full max-w-[22rem] mx-auto md:max-w-none bg-white border-4 border-[#333333] p-3 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] shadow-[6px_6px_0px_#333333] sm:shadow-[8px_8px_0px_#333333] md:shadow-[10px_10px_0px_#333333] flex flex-col ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                  >
                    {/* VIDEO CONTAINER */}
                    <div className="overflow-hidden rounded-[1.1rem] sm:rounded-[1.4rem] md:rounded-[1.8rem] aspect-[9/16] w-full bg-gray-100">
                      <video 
                        key={item.url} 
                        src={item.url} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mt-4 md:mt-6 text-center">
                      <p className="font-black text-base sm:text-lg md:text-xl text-[#333333] italic">"{item.title}"</p>
                    </div>

                    {/* Decorative Tape */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 sm:w-16 md:w-20 h-5 md:h-6 bg-[#FFCB05] border-2 border-[#333333] rotate-[-2deg]" />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prevStep}
              aria-label="Previous video"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F26522] border-2 border-[#333333] text-white shadow-[3px_3px_0px_#333333] active:translate-y-1 active:shadow-none transition-all"
            >
              <span className="text-lg font-black">‹</span>
            </button>

            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#333333]">
              {currentIndex + 1} / {content.length}
            </p>

            <button
              type="button"
              onClick={nextStep}
              aria-label="Next video"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F26522] border-2 border-[#333333] text-white shadow-[3px_3px_0px_#333333] active:translate-y-1 active:shadow-none transition-all"
            >
              <span className="text-lg font-black">›</span>
            </button>
          </div>
        </div>

        {/* --- Dots --- */}
        <div className="hidden md:flex justify-center gap-3 mt-16">
          {content.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1)
                setCurrentIndex(i)
              }}
              className={`h-4 rounded-full border-2 border-[#333333] transition-all duration-500 ${
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