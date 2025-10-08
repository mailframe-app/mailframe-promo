'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { LayoutGrid } from '@/shared/ui'

export function HowItWorksGrid() {
	const { theme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// Избегаем гидратации мисматча
	useEffect(() => {
		setMounted(true)
	}, [])

	// Определяем суффикс темы
	const getThemeSuffix = () => {
		if (!mounted) return 'light' // Default for SSR
		return (resolvedTheme || theme) === 'dark' ? 'dark' : 'light'
	}

	// Получаем путь к изображению с правильной темой
	const getImageSrc = (baseName: string) => {
		const themeSuffix = getThemeSuffix()
		return `/assets/how-it-work/${baseName}-${themeSuffix}.webp`
	}

	return (
		<div className='h-full w-full hidden lg:flex'>
			<LayoutGrid
				cards={cards.map(card => ({
					...card,
					thumbnail: getImageSrc(card.thumbnail)
				}))}
			/>
		</div>
	)
}

const SkeletonOne = () => {
	return (
		<div>
			<p className='text-xl font-bold text-white md:text-4xl'>
				Добавление контактов
			</p>
			<p className='text-base font-normal text-white'></p>
			<p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
				Удобный и быстрый способ массового добавления контактов в вашу базу.
			</p>
		</div>
	)
}

const SkeletonFour = () => {
	return (
		<div>
			<p className='text-xl font-bold text-white md:text-4xl'>
				Создание шаблона
			</p>
			<p className='text-base font-normal text-white'></p>
			<p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
				Многофункциональный Drag-and-drop редактор для создания
				персонализированных шаблонов писем.
			</p>
		</div>
	)
}
const SkeletonTwo = () => {
	return (
		<div>
			<p className='text-xl font-bold text-white md:text-4xl'>
				Создание рассылки
			</p>
			<p className='text-base font-normal text-white'></p>
			<p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
				Планируйте и отправляйте рассылки в автоматическом режиме.
			</p>
		</div>
	)
}
const SkeletonThree = () => {
	return (
		<div>
			<p className='text-xl font-bold text-white md:text-4xl'>
				Отслеживание статистики
			</p>
			<p className='text-base font-normal text-white'></p>
			<p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
				Получайте детальную статистику по каждой рассылке: процент открытий,
				клики по ссылкам и другие метрики.
			</p>
		</div>
	)
}

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: 'md:col-span-2',
		thumbnail: 'hiw-contacts'
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: 'col-span-1',
		thumbnail: 'hiw-emails'
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: 'col-span-1',
		thumbnail: 'hiw-analytics'
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: 'md:col-span-2',
		thumbnail: 'hiw-editor'
	}
]
