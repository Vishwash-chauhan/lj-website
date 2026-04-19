import type { Metadata } from 'next'

import KidsPartyVenueGurgaonContent from '@/app/components/KidsPartyVenueGurgaonContent'

const PAGE_URL = 'https://littlejalebis.com/services/kids-party-venue-gurgaon'
const PAGE_TITLE = 'Kids Party Venue in Gurgaon | Best Birthday Party House with Catering - Little Jalebis'
const PAGE_DESCRIPTION =
  'Looking for the best kids party venue with delicious and healthy food in Gurgaon? Little Jalebis Kids Party House in DLF Phase 1 offers a customizable space for up to 100 guests with in-house kids catering, setup & hassle-free experience. Book your birthday party today!'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Little Jalebis',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

export default function KidsPartyVenueGurgaonPage() {
  return <KidsPartyVenueGurgaonContent />
}
