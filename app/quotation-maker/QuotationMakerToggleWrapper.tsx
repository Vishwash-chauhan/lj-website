'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import QuotationMaker from './QuotationMaker'
import QuotationMakerAI from '../quotation-maker-ai/QuotationMakerAI'
import { FileText, Sparkles, SlidersHorizontal } from 'lucide-react'

function QuotationMakerContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialMode = searchParams.get('mode') === 'ai' ? 'ai' : 'standard'
  const [mode, setMode] = useState<'standard' | 'ai'>(initialMode)

  useEffect(() => {
    const currentModeParam = searchParams.get('mode')
    if (currentModeParam === 'ai' && mode !== 'ai') {
      setMode('ai')
    } else if (currentModeParam !== 'ai' && mode === 'ai' && !currentModeParam) {
      setMode('standard')
    }
  }, [searchParams, mode])

  const handleModeChange = (newMode: 'standard' | 'ai') => {
    setMode(newMode)
    const newParams = new URLSearchParams(searchParams.toString())
    if (newMode === 'ai') {
      newParams.set('mode', 'ai')
    } else {
      newParams.delete('mode')
    }
    const query = newParams.toString() ? `?${newParams.toString()}` : ''
    router.replace(`/quotation-maker${query}`, { scroll: false })
  }

  return (
    <div className="w-full">
      {/* Top Toggle Switch Bar */}
      <div className="max-w-6xl mx-auto mb-6 bg-white/90 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-md border border-[#2D3E50]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 px-3 py-1">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-[#1a3a3a] leading-tight">
              Quotation Mode
            </h2>
            <p className="text-[11px] text-gray-500 hidden sm:block">
              Switch between manual pricing and AI-assisted portion estimation
            </p>
          </div>
        </div>

        {/* Segmented Pill Control */}
        <div className="flex items-center bg-gray-100/90 p-1.5 rounded-xl w-full sm:w-auto border border-gray-200/80">
          <button
            type="button"
            onClick={() => handleModeChange('standard')}
            className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
              mode === 'standard'
                ? 'bg-[#2D3E50] text-white shadow-md shadow-[#2D3E50]/20 scale-[1.02]'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Standard Mode</span>
          </button>

          <button
            type="button"
            onClick={() => handleModeChange('ai')}
            className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
              mode === 'ai'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25 scale-[1.02]'
                : 'text-gray-600 hover:text-amber-900 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse text-amber-200" />
            <span>✨ AI Mode</span>
          </button>
        </div>
      </div>

      {/* Render Active Component */}
      {mode === 'standard' ? <QuotationMaker /> : <QuotationMakerAI />}
    </div>
  )
}

export default function QuotationMakerToggleWrapper() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto p-8 text-center text-gray-500 bg-white rounded-2xl shadow-md border border-[#2D3E50]/10">
          Loading Quotation Maker...
        </div>
      }
    >
      <QuotationMakerContent />
    </Suspense>
  )
}
