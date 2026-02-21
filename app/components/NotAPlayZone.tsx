'use client'

import React from 'react'

const PartyHouseNote = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 px-6" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="bg-[#FFF9F2] border-4 border-dashed border-[#F26522] p-8 rounded-4xl">
        
        {/* "Not a Play Zone" Sticker Badge */}

        <p className="text-2xl md:text-3xl font-black text-[#333333] leading-tight">
          We are <span className="text-[#F26522]">not a play zone</span> — we are a customizable Kids Party House where families bring their <span className="underline decoration-[#FFCB05] decoration-4">vision to life</span>.
        </p>
        

      </div>
    </div>
  )
}

export default PartyHouseNote