import React from 'react'

const ServicesPage = async () => {
  const ServicesClient = (await import('./ServicesClient')).default

  return (
    <React.Suspense fallback={<div />}>
      <ServicesClient />
    </React.Suspense>
  )
}

export default ServicesPage