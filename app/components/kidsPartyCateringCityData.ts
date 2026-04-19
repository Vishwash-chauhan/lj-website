import type { Metadata } from 'next'

import type { KidsPartyCateringCityConfig } from './KidsPartyCateringCityLanding'

interface CityLandingSeo {
  url: string
  title: string
  description: string
}

interface CityLandingConfigBundle {
  seo: CityLandingSeo
  content: KidsPartyCateringCityConfig
}

function createCityLandingMetadata(seo: CityLandingSeo): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: 'Little Jalebis',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}

export const gurgaonCityLanding: CityLandingConfigBundle = {
  seo: {
    url: 'https://littlejalebis.com/services/kids-party-catering-gurgaon',
    title: 'Kids Party Catering in Gurgaon | Best Birthday Catering for Children - Little Jalebis',
    description:
      'Looking for reliable kids party catering in Gurgaon? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service. Book hassle-free birthday catering in DLF, Golf Course Road, Sushant Lok & more.',
  },
  content: {
    cityName: 'Gurgaon',
    badgeLabel: 'Gurgaon Special',
    h1: 'Kids Party Catering in Gurgaon - Fun, Hygienic Food Kids Love',
    introParagraphs: [
      'Planning a kids birthday party in Gurgaon is exciting, but the food often becomes the biggest worry. Will the children actually eat? Will it be hygienic? Will parents enjoy it too?',
      "At Little Jalebis, we solve this completely. As India\'s first kids-centric catering brand, we specialize in kids party catering in Gurgaon with playful menus designed for both kids and adults.",
    ],
    heroImage: {
      src: 'https://placehold.co/900x620/FFEFD8/333333?text=Kids+Party+Catering+Setup',
      alt: 'Kids party catering setup in Gurgaon',
    },
    secondaryImage: {
      src: 'https://placehold.co/900x400/FFF6E9/333333?text=Live+Food+Counter+Placeholder',
      alt: 'Live food counter for kids party',
    },
    mainHeading: 'The Best Kids Party Catering in Gurgaon for Unforgettable Parties',
    mainParagraphs: [
      'Planning a kids birthday party in Gurgaon is exciting, but the food often becomes the biggest worry. At Little Jalebis, we solve this completely with playful menus loved by children of all ages and adults as well.',
      'Our food is freshly prepared on the day of the event with strict hygiene standards. We focus on kid-friendly portions, fun presentations, and flavors that children genuinely enjoy (no more half-eaten plates or wasted food). From crispy fries and cheesy nuggets to mini pizzas and pasta, every dish is crafted to bring smiles and empty plates.',
      "Whether you\'re hosting a small home playdate, a grand themed birthday party, a pool party, or a school event, we bring everything right to your doorstep or venue.",
      "Whether you\'re hosting at home in DLF Phase 1, Golf Course Road, Sushant Lok, Sector 56, or anywhere across Gurgaon, we bring fresh, delicious, and beautifully presented food right to your doorstep. No more boring buffets or wasted food - just smiles, empty plates, and happy memories.",
      'We are a trusted provider of kids party catering in Gurgaon for all celebrations.',
      "Ready to make your child\'s birthday the talk of Gurgaon? Let\'s plan it together.",
    ],
    menuLinkLine: {
      preText: '',
      linkText: 'Check out our menu here.',
    },
    whyChoosePoints: [
      'Kid-Approved Menus: Fun portions, playful names, and flavors that are loved by children of all ages and adults alike.',
      'Hygienic & Fresh: Prepared fresh on the day with strict hygiene standards.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
      'Full Service: Setup, live counters, service staff & cleanup included.',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Gurgaon?',
    locationsHeading: 'Locations: Serving all across Gurugram',
    locationTags: ['DLF Areas', 'Golf Course Road', 'Sushant Lok', 'Sector 56', 'Sector 62', 'Sector 50', 'Sector 78', 'And more across Gurgaon'],
    servicesHeading: 'Our Kids Party Catering Services in Gurgaon',
    services: [
      'Home Birthday Party Catering',
      'Kids Party Venue and Catering',
      'Themed Birthday Parties with Live Food Stations',
      'Pool Parties & Indoor Playdate Catering',
      'School Events, Picnics & Food Boxes',
    ],
    faqs: [
      {
        question: 'Can I book the catering and venue separately, or do they come as a package?',
        answer:
          'Not at all. You can book our Kids Party Venue as a standalone venue or only take catering for an external location. Or take both services as a package, you have total flexibility.',
      },
      {
        question: 'Do you provide catering at home in Gurgaon?',
        answer:
          'Yes! We serve all major areas including DLF Phases, Sushant Lok, Golf Course Road, Sector 56, 62, 50, 78 and more.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 5-10 days in advance, especially on weekends.',
      },
      {
        question: 'Do you offer live food counters?',
        answer:
          'Yes, we offer various live food counters like Waffle Station, Churros Station, Mini Pancakes, Chocolate Fountain and many more.',
      },
    ],
    finalHeading: 'Ready to Plan the Most-Loved Kids Party Catering in Gurgaon?',
    whatsappMessage: "Hi Little Jalebis! I'd like to book kids party catering in Gurgaon.",
  },
}

export const delhiCityLanding: CityLandingConfigBundle = {
  seo: {
    url: 'https://littlejalebis.com/services/kids-party-catering-delhi',
    title: 'Kids Party Catering in Delhi | Best Birthday Catering for Children - Little Jalebis',
    description:
      'Looking for reliable kids party catering in Delhi? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service across South Delhi, East Delhi, Central Delhi & more. Book hassle-free birthday catering today!',
  },
  content: {
    cityName: 'Delhi',
    badgeLabel: 'Delhi Special',
    h1: 'Kids Party Catering in Delhi - Fun, Hygienic Food Kids Love',
    introParagraphs: [
      'Planning a kids birthday party in Delhi is exciting, but the food often becomes the biggest worry. Will the children actually eat? Will it be hygienic? Will parents enjoy it too?',
      "At Little Jalebis, we solve this completely. As India\'s first kids-centric catering brand, we specialize in kids party catering in Delhi with playful menus designed for both kids and adults.",
    ],
    heroImage: {
      src: 'https://placehold.co/900x620/FFEFD8/333333?text=Delhi+Kids+Party+Catering',
      alt: 'Kids party catering setup in Delhi',
    },
    secondaryImage: {
      src: 'https://placehold.co/900x400/FFF6E9/333333?text=Delhi+Live+Counters+Placeholder',
      alt: 'Live food counters for kids party in Delhi',
    },
    mainHeading: 'The Best Kids Party Catering in Delhi for Stress-Free Celebrations',
    mainParagraphs: [
      'Planning a kids birthday party in Delhi comes with its own set of challenges. Between heavy traffic, busy schedules, and finding food that picky children will actually eat, the catering part often turns into the biggest headache for parents.',
      "At Little Jalebis, we take away that stress completely. As India\'s first kids-centric catering brand, we specialize in kids party catering in Delhi with exciting, flavorful menus that children love and parents feel good about serving.",
      "Our dishes are prepared fresh on the day of the party using high hygiene standards. We create smaller, kid-friendly portions with fun presentations and taste profiles that appeal to little ones - whether it\'s cheesy nuggets, smiley mini pizzas, crispy fries, or flavorful pastas. The result? Happier kids, cleaner plates.",
      'We proudly serve homes and venues across Delhi, including popular areas in South Delhi (Greater Kailash, Defence Colony, Saket, Malviya Nagar, Vasant Kunj, Dwarka), East Delhi (Mayur Vihar, Preet Vihar, Laxmi Nagar), West Delhi, Rohini, Pitampura, and beyond. Parents all across Delhi trust us because we offer complete peace of mind - from custom-themed plating and live counters, service staff, and post-party cleanup.',
    ],
    menuLinkLine: {
      preText: '',
      linkText: 'Check out our menu here',
      postText: 'to explore the fun options we offer.',
    },
    whyChoosePoints: [
      'Kid-Approved Menus: Fun portions, playful names, and flavors that are loved by children of all ages and adults alike.',
      'Hygienic & Fresh: Prepared fresh on the day with strict hygiene standards.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
      'Full Service: Setup, live counters, service staff & cleanup included.',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Delhi?',
    locationsHeading: 'Locations: Serving all across Delhi NCR with strong coverage in every part of Delhi.',
    locationTags: [
      'South Delhi: GK, Saket, Malviya Nagar, Defence Colony, Vasant Kunj',
      'East Delhi: Mayur Vihar, Preet Vihar, Laxmi Nagar',
      'Central Delhi',
      'West Delhi',
      'Dwarka',
      'Rohini',
      'Pitampura',
      'Across Delhi NCR',
    ],
    servicesHeading: 'Our Kids Party Catering Services in Delhi',
    services: [
      'Home Birthday Party Catering',
      'Themed Birthday Parties with Live Food Stations',
      'Pool Parties & Indoor Playdate Catering',
      'School Events, Picnics & Food Boxes',
      'Kids Party Food Delivery across Delhi',
    ],
    faqs: [
      {
        question: 'Do you provide kids party catering at home in Delhi?',
        answer:
          'Yes! We serve all major areas including South Delhi, East Delhi, Central Delhi, Dwarka, Rohini, Pitampura, Janakpuri, and more.',
      },
      {
        question: 'What areas in Delhi do you cover for catering?',
        answer:
          'We have excellent coverage all across Delhi (GK, Saket, Malviya Nagar, Defence Colony, Vasant Kunj), East Delhi (Mayur Vihar, Preet Vihar), West Delhi, North Delhi, and Dwarka.',
      },
      {
        question: "Can I customize the menu according to my child\'s birthday theme?",
        answer:
          'Absolutely. We specialize in themed presentations and fun food names matching popular themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur, etc.',
      },
      {
        question: 'How far in advance should I book catering in Delhi?',
        answer: 'We recommend booking at least 5-10 days in advance, especially on weekends and during peak season.',
      },
      {
        question: 'Do you offer live food counters?',
        answer:
          'Yes, we offer various live food counters like Waffle Station, Churros Station, Mini Pancakes, Chocolate Fountain, Pasta Live, and many more.',
      },
      {
        question: 'Do you also provide catering combined with a venue?',
        answer:
          'Our main Kids Party House is located in DLF Phase-1, Gurgaon. However, we happily provide full catering service for any venue or home in Delhi.',
      },
    ],
    finalHeading: 'Ready to Plan the Most-Loved Kids Party Catering in Delhi?',
    whatsappMessage: "Hi Little Jalebis! I'd like to book kids party catering in Delhi.",
  },
}

export const gurgaonCityLandingMetadata = createCityLandingMetadata(gurgaonCityLanding.seo)
export const delhiCityLandingMetadata = createCityLandingMetadata(delhiCityLanding.seo)
