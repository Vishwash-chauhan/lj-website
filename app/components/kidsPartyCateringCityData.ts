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
    badgeLabel: 'Gurgaon',
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
      'Highly Flexible: Perfect for small intimate parties to large family celebrations.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
      'Full Service: Setup, live counters, service staff & cleanup included.',
      'Wide Coverage: Serving homes and venues across Gurgaon including DLF Phases, Golf Course Road, Sushant Lok, Sector 56, 62, 50, 78 and more.',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Gurgaon?',
    locationsHeading: 'Locations: Serving all across Gurugram',
    locationTags: ['DLF Areas', 'Golf Course Road', 'Sushant Lok', 'Sector 56', 'Sector 62', 'Sector 50', 'Sector 78', 'MG Road', 'Sohna Road', 'Cyber City', 'Palam Vihar', 'Nirvana Country', 'Sector 57', 'Sector 65', 'Sector 67', 'All Across Gurgaon'],
    servicesHeading: 'Our Kids Party Catering Services in Gurgaon',
    services: [
      'Home Birthday Party Catering',
      'Kids Party Venue and Catering',
      'Themed Birthday Parties with Live Food Stations',
      'Pool Parties & Indoor Playdate Catering',
      'School Events, Picnics & Food Boxes',
      'Customized Themed Food Presentations for Birthday Themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur and more'
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
    badgeLabel: 'Delhi',
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
      src: 'https://placehold.co/900x400/FFF6E9/333333?text=Live+Counters+Placeholder',
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
      'Highly Flexible: Perfect for small intimate parties to large family celebrations.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
      'Full Service: Setup, live counters, service staff & cleanup included.',
      'Strong Coverage: Serving all major areas across Delhi with strong coverage in every part of Delhi.',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Delhi?',
    locationsHeading: 'Locations: Serving all across Delhi NCR with strong coverage in every part of Delhi.',
    locationTags: [
      'South Delhi',
      'GK',
      'Saket',
      'Malviya Nagar',
      'Defence Colony',
      'Vasant Kunj',
      'East Delhi',
      'Mayur Vihar',
      'Preet Vihar',
      'Laxmi Nagar',
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
      'Customized Themed Food Presentations for Birthday Themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur and more'
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

export const noidaCityLanding: CityLandingConfigBundle = {
  seo: {
    url: 'https://littlejalebis.com/services/kids-party-catering-noida',
    title: 'Kids Party Catering in Noida | Best Birthday Catering for Children - Little Jalebis',
    description:
      'Looking for reliable kids party catering in Noida? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service. Perfect for busy parents all across Noida and Greater Noida. Book hassle-free birthday catering today!',
  },
  content: {
    cityName: 'Noida',
    badgeLabel: 'Noida',
    h1: 'Kids Party Catering in Noida - Fun, Hygienic Food Kids Love',
    introParagraphs: [
      'Looking for fun, healthy and reliable kids party catering in Noida? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service. Perfect for busy parents all across Noida and Greater Noida. Book hassle-free birthday catering today!',
    ],
    heroImage: {
      src: 'https://placehold.co/900x620/FFEFD8/333333?text=Noida+Kids+Party+Catering',
      alt: 'Kids party catering setup in Noida',
    },
    secondaryImage: {
      src: 'https://placehold.co/900x400/FFF6E9/333333?text=Live+Counters+Placeholder',
      alt: 'Live food counters for kids party in Noida',
    },
    mainHeading: 'The Best Kids Party Catering in Noida for Busy Parents',
    mainParagraphs: [
      'In the fast-paced corporate hub of Noida, balancing demanding work schedules with family life is a daily challenge. Between long office hours, traffic on the Noida Expressway, and endless meetings, organizing a memorable kids birthday party often feels overwhelming - especially when it comes to arranging food.',
      "As India\'s first kids-centric catering brand, we specialize in kids party catering in Noida with exciting, flavorful menus that busy parents trust and children love.",
      'Our dishes are prepared fresh on the day of the party with strict hygiene standards. We focus on kid-friendly portions, fun presentations, and tastes that appeal to little ones - from Magical Fairy Fries, Wiggly Chilli Garlic Noodles, Live Stations and much more.',
      "Whether you're hosting a small home playdate, a themed birthday bash, a pool party, or a school event, we deliver everything right to your doorstep or venue across Noida. We comfortably serve areas including Sector 62, Sector 50, Sector 78, Sector 120, Sector 150, Sector 75, Greater Noida, Noida Extension, and beyond.",
      'No more rushing after work to arrange boring buffets or worrying about last-minute food arrangements. With Little Jalebis, busy Noida professionals get complete peace of mind - we handle the full setup, live food counters (like Chocolate Fountain, Waffle Station, Churros, and Mini Pancakes), polite service, and post-party cleanup.',
      "Ready to host a joyful birthday celebration in Noida without adding to your busy schedule? Let's plan it together.",
    ],
    menuLinkLine: {
      linkText: 'Check out our menu here',
      postText: 'to explore the fun, kid-approved options we offer.',
    },
    whyChoosePoints: [
      'Kid-Approved Menus: Fun portions, playful names, and flavors loved by children and adults alike.',
      'Hygienic & Fresh: Prepared fresh on the event day with strict hygiene protocols.',
      'Highly Flexible: Perfect for small intimate parties to large family celebrations.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Special dietary requests.',
      'Full Service: Setup, live counters, service staff & complete cleanup included.',
      'Wide Coverage: Serving all major sectors across Noida & Greater Noida',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Noida?',
    locationsHeading: 'Wide Coverage: Serving all major sectors across Noida & Greater Noida for busy families.',
    locationTags: [
      'Sector 62',
      'Sector 50',
      'Sector 78',
      'Sector 120',
      'Sector 150',
      'Sector 75',
      'Sector 137',
      'Sector 142',
      'Sector 93A',
      'Sector 104',
      'Sector 44',
      'Noida Expressway',
      'Jaypee Wish Town',
      'Greater Noida',
      'Greater Noida West',
      'Pari Chowk',
      'Noida Extension',
    ],
    servicesHeading: 'Our Kids Party Catering Services in Noida',
    services: [
      'Home Birthday Party Catering',
      'Themed Birthday Parties with Live Food Stations',
      'Pool Parties & Indoor Playdate Catering',
      'School Events, Picnics & Food Boxes',
      'Kids Party Food Delivery across Noida & Greater Noida',
      'Customized Themed Food Presentations for Birthday Themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur and more'
    ],
    faqs: [
      {
        question: 'Do you provide kids party catering at home in Noida?',
        answer: 'Yes! We serve all areas of Noida, Greater Noida.',
      },
      {
        question: 'Can I customize the menu for my child\'s theme?',
        answer:
          'Absolutely. We create themed food presentations for popular themes like Superhero, Unicorn, Roblox, Frozen, and more.',
      },
      {
        question: 'Do you offer live food counters?',
        answer:
          'Yes, popular options include Waffle Station, Churros Station, Mini Pancakes, Chocolate Fountain, Pasta Live, and many more.',
      },
      {
        question: 'Is it easy to combine catering with a venue in Noida?',
        answer:
          'We provide full catering for any home or external venue in Noida. Our dedicated Kids Party House is in DLF Phase-1, Gurgaon, but we handle complete food service anywhere in Noida.',
      },
    ],
    finalHeading: 'Ready to Plan the Most-Loved Kids Party Catering in Noida?',
    whatsappMessage: "Hi Little Jalebis! I'd like to book kids party catering in Noida.",
  },
}

export const faridabadCityLanding: CityLandingConfigBundle = {
  seo: {
    url: 'https://littlejalebis.com/services/kids-party-catering-faridabad',
    title: 'Kids Party Catering in Faridabad | Best Birthday Catering for Children - Little Jalebis',
    description:
      'Looking for reliable kids party catering in Faridabad? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service. Perfect for families in Faridabad, Greater Faridabad & more. Book hassle-free birthday catering today!',
  },
  content: {
    cityName: 'Faridabad',
    badgeLabel: 'Faridabad',
    h1: 'Kids Party Catering in Faridabad - Fun, Hygienic Food Kids Love',
    introParagraphs: [
      "For families living in the city of Faridabad it can be challenging to find quality food for kids' parties.",
      'Lucky for you at Little Jalebies we serve healthy and fresh kids friendly food loved by kids.',
      'We bring India\'s first kids-centric catering experience right to your doorstep in Faridabad, making every celebration special and stress-free.',
    ],
    heroImage: {
      src: 'https://placehold.co/900x620/FFEFD8/333333?text=Faridabad+Kids+Party+Catering',
      alt: 'Kids party catering setup in Faridabad',
    },
    secondaryImage: {
      src: 'https://placehold.co/900x400/FFF6E9/333333?text=Live+Counters+Placeholder',
      alt: 'Live food counters for kids party in Faridabad',
    },
    mainHeading: 'The Best Kids Party Catering in Faridabad for Family Celebrations',
    mainParagraphs: [
      'Faridabad is transforming into a vibrant, family-friendly destination with beautiful new societies, excellent connectivity to Delhi-NCR, and a growing community of parents who want the best for their children. As more families make Faridabad their home, the demand for high-quality, child-friendly party catering has also increased.',
      'At Little Jalebis, we specialize in kids party catering in Faridabad with playful, delicious menus specially designed for children while ensuring adults enjoy them too. Our food is freshly prepared on the day of the event with strict hygiene standards, focusing on kid-friendly portions, colorful presentations, and flavors loved by kids and adults alike.',
      'We proudly serve homes and venues across Faridabad, including popular areas such as Sector 14, Sector 15, Sector 16, Sector 21C, Sector 31, Surajkund, Greenfield Colony, Charmwood Village, Neharpar (Greater Faridabad), Sector 82, 86, 89, Sainik Colony, and all surrounding localities. Whether you\'re planning a baby shower, a grand themed birthday party, a pool party, or a school event, we deliver everything conveniently to your location.',
      'Parents in Faridabad are increasingly choosing us because we offer complete peace of mind - from custom-themed plating and popular live counters (like Chocolate Fountain, Waffle Station, Churros, and Mini Pancakes) to full setup, polite service staff, and post-party cleanup.',
      'Ready to host a memorable and hassle-free birthday celebration in Faridabad? Let\'s plan it together.',
    ],
    menuLinkLine: {
      linkText: 'Check out our menu here',
      postText: 'to explore the fun, kid-approved dishes we offer.',
    },
    whyChoosePoints: [
      'Kid-Approved Menus: Fun portions, playful names, and flavors loved by children of all ages and adults alike.',
      'Hygienic & Fresh: Prepared fresh on the day with strict hygiene standards.',
      'Highly Flexible: Perfect for small intimate parties to large family celebrations.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
      'Full Service: Setup, live counters, service staff & complete cleanup included.',
      'Wide Coverage: Serving all major sectors and societies across Faridabad and Greater Faridabad.',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Faridabad?',
    locationsHeading: 'Wide Coverage: Serving all major sectors and societies across Faridabad and Greater Faridabad.',
    locationTags: [
      'Sector 14',
      'Sector 15',
      'Sector 16',
      'Sector 21C',
      'Sector 31',
      'Surajkund',
      'Greenfield Colony',
      'Charmwood Village',
      'Neharpar (Greater Faridabad)',
      'Sector 82',
      'Sector 86',
      'Sector 89',
      'Sector 21D',
      'Sector 46',
      'Sector 49',
      'Sector 84',
      'Sector 85',
      'All Across Faridabad',
    ],
    servicesHeading: 'Our Kids Party Catering Services in Faridabad',
    services: [
      'Home Birthday Party Catering',
      'Themed Birthday Parties with Live Food Stations',
      'Pool Parties & Indoor Playdate Catering',
      'School Events, Picnics & Food Boxes',
      'Kids Party Food Delivery across Faridabad',
      'Customized Themed Food Presentations for Birthday Themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur and more'
    ],
    faqs: [
      {
        question: 'Do you provide kids party catering at home in Faridabad?',
        answer:
          'Yes! We serve all major areas including Sector 14, 15, 16, 21C, 31, Surajkund, Greenfield Colony, Charmwood Village, Greater Faridabad (Neharpar), Sector 82, 86, 89, and all surrounding localaties.',
      },
      {
        question: 'Which areas in Faridabad do you cover?',
        answer: 'We have excellent coverage across both Old Faridabad and Greater Faridabad.',
      },
      {
        question: 'Can the menu be customized according to my child\'s birthday theme?',
        answer:
          'Absolutely. We create fun themed presentations for popular themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur, and many others.',
      },
      {
        question: 'How far in advance should I book catering?',
        answer: 'We recommend booking at least 5-10 days in advance, especially on weekends and during festive seasons.',
      },
      {
        question: 'Do you offer live food counters?',
        answer:
          'Yes, we offer popular live counters like Chocolate Fountain, Waffle Station, Churros Station, Mini Pancakes, and more.',
      },
      {
        question: 'Can I combine catering with a venue?',
        answer:
          'We provide full catering service for any home or external venue in Faridabad. Our dedicated Kids Party House is located in DLF Phase-1, Gurgaon.',
      },
    ],
    finalHeading: 'Ready to Plan the Most-Loved Kids Party Catering in Faridabad?',
    whatsappMessage: "Hi Little Jalebis! I'd like to book kids party catering in Faridabad.",
  },
}

export const ghaziabadCityLanding: CityLandingConfigBundle = {
  seo: {
    url: 'https://littlejalebis.com/services/kids-party-catering-ghaziabad',
    title: 'Kids Party Catering in Ghaziabad | Best Birthday Catering for Children - Little Jalebis',
    description:
      'Looking for reliable kids party catering in Ghaziabad? Little Jalebis offers fun, hygienic, kid-approved menus with home delivery, setup & service. Perfect for busy parents across Ghaziabad. Book hassle-free birthday catering today!',
  },
  content: {
    cityName: 'Ghaziabad',
    badgeLabel: 'Ghaziabad',
    h1: 'Kids Party Catering in Ghaziabad - Fun, Hygienic Food Kids Love',
    introParagraphs: [
      'Whether you\'re planning a small first birthday in your apartment or a big celebration with extended family and friends, organizing the perfect kids\' party can feel overwhelming.',
      'At Little Jalebis, we make it simple and joyful. As India\'s first kids-centric catering brand, we specialize in kids party catering in Ghaziabad, offering flexible, fun, and fully customizable menus that suit every type and size of celebration.',
    ],
    heroImage: {
      src: 'https://placehold.co/900x620/FFEFD8/333333?text=Ghaziabad+Kids+Party+Catering',
      alt: 'Kids party catering setup in Ghaziabad',
    },
    secondaryImage: {
      src: 'https://placehold.co/900x400/FFF6E9/333333?text=Live+Counters+Placeholder',
      alt: 'Live food counters for kids party in Ghaziabad',
    },
    mainHeading: 'The Best Kids Party Catering in Ghaziabad for Busy Families',
    mainParagraphs: [
      'Busy working parents in Ghaziabad know how valuable their limited family time is. Between long office hours, traffic, and daily responsibilities, the thought of arranging food for a kids\' birthday party often adds unnecessary stress.',
      'At Little Jalebis, we take away that burden completely. We specialize in kids party catering in Ghaziabad with playful, delicious menus that children genuinely love and parents feel confident serving - whether it\'s a cozy celebration for 15-20 kids or a grand party with 50+ guests.',
      'Our food is freshly prepared on the day of the event using strict hygiene standards. We focus on kid-friendly portions, colorful and fun presentations, and flavors that actually get finished - from crispy fries, cheesy nuggets, and smiley mini pizzas to tasty pastas and exciting finger foods.',
      'We serve all areas of Ghaziabad conveniently, including Indirapuram, Vaishali, Vasundhara, Kaushambi, Niti Khand, Nyay Khand, Raj Nagar Extension, Shipra Suncity, Crossing Republik, Siddharth Vihar, and surrounding localities. No matter if you want to host at home, in your society lawn, or at any external venue, we bring everything right to your location.',
      'Parents across Ghaziabad trust us for our flexibility - small intimate parties, medium-sized gatherings, or large family celebrations - all handled with the same care. We also offer popular live food counters like Chocolate Fountain, Waffle Station, Churros Station, and Mini Pancakes that make the party extra special for kids.',
      'With full setup, polite service staff, and complete cleanup, you get to enjoy every moment with your child instead of worrying about the food.',
      'Ready to host a memorable birthday celebration in Ghaziabad without the usual stress? Let\'s plan it together.',
    ],
    menuLinkLine: {
      linkText: 'Check out our menu here',
      postText: 'to explore the fun, kid-approved options we offer.',
    },
    whyChoosePoints: [
      'Kid-Approved Menus: Fun portions, playful names, and flavors loved by children of all ages and adults alike.',
      'Hygienic & Fresh: Prepared fresh on the day with strict hygiene standards.',
      'Highly Flexible: Perfect for small intimate parties to large family celebrations.',
      'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
      'Full Service: Setup, live counters, service staff & complete cleanup included.',
      'Strong Coverage: Serving all major societies and areas across Ghaziabad.',
    ],
    whyChooseHeadingHighlight: 'Kids Party Catering in Ghaziabad?',
    locationsHeading: 'Strong Coverage: Serving all major societies and areas across Ghaziabad.',
    locationTags: [
      'Indirapuram',
      'Vaishali',
      'Vasundhara',
      'Kaushambi',
      'Niti Khand',
      'Nyay Khand',
      'Raj Nagar Extension',
      'Shipra Suncity',
      'Crossing Republik',
      'Siddharth Vihar',
      'Wave City',
      'Loni',
      'Modinagar',
      'Vijay Nagar',
      'Patel Nagar',
      'Govindpuram',
      'All Across Ghaziabad',
    ],
    servicesHeading: 'Our Kids Party Catering Services in Ghaziabad',
    services: [
      'Home Birthday Party Catering (Small & Large)',
      'Themed Birthday Parties with Live Food Stations',
      'Pool Parties & Indoor Playdate Catering',
      'School Events, Picnics & Food Boxes',
      'Kids Party Food Delivery across Ghaziabad',
      'Customized Themed Food Presentations for Birthday Themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur and more',    
    ],
    faqs: [
      {
        question: 'Do you provide kids party catering at home in Ghaziabad?',
        answer:
          'Yes! We serve all areas including Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Crossing Republik, Shipra Suncity, and more.',
      },
      {
        question: 'Can you handle both small and large kids\' parties in Ghaziabad?',
        answer:
          'Absolutely. We offer flexible packages suitable for intimate gatherings as well as big celebrations with extended family and friends.',
      },
      {
        question: 'How far in advance should I book catering?',
        answer: 'We recommend booking at least 5-10 days in advance, especially on weekends.',
      },
      {
        question: 'Do you offer live food counters?',
        answer:
          'Yes, popular options include Chocolate Fountain, Waffle Station, Churros Station, Mini Pancakes, and many more.',
      },
      {
        question: 'Can the menu be customized according to my child\'s theme?',
        answer:
          'Yes, we specialize in themed food presentations for popular themes like Frozen, Superhero, Unicorn, Roblox, Dinosaur, etc.',
      },
      {
        question: 'Is it easy to get catering from Ghaziabad to nearby areas?',
        answer: 'We have excellent coverage within Ghaziabad and can also serve nearby areas in NCR conveniently.',
      },
    ],
    finalHeading: 'Ready to Plan the Most-Loved Kids Party Catering in Ghaziabad?',
    whatsappMessage: "Hi Little Jalebis! I'd like to book kids party catering in Ghaziabad.",
  },
}

export const gurgaonCityLandingMetadata = createCityLandingMetadata(gurgaonCityLanding.seo)
export const delhiCityLandingMetadata = createCityLandingMetadata(delhiCityLanding.seo)
export const noidaCityLandingMetadata = createCityLandingMetadata(noidaCityLanding.seo)
export const faridabadCityLandingMetadata = createCityLandingMetadata(faridabadCityLanding.seo)
export const ghaziabadCityLandingMetadata = createCityLandingMetadata(ghaziabadCityLanding.seo)
