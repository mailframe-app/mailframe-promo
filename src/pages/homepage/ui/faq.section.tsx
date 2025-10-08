'use client'

import { motion } from 'motion/react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui/accordion'

import { faqData } from '../components/faq.data'

export function FaqSection() {
	return (
		<section id='faq' className='relative z-10 w-full py-12 md:py-16 lg:py-24'>
			<div className='mx-auto flex w-full max-w-7xl flex-col gap-y-5 px-5 md:px-8'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-bold mx-auto w-fit text-center text-xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-neutral-100'
				>
					Часто задаваемые вопросы
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Accordion type='single' collapsible className='w-full'>
						{faqData.map((item, index) => (
							<motion.div
								key={item.question}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<AccordionItem value={item.question}>
									<AccordionTrigger className='text-left text-lg hover:no-underline'>
										{item.question}
									</AccordionTrigger>
									<AccordionContent className='text-base'>
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	)
}
