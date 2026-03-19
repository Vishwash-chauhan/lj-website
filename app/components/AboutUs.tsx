'use client'

import React from 'react'
import AboutStats from '@/app/components/AboutStats'

const AboutUs = () => {
  return (
    <section className="pt-24 md:pt-28 pb-[0px] md:pb-20 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Main Story Section --- */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-10 md:mb-12">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-[#FFCB05] border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0px_#F26522] md:shadow-[12px_12px_0px_#F26522] flex items-center justify-center text-[6rem] sm:text-[8rem] md:text-[10rem] rotate-2">
              🍭
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-1 md:-bottom-6 md:-right-6 bg-white border-4 border-[#333333] p-4 md:p-6 rounded-xl md:rounded-2xl shadow-[4px_4px_0px_#333333] md:shadow-[6px_6px_0px_#333333] -rotate-3">
              <p className="font-black text-[#F26522] text-base md:text-xl text-center leading-tight">
                ESTD <br /> 2024
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#F26522] font-black uppercase tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.3em] text-xs sm:text-sm">The Story Behind The Crunch</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] mt-3 md:mt-4 mb-5 md:mb-8 leading-tight">
              We make <span className="underline decoration-[#FFCB05] decoration-8">magic</span> edible.
            </h2>
            <p className="text-sm sm:text-base md:text-xl font-bold opacity-80 leading-relaxed mb-4 md:mb-6">
              Whether it’s a birthday, playdate, big party in a farm - we cater to all types of gatherings - so you can enjoy the day stress-free. 
            </p>
            <p className="text-sm sm:text-base md:text-xl font-bold opacity-80 leading-relaxed mb-7 md:mb-10">
              Our menus are thoughtfully designed for kids—full of flavour, made with fresh ingredients, and secretly loved by adults too! Whether you're hosting at home or at a venue, we make sure the food is one less thing to worry about.
            </p>
            
            <a href="/contact" className="inline-block px-6 sm:px-8 py-3 md:py-4 bg-[#F26522] text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-[#d6561d] transition-all shadow-[4px_4px_0px_#FFCB05] md:shadow-[6px_6px_0px_#FFCB05] active:shadow-none active:translate-y-1">
              Get A Quote →
            </a>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <AboutStats />

        {/* --- Our Values (The Promise) --- */}
        {/* <div className="mt-20 bg-[#F26522] border-4 border-[#333333] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-[12px_12px_0px_#333333]">

          <div className="absolute -top-12.5 -right-12.5 w-64 h-64 bg-[#FFCB05] rounded-full opacity-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <h3 className="text-4xl font-black leading-tight">Our Pinky <br /> Promise</h3>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-3xl">🥦</div>
                <div>
                  <h4 className="font-black text-xl mb-1">Kid-Safe First</h4>
                  <p className="font-bold opacity-80 text-sm text-white/90">Ultra-fresh ingredients. No nasties allowed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🎨</div>
                <div>
                  <h4 className="font-black text-xl mb-1">Theme Magic</h4>
                  <p className="font-bold opacity-80 text-sm text-white/90">We match our food and decor to whatever your little one imagines.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  )
}

export default AboutUs