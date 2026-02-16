'use client'

import { usePathname } from 'next/navigation'
import WhatsAppWidget from './WhatsAppWidget'

export default function ConditionalWhatsApp() {
  const pathname = usePathname()
  
  // Hide WhatsApp widget only on the home page
  if (pathname === '/') {
    return null
  }
  
  return <WhatsAppWidget />
}
