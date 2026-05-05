import Link from 'next/link'

import Faq, { type FAQItem } from './Faq'
import FaqSchema from './FaqSchema'
import GalleryComponent from './GalleryComponent'
import LocationSection from './LocationSection'
import Testimonials from './Testimonials'
import { SERVICES } from '../services/serviceData'

const faqs: FAQItem[] = [
  {
    question: 'What is the capacity of Little Jalebis Kids Party House in Gurgaon?',
    answer:
      'Our venue can comfortably host up to 100 guests, making it ideal for birthday parties ranging from 10 to 100 children along with adults.',
  },
  {
    question: 'Where is your Kids Party House located?',
    answer: 'We are located at 17, Lower Ground Floor, Arjun Marg, DLF Phase-1, Gurgaon.',
  },
  {
    question: 'Can I customize the venue?',
    answer: 'Yes, absolutely! The space is fully customizable.',
  },
  {
    question: 'Do you provide catering with the venue?',
    answer: 'Yes. We provide our signature in-house kids catering along with the venue.',
  },
  {
    question: 'Is the venue air-conditioned?',
    answer: 'Yes, the indoor party area is fully air-conditioned for comfort.',
  },
  {
    question: 'How far in advance should I book the Kids Party House?',
    answer: 'We recommend booking at least 5 - 7 days in advance, especially on weekends and during peak months.',
  },
  {
    question: 'Is the venue suitable for small parties as well?',
    answer:
      'Yes, it works beautifully for both small intimate gatherings (20-30 kids) and larger celebrations (up to 80 guests).',
  },
  {
    question: 'Can I visit the venue before booking?',
    answer: 'Absolutely. We highly recommend visiting the venue in advance. You can schedule a site visit by calling or WhatsApping us.',
  },
]

const specialPoints = [
  'Signature In-House Catering by Little Jalebis',
  'Fresh, Hygienic & Kid-Approved Food',
  'Safe, Clean & Child-Friendly Environment',
  'Fully Customisable Space & Setup',
  'Dedicated Team for Smooth Execution',
  'No Last-Minute Stress or Cleanup',
]

const venueFeatures = [
  'Indoor air-conditioned party area + open-air extension',
  'Capacity: Up to 100 guests',
  'Custom decor support',
  'Safe and clean play-friendly zones',
  'Excellent lighting and ambiance for photography',
  'Ample parking nearby',
]

const comboPoints = [
  'Custom-themed setup',
  'Live food counters (optional)',
  'Kid-friendly menu with both veg & non-veg options',
  'Timely service and professional management',
]

