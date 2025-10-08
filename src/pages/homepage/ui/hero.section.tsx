'use client'

import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { EXTERNAL_LINKS } from '@/shared/constants'
import { AnimatedTabs, Safari } from '@/shared/ui'

const tabs = [
	{ id: 'dashboard', label: 'Дашборд' },
	{ id: 'contacts', label: 'Контакты' },
	{ id: 'templates', label: 'Шаблоны' },
	{ id: 'editor', label: 'Редактор' },
	{ id: 'emails', label: 'Рассылки' },
	{ id: 'analytics', label: 'Аналитика' }
]

export default function HeroSection() {
	const { theme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const [activeTab, setActiveTab] = useState(tabs[0].id)

	// Избегаем гидратации мисматча
	useEffect(() => {
		setMounted(true)
	}, [])

	// Определяем, какое изображение показать
	const getImageSrc = () => {
		if (!mounted) return '/assets/hero/hero-main-light.webp' // Default for SSR
		const themeSuffix = (resolvedTheme || theme) === 'dark' ? 'dark' : 'light'

		switch (activeTab) {
			case 'dashboard':
				return `/assets/hero/hero-main-${themeSuffix}.webp`
			case 'contacts':
				return `/assets/hero/hero-contacts-${themeSuffix}.webp`
			case 'templates':
				return `/assets/hero/hero-templates-${themeSuffix}.webp`
			case 'emails':
				return `/assets/hero/hero-emails-${themeSuffix}.webp`
			case 'analytics':
				return `/assets/hero/hero-analytics-${themeSuffix}.webp`
			case 'editor':
				return `/assets/hero/hero-editor-${themeSuffix}.webp`
			default:
				return `/assets/hero/hero-main-${themeSuffix}.webp`
		}
	}

	// Определяем, какой URL показать
	const getUrl = () => {
		if (!mounted) return 'https://app.mailframe.ru/dashboard' // Default for SSR

		switch (activeTab) {
			case 'dashboard':
				return 'https://app.mailframe.ru/dashboard'
			case 'contacts':
				return 'https://app.mailframe.ru/contacts'
			case 'templates':
				return 'https://app.mailframe.ru/templates'
			case 'editor':
				return 'https://app.mailframe.ru/editor'
			case 'emails':
				return 'https://app.mailframe.ru/campaigns'
			case 'analytics':
				return 'https://app.mailframe.ru/analytics'
			default:
				return 'https://app.mailframe.ru/dashboard'
		}
	}

	return (
		<div className='relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center select-none'>
			<div className='px-4 py-6 md:py-12'>
				<h1 className='text-white-gradient relative z-10 mx-auto block w-full max-w-2xl py-1 text-center text-3xl !leading-[1.1] font-bold text-neutral-700 sm:text-4xl md:max-w-7xl md:text-5xl lg:text-[65px] dark:text-neutral-100'>
					{'Просто. Быстро. Эффективно. Email-рассылки'
						.split(' ')
						.map((word, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
								animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
								transition={{
									duration: 0.3,
									delay: index * 0.1,
									ease: 'easeInOut'
								}}
								className={`mr-2 inline-block ${index === 3 ? 'text-[#0078d2]' : ''}`}
							>
								{word}
							</motion.span>
						))}
				</h1>
				<motion.p
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					transition={{
						duration: 0.3,
						delay: 0.8
					}}
					className='relative z-10 mx-auto mt-6 mb-2 max-w-3xl text-center !leading-[1.4] text-neutral-600 sm:text-base md:text-base lg:text-lg dark:text-neutral-400'
				>
					Полнофункциональная платформа для email-маркетинга с установкой на
					свою инфраструктуру. Конструктор писем, аналитика, автоматизация - всё
					под вашим полным контролем.
				</motion.p>
				<motion.div
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					transition={{
						duration: 0.3,
						delay: 1
					}}
					className='relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4'
				>
					<Link href={EXTERNAL_LINKS.DEMO} target='_blank'>
						<button className='flex h-[45px] w-full transform cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0078d2] px-10 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0091ff] sm:h-[56px] sm:w-auto sm:px-12'>
							Попробовать
						</button>
					</Link>
					<Link href={EXTERNAL_LINKS.DOCS} target='_blank'>
						<button className='h-[45px] w-full transform cursor-pointer rounded-md border border-gray-300 bg-white px-10 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:h-[56px] sm:w-auto sm:px-12'>
							Документация
						</button>
					</Link>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					transition={{
						duration: 0.3,
						delay: 1
					}}
					className='relative z-10 flex justify-center'
				>
					<AnimatedTabs
						tabs={tabs}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						y: 10
					}}
					animate={{
						opacity: 1,
						y: 0
					}}
					transition={{
						duration: 0.3,
						delay: 1.2
					}}
					className='relative z-10 w-full rounded-xl border border-neutral-200 bg-neutral-100 p-1 shadow-md lg:w-[1203px] dark:border-neutral-800 dark:bg-neutral-900'
				>
					<Safari url={getUrl()} imageSrc={getImageSrc()} />
				</motion.div>
			</div>
		</div>
	)
}
