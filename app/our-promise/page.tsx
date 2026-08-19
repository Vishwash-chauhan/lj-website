import type { Metadata } from 'next'
import FoodSafetyContent from '../components/FoodSafetyContent'

export const metadata: Metadata = {
  title: 'Our Promise | Food Made With Extra Care | Little Jalebis',
  description:
    'FSSAI certified kids catering with strict hygiene, sanitisation, temperature checks & careful handling for birthday parties & events in Delhi NCR.',
}

export default function OurPromisePage() {
  return (
    <main>
      <FoodSafetyContent />
    </main>
  )
}
