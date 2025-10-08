import { motion } from 'motion/react'

import { Card } from '@/shared/ui/card'

import { features } from './features.grid'

export function FeatureCard({
	feature,
	index
}: {
	feature: (typeof features)[0]
	index: number
}) {
	return (
		<Card
			className={`group bg-background isolate flex flex-col justify-between overflow-hidden rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-[#21272b] ${feature.colSpan}`}
		>
			<div className='h-32 p-6 pb-3'>
				<motion.h3
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					className='text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100'
				>
					{feature.title}
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
					className='mt-2 max-w-md text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400'
				>
					{feature.description}
				</motion.p>
			</div>

			<div className='relative h-full w-full overflow-hidden'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
				>
					{feature.content}
				</motion.div>
			</div>
		</Card>
	)
}
