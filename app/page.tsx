import Hero from './components/Hero'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-[#FFF9F2] pt-8 md:pt-12">
        <Footer />
      </section>
    </>
  )
}
