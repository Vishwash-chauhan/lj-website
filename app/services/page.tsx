'use client'

import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import ServiceTabButton from '../components/ServiceTabButton'
import ServiceTabContent from '../components/ServiceTabContent'
import TrustSection from '../components/TrustSection'
import LocationSection from '../components/LocationSection'

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('venue')

  const services = {
    venue: {
      title: "Dreamy Party Venue",
      tagline: "Where Imagination Meets Celebration",
      description: "Our venue are more than just rooms—they are immersive playgrounds designed for safe, high-energy fun. From soft-play corners to themed decor setups, we provide the perfect backdrop for your child's big day.",
      features: ["Themed Decor Packages", "Dedicated Party Hosts", "Safe & Clean Play Zones", "Sound & Lighting Systems"],
      cta: "View Our Locations",
      color: "#F26522",
      image: "🏠",
      location: {
        name: "Little Jalebis HQ",
        address: "456 Food Ave, Cityville",
        mapUrl: "https://maps.app.goo.gl/7YjPaUq7rVTPLbf57",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448438.52523130283!2d76.84306747170939!3d28.586994984112522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca7759edc3c0c6f%3A0x40987779a61a0f66!2sLittle%20Jalebis%20-%20Kids%20Catering%20%26%20Delivery%20Co.!5e0!3m2!1sen!2sin!4v1771054463453!5m2!1sen!2sin"
      }
    },
    catering: {
      title: "Gourmet Party Catering",
      tagline: "Deliciously Fun, Nutritiously Balanced",
      description: "Say goodbye to boring party food. We serve a mix of kid-approved favorites and sophisticated platters for the adults. Our kitchen focuses on fresh ingredients and playful presentation.",
      features: ["Custom Cake Design", "Live Food Counters", "Allergy-Friendly Options", "Adult Grazing Platters"],
      cta: "Download Menu",
      color: "#FFCB05",
      image: "🍕",
      location: {
        name: "Little Jalebis HQ",
        address: "456 Food Ave, Cityville",
        mapUrl: "https://maps.app.goo.gl/7YjPaUq7rVTPLbf57",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448438.52523130283!2d76.84306747170939!3d28.586994984112522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca7759edc3c0c6f%3A0x40987779a61a0f66!2sLittle%20Jalebis%20-%20Kids%20Catering%20%26%20Delivery%20Co.!5e0!3m2!1sen!2sin!4v1771054463453!5m2!1sen!2sin"
      }
    },
    boxes: {
      title: "Fun Lunch Boxes",
      tagline: "Healthy Meals, Delivered in Style",
      description: "Perfect for school events, birthday picnics, or outdoor trips. Our lunch boxes are packed with love, nutrition, and a little surprise in every box to keep the kids excited about eating healthy.",
      features: ["Individual Portioning", "Eco-friendly Packaging", "Nut-Free Facilities", "Custom Branding Available"],
      cta: "Order Bulk Boxes",
      color: "#333333",
      image: "🍱",
      location: null
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
            <ServiceTabButton
              key={id}
              title={service.title.split(' ')[service.title.split(' ').length - 1]}
              active={activeTab === id}
              onClick={() => setActiveTab(id)}
            />
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
          >
            <ServiceTabContent
              image={services[activeTab as keyof typeof services].image}
              tagline={services[activeTab as keyof typeof services].tagline}
              title={services[activeTab as keyof typeof services].title}
              description={services[activeTab as keyof typeof services].description}
              features={services[activeTab as keyof typeof services].features}
              cta={services[activeTab as keyof typeof services].cta}
            />
          </motion.div>
        </AnimatePresence>

        {/* --- Location Section --- */}
        <LocationSection location={services[activeTab as keyof typeof services].location} />
      </div>

      {/* --- Trust Section --- */}
      <TrustSection />
    </div>
  )
}

export default ServicesPage