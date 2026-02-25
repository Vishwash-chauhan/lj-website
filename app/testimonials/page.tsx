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
      {/* <InstagramLink /> */}
    </main>
  );
}
