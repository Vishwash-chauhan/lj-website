'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Sparkles,
  Utensils,
  Thermometer,
  Bug,
  Droplets,
  Truck,
  CheckCircle2,
  Award
} from 'lucide-react'

const steps = [
  {
    title: 'Clean & Appropriate Staff Practices',
    desc: 'Our food-handling team follows hygiene practices including regular handwashing and the use of gloves where appropriate, along with dedicated staff uniforms during food preparation and handling.',
    icon: Sparkles,
    badge: 'Hygiene Practices',
  },
  {
    title: 'Regular Kitchen Sanitisation',
    desc: 'Our kitchen and food preparation areas follow a regular sanitisation schedule, helping us maintain a clean environment throughout our operations.',
    icon: ShieldCheck,
    badge: 'Clean Kitchen',
  },
  {
    title: 'Separate Raw & Cooked Food',
    desc: 'We take care to maintain separation between raw and cooked food during storage and handling, helping minimise the risk of cross-contamination.',
    icon: Utensils,
    badge: 'Cross-Contamination Safe',
  },
  {
    title: 'Temperature Checks',
    desc: 'We monitor food storage and preparation temperatures as part of our food-handling practices, helping ensure food is kept under appropriate conditions.',
    icon: Thermometer,
    badge: 'Controlled Prep',
  },
  {
    title: 'Regular Pest Control',
    desc: 'Our kitchen follows a regular pest-control programme to maintain a hygienic food preparation environment.',
    icon: Bug,
    badge: 'Pest-Free Space',
  },
  {
    title: 'Water Quality',
    desc: 'We also pay attention to the quality and safety of the water used in our food preparation and kitchen operations, including regular water testing.',
    icon: Droplets,
    badge: 'Tested Water',
  },
  {
    title: 'Care Beyond the Kitchen',
    desc: 'Our responsibility doesn’t end once the food is prepared. We take care with packing, handling and transportation so that your food reaches your event safely and ready to serve.',
    icon: Truck,
    badge: 'Safe Transport',
  },
]

const pillars = [
  'FSSAI CERTIFIED',
  'HYGIENE-FOCUSED KITCHEN',
  'CAREFUL FOOD HANDLING',
  'KIDS-EVENT SPECIALISTS',
]

const promises = [
  { title: 'Food children love.', icon: '🍕' },
  { title: 'Prepared with care.', icon: '❤️' },
  { title: 'Handled responsibly.', icon: '🛡️' },
  { title: 'Served with confidence.', icon: '✨' },
]

