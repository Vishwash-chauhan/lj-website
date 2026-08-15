import type { Metadata } from 'next'

import KidsPartyVenueGurgaonContent from '@/app/components/KidsPartyVenueGurgaonContent'

const PAGE_URL = 'https://littlejalebis.com/services/kids-party-venue-gurgaon'
const PAGE_TITLE = 'Kids Party Venue in Gurgaon | Best Birthday Party House with Catering - Little Jalebis'
const PAGE_DESCRIPTION =
  'Looking for the best kids party venue with delicious and healthy food in Gurgaon? Little Jalebis Kids Party Venue in DLF Phase 1 offers a customizable space for up to 100 guests with in-house kids catering, setup & hassle-free experience. Book your birthday party today!'

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
    images: [
      {
        url: 'https://littlejalebis.com/favicon.png',
        width: 192,
        height: 192,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://littlejalebis.com/favicon.png'],
  },
}

export default function KidsPartyVenueGurgaonPage() {
  return <KidsPartyVenueGurgaonContent />
}
