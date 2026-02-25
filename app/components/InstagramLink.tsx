'use client'

import React from 'react'
import { motion } from 'framer-motion'

const InstagramLink = () => {
  return (
    <div className="flex justify-center p-8" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <motion.a
        href="https://www.instagram.com/littlejalebis/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group relative bg-[#FFCB05] border-4 border-[#333333] px-8 py-4 rounded-2xl shadow-[6px_6px_0px_#333333] flex items-center gap-4 transition-all hover:shadow-none"
      >
        {/* Simple Instagram Icon */}
        <div className="bg-white border-2 border-[#333333] p-2 rounded-lg group-hover:bg-[#F26522] group-hover:text-white transition-colors">
          <svg 
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-black uppercase tracking-tighter text-[#333333]/60 leading-none">Follow us on</span>
          <span className="text-xl font-black text-[#333333]">@littlejalebis</span>
        </div>

        {/* Small "New" or Sparkle tag */}
        <div className="absolute -top-3 -right-3 bg-[#F26522] text-white text-[10px] font-black px-2 py-1 rounded-md border-2 border-[#333333] rotate-12">
          LIVE ✨
        </div>
      </motion.a>
    </div>
  )
}

export default InstagramLink