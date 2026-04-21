import type { Metadata } from 'next';
import Testimonials from '../components/Testimonials';
import TestimonialsHeader from '../components/TestimonialsHeader';
import FinalCall from '../components/FinalCall';
import LiveCateringCarousel from '../components/LiveCateringGallery';
import TestimonialsInstagramSection from '../components/TestimonialsInstagramSection';

export const metadata: Metadata = {
  title: 'Kids Party Catering Reviews | Little Jalebis',
  description:
    'Read real reviews of Little Jalebis kids party catering. Trusted for fun, quality food & hassle-free birthday services. Book now with full confidence today.',
};

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
