'use client'

import React from 'react'

const TermsAndConditions = () => {
  const policies = [
    {
      title: "Booking & Payment",
      items: [
        "50% advance payment required to confirm your slot.",
        "Final balance must be cleared on the day of the event.",
        "Prices are exclusive of GST and delivery charges."
      ]
    },
    {
      title: "Cancellations",
      items: [
        "Cancellations made 7 days prior get a full refund.",
        "50% refund for cancellations within 3-6 days.",
        "No refund for cancellations made within 48 hours."
      ]
    },
    {
      title: "Service Details",
      items: [
        "Minimum order of 10 boxes for delivery.",
        "Live counters require a minimum of 25 guests.",
        "Please inform us of any severe allergies 48 hours in advance."
      ]
    }
  ]

  return (
    <section className="py-16 px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Simple Header */}
        <div className="mb-12 border-b-4 border-[#333333] pb-6">
          <h2 className="text-4xl font-black text-[#333333]">
            The <span className="text-[#F26522]">Fine Print</span>
          </h2>
          <p className="font-bold opacity-60 mt-2 italic">Simple rules for a super happy party!</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, idx) => (
            <div 
              key={idx} 
              className="bg-white border-4 border-[#333333] p-6 rounded-3xl shadow-[8px_8px_0px_#333333]"
            >
              <h3 className="text-xl font-black text-[#F26522] mb-4 uppercase tracking-tight">
                {policy.title}
              </h3>
              <ul className="space-y-4">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#FFCB05] font-black">•</span>
                    <p className="text-sm font-bold text-[#333333] opacity-80 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tiny Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold opacity-40">
            Last Updated: March 2026 • Little Jalebis Kids Catering & Delivery Co.
          </p>
        </div>

      </div>
    </section>
  )
}

export default TermsAndConditions