'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('venues')

  const services = {
    venues: {
      title: "Dreamy Party Venues",
      tagline: "Where Imagination Meets Celebration",
      description: "Our venues are more than just rooms—they are immersive playgrounds designed for safe, high-energy fun. From soft-play corners to themed decor setups, we provide the perfect backdrop for your child's big day.",
      features: ["Themed Decor Packages", "Dedicated Party Hosts", "Safe & Clean Play Zones", "Sound & Lighting Systems"],
      cta: "View Our Locations",
      color: "#F26522",
      image: "🏠" 
    },
    catering: {
      title: "Gourmet Party Catering",
      tagline: "Deliciously Fun, Nutritiously Balanced",
      description: "Say goodbye to boring party food. We serve a mix of kid-approved favorites and sophisticated platters for the adults. Our kitchen focuses on fresh ingredients and playful presentation.",
      features: ["Custom Cake Design", "Live Food Counters", "Allergy-Friendly Options", "Adult Grazing Platters"],
      cta: "Download Menu",
      color: "#FFCB05",
      image: "🍕"
    },
    boxes: {
      title: "Fun Lunch Boxes",
      tagline: "Healthy Meals, Delivered in Style",
      description: "Perfect for school events, birthday picnics, or outdoor trips. Our lunch boxes are packed with love, nutrition, and a little surprise in every box to keep the kids excited about eating healthy.",
      features: ["Individual Portioning", "Eco-friendly Packaging", "Nut-Free Facilities", "Custom Branding Available"],
      cta: "Order Bulk Boxes",
      color: "#333333",
      image: "🍱"
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF9F2] pt-24 pb-20 px-6 md:px-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      {/* --- Header --- */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-[#333333] mb-4">
          Our <span className="text-[#F26522]">Services</span>
        </h1>
        <p className="text-xl font-bold opacity-70">Everything you need to host a legendary kids' party, all under one roof.</p>
      </header>

      {/* --- Tabs --- */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([id, service]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 shadow-[4px_4px_0px_#333333] active:translate-y-1 active:shadow-none ${
                activeTab === id 
                ? 'bg-[#F26522] text-white' 
                : 'bg-white text-[#333333] hover:bg-[#FFCB05]'
              }`}
            >
              {service.title.split(' ')[service.title.split(' ').length - 1]}
            </button>
          ))}
        </div>

        {/* --- Tab Content --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-4 border-[#333333] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-[12px_12px_0px_#FFCB05]"
          >
            {/* Visual Placeholder/Icon */}
            <div className="w-full md:w-1/3 aspect-square bg-[#FFF9F2] rounded-[2rem] flex items-center justify-center text-[8rem] border-2 border-dashed border-[#F26522]/30">
              {services[activeTab as keyof typeof services].image}
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3">
              <span className="text-[#F26522] font-black uppercase tracking-widest text-sm">
                {services[activeTab as keyof typeof services].tagline}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-[#333333]">
                {services[activeTab as keyof typeof services].title}
              </h2>
              <p className="text-lg font-bold opacity-80 leading-relaxed mb-8">
                {services[activeTab as keyof typeof services].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {services[activeTab as keyof typeof services].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFCB05] flex items-center justify-center text-xs font-black">✓</div>
                    <span className="font-bold text-[#333333]">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="w-full sm:w-auto px-10 py-4 bg-[#333333] text-white rounded-2xl font-bold text-lg hover:bg-[#F26522] transition-all transform hover:-rotate-1 active:scale-95"
              >
                {services[activeTab as keyof typeof services].cta}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Trust Section --- */}
      <div className="mt-24 max-w-4xl mx-auto bg-[#F26522] text-white p-10 rounded-[3rem] text-center border-4 border-[#333333]">
         <h3 className="text-3xl font-bold mb-4">Want a Custom Package?</h3>
         <p className="text-lg font-bold opacity-90 mb-8">We can mix and match all three services to create the ultimate party experience for your little one.</p>
         <button className="bg-white text-[#F26522] px-10 py-4 rounded-full font-black text-lg shadow-[4px_4px_0px_#333333] hover:translate-x-1">
            Chat with our Party Planner
         </button>
      </div>
    </div>
  )
}

export default ServicesPage