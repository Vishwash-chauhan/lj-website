import type { Metadata } from 'next'
import QuotationMaker from './QuotationMaker'

export const metadata: Metadata = {
  title: 'Quotation Maker | Little Jalebis',
  description: 'Create, modify, and generate event catering quotations for Little Jalebis.',
}

export default function QuotationMakerPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] pt-20 md:pt-24 pb-16 px-3 sm:px-6">
      <QuotationMaker />
    </main>
  )
}
