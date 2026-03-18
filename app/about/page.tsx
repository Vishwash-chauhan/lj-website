import AboutUs from '../components/AboutUs'
import AwardsRecognition from '../components/AwardsRecognition'
import CoreValues from '../components/CoreValues'
import InstagramLink from '../components/InstagramLink'

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

