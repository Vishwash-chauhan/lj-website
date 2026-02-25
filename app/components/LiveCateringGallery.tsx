'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LiveCateringCarousel = () => {
  const images = [
    {
      url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1772008185/Catering-Sample-Images_o2wuv8.png",
      title: "The Full Spread",
    },
    {
      url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1772008184/image-4-2_mxkbti.webp",
      title: "Happy Guests",
    },
    {
      url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1772008184/image-3_puhn6h.webp",
      title: "Live Counter Fun",
    },
    {
      url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1772008184/image-6-1_iyfxdc.webp",
      title: "Themed Setups",
    },
    {
      url: "https://res.cloudinary.com/dwffrfajl/image/upload/v1772008184/image-5-1_akqbfg.webp",
      title: "Kid-Approved Bites",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextStep = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevStep = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(nextStep, 5000)
    return () => clearInterval(timer)
  }, [nextStep])

  const getVisibleImages = () => {
    return images.map((_, i) => images[(currentIndex + i) % images.length])
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

        {/* --- Carousel Body --- */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-30">
            <button 
              onClick={prevStep}
              className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-[#333333] rounded-2xl shadow-[4px_4px_0px_#333333] hover:bg-[#FFCB05] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center text-2xl"
            >
              ←
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-30">
            <button 
              onClick={nextStep}
              className="w-12 h-12 md:w-16 md:h-16 bg-white border-4 border-[#333333] rounded-2xl shadow-[4px_4px_0px_#333333] hover:bg-[#F26522] hover:text-white active:translate-y-1 active:shadow-none transition-all flex items-center justify-center text-2xl"
            >
              →
            </button>
          </div>

          {/* Photo Display Area - Vertical Reels Ratio */}
          <div className="relative min-h-[500px] md:min-h-[600px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleImages().slice(0, 3).map((img, idx) => (
                  <motion.div 
                    key={`${img.url}-${currentIndex}-${idx}`}
                    className={`relative bg-white border-4 border-[#333333] p-4 rounded-[2.5rem] shadow-[10px_10px_0px_#333333] flex flex-col ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    transition={{ duration: 0.5, ease: "anticipate" }}
                  >
                    {/* ASPECT RATIO 9:16 (REELS) */}
                    <div className="overflow-hidden rounded-[1.8rem] aspect-[9/16] w-full bg-[#333333]">
                      <img 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="font-black text-xl text-[#333333] italic">"{img.title}"</p>
                    </div>

                    {/* Decorative Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#FFCB05]/80 border-2 border-[#333333] rotate-[-2deg]" />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Dots Indicators --- */}
        <div className="flex justify-center gap-3 mt-16">
          {images.map((_, i) => (
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