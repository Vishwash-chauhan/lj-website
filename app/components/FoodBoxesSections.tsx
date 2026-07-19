'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const BOX_ITEMS = [
  { name: 'Mini Burgers', emoji: '🍔' },
  { name: 'Mini Pizzas', emoji: '🍕' },
  { name: 'Pasta', emoji: '🍝' },
  { name: 'Noodles', emoji: '🍜' },
  { name: 'Sandwiches', emoji: '🥪' },
  { name: 'Wraps', emoji: '🌯' },
  { name: 'French Fries', emoji: '🍟' },
  { name: 'Fresh Fruit', emoji: '🍎' },
  { name: 'Brownies', emoji: '🍫' },
  { name: 'Cupcakes', emoji: '🧁' },
  { name: 'Juice Boxes', emoji: '🧃' },
  { name: 'Cookies', emoji: '🍪' },
]

const OCCASIONS = [
  { title: 'Birthday Parties', emoji: '🎂', desc: 'A clean, mess-free individual dining option children love.' },
  { title: 'School Events', emoji: '🎒', desc: 'Individually packed, easy-to-distribute boxes for classrooms.' },
  { title: 'Playdates & Home Parties', emoji: '🧸', desc: 'No cleanup or kitchen prep needed – just open and enjoy.' },
  { title: 'Picnics & Outdoors', emoji: '🌳', desc: 'Hygienic, spill-proof packaging perfect for park or lawn play.' },
  { title: 'Return Meals', emoji: '🎁', desc: 'A thoughtful, ready-to-eat meal box for guests to take home.' },
  { title: 'Travel & Trips', emoji: '✈️', desc: 'Portable, travel-friendly boxes to keep young travellers satisfied.' },
]

const CUSTOMISATIONS = [
  { title: 'Meal Combinations', emoji: '🍱', desc: 'Mix and match mains, snacks, and sweet treats.' },
  { title: 'Snacks & Mini Meals', emoji: '🥟', desc: 'Sized just right for lighter appetites and toddlers.' },
  { title: 'Dessert Selections', emoji: '🍰', desc: 'Large cookies, muffins, donuts, or brownies.' },
  { title: 'Healthy Add-ons', emoji: '🍃', desc: 'Fresh fruits and wholesome makhanas.' },
  { title: 'Beverage Options', emoji: '🥤', desc: 'Juice boxes, fresh juices, and fun mocktails.' },
  { title: 'Dietary Adjustments', emoji: '🌱', desc: 'Special vegetarian, Jain, or allergen-free options.' },
]

