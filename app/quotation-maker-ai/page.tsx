import type { Metadata } from 'next'
import QuotationMakerAI from './QuotationMakerAI'

export const metadata: Metadata = {
  title: 'AI Quotation Maker | Little Jalebis',
  description: 'AI-assisted catering quotation maker with automated portion estimation and locked pricing.',
}

export default function QuotationMakerAIPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] pt-20 md:pt-24 pb-16 px-3 sm:px-6">
      <QuotationMakerAI />
    </main>
  )
}
