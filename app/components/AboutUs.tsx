'use client'

import React from 'react'
import Link from 'next/link'
import AboutStats from '@/app/components/AboutStats'

const WHY_CHOOSE_US = [
  { title: 'Freshly Prepared Catering', desc: 'Kid-friendly menus prepared fresh with premium quality ingredients.', emoji: '🥗' },
  { title: 'Curated Menus for All', desc: 'Thoughtfully planned options so children and adults both eat happy.', emoji: '🥪' },
  { title: 'Flexible Quantity Ordering', desc: 'Order exactly based on your guest count, keeping budgets simple.', emoji: '🔄' },
  { title: 'Theme Party Venue in Gurgaon', desc: 'A dedicated kids party house in DLF Phase 1 for hassle-free celebrations.', emoji: '🏰' },
  { title: 'Hospitality-First Approach', desc: 'Warmth, care, and attention to detail from experienced professionals.', emoji: '❤️' },
  { title: 'Personalised Service', desc: 'Direct, tailored coordination from your initial enquiry to party day.', emoji: '🤝' },
]

const GALLERY_PHOTOS = [
  { src: '/images/services/Catering_Img_2_dd4six.avif', alt: 'Kids Party Catering Setup by Little Jalebis' },
  { src: '/images/services/Venue_Img_2_lp20j3.avif', alt: 'Themed Party Venue Interior in Gurgaon' },
  { src: '/images/services/Catering_Img_1_zplwhq.avif', alt: 'Fresh Delicious Kids Finger Food' },
  { src: '/images/services/Venue_Img_3_azcqrh.avif', alt: 'Fun Play Area & Birthday Celebration' },
]

const AboutUs = () => {
  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">

        {/* --- 1. Hero / Main Story Section --- */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-[#FFCB05] border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0px_#F26522] md:shadow-[12px_12px_0px_#F26522] flex items-center justify-center text-[6rem] sm:text-[8rem] md:text-[10rem] rotate-2">
              🍭
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-1 md:-bottom-6 md:-right-6 bg-white border-4 border-[#333333] p-4 md:p-6 rounded-xl md:rounded-2xl shadow-[4px_4px_0px_#333333] md:shadow-[6px_6px_0px_#333333] -rotate-3 z-10">
              <p className="font-black text-[#F26522] text-base md:text-xl text-center leading-tight">
                ESTD <br /> 2024
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#F26522] font-black uppercase tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.3em] text-xs sm:text-sm">
              The Story Behind The Crunch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#333333] mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
              We make <span className="underline decoration-[#FFCB05] decoration-8">magic</span> edible.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#F26522] mb-4 leading-snug">
              Every Great Celebration Begins with Happy Kids
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed mb-4">
              At Little Jalebis, we believe that children&apos;s celebrations deserve something special—not just colourful decorations or a beautiful cake, but food that&apos;s thoughtfully prepared, hospitality that feels effortless, and an experience that allows parents to enjoy every precious moment with their families.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed mb-6">
              We saw that while there were countless caterers for weddings and corporate events, very few truly understood children&apos;s celebrations. Birthday parties often featured generic adult-style menus with little thought about what kids actually enjoy eating. We created Little Jalebis to make kids&apos; celebrations delicious, joyful, and stress-free.
            </p>

            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 md:py-4 bg-[#F26522] text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-[#d6561d] transition-all shadow-[4px_4px_0px_#FFCB05] md:shadow-[6px_6px_0px_#FFCB05] active:shadow-none active:translate-y-1"
            >
              Plan Your Celebration →
            </Link>
          </div>
        </div>

        {/* --- Stats Grid --- */}
        <AboutStats />

        {/* --- 2. Hospitality DNA & Food Designed for Children --- */}
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Professional Care
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
                Hospitality is in <span className="text-[#F26522]">Our DNA</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Little Jalebis was founded by professionals with years of experience in the hospitality industry. That experience shapes everything we do.
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                From the quality of our food and presentation to the way we interact with families, our goal is to bring the warmth, care, and attention to detail of great hospitality to every birthday celebration. It&apos;s never just about serving food—it&apos;s about creating an experience that families remember with a smile.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#FFF9F2] border-4 border-[#333333] p-5 md:p-6 rounded-[2rem] shadow-[4px_4px_0px_#333333] hover:-rotate-1 transition-transform">
                <h3 className="text-lg md:text-xl font-black text-[#333333] flex items-center gap-2">
                  <span>🍕</span> Food Designed Especially for Kids
                </h3>
                <p className="mt-1 font-bold text-[#333333]/70 text-xs md:text-sm leading-relaxed">
                  Children celebrate differently and eat differently too. We create menus with kids in mind instead of simply scaling down adult catering—from fun finger foods to interactive live stations.
                </p>
              </div>

              <div className="bg-[#E8F5E9] border-4 border-[#333333] p-5 md:p-6 rounded-[2rem] shadow-[4px_4px_0px_#333333] hover:rotate-1 transition-transform">
                <h3 className="text-lg md:text-xl font-black text-[#333333] flex items-center gap-2">
                  <span>🏰</span> More Than a Caterer
                </h3>
                <p className="mt-1 font-bold text-[#333333]/70 text-xs md:text-sm leading-relaxed">
                  Along with kids catering across Delhi NCR, we offer our own Theme-Based Kids Party Venue in DLF Phase 1, Gurgaon—a warm space where families celebrate without coordinating multiple vendors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. Photo Showcase Grid --- */}
        <div>
          <div className="text-center mb-6 md:mb-8">
            <span className="text-[#F26522] font-black uppercase tracking-[0.2em] text-xs sm:text-sm">
              Snapshots of Joy
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
              Creating Unforgettable <span className="text-[#F26522]">Moments</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_PHOTOS.map((photo, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] border-4 border-[#333333] overflow-hidden shadow-[4px_4px_0px_#333333] hover:scale-[1.03] transition-transform"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- 4. Why Families Choose Little Jalebis --- */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
              Why Families <span className="text-[#F26522]">Choose Little Jalebis</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
              Families across Delhi NCR trust Little Jalebis because we make celebrations simpler and genuinely care about making your child&apos;s special day memorable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="bg-white border-4 border-[#333333] p-5 md:p-6 rounded-[2rem] shadow-[4px_4px_0px_#FFCB05] flex items-start gap-4 hover:-rotate-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF9F2] border-2 border-[#333333] flex items-center justify-center text-2xl shrink-0">
                  {item.emoji}
                </div>
                <div>
                  <h4 className="font-black text-[#333333] text-base md:text-lg leading-tight">{item.title}</h4>
                  <p className="mt-1 font-bold text-[#333333]/65 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs