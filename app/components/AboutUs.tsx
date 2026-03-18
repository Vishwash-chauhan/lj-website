'use client'

import React from 'react'
import AboutStats from '@/app/components/AboutStats'

const AboutUs = () => {
  return (
    <section className="pt-24 md:pt-28 py-20 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Main Story Section --- */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-[#FFCB05] border-4 border-[#333333] rounded-[3rem] shadow-[12px_12px_0px_#F26522] flex items-center justify-center text-[10rem] rotate-2">
              🍭
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white border-4 border-[#333333] p-6 rounded-2xl shadow-[6px_6px_0px_#333333] -rotate-3">
              <p className="font-black text-[#F26522] text-xl text-center leading-tight">
                ESTD <br /> 2020
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#F26522] font-black uppercase tracking-[0.3em] text-sm">The Story Behind The Crunch</span>
            <h2 className="text-5xl md:text-6xl font-black text-[#333333] mt-4 mb-8 leading-tight">
              We make <span className="underline decoration-[#FFCB05] decoration-8">magic</span> edible.
            </h2>
            <p className="text-xl font-bold opacity-80 leading-relaxed mb-6">
              Whether it’s a birthday, playdate, big party in a farm - we cater to all types of gatherings - so you can enjoy the day stress-free. 
            </p>
            <p className="text-xl font-bold opacity-80 leading-relaxed mb-10">
              Our menus are thoughtfully designed for kids—full of flavour, made with fresh ingredients, and secretly loved by adults too! Whether you're hosting at home or at a venue, we make sure the food is one less thing to worry about.
            </p>
            
            <a href="/contact" className="inline-block px-8 py-4 bg-[#333333] text-white rounded-2xl font-black text-lg hover:bg-[#F26522] transition-all shadow-[6px_6px_0px_#FFCB05] active:shadow-none active:translate-y-1">
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