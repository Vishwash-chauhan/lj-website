'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PartyHouseConcept = () => {
  return (
    <section className="py-24 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* --- Main Concept Card --- */}
        <div className="bg-white border-4 border-[#333333] rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_#F26522] flex flex-col lg:flex-row">
          
          {/* Visual Side */}
          <div className="w-full lg:w-2/5 bg-[#FFCB05] p-12 flex flex-col justify-center items-center text-center border-b-4 lg:border-b-0 lg:border-r-4 border-[#333333]">
            <div className="text-[10rem] mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">🏠</div>
            <h2 className="text-4xl font-black text-[#333333] leading-tight">
              The <br /> Party House
            </h2>
            <div className="mt-6 bg-[#333333] text-white px-4 py-2 rounded-xl font-black text-sm uppercase tracking-widest">
              17, Lower Ground Floor, Arjun Marg, DLF Phase 1, Gurugram
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5 p-8 md:p-16 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-[#333333]">
                Your Vision, <span className="text-[#F26522]">Our Space.</span>
              </h3>
              <p className="text-xl font-bold opacity-80 leading-relaxed">
                Little Jalebis – Kids Party House & Catering Co. is a thoughtfully designed venue perfect for hosting celebrations of up to <span className="text-[#F26522]">80 guests</span>.
              </p>
              <p className="text-lg font-bold opacity-70 leading-relaxed">
                The space features a warm indoor party area complemented by an open-air extension, giving you the ultimate flexibility to design your own themes, décor, and activities.
              </p>
            </div>

            {/* The "Not a Play Zone" Disclaimer Sticker */}
            <div className="bg-[#FFF9F2] border-4 border-dashed border-[#F26522] p-6 rounded-2xl relative">
              {/* <div className="absolute -top-4 -left-4 bg-[#F26522] text-white px-3 py-1 rounded-lg font-black text-xs uppercase rotate-[-2deg]">
                Important!
              </div> */}
              <p className="text-xl font-black text-[#333333]">
                We are not a play zone — we are a customizable party house where families bring their vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍕</span>
                <p className="font-bold text-sm">Signature in-house catering with kid-friendly, hygienic food.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <p className="font-bold text-sm">Freedom to arrange your own décor, entertainers, and soft play.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Trust/Vendor Row --- */}
        {/* <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 px-8">
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-black text-[#333333]">Need a hand?</h4>
            <p className="font-bold opacity-60">We can connect you with our trusted network of vendors.</p>
          </div>
          <button className="bg-[#333333] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-[6px_6px_0px_#FFCB05] hover:bg-[#F26522] transition-all active:translate-y-1 active:shadow-none">
            Book the House →
          </button>
        </div> */}

      </div>
    </section>
  )
}

export default PartyHouseConcept