const FoodSafetyContent = () => {
  return (
    <div className="bg-[#FFF9F2] pt-24 md:pt-32 pb-16 px-4 sm:px-6" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        
        {/* Hero Section Card */}
        <div className="bg-white border-4 border-[#333333] rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-14 shadow-[10px_10px_0px_#333333] md:shadow-[14px_14px_0px_#333333] relative overflow-hidden">
          {/* Top Tape Accent */}
          <div className="absolute -top-6 -right-10 bg-[#FFCB05] w-36 h-12 rotate-45 border-b-2 border-[#333333] shadow-sm hidden sm:block" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FFF4EC] border-2 border-[#F26522]/30 px-4 py-1.5 rounded-full">
              <Award className="text-[#F26522]" size={20} />
              <span className="text-xs sm:text-sm font-black uppercase text-[#F26522] tracking-wider">
                FSSAI Certified & Safety Focused
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#333333] leading-tight">
              FOOD MADE WITH <span className="text-[#F26522]">EXTRA CARE</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#F26522] italic">
              Because when you’re serving children, every detail matters.
            </p>

            <div className="text-base sm:text-lg font-bold text-[#333333]/90 leading-relaxed max-w-4xl space-y-4">
              <p>
                At <span className="text-[#F26522]">Little Jalebis</span>, we specialise in catering for kids’ events. We know that for parents, it’s not just about whether children enjoy the food — it’s also about knowing that the food has been prepared and handled with care.
              </p>
              <p>
                That’s why we take extra precautions across our kitchen and food preparation process. Little Jalebis is FSSAI certified, and food safety and hygiene are an important part of how we operate every day.
              </p>
            </div>

            {/* Quick Badges Row */}
            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="bg-[#FFCB05] border-2 border-[#333333] px-4 py-2 rounded-2xl shadow-[3px_3px_0px_#333333] text-xs sm:text-sm font-black text-[#333333]"
                >
                  ✓ {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step by Step Precautions Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#F26522] font-black uppercase tracking-widest text-sm">Our Process</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333]">
              OUR EXTRA CARE, <span className="text-[#F26522]">AT EVERY STEP</span>
            </h2>
            <p className="font-bold text-[#333333]/70 text-base sm:text-lg">
              We leave nothing to chance. Here is how we maintain strict hygiene from kitchen to event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon
              return (
                <div
                  key={idx}
                  className="bg-white border-3 sm:border-4 border-[#333333] rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_#333333] flex flex-col justify-between hover:-translate-y-1 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-[#FFF4EC] border-2 border-[#333333] rounded-2xl flex items-center justify-center text-[#F26522] shadow-[3px_3px_0px_#FFCB05] group-hover:rotate-6 transition-transform">
                        <IconComp size={24} />
                      </div>
                      <span className="text-xs font-black bg-[#FFF9F2] border border-[#333333]/20 px-3 py-1 rounded-full text-[#333333]/70">
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-black uppercase text-[#F26522] tracking-wider block mb-1">
                        {step.badge}
                      </span>
                      <h3 className="text-xl font-black text-[#333333] leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm font-bold text-[#333333]/80 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why This Matters To Us Banner */}
        <div className="bg-[#F26522] border-4 border-[#333333] rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-14 text-white relative overflow-hidden shadow-[10px_10px_0px_#333333] md:shadow-[14px_14px_0px_#333333]">
          {/* Decorative Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FFCB05] rounded-full opacity-25 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-white rounded-full opacity-15" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#FFCB05] font-black uppercase tracking-widest text-xs sm:text-sm">
                Parental Peace of Mind
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
                WHY THIS MATTERS <span className="text-[#FFCB05]">TO US</span>
              </h2>
              <p className="text-base sm:text-lg font-bold text-white/95 leading-relaxed">
                We cater specifically for children’s parties, family celebrations and kids’ events.
              </p>
              <p className="text-base sm:text-lg font-bold text-white/95 leading-relaxed">
                That means we understand that parents are trusting us with something very important — the food their children will eat.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 sm:p-5 rounded-2xl">
                <p className="text-lg sm:text-xl font-black text-[#FFCB05]">
                  “So we don’t look at hygiene as an extra feature. It’s part of the way we do our job.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-white text-[#333333] border-3 border-[#333333] rounded-2xl p-4 shadow-[4px_4px_0px_#333333] flex items-center gap-3 font-black text-sm sm:text-base"
                >
                  <CheckCircle2 size={22} className="text-[#F26522] shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Promise Section */}
        <div className="bg-white border-4 border-[#333333] rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-14 shadow-[10px_10px_0px_#333333] md:shadow-[14px_14px_0px_#333333] space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-[#F26522] font-black uppercase tracking-widest text-xs sm:text-sm">
              Our Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333]">
              OUR <span className="text-[#F26522]">PROMISE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="bg-[#FFF9F2] border-3 border-[#333333] rounded-3xl p-6 shadow-[5px_5px_0px_#FFCB05] flex flex-col items-center justify-center text-center space-y-3 hover:scale-105 transition-transform"
              >
                <span className="text-4xl mb-1">{promise.icon}</span>
                <h3 className="text-lg sm:text-xl font-black text-[#333333]">
                  {promise.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="pt-6 border-t-2 border-dashed border-[#333333]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-xl font-black text-[#333333]">Ready to plan your kids&apos; party?</h4>
              <p className="text-sm font-bold text-[#333333]/70">Let us take care of the food with guaranteed safety and smiles.</p>
            </div>
            <Link
              href="/contact"
              className="bg-[#F26522] text-white font-black px-8 py-4 rounded-full border-2 border-[#333333] shadow-[4px_4px_0px_#333333] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-sm uppercase tracking-wider shrink-0"
            >
              Book Your Party Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FoodSafetyContent
