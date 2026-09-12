import type { Metadata } from 'next'
import QuotationMakerToggleWrapper from './QuotationMakerToggleWrapper'

export const metadata: Metadata = {
  title: 'Quotation Maker | Little Jalebis',
  description: 'Create, modify, and generate event catering quotations for Little Jalebis with Standard or AI Mode.',
}

export default function QuotationMakerPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] pt-20 md:pt-24 pb-16 px-3 sm:px-6">
      <QuotationMakerToggleWrapper />
    </main>
  )
}

