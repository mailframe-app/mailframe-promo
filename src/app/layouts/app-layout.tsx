import { Montserrat } from 'next/font/google'

import { LightRays } from '@/shared/ui'

import '../styles/globals.css'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin']
})

export default function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className={`${montserrat.variable} antialiased`}>
			<div className='mx-auto'>
				<LightRays />
				<Header />
				<div className='bg-background flex min-h-screen flex-col items-center'>
					{children}
				</div>
				<Footer />
			</div>
		</main>
	)
}
