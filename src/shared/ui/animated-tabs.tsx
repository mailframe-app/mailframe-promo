'use client'

import { motion } from 'motion/react'

type Tab = {
	id: string
	label: string
}

type AnimatedTabsProps = {
	tabs: Tab[]
	activeTab: string
	setActiveTab: (id: string) => void
	className?: string
}

export function AnimatedTabs({
	tabs,
	activeTab,
	setActiveTab,
	className
}: AnimatedTabsProps) {
	return (
		<div
			className={`mt-10 mb-4 flex flex-wrap justify-center gap-1 sm:justify-start sm:gap-2 md:mt-20 ${className}`}
		>
			{tabs.map(tab => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className={`relative cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition focus-visible:outline-2 sm:px-5 sm:py-2 sm:text-sm ${
						activeTab === tab.id
							? 'text-black dark:text-white'
							: 'text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
					}`}
					style={{
						WebkitTapHighlightColor: 'transparent'
					}}
				>
					{activeTab === tab.id && (
						<motion.span
							layoutId='bubble'
							className='absolute inset-0 z-0 rounded-lg bg-transparent shadow-md ring-1 ring-stone-300 dark:ring-1 dark:ring-stone-400'
							transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
						/>
					)}
					<span className='relative z-10'>{tab.label}</span>
				</button>
			))}
		</div>
	)
}
