import Testimonials from '../components/Testimonials';
import TestimonialsHeader from '../components/TestimonialsHeader';
import FinalCall from '../components/FinalCall';
import LiveCateringCarousel from '../components/LiveCateringGallery';
import TestimonialsInstagramSection from '../components/TestimonialsInstagramSection';

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHeader />
      <Testimonials />
      <LiveCateringCarousel />
      <FinalCall />
      <TestimonialsInstagramSection />
    </main>
  );
}
