'use client'

import React, { useEffect, useState } from 'react'
import CategoryHeader from './CategoryHeader'
import { MenuItem, menuItems, menuCategories as categories } from '@/lib/menuData'

function formatLabel(label: string): string {
  label = label.replace(/\s*-\s*/, ' - ')
  const parts = label.split(' - ')
  const base = parts[0]
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
  if (parts[1]) {
    const veg = parts[1].toLowerCase()
    const vegFormatted = veg === 'non-veg' ? 'Non-Veg' : veg === 'veg' ? 'Veg' : parts[1]
    return base + ' - ' + vegFormatted
  }
  return base
}

function parseCategoryLabel(label: string): { base: string; veg: string | null } {
  const m = label.match(/(.+?)(?:\s*-\s*(VEG|NON-VEG))?$/i)
  const base = m?.[1]?.trim() || label
  const veg = m?.[2]?.toUpperCase() || null
  return { base, veg }
}

function matchesItem(item: MenuItem, label: string): boolean {
  const { base, veg } = parseCategoryLabel(label)
  if (item.Category.toLowerCase() !== base.toLowerCase()) return false
  if (!veg) return true
  if (veg === 'VEG') return !!(item.VegNonVeg && item.VegNonVeg.toLowerCase().startsWith('veg'))
  if (veg === 'NON-VEG') return !!(item.VegNonVeg && item.VegNonVeg.toLowerCase().startsWith('non'))
  return true
}

export default function MenuPageContent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  // CategoryHeader handles tab scrolling internally



  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % categories.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // auto-scroll to top whenever category changes (click or arrow keys)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentIndex])

  const label = categories[currentIndex]
  const items = menuItems.filter((item) => matchesItem(item, label))

  return (
    <div className="pt-20 md:pt-24 lg:pt-28 bg-[#FFF9F2] text-[#333333] min-h-screen px-3 sm:px-5 md:p-8">
      <div className="w-full max-w-[1000px] mx-auto">
        {/* header is now a separate sticky component */}
        <CategoryHeader
          categories={categories}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          label={label}
          formatLabel={formatLabel}
        />

        {items.length === 0 ? (
          <div className="col-span-full p-6 sm:p-10 border-2 border-dashed border-opacity-10 rounded-lg text-gray-400 bg-opacity-60 bg-white text-sm sm:text-base">
            No items in this category yet.
          </div>
        ) : (
          <div className={mounted && isMobile ? 'space-y-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8'}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className={mounted && isMobile ? 'flex flex-col border-b border-dashed border-gray-300 pb-3' : 'flex flex-col bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border-3 sm:border-4 border-[#FFCB05] shadow-[4px_4px_0px_#F26522] sm:shadow-[8px_8px_0px_#F26522] hover:scale-105 hover:rotate-1 transition-transform'}
              >
                <div className={mounted && isMobile ? 'flex justify-between items-start w-full mb-2' : 'flex justify-center items-center mb-2 sm:mb-3'}>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[#F26522] text-lg sm:text-2xl font-black">
                    <span
                      className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full flex-shrink-0 ${item.VegNonVeg?.toLowerCase().startsWith('non') ? 'bg-red-500' : 'bg-teal-500'
                        }`}
                    />
                    <span className="line-clamp-2 text-left md:text-center">{item.Name}</span>
                  </div>
                  {mounted && isMobile && (
                    <div className="text-xs sm:text-sm font-bold text-[#F26522] ml-2 flex-shrink-0 text-right">
                      {item.Setup ? (
                        <div>
                          {item.Rate > 0 ? (
                            `₹${item.Setup} setup + ₹${item.Rate}/- per person`
                          ) : (
                            `₹${item.Setup}/-`
                          )}
                        </div>
                      ) : item.Rate === 0 ? (
                        item.CustomPrice ? item.CustomPrice.split(' ')[0] : 'N/A'
                      ) : (
                        '₹' + item.Rate + '/-'
                      )}
                    </div>
                  )}
                </div>

                {mounted && isMobile ? (
                  <div className="flex justify-between items-start w-full gap-2">
                    <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#333333] flex-1 text-left">
                      {item.Description}
                    </p>
                    {item.PcsDisplay && (
                      <span className="bg-[#FFCB05] px-2.5 py-1 rounded-lg sm:rounded-2xl font-bold text-xs whitespace-nowrap flex-shrink-0">
                        {item.PcsDisplay}
                        {item.Unit && (
                          <span className="ml-1">{item.Unit}</span>
                        )}
                      </span>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="text-sm md:text-lg font-bold leading-relaxed text-[#333333] mb-3 sm:mb-4 flex-1 text-left md:text-center">
                      {item.Description}
                    </p>
                    <div className="flex justify-between items-center border-t-2 border-dashed border-[#FFCB05] pt-3 sm:pt-4">
                      {item.PcsDisplay && (
                        <span className="bg-[#FFCB05] px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-2xl font-bold text-xs">
                          {item.PcsDisplay}
                          {item.Unit && (
                            <span className="ml-1">{item.Unit}</span>
                          )}
                        </span>
                      )}
                      <span className="text-sm md:text-lg font-black text-[#333333] ml-auto">
                        {item.Setup ? (
                          item.Rate > 0 ? (
                            `₹${item.Setup} setup + ₹${item.Rate}/- per person`
                          ) : (
                            `₹${item.Setup}/-`
                          )
                        ) : item.Rate === 0 && item.CustomPrice ? (
                          item.CustomPrice
                        ) : (
                          '₹' + item.Rate + '/-'
                        )}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}
