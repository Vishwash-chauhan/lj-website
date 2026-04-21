import type { Metadata } from 'next'
import AboutUs from '../components/AboutUs'
import AwardsRecognition from '../components/AwardsRecognition'
import CoreValues from '../components/CoreValues'
import InstagramLink from '../components/InstagramLink'

export const metadata: Metadata = {
	title: 'About Kids Catering Company | Little Jalebis',
	description:
		'Learn about Little Jalebis, a kids catering company in Delhi NCR. Book now for fun menus, creative setups & hassle-free birthday experiences for kids & family.',
}

export default function AboutPage() {
	return (
		<>
			<AboutUs />
			<AwardsRecognition />
			<CoreValues />
			<section className="px-4 sm:px-6 pb-12 md:pb-16 bg-[#FFF9F2]" style={{ fontFamily: "'Comic Neue', cursive" }}>
				<div className="max-w-6xl mx-auto">
					<InstagramLink />
				</div>
			</section>
		</>
	)
}

