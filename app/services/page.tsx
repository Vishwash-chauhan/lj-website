'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createPortal } from 'react-dom'

import { motion, AnimatePresence } from 'framer-motion'
import ServiceTabButton from '../components/ServiceTabButton'
import ServiceTabContent from '../components/ServiceTabContent'
import TrustSection from '../components/TrustSection'
import LocationSection from '../components/LocationSection'
import FoodBoxesMenu from '../components/FoodBoxesMenu'

const SERVICES = {
    venue: {
      tabTitle: "Party Venue",
      title: "Dreamy Party Venue",
      tagline: "Where Imagination Meets Celebration",
      description: "Our venue are more than just rooms—they are immersive playgrounds designed for safe, high-energy fun. From soft-play corners to themed decor setups, we provide the perfect backdrop for your child's big day.",
      features: ["Themed Decor Packages", "Dedicated Party Hosts", "Safe & Clean Play Zones", "Sound & Lighting Systems"],
      cta: "View Our Locations",
      color: "#F26522",
      image: "🏠",
      location: {
        type: "Party Venue",
        name: "Little Jalebis Party Venue",
        address: "17, Lower Ground Floor, Arjun Marg, DLF Phase 1, Gurugram",
        heading: "Visit Our",
        subheading: "Come over for a tasting or to plan your next event!",
        mapUrl: "https://maps.app.goo.gl/7YjPaUq7rVTPLbf57",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448438.52523130283!2d76.84306747170939!3d28.586994984112522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca7759edc3c0c6f%3A0x40987779a61a0f66!2sLittle%20Jalebis%20-%20Kids%20Catering%20%26%20Delivery%20Co.!5e0!3m2!1sen!2sin!4v1771054463453!5m2!1sen!2sin"
      }
    },
    catering: {
      tabTitle: "Catering",
      title: "Gourmet Party Catering",
      tagline: "Deliciously Fun, Nutritiously Balanced",
      description: "Fully Customisable Catering Options. Our menus are designed keeping children in mind — kid-friendly, hygienic, and flavour-balanced. Our kitchen focuses on fresh ingredients and playful presentation.",
      features: ["Fully Customisable", "Live Food Counters", "Allergy-Friendly Options", "Hygienic"],
      cta: "View Menu",
      color: "#FFCB05",
      image: "🍕",
      location: {
        type: "Head Office",
        name: "Little Jalebis HQ",
        address: "E 5 Kalindi Colony, Near New Friends Colony, New Delhi",
        heading: "Visit Our",
        subheading: "Come over for a party tour or to plan your big day!",
        mapUrl: "https://maps.app.goo.gl/7YjPaUq7rVTPLbf57",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448438.52523130283!2d76.84306747170939!3d28.586994984112522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca7759edc3c0c6f%3A0x40987779a61a0f66!2sLittle%20Jalebis%20-%20Kids%20Catering%20%26%20Delivery%20Co.!5e0!3m2!1sen!2sin!4v1771054463453!5m2!1sen!2sin"
      }
    },
    boxes: {
      tabTitle: "Food Boxes",
      title: "Fun Food Boxes",
      tagline: "Healthy Meals, Delivered in Style",
      description: "Perfect for school events, birthday picnics, or outdoor trips. Our lunch boxes are packed with love, nutrition, and playful presentation to make healthy bites feel like a treat.",
      features: ["Individual Portioning", "Hygienic Packaging", "Fully Customisable", "On-Demand Delivery"],
      cta: "View Food Box Menu",
      color: "#333333",
      image: "🍱",
      location: null
    }
  }

const ServicesPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<keyof typeof SERVICES>('venue')
  const [isFoodBoxesOpen, setIsFoodBoxesOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && tab in SERVICES) {
      setActiveTab(tab as keyof typeof SERVICES)
    }
  }, [searchParams])

  const handleScrollToLocation = () => {
    const target = document.getElementById('location-section')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const secondaryCtasByTab: Record<keyof typeof SERVICES, { label: string; href: string }[]> = {
    venue: [{ label: 'Book Venue', href: '/contact' }],
    catering: [{ label: 'Get a Quotation', href: '/contact' }],
    boxes: [{ label: 'Order Now', href: '/contact' }],
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
          {Object.entries(SERVICES).map(([id, service]) => (
            <ServiceTabButton
              key={id}
              title={service.tabTitle}
              active={activeTab === id}
              onClick={() => setActiveTab(id as keyof typeof SERVICES)}
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
              image={SERVICES[activeTab].image}
              tagline={SERVICES[activeTab].tagline}
              title={SERVICES[activeTab].title}
              description={SERVICES[activeTab].description}
              features={SERVICES[activeTab].features}
              cta={SERVICES[activeTab].cta}
              secondaryCtas={secondaryCtasByTab[activeTab]}
              onCtaClick={
                activeTab === 'boxes'
                  ? () => setIsFoodBoxesOpen(true)
                  : activeTab === 'venue'
                    ? handleScrollToLocation
                    : activeTab === 'catering'
                      ? () => router.push('/menu')
                      : undefined
              }
            />
          </motion.div>
        </AnimatePresence>

        {/* --- Location Section --- */}
        <LocationSection location={activeTab === 'catering' ? null : SERVICES[activeTab].location} />
      </div>

      {/* --- Trust Section --- */}
      <TrustSection />

      {isFoodBoxesOpen && isMounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-8"
            onClick={() => setIsFoodBoxesOpen(false)}
          >
            <div
              className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <button
                  type="button"
                  aria-label="Close food boxes menu"
                  className="absolute right-4 top-4 z-10 rounded-full border-2 border-[#333333] bg-white px-3 py-1 text-sm font-black text-[#333333] hover:bg-[#FFCB05]"
                  onClick={() => setIsFoodBoxesOpen(false)}
                >
                  Close
                </button>
                <FoodBoxesMenu />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default ServicesPage