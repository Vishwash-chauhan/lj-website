'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const POPULAR_THEMES = [
  { name: 'Princess', emoji: '👑', color: '#FFD1DC', shadow: '#FFB6C1' },
  { name: 'Superheroes', emoji: '🦸', color: '#E3F2FD', shadow: '#90CAF9' },
  { name: 'Unicorn', emoji: '🦄', color: '#F3E5F5', shadow: '#CE93D8' },
  { name: 'Frozen', emoji: '❄️', color: '#E0F7FA', shadow: '#80DEEA' },
  { name: 'Jungle Safari', emoji: '🦁', color: '#E8F5E9', shadow: '#A5D6A7' },
  { name: 'Space Adventure', emoji: '🚀', color: '#ECEFF1', shadow: '#B0BEC5' },
  { name: 'Dinosaur', emoji: '🦖', color: '#F1F8E9', shadow: '#C5E1A5' },
  { name: 'Cars', emoji: '🚗', color: '#FFEBEE', shadow: '#EF9A9A' },
  { name: 'Peppa Pig', emoji: '🐷', color: '#FCE4EC', shadow: '#F48FB1' },
  { name: 'Bluey', emoji: '🐶', color: '#FFF3E0', shadow: '#FFCC80' },
  { name: 'Pokémon', emoji: '⚡', color: '#FFFDE7', shadow: '#FFF59D' },
  { name: 'Minecraft', emoji: '🟩', color: '#E8F5E9', shadow: '#C8E6C9' },
  { name: 'Football', emoji: '⚽', color: '#F1F8E9', shadow: '#DCEDC8' },
  { name: 'Rainbow', emoji: '🌈', color: '#FFF3E0', shadow: '#FFE0B2' },
  { name: 'Carnival', emoji: '🎪', color: '#FFEBEE', shadow: '#FFCDD2' },
]

const INCLUDED_SERVICES = [
  { name: 'Theme Décor', emoji: '🎈', desc: 'Custom themed backdrops, props, and styling.' },
  { name: 'Balloon Installations', emoji: '🎈', desc: 'Beautiful organic balloon arches and clusters.' },
  { name: 'Welcome Signage', emoji: '🪧', desc: 'Personalised signs to greet your guests.' },
  { name: 'Cake Table Styling', emoji: '🎂', desc: 'Themed setups to make the cake-cutting moment extra special.' },
  { name: 'Live Food Stations', emoji: '🍳', desc: 'Interactive live counters serving fresh hot bites.' },
  { name: 'Entertainment & Music', emoji: '🪄', desc: 'Magic shows, puppet shows, games, and music playlists.' },
  { name: 'Photography', emoji: '📸', desc: 'Capture every beautiful smile and candid moment.' },
  { name: 'Return Gift Displays', emoji: '🎁', desc: 'Themed setups to display and distribute return gifts.' },
]

const MILESTONES = [
  { title: 'First Birthday Parties', emoji: '🍼', desc: 'Celebrate the precious first year with family and friends.' },
  { title: 'Toddler & Preschooler', emoji: '🧸', desc: 'Safe spaces and play zones perfect for active little feet.' },
  { title: 'School Friends\' Parties', emoji: '🎒', desc: 'Fun themed birthday parties designed for classmates.' },
  { title: 'Milestone Celebrations', emoji: '🎉', desc: 'Make those big single-digit numbers unforgettable.' },
  { title: 'Baby Showers & Namings', emoji: '👶', desc: 'Beautiful settings for welcoming the newest family member.' },
  { title: 'Family Gatherings', emoji: '👨‍👩‍👧‍👦', desc: 'Cosy celebration space where adults and kids bond seamlessly.' },
]

const USPs = [
  'Beautifully designed indoor venue',
  'Open-air extension for added flexibility',
  'Fresh in-house kids\' catering',
  'Theme-based celebrations',
  'Interactive live food stations',
  'Friendly hospitality team',
  'Flexible packages',
  'Convenient Gurgaon location',
  'Everything managed under one roof',
]

