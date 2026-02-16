'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Hide footer only on the home page
  if (pathname === '/') {
    return null
  }
  
  return <Footer />
}
