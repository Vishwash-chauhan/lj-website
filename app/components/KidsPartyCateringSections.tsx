'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const KIDS_FAVOURITES = [
  { name: 'Mini Burgers', emoji: '🍔' },
  { name: 'Mini Pizzas', emoji: '🍕' },
  { name: 'Pasta', emoji: '🍝' },
  { name: 'Hakka Noodles', emoji: '🍜' },
  { name: 'French Fries', emoji: '🍟' },
  { name: 'Cheese Corn Balls', emoji: '🧀' },
  { name: 'Veg Fingers', emoji: '🍢' },
  { name: 'Sandwiches', emoji: '🥪' },
  { name: 'Wraps', emoji: '🌯' },
  { name: 'Brownies', emoji: '🍫' },
  { name: 'Cupcakes', emoji: '🧁' },
  { name: 'Fresh Juices', emoji: '🍹' },
  { name: 'Mocktails', emoji: '🥤' },
]

const ADULT_OPTIONS = [
  { name: 'North Indian Classics', desc: 'Rich, authentic regional favourites cooked with premium ingredients.' },
  { name: 'Continental Cuisine', desc: 'Delicious pastas, garlic breads, and modern bakes adults enjoy.' },
  { name: 'Oriental Specialities', desc: 'Flavourful noodles, stir-fries, and classic appetisers.' },
  { name: 'Jain & Custom Menus', desc: 'Dedicated vegetarian, Jain, and allergen-free preparations.' },
]

const LIVE_STATIONS = [
  { name: 'Waffles', emoji: '🧇', color: '#FFFDE7', shadow: '#FFF59D' },
  { name: 'Mini Pancakes', emoji: '🥞', color: '#FFF3E0', shadow: '#FFE0B2' },
  { name: 'Churros', emoji: '🥖', color: '#F1F8E9', shadow: '#DCEDC8' },
  { name: 'Cotton Candy', emoji: '☁️', color: '#FCE4EC', shadow: '#F48FB1' },
  { name: 'Popcorn', emoji: '🍿', color: '#FFFDE7', shadow: '#FFF59D' },
  { name: 'Chocolate Fountain', emoji: '🍫', color: '#EFEBE9', shadow: '#D7CCC8' },
  { name: 'Potato Spiral', emoji: '🌀', color: '#FFF3E0', shadow: '#FFE0B2' },
  { name: 'Ice Cream Counter', emoji: '🍦', color: '#E0F7FA', shadow: '#B2EBF2' },
]

const CATERING_USPS = [
  { title: 'Freshly Prepared', desc: 'Every single order is cooked fresh for your event using high-quality ingredients.', emoji: '🍃' },
  { title: 'Quantity-Based Ordering', desc: 'Order according to your actual guest count. No unnecessary minimum guarantees or food waste.', emoji: '🔄' },
  { title: 'Designed Around Kids', desc: 'Menus specifically crafted for children\'s taste buds, with equally delicious options for adults.', emoji: '👧' },
  { title: 'Beautiful Presentation', desc: 'Food should look as good as it tastes. We present every dish to complement your party theme.', emoji: '✨' },
  { title: 'Hospitality-Led Service', desc: 'Our trained serving staff believes professional service is just as vital as great food.', emoji: '🤝' },
]

const CATERING_LOCATIONS = [
  { city: 'New Delhi', emoji: '🏛️' },
  { city: 'Gurgaon', emoji: '🏢' },
  { city: 'Noida', emoji: '🎡' },
  { city: 'Faridabad', emoji: '🌳' },
  { city: 'Ghaziabad', emoji: '🏗️' },
]

const CATERING_MILESTONES = [
  { title: 'First Birthday Parties', emoji: '🍼', desc: 'Curated menus for a milestone first birthday with family & close friends.' },
  { title: 'Toddler Birthdays', emoji: '🧸', desc: 'Soft, easy-to-hold, and completely safe bites for active toddlers.' },
  { title: 'Preschool Celebrations', emoji: '🎒', desc: 'Fun-sized portions ideal for school-going groups and classmates.' },
  { title: 'Home Birthday Parties', emoji: '🏠', desc: 'Hassle-free setup in your living room or garden space.' },
  { title: 'Clubhouse & Farmhouses', emoji: '🌳', desc: 'End-to-end service for medium to large-scale club and estate events.' },
  { title: 'Milestone Birthdays', emoji: '🎉', desc: 'Vibrant catering, live stations, and bespoke menus for single-digit milestones.' },
]

