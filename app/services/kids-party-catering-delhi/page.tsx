import type { Metadata } from 'next'

import KidsPartyCateringDelhiContent from '@/app/components/KidsPartyCateringDelhiContent'

const PAGE_URL = 'https://littlejalebis.com/services/kids-party-catering-delhi'
const PAGE_TITLE = 'Kids Party Catering in Delhi | Best Birthday Catering for Children - Little Jalebis'
const PAGE_DESCRIPTION =
  'Looking for reliable kids party catering in Delhi? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service across South Delhi, East Delhi, Central Delhi & more. Book hassle-free birthday catering today!'

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

export default function KidsPartyCateringDelhiPage() {
  return <KidsPartyCateringDelhiContent />
}
