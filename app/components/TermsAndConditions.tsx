'use client'

import React from 'react'
import { ShieldCheck, Scale, Globe } from 'lucide-react'

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Use of Website",
      icon: <Globe className="text-[#F26522]" size={24} />,
      content: "By accessing this site, you agree to follow all local laws. The content here is for your general information only and is subject to change without notice."
    },
    {
      title: "Intellectual Property",
      icon: <Scale className="text-[#F26522]" size={24} />,
      content: "All logos, graphics, and text are owned by Little Jalebis. You may not copy, reproduce, or use our brand assets for commercial purposes without our written consent."
    },
    {
      title: "Privacy & Liability",
      icon: <ShieldCheck className="text-[#F26522]" size={24} />,
      content: "Your use of this site is at your own risk. We are not liable for any technical inaccuracies. Your data privacy is important to us and handled as per our standard privacy protocols."
    }
  ]

  return (
    <section className="py-12 px-4 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-3xl mx-auto">
        
        {/* The Single Consolidated Card */}
        <div className="bg-white border-4 border-[#333333] rounded-[3rem] p-8 md:p-12 shadow-[12px_12px_0px_#333333] relative overflow-hidden">
          
          {/* Decorative Corner "Tape" */}
          <div className="absolute -top-6 -right-10 bg-[#FFCB05] w-32 h-12 rotate-45 border-b-2 border-[#333333]" />

          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-black text-[#333333] leading-tight">
              Terms & Condtions
            </h2>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <div key={idx} className={`relative ${idx !== sections.length - 1 ? 'pb-10 border-b-4 border-dashed border-[#333333]/10' : ''}`}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-[#FFF9F2] border-2 border-[#333333] w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#333333]">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#333333] uppercase mb-2">
                      {section.title}
                    </h3>
                    <p className="text-md font-bold text-[#333333] opacity-80 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stamp */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t-4 border-[#333333] pt-8">
            <p className="text-xs font-black opacity-40 uppercase tracking-widest">
              Verified 2026 • Little Jalebis Co.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TermsAndConditions