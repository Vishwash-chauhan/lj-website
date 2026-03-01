'use client'

import React, { useRef, useEffect, useState } from 'react'

interface Props {
  categories: string[]
  currentIndex: number
  setCurrentIndex: (i: number) => void
  label: string
  formatLabel: (s: string) => string
}

const CategoryHeader: React.FC<Props> = ({ categories, currentIndex, setCurrentIndex, label, formatLabel }) => {
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScroll = () => {
    if (!tabsRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current
    setShowLeftArrow(scrollLeft > 10)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    if (!tabsRef.current) return
    const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>(
      `[data-index="${currentIndex}"]`
    )
    
    // This will center the item IF there is enough room to scroll.
    // If it's the first or last item, it will naturally sit at the edge.
    activeBtn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    
    const timer = setTimeout(checkScroll, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const handleArrowNavigation = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === 'right' && currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <header className="sticky top-19 md:top-20 z-50 bg-[#FFF9F2] pt-4 pb-2 px-4 sm:px-6 mb-6 border-3 sm:border-4 border-[#FFCB05] rounded-2xl sm:rounded-3xl shadow-[4px_4px_0px_#F26522]">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="relative group">
          
          {/* Left Arrow Button */}
          {currentIndex > 0 && (
            <div className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-start bg-gradient-to-r from-[#FFF9F2] to-transparent z-20">
              <button 
                onClick={() => handleArrowNavigation('left')}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-[#333333] text-[#F26522] shadow-[2px_2px_0_#FFCB05] hover:scale-110 active:scale-95 transition-all"
              >
                <span className="text-xl font-black">‹</span>
              </button>
            </div>
          )}

          {/* Right Arrow Button */}
          {currentIndex < categories.length - 1 && (
            <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-end bg-gradient-to-l from-[#FFF9F2] to-transparent z-20">
              <button 
                onClick={() => handleArrowNavigation('right')}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-[#333333] text-[#F26522] shadow-[2px_2px_0_#FFCB05] hover:scale-110 active:scale-95 transition-all"
              >
                <span className="text-xl font-black">›</span>
              </button>
            </div>
          )}

          <div
            ref={tabsRef}
            onScroll={checkScroll}
            className="flex gap-2 overflow-x-auto py-2 px-1 no-scrollbar scroll-smooth"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {/* NO SPACERS HERE - allows categories to sit at the edge */}
            {categories.map((cat, i) => {
              const isActive = i === currentIndex
              return (
                <button
                  key={cat}
                  data-index={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-black text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-[#F26522] text-white border-2 border-[#333333] shadow-[3px_3px_0_#FFCB05] z-10'
                      : 'bg-white border-2 border-[#FFCB05] text-[#333333]/70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  {formatLabel(cat)}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </header>
  )
}

export default CategoryHeader