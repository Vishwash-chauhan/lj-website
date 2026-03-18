import React from 'react'
import InstagramLink from '../components/InstagramLink'

const ServicesPage = async () => {
  const ServicesClient = (await import('./ServicesClient')).default

  return (
    <>
      <React.Suspense fallback={<div />}>
        <ServicesClient />
      </React.Suspense>
      <section className="px-4 sm:px-6 pb-12 md:pb-16 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          <InstagramLink />
        </div>
      </section>
    </>
  )
}

export default ServicesPage