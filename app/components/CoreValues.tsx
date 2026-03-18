'use client'

import React from 'react'

const CoreValues = () => {
  const values = [
    {
      icon: "🎉",
      title: "Party Perfection",
      desc: "Every detail is crafted to make your celebration unforgettable and stress-free."
    },
    {
      icon: "🌟",
      title: "Premium Quality",
      desc: "Only the finest ingredients sourced from trusted suppliers for exceptional taste."
    },
    {
      icon: "🚀",
      title: "Lightning Fast",
      desc: "Quick turnaround times without compromising on quality or freshness."
    },
    {
      icon: "❤️",
      title: "Made with Love",
      desc: "Every dish is prepared with care and attention to bring joy to your guests."
    }
  ]

  return (
    <section className="py-10 md:py-12 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-[#F26522] border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 text-white relative overflow-hidden shadow-[8px_8px_0px_#333333] md:shadow-[12px_12px_0px_#333333]">
          
          {/* Background Decorative Circles */}
          <div className="absolute -top-12 -right-12 md:-top-[3.125rem] md:-right-[3.125rem] w-40 h-40 md:w-64 md:h-64 bg-[#FFCB05] rounded-full opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 -left-8 md:-bottom-[1.875rem] md:-left-[1.875rem] w-24 h-24 md:w-40 md:h-40 bg-white rounded-full opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12">
            
            {/* Left Side: Big Heading */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <span className="text-[#FFCB05] font-black uppercase tracking-[0.2em] md:tracking-widest text-xs sm:text-sm mb-3 md:mb-4">Our DNA</span>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
                What We <span className="hidden md:inline"><br /></span>Stand For
              </h3>
              <p className="font-bold text-white/80 text-sm sm:text-base md:text-lg">
                India's first tech-driven, kids centric catering company
              </p>
            </div>

            {/* Right Side: Values Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-7 md:gap-y-12">
              {values.map((val, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 md:gap-5 group">
                  <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 border-[#333333] rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-[3px_3px_0px_#333333] md:shadow-[4px_4px_0px_#333333] group-hover:rotate-6 transition-transform">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg sm:text-xl md:text-2xl mb-1 md:mb-2 text-[#FFCB05] leading-tight">{val.title}</h4>
                    <p className="font-bold opacity-90 text-xs sm:text-sm leading-relaxed text-white/90">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CoreValues