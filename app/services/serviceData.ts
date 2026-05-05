import type { Metadata } from 'next'
import type { FAQItem } from '../components/Faq'

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
    faqs: [
      {
        question: 'What is the best kids birthday catering service in Delhi NCR?',
        answer:
          'The best kids birthday catering service is one that offers kid-friendly menus, hygienic preparation, and complete setup support. Little Jalebis - Kids Catering & Delivery Co. specializes in curated menus designed specifically for kids parties, making it a preferred choice in Delhi NCR.',
      },
      {
        question: 'Which locations do you serve for catering and staffing?',
        answer:
          'Little Jalebis offers kids birthday catering at home in Gurgaon, Delhi, Noida, Faridabad, and Ghaziabad, including food, setup, and service staff for a completely hassle-free experience.',
      },
      {
        question: 'Do you offer live food counters for kids parties?',
        answer:
          'Yes, Little Jalebis provides live food counters for kids birthday parties, including pizza stations, pasta counters, and DIY food setups to make the event more interactive.',
      },
      {
        question: 'How much does kids birthday catering cost in Delhi NCR?',
        answer:
          'The cost depends on number of guests, menu selection, and setup requirements. Little Jalebis offers custom packages for both small home parties and larger gatherings.',
      },
      {
        question: 'Do you provide catering for small kids birthday parties?',
        answer:
          'Yes, Little Jalebis specializes in small party catering for kids birthday events (10-100 guests) as well as larger celebrations.',
      },
      {
        question: "Is the food prepared keeping kids' taste in mind?",
        answer:
          'Absolutely. The menu is designed to be mild, familiar, and kid-approved, avoiding overly spicy or complex dishes.',
      },
      {
        question: 'Do you provide staff and setup along with catering?',
        answer:
          'Yes, Little Jalebis offers end-to-end catering services, including food setup, serving staff, and coordination - so parents don\'t have to manage anything.',
      },
      {
        question: 'Can the menu be customized for kids and adults separately?',
        answer:
          'Yes, you can choose a separate kids menu and adult menu, ensuring everyone at the party enjoys the food.',
      },
      {
        question: 'Why choose Little Jalebis for kids birthday catering?',
        answer:
          'Little Jalebis focuses exclusively on kids events, offering: Kid-friendly curated menus, Reliable service & hygiene, Customization options, Stress-free execution.',
      },
    ] as FAQItem[],
    metadata: {
      title: 'Kids Party Catering in Delhi NCR | Little Jalebis',
      description:
        'Little Jalebis for kids party catering in Delhi NCR. Fun menus, live counters & hassle-free birthday setups for kids and families. For booking, call us today!',
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
    faqs: [
      {
        question: 'Which is the best kids party venue in Gurgaon?',
        answer:
          'The best kids party venue is one that offers a safe space, catering, and complete setup in one place. Little Jalebis - Kids Party House is designed specifically for kids celebrations, making it a top choice in Gurgaon.',
      },
      {
        question: 'Do you provide a kids party venue with catering in Gurgaon?',
        answer:
          'Yes, Little Jalebis Kids Party House offers venue + catering packages, so you don\'t have to coordinate with multiple vendors.',
      },
      {
        question: 'What is included in a kids party venue package?',
        answer:
          'Typical inclusions: Party space, Seating & setup, Kids-friendly catering, Service staff. Little Jalebis offers customizable all-in-one party packages.',
      },
      {
        question: 'Is the venue suitable for small and large parties?',
        answer:
          'Yes, the venue is suitable for small gatherings (10-20 guests), medium-sized parties (20-50 guests), and larger celebrations up to 80 guests.',
      },
      {
        question: 'Is the venue safe for kids?',
        answer:
          'Yes, the space is designed to be child-friendly, safe, and comfortable for kids of all age groups.',
      },
      {
        question: 'Can I customize the decoration and theme?',
        answer:
          'Yes, the venue allows custom decoration and themed setups, based on your child\'s preferences.',
      },
      {
        question: 'Do you allow outside catering or is in-house catering available?',
        answer:
          'Little Jalebis offers in-house kids catering, ensuring better coordination and quality. This is recommended for a smooth experience.',
      },
      {
        question: 'How early should I book the kids party venue?',
        answer:
          'It is recommended to book 10-15 days in advance, especially for weekends and peak dates.',
      },
      {
        question: 'Is it better to host a kids party at a venue instead of home?',
        answer:
          'Yes, a venue provides more space, better organization, and no cleanup stress. This makes it a more convenient option for most parents.',
      },
      {
        question: 'Why choose Little Jalebis Kids Party House in Gurgaon?',
        answer:
          'Because it offers a purpose-built kids party venue, kid-friendly catering by Little Jalebis, end-to-end setup & service, and a stress-free experience for parents.',
      },
    ] as FAQItem[],
    metadata: {
      title: 'Kids Party House in Gurgaon | Little Jalebis',
      description:
        'Looking for a kids party house in Gurgaon with Little Jalebis. Enjoy a fun, safe & hassle-free birthday venue with food, decor & activities for kids. Book now!',
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
      title: 'Kids Food Boxes for Parties | Little Jalebis',
      description:
        'Kids food boxes for parties from Little Jalebis. Hygienic, fun & hassle-free meals delivered across Delhi NCR for birthdays & events. For more info. Call now!',
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
  faqs?: FAQItem[]
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