export default function KidsPartyVenueGurgaonContent() {
  return (
    <div className="bg-[#FFF9F2] pt-20 md:pt-24 pb-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      {/* FAQ Schema - Render once per page */}
      <FaqSchema faqs={faqs} />

      <section className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] bg-white p-6 md:p-12 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Gurgaon Venue
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
                Kids Party Venue in Gurgaon - Little Jalebis Kids Party House
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Everything you need to host a legendary kids' party, all under one roof.
              </p>
              <p className="mt-2 text-xs sm:text-sm md:text-base font-black text-[#F26522] uppercase tracking-wider">
                Catering • Kids Party House • Food Delivery & Boxes
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
                Where Imagination Meets Celebration
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Located in the heart of DLF Phase-1, Little Jalebis Kids Party House is a thoughtfully designed, private venue
                created exclusively for kids&apos; celebrations. Perfect for hosting birthdays, baby showers, and small gatherings of
                up to 100 guests, this space offers the ideal balance between indoor comfort and outdoor flexibility.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="cta-button">
                  Book Your Party Venue
                </Link>
                <a
                  href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis!%20I%20want%20to%20book%20your%20Kids%20Party%20Venue%20in%20Gurgaon."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg border-2 border-[#333333] font-bold text-[#333333] hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  WhatsApp for Site Visit
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dwffrfajl/image/upload/v1776688571/Kids_Party_Venue_Gurugram_Gurgaon_South_Delhi_lsq4hu.svg"
                alt="Themed kids party venue and catering setup in Gurgaon"
                className="w-full rounded-[1.5rem] border-4 border-[#333333] shadow-[6px_6px_0px_#F26522]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333] space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">Kids Party House in Gurgaon</h2>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            The venue features a spacious, air-conditioned indoor party area paired with a beautiful open-air extension. This
            unique combination gives you complete freedom to design the party exactly the way you envision it - whether you want
            a fully indoor themed celebration or a mix of indoor games with outdoor fun.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            What truly sets our Kids Party House apart is that we are not a typical play zone or commercial party hall. We are a
            blank-canvas, fully customizable party space where parents and planners can bring their child&apos;s dream theme to life
            - be it Frozen, Superhero, Unicorn, Roblox, Dinosaur, Peppa Pig, or any other creative idea.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 pt-2">
            {[
              'A clean, safe, and hygienic environment specially curated for children',
              'Enough space for kids to move around, play, dance, and enjoy without feeling cramped',
              'Excellent natural light and photography-friendly corners',
              'Easy access to both indoor seating and outdoor extension for games or live counters',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border-2 border-[#333333] bg-[#FFF9F2] p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#333333] bg-[#FFCB05] font-black text-[#333333]">
                  ✓
                </span>
                <p className="font-bold text-sm sm:text-base text-[#333333]">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Combined with our signature in-house kids catering, the venue becomes a complete one-stop solution. No need to run
            between decorators, caterers, and venue managers - everything is handled seamlessly under one roof.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-black text-[#333333] leading-relaxed">
            Whether you&apos;re planning an intimate celebration for 25-30 kids or a vibrant party for up to 100 guests, our Kids
            Party House in DLF Phase-1, Gurgaon offers the perfect setting to create unforgettable memories.
          </p>
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <div className="text-center px-4 sm:px-6 mb-3 md:mb-6">
        </div>
        <GalleryComponent category="venue" />
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
              What Makes Little Jalebis Kids Party House <span className="text-[#F26522]">Special?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {specialPoints.map((point) => (
              <article key={point} className="rounded-[1.5rem] border-4 border-[#333333] bg-white p-5 md:p-6 shadow-[6px_6px_0px_#FFCB05]">
                <p className="font-bold text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed">{point}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 md:mt-8 rounded-[1.5rem] border-4 border-[#333333] bg-white p-5 md:p-6 shadow-[6px_6px_0px_#F26522]">
            <h3 className="text-xl md:text-2xl font-black text-[#333333]">More Services</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link
                href="/services/kids-party-catering"
                className="inline-flex items-center gap-1 rounded-full border-2 border-[#333333] bg-[#F26522] px-3 py-1.5 text-xs sm:text-sm font-black text-white shadow-[3px_3px_0px_#333333] hover:-translate-y-0.5 hover:bg-[#FFCB05] hover:text-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 transition-all"
              >
                Kids Party Catering Services
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/services/food-boxes"
                className="inline-flex items-center gap-1 rounded-full border-2 border-[#333333] bg-[#F26522] px-3 py-1.5 text-xs sm:text-sm font-black text-white shadow-[3px_3px_0px_#333333] hover:-translate-y-0.5 hover:bg-[#FFCB05] hover:text-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 transition-all"
              >
                Kids Food Boxes
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 rounded-full border-2 border-[#333333] bg-[#F26522] px-3 py-1.5 text-xs sm:text-sm font-black text-white shadow-[3px_3px_0px_#333333] hover:-translate-y-0.5 hover:bg-[#FFCB05] hover:text-[#333333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333333] focus-visible:ring-offset-2 transition-all"
              >
                Explore All Services
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333] space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
            Why Parents Choose Our Kids Party Venue in Gurgaon
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Planning a kids birthday party at home often sounds simple - but in reality, it comes with space constraints, heavy
            setup work, and a lot of post-party cleanup.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            That&apos;s why more and more parents in Gurgaon are choosing a dedicated kids party venue in Gurgaon that offers both
            beautiful space and excellent catering under one roof.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">At Little Jalebis Kids Party House, you get:</p>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'A spacious, well-designed venue made specifically for kids\' celebrations',
              'Complete freedom to theme the space as per your child\'s choice',
              'In-house catering with fun, delicious menus that children actually love',
              'Professional setup, service, and cleanup - so you can relax and enjoy the party',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border-2 border-[#333333] bg-[#FFF9F2] p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#333333] bg-[#FFCB05] font-black text-[#333333]">
                  ✓
                </span>
                <p className="font-bold text-sm sm:text-base text-[#333333]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333]">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">Our Kids Party Venue Features</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-3 md:gap-4">
            {venueFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl border-2 border-[#333333] bg-[#FFF9F2] p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#333333] bg-[#FFCB05] font-black text-[#333333]">
                  ✓
                </span>
                <p className="font-bold text-sm sm:text-base text-[#333333]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-2 md:mt-6">
        <LocationSection location={SERVICES.venue.location} />
      </div>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333]">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">Perfect Venue + Catering Combo</h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            The biggest advantage of booking Little Jalebis is that you get both - a beautiful kids party venue in Gurgaon and
            our signature kids-centric catering together.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            No need to coordinate multiple vendors. Everything is handled by one team:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3 md:gap-4">
            {comboPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border-2 border-[#333333] bg-[#FFF9F2] p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#333333] bg-[#FFCB05] font-black text-[#333333]">
                  ✓
                </span>
                <p className="font-bold text-sm sm:text-base text-[#333333]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 md:mt-10">
        <Testimonials />
      </div>

      <div className="mt-8 md:mt-10">
        <Faq faqs={faqs} title="Frequently Asked Questions" />
      </div>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] bg-white p-6 md:p-12 text-center shadow-[8px_8px_0px_#FFCB05] md:shadow-[10px_10px_0px_#FFCB05]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight">
            Ready to Book the Best Kids Party Venue in Gurgaon?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Share your date, guest count, and party theme. Our team will help you lock the perfect venue + catering plan with a
            smooth, stress-free setup.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Book Your Party Today
            </Link>
            <a
              href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis!%20I%20would%20like%20to%20book%20the%20Kids%20Party%20Venue%20in%20Gurgaon."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-[#333333] font-bold text-[#333333] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Contact On WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
