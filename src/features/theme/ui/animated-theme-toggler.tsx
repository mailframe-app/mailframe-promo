'use client'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

import { cn } from '@/shared/lib/utils'

import { MoonRisingLoop, SunRisingLoop } from '../icons'

type Props = {
	className?: string
}

export const AnimatedThemeToggler = ({ className }: Props) => {
	const { theme, setTheme, resolvedTheme } = useTheme()
	const buttonRef = useRef<HTMLButtonElement>(null)
	const [mounted, setMounted] = useState(false)

	// Определяем текущую тему
	const currentTheme = resolvedTheme ?? theme
	const isDark = currentTheme === 'dark'

	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleTheme = useCallback(async () => {
		if (!buttonRef.current || !mounted) return

		const newTheme = isDark ? 'light' : 'dark'

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme)
			})
		}).ready

		// Анимация view transition
		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect()
		const x = left + width / 2
		const y = top + height / 2
		const maxRadius = Math.hypot(
			Math.max(left, window.innerWidth - left),
			Math.max(top, window.innerHeight - top)
		)

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRadius}px at ${x}px ${y}px)`
				]
			},
			{
				duration: 700,
				easing: 'ease-in-out',
				pseudoElement: '::view-transition-new(root)'
			}
		)
	}, [isDark, setTheme, mounted])

	// Не рендерим на сервере, только на клиенте после монтирования
	if (!mounted) {
		return (
			<button
				className={cn(
					className,
					'inline-flex h-10 w-10 items-center justify-center rounded-full',
					'cursor-pointer',
					'text-secondary-foreground',
					'hover:bg-accent hover:text-accent-foreground transition-colors',
					'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
					'ring-offset-background'
				)}
			>
				{/* Placeholder icon */}
				<div className='h-4 w-4 rounded-sm bg-current opacity-50'></div>
			</button>
		)
	}

	return (
		<button
			ref={buttonRef}
			onClick={toggleTheme}
			className={cn(
				className,
				'inline-flex h-10 w-10 items-center justify-center rounded-full',
				'cursor-pointer',
				'text-secondary-foreground',
				'hover:bg-accent hover:text-accent-foreground transition-colors',
				'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
				'ring-offset-background'
			)}
		>
			{isDark ? (
				<MoonRisingLoop className='h-4 w-4' />
			) : (
				<SunRisingLoop className='h-4 w-4' />
			)}
		</button>
	)
}