const ThemedPartyVenueSections = () => {
  return (
    <div className="space-y-12 md:space-y-16 mt-8 md:mt-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      {/* 1. More Than Just a Party Hall Section */}
      <section className="px-4 sm:px-0">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[6px_6px_0px_#333333] md:shadow-[10px_10px_0px_#333333]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Designed For Joy
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
                More Than Just a Party Hall
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Little Jalebis isn&apos;t a banquet hall that&apos;s adapted for children. Our venue has been designed specifically for kids&apos; celebrations.
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                From colourful décor and comfortable seating to delicious food and attentive service, every detail is planned around making birthdays enjoyable for children while ensuring parents can relax and celebrate alongside them.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-[#FFFDE7] border-4 border-[#333333] p-4 rounded-2xl shadow-[3px_3px_0px_#333333] hover:-rotate-1 transition-transform">
                  <span className="text-2xl">🎉</span>
                  <h3 className="mt-1 text-sm md:text-base font-black text-[#333333]">Kids-First Space</h3>
                  <p className="mt-1 font-bold text-[#333333]/70 text-[11px] md:text-xs leading-normal">
                    Safe, clean, play-friendly interiors with thoughtful child-friendly layouts and decor.
                  </p>
                </div>

                <div className="bg-[#E8F5E9] border-4 border-[#333333] p-4 rounded-2xl shadow-[3px_3px_0px_#333333] hover:rotate-1 transition-transform">
                  <span className="text-2xl">☕</span>
                  <h3 className="mt-1 text-sm md:text-base font-black text-[#333333]">Designed for Parents</h3>
                  <p className="mt-1 font-bold text-[#333333]/70 text-[11px] md:text-xs leading-normal">
                    Comfortable seating, welcoming vibes, and warm hospitality so parents can actually enjoy the milestone.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
              <video
                src="/videos/little_jalebies_party_venue_activity.mp4"
                autoPlay
                loop
                muted
                playsInline
                title="Kids playing and celebrating at Little Jalebis themed birthday party venue"
                aria-label="Kids playing and celebrating at Little Jalebis themed birthday party venue"
                className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] shadow-[6px_6px_0px_#333333] md:shadow-[10px_10px_0px_#333333]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Theme For Every Imagination Section */}
      <section className="px-4 sm:px-0">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            A Theme for Every <span className="text-[#F26522]">Imagination</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            Every child dreams of celebrating in their own special way. From magical princesses to space adventures, we bring their favourite stories to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto">
          {POPULAR_THEMES.map((theme) => (
            <motion.div
              key={theme.name}
              whileHover={{ scale: 1.05, rotate: (Math.random() > 0.5 ? 1.5 : -1.5) }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-2 border-[#333333] font-bold text-sm sm:text-base text-[#333333] cursor-default shadow-[3px_3px_0px_#333333] transition-all"
              style={{ backgroundColor: theme.color }}
            >
              <span>{theme.emoji}</span>
              <span>{theme.name}</span>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-6 md:mt-8 max-w-3xl mx-auto bg-white border-4 border-dashed border-[#F26522] rounded-[1.5rem] p-5 text-center shadow-[4px_4px_0px_#FFF9F2]">
          <p className="font-black text-[#333333] text-base md:text-lg">
            ✨ Have something unique in mind?
          </p>
          <p className="mt-1 font-bold text-[#333333]/70 text-xs md:text-sm">
            We love crafting completely customised themes to match your child&apos;s wildest dreams! Let&apos;s brainstorm together.
          </p>
        </div> */}
      </section>

      {/* 3. Fresh Food Section */}
      <section className="px-4 sm:px-0">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[6px_6px_0px_#333333] md:shadow-[10px_10px_0px_#333333]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 bg-[#FFF9F2] border-4 border-[#333333] rounded-3xl p-5 md:p-8 shadow-[6px_6px_0px_#FFCB05] space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍔</span>
                <div>
                  <h4 className="font-black text-[#333333] text-sm md:text-base">Kids-Approved Menu</h4>
                  <p className="font-bold text-[#333333]/60 text-xs md:text-sm">Colourful, mild, and fun-sized food items children love to eat.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍳</span>
                <div>
                  <h4 className="font-black text-[#333333] text-sm md:text-base">Live Food Stations</h4>
                  <p className="font-bold text-[#333333]/60 text-xs md:text-sm">Interactive waffle, pancake, or pizza stations to add live party action.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍃</span>
                <div>
                  <h4 className="font-black text-[#333333] text-sm md:text-base">Adult Options Too</h4>
                  <p className="font-bold text-[#333333]/60 text-xs md:text-sm">Delicious buffet options so grown-ups are just as happy.</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-4">
              <span className="inline-block bg-[#25D366] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Yummy & Fresh
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
                Fresh Food That Everyone Will Love
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                A beautiful venue deserves equally memorable food. Every celebration at Little Jalebis is complemented by our signature in-house catering, prepared fresh using premium ingredients.
              </p>

              <div className="mt-4 p-4 rounded-xl bg-[#E8F5E9] border-2 border-[#333333] shadow-[3px_3px_0px_#333333]">
                <h4 className="font-black text-[#333333] text-sm md:text-base">🔄 Quantity-Based Ordering</h4>
                <p className="mt-1 font-bold text-[#333333]/70 text-xs md:text-sm">
                  Order based exactly on your guest count. This reduces unnecessary food waste, gives you maximum flexibility, and keeps budgets simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Everything You Need in One Place Section */}
      {/* <section className="px-4 sm:px-0">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            Everything You Need in <span className="text-[#FFCB05] bg-[#333333] px-3 py-1 rounded-lg inline-block rotate-1">One Place</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            Planning a birthday becomes incredibly simple when handled by one experienced team. We coordinate the details so you can focus on the memories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {INCLUDED_SERVICES.map((srv, idx) => (
            <div
              key={srv.name}
              className="bg-white border-2 border-[#333333] p-5 rounded-2xl shadow-[4px_4px_0px_#333333] hover:-translate-y-1 transition-transform"
            >
              <span className="text-2xl">{srv.emoji}</span>
              <h4 className="mt-2 font-black text-[#333333] text-base md:text-lg">{srv.name}</h4>
              <p className="mt-1 font-bold text-[#333333]/60 text-xs leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* 5. Perfect for Every Milestone Section */}
      <section className="px-4 sm:px-0">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            Perfect for Every <span className="text-[#F26522]">Milestone</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            Our Kids Party House is thoughtfully structured to adapt to celebrations of all kinds and sizes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {MILESTONES.map((milestone) => (
            <div
              key={milestone.title}
              className="bg-white border-4 border-[#333333] p-5 rounded-[2rem] shadow-[4px_4px_0px_#FFCB05] flex items-start gap-4 hover:-rotate-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF9F2] border-2 border-[#333333] flex items-center justify-center text-2xl shrink-0">
                {milestone.emoji}
              </div>
              <div>
                <h4 className="font-black text-[#333333] text-base md:text-lg leading-tight">{milestone.title}</h4>
                <p className="mt-1 font-bold text-[#333333]/60 text-xs md:text-sm leading-relaxed">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ThemedPartyVenueSections
