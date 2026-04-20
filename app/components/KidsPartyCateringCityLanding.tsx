import Link from 'next/link'

import CateringProcess from './CateringProcess'
import Faq, { type FAQItem } from './Faq'
import GalleryComponent from './GalleryComponent'
import Testimonials from './Testimonials'

export interface KidsPartyCateringCityConfig {
  cityName: string
  badgeLabel: string
  h1: string
  introParagraphs: string[]
  heroImage: {
    src: string
    alt: string
  }
  mainHeading: string
  mainParagraphs: string[]
  menuLinkLine?: {
    preText?: string
    linkText: string
    postText?: string
  }
  whyChoosePoints: string[]
  whyChooseHeadingHighlight: string
  locationsHeading: string
  locationTags: string[]
  servicesHeading: string
  services: string[]
  faqs: FAQItem[]
  finalHeading: string
  whatsappMessage: string
}

interface KidsPartyCateringCityLandingProps {
  config: KidsPartyCateringCityConfig
}

export default function KidsPartyCateringCityLanding({ config }: KidsPartyCateringCityLandingProps) {
  const whatsappUrl = `https://wa.me/918130964374?text=${encodeURIComponent(config.whatsappMessage)}`

  return (
    <div className="bg-[#FFF9F2] pt-20 md:pt-24 pb-12" style={{ fontFamily: "'Comic Neue', cursive" }}>
      <section className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] bg-white p-6 md:p-12 shadow-[8px_8px_0px_#FFCB05] md:shadow-[12px_12px_0px_#FFCB05]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <span className="inline-block bg-[#F26522] text-white px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#333333]">
                {config.badgeLabel}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">{config.h1}</h1>

              {config.introParagraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}

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

            <div>
              <img
                src={config.heroImage.src}
                alt={config.heroImage.alt}
                className="w-full rounded-[1.5rem] border-4 border-[#333333] shadow-[6px_6px_0px_#F26522]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto rounded-[2rem] border-4 border-[#333333] bg-white p-6 md:p-10 shadow-[7px_7px_0px_#333333]">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#333333] leading-tight">{config.mainHeading}</h2>

          {config.mainParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {config.menuLinkLine && (
            <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
              {config.menuLinkLine.preText}
              {config.menuLinkLine.preText ? ' ' : ''}
              <Link href="/menu" className="font-black text-[#F26522] underline decoration-2 underline-offset-2">
                {config.menuLinkLine.linkText}
              </Link>
              {config.menuLinkLine.postText ? ` ${config.menuLinkLine.postText}` : ''}
            </p>
          )}
        </div>
      </section>

      <div className="mt-8 md:mt-10">
        <GalleryComponent category="catering" />
      </div>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">
              Why Choose Little Jalebis for <span className="text-[#F26522]">{config.whyChooseHeadingHighlight}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {config.whyChoosePoints.map((point) => (
              <article
                key={point}
                className="rounded-[1.5rem] border-4 border-[#333333] bg-white p-5 md:p-6 shadow-[6px_6px_0px_#FFCB05]"
              >
                <p className="font-bold text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed">{point}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 md:mt-8 rounded-[1.5rem] border-4 border-[#333333] bg-[#FFF0DD] p-5 md:p-6 shadow-[6px_6px_0px_#F26522]">
            <p className="text-lg md:text-2xl font-black text-[#333333]">{config.locationsHeading}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {config.locationTags.map((tag) => (
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#333333] leading-tight">{config.servicesHeading}</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-3 md:gap-4">
            {config.services.map((service) => (
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
        <Faq faqs={config.faqs} title="Frequently Asked Questions" />
      </div>

      <section className="px-4 sm:px-6 mt-10 md:mt-14">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] border-4 border-[#333333] bg-white p-6 md:p-12 text-center shadow-[8px_8px_0px_#FFCB05] md:shadow-[10px_10px_0px_#FFCB05]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#333333] leading-tight">{config.finalHeading}</h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-bold text-[#333333]/80 leading-relaxed">
            Share your date, location, and guest count. We&apos;ll help you with a kid-approved menu, smooth setup, and stress-free
            execution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button">
              Get a Quote
            </Link>
            <a
              href={whatsappUrl}
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
