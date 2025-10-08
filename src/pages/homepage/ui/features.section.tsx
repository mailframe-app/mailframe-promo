'use client'

import { motion } from 'motion/react'

import { PointerHighlight } from '@/shared/ui/pointer-highlight'
import { FeatureCard } from '../components/features.card'
import { features } from '../components/features.grid'


export function FeaturesSection() {
	return (
		<section id='features' className='mx-auto w-full max-w-7xl py-8 lg:py-16'>
			{/* Заголовок с Pointer Highlight */}
			<div className='mx-auto flex w-fit items-center justify-center p-4'>
				<PointerHighlight
					rectangleClassName='border border-neutral-300 dark:border-neutral-600'
					pointerClassName='text-[#0078D2]'
					containerClassName='mx-auto'
				>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-bold mx-auto w-fit text-center text-xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-neutral-100'
					>
						Возможности MailFrame
					</motion.h2>
				</PointerHighlight>
			</div>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='mx-auto mt-4 max-w-lg text-center text-sm text-neutral-600 dark:text-neutral-400'
			>
				Всё необходимое для эффективного email-маркетинга в одном месте.
			</motion.p>

			{/* Bento Grid */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className='cols-1 mt-20 grid max-w-7xl gap-4 md:auto-rows-[25rem] md:grid-cols-5'
			>
				{features.map((feature, index) => (
					<FeatureCard key={feature.title} feature={feature} index={index} />
				))}
			</motion.div>
		</section>
	)
}
