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
    <section className="py-20 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-[#F26522] border-4 border-[#333333] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-[12px_12px_0px_#333333]">
          
          {/* Background Decorative Circles */}
          <div className="absolute -top-12.5 -right-12.5 w-64 h-64 bg-[#FFCB05] rounded-full opacity-20 animate-pulse" />
          <div className="absolute -bottom-7.5 -left-7.5 w-40 h-40 bg-white rounded-full opacity-10" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            
            {/* Left Side: Big Heading */}
            <div className="lg:w-1/3 flex flex-col justify-center">
              <span className="text-[#FFCB05] font-black uppercase tracking-widest text-sm mb-4">Our DNA</span>
              <h3 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                What We <br /> Stand For
              </h3>
              <p className="font-bold text-white/80 text-lg">
                India's first tech-driven, kids centric catering company
              </p>
            </div>

            {/* Right Side: Values Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {values.map((val, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="shrink-0 w-14 h-14 bg-white border-2 border-[#333333] rounded-2xl flex items-center justify-center text-3xl shadow-[4px_4px_0px_#333333] group-hover:rotate-6 transition-transform">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-2 text-[#FFCB05]">{val.title}</h4>
                    <p className="font-bold opacity-90 text-sm leading-relaxed text-white/90">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom "Sticker" Tagline */}
        <div className="flex justify-center -mt-6 relative z-20">
          <div className="bg-[#FFCB05] border-4 border-[#333333] px-8 py-3 rounded-full shadow-[6px_6px_0px_#333333] -rotate-1">
            <p className="text-[#333333] font-black text-xl">✨ Trusted by 500+ Parents ✨</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CoreValues