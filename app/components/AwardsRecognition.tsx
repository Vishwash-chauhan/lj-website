'use client'

import React from 'react'
import Image from 'next/image'

const AwardsRecognition = () => {
  return (
    <section className="py-20 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#333333] inline-block relative">
            Award <span className="text-[#F26522]">Winning</span> Joy
            {/* Decorative squiggle or underline could go here */}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white border-4 border-[#333333] rounded-[3rem] p-8 md:p-12 shadow-[12px_12px_0px_#FFCB05] overflow-hidden">
          
          {/* Image Side - Spotlight Effect */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center group">
            <div className="relative z-10 w-full max-w-md aspect-square rounded-[2rem] border-4 border-[#333333] overflow-hidden shadow-[8px_8px_0px_#F26522] transition-transform group-hover:scale-[1.02]">
              <Image 
                src="https://res.cloudinary.com/dwffrfajl/image/upload/v1771134181/LJ-Award-Design_final_02-1_romwsd.png" 
                alt="Most Influential Kids Brand 2024 Award"
                fill
                className="object-cover"
              />
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFCB05] opacity-20 rounded-full blur-3xl -z-0" />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block bg-[#F26522] text-white px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest">
              2024 Recognition
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-[#333333] leading-tight">
              India's Most <span className="text-[#F26522]">Influential</span> Kids Brand
            </h3>
            
            <div className="space-y-4">
              <p className="text-xl font-bold opacity-80 leading-relaxed">
                We are incredibly honored to have received this prestigious recognition at the <span className="text-[#F26522]">Indira Gandhi Arena</span>. 
              </p>
              <p className="text-xl font-bold opacity-80 leading-relaxed">
                As part of Delhi’s premier children’s festival, this award celebrates our commitment to creating magical culinary experiences that kids love and parents trust.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="bg-[#FFF9F2] border-2 border-[#333333] p-4 rounded-2xl shadow-[4px_4px_0px_#333333]">
                <p className="text-xs font-black uppercase text-[#F26522]">Location</p>
                <p className="text-lg font-black">Delhi, India</p>
              </div>
              <div className="bg-[#FFF9F2] border-2 border-[#333333] p-4 rounded-2xl shadow-[4px_4px_0px_#333333]">
                <p className="text-xs font-black uppercase text-[#F26522]">Venue</p>
                <p className="text-lg font-black text-sm md:text-base">Indira Gandhi Arena</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Footer Tagline --- */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-black italic text-[#333333]/40">
            "Voted by kids, trusted by parents, loved by all!"
          </p>
        </div>
      </div>
    </section>
  )
}

export default AwardsRecognition