'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const allReviews = [
    {
      name: "Isha Singh",
      role: "First-time client",
      text: "Thank you Little Jalebis for your service. The food and the service was outstanding. It was homely, comfortable and just what we wanted. The tables were set up beautifully. Thank you so much for making our Christmas special",
      avatar: "https://placehold.co/100x100?text=IS"
    },
    {
      name: "Natasha Agrawal",
      role: "Mom to Kabir",
      text: "I organised my son’s birthday party with little jalebi and had a really nice experience. The food, display, portion size, everything was good. And the best part was their team. The team members they had sent were super humble, proactive and cordial. Will definitely recommend little jalebi to other people. 👍",
      avatar: "https://placehold.co/100x100?text=NA"
    },
    {
      name: "Deepika Mehta",
      role: "Birthday Mom",
      text: "I hosted birthday party at my house and took catering services from Little jalebi. The experience was very very good ! Each and every person was extremely helpful and cordial ! The food was very good and kid friendly ! Also special mention for Devi Prasad ji .. he was extremely helpful and service was exceptional !! 😊😊 I totally recommend to all to try their services !",
      avatar: "https://placehold.co/100x100?text=DM"
    },
    {
      name: "Rounak Chhabra",
      role: "Birthday Dad",
      text: "We took service from little jalebis for birthday. The arrangement was very good and all the food items were tasty. Kids and elders enjoyed equally. little jalebis has a detailed menu and discusses the requirements. Highly recommended for anyone looking for good quality, well managed and reasonably priced catering services",
      avatar: "https://placehold.co/100x100?text=RC"
    },
    {
      name: "Shweta Bhatt",
      role: "Birthday Mom",
      text: "It was a hassle free birthday party , the best thing that host is always ignored in kids birthday party , your ppl took care of them . Food too was perfect for kids not spicy. Kids were finding it difficult to choose which was the best thing in the menu as everything tasted just perfect .",
      avatar: "https://placehold.co/100x100?text=SB"
    },
    {
      name: "Richa Sachdeva",
      role: "Birthday Mom",
      text: "I am so so happy n satisfied with their service, the food and overall and recommend all. The food was so so good and yummy as per the kids taste,their burgers and cheese balls specially was a super hit. Being the host I was so mentally free as they took care of all our guests. Hats off to the team.",
      avatar: "https://placehold.co/100x100?text=RS"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const nextStep = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % allReviews.length)
  }, [allReviews.length])

  const prevStep = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length)
  }, [allReviews.length])

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(nextStep, 5000)
    return () => clearInterval(timer)
  }, [nextStep])

  // Logic to show 1 on mobile, 3 on desktop
  const getVisibleReviews = () => {
    // We return all, and use CSS to hide/show based on screen size
    return allReviews.map((_, i) => allReviews[(currentIndex + i) % allReviews.length])
  }

  return (
    <section className="py-24 px-6 bg-[#FFF9F2] overflow-hidden" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[3rem] border-4 border-[#333333] shadow-[12px_12px_0px_#FFCB05]">
                <img src="https://placehold.co/600x400?text=Happy+Little+Jalebis" alt="Party" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F26522] text-white px-6 py-3 rounded-2xl font-black text-xl rotate-[-5deg] border-2 border-[#333333] z-20">
                Best. Day. Ever! 🍭
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black text-[#333333] leading-tight">
              Hear from our <span className="text-[#F26522]">Little Fans</span>
            </h2>
          </div>
        </div>

        {/* --- Carousel with Nav Buttons --- */}
        <div className="relative group">
          
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

          {/* Testimonial Display Area */}
          <div className="relative h-full min-h-[400px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleReviews().slice(0, 3).map((review, idx) => (
                  <motion.div 
                    key={`${review.name}-${currentIndex}-${idx}`}
                    // Hide 2nd and 3rd cards on mobile using CSS classes
                    className={`bg-white border-4 border-[#333333] p-8 rounded-[2.5rem] shadow-[8px_8px_0px_#333333] flex flex-col justify-between h-full ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    transition={{ duration: 0.5, ease: "anticipate" }}
                  >
                    <div>
                      <div className="flex gap-1 mb-4 text-[#FFCB05] text-xl">★★★★★</div>
                      <p className="text-lg font-bold text-[#333333] mb-8 leading-relaxed italic">"{review.text}"</p>
                    </div>
                    <div className="flex items-center gap-4 border-t-2 border-dashed border-[#333333]/10 pt-6">
                      <div className="w-12 h-12 rounded-full border-2 border-[#333333] overflow-hidden bg-[#FFCB05]">
                        <img src={review.avatar} alt={review.name} />
                      </div>
                      <div>
                        <h4 className="font-black text-[#F26522]">{review.name}</h4>
                        <p className="text-[10px] font-black text-[#333333]/40 uppercase tracking-widest">{review.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Dots Indicators --- */}
        <div className="flex justify-center gap-3 mt-12">
          {allReviews.map((_, i) => (
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

export default Testimonials