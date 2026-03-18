'use client'

import React from 'react'
import Image from 'next/image'

const AwardsRecognition = () => {
  return (
    <section className="py-10 md:py-12 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-4 md:mb-5">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] inline-block relative leading-tight">
            Award <span className="text-[#F26522]">Winning</span> Joy
            {/* Decorative squiggle or underline could go here */}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-12 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05] overflow-hidden">
          
          {/* Image Side - Spotlight Effect */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center group">
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-[1.5rem] md:rounded-[2rem] border-4 border-[#333333] overflow-hidden shadow-[6px_6px_0px_#F26522] md:shadow-[8px_8px_0px_#F26522] transition-transform group-hover:scale-[1.02]">
              <Image 
                src="https://res.cloudinary.com/dwffrfajl/image/upload/v1771134181/LJ-Award-Design_final_02-1_romwsd.png" 
                alt="Most Influential Kids Brand 2024 Award"
                fill
                className="object-cover"
              />
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] md:w-[120%] md:h-[120%] bg-[#FFCB05] opacity-20 rounded-full blur-2xl md:blur-3xl -z-0" />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
            
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
              India's Most <span className="text-[#F26522]">Influential</span> Kids Brand
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm sm:text-base md:text-xl font-bold opacity-80 leading-relaxed">
                We are incredibly honored to have received this prestigious recognition at the <span className="text-[#F26522]">Indira Gandhi Arena</span>. 
              </p>
              <p className="text-sm sm:text-base md:text-xl font-bold opacity-80 leading-relaxed">
                As part of Delhi’s premier children’s festival, this award celebrates our commitment to creating magical culinary experiences that kids love and parents trust.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsRecognition