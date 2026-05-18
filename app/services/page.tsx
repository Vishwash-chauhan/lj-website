import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { SERVICE_KEY_BY_LEGACY_TAB, SERVICE_KEYS, SERVICES, getServicePath } from './serviceData'

interface ServicesPageProps {
  searchParams?: Promise<{
    tab?: string | string[]
  }>
}

export const metadata: Metadata = {
  title: 'Our Services | Little Jalebis',
  description:
    'Explore kids party catering, our kids party house, and fun food boxes in Gurgaon and Delhi NCR with Little Jalebis.',
  alternates: {
    canonical: 'https://littlejalebis.com/services',
  },
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = searchParams ? await searchParams : undefined
  const requestedTab = Array.isArray(params?.tab) ? params?.tab[0] : params?.tab
  const serviceKey = requestedTab ? SERVICE_KEY_BY_LEGACY_TAB[requestedTab] : undefined

  if (serviceKey) {
    redirect(getServicePath(serviceKey))
  }

  return (
    <main className="min-h-screen bg-[#FFF9F2] px-4 pb-12 pt-24 sm:px-6 md:px-12 md:pt-28">
      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F26522]">Little Jalebis</p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-[#333333] sm:text-5xl md:text-7xl">
          Services for joyful kids parties
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base font-bold text-[#333333]/80 sm:text-lg md:text-xl">
          From in-house catering to our dedicated party house and ready-to-order food boxes, pick what fits your celebration.
        </p>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 md:mt-14 md:grid-cols-3">
        {SERVICE_KEYS.map((key) => {
          const service = SERVICES[key]

          return (
            <article
              key={key}
              className="group rounded-3xl border-2 border-[#333333] bg-white p-6 shadow-[6px_6px_0px_#333333] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="mb-5 inline-flex rounded-full border-2 border-[#333333] px-4 py-2 text-xs font-black uppercase tracking-wide"
                style={{ backgroundColor: service.color, color: key === 'boxes' ? '#FFFFFF' : '#333333' }}
              >
                {service.tabTitle}
              </div>

              <h2 className="text-2xl font-black text-[#333333]">{service.title}</h2>
              <p className="mt-2 text-sm font-bold text-[#333333]/75">{service.tagline}</p>
              <p className="mt-4 text-sm leading-7 text-[#333333]/80 whitespace-pre-line">{service.description}</p>

              <ul className="mt-5 space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="text-sm font-bold text-[#333333]">
                    • {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={getServicePath(key)}
                className="mt-6 inline-flex rounded-xl border-2 border-[#333333] bg-[#F26522] px-5 py-2.5 text-sm font-black text-white shadow-[4px_4px_0px_#333333] transition-all duration-300 hover:bg-[#333333] hover:text-[#FFCB05]"
              >
                Explore {service.title}
              </Link>
            </article>
          )
        })}
      </section>


    </main>
  )
}