const FoodBoxesSections = () => {
  return (
    <div className="space-y-12 md:space-y-16 mt-8 md:mt-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      {/* 1. Philosophy: Why Choose Food Boxes */}
      <section className="w-full">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-16 shadow-[7px_7px_0px_#333333] md:shadow-[12px_12px_0px_#333333]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Zero Hassle
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
                Why Choose Food Boxes?
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Not every celebration needs a buffet. Sometimes, the simplest ideas create the happiest memories.
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Every child receives their own freshly packed meal, making serving quick, organised, and hassle-free. There&apos;s no waiting in buffet queues, no juggling plates, and zero food waste.
              </p>
            </div>

            <div className="bg-[#FFFDE7] border-4 border-[#333333] p-6 md:p-8 rounded-[2rem] shadow-[4px_4px_0px_#333333] text-center">
              <span className="text-5xl">🎁</span>
              <h3 className="mt-3 text-xl md:text-2xl font-black text-[#333333]">Hygienic & Fresh</h3>
              <p className="mt-2 font-bold text-[#333333]/70 text-sm md:text-base leading-relaxed">
                Every box is prepared fresh in our kitchen using quality ingredients, then packed with care to maintain hygiene, presentation, and warmth until serving time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Designed Especially for Kids */}
      <section className="w-full">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-16 shadow-[7px_7px_0px_#333333] md:shadow-[12px_12px_0px_#333333]">
          <span className="inline-block bg-[#FFCB05] border-2 border-[#333333] text-[#333333] px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider">
            Kids Favourites
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
            Designed Especially for Kids
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl">
            Children enjoy meals that are colourful, familiar, and easy to hold. Each box is packed with kid-approved treats, prepared fresh using quality ingredients:
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {BOX_ITEMS.map((item) => (
              <div
                key={item.name}
                className="bg-[#FFF9F2] border-2 border-[#333333] p-3 sm:p-4 rounded-xl shadow-[3px_3px_0px_#333333] flex items-center gap-2.5 hover:-translate-y-0.5 transition-transform"
              >
                <span className="text-xl sm:text-2xl shrink-0">{item.emoji}</span>
                <span className="font-black text-[#333333] text-xs sm:text-sm">{item.name}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm font-black text-[#F26522] uppercase tracking-wide">
            ★ Customise combinations based on the age group and party theme!
          </p>
        </div>
      </section>

      {/* 3. Customise Your Box */}
      <section className="w-full">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            Customise <span className="text-[#F26522]">Your Box</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            No two celebrations are the same. Pick from our customized tiers, snack choices, and drink selections to create the perfect box.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {CUSTOMISATIONS.map((custom) => (
            <div
              key={custom.title}
              className="bg-white border-4 border-[#333333] p-5 rounded-[2rem] shadow-[4px_4px_0px_#FFCB05] flex items-start gap-4 hover:-rotate-1 transition-transform"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF9F2] border-2 border-[#333333] flex items-center justify-center text-xl shrink-0">
                {custom.emoji}
              </div>
              <div>
                <h4 className="font-black text-[#333333] text-base md:text-lg leading-tight">{custom.title}</h4>
                <p className="mt-1 font-bold text-[#333333]/65 text-xs md:text-sm leading-relaxed">{custom.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Simple to Serve. Easy to Enjoy. */}
      {/* <section className="w-full">
        <div className="bg-[#E8F5E9] border-4 border-[#333333] rounded-[2rem] p-6 md:p-10 shadow-[6px_6px_0px_#333333] flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-16 h-16 rounded-full bg-white border-4 border-[#333333] flex items-center justify-center text-3xl shrink-0 shadow-[3px_3px_0px_#333333] rotate-3">
            🍱
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#333333] leading-tight">
              Simple to Serve. Easy to Enjoy.
            </h3>
            <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/80 leading-relaxed">
              Our food boxes are designed to make hosting effortless for parents:
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5 font-black text-xs sm:text-sm text-[#333333]/80">
              <span className="bg-white border-2 border-[#333333] px-3 py-1 rounded-md">❌ No buffet setup</span>
              <span className="bg-white border-2 border-[#333333] px-3 py-1 rounded-md">🚶 No serving queues</span>
              <span className="bg-white border-2 border-[#333333] px-3 py-1 rounded-md">📦 No complicated logistics</span>
            </div>
            <p className="mt-3.5 text-xs sm:text-sm font-bold text-[#333333]/65">
              Just open, serve, and let the children enjoy. It is one of the easiest ways to keep an event organized while ensuring every child receives a fresh, tasty meal.
            </p>
          </div>
        </div>
      </section>  */}

      {/* 5. Perfect for Every Occasion */}
      <section className="w-full">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            Perfect for Every <span className="text-[#FFCB05] bg-[#333333] px-3 py-1 rounded-lg inline-block -rotate-1">Occasion</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            Whether you are ordering for 15 children or 150, we will help you choose the right combination of portion sizes:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {OCCASIONS.map((occ) => (
            <div
              key={occ.title}
              className="bg-white border-4 border-[#333333] p-5 rounded-[2rem] shadow-[4px_4px_0px_#FFCB05] flex items-start gap-4 hover:rotate-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF9F2] border-2 border-[#333333] flex items-center justify-center text-2xl shrink-0">
                {occ.emoji}
              </div>
              <div>
                <h4 className="font-black text-[#333333] text-base md:text-lg leading-tight">{occ.title}</h4>
                <p className="mt-1 font-bold text-[#333333]/65 text-xs md:text-sm leading-relaxed">{occ.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Call to Action */}
      {/* <section className="w-full">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-16 text-center shadow-[7px_7px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05] max-w-4xl mx-auto">
          <span className="text-3xl md:text-4xl">🥪</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
            Let&apos;s Pack Happiness into Your Party
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed max-w-2xl mx-auto">
            Whether it is a birthday, playdate, or a classroom school celebration, Little Jalebis Food Boxes combine quality, convenience, and delicious flavors in one box.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className="cta-button"
              onClick={() => {
                const clickEvent = new CustomEvent('open-food-boxes')
                window.dispatchEvent(clickEvent)
              }}
            >
              Order Food Boxes
            </button>
            <a
              href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis!%20I%20want%20to%20order%20Kids%20Food%20Boxes%20for%20a%20party."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-[#333333] font-bold text-[#333333] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              WhatsApp to Customise
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default FoodBoxesSections
