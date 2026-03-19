import type { Metadata } from 'next'

export type ServiceKey = 'catering' | 'venue' | 'boxes'

const SITE_URL = 'https://littlejalebis.com'

export const SERVICES = {
  catering: {
    legacyTab: 'catering',
    slug: 'kids-party-catering',
    tabTitle: 'Catering',
    title: 'Catering',
    tagline: 'Deliciously Fun, Nutritiously Balanced',
    description:
      'Fully Customisable Catering Options. Our menus are designed keeping children in mind — kid-friendly, hygienic, and flavour-balanced. Our kitchen focuses on fresh ingredients and playful presentation.',
    features: ['Fully Customisable', 'Live Food Counters', 'Signature In-House Catering', 'Hygienic'],
    cta: 'View Menu',
    color: '#FFCB05',
    image: '🍕',
    location: null,
    metadata: {
      title: 'Kids Party Catering | Little Jalebis',
      description:
        'Custom kids party catering in Delhi NCR and Gurgaon with child-friendly menus, hygienic preparation, live counters, and flexible packages.',
    },
  },
  venue: {
    legacyTab: 'venue',
    slug: 'kids-party-house',
    tabTitle: 'Kids Party House',
    title: 'Kids Party House',
    tagline: 'Where Imagination Meets Celebration',
    description:
      'A thoughtfully designed venue perfect for hosting celebrations of up to 80 guests. The space features a warm indoor party area complemented by an open-air extension, giving you the ultimate flexibility to design your own themes, décor, and activities.',
    features: ['Signature In-House Catering', 'Hygienic Food', 'Safe & Clean Play Zones', 'Fully Customisable'],
    cta: 'View Our Location',
    color: '#F26522',
    image: '🏠',
    location: {
      type: 'Kids Party House',
      name: 'Little Jalebis - Kids Party House & Catering Co.',
      address: '17, Lower Ground Floor, Arjun Marg, DLF Phase 1, Gurugram',
      heading: 'Visit Our',
      subheading: 'Come over for a tasting or to plan your next event!',
      mapUrl: 'https://maps.app.goo.gl/YRVJxzPR1BamX3V59',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4355037238706!2d77.0998267!3d28.466428399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f0584ac771%3A0x6beb70f895098438!2sLittle%20Jalebis%20-%20Kids%20Party%20House%20%26%20Catering%20Co.!5e0!3m2!1sen!2sin!4v1773344538768!5m2!1sen!2sin',
    },
    metadata: {
      title: 'Kids Party House | Little Jalebis',
      description:
        'Book the Little Jalebis kids party house in Gurugram for birthdays and celebrations with indoor-outdoor space, catering, and custom party setups.',
    },
  },
  boxes: {
    legacyTab: 'boxes',
    slug: 'food-boxes',
    tabTitle: 'Food Delivery & Boxes',
    title: 'Fun Food Boxes',
    tagline: 'Healthy Meals, Delivered in Style',
    description:
      'Perfect for school events, birthday picnics, or outdoor trips. Our lunch boxes are packed with love, nutrition, and playful presentation to make healthy bites feel like a treat.',
    features: ['Individual Portioning', 'Hygienic Packaging', 'Fully Customisable', 'On-Demand Delivery'],
    cta: 'View Food Box Menu',
    color: '#333333',
    image: '🍱',
    location: null,
    metadata: {
      title: 'Food Boxes | Little Jalebis',
      description:
        'Order kids food boxes and delivered party meals for schools, picnics, and birthdays with hygienic packaging and customisable portions.',
    },
  },
} as const satisfies Record<ServiceKey, {
  legacyTab: string
  slug: string
  tabTitle: string
  title: string
  tagline: string
  description: string
  features: string[]
  cta: string
  color: string
  image: string
  location: {
    type: string
    name: string
    address: string
    heading: string
    subheading: string
    mapUrl: string
    mapEmbed: string
  } | null
  metadata: {
    title: string
    description: string
  }
}>

export const SERVICE_KEYS = Object.keys(SERVICES) as ServiceKey[]

export const SERVICE_KEY_BY_LEGACY_TAB: Record<string, ServiceKey> = Object.fromEntries(
  SERVICE_KEYS.map((key) => [SERVICES[key].legacyTab, key])
) as Record<string, ServiceKey>

export const SERVICE_KEY_BY_SLUG: Record<string, ServiceKey> = Object.fromEntries(
  SERVICE_KEYS.map((key) => [SERVICES[key].slug, key])
) as Record<string, ServiceKey>

export function getServicePath(serviceKey: ServiceKey): string {
  return `/services/${SERVICES[serviceKey].slug}`
}

export function getServiceMetadata(serviceKey: ServiceKey): Metadata {
  const service = SERVICES[serviceKey]
  const url = `${SITE_URL}${getServicePath(serviceKey)}`

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url,
      siteName: 'Little Jalebis',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metadata.title,
      description: service.metadata.description,
    },
  }
}