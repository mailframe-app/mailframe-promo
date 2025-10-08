'use client'

import { motion } from 'motion/react'

import { Highlighter } from '@/shared/ui'

import { HowItWorksGrid } from '../components/how-it-works.grid'

export function HowItWorksSection() {
	const steps = [
		{
			number: 1,
			title: 'Соберите базу контактов',
			description:
				'Загрузите уже имеющуюся базу подписчиков, подтвердивших желание получать ваши рассылки, в сервис или установите формы подписки на сайте.'
		},
		{
			number: 2,
			title: 'Создайте шаблон письма',
			description:
				'Используйте готовые шаблоны, чтобы ускорить процесс создания рассылки, или создайте шаблон с нуля. В редакторе есть все, чтобы ваши письма были красивыми.'
		},
		{
			number: 3,
			title: 'Отправьте рассылку',
			description:
				'Продумайте тему письма и прехедер. Ведь от них во многом зависит, откроют ли ваше письмо. Отправляйте рассылки, которые сами хотели бы получать.'
		},
		{
			number: 4,
			title: 'Проанализируйте результаты',
			description:
				'Улучшайте результаты с помощью инструментов статистики и аналитики. Анализируйте показатели не только каждой рассылки, но и баз подписчиков, по которым отправляете email-кампании.'
		}
	]

	return (
		<section
			id='services'
			className='mx-auto max-w-7xl py-8 select-none lg:py-18'
		>
			<div className='mx-auto flex w-fit items-center justify-center p-4'>
				<Highlighter action='underline' color='#0078d2'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='text-bold mx-auto w-fit text-center text-xl font-bold tracking-tight text-neutral-800 md:text-4xl dark:text-neutral-100'
					>
						Как это работает?
					</motion.h2>
				</Highlighter>
			</div>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='mx-auto mt-4 max-w-lg text-center text-sm text-neutral-600 dark:text-neutral-400'
			>
				Всего 4 шага для начала работы и получения результатов.
			</motion.p>

			<div className='container mx-auto mt-20'>
				<div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-2'>
					{/* Левая колонка - текст и шаги */}
					<div className='flex flex-col gap-10 px-4'>
						{/* Шаги */}
						<div className='grid grid-cols-1 items-start gap-6'>
							{steps.map((step, index) => (
								<motion.div
									key={step.number}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1
									}}
									className='flex flex-row items-start gap-6'
								>
									{/* Номер в кружке */}
									<div className='bg-primary/10 flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full dark:bg-white/10'>
										<span className='text-primary text-sm font-medium dark:text-white'>
											{step.number}
										</span>
									</div>

									{/* Описание */}
									<div className='flex flex-col gap-1'>
										<h3 className='text-lg font-medium text-neutral-700 dark:text-neutral-100'>
											{step.title}
										</h3>
										<p className='text-base font-normal text-neutral-500 dark:text-neutral-400'>
											{step.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Правая колонка - изображение */}
					<HowItWorksGrid />
				</div>
			</div>
		</section>
	)
}
