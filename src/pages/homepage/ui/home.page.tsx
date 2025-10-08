
import { MetaHead } from '@/shared/ui'

import { BackgroundRippleEffect } from '../components/ui-background'

import { CtaSection } from './cta.section'
import { FaqSection } from './faq.section'
import { FeaturesSection } from './features.section'
import HeroSection from './hero.section'
import { HowItWorksSection } from './how-it-works.section'

export function HomePage() {
	return (
		<>
			<MetaHead
				title='MailFrame'
				description='MailFrame - платформа для создания и управления email-рассылками'
			/>
			<BackgroundRippleEffect />
			<main>
				<HeroSection />
				<HowItWorksSection />
				<FeaturesSection />
				<FaqSection />
				<CtaSection />
			</main>
		</>
	)
}
