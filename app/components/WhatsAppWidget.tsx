'use client'

import React from 'react'
import { motion } from 'framer-motion'

const WhatsAppWidget = () => {
  const phoneNumber = "918130964374"
  const message = "Hi Little Jalebis! I'd like to inquire about catering for a kids party."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 group" style={{ fontFamily: "'Comic Neue', cursive" }}>
      
      {/* --- Chat Bubble Tooltip --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        className="bg-white border-2 border-[#333333] px-4 py-2 rounded-2xl shadow-[4px_4px_0px_#333333] hidden md:block group-hover:bg-[#FFCB05] transition-colors"
      >
        <p className="text-sm font-black text-[#333333]">Chat with us! 👋</p>
      </motion.div>

      {/* --- Main WhatsApp Button --- */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: -3 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] border-4 border-[#333333] p-4 rounded-[1.5rem] shadow-[6px_6px_0px_#333333] flex items-center justify-center transition-shadow hover:shadow-none"
        aria-label="Contact Little Jalebis on WhatsApp"
      >
        {/* Simple SVG WhatsApp Icon */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </motion.a>
    </div>
  )
}

export default WhatsAppWidget