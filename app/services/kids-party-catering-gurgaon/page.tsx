import type { Metadata } from 'next'

import KidsPartyCateringGurgaonContent from '@/app/components/KidsPartyCateringGurgaonContent'

const PAGE_URL = 'https://littlejalebis.com/services/kids-party-catering-gurgaon'
const PAGE_TITLE = 'Kids Party Catering in Gurgaon | Best Birthday Catering for Children - Little Jalebis'
const PAGE_DESCRIPTION =
  'Looking for reliable kids party catering in Gurgaon? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service. Book hassle-free birthday catering in DLF, Golf Course Road, Sushant Lok & more.'

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

export default function KidsPartyCateringGurgaonPage() {
  return <KidsPartyCateringGurgaonContent />
}
