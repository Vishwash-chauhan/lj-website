import type { Metadata } from 'next'
import CollaborationPage from '../components/CollaborationPage'
import Footer from '../components/Footer'

export const metadata: Metadata = {
	title: 'School & Venue Collaboration | Little Jalebis',
	description:
		'Partner with Little Jalebis for premium kids catering. Collaborate with us for school events, party venues, and special occasions across Delhi NCR.',
}

export default function Collaboration() {
	return (
		<>
			<CollaborationPage />
			<Footer />
		</>
	)
}
