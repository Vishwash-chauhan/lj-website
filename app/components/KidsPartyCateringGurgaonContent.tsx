import Link from 'next/link'

import CateringProcess from './CateringProcess'
import Faq, { type FAQItem } from './Faq'
import Testimonials from './Testimonials'

const faqs: FAQItem[] = [
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
    answer:
      'We recommend booking at least 5-10 days in advance, especially on weekends.',
  },
  {
    question: 'Do you offer live food counters?',
    answer:
      'Yes, we offer various live food counters like Waffle Station, Churros Station, Mini Pancakes, Chocolate Fountain and many more.',
  },
]

const whyChoosePoints = [
  'Kid-Approved Menus: Fun portions, playful names, and flavors that are loved by children of all ages and adults alike.',
  'Hygienic & Fresh: Prepared fresh on the day with strict hygiene standards.',
  'Customizable Options: Veg & Non-veg | Themed presentations | Dietary preferences.',
  'Full Service: Setup, live counters, service staff & cleanup included.',
]

const services = [
  'Home Birthday Party Catering',
  'Kids Party Venue and Catering',
  'Themed Birthday Parties with Live Food Stations',
  'Pool Parties & Indoor Playdate Catering',
  'School Events, Picnics & Food Boxes',
]

const locationTags = [
  'DLF Phase 1',
  'Golf Course Road',
  'Sushant Lok',
  'Sector 56',
  'Sector 62',
  'Sector 50',
  'Sector 78',
  'And more across Gurgaon',
]

export default function KidsPartyCateringGurgaonContent() {
  return (
    <div className="bg-[#FFF9F2] pt-20 md:pt-24 pb-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <section className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] bg-white p-6 md:p-12 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                Gurgaon Special
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
                Kids Party Catering in Gurgaon - Fun, Hygienic Food Kids Love
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                Planning a kids birthday party in Gurgaon is exciting, but the food often becomes the biggest worry. Will the
                children actually eat? Will it be hygienic? Will parents enjoy it too?
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                At Little Jalebis, we solve this completely. As India&apos;s first kids-centric catering brand, we specialize in
                kids party catering in Gurgaon with playful menus designed for both kids and adults.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="cta-button">
                  Book Birthday Catering
                </Link>
                <Link
                  href="/menu"
                  className="px-6 py-3 rounded-lg border-2 border-[#333333] font-bold text-[#333333] hover:bg-[#FFCB05] transition-colors"
                >
                  View Menu
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://placehold.co/900x620/FFEFD8/333333?text=Kids+Party+Catering+Setup"
                alt="Kids party catering setup in Gurgaon"
                className="w-full rounded-[1.5rem] border-4 border-[#333333] shadow-[6px_6px_0px_#F26522]"
              />
              <img
                src="https://placehold.co/900x400/FFF6E9/333333?text=Live+Food+Counter+Placeholder"
                alt="Live food counter for kids party"
                className="w-full rounded-[1.2rem] border-4 border-[#333333]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333]">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">
            Birthday Catering That Kids Actually Finish
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Planning a kids birthday party in Gurgaon is exciting, but the food often becomes the biggest worry. At Little
            Jalebis, we solve this completely with playful menus loved by children of all ages and adults as well.
            <Link href="/menu" className="ml-1 font-black text-[#F26522] underline decoration-2 underline-offset-2">
              Check out our menu here.
            </Link>
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Our food is freshly prepared on the day of the event with strict hygiene standards. We focus on kid-friendly
            portions, fun presentations, and flavors that children genuinely enjoy (no more half-eaten plates or wasted food).
            From crispy fries and cheesy nuggets to mini pizzas and pasta, every dish is crafted to bring smiles and empty
            plates.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Whether you&apos;re hosting a small home playdate, a grand themed birthday party, a pool party, or a school event, we
            bring everything right to your doorstep or venue.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Whether you&apos;re hosting at home in DLF Phase 1, Golf Course Road, Sushant Lok, Sector 56, or anywhere across
            Gurgaon, we bring fresh, delicious, and beautifully presented food right to your doorstep. No more boring buffets
            or wasted food - just smiles, empty plates, and happy memories.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            We are a trusted provider of kids party catering in Gurgaon for all celebrations.
          </p>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-black text-[#333333] leading-relaxed">
            Ready to make your child&apos;s birthday the talk of Gurgaon? Let&apos;s plan it together.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
              Why Choose Little Jalebis for <span className="text-[#F26522]">Kids Party Catering in Gurgaon?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {whyChoosePoints.map((point) => (
              <article
                key={point}
                className="rounded-[1.5rem] border-4 border-[#333333] bg-white p-5 md:p-6 shadow-[6px_6px_0px_#FFCB05]"
              >
                <p className="font-bold text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed">{point}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 md:mt-8 rounded-[1.5rem] border-4 border-[#333333] bg-[#FFF0DD] p-5 md:p-6 shadow-[6px_6px_0px_#F26522]">
            <p className="text-lg md:text-2xl font-black text-[#333333]">Locations: Serving all across Gurugram</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {locationTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-[#333333] bg-white px-3 py-1.5 text-xs sm:text-sm font-black text-[#333333]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333]">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
            Our Kids Party Catering Services in Gurgaon
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-3 md:gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-xl border-2 border-[#333333] bg-[#FFF9F2] p-4"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#333333] bg-[#FFCB05] font-black text-[#333333]">
                  ✓
                </span>
                <p className="font-bold text-sm sm:text-base text-[#333333]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 md:mt-14">
        <CateringProcess />
      </div>

      <div className="mt-8 md:mt-10">
        <Testimonials />
      </div>

      <div className="mt-8 md:mt-10">
        <Faq faqs={faqs} title="Frequently Asked Questions" />
      </div>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] bg-white p-6 md:p-12 text-center shadow-[8px_8px_0px_#FFCB05] md:shadow-[10px_10px_0px_#FFCB05]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight">
            Ready to Plan the Most-Loved Kids Party Catering in Gurgaon?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Share your date, location, and guest count. We&apos;ll help you with a kid-approved menu, smooth setup, and stress-free
            execution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Get a Quote
            </Link>
            <a
              href="https://wa.me/918130964374?text=Hi%20Little%20Jalebis!%20I%27d%20like%20to%20book%20kids%20party%20catering%20in%20Gurgaon."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-[#333333] font-bold text-[#333333] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
