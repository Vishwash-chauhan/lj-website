import Testimonials from '../components/Testimonials';
import CoreValues from '../components/CoreValues';
import FinalCall from '../components/FinalCall';
import LiveCateringGallery from '../components/LiveCateringGallery';
import LiveCateringCarousel from '../components/LiveCateringGallery';
import InstagramLink from '../components/InstagramLink';

export default function TestimonialsPage() {
  return (
    <main>
      <Testimonials />
      <LiveCateringCarousel />
      <FinalCall />
      <section className="px-4 sm:px-6 pb-12 md:pb-16 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
        <div className="max-w-6xl mx-auto">
          <InstagramLink />
        </div>
      </section>
    </main>
  );
}
