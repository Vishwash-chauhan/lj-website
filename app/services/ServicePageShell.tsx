import React from 'react'

import ServicesClient from './ServicesClient'
import type { ServiceKey } from './serviceData'

interface ServicePageShellProps {
  serviceKey: ServiceKey
}

export default function ServicePageShell({ serviceKey }: ServicePageShellProps) {
  return (
    <React.Suspense fallback={<div />}>
      <ServicesClient serviceKey={serviceKey} />
    </React.Suspense>
  )
}