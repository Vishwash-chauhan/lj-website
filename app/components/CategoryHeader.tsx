'use client'

import React, { useRef, useEffect } from 'react'

interface Props {
  categories: string[]
  currentIndex: number
  setCurrentIndex: (i: number) => void
  label: string
  formatLabel: (s: string) => string
}

const CategoryHeader: React.FC<Props> = ({ categories, currentIndex, setCurrentIndex, label, formatLabel }) => {
  const tabsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!tabsRef.current) return
    const activeBtn = tabsRef.current.querySelector<HTMLButtonElement>(
      `[data-index="${currentIndex}"]`
    )
    activeBtn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [currentIndex])

  return (
    <header className="sticky top-19 md:top-20 z-50 bg-[#FFF9F2] pt-4 pb-2 border-3 sm:border-4 border-[#FFCB05] rounded-2xl sm:rounded-3xl shadow-[4px_4px_0px_#F26522]">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center">
        <div className="w-full mb-3">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Categories"
            className="flex gap-2 overflow-x-auto py-1 px-1 sm:px-0"
          >
            {categories.map((cat, i) => {
              const isActive = i === currentIndex
              return (
                <button
                  key={cat}
                  data-index={i}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setCurrentIndex(i)}
                  className={`flex-shrink-0 px-3 py-1 rounded-full font-black text-sm sm:text-base whitespace-nowrap transition-transform ${
                    isActive
                      ? 'bg-[#F26522] text-white shadow-[4px_4px_0_#F26522] scale-105'
                      : 'bg-white border-2 border-[#FFCB05] text-[#F26522] hover:scale-105'
                  }`}
                >
                  {formatLabel(cat)}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default CategoryHeader