const KidsPartyCateringSections = () => {
  return (
    <div className="space-y-12 md:space-y-16 mt-8 md:mt-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      {/* 1. Philosophy: Made for Kids */}
      <section className="px-4 sm:px-0">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[6px_6px_0px_#333333] md:shadow-[10px_10px_0px_#333333]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Our Philosophy
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
                Catering That&apos;s Made for Kids, Not Adapted for Kids
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Children don&apos;t eat like adults. They prefer colourful, familiar, bite-sized food that&apos;s easy to hold, fun to eat, and beautifully presented.
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                That&apos;s why our menus are created specifically for children instead of simply offering smaller portions of an adult buffet. Every menu is customized based on your child&apos;s age, guest count, and party style.
              </p>
            </div>

            <div className="w-full h-full min-h-[300px] relative rounded-[2rem] overflow-hidden border-4 border-[#333333] shadow-[6px_6px_0px_#FFCB05] flex">
              <img
                src="/images/services/Catering_Img_6_c0lus9.avif"
                alt="Kids birthday party catering setup by Little Jalebis in Delhi NCR"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Menu Comparison Section: Kids' Favourites vs Adults' Options */}
      <section className="px-4 sm:px-0">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Kids Favourites */}
          <div className="bg-[#FFFDE7] border-4 border-[#333333] p-6 md:p-10 rounded-[2rem] shadow-[6px_6px_0px_#333333] flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#FFCB05] border-2 border-[#333333] text-[#333333] px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider">
                Yummy Bites
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl md:text-4xl font-black text-[#333333]">Kids&apos; Favourites</h3>
              <p className="mt-2 text-xs sm:text-sm font-bold text-[#333333]/70">
                Kid-approved dishes prepared with mild, delicious seasoning and presented in fun, finger-sized formats:
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {KIDS_FAVOURITES.map((item) => (
                  <div
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-[#333333] bg-white font-bold text-xs sm:text-sm text-[#333333] shadow-[2px_2px_0px_#333333]"
                  >
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs font-black text-[#F26522] uppercase tracking-wide">
              ★ Custom options & theme pairings are always available!
            </p>
          </div>

          {/* Adult Options */}
          <div className="bg-[#E8F5E9] border-4 border-[#333333] p-6 md:p-10 rounded-[2rem] shadow-[6px_6px_0px_#333333] flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#25D366] text-white px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#333333]">
                For The Grown-Ups
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl md:text-4xl font-black text-[#333333]">Delicious Options for Adults</h3>
              <p className="mt-2 text-xs sm:text-sm font-bold text-[#333333]/70">
                A kids&apos; birthday is also a gathering of family and friends. We prepare curated menus for adults using quality ingredients and professional hospitality:
              </p>

              <div className="mt-6 space-y-3.5">
                {ADULT_OPTIONS.map((item) => (
                  <div key={item.name} className="flex gap-3">
                    <span className="text-[#25D366] font-black text-lg shrink-0 mt-0.5">✓</span>
                    <div>
                      <h4 className="font-black text-[#333333] text-sm md:text-base leading-tight">{item.name}</h4>
                      <p className="font-bold text-[#333333]/65 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs font-black text-[#333333]/70 uppercase tracking-wide">
              🌱 Vegetarian, Jain, and special dietary menus available.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Live Food Stations Section */}
      <section className="px-4 sm:px-0">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            Interactive <span className="text-[#F26522]">Live Food Stations</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            Live interactive stations bring excitement and sensory joy to every party. Watch hot, fresh delights being prepared in front of your guests!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {LIVE_STATIONS.map((station) => (
            <motion.div
              key={station.name}
              whileHover={{ scale: 1.04, rotate: (Math.random() > 0.5 ? 1 : -1) }}
              className="bg-white border-2 border-[#333333] p-4 rounded-2xl shadow-[4px_4px_0px_#333333] text-center transition-all flex flex-col items-center justify-center"
              style={{ backgroundColor: station.color }}
            >
              <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#333333] flex items-center justify-center text-2xl shadow-[2px_2px_0px_#333333]">
                {station.emoji}
              </div>
              <h4 className="mt-3 font-black text-[#333333] text-sm md:text-base leading-tight">{station.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Why Parents Love Our Catering */}
      {/* <section className="px-4 sm:px-0">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[6px_6px_0px_#333333] md:shadow-[10px_10px_0px_#333333]">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
              Why Parents <span className="text-[#F26522]">Love</span> Our Catering
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATERING_USPS.slice(0, 3).map((usp) => (
              <div key={usp.title} className="bg-[#FFF9F2] border-2 border-[#333333] p-5 rounded-2xl shadow-[4px_4px_0px_#FFCB05]">
                <div className="w-10 h-10 rounded-lg bg-white border-2 border-[#333333] flex items-center justify-center text-xl shadow-[2px_2px_0px_#333333]">
                  {usp.emoji}
                </div>
                <h4 className="mt-3 font-black text-[#333333] text-base md:text-lg">{usp.title}</h4>
                <p className="mt-1.5 font-bold text-[#333333]/60 text-xs md:text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
            {CATERING_USPS.slice(3).map((usp) => (
              <div key={usp.title} className="bg-[#FFF9F2] border-2 border-[#333333] p-5 rounded-2xl shadow-[4px_4px_0px_#F26522]">
                <div className="w-10 h-10 rounded-lg bg-white border-2 border-[#333333] flex items-center justify-center text-xl shadow-[2px_2px_0px_#333333]">
                  {usp.emoji}
                </div>
                <h4 className="mt-3 font-black text-[#333333] text-base md:text-lg">{usp.title}</h4>
                <p className="mt-1.5 font-bold text-[#333333]/60 text-xs md:text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 5. Where We Cater Section */}
      {/* <section className="px-4 sm:px-0">
        <div className="bg-[#E0F7FA] border-4 border-[#333333] rounded-[2rem] p-6 md:p-10 shadow-[6px_6px_0px_#333333] flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-16 h-16 rounded-full bg-white border-4 border-[#333333] flex items-center justify-center text-3xl shrink-0 shadow-[3px_3px_0px_#333333] rotate-3">
            🚚
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#333333] leading-tight">
              Where We Cater
            </h3>
            <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/80 leading-relaxed">
              We cater birthday parties and children&apos;s celebrations across the entire Delhi NCR region:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CATERING_LOCATIONS.map((loc) => (
                <div
                  key={loc.city}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-[#333333] bg-white text-xs sm:text-sm font-black text-[#333333] shadow-[2px_2px_0px_#333333]"
                >
                  <span>{loc.emoji}</span>
                  <span>{loc.city}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs sm:text-sm font-bold text-[#333333]/65">
              🏡 Whether your celebration is in a **home**, a **clubhouse**, a **farmhouse**, a **community hall**, or another event venue, our team delivers the same premium taste, presentation, and hospitality.
            </p>
          </div>
        </div>
      </section> */}

      {/* 6. Perfect for Every Celebration (Milestones) */}
      <section className="px-4 sm:px-0">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333]">
            Perfect for Every <span className="text-[#FFCB05] bg-[#333333] px-3 py-1 rounded-lg inline-block -rotate-1">Celebration</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base font-bold text-[#333333]/70 max-w-2xl mx-auto">
            From intimate weekday family dinners to massive weekend themed classmate gatherings:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {CATERING_MILESTONES.map((item) => (
            <div
              key={item.title}
              className="bg-white border-4 border-[#333333] p-5 rounded-[2rem] shadow-[4px_4px_0px_#FFCB05] flex items-start gap-4 hover:-rotate-1 transition-transform"
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
      </section>

      {/* 7. Call to Action */}
      {/* <section className="px-4 sm:px-0">
        <div className="bg-white border-4 border-[#333333] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-center shadow-[8px_8px_0px_#FFCB05] md:shadow-[10px_10px_0px_#FFCB05] max-w-4xl mx-auto">
          <span className="text-3xl md:text-4xl">🍕</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
            Ready to Plan the Perfect Kids Birthday Menu?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed max-w-2xl mx-auto">
            View our interactive menu or contact our party planning team to curate a custom package designed around your guests, dates, and budget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="cta-button">
              View Our Full Menu
            </Link>
            <a
              href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis!%20I%20want%20to%20get%20a%20catering%20quote%20for%20a%20kids%20party."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-[#333333] font-bold text-[#333333] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              WhatsApp for Free Quote
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default KidsPartyCateringSections
