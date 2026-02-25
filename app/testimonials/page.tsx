import Testimonials from '../components/Testimonials';
import CoreValues from '../components/CoreValues';
import FinalCall from '../components/FinalCall';
import LiveCateringGallery from '../components/LiveCateringGallery';
import LiveCateringCarousel from '../components/LiveCateringGallery';

export default function TestimonialsPage() {
  return (
    <main>
      <Testimonials />
      <LiveCateringCarousel />
      <FinalCall />
    </main>
  );
}
