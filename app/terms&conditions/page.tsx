'use client'

import React from 'react'
import TermsAndConditions from '../components/TermsAndConditions'

export default function TermsPage() {
  return (
    // Added pt-24 to push the content below your fixed navigation bar
    <main className="min-h-screen bg-[#FFF9F2] pt-5 md:pt-10 pb-10 flex items-start justify-center">
      <TermsAndConditions />
    </main>
  )
}