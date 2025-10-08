'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

import { EXTERNAL_LINKS } from '@/shared/constants'

export function CtaSection() {
	return (
		<section className='w-full py-16 md:py-20 lg:py-24'>
			<div className='mx-auto flex w-full max-w-4xl flex-col items-center px-5 md:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center'
				>
					{/* Main heading */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='mb-6 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl lg:text-5xl dark:text-neutral-100'
					>
						Универсальная платформа для быстрого достижения ваших целей
					</motion.h2>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='mx-auto mb-8 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400'
					>
						Вы сможете легко делать e-mail рассылки по вашей базе клиентов,
						создавать шаблоны и оформлять письма, вести статистику доставки.
						Попробуйте, чтобы оценить эффективность и качество доставки!
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='flex flex-col items-center justify-center gap-4 sm:flex-row'
					>
						<Link href={EXTERNAL_LINKS.DEMO} target='_blank'>
							<button className='w-60 transform rounded-lg bg-[#0078d2] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0091ff] dark:bg-white dark:text-black dark:hover:bg-gray-200'>
								Попробовать
							</button>
						</Link>
						<Link href={EXTERNAL_LINKS.DOCS} target='_blank'>
							<button className='w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-none dark:bg-[#0078d2] dark:text-white dark:hover:bg-[#0091ff]'>
								Документация
							</button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
