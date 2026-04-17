'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

import ServiceTabButton from '../components/ServiceTabButton'
import ServiceTabContent from '../components/ServiceTabContent'
import TrustSection from '../components/TrustSection'
import LocationSection from '../components/LocationSection'
import FoodBoxesMenu from '../components/FoodBoxesMenu'
import CateringProcess from '../components/CateringProcess'
import NotAPlayzone from '../components/NotAPlayZone'
import GalleryComponent from '../components/GalleryComponent'
import Faq from '../components/Faq'
import InstagramLink from '../components/InstagramLink'
import { getServicePath, SERVICE_KEYS, SERVICES, type ServiceKey } from './serviceData'

interface ServicesClientProps {
  serviceKey: ServiceKey
}

const ServicesClient = ({ serviceKey }: ServicesClientProps) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<ServiceKey>(serviceKey)
  const [isFoodBoxesOpen, setIsFoodBoxesOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setActiveTab(serviceKey)
  }, [serviceKey])

  const handleScrollToLocation = () => {
    const target = document.getElementById('location-section')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const secondaryCtasByTab: Record<ServiceKey, { label: string; href: string }[]> = {
    venue: [{ label: 'Book Venue', href: '/contact' }],
    catering: [{ label: 'Get a Quotation', href: '/contact' }],
    boxes: [{ label: 'Order Now', href: '/contact' }],
  }

  const routeToService = (nextTab: ServiceKey) => {
    setActiveTab(nextTab)
    router.push(getServicePath(nextTab))
  }

  const switchTab = (step: number) => {
    const currentIndex = SERVICE_KEYS.indexOf(activeTab)
    const nextIndex = (currentIndex + step + SERVICE_KEYS.length) % SERVICE_KEYS.length
    routeToService(SERVICE_KEYS[nextIndex])
  }

  const activeService = SERVICES[activeTab]
  const activeServiceFaqs = 'faqs' in activeService ? activeService.faqs : undefined

  return (
    <div className="min-h-screen bg-[#FFF9F2] pt-20 md:pt-24 pb-5 md:pb-5 px-4 sm:px-6 md:px-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      
      {/* --- 1. Header --- */}
      <header className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#333333] mb-3 md:mb-4 leading-tight">
          Our <span className="text-[#F26522]">Services</span>
        </h1>
        <p className="text-sm sm:text-base md:text-xl font-bold opacity-70">Everything you need to host a legendary kids' party, all under one roof.</p>
      </header>

      {/* --- 2. Tabs --- */}
      <div className="max-w-5xl mx-auto">
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(SERVICES).map(([id, service]) => (
            <ServiceTabButton
              key={id}
              title={service.tabTitle}
              active={activeTab === id}
              onClick={() => routeToService(id as ServiceKey)}
            />
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-3 mb-10">
          <button
            onClick={() => switchTab(-1)}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#F26522] border-2 border-[#333333] text-white shadow-[3px_3px_0px_#333333] sm:shadow-[4px_4px_0px_#333333] hover:bg-[#FFCB05] hover:text-[#333333] active:translate-y-1 active:shadow-none transition-all"
            aria-label="Previous service"
          >
            <span className="text-lg sm:text-xl font-black">‹</span>
          </button>

          <button
            type="button"
            className="px-5 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl transition-all duration-300 shadow-[3px_3px_0px_#333333] sm:shadow-[4px_4px_0px_#333333] active:translate-y-1 active:shadow-none bg-[#F26522] text-white"
          >
            {SERVICES[activeTab].tabTitle}
          </button>

          <button
            onClick={() => switchTab(1)}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#F26522] border-2 border-[#333333] text-white shadow-[3px_3px_0px_#333333] sm:shadow-[4px_4px_0px_#333333] hover:bg-[#FFCB05] hover:text-[#333333] active:translate-y-1 active:shadow-none transition-all"
            aria-label="Next service"
          >
            <span className="text-lg sm:text-xl font-black">›</span>
          </button>
        </div>

        {/* --- 3. Tab Content --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <>
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

              {activeTab === 'venue' && (
                <div className="mt-8 md:mt-12">
                  <NotAPlayzone />
                </div>
              )}
              {activeTab === 'catering' && (
                <div className="mt-8 md:mt-12">
                  <CateringProcess />
                </div>
              )}
            </>
          </motion.div>
        </AnimatePresence>

        {/* --- 4. Location Section --- */}
        <div id="location-section">
          <LocationSection location={SERVICES[activeTab].location} />
        </div>
      </div>

      {/* --- 5. New Gallery Section --- */}
      <div className="mt-10 md:mt-16">
        <GalleryComponent category={activeTab === 'venue' ? 'venue' : 'catering'} />
      </div>

      {/* --- 6. Trust Section --- */}
      <div className="mt-10 md:mt-16">
        <TrustSection />
      </div>

      {/* --- 7. Instagram Section --- */}
      <div className="mt-10 md:mt-16 max-w-6xl mx-auto">
        <InstagramLink />
      </div>


      {/* --- 8. FAQ Section --- */}
      {activeServiceFaqs && (
        <div className="mt-10 md:mt-16">
          <Faq
            faqs={activeServiceFaqs}
            title={activeService.title}
          />
        </div>
      )}

      {/* --- Portal for Food Boxes Menu --- */}
      {isFoodBoxesOpen && isMounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 py-8"
            onClick={() => setIsFoodBoxesOpen(false)}
          >
            <div
              className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <button
                  type="button"
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

export default ServicesClient