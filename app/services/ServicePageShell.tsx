import React from 'react'

import InstagramLink from '../components/InstagramLink'
import ServicesClient from './ServicesClient'
import type { ServiceKey } from './serviceData'

interface ServicePageShellProps {
  serviceKey: ServiceKey
}

export default function ServicePageShell({ serviceKey }: ServicePageShellProps) {
  return (
    <>
      <React.Suspense fallback={<div />}>
        <ServicesClient serviceKey={serviceKey} />
      </React.Suspense>
      <section
        className="px-4 sm:px-6 pb-12 md:pb-16 bg-[#FFF9F2]"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <div className="max-w-6xl mx-auto">
          <InstagramLink />
        </div>
      </section>
    </>
  )
}