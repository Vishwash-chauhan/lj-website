'use client'

import React from 'react'

const LocationSection = () => {
  return (
    <section className="mt-24 max-w-5xl mx-auto px-4 pb-20">
      {/* Header for Location */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-[#333333] mb-4">
          Visit Our <span className="text-[#F26522]">Party Hub</span>
        </h2>
        <p className="text-xl font-bold opacity-70" style={{ fontFamily: "'Comic Neue', cursive" }}>
          Come over for a tasting or to tour our magical venues!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 bg-white border-4 border-[#333333] rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_#FFCB05]">
        
        {/* Left Side: Address Details */}
        <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-[#FFF9F2] border-b-4 lg:border-b-0 lg:border-r-4 border-[#333333]">
          <div className="mb-8">
            <span className="bg-[#F26522] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              Main Center
            </span>
            <h3 className="text-3xl font-black text-[#333333] mt-4 mb-2">Little Jalebis HQ</h3>
            <p className="text-lg font-bold opacity-80 leading-relaxed">
              123 Sweet Success Lane,<br />
              Kids Quarter, Joy City,<br />
              JC 56789
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFCB05] flex items-center justify-center border-2 border-[#333333] shadow-[2px_2px_0px_#333333]">
                📞
              </div>
              <span className="font-bold text-[#333333]">+1 (555) JALEBIS</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border-2 border-[#333333] shadow-[2px_2px_0px_#333333]">
                ✉️
              </div>
              <span className="font-bold text-[#333333]">hello@littlejalebis.com</span>
            </div>
          </div>

          <button className="mt-10 w-full py-4 bg-[#333333] text-white rounded-2xl font-bold hover:bg-[#F26522] transition-all transform hover:-rotate-1 active:scale-95">
            Get Directions →
          </button>
        </div>

        {/* Right Side: Google Maps Embed */}
        <div className="lg:w-2/3 h-[400px] lg:h-auto min-h-[350px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.559280917036!2d77.22731557613568!3d28.613939084860163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b7187896344!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Little Jalebis Location"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Playful Map Marker Overlay (Visual Only) */}
          <div className="absolute top-4 right-4 bg-white border-2 border-[#333333] p-2 rounded-lg shadow-[4px_4px_0px_#FFCB05] hidden md:block">
            <p className="text-xs font-black">Open 9AM - 8